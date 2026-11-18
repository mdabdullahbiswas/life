/* Hayat — সব পেজের শেয়ার্ড হেডার।
   নাম, লোগো বা মেনুর লিংক বদলাতে শুধু এই ফাইলটি বদলান। */
(function(){
const NAME='Hayat',LOGO='H';
const LINKS=[['index.html','হোম'],['tasks.html','কাজ'],['namaz.html','নামাজ'],['roza.html','রোজা'],['hisab.html','হিসাব'],['settings.html','সেটিং']];
const CSS=`body::after{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:49;background:var(--bg)}
.nvw{position:sticky;top:env(safe-area-inset-top,0px);z-index:50;padding:10px 16px 0}
.nv{max-width:1080px;margin:auto;display:flex;align-items:center;gap:14px;padding:8px 10px 8px 14px;border-radius:20px;position:relative;overflow:hidden;
background:color-mix(in srgb,var(--bg) 74%,transparent);backdrop-filter:blur(22px) saturate(1.4);-webkit-backdrop-filter:blur(22px) saturate(1.4);
border:1px solid var(--cb);box-shadow:0 14px 34px -16px var(--sh),inset 0 1px 0 rgba(255,255,255,.18)}
.nv::after{content:"";position:absolute;inset:0 0 auto;height:2px;background:linear-gradient(90deg,transparent,var(--a),var(--a2),var(--a),transparent)}
.nvb{display:flex;align-items:center;gap:10px;flex:none;pointer-events:none}
.nvlg{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;font:700 19px "Noto Serif Bengali",serif;color:var(--on);background:linear-gradient(135deg,var(--a),var(--a2));box-shadow:0 6px 16px -6px var(--sh),inset 0 1px 0 rgba(255,255,255,.45)}
.nvt{font:700 17px "Noto Serif Bengali",serif;letter-spacing:.2px;background:linear-gradient(90deg,var(--t),var(--a));-webkit-background-clip:text;background-clip:text;color:transparent;white-space:nowrap}
.nvls{display:flex;gap:4px;flex:1;justify-content:center;overflow-x:auto;scrollbar-width:none;padding:2px}
.nvls::-webkit-scrollbar{display:none}
.nv button{font-family:"Noto Serif Bengali",Inter,serif}
.nv button.nvl{background:transparent;border:1px solid transparent;color:var(--m);box-shadow:none;border-radius:12px;padding:8px 16px;font-size:14px;font-weight:500;white-space:nowrap;position:relative}
.nv button.nvl:hover{color:var(--t);background:color-mix(in srgb,var(--a) 12%,transparent);box-shadow:none}
.nv button.nvl.on{color:var(--on);font-weight:700;background:linear-gradient(135deg,var(--a),var(--a2));box-shadow:0 6px 16px -8px var(--sh),inset 0 1px 0 rgba(255,255,255,.4)}
.nva{display:flex;gap:6px;flex:none}
.nv button.nvi{width:38px;height:38px;padding:0;border-radius:12px;display:grid;place-items:center;font-size:16px;background:transparent;border:1px solid var(--b);color:var(--t);box-shadow:none}
.nv button.nvi:hover{border-color:var(--a);background:color-mix(in srgb,var(--a) 14%,transparent);box-shadow:none}
.nv button.nvi.on{border-color:var(--a);background:color-mix(in srgb,var(--a) 22%,transparent)}
.nv button span{pointer-events:none}
@media(max-width:700px){.nv{flex-wrap:wrap;gap:8px;padding:8px 10px}.nvls{order:3;flex:1 1 100%;justify-content:flex-start}.nva{margin-left:auto}.nvt{font-size:16px}}
.nv a.nvl{font-family:"Noto Serif Bengali",Inter,serif;text-decoration:none;color:var(--m);border:1px solid transparent;border-radius:12px;padding:8px 16px;font-size:14px;font-weight:500;white-space:nowrap}
.nv a.nvl:hover{color:var(--t);background:color-mix(in srgb,var(--a) 12%,transparent)}
.nv a.nvl.on{color:var(--on);font-weight:700;background:linear-gradient(135deg,var(--a),var(--a2));box-shadow:0 6px 16px -8px var(--sh),inset 0 1px 0 rgba(255,255,255,.4)}
.nvb{text-decoration:none;pointer-events:auto;color:inherit}
`;
const cur=decodeURIComponent(location.pathname.split('/').pop()||'index.html');
const st=document.createElement('style');st.id='hdr-css';st.textContent=CSS;document.head.appendChild(st);
const html='<div class="nvw"><nav class="nv"><a class="nvb" href="index.html"><span class="nvlg">'+LOGO+'</span><span class="nvt">'+NAME+'</span></a><div class="nvls">'
+LINKS.map(([f,t])=>'<a class="nvl'+(f===cur?' on':'')+'" href="'+f+'">'+t+'</a>').join('')+'</div></nav></div>';
document.body.insertAdjacentHTML('afterbegin',html);
})();
