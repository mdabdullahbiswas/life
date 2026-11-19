/* Hayat — দৈনিক সামারি ও রাতের রিমাইন্ডার।
   সকালে: আজ কী কী কাজ করতে হবে (আর গতকাল কিছু বাকি থাকলে সেটাও)।
   রাতে (ঘুমের আগে): আজ কোন কাজগুলো বাকি রয়ে গেল, নাকি সব শেষ।
   সময় ঠিক করা যায় সেটিং পেজ থেকে। pwa.js নিজে এই ফাইল লোড করে — আলাদা করে যোগ করতে হয় না।
   নিয়ম: নোটিফিকেশন চালু থাকতে হবে, আর অ্যাপ/পেজ সেই সময়ের পরে অন্তত একবার খোলা থাকতে হবে।
   (সকালের সামারি ১২টা পর্যন্ত, রাতেরটা রাত ১১:৫৯ পর্যন্ত দেরিতে খুললেও পাঠানো হয়) */
(function(){
const LN=window.LANG==='en',T=s=>window.L?window.L(s):s;
const bn=n=>LN?String(n):String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
const key=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function due(t,d){const s=new Date(t.start+'T00:00'),k=Math.round((new Date(key(d)+'T00:00')-s)/864e5);if(k<0)return 0;
const dim=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
return t.type=='once'?k==0:t.type=='daily'||(t.type=='every'&&k%t.n==0)||(t.type=='weekly'&&k%7==0)||(t.type=='monthly'&&Math.min(s.getDate(),dim)==d.getDate())||(t.type=='yearly'&&s.getDate()==d.getDate()&&s.getMonth()==d.getMonth())}
const load=()=>{try{return JSON.parse(localStorage.getItem('dl')||'{}')}catch(e){return{}}};
const cfg=o=>{const c=o.dg||{};return{on:c.on!==0,am:/^\d\d:\d\d$/.test(c.am)?c.am:'07:00',pm:/^\d\d:\d\d$/.test(c.pm)?c.pm:'22:00'}};
const mins=s=>+s.slice(0,2)*60+ +s.slice(3,5);
const byTime=(a,b)=>(a.time||'99:99').localeCompare(b.time||'99:99');
const isDone=(o,d,t)=>!!((o.done||{})[key(d)]||{})[t.id];
const lines=(ts,max)=>{const L=ts.slice().sort(byTime).slice(0,max).map(t=>'• '+(t.time?bn(t.time)+' ':'')+t.title);
  if(ts.length>max)L.push(LN?'+ '+(ts.length-max)+' more':'+ আরও '+bn(ts.length-max)+' টি');return L.join('\n')};

function build(kind,o,now){
  const tasks=Array.isArray(o.tasks)?o.tasks:[],td=tasks.filter(t=>due(t,now)),
        pend=td.filter(t=>!isDone(o,now,t)),n=td.length;
  if(kind==='am'){
    const y=new Date(now);y.setDate(y.getDate()-1);
    const miss=tasks.filter(t=>due(t,y)&&!isDone(o,y,t));
    let body=n?lines(td,6):(LN?'No tasks scheduled today. Have a great day!':'আজ কোনো নির্ধারিত কাজ নেই। দিনটি শুভ হোক!');
    if(miss.length)body+=LN?'\n⚠ '+miss.length+' task'+(miss.length>1?'s':'')+' left from yesterday':'\n⚠ গতকাল '+bn(miss.length)+' টি কাজ বাকি ছিল';
    return{t:LN?(n?'🌅 Good morning — '+n+' task'+(n>1?'s':'')+' today':'🌅 Good morning'):(n?'🌅 সুপ্রভাত — আজ '+bn(n)+' টি কাজ':'🌅 সুপ্রভাত'),b:body,url:'tasks.html'};
  }
  if(!n)return null;                               // রাতে কোনো কাজই না থাকলে বিরক্ত করব না
  if(!pend.length)return{t:LN?'🌙 All done for today ✅':'🌙 আলহামদুলিল্লাহ — আজকের সব কাজ শেষ ✅',b:LN?n+'/'+n+' tasks completed. Rest well.':bn(n)+'/'+bn(n)+' টি কাজ সম্পন্ন। নিশ্চিন্তে ঘুমান।',url:'tasks.html'};
  const dn=n-pend.length;
  return{t:LN?'🌙 '+pend.length+' task'+(pend.length>1?'s':'')+' left today':'🌙 আজ '+bn(pend.length)+' টি কাজ বাকি',b:lines(pend,6)+(LN?'\nDone: ':'\nসম্পন্ন: ')+bn(dn)+'/'+bn(n),url:'tasks.html'};
}

function send(m){
  const t=T(m.t),opts={body:T(m.b),tag:'hayat-digest-'+m.k,data:{url:m.url}};
  if(window.hayatNotify){window.hayatNotify(t,opts);return}
  opts.icon='icons/icon-192.png';
  const fb=()=>{try{new Notification(t,opts)}catch(e){}};
  if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration)navigator.serviceWorker.getRegistration().then(r=>r?r.showNotification(t,opts):fb()).catch(fb);else fb();
}

/* force=true হলে সময়/দিনের হিসাব ছাড়াই এখনই পাঠায় (সেটিং পেজের "পরীক্ষা" বাটন) */
function run(kind,force){
  try{
    if(!window.Notification||Notification.permission!=='granted')return false;
    const o=load();if(!o.notif)return false;
    const c=cfg(o);if(!c.on&&!force)return false;
    const now=new Date(),K=key(now),cur=now.getHours()*60+now.getMinutes();
    let sent={};try{sent=JSON.parse(localStorage.getItem('dl_dg')||'{}')}catch(e){}
    const go=k=>{
      if(!force){
        if(sent[k]===K)return;
        const at=mins(c[k]);
        if(cur<at)return;
        if(k==='am'&&cur>=720)return;          // সকালের সামারি দুপুরের পর আর অর্থবহ নয়
      }
      const m=build(k,o,now);
      if(m){m.k=k;send(m)}
      if(!force){sent[k]=K;try{localStorage.setItem('dl_dg',JSON.stringify(sent))}catch(e){}}
    };
    if(kind)go(kind);else{go('am');go('pm')}
    return true;
  }catch(e){return false}
}
window.hayatDigest=run;
run();setInterval(run,60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)run()});
})();
