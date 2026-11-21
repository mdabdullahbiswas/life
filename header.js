/* Hayat — সব পেজের শেয়ার্ড হেডার (প্রিমিয়াম, সবসময় এক সারি)।
   নাম, লোগো বা মেনুর লিংক বদলাতে শুধু এই ফাইলটি বদলান।
   জায়গা কম হলে (ছোট স্ক্রিন বা English মোডের লম্বা শব্দ) মেনু নিজে থেকে একটি সুন্দর ড্রপডাউন প্যানেলে গুটিয়ে যায়।
   English মোডে মেনুর শব্দ lang.js থেকে অনুবাদ হয় — নতুন লিংক যোগ করলে সেখানেও লাইন যোগ করুন। */
(function(){
if(window.__hdr)return;window.__hdr=1;
const NAME='Hayat',LOGO='H';
const LINKS=[['index.html','হোম','🏠'],['tasks.html','কাজ','✅'],['namaz.html','নামাজ','🕌'],['roza.html','রোজা','🌙'],['study.html','পড়া','📖'],['hisab.html','হিসাব','💰'],['invoice.html','খাতা','🧾'],['bags.html','ব্যাগ','🎒'],['settings.html','সেটিং','⚙️']];
const CSS=`.nvw{--na:var(--a,#B8892B);--na2:var(--a2,#E2C275);--ng:var(--g,#8A6420);--nt:var(--t,#2B2118);--nm:var(--m,#7A6A55);--nbg:var(--bg,#FBF7EE);--non:var(--on,#1F1608);--nsh:var(--sh,rgba(184,137,43,.38));--nb:var(--b,rgba(120,90,30,.15))}
body::after{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:49;background:var(--bg,#FBF7EE);pointer-events:none}
.nvw{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;padding:10px max(14px,env(safe-area-inset-right)) 0 max(14px,env(safe-area-inset-left));animation:nvIn .6s cubic-bezier(.2,.8,.2,1) both;font-size:14px;line-height:1.3;text-align:left}
.nvw *,.nvw *::before,.nvw *::after{box-sizing:border-box}
@keyframes nvIn{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}
.nvin{max-width:1080px;margin:0 auto;position:relative}
.nv,.nvp{border:1px solid transparent;
background:var(--nbg);
background:linear-gradient(color-mix(in srgb,var(--nbg) 76%,transparent),color-mix(in srgb,var(--nbg) 64%,transparent)) padding-box,linear-gradient(135deg,color-mix(in srgb,var(--na2) 85%,transparent),color-mix(in srgb,var(--na) 28%,transparent) 45%,color-mix(in srgb,var(--na2) 70%,transparent)) border-box;
-webkit-backdrop-filter:blur(26px) saturate(1.6);backdrop-filter:blur(26px) saturate(1.6)}
.nv{display:flex;align-items:center;flex-wrap:nowrap;gap:12px;padding:8px 10px 8px 12px;border-radius:24px;position:relative;overflow:hidden;isolation:isolate;
box-shadow:0 18px 40px -20px var(--nsh),0 2px 0 rgba(255,255,255,.22) inset;transition:box-shadow .35s,padding .3s,border-radius .3s}
.nv::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(120% 140% at 0% 0%,color-mix(in srgb,var(--na2) 20%,transparent),transparent 55%),radial-gradient(90% 120% at 100% 100%,color-mix(in srgb,var(--ng) 14%,transparent),transparent 60%)}
.nv::after{content:"";position:absolute;inset:0 0 auto;height:2px;pointer-events:none;background:linear-gradient(90deg,transparent,var(--na),var(--na2),var(--na),transparent);background-size:200% 100%;animation:nvLine 7s linear infinite}
@keyframes nvLine{to{background-position:-200% 0}}
.nvw.sc .nv{padding-block:5px;border-radius:20px;box-shadow:0 22px 44px -18px var(--nsh),0 2px 0 rgba(255,255,255,.22) inset}
.nvb{display:flex;align-items:center;gap:10px;flex:none;min-width:0;text-decoration:none;color:inherit;border-radius:14px;padding:2px 6px 2px 2px;transition:transform .25s}
.nvb:hover{transform:translateY(-1px)}
.nvb:focus-visible,.nv a.nvl:focus-visible,.nvm:focus-visible,.nvp a:focus-visible{outline:2px solid var(--na);outline-offset:2px}
.nvlg{position:relative;flex:none;width:38px;height:38px;border-radius:13px;display:grid;place-items:center;font:700 20px "Noto Serif Bengali",Inter,serif;color:var(--non);overflow:hidden;
background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na) 55%,var(--ng));
box-shadow:0 0 0 1px rgba(255,255,255,.45) inset,0 0 0 3px color-mix(in srgb,var(--na2) 32%,transparent),0 8px 18px -6px var(--nsh),0 -3px 6px rgba(0,0,0,.14) inset;text-shadow:0 1px 0 rgba(255,255,255,.4)}
.nvlg::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-130%);animation:nvSh 6s ease-in-out 1.2s infinite}
@keyframes nvSh{0%,70%{transform:translateX(-130%)}100%{transform:translateX(130%)}}
.nvt{font:700 18px "Noto Serif Bengali",Inter,serif;letter-spacing:.6px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nt);
background:linear-gradient(90deg,var(--nt) 20%,var(--na) 60%,var(--ng));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nvls{display:flex;gap:2px;flex:none;margin-inline:auto;padding:5px;border-radius:99px;
background:color-mix(in srgb,var(--na) 8%,transparent);border:1px solid color-mix(in srgb,var(--na) 26%,transparent);box-shadow:inset 0 2px 5px rgba(0,0,0,.07),0 1px 0 rgba(255,255,255,.25)}
.nv a.nvl{position:relative;flex:none;display:block;font-family:"Noto Serif Bengali",Inter,serif;text-decoration:none;color:var(--nm);color:color-mix(in srgb,var(--nt) 74%,transparent);border:1px solid transparent;border-radius:99px;padding:8px 16px;font-size:14px;font-weight:600;letter-spacing:.2px;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:color .25s,background .25s,box-shadow .3s,transform .2s}
.nv a.nvl:hover{color:var(--nt);background:color-mix(in srgb,var(--na) 16%,transparent)}
.nv a.nvl:active{transform:scale(.95)}
.nv a.nvl.on{color:var(--non);font-weight:700;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na));border-color:rgba(255,255,255,.4);
box-shadow:0 6px 14px -8px var(--nsh),inset 0 1px 0 rgba(255,255,255,.6),inset 0 -2px 4px rgba(0,0,0,.1);text-shadow:0 1px 0 rgba(255,255,255,.3)}
.nv a.nvl.on::after{content:"";position:absolute;left:50%;bottom:3px;width:14px;height:2px;margin-left:-7px;border-radius:2px;background:color-mix(in srgb,var(--non) 55%,transparent)}
/* ===== গুটানো অবস্থা: মেনু বোতাম + ড্রপডাউন প্যানেল ===== */
.nvm,.nvp,.nvsc{display:none}
.nvw.cp .nvls{display:none}
.nvw.cp .nvb{flex:1 1 auto}
.nvw.cp .nvm{display:flex}
.nvw.cp .nvp{display:grid}
.nvw.cp .nvsc{display:block}
.nvm{flex:none;align-items:center;gap:10px;max-width:58%;padding:4px 5px 4px 16px;border-radius:99px;cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;color:var(--nt);font:600 14px "Noto Serif Bengali",Inter,serif;
background:color-mix(in srgb,var(--na) 9%,transparent);border:1px solid color-mix(in srgb,var(--na) 34%,transparent);box-shadow:inset 0 2px 5px rgba(0,0,0,.06),0 1px 0 rgba(255,255,255,.25);transition:background .25s,border-color .25s,transform .2s}
.nvm:hover{background:color-mix(in srgb,var(--na) 16%,transparent);border-color:var(--na)}
.nvm:active{transform:scale(.96)}
.nvm b{font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nvm i{position:relative;flex:none;width:32px;height:32px;border-radius:50%;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na));box-shadow:0 6px 14px -6px var(--nsh),inset 0 1px 0 rgba(255,255,255,.6),inset 0 -2px 4px rgba(0,0,0,.1)}
.nvm i::before,.nvm i::after{content:"";position:absolute;left:9px;right:9px;height:2px;border-radius:2px;background:var(--non);top:12px;transition:transform .35s cubic-bezier(.2,.8,.2,1),top .35s cubic-bezier(.2,.8,.2,1)}
.nvm i::after{top:18px}
.nvw.op .nvm i::before{top:15px;transform:rotate(45deg)}
.nvw.op .nvm i::after{top:15px;transform:rotate(-45deg)}
.nvp{position:absolute;left:0;right:0;top:calc(100% + 10px);padding:12px;border-radius:26px;grid-template-columns:repeat(3,1fr);gap:8px;overflow:hidden;
box-shadow:0 30px 60px -24px var(--nsh),0 18px 40px -20px rgba(0,0,0,.35),0 2px 0 rgba(255,255,255,.22) inset;
opacity:0;visibility:hidden;transform:translateY(-12px) scale(.97);transform-origin:top right;transition:opacity .25s,transform .4s cubic-bezier(.2,.8,.2,1),visibility 0s .4s}
.nvp::before{content:"";position:absolute;inset:0 0 auto;height:2px;background:linear-gradient(90deg,transparent,var(--na),var(--na2),var(--na),transparent);pointer-events:none}
.nvw.op .nvp{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.nvp a{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;min-width:0;padding:15px 6px 13px;border-radius:18px;text-decoration:none;text-align:center;color:var(--nt);font:600 13.5px/1.25 "Noto Serif Bengali",Inter,serif;overflow-wrap:anywhere;-webkit-tap-highlight-color:transparent;
background:color-mix(in srgb,var(--na) 7%,transparent);border:1px solid color-mix(in srgb,var(--na) 20%,transparent);opacity:0;transform:translateY(10px);transition:opacity .3s,transform .4s cubic-bezier(.2,.8,.2,1),background .2s,box-shadow .25s}
.nvw.op .nvp a{opacity:1;transform:none;transition-delay:calc(var(--i)*32ms + 70ms),calc(var(--i)*32ms + 70ms),0s,0s}
.nvp a:active{transform:scale(.95)!important}
.nvp a:hover{background:color-mix(in srgb,var(--na) 16%,transparent)}
.nvp a .ic{font-size:23px;line-height:1;filter:drop-shadow(0 3px 4px rgba(0,0,0,.18))}
.nvp a.on{color:var(--non);font-weight:700;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na));border-color:rgba(255,255,255,.4);box-shadow:0 10px 20px -10px var(--nsh),inset 0 1px 0 rgba(255,255,255,.6),inset 0 -2px 4px rgba(0,0,0,.1);text-shadow:0 1px 0 rgba(255,255,255,.3)}
.nvsc{position:fixed;inset:0;z-index:-1;background:color-mix(in srgb,var(--nbg) 38%,transparent);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);opacity:0;visibility:hidden;transition:opacity .3s,visibility 0s .3s}
.nvw.op .nvsc{opacity:1;visibility:visible;transition-delay:0s}
:root[data-d="1"] .nv,:root[data-d="1"] .nvp{box-shadow:0 18px 40px -18px rgba(0,0,0,.8),0 1px 0 rgba(255,255,255,.08) inset}
:root[data-d="1"] .nvls{box-shadow:inset 0 2px 6px rgba(0,0,0,.45)}
@media(max-width:380px){.nvt{font-size:16px}.nvlg{width:34px;height:34px;font-size:18px}.nvp{padding:10px;gap:6px}.nvm{padding-left:13px}}
@media(max-width:320px){.nvp{grid-template-columns:repeat(2,1fr)}}
@media(prefers-reduced-motion:reduce){.nvw,.nv::after,.nvlg::after{animation:none!important}.nv,.nv a.nvl,.nvb,.nvp,.nvp a,.nvsc,.nvm,.nvm i::before,.nvm i::after{transition:none!important}}
@media print{.nvw{display:none}body::after{display:none}}
`;
const norm=p=>decodeURIComponent(p||'').replace(/\/+$/,'').split('/').pop().replace(/\.html$/i,'')||'index';
const cur=norm(location.pathname);
function build(){
 if(document.getElementById('hdr-css'))return;
 const st=document.createElement('style');st.id='hdr-css';st.textContent=CSS;document.head.appendChild(st);
 const here=LINKS.find(l=>norm(l[0])===cur)||LINKS[0];
 const html='<div class="nvw"><div class="nvsc"></div><div class="nvin"><nav class="nv" aria-label="প্রধান মেনু"><a class="nvb" href="index.html" aria-label="'+NAME+'"><span class="nvlg">'+LOGO+'</span><span class="nvt">'+NAME+'</span></a>'
 +'<div class="nvls">'+LINKS.map(([f,t])=>{const on=norm(f)===cur;return '<a class="nvl'+(on?' on':'')+'" href="'+f+'"'+(on?' aria-current="page"':'')+'>'+t+'</a>'}).join('')+'</div>'
 +'<div class="nvm" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-controls="nvp" aria-label="মেনু"><b>'+here[1]+'</b><i></i></div></nav>'
 +'<div class="nvp" id="nvp">'+LINKS.map(([f,t,ic],k)=>{const on=norm(f)===cur;return '<a style="--i:'+k+'" class="'+(on?'on':'')+'" href="'+f+'"'+(on?' aria-current="page"':'')+'><span class="ic" aria-hidden="true">'+ic+'</span><span>'+t+'</span></a>'}).join('')+'</div></div></div>';
 document.body.insertAdjacentHTML('afterbegin',html);
 const w=document.querySelector('.nvw'),nv=w.querySelector('.nv'),ls=w.querySelector('.nvls'),bd=w.querySelector('.nvb'),mb=w.querySelector('.nvm'),sc0=w.querySelector('.nvsc');
 /* স্ক্রল করলে হেডার একটু ছোট ও গভীর ছায়া পায় */
 let tk=0;const sc=()=>{tk=0;w.classList.toggle('sc',(window.scrollY||document.documentElement.scrollTop)>12)};
 addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(sc)},{passive:true});sc();
 /* মেনু প্যানেল খোলা/বন্ধ */
 const set=o=>{w.classList.toggle('op',!!o);mb.setAttribute('aria-expanded',o?'true':'false')};
 const tgl=()=>set(!w.classList.contains('op'));
 mb.addEventListener('click',tgl);
 mb.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tgl()}});
 sc0.addEventListener('click',()=>set(0));
 addEventListener('keydown',e=>{if(e.key==='Escape'&&w.classList.contains('op')){set(0);mb.focus()}});
 addEventListener('pageshow',()=>set(0));
 /* এক সারিতে ধরছে কি না মেপে দেখা; না ধরলে গুটিয়ে মেনু বোতাম */
 const fit=()=>{
  w.classList.remove('cp');
  const cs=getComputedStyle(nv),pad=parseFloat(cs.paddingLeft)+parseFloat(cs.paddingRight),gap=parseFloat(cs.columnGap||cs.gap)||12;
  const need=bd.scrollWidth+ls.offsetWidth+gap*2+pad+24;
  const tight=need>nv.clientWidth;
  w.classList.toggle('cp',tight);
  if(!tight)set(0)};
 let ft=0;const rf=()=>{if(!ft)ft=requestAnimationFrame(()=>{ft=0;fit()})};
 fit();rf();
 addEventListener('resize',rf);addEventListener('load',rf);addEventListener('orientationchange',rf);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(rf);
 if(window.ResizeObserver)new ResizeObserver(rf).observe(w.querySelector('.nvin'));
 /* English অনুবাদ বসলে শব্দের মাপ বদলায় — তখনও আবার মাপা */
 new MutationObserver(rf).observe(w,{childList:true,subtree:true,characterData:true});
}
if(document.body)build();else document.addEventListener('DOMContentLoaded',build);
})();
