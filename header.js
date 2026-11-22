/* Hayat — সব পেজের শেয়ার্ড হেডার (ক্লিন, প্রিমিয়াম, সবসময় এক সারি)।
   নাম, লোগো বা মেনুর লিংক বদলাতে শুধু এই ফাইলটি বদলান।
   জায়গা কম হলে (ছোট স্ক্রিন বা English মোডের লম্বা শব্দ) মেনু নিজে থেকে একটি ড্রপডাউন প্যানেলে গুটিয়ে যায়।
   English মোডে মেনুর শব্দ lang.js থেকে অনুবাদ হয় — নতুন লিংক যোগ করলে সেখানেও লাইন যোগ করুন। */
(function(){
if(window.__hdr)return;window.__hdr=1;
const NAME='Hayat',LOGO='H';
/* [ফাইল, নাম, আইকনের পাথ] — আইকন সব ডিভাইসে একই দেখায় (ইমোজি নয়) */
const LINKS=[
['index.html','হোম','<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'],
['tasks.html','কাজ','<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>'],
['namaz.html','নামাজ','<path d="M5 21v-7a7 7 0 0 1 14 0v7"/><path d="M12 3v4"/><path d="M3 21h18"/><path d="M10 21v-3a2 2 0 0 1 4 0v3"/>'],
['roza.html','রোজা','<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'],
['study.html','পড়া','<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path d="M12 6v14"/>'],
['hisab.html','হিসাব','<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18"/><circle cx="16.5" cy="15" r="1"/>'],
['invoice.html','খাতা','<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>'],
['bags.html','ব্যাগ','<path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'],
['settings.html','সেটিং','<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>']];
const CSS=`.nvw{--na:var(--a,#B8892B);--na2:var(--a2,#E2C275);--ng:var(--g,#8A6420);--nt:var(--t,#2B2118);--nm:var(--m,#7A6A55);--nbg:var(--bg,#FBF7EE);--non:var(--on,#1F1608);--nsh:var(--sh,rgba(184,137,43,.38));--nb:var(--b,rgba(120,90,30,.15));--nvx:20px}
body::after{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:49;background:var(--bg,#FBF7EE);pointer-events:none}
.nvw{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;padding:0 env(safe-area-inset-right,0px) 0 env(safe-area-inset-left,0px);font-size:14px;line-height:1.3;text-align:left}
.nvw *,.nvw *::before,.nvw *::after{box-sizing:border-box}
.nvw::before{content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;background:var(--nbg);background:color-mix(in srgb,var(--nbg) 86%,transparent);border-bottom:1px solid color-mix(in srgb,var(--na) 30%,transparent);-webkit-backdrop-filter:blur(18px) saturate(1.5);backdrop-filter:blur(18px) saturate(1.5);transition:box-shadow .3s}
.nvw.sc::before{box-shadow:0 14px 30px -26px var(--nsh)}
.nvin{position:relative;max-width:1080px;margin:0 auto;padding:0 var(--nvx)}
.nv{display:flex;align-items:center;flex-wrap:nowrap;gap:12px;min-height:64px}
.nvb{display:flex;align-items:center;gap:11px;flex:none;min-width:0;text-decoration:none;color:var(--nt);border-radius:12px;padding:4px 6px 4px 0}
.nvb:focus-visible,.nv a.nvl:focus-visible,.nvw .nvm:focus-visible,.nvp a:focus-visible{outline:2px solid var(--na);outline-offset:2px}
.nvlg{flex:none;width:36px;height:36px;border-radius:11px;display:grid;place-items:center;font:700 19px "Noto Serif Bengali",Inter,serif;color:var(--non);background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na));box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 6px 14px -8px var(--nsh)}
.nvt{font:700 17px "Noto Serif Bengali",Inter,serif;letter-spacing:.4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--nt)}
.nvls{display:flex;gap:2px;flex:none;margin-left:auto}
.nv a.nvl{display:flex;align-items:center;height:38px;flex:none;padding:0 14px;border-radius:10px;font-family:"Noto Serif Bengali",Inter,serif;text-decoration:none;color:var(--nm);color:color-mix(in srgb,var(--nt) 72%,transparent);font-size:14px;font-weight:600;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:color .2s,background .2s}
.nv a.nvl:hover{color:var(--nt);background:color-mix(in srgb,var(--na) 14%,transparent)}
.nv a.nvl.on{color:var(--non);font-weight:700;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na))}
/* ===== গুটানো অবস্থা: মেনু বোতাম + ড্রপডাউন প্যানেল ===== */
.nvm,.nvp,.nvsc{display:none}
.nvw.cp .nvls{display:none}
.nvw.cp .nvb{flex:1 1 auto}
.nvw.cp .nvm{display:flex}
.nvw.cp .nvp{display:grid}
.nvw.cp .nvsc{display:block}
.nvw .nvm{flex:none;align-items:center;gap:10px;max-width:60%;min-height:44px;margin:0;padding:4px 5px 4px 16px;border-radius:99px;cursor:pointer;color:var(--nt);font:600 14px "Noto Serif Bengali",Inter,serif;letter-spacing:0;background:color-mix(in srgb,var(--na) 9%,transparent);border:1px solid color-mix(in srgb,var(--na) 34%,transparent);box-shadow:none;-webkit-tap-highlight-color:transparent;transition:background .2s,border-color .2s}
.nvw .nvm:hover{background:color-mix(in srgb,var(--na) 16%,transparent);border-color:var(--na);box-shadow:none;color:var(--nt)}
.nvw .nvm:active{transform:scale(.97)}
.nvm b{font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.nvm i{position:relative;flex:none;width:34px;height:34px;border-radius:50%;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na))}
.nvm i::before,.nvm i::after{content:"";position:absolute;left:10px;right:10px;height:2px;border-radius:2px;background:var(--non);top:13px;transition:transform .3s cubic-bezier(.2,.8,.2,1),top .3s cubic-bezier(.2,.8,.2,1)}
.nvm i::after{top:19px}
.nvw.op .nvm i::before{top:16px;transform:rotate(45deg)}
.nvw.op .nvm i::after{top:16px;transform:rotate(-45deg)}
.nvp{position:absolute;right:var(--nvx);top:calc(100% + 8px);width:min(420px,calc(100% - var(--nvx)*2));padding:10px;border-radius:20px;grid-template-columns:repeat(3,1fr);gap:8px;background:var(--nbg);background:color-mix(in srgb,var(--nbg) 94%,transparent);border:1px solid color-mix(in srgb,var(--na) 30%,transparent);-webkit-backdrop-filter:blur(24px) saturate(1.5);backdrop-filter:blur(24px) saturate(1.5);box-shadow:0 28px 56px -28px var(--nsh),0 16px 36px -22px rgba(0,0,0,.35);opacity:0;visibility:hidden;transform:translateY(-8px);transform-origin:top right;transition:opacity .2s,transform .3s cubic-bezier(.2,.8,.2,1),visibility 0s .3s}
.nvw.op .nvp{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.nvp a{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;min-width:0;min-height:76px;padding:12px 6px;border-radius:14px;text-decoration:none;text-align:center;color:var(--nt);font:600 13.5px/1.25 "Noto Serif Bengali",Inter,serif;overflow-wrap:anywhere;-webkit-tap-highlight-color:transparent;background:color-mix(in srgb,var(--na) 7%,transparent);border:1px solid color-mix(in srgb,var(--na) 18%,transparent);transition:background .2s}
.nvp a:hover{background:color-mix(in srgb,var(--na) 15%,transparent)}
.nvp a:active{transform:scale(.97)}
.nvp svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;color:var(--na)}
.nvp a.on{color:var(--non);font-weight:700;background:var(--na);background:linear-gradient(145deg,var(--na2),var(--na));border-color:transparent}
.nvp a.on svg{color:var(--non)}
.nvsc{position:fixed;inset:0;z-index:-2;background:color-mix(in srgb,var(--nbg) 40%,transparent);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s .25s}
.nvw.op .nvsc{opacity:1;visibility:visible;transition-delay:0s}
:root[data-d="1"] .nvp{box-shadow:0 24px 50px -20px rgba(0,0,0,.85)}
@media(max-width:560px){.nvw{--nvx:16px}}
@media(max-width:380px){.nvt{font-size:16px}.nvlg{width:34px;height:34px;font-size:18px}.nvp{padding:8px;gap:6px}.nvw .nvm{padding-left:13px}}
@media(max-width:320px){.nvp{grid-template-columns:repeat(2,1fr)}}
@media(prefers-reduced-motion:reduce){.nvw::before,.nv a.nvl,.nvp,.nvsc,.nvw .nvm,.nvm i::before,.nvm i::after{transition:none!important}}
@media print{.nvw{display:none}body::after{display:none}}
`;
const norm=p=>decodeURIComponent(p||'').replace(/\/+$/,'').split('/').pop().replace(/\.html$/i,'')||'index';
const cur=norm(location.pathname);
const ico=d=>'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+d+'</svg>';
function build(){
 if(document.getElementById('hdr-css'))return;
 const st=document.createElement('style');st.id='hdr-css';st.textContent=CSS;document.head.appendChild(st);
 const here=LINKS.find(l=>norm(l[0])===cur)||LINKS[0];
 const html='<div class="nvw"><div class="nvsc"></div><div class="nvin"><nav class="nv" aria-label="প্রধান মেনু"><a class="nvb" href="index.html" aria-label="'+NAME+'"><span class="nvlg">'+LOGO+'</span><span class="nvt">'+NAME+'</span></a>'
 +'<div class="nvls">'+LINKS.map(([f,t])=>{const on=norm(f)===cur;return '<a class="nvl'+(on?' on':'')+'" href="'+f+'"'+(on?' aria-current="page"':'')+'>'+t+'</a>'}).join('')+'</div>'
 +'<button type="button" class="nvm" aria-haspopup="true" aria-expanded="false" aria-controls="nvp" aria-label="মেনু"><b>'+here[1]+'</b><i></i></button></nav>'
 +'<div class="nvp" id="nvp">'+LINKS.map(([f,t,ic])=>{const on=norm(f)===cur;return '<a class="'+(on?'on':'')+'" href="'+f+'"'+(on?' aria-current="page"':'')+'>'+ico(ic)+'<span>'+t+'</span></a>'}).join('')+'</div></div></div>';
 document.body.insertAdjacentHTML('afterbegin',html);
 const w=document.querySelector('.nvw'),nv=w.querySelector('.nv'),ls=w.querySelector('.nvls'),bd=w.querySelector('.nvb'),mb=w.querySelector('.nvm'),sc0=w.querySelector('.nvsc');
 /* স্ক্রল করলে হেডারের নিচে হালকা ছায়া আসে */
 let tk=0;const sc=()=>{tk=0;w.classList.toggle('sc',(window.scrollY||document.documentElement.scrollTop)>8)};
 addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(sc)},{passive:true});sc();
 /* মেনু প্যানেল খোলা/বন্ধ */
 const set=o=>{w.classList.toggle('op',!!o);mb.setAttribute('aria-expanded',o?'true':'false')};
 mb.addEventListener('click',()=>set(!w.classList.contains('op')));
 sc0.addEventListener('click',()=>set(0));
 addEventListener('keydown',e=>{if(e.key==='Escape'&&w.classList.contains('op')){set(0);mb.focus()}});
 addEventListener('pageshow',()=>set(0));
 /* এক সারিতে ধরছে কি না মেপে দেখা; না ধরলে গুটিয়ে মেনু বোতাম */
 const fit=()=>{
  w.classList.remove('cp');
  const gap=parseFloat(getComputedStyle(nv).columnGap)||12;
  const need=bd.scrollWidth+ls.offsetWidth+gap*2+24;
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
