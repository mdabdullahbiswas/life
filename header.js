/* Hayat — সব পেজের শেয়ার্ড হেডার (প্রিমিয়াম সংস্করণ)।
   নাম, লোগো বা মেনুর লিংক বদলাতে শুধু এই ফাইলটি বদলান।
   English মোডে মেনুর শব্দ lang.js থেকে অনুবাদ হয় — নতুন লিংক যোগ করলে সেখানেও লাইন যোগ করুন। */
(function(){
const NAME='Hayat',LOGO='H';
const LINKS=[['index.html','হোম'],['tasks.html','কাজ'],['namaz.html','নামাজ'],['roza.html','রোজা'],['study.html','পড়া'],['hisab.html','হিসাব'],['invoice.html','খাতা'],['bags.html','ব্যাগ'],['settings.html','সেটিং']];
const CSS=`body::after{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:49;background:var(--bg)}
.nvw{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;padding:10px 16px 0;animation:nvIn .6s cubic-bezier(.2,.8,.2,1) both}
@keyframes nvIn{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
.nv{max-width:1080px;margin:auto;display:flex;align-items:center;gap:14px;padding:8px 10px 8px 12px;border-radius:24px;position:relative;overflow:hidden;isolation:isolate;
border:1px solid transparent;
background:linear-gradient(color-mix(in srgb,var(--bg) 72%,transparent),color-mix(in srgb,var(--bg) 60%,transparent)) padding-box,linear-gradient(135deg,color-mix(in srgb,var(--a2) 85%,transparent),color-mix(in srgb,var(--a) 28%,transparent) 45%,color-mix(in srgb,var(--a2) 70%,transparent)) border-box;
backdrop-filter:blur(26px) saturate(1.6);-webkit-backdrop-filter:blur(26px) saturate(1.6);
box-shadow:0 18px 40px -20px var(--sh),0 2px 0 rgba(255,255,255,.22) inset,0 -1px 0 rgba(0,0,0,.05) inset;
transition:box-shadow .35s,padding .3s,border-radius .3s}
.nv::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(120% 140% at 0% 0%,color-mix(in srgb,var(--a2) 20%,transparent),transparent 55%),radial-gradient(90% 120% at 100% 100%,color-mix(in srgb,var(--g) 14%,transparent),transparent 60%)}
.nv::after{content:"";position:absolute;inset:0 0 auto;height:2px;background:linear-gradient(90deg,transparent,var(--a),var(--a2),var(--a),transparent);background-size:200% 100%;animation:nvLine 7s linear infinite}
@keyframes nvLine{to{background-position:-200% 0}}
.nvw.sc .nv{padding-block:5px;border-radius:20px;box-shadow:0 22px 44px -18px var(--sh),0 2px 0 rgba(255,255,255,.22) inset}
.nvb{display:flex;align-items:center;gap:11px;flex:none;text-decoration:none;color:inherit;border-radius:14px;padding:2px 6px 2px 2px;transition:transform .25s}
.nvb:hover{transform:translateY(-1px)}
.nvb:focus-visible{outline:2px solid var(--a);outline-offset:3px}
.nvlg{position:relative;width:38px;height:38px;border-radius:13px;display:grid;place-items:center;font:700 20px "Noto Serif Bengali",serif;color:var(--on);overflow:hidden;
background:linear-gradient(145deg,var(--a2),var(--a) 55%,var(--g));
box-shadow:0 0 0 1px rgba(255,255,255,.45) inset,0 0 0 3px color-mix(in srgb,var(--a2) 32%,transparent),0 8px 18px -6px var(--sh),0 -3px 6px rgba(0,0,0,.14) inset;text-shadow:0 1px 0 rgba(255,255,255,.4)}
.nvlg::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-130%);animation:nvSh 6s ease-in-out 1.2s infinite}
@keyframes nvSh{0%,70%{transform:translateX(-130%)}100%{transform:translateX(130%)}}
.nvt{font:700 18px "Noto Serif Bengali",serif;letter-spacing:.6px;background:linear-gradient(90deg,var(--t) 20%,var(--a) 60%,var(--g));-webkit-background-clip:text;background-clip:text;color:transparent;white-space:nowrap}
.nvls{display:flex;gap:2px;flex:0 1 auto;margin-inline:auto;justify-content:center;overflow-x:auto;scrollbar-width:none;padding:4px;border-radius:99px;
background:color-mix(in srgb,var(--a) 8%,transparent);border:1px solid color-mix(in srgb,var(--a) 26%,transparent);box-shadow:inset 0 2px 5px rgba(0,0,0,.07),0 1px 0 rgba(255,255,255,.25)}
.nvls::-webkit-scrollbar{display:none}
.nv a.nvl{position:relative;font-family:"Noto Serif Bengali",Inter,serif;text-decoration:none;color:color-mix(in srgb,var(--t) 74%,transparent);border:1px solid transparent;border-radius:99px;padding:8px 18px;font-size:14px;font-weight:600;letter-spacing:.2px;white-space:nowrap;transition:color .25s,background .25s,box-shadow .3s,transform .2s}
.nv a.nvl:hover{color:var(--t);background:color-mix(in srgb,var(--a) 16%,transparent)}
.nv a.nvl:active{transform:scale(.95)}
.nv a.nvl:focus-visible{outline:2px solid var(--a);outline-offset:2px}
.nv a.nvl.on{color:var(--on);font-weight:700;background:linear-gradient(145deg,var(--a2),var(--a));border-color:rgba(255,255,255,.4);
box-shadow:0 10px 22px -8px var(--sh),0 0 0 3px color-mix(in srgb,var(--a) 14%,transparent),inset 0 1px 0 rgba(255,255,255,.6),inset 0 -2px 4px rgba(0,0,0,.1);text-shadow:0 1px 0 rgba(255,255,255,.3)}
.nv a.nvl.on::after{content:"";position:absolute;left:50%;bottom:-5px;width:5px;height:5px;margin-left:-2.5px;border-radius:50%;background:var(--a2);box-shadow:0 0 8px var(--a)}
:root[data-d="1"] .nv{box-shadow:0 18px 40px -18px rgba(0,0,0,.8),0 1px 0 rgba(255,255,255,.08) inset}
:root[data-d="1"] .nvls{box-shadow:inset 0 2px 6px rgba(0,0,0,.45)}
@media(max-width:700px){.nv{flex-wrap:wrap;gap:8px;padding:8px 10px;border-radius:22px}.nvls{order:3;flex:1 1 100%;justify-content:flex-start;margin-inline:0}.nv a.nvl{padding:7px 14px}.nvt{font-size:17px}.nvw.sc .nv{padding-block:6px}}
@media(prefers-reduced-motion:reduce){.nvw,.nv::after,.nvlg::after{animation:none!important}.nv,.nv a.nvl,.nvb{transition:none!important}}
`;
const cur=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
const st=document.createElement('style');st.id='hdr-css';st.textContent=CSS;document.head.appendChild(st);
const html='<div class="nvw"><nav class="nv" aria-label="প্রধান মেনু"><a class="nvb" href="index.html" aria-label="'+NAME+'"><span class="nvlg">'+LOGO+'</span><span class="nvt">'+NAME+'</span></a><div class="nvls">'
+LINKS.map(([f,t])=>'<a class="nvl'+(f===cur?' on':'')+'" href="'+f+'"'+(f===cur?' aria-current="page"':'')+'>'+t+'</a>').join('')+'</div></nav></div>';
document.body.insertAdjacentHTML('afterbegin',html);
const w=document.querySelector('.nvw'),on=w.querySelector('.nvl.on');
/* স্ক্রল করলে হেডার একটু ছোট ও গভীর ছায়া পায় */
let tk=0;const sc=()=>{tk=0;w.classList.toggle('sc',scrollY>12)};
addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(sc)},{passive:true});sc();
/* ছোট স্ক্রিনে বর্তমান পেজের লিংক মেনুর মাঝখানে আনা */
if(on){const bx=on.parentNode;requestAnimationFrame(()=>{bx.scrollLeft=on.offsetLeft-(bx.clientWidth-on.offsetWidth)/2})}
})();
