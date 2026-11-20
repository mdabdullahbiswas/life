/* Hayat — PWA সেটআপ। প্রতিটি পেজের শেষে <script src="pwa.js"></script> যোগ করুন (হোম পেজসহ)।
   কাজ: manifest/আইকন যোগ, service worker চালু, আর "ইনস্টল করুন" বাটন দেখানো। */
(function(){
const H=document.head;
function add(t,a){const e=document.createElement(t);for(const k in a)e.setAttribute(k,a[k]);H.appendChild(e)}
const L=window.L||(s=>s);

/* সব পেজের নোটিফিকেশন এক জায়গা দিয়ে: Android-এ new Notification() কাজ করে না, তাই service worker ব্যবহার করে। */
window.hayatNotify=function(t,o){
  if(!window.Notification||Notification.permission!=='granted')return;
  o=typeof o==='string'?{body:o}:(o||{});
  o.icon=o.icon||'icon-512.png';o.tag=o.tag||t;o.data=o.data||{url:'index.html'};
  const fb=()=>{try{new Notification(t,o)}catch(e){}};
  if(navigator.serviceWorker&&navigator.serviceWorker.getRegistration)navigator.serviceWorker.getRegistration().then(r=>r?r.showNotification(t,o):fb()).catch(fb);else fb();
};

if(!document.querySelector('link[rel="manifest"]'))add('link',{rel:'manifest',href:'manifest.json'});
if(!document.querySelector('meta[name="theme-color"]'))add('meta',{name:'theme-color',content:'#B8892B'});
add('meta',{name:'mobile-web-app-capable',content:'yes'});
add('meta',{name:'apple-mobile-web-app-capable',content:'yes'});
add('meta',{name:'apple-mobile-web-app-title',content:'Hayat'});
add('meta',{name:'apple-mobile-web-app-status-bar-style',content:'black-translucent'});
add('link',{rel:'apple-touch-icon',href:'icon-512.png'});
add('link',{rel:'icon',type:'image/png',href:'icon-512.png'});

if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1')){
  addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}

/* দৈনিক সামারি ও রাতের রিমাইন্ডার */
add('script',{src:'digest.js',defer:''});

/* গুগল শিট সিঙ্ক (সেটিং থেকে URL ও টোকেন দিলে চালু হয়) */
add('script',{src:'sync.js',defer:''});

/* ইনস্টল বাটন (Android/Chrome/Edge)। iOS-এ Safari → শেয়ার → "Add to Home Screen" */
const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
let dp=null;
function dismissed(){try{return localStorage.getItem('pwaX')==='1'}catch(e){return false}}
addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();dp=e;
  if(standalone||dismissed())return;
  const b=document.createElement('div');
  b.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:99;display:flex;align-items:center;gap:10px;padding:10px 12px 10px 16px;border-radius:99px;background:#2B2118;color:#F6EDD8;border:1px solid #E0B84F;box-shadow:0 10px 30px -8px rgba(0,0,0,.5);font:600 14px "Noto Serif Bengali",Inter,serif;max-width:calc(100vw - 24px)';
  b.innerHTML='<span></span><button style="border:0;border-radius:99px;padding:7px 16px;background:linear-gradient(90deg,#E0B84F,#F2D88A);color:#1A1304;font:inherit;cursor:pointer"></button><button aria-label="x" style="border:0;background:transparent;color:#B3A68B;font-size:18px;cursor:pointer;padding:0 6px">✕</button>';
  const[s,i,x]=b.children;
  s.textContent=L('অ্যাপ হিসেবে ইনস্টল করুন');i.textContent=L('ইনস্টল');
  i.onclick=async()=>{b.remove();dp.prompt();try{await dp.userChoice}catch(_){}dp=null};
  x.onclick=()=>{b.remove();try{localStorage.setItem('pwaX','1')}catch(_){}};
  document.body.appendChild(b);
});
addEventListener('appinstalled',()=>{const b=document.querySelector('body>div[style*="z-index:99"]');if(b)b.remove()});
})();
