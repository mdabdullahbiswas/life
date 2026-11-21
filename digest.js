/* Hayat — দৈনিক সামারি (পেজের অংশ)।
   দুটি সময় ঠিক করা যায় (কাজের পেজ বা সেটিং থেকে):
   ১ম সময়ে → "আজ এই এই কাজ করতে হবে", ২য় সময়ে → "আজ এখনো এই এই কাজ বাকি"।
   আগের সমস্যা: প্রতি ১ মিনিটে পোল করা হতো (ব্যাকগ্রাউন্ডে ব্রাউজার এটা থামিয়ে দেয়), আর নোটিফিকেশন দেখানো ব্যর্থ হলেও "পাঠানো হয়েছে" ধরে নেওয়া হতো।
   এখন: ঠিক সময়ের জন্য আলাদা টাইমার + ২০ সেকেন্ডের পাহারা + অ্যাপে ফিরলেই পরীক্ষা, দেখানো সফল হলে তবেই "পাঠানো" ধরা হয়,
   আর কাজের তালিকা IndexedDB-তে কপি থাকে যাতে পেজ বন্ধ থাকলেও service worker (sw.js) সময়মতো দেখাতে পারে (ব্রাউজার অনুমতি দিলে)।
   pwa.js নিজে এই ফাইল লোড করে — আলাদা করে যোগ করতে হয় না। */
(function(){
if(window.__hdg)return;window.__hdg=1;
function boot(){
const H=window.HDG;
const DB=()=>new Promise((res,rej)=>{const q=indexedDB.open('hayat-n',1);q.onupgradeneeded=()=>q.result.createObjectStore('kv');q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)});
const dbGet=k=>DB().then(d=>new Promise(res=>{const r=d.transaction('kv').objectStore('kv').get(k);r.onsuccess=()=>res(r.result);r.onerror=()=>res(null)})).catch(()=>null);
const dbPut=(k,v)=>DB().then(d=>new Promise(res=>{const t=d.transaction('kv','readwrite');t.objectStore('kv').put(v,k);t.oncomplete=()=>res(1);t.onerror=()=>res(0)})).catch(()=>0);
const load=()=>{try{const o=JSON.parse(localStorage.getItem('dl')||'{}');return o&&typeof o==='object'?o:{}}catch(e){return{}}};
const lsent=()=>{try{return JSON.parse(localStorage.getItem('dl_dg')||'{}')||{}}catch(e){return{}}};
let idbSent={};
const refreshIdb=()=>dbGet('dgsent').then(v=>{if(v&&typeof v==='object')idbSent=v});

/* service worker-এর জন্য কপি: কাজের তালিকা + আজ/গতকালের সম্পন্ন অবস্থা + সময় */
function mirror(){
  try{
    const o=load(),now=new Date(),y=new Date(now);y.setDate(y.getDate()-1);
    const K=H.key(now),Y=H.key(y),dn=o.done||{},sk=o.skip||{},done={},skip={};
    if(dn[K])done[K]=dn[K];if(dn[Y])done[Y]=dn[Y];if(sk[Y])skip[Y]=sk[Y];
    const tasks=(Array.isArray(o.tasks)?o.tasks:[]).map(t=>({id:t.id,title:t.title,time:t.time,type:t.type,n:t.n,start:t.start}));
    dbPut('dg',{notif:!!o.notif,lang:o.lang==='en'?'en':'bn',dg:o.dg||{},tasks,done,skip,at:Date.now()});
  }catch(e){}}
let mt=0;const mirrorSoon=()=>{clearTimeout(mt);mt=setTimeout(mirror,800)};

/* নোটিফিকেশন দেখানো — সফল হলে true */
async function show(t,opts){
  try{const r=navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&await navigator.serviceWorker.getRegistration();
    if(r){await r.showNotification(t,opts);return true}}catch(e){}
  try{new Notification(t,opts);return true}catch(e){return false}}

function markSent(k,K){
  const s=lsent();s[k]=K;try{localStorage.setItem('dl_dg',JSON.stringify(s))}catch(e){}
  idbSent[k]=K;dbPut('dgsent',Object.assign({},idbSent))}

const inflight={};
/* force=true হলে সময়ের হিসাব ছাড়াই এখনই পাঠায় ("পরীক্ষা" বাটন)। শর্ত না মিললে false ফেরত দেয় */
function run(kind,force){
  try{
    if(!window.Notification||Notification.permission!=='granted')return false;
    const o=load();if(!o.notif)return false;
    const c=H.cfg(o);if(!c.on&&!force)return false;
    const now=new Date(),K=H.key(now),sent=lsent();
    ['am','pm'].forEach(k=>{if(idbSent[k]===K)sent[k]=K});
    const ks=force?(kind?[kind]:['am','pm']):H.plan(o,now,sent).filter(k=>!kind||k===kind);
    ks.forEach(k=>{
      if(inflight[k])return;
      let m=H.build(k,o,now);
      if(!m&&force)m={t:o.lang==='en'?'🔔 Test':'🔔 পরীক্ষা',b:o.lang==='en'?'No tasks today, so there is nothing to list.':'আজ কোনো কাজ নেই, তাই দেখানোর মতো তালিকা নেই।',url:'tasks.html'};
      if(!m){markSent(k,K);return}
      inflight[k]=1;
      show(m.t,{body:m.b,tag:'hayat-digest-'+k,icon:'icon-512.png',badge:'badge-96.png',data:{url:m.url}})
        .then(ok=>{inflight[k]=0;if(ok&&!force)markSent(k,K)});
    });
    return true;
  }catch(e){return false}}

/* ঠিক নির্ধারিত সেকেন্ডে চালানোর টাইমার */
let tm=0;
function schedule(){
  clearTimeout(tm);
  try{
    const c=H.cfg(load());if(!c.on)return;
    const now=new Date(),cur=now.getHours()*3600+now.getMinutes()*60+now.getSeconds();let best=null;
    ['am','pm'].forEach(k=>{const at=H.mins(c[k])*60;if(at>cur&&(best===null||at<best))best=at});
    if(best!==null)tm=setTimeout(()=>{run();schedule()},Math.min((best-cur)*1000+400,2147000000));
  }catch(e){}}

/* পেজ বন্ধ থাকলেও ব্রাউজার মাঝে মাঝে service worker জাগালে সামারি পাঠাতে পারবে (Chrome/Edge-এ ইনস্টল করা অ্যাপে) */
function reg(){
  try{
    if(!navigator.serviceWorker)return;
    navigator.serviceWorker.ready.then(r=>{
      if(!r.periodicSync)return;const o=load();if(!o.notif||!H.cfg(o).on)return;
      r.periodicSync.register('hayat-digest',{minInterval:36e5}).catch(()=>{})}).catch(()=>{});
  }catch(e){}}

/* 'dl' বদলালেই কপি হালনাগাদ ও টাইমার নতুন করে */
const rs=Storage.prototype.setItem;
Storage.prototype.setItem=function(k){const r=rs.apply(this,arguments);if(this===localStorage&&k==='dl'){mirrorSoon();schedule();reg()}return r};
window.addEventListener('hdg',()=>{mirror();refreshIdb().then(()=>{run();schedule();reg()})});

window.hayatDigest=run;
refreshIdb().then(()=>{mirror();run();schedule();reg()});
setInterval(()=>{run()},20000);
const wake=()=>{if(document.hidden)return;refreshIdb().then(()=>{run();schedule()})};
document.addEventListener('visibilitychange',wake);
addEventListener('focus',wake);addEventListener('pageshow',wake);addEventListener('online',wake);
}
if(window.HDG)boot();
else{const s=document.createElement('script');s.src='digest-core.js';s.onload=boot;document.head.appendChild(s)}
})();
