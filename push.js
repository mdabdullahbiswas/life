/* Hayat — পুশ নোটিফিকেশন (Firebase Cloud Messaging)।
   অ্যাপ/পেজ বন্ধ থাকলেও সময়মতো সামারি পেতে। সব ডাটা গুগল শিটেই থাকে; Firebase শুধু নোটিফিকেশন পৌঁছায়।
   ★ নিচের CONFIG-এ Firebase Console থেকে পাওয়া মানগুলো বসান (এগুলো গোপন নয়, GitHub-এ রাখা যায়)। সার্ভিস অ্যাকাউন্টের কী এখানে নয়! */
(function(){
if(window.__hpush)return;window.__hpush=1;
const CONFIG={
  apiKey:'PASTE_API_KEY',
  authDomain:'PASTE_PROJECT_ID.firebaseapp.com',
  projectId:'PASTE_PROJECT_ID',
  messagingSenderId:'PASTE_SENDER_ID',
  appId:'PASTE_APP_ID',
  vapidKey:'PASTE_WEB_PUSH_PUBLIC_KEY'
};
const FB='10.14.1';
const sync=()=>{try{return JSON.parse(localStorage.getItem('dl_sync')||'{}')||{}}catch(e){return{}}};
const st=()=>{try{return JSON.parse(localStorage.getItem('dl_fcm')||'{}')||{}}catch(e){return{}}};
const setSt=o=>{try{localStorage.setItem('dl_fcm',JSON.stringify(o))}catch(e){}};

async function call(body){
  const c=sync();
  if(!c.url||!c.token)throw new Error('আগে সেটিং থেকে গুগল শিট সিঙ্ক চালু করুন');
  body.t=c.token;body.dev=c.dev||'dev';
  const ctl=new AbortController(),tm=setTimeout(()=>ctl.abort(),30000);
  try{
    const r=await fetch(c.url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body),signal:ctl.signal});
    let j;try{j=JSON.parse(await r.text())}catch(e){throw new Error('সার্ভার ঠিক উত্তর দেয়নি — Apps Script-এ New version দিয়ে Deploy করেছেন?')}
    if(!j.ok)throw new Error(j.err||'সার্ভার ত্রুটি');
    return j}
  catch(e){if(e&&e.name==='AbortError')throw new Error('সময় শেষ — সার্ভার সাড়া দেয়নি');throw e}
  finally{clearTimeout(tm)}}

async function getTok(){
  if(!CONFIG.apiKey||/PASTE/.test(CONFIG.apiKey+CONFIG.vapidKey))throw new Error('push.js-এ Firebase কনফিগ বসানো হয়নি');
  if(!navigator.serviceWorker)throw new Error('এই ব্রাউজারে service worker সমর্থিত নয়');
  const[A,M]=await Promise.all([import('https://www.gstatic.com/firebasejs/'+FB+'/firebase-app.js'),import('https://www.gstatic.com/firebasejs/'+FB+'/firebase-messaging.js')]);
  if(!(await M.isSupported()))throw new Error('এই ডিভাইসে পুশ সমর্থিত নয় (iPhone-এ অ্যাপটি আগে Home Screen-এ ইনস্টল করুন)');
  const app=A.getApps().length?A.getApps()[0]:A.initializeApp({apiKey:CONFIG.apiKey,authDomain:CONFIG.authDomain,projectId:CONFIG.projectId,messagingSenderId:CONFIG.messagingSenderId,appId:CONFIG.appId});
  const reg=await navigator.serviceWorker.ready;
  return M.getToken(M.getMessaging(app),{vapidKey:CONFIG.vapidKey,serviceWorkerRegistration:reg})}

async function enable(){
  if(!window.Notification)throw new Error('এই ব্রাউজারে নোটিফিকেশন সমর্থিত নয়');
  const p=Notification.permission==='granted'?'granted':await Notification.requestPermission();
  if(p!=='granted')throw new Error('নোটিফিকেশনের অনুমতি দেওয়া হয়নি');
  const tok=await getTok();if(!tok)throw new Error('টোকেন পাওয়া যায়নি');
  await call({a:'fcm',fcm:tok});
  setSt({token:tok,at:Date.now()});
  return tok}
async function disable(){try{await call({a:'fcmoff'})}catch(e){}setSt({})}
async function test(k){return call({a:'fcmtest',k:k==='pm'?'pm':k==='rz'?'rz':'am'})}

/* টোকেন বদলে গেলে বা অনেক দিন হলে নিজে নিজে সার্ভারে নতুন করে জানানো */
function refresh(){
  const s=st();if(!s.token||!window.Notification||Notification.permission!=='granted')return;
  const c=sync();if(!c.url||!c.token)return;
  getTok().then(t=>{if(t&&(t!==s.token||Date.now()-(s.at||0)>6*864e5))return call({a:'fcm',fcm:t}).then(()=>setSt({token:t,at:Date.now()}))}).catch(()=>{})}
setTimeout(refresh,6000);

window.hayatPush={enable,disable,test,on:()=>!!st().token};
})();
