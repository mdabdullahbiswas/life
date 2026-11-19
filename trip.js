/* Hayat — যাত্রার তারিখ ঘনিয়ে এলে প্যাকিং বাকি থাকলে নোটিফিকেশন।
   যেকোনো পেজে <script src="trip.js"></script> যোগ করলেই চলবে (PWA হিসেবে ইনস্টল করলে মোবাইলেও কাজ করে) (হোম পেজেও যোগ করুন, কারণ সেটাই খোলা থাকে)।
   নিয়ম: যাত্রার ২ দিন আগে থেকে যাত্রার দিন পর্যন্ত, প্রতিটি ব্যাগের জন্য দিনে একবার। */
(function(){
const bn=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
function show(t,o){
o.icon='icons/icon-192.png';o.badge='icons/badge-96.png';o.tag=o.tag||t;o.data={url:'bags.html'};
const fb=()=>{try{new Notification(t,o)}catch(e){}};
if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration)navigator.serviceWorker.getRegistration().then(r=>r?r.showNotification(t,o):fb()).catch(fb);else fb()}
function chk(){try{
if(!window.Notification||Notification.permission!=='granted')return;
const o=JSON.parse(localStorage.getItem('dl')||'{}'),B=Array.isArray(o.bags)?o.bags:[],td=new Date(new Date().toDateString()),
K=td.getFullYear()+'-'+(td.getMonth()+1)+'-'+td.getDate(),N=o.tn||{};let ch=0;
B.forEach(b=>{if(!b.dt)return;const d=Math.round((new Date(b.dt+'T00:00')-td)/864e5);if(d<0||d>2)return;
const t=b.it.length,k=b.it.filter(x=>x.k).length;if(!t||k===t||N[b.id]===K)return;
const u=b.it.filter(x=>x.s&&!x.k).length,p=Math.round(k/t*100);
const when=d===0?'আজই যাত্রা':d===1?'আগামীকাল যাত্রা':'আর '+bn(d)+' দিন বাকি';
show(b.ic+' '+b.n,{body:when+', '+bn(p)+'% প্যাক হয়েছে — '+bn(t-k)+'টি বাকি'+(u?' (জরুরি '+bn(u)+'টি)':'')});
N[b.id]=K;ch=1});
if(ch){const o2=JSON.parse(localStorage.getItem('dl')||'{}');o2.tn=N;localStorage.setItem('dl',JSON.stringify(o2))}
}catch(e){}}
chk();setInterval(chk,18e5);
})();
