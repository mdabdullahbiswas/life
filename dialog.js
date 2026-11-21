/* Hayat — প্রিমিয়াম পপআপ (ব্রাউজারের সাধারণ confirm/alert-এর বদলে)।
   ব্যবহার:  hconfirm('বার্তা',{title,ok,cancel,danger,icon}).then(ok=>{ if(ok){…} })
             halert('বার্তা',{title,ok})
   alert() নিজে থেকেই এই সুন্দর পপআপে বদলে যায়। confirm() ব্রাউজারে সরাসরি বদলানো যায় না (ওটা কোড থামিয়ে অপেক্ষা করে),
   তাই যেখানে confirm(...) আছে সেখানে hconfirm(...).then(...) বসাতে হয়। থিম (হালকা/গাঢ়/রঙ) পেজ থেকেই নেয়। */
(function(){
if(window.hconfirm)return;
const L=s=>{try{return window.L?window.L(s):s}catch(e){return s}};
const CSS=`
.hd-o{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:max(18px,env(safe-area-inset-top,0px)) 18px max(18px,env(safe-area-inset-bottom,0px));background:rgba(12,9,4,.5);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);animation:hdf .2s ease both}
.hd-o.out{animation:hdo .16s ease both}
.hd-d{position:relative;width:min(100%,380px);box-sizing:border-box;text-align:center;padding:30px 22px 20px;border-radius:26px;color:var(--t,#2B2118);font-family:"Noto Serif Bengali",Inter,serif;background:linear-gradient(165deg,color-mix(in srgb,var(--a,#B8892B) 12%,var(--bg,#FBF7EE)),var(--bg,#FBF7EE) 62%);border:1px solid var(--cb,rgba(184,137,43,.42));box-shadow:0 30px 70px -18px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06) inset,0 18px 46px -22px var(--a,#B8892B);overflow:hidden;animation:hdp .3s cubic-bezier(.2,.9,.3,1.18) both}
.hd-o.out .hd-d{animation:hdq .16s ease both}
.hd-d::before{content:"";position:absolute;left:0;right:0;top:0;height:4px;background:linear-gradient(90deg,var(--a,#B8892B),var(--a2,#E2C275),var(--a,#B8892B))}
.hd-d.dn::before{background:linear-gradient(90deg,#C0334D,#F07A8E,#C0334D)}
.hd-i{width:64px;height:64px;margin:0 auto 14px;border-radius:50%;display:grid;place-items:center;color:var(--on,#1F1608);background:radial-gradient(circle at 30% 25%,var(--a2,#E2C275),var(--a,#B8892B));box-shadow:0 10px 24px -8px var(--a,#B8892B),0 0 0 7px color-mix(in srgb,var(--a,#B8892B) 16%,transparent)}
.hd-d.dn .hd-i{color:#fff;background:radial-gradient(circle at 30% 25%,#F58FA0,#C0334D);box-shadow:0 10px 24px -8px #C0334D,0 0 0 7px rgba(192,51,77,.16)}
.hd-i svg{width:30px;height:30px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.hd-t{margin:0 0 6px;font-size:19px;font-weight:700;line-height:1.4;color:var(--t,#2B2118)}
.hd-m{margin:0 auto;font-size:14.5px;line-height:1.75;color:var(--m,#7A6A55);white-space:pre-line;word-break:break-word;max-width:320px}
.hd-m:empty{display:none}
.hd-b{display:flex;gap:10px;margin-top:22px}
.hd-b button{flex:1 1 0;min-width:0;height:48px;padding:0 14px;border-radius:15px;font:600 15px "Noto Serif Bengali",Inter,serif;cursor:pointer;transition:transform .15s,filter .2s,background .2s,box-shadow .2s;-webkit-tap-highlight-color:transparent}
.hd-b button:active{transform:scale(.97)}
.hd-b button:focus-visible{outline:2px solid var(--a,#B8892B);outline-offset:3px}
.hd-c{background:transparent;color:var(--t,#2B2118);border:1.5px solid var(--cb,rgba(184,137,43,.42))}
.hd-c:hover{background:color-mix(in srgb,var(--a,#B8892B) 12%,transparent)}
.hd-k{border:0;color:var(--on,#1F1608);background:linear-gradient(180deg,rgba(255,255,255,.28),rgba(255,255,255,0) 55%),linear-gradient(135deg,var(--a,#B8892B),var(--a2,#E2C275));box-shadow:0 10px 20px -10px var(--a,#B8892B),inset 0 1px 0 rgba(255,255,255,.5)}
.hd-k:hover{filter:brightness(1.07)}
.hd-d.dn .hd-k{color:#fff;text-shadow:0 1px 1px rgba(0,0,0,.25);background:linear-gradient(180deg,rgba(255,255,255,.22),rgba(255,255,255,0) 55%),linear-gradient(135deg,#C0334D,#E0566D);box-shadow:0 10px 20px -10px #C0334D,inset 0 1px 0 rgba(255,255,255,.4)}
@keyframes hdf{from{opacity:0}to{opacity:1}}@keyframes hdo{to{opacity:0}}
@keyframes hdp{from{opacity:0;transform:translateY(16px) scale(.9)}to{opacity:1;transform:none}}
@keyframes hdq{to{opacity:0;transform:translateY(8px) scale(.96)}}
@media (prefers-reduced-motion:reduce){.hd-o,.hd-d,.hd-o.out,.hd-o.out .hd-d{animation:none!important}}
@media (max-width:420px){.hd-d{padding:26px 18px 18px;border-radius:24px}.hd-b button{height:46px;font-size:14.5px}}`;
const ICON={
 del:'<svg viewBox="0 0 24 24"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>',
 ask:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1.1.9-1.1 1.7M12 17h.01"/></svg>',
 info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8h.01"/></svg>',
 warn:'<svg viewBox="0 0 24 24"><path d="M12 3.5 2.8 19.5h18.4L12 3.5ZM12 10v4.5M12 17.2h.01"/></svg>'};
const BAD=/মুছ|বাদ|ডিলিট|রিসেট|ফেলবেন|delete|remove|dismiss|clear|reset|erase/i;
let q=[],cur=null,styled=0;
function css(){if(styled)return;styled=1;const s=document.createElement('style');s.id='hdlg-css';s.textContent=CSS;document.head.appendChild(s)}
function open(job){
  css();
  const o=document.createElement('div');o.className='hd-o';
  const danger=job.danger!=null?!!job.danger:(job.kind==='confirm'&&BAD.test(job.msg+' '+(job.o.title||'')));
  const icon=job.o.icon||(job.kind==='alert'?'info':danger?'del':'ask');
  const d=document.createElement('div');d.className='hd-d'+(danger?' dn':'');d.setAttribute('role',job.kind==='alert'?'alertdialog':'dialog');d.setAttribute('aria-modal','true');
  const i=document.createElement('div');i.className='hd-i';i.innerHTML=ICON[icon]||ICON.ask;
  const t=document.createElement('h3');t.className='hd-t';t.id='hd-t'+Date.now();
  t.textContent=L(job.o.title||(job.kind==='alert'?'বার্তা':'নিশ্চিত করুন'));
  const m=document.createElement('p');m.className='hd-m';m.textContent=L(job.msg);
  d.setAttribute('aria-labelledby',t.id);
  const b=document.createElement('div');b.className='hd-b';
  const ok=document.createElement('button');ok.type='button';ok.className='hd-k';ok.textContent=L(job.o.ok||(job.kind==='alert'?'ঠিক আছে':'হ্যাঁ, নিশ্চিত'));
  let no=null;
  if(job.kind==='confirm'){no=document.createElement('button');no.type='button';no.className='hd-c';no.textContent=L(job.o.cancel||'বাতিল');b.appendChild(no)}
  b.appendChild(ok);d.append(i,t,m,b);o.appendChild(d);
  const prev=document.activeElement;let done=0;
  const close=v=>{if(done)return;done=1;document.removeEventListener('keydown',key,true);o.classList.add('out');
    setTimeout(()=>{o.remove();try{prev&&prev.focus&&prev.focus({preventScroll:true})}catch(e){}cur=null;job.res(v);next()},150)};
  function key(e){
    if(e.key==='Escape'){e.preventDefault();e.stopPropagation();close(false);return}
    if(e.key==='Tab'){const f=[no,ok].filter(Boolean),a=document.activeElement,k=f.indexOf(a);e.preventDefault();f[(k+(e.shiftKey?-1:1)+f.length)%f.length].focus()}}
  ok.onclick=()=>close(true);if(no)no.onclick=()=>close(false);
  o.addEventListener('mousedown',e=>{if(e.target===o&&job.kind==='confirm')close(false)});
  document.addEventListener('keydown',key,true);
  document.body.appendChild(o);cur=o;
  (danger&&no?no:ok).focus({preventScroll:true})}
function next(){if(!cur&&q.length)open(q.shift())}
function push(kind,msg,o,danger){
  return new Promise(res=>{
    if(!document.body){res(kind==='alert'?undefined:window.__nc?window.__nc(msg):false);return}
    q.push({kind,msg:String(msg==null?'':msg),o:o||{},danger:danger,res});next()})}
window.hconfirm=(msg,o)=>{o=o||{};return push('confirm',msg,o,o.danger)};
window.halert=(msg,o)=>push('alert',msg,o||{});
/* alert() নিজে থেকেই সুন্দর পপআপ (কোড থামে না, তাই আগের মতো ব্লক করে না) */
window.alert=m=>{halert(m)};
})();
