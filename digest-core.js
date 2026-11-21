/* Hayat — দৈনিক সামারির সাধারণ অংশ (পেজ ও service worker দুই জায়গাতেই চলে)।
   সময়ের হিসাব, কোন কাজ আজ পড়ে, আর নোটিফিকেশনের লেখা বানানো — সব এখানে। */
(function(g){
const key=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const mins=s=>+s.slice(0,2)*60+ +s.slice(3,5);
function due(t,d){
  if(!t||!t.start)return 0;
  const s=new Date(t.start+'T00:00'),k=Math.round((new Date(key(d)+'T00:00')-s)/864e5);if(k<0)return 0;
  const dim=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
  return t.type=='once'?k==0:t.type=='daily'||(t.type=='every'&&k%t.n==0)||(t.type=='weekly'&&k%7==0)||(t.type=='monthly'&&Math.min(s.getDate(),dim)==d.getDate())||(t.type=='yearly'&&s.getDate()==d.getDate()&&s.getMonth()==d.getMonth())}
/* o.dg = {on, am, pm}: am = প্রথম সময় (আজ কী কী করতে হবে), pm = দ্বিতীয় সময় (আজ এখনো কী বাকি) */
function cfg(o){const c=(o&&o.dg)||{};return{on:c.on!==0,am:/^\d\d:\d\d$/.test(c.am)?c.am:'07:00',pm:/^\d\d:\d\d$/.test(c.pm)?c.pm:'22:00'}}

/* এখন কোন কোন সামারি পাঠানোর সময় হয়েছে (আগে পাঠানো হয়নি, আর সময় পার হয়ে বেশি দেরি হয়নি) */
function plan(o,now,sent){
  const c=cfg(o),K=key(now),cur=now.getHours()*60+now.getMinutes(),out=[];
  if(!c.on)return out;
  sent=sent||{};
  for(const k of ['am','pm']){
    if(sent[k]===K+'@'+c[k])continue;      /* সময় বদলালে আবার পাঠানোর যোগ্য */
    const at=mins(c[k]);if(cur<at)continue;
    /* দেরিতে খুললে: প্রথমটা সর্বোচ্চ ৫ ঘণ্টা (আর দ্বিতীয় সময়ের আগ পর্যন্ত), দ্বিতীয়টা রাত ১১:৫৯ পর্যন্ত */
    const end=k==='am'?Math.min(at+300,mins(c.pm)>at?mins(c.pm)-1:1439):1439;
    if(cur>end)continue;
    out.push(k)}
  return out}

function build(kind,o,now){
  const LN=o.lang==='en',bn=n=>LN?String(n):String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
  const tasks=Array.isArray(o.tasks)?o.tasks:[],dn=o.done||{},sk=o.skip||{};
  const isDone=(d,t)=>!!(dn[key(d)]||{})[t.id];
  const byTime=(a,b)=>(a.time||'99:99').localeCompare(b.time||'99:99');
  const tm=s=>{if(!s)return '';const[h,m]=s.split(':').map(Number);return bn(h%12||12)+':'+bn(String(m||0).padStart(2,'0'))+' '+(h>=12?'PM':'AM')};
  const lines=(ts,max,mark)=>{
    const L=ts.slice().sort(byTime).slice(0,max).map(t=>(mark&&isDone(now,t)?'✓ ':'• ')+(t.time?tm(t.time)+' ':'')+t.title);
    if(ts.length>max)L.push(LN?'+ '+(ts.length-max)+' more':'+ আরও '+bn(ts.length-max)+' টি');
    return L.join('\n')};
  const td=tasks.filter(t=>due(t,now)),pend=td.filter(t=>!isDone(now,t)),n=td.length;

  if(kind==='am'){
    const y=new Date(now);y.setDate(y.getDate()-1);
    const miss=tasks.filter(t=>due(t,y)&&!isDone(y,t)&&!(sk[key(y)]||{})[t.id]);
    let body=n?lines(td,6,true):(LN?'No tasks scheduled today. Have a great day!':'আজ কোনো নির্ধারিত কাজ নেই। দিনটি শুভ হোক!');
    if(miss.length)body+=LN?'\n⚠ '+miss.length+' task'+(miss.length>1?'s':'')+' left from yesterday':'\n⚠ গতকাল '+bn(miss.length)+' টি কাজ বাকি ছিল';
    return{t:n?(LN?'📋 '+n+' task'+(n>1?'s':'')+' to do today':'📋 আজ '+bn(n)+' টি কাজ করতে হবে'):(LN?'🌅 Good morning':'🌅 সুপ্রভাত'),b:body,url:'tasks.html'}}

  if(!n)return null;                                   /* কোনো কাজই না থাকলে বিরক্ত করব না */
  if(!pend.length)return{t:LN?'🌙 All done for today ✅':'🌙 আলহামদুলিল্লাহ — আজকের সব কাজ শেষ ✅',b:LN?n+'/'+n+' tasks completed. Rest well.':bn(n)+'/'+bn(n)+' টি কাজ সম্পন্ন। নিশ্চিন্তে ঘুমান।',url:'tasks.html'};
  return{t:LN?'⏳ '+pend.length+' task'+(pend.length>1?'s':'')+' still pending today':'⏳ আজ এখনো '+bn(pend.length)+' টি কাজ বাকি',b:lines(pend,6,false)+(LN?'\nDone: ':'\nসম্পন্ন: ')+bn(n-pend.length)+'/'+bn(n),url:'tasks.html'}}

const stamp=(k,o,now)=>key(now)+'@'+cfg(o)[k];
g.HDG={key,mins,due,cfg,plan,build,stamp};
})(typeof self!=='undefined'?self:window);
