/* Hayat — সব পেজের শেয়ার্ড হেডার (প্রিমিয়াম ও মজবুত সংস্করণ)।
   নাম, লোগো বা মেনুর লিংক বদলাতে শুধু এই ফাইলটি বদলান।
   English মোডে মেনুর শব্দ lang.js থেকে অনুবাদ হয় — নতুন লিংক যোগ করলে সেখানেও লাইন যোগ করুন। */
(function(){
if(window.__hdr)return;window.__hdr=1;
const NAME='Hayat',LOGO='H';
const LINKS=[['index.html','হোম'],['tasks.html','কাজ'],['namaz.html','নামাজ'],['roza.html','রোজা'],['study.html','পড়া'],['hisab.html','হিসাব'],['invoice.html','খাতা'],['bags.html','ব্যাগ'],['settings.html','সেটিং']];
/* পেজে রঙের ভ্যারিয়েবল না থাকলেও যেন না ভাঙে — তাই নিজস্ব ফলব্যাক */
const CSS=`.nvw{--na:var(--a,#B8892B);--na2:var(--a2,#E2C275);--ng:var(--g,#8A6420);--nt:var(--t,#2B2118);--nm:var(--m,#7A6A55);--nbg:var(--bg,#FBF7EE);--non:var(--on,#1F1608);--nsh:var(--sh,rgba(184,137,43,.38));--nb:var(--b,rgba(120,90,30,.15))}
body::after{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:49;background:var(--bg,#FBF7EE);pointer-events:none}
.nvw{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;padding:10px max(14px,env(safe-area-inset-right)) 0 max(14px,env(safe-area-inset-left));animation:nvIn .6s cubic-bezier(.2,.8,.2,1) both;font-size:14px;line-height:1.3;text-align:left}
.nvw *,.nvw *::before,.nvw *::after{box-sizing:border-box}
@keyframes nvIn{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
.nv{max-width:1080px;width:100%;margin:0 auto;display:flex;align-items:center;gap:12px;padding:8px 10px 8px 12px;border-radius:24px;position:relative;overflow:hidden;isolation:isolate;border:1px solid var(--nb);
background:var(--nbg);
background:linear-gradient(color-mix(in srgb,var(--nbg) 74%,transparent),color-mix(in srgb,var(--nbg) 62%,transparent)) padding-box,linear-gradient(135deg,color-mix(in srgb,var(--na2) 85%,transparent),color-mix(in srgb,var(--na) 28%,transparent) 45%,color-mix(in srgb,var(--na2) 70%,transparent)) border-box;
border-color:transparent;
-webkit-backdrop-filter:blur(26px) saturate(1.6);backdrop-filter:blur(26px) saturate(1.6);
box-shadow:0 18px 40px -20px var(--nsh),0 2px 0 rgba(255,255,255,.22) inset;
transition:box-shadow .35s,padding .3s,border-radius .3s}
.nv::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(120% 140% at 0% 0%,color-mix(in srgb,var(--na2) 20%,transparent),transparent 55%),radial-gradient(90% 120% at 100% 100%,color-mix(in srgb,var(--ng) 14%,transparent),transparent 60%)}
.nv::after{content:"";position:absolute;inset:0 0 auto;height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--na),var(--na2),var(--na),transparent);background-size:200% 100%;animation:nvLine 7s linear infinite}
@keyframes nvLine{to{background-position:-200% 0}}
.nvw.sc .nv{padding-block:5px;border-radius:20px;box-shadow:0 22px 44px -18px var(--nsh),0 2px 0 rgba(255,255,255,.22) inset}
.nvb{display:flex;align-items:center;gap:10px;flex:0 1 auto;min-width:0;text-decoration:none;color:inherit;border-radius:14px;padding:2px 6px 2px 2px;transition:transform .25s}
.nvb:hover{transform:translateY(-1px)}
.nvb:focus-visible,.nv a.nvl:focus-visible{outline:2px solid var(--na);outline-offset:2px}
.nvlg{position:relative;flex:none;width:38px;height:38px;border-radius:13px;display:grid;place-items:center;font:700 20px "Noto Serif Bengali",Inter,serif;color:var(--non);overflow:hidden;
background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na) 55%,var(--ng));
box-shadow:0 0 0 1px rgba(255,255,255,.45) inset,0 0 0 3px color-mix(in srgb,var(--na2) 32%,transparent),0 8px 18px -6px var(--nsh),0 -3px 6px rgba(0,0,0,.14) inset;text-shadow:0 1px 0 rgba(255,255,255,.4)}
.nvlg::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-130%);animation:nvSh 6s ease-in-out 1.2s infinite}
@keyframes nvSh{0%,70%{transform:translateX(-130%)}100%{transform:translateX(130%)}}
.nvt{font:700 18px "Noto Serif Bengali",Inter,serif;letter-spacing:.6px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nt);
background:linear-gradient(90deg,var(--nt) 20%,var(--na) 60%,var(--ng));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nvls{position:relative;display:flex;gap:2px;flex:0 1 auto;min-width:0;margin-inline:auto;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;padding:5px;border-radius:99px;
background:color-mix(in srgb,var(--na) 8%,transparent);border:1px solid color-mix(in srgb,var(--na) 26%,transparent);box-shadow:inset 0 2px 5px rgba(0,0,0,.07),0 1px 0 rgba(255,255,255,.25)}
.nvls::-webkit-scrollbar{display:none}
.nvls.ol{-webkit-mask-image:linear-gradient(90deg,transparent,#000 26px);mask-image:linear-gradient(90deg,transparent,#000 26px)}
.nvls.or{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 26px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 26px),transparent)}
.nvls.ol.or{-webkit-mask-image:linear-gradient(90deg,transparent,#000 26px,#000 calc(100% - 26px),transparent);mask-image:linear-gradient(90deg,transparent,#000 26px,#000 calc(100% - 26px),transparent)}
.nv a.nvl{position:relative;flex:none;display:block;font-family:"Noto Serif Bengali",Inter,serif;text-decoration:none;color:var(--nm);color:color-mix(in srgb,var(--nt) 74%,transparent);border:1px solid transparent;border-radius:99px;padding:8px 16px;font-size:14px;font-weight:600;letter-spacing:.2px;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:color .25s,background .25s,box-shadow .3s,transform .2s}
.nv a.nvl:hover{color:var(--nt);background:color-mix(in srgb,var(--na) 16%,transparent)}
.nv a.nvl:active{transform:scale(.95)}
.nv a.nvl.on{color:var(--non);font-weight:700;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na));border-color:rgba(255,255,255,.4);
box-shadow:0 6px 14px -8px var(--nsh),inset 0 1px 0 rgba(255,255,255,.6),inset 0 -2px 4px rgba(0,0,0,.1);text-shadow:0 1px 0 rgba(255,255,255,.3)}
.nv a.nvl.on::after{content:"";position:absolute;left:50%;bottom:3px;width:14px;height:2px;margin-left:-7px;border-radius:2px;background:color-mix(in srgb,var(--non) 55%,transparent)}
:root[data-d="1"] .nv{box-shadow:0 18px 40px -18px rgba(0,0,0,.8),0 1px 0 rgba(255,255,255,.08) inset}
:root[data-d="1"] .nvls{box-shadow:inset 0 2px 6px rgba(0,0,0,.45)}
/* English মোডে শব্দ বড় — তাই আগেই দুই সারিতে ভাঙে */
@media(max-width:920px){.nv{flex-wrap:wrap;gap:8px;padding:8px 10px;border-radius:22px}.nvb{flex:1 1 auto}.nvls{order:3;flex:1 1 100%;margin-inline:0}.nvw.sc .nv{padding-block:6px}}
@media(max-width:380px){.nv a.nvl{padding:7px 12px;font-size:13px}.nvt{font-size:16px}.nvlg{width:34px;height:34px;font-size:18px}}
@media(prefers-reduced-motion:reduce){.nvw,.nv::after,.nvlg::after{animation:none!important}.nv,.nv a.nvl,.nvb{transition:none!important}}
@media print{.nvw{display:none}body::after{display:none}}
`;
const norm=p=>decodeURIComponent(p||'').replace(/\/+$/,'').split('/').pop().replace(/\.html$/i,'')||'index';
const cur=norm(location.pathname);
function build(){
 if(document.getElementById('hdr-css'))return;
 const st=document.createElement('style');st.id='hdr-css';st.textContent=CSS;document.head.appendChild(st);
 const html='<div class="nvw"><nav class="nv" aria-label="প্রধান মেনু"><a class="nvb" href="index.html" aria-label="'+NAME+'"><span class="nvlg">'+LOGO+'</span><span class="nvt">'+NAME+'</span></a><div class="nvls">'
 +LINKS.map(([f,t])=>{const on=norm(f)===cur;return '<a class="nvl'+(on?' on':'')+'" href="'+f+'"'+(on?' aria-current="page"':'')+'>'+t+'</a>'}).join('')+'</div></nav></div>';
 document.body.insertAdjacentHTML('afterbegin',html);
 const w=document.querySelector('.nvw'),bx=w.querySelector('.nvls'),on=bx.querySelector('.nvl.on');
 /* স্ক্রল করলে হেডার একটু ছোট ও গভীর ছায়া পায় */
 let tk=0;const sc=()=>{tk=0;w.classList.toggle('sc',(window.scrollY||document.documentElement.scrollTop)>12)};
 addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(sc)},{passive:true});sc();
 /* মেনু স্ক্রল করার মতো হলে দুই পাশে ফেড দেখায় */
 const ed=()=>{const m=bx.scrollWidth-bx.clientWidth;bx.classList.toggle('ol',m>2&&bx.scrollLeft>2);bx.classList.toggle('or',m>2&&bx.scrollLeft<m-2)};
 bx.addEventListener('scroll',ed,{passive:true});addEventListener('resize',ed);
 if(window.ResizeObserver)new ResizeObserver(ed).observe(bx);
 /* বর্তমান পেজের লিংক মেনুর মাঝখানে আনা */
 const ctr=()=>{if(on&&bx.scrollWidth>bx.clientWidth)bx.scrollLeft=on.offsetLeft-(bx.clientWidth-on.offsetWidth)/2;ed()};
 requestAnimationFrame(ctr);addEventListener('load',ctr);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(ctr);
}
if(document.body)build();else document.addEventListener('DOMContentLoaded',build);
})();
