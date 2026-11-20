/* Hayat — Service Worker
   অফলাইন সাপোর্ট: পেজ/স্ক্রিপ্ট আগে ক্যাশ থেকে দেখায়, পেছনে নতুন সংস্করণ এনে রাখে।
   কোড বদলালে নিচের VER সংখ্যা বাড়িয়ে দিন — পুরনো ক্যাশ নিজে মুছে যাবে। */
const VER='hayat-v7';
const PRE=['./','index.html','tasks.html','namaz.html','roza.html','study.html','hisab.html','bags.html','settings.html','lang.js','trip.js','sync.js','header.js','suggest.js','pwa.js','digest.js','manifest.json','offline.html',
  'icon-192.png','icon-512.png','icon-maskable-512.png','badge-96.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VER).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VER).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(/(^|\.)(google\.com|googleusercontent\.com)$/.test(u.hostname)&&u.hostname!=='fonts.googleapis.com'&&u.hostname!=='fonts.gstatic.com')return;   // গুগল শিট সিঙ্ক সবসময় সরাসরি নেটওয়ার্কে, কখনো ক্যাশে নয়
  const font=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(u.origin!==location.origin&&!font)return;           // আবহাওয়া/নামাজের API ইত্যাদি সরাসরি নেটওয়ার্কে যাবে

  e.respondWith(caches.open(VER).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:r.mode==='navigate'});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}                  // ক্যাশে থাকলে সাথে সাথে দেখাও, পেছনে হালনাগাদ
    const res=await net;
    if(res)return res;
    if(r.mode==='navigate')return (await c.match('offline.html'))||new Response('Offline',{status:503});
    return new Response('',{status:504});
  }));
});

/* নোটিফিকেশনে ট্যাপ করলে অ্যাপ খুলবে */
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const url=(e.notification.data&&e.notification.data.url)||'bags.html';
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{
    for(const w of ws){if('focus' in w)return w.focus()}
    return self.clients.openWindow(url);
  }));
});
