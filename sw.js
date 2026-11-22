/* Hayat — Service Worker
   অ্যাপের নিজের পেজ/স্ক্রিপ্ট: আগে নেটওয়ার্ক থেকে নতুন সংস্করণ আনে (ব্রাউজারের HTTP ক্যাশ এড়িয়ে),
   নেট না থাকলে বা ৩ সেকেন্ডে সাড়া না পেলে ক্যাশ থেকে দেখায় — তাই আপলোডের পর হার্ড রিফ্রেশ লাগে না।
   ফন্ট ইত্যাদি বাইরের ফাইল আগের মতো ক্যাশ-আগে। VER বাড়ালে পুরনো ক্যাশ নিজে মুছে যায়। */
const VER='hayat-v18';
const NET_WAIT=3000;
const PRE=['./','index.html','tasks.html','namaz.html','roza.html','study.html','hisab.html','invoice.html','bags.html','settings.html','lang.js','trip.js','sync.js','header.js','suggest.js','pwa.js','digest.js','digest-core.js','dialog.js','push.js','manifest.json','offline.html',
  'icon-192.png','icon-512.png','icon-maskable-512.png','badge-96.png'];

/* নামাজের রিমাইন্ডার: namaz.html সময়সূচি IndexedDB ('hayat-n') এ লেখে, এখানে সময় হলে নোটিফিকেশন দেখানো হয় */
const DB=()=>new Promise((res,rej)=>{const q=indexedDB.open('hayat-n',1);q.onupgradeneeded=()=>q.result.createObjectStore('kv');q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)});
const dbGet=k=>DB().then(d=>new Promise(res=>{const r=d.transaction('kv').objectStore('kv').get(k);r.onsuccess=()=>res(r.result);r.onerror=()=>res(null)}));
const dbPut=(k,v)=>DB().then(d=>new Promise((res,rej)=>{const t=d.transaction('kv','readwrite');t.objectStore('kv').put(v,k);t.oncomplete=()=>res();t.onerror=()=>rej(t.error)}));
const bnum=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
async function checkSched(){
  const it=(await dbGet('sched'))||[],fr=(await dbGet('fired'))||{},n=Date.now();let ch=false;
  for(const x of it){
    if(n>=x.f&&n<x.tm&&!fr[x.id]){
      fr[x.id]=n;ch=true;
      const m=Math.max(1,Math.round((x.tm-n)/6e4));
      await self.registration.showNotification('🔔 '+x.t,{body:bnum(m)+' মিনিট পরে ('+x.tg+')',icon:'icon-512.png',badge:'badge-96.png',tag:'nr-'+x.id,renotify:false,vibrate:[200,100,200],data:{url:'namaz.html'}});
    }
  }
  for(const k in fr)if(n-fr[k]>2*864e5){delete fr[k];ch=true}
  if(ch)await dbPut('fired',fr);
}
/* দৈনিক সামারি: digest.js কাজের তালিকা IndexedDB-তে ('dg') কপি করে রাখে; পেজ বন্ধ থাকলেও এখানে সময় হলে দেখানো হয় */
let HDG=null;try{importScripts('digest-core.js');HDG=self.HDG}catch(e){}
async function checkDigest(){
  try{
    if(!HDG||!self.Notification||Notification.permission!=='granted')return;
    const m=await dbGet('dg');if(!m||!m.notif)return;
    const now=new Date(),K=HDG.key(now),sent=(await dbGet('dgsent'))||{},ks=HDG.plan(m,now,sent);
    for(const k of ks){
      const x=HDG.build(k,m,now);
      if(x)await self.registration.showNotification(x.t,{body:x.b,icon:'icon-512.png',badge:'badge-96.png',tag:'hayat-digest-'+k,data:{url:x.url}});
      sent[k]=HDG.stamp(k,m,now)}
    if(ks.length)await dbPut('dgsent',sent);
  }catch(e){}}
const checkAll=()=>Promise.all([checkSched().catch(()=>{}),checkDigest()]);
self.addEventListener('periodicsync',e=>{if(e.tag==='namaz-rem'||e.tag==='hayat-digest')e.waitUntil(checkAll())});
self.addEventListener('message',e=>{if(e.data&&(e.data.type==='namaz-check'||e.data.type==='digest-check'))e.waitUntil(checkAll())});

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VER).then(c=>Promise.all(PRE.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  if(r.mode==='navigate')e.waitUntil(checkAll());   // অ্যাপ খুললেই মিস হওয়া রিমাইন্ডার চেক
  const u=new URL(r.url);
  if(/(^|\.)(google\.com|googleusercontent\.com)$/.test(u.hostname)&&u.hostname!=='fonts.googleapis.com'&&u.hostname!=='fonts.gstatic.com')return;   // গুগল শিট সিঙ্ক সবসময় সরাসরি নেটওয়ার্কে, কখনো ক্যাশে নয়
  const font=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(u.origin!==location.origin&&!font)return;           // আবহাওয়া/নামাজের API ইত্যাদি সরাসরি নেটওয়ার্কে যাবে

  if(font){   // বাইরের ফন্ট: ক্যাশে থাকলে সাথে সাথে, পেছনে হালনাগাদ
    e.respondWith(caches.open(VER).then(async c=>{
      const hit=await c.match(r);
      const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>null);
      if(hit){e.waitUntil(net);return hit}
      return (await net)||new Response('',{status:504});
    }));
    return;
  }

  /* অ্যাপের নিজের ফাইল: নেটওয়ার্ক আগে (HTTP ক্যাশ এড়িয়ে), ব্যর্থ বা ধীর হলে ক্যাশ */
  e.respondWith(caches.open(VER).then(async c=>{
    const find=()=>c.match(r,{ignoreSearch:r.mode==='navigate'});
    const net=fetch(r,{cache:'no-cache'}).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res});
    e.waitUntil(net.catch(()=>{}));
    let res=null;
    try{res=await Promise.race([net,new Promise((_,rj)=>setTimeout(rj,NET_WAIT))])}catch(x){}
    if(res&&(res.ok||res.type==='opaqueredirect'||res.status<500&&res.status!==404))return res;
    const hit=await find();
    if(hit)return hit;
    if(!res){try{res=await net}catch(x){}}   // ধীর ছিল কিন্তু ক্যাশে কিছু নেই: নেটওয়ার্কের জন্যই অপেক্ষা
    if(res)return res;
    if(r.mode==='navigate')return (await c.match('offline.html'))||new Response('Offline',{status:503});
    return new Response('',{status:504});
  }));
});

/* Firebase পুশ (অ্যাপ বন্ধ থাকলেও আসে): সার্ভার থেকে আসা সামারি দেখানো */
self.addEventListener('push',e=>{
  let d={};try{d=e.data?e.data.json():{}}catch(x){try{d={title:e.data.text()}}catch(y){}}
  const p=Object.assign({},d.notification||{},d.data||{});
  e.waitUntil(self.registration.showNotification(p.title||'Hayat',{body:p.body||'',icon:'icon-512.png',badge:'badge-96.png',tag:p.tag||'hayat-push',data:{url:p.url||'tasks.html'}}));
});

/* নোটিফিকেশনে ট্যাপ করলে অ্যাপ খুলবে */
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const url=(e.notification.data&&e.notification.data.url)||'bags.html';
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{
    for(const w of ws){if('focus' in w)return w.focus().then(c=>{try{if(c&&c.navigate)return c.navigate(url)}catch(x){}})}
    return self.clients.openWindow(url);
  }));
});
