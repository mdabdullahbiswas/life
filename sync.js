/* Hayat — গুগল শিট সিঙ্ক।
   অ্যাপ আগের মতোই localStorage ('dl')-এ চলে। এই ফাইল পেছনে পরিবর্তনগুলো সারি (row) ধরে শিটে পাঠায় ও শিট থেকে আনে।
   - প্রতিটি পেজে pwa.js নিজে এটি লোড করে; settings.html-এ সরাসরিও আছে।
   - একই সারি দুই ডিভাইসে বদলালে যেটা পরে বদলেছে সেটা জেতে (সর্বশেষ পরিবর্তন)।
   - অফলাইনে কিছু হারায় না: শেষ সিঙ্কের সাথে তুলনা করে সংযোগ ফিরলে বদলগুলো পাঠায়।
   - সিঙ্কের URL ও টোকেন আলাদা কী 'dl_sync'-এ থাকে, 'dl'-এ বা শিটে যায় না। */
(function(){
'use strict';
if(window.__hsync)return;window.__hsync=1;
const CK='dl_sync',DK='dl';
/* শুধু এই ডিভাইসের জিনিস — সিঙ্ক হয় না */
const LOCAL={notif:1,url:1,lastBak:1,tn:1,tp:1};
const SKIP={'st/run':1,'st/sel':1,'st/mode':1,'ts/ed':1}; /* ts/ed = তাসবিহ এডিটের সাময়িক অবস্থা, সিঙ্ক হবে না */
/* কোন কী শিটের কোন ট্যাবে যাবে (বাকি সব settings-এ) */
const TABS={tasks:'tasks',done:'tasks',fin:'hisab',inv:'invoice',goal:'hisab',bud:'hisab',hide:'hisab',pr:'namaz',qaza:'namaz',ts:'namaz',
  fast:'roza',rf:'roza',rq:'roza',ho:'roza',loc:'roza',fn:'roza',ram:'roza',bags:'bags',st:'study'};
const tabOf=k=>TABS[k.split(/[\/#]/)[0]]||'settings';

const isObj=v=>!!v&&typeof v==='object'&&!Array.isArray(v);
const esc=s=>String(s).replace(/[%\/#~]/g,c=>'%'+c.charCodeAt(0).toString(16).toUpperCase().padStart(2,'0'));
const unesc=s=>s.replace(/%([0-9A-F]{2})/g,(_,h)=>String.fromCharCode(parseInt(h,16)));
function hs(s){let a=2166136261,b=5381;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);a^=c;a=Math.imul(a,16777619);b=Math.imul(b,33)^c}return (a>>>0).toString(36)+(b>>>0).toString(36)}

/* অ্যারের প্রতিটি অবজেক্টের স্থির নাম: id থাকলে id, নইলে বিষয়বস্তুর হ্যাশ (হিসাবের এন্ট্রিতে id নেই) */
function elKeys(a){const n={};return a.map(e=>{if(!isObj(e))return null;const b=e.id!=null?'i'+esc(e.id):'h'+hs(JSON.stringify(e));n[b]=(n[b]||0)+1;return n[b]>1?b+'~'+n[b]:b})}

/* পুরো ডাটাকে সারিতে ভাঙা: { "পথ": "JSON" } */
function flat(o){
  const R={};
  const walk=(v,p,d,D)=>{
    if(v===undefined||SKIP[p])return;
    if(isObj(v)&&d<D){for(const k in v)walk(v[k],p+'/'+esc(k),d+1,D);return}
    if(Array.isArray(v)&&v.length&&v.every(isObj)){const ks=elKeys(v);v.forEach((e,i)=>{R[p+'#'+ks[i]]=JSON.stringify(e)});return}
    R[p]=JSON.stringify(v)};
  for(const k in o){if(LOCAL[k])continue;walk(o[k],esc(k),0,k==='st'?3:2)}
  return R}

/* একটি সারি লোকাল ডাটায় বসানো/মুছা */
function setRow(o,key,val,del){
  const h=key.indexOf('#'),path=h<0?key:key.slice(0,h),el=h<0?null:key.slice(h+1);
  const sg=path.split('/').map(unesc);let c=o;
  for(let i=0;i<sg.length-1;i++){if(!isObj(c[sg[i]])){if(del)return;c[sg[i]]={}}c=c[sg[i]]}
  const last=sg[sg.length-1];
  if(el===null){if(del)delete c[last];else c[last]=val;return}
  let a=c[last];if(!Array.isArray(a)){if(del)return;a=c[last]=[]}
  const i=elKeys(a).indexOf(el);
  if(del){if(i>=0)a.splice(i,1)}else if(i>=0)a[i]=val;else a.push(val)}

const rawSet=Storage.prototype.setItem;
const cfg=()=>{try{return JSON.parse(localStorage.getItem(CK)||'{}')||{}}catch(e){return{}}};
const put=c=>{try{rawSet.call(localStorage,CK,JSON.stringify(c))}catch(e){}};
const getDL=()=>{try{const o=JSON.parse(localStorage.getItem(DK)||'{}');return isObj(o)?o:{}}catch(e){return{}}};

let busy=0,again=0,timer=0,applying=0;
const fire=()=>{try{window.dispatchEvent(new Event('hsync'))}catch(e){}};
const msg=e=>(e&&e.name==='AbortError')?'সময় শেষ — সার্ভার সাড়া দেয়নি':(e instanceof TypeError)?'সংযোগ হয়নি (ইন্টারনেট বা URL দেখুন)':String(e&&e.message||e);

async function call(c,body){
  body.t=c.token;
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),30000);
  try{
    const r=await fetch(c.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body),signal:ctl.signal});
    const tx=await r.text();let j;
    try{j=JSON.parse(tx)}catch(e){throw new Error('সার্ভার ঠিক উত্তর দেয়নি — URL শেষে /exec আছে? Deploy-এ Access "Anyone" দিয়েছেন?')}
    return j}
  finally{clearTimeout(tm)}}

async function run(c){
  const dl=getDL(),rows=flat(dl);
  let sh=c.sh||{},since=c.since||0,off=c.off||0;
  /* ব্রাউজারের ডাটা মুছে গেলে শিটের ডাটা মুছে ফেলা নয় — উল্টো শিট থেকে ফিরিয়ে আনা */
  if(!Object.keys(dl).length&&Object.keys(sh).length){sh={};since=0}
  const first=!c.init,T=Date.now()+off,cur={},out=[];
  /* প্রথম সিঙ্কে (নতুন ডিভাইস) লোকাল সারি 'খুব পুরনো' ধরা হয়, তাই শিটে আগে থেকে থাকা তথ্য জেতে */
  for(const k in rows){const h=hs(rows[k]);cur[k]=h;if(sh[k]!==h)out.push({k,tab:tabOf(k),v:rows[k],u:first?1:T,d:0})}
  for(const k in sh)if(!(k in rows))out.push({k,tab:tabOf(k),v:'',u:T,d:1});

  const pulled=[],N=Math.max(1,Math.ceil(out.length/400));
  for(let i=0;i<N;i++){
    const j=await call(c,{a:'sync',since,dev:c.dev,rows:out.slice(i*400,i*400+400)});
    if(!j||!j.ok)throw new Error((j&&j.err)||'সার্ভার ত্রুটি');
    since=j.rev;off=j.now-Date.now();pulled.push(...j.rows)}

  /* শিট থেকে আসা বদল লোকালে বসানো */
  const dl2=getDL(),cur2=flat(dl2),nsh=Object.assign({},sh);let changed=0;
  out.forEach(r=>{if(r.d)delete nsh[r.k];else nsh[r.k]=cur[r.k]});
  for(const r of pulled){
    const nowH=r.k in cur2?hs(cur2[r.k]):null,wasH=r.k in cur?cur[r.k]:null;
    if(nowH!==wasH)continue;                         // পাঠানোর সময়ে লোকালে আবার বদলেছে → লোকালটা নতুন, পরের রাউন্ডে যাবে
    if(r.d){if(nowH!==null){setRow(dl2,r.k,null,1);changed=1}delete nsh[r.k];continue}
    let val;try{val=JSON.parse(r.v)}catch(e){continue}   // শিটে হাতে ভুল JSON লিখলে সারিটা এড়িয়ে যাবে
    const cv=JSON.stringify(val),h=hs(cv);
    if(nowH!==h){setRow(dl2,r.k,val,0);changed=1}
    nsh[r.k]=h}
  if(changed){applying=1;try{rawSet.call(localStorage,DK,JSON.stringify(dl2))}finally{applying=0}}
  const c2=cfg();Object.assign(c2,{sh:nsh,since,off,init:1,dev:c.dev});put(c2);
  return{ok:true,changed,pushed:out.length,pulled:pulled.length}}

const typing=()=>{const a=document.activeElement;return !!a&&(/^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName)&&a.type!=='checkbox'&&a.type!=='button'||a.isContentEditable)};
function refresh(){
  if(typing()){setTimeout(refresh,4000);return}
  try{const t=+sessionStorage.getItem('hs_r')||0;if(Date.now()-t<8000){setTimeout(refresh,8000);return}sessionStorage.setItem('hs_r',String(Date.now()))}catch(e){}
  location.reload()}

async function sync(manual){
  let c=cfg();
  if(!c.url||!c.token)return{ok:false,err:'URL বা টোকেন দেওয়া হয়নি'};
  if(busy){again=1;return{ok:false,err:'আগের সিঙ্ক চলছে'}}
  if(!manual&&navigator.onLine===false)return{ok:false,err:'অফলাইন'};
  busy=1;let res;
  try{res=await run(c)}catch(e){res={ok:false,err:msg(e)}}
  busy=0;
  c=cfg();c.lastTry=Date.now();if(res.ok){c.lastOk=c.lastTry;c.err=''}else c.err=res.err;put(c);
  fire();
  if(res.changed)refresh();
  if(again){again=0;sched(800)}
  return res}

function sched(ms){clearTimeout(timer);timer=setTimeout(()=>{sync()},ms)}

/* পেজ যেকোনো সময় localStorage 'dl'-এ লিখলেই ৩ সেকেন্ড পরে সিঙ্ক */
Storage.prototype.setItem=function(k,v){
  const r=rawSet.apply(this,arguments);
  if(k===DK&&this===localStorage&&!applying)sched(3000);
  return r};

function setup(url,token){
  url=String(url||'').trim();token=String(token||'').trim();
  if(!/^https:\/\/script\.google\.com\/.+\/exec$/.test(url))return{ok:false,err:'URL ঠিক নয়। https://script.google.com/…/exec ধরনের লিংক দিন'};
  if(token.length<8)return{ok:false,err:'টোকেন অন্তত ৮ অক্ষরের দিন'};
  const c=cfg();
  if(c.url!==url){c.sh={};c.since=0;c.init=0;c.off=0}      // নতুন শিট হলে নতুন করে শুরু
  c.url=url;c.token=token;c.dev=c.dev||Math.random().toString(36).slice(2,10);c.err='';put(c);fire();return{ok:true}}
function clear(){const c=cfg();put({dev:c.dev});fire()}
function status(){
  const c=cfg();let pending=0;
  if(c.url){const rows=flat(getDL()),sh=c.sh||{};for(const k in rows)if(sh[k]!==hs(rows[k]))pending++;for(const k in sh)if(!(k in rows))pending++}
  return{on:!!(c.url&&c.token),url:c.url||'',token:c.token||'',lastOk:c.lastOk||0,err:c.err||'',busy:!!busy,pending}}

window.hayatSync={sync,setup,clear,status,_flat:flat,_setRow:setRow};

/* কখন সিঙ্ক হবে: পেজ খুললে, অ্যাপে ফিরলে, ইন্টারনেট ফিরলে, আর খোলা থাকলে প্রতি ৯০ সেকেন্ডে */
setTimeout(()=>sync(),1500);
document.addEventListener('visibilitychange',()=>{sync()});
addEventListener('online',()=>sync());
setInterval(()=>{if(!document.hidden)sync()},90000);
})();
