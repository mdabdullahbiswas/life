/* Hayat — স্মার্ট সাজেশন (সব পেজের শেয়ার্ড)।
   একবার কোনো লেখা এন্ট্রি দিলে মনে রাখে। পরে একই লেখার শুরু/অংশ টাইপ করলেই নিচে সাজেশন আসে,
   চাপলে লেখা বসে যায় — হিসাবে সাথে ক্যাটাগরি, আয়/ব্যয় ও টাকাও বসে যায়।
   নতুন পেজে চালু করতে শুধু <script src="suggest.js"></script> যোগ করুন।
   কোনো ঘরে বন্ধ রাখতে সেই input-এ data-nosg অ্যাট্রিবিউট দিন।
   সাজেশন ডেটা localStorage-এর 'dl_sg' কী-তে থাকে; গুগল শিট সিঙ্ক চালু থাকলে sync.js এটি 'sg' নামে শিটের সাথে মেলায়। */
(function(){
if(window.__sg)return;window.__sg=1;
const KEY='dl_sg',MAXN=100,MAXS=5;
const page=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'')||'index';
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){return{}}};
const flush=d=>{try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}};
const norm=s=>String(s==null?'':s).normalize('NFC').trim().replace(/\s+/g,' ').toLowerCase();
const bn=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
const esc=s=>window.CSS&&CSS.escape?CSS.escape(s):String(s).replace(/["\\]/g,'\\$&');

/* কোন ঘরে সাজেশন চলবে */
const ok=el=>!!el&&el.tagName==='INPUT'&&el.type==='text'&&!!(el.name||el.id)&&!el.readOnly&&!el.disabled&&el.dataset.nosg==null&&!el.closest('[data-nosg]');
const nsOf=el=>((el.form&&el.form.dataset.f)||page)+':'+(el.name||el.id);

/* ফর্মের বাকি ঘর (ক্যাটাগরি, টাকা, মিনিট…) থেকে যা মনে রাখব */
function extras(form,el){
  const x={};
  form.querySelectorAll('select[name],input[type=number][name],input[type=time][name]').forEach(e=>{if(e!==el&&e.value!=='')x[e.name]=e.value});
  const b=form.querySelector('[data-ty].on');if(b)x.__ty=b.dataset.ty;
  return x;
}
/* সাজেশনের নিচে ছোট করে যা দেখাব */
function meta(form,el){
  const p=[];
  form.querySelectorAll('select[name]').forEach(s=>{if(s!==el&&s.selectedIndex>=0)p.push(s.options[s.selectedIndex].text.trim())});
  const a=form.querySelector('input[name=a]'),m=form.querySelector('input[name=m]'),q=form.querySelector('input[name=q]'),t=form.querySelector('input[type=time][name]');
  if(a&&+a.value>0)p.push('৳ '+bn(a.value));
  if(m&&+m.value>0)p.push(bn(m.value)+' মিনিট');
  if(q&&+q.value>1)p.push('× '+bn(q.value));
  if(t&&t.value)p.push(bn(t.value));
  return p.filter(Boolean).join(' · ');
}

/* একটি এন্ট্রি মনে রাখা */
function record(el,form){
  const v=el.value.trim();if(v.length<2||v.length>60)return;
  const db=load(),ns=nsOf(el),m=db[ns]||(db[ns]={}),k=norm(v),o=m[k]||{c:0};
  m[k]={v,c:o.c+1,t:Date.now(),x:form?extras(form,el):(o.x||{}),m:form?meta(form,el):(o.m||'')};
  const ks=Object.keys(m);
  if(ks.length>MAXN){ks.sort((a,b)=>(m[b].c-m[a].c)||(m[b].t-m[a].t)).slice(MAXN).forEach(x=>delete m[x])}
  flush(db);
}

/* মিলিয়ে দেখা: শুরুতে মিললে আগে, তারপর মাঝে মিললে; বেশি ব্যবহৃত ও নতুনগুলো উপরে */
function find(el){
  const q=norm(el.value);if(!q)return[];
  const m=load()[nsOf(el)]||{},out=[];
  for(const k in m){
    const i=k.indexOf(q);if(i<0)continue;
    if(k===q&&!m[k].m)continue;            // পুরো লেখা হয়ে গেছে, নতুন কিছু বসানোর নেই
    out.push({k,e:m[k],p:i===0?0:1});
  }
  out.sort((a,b)=>a.p-b.p||b.e.c-a.e.c||b.e.t-a.e.t);
  return out.slice(0,MAXS);
}

/* ---------- UI ---------- */
const st=document.createElement('style');st.id='sg-css';
st.textContent=`#sg-box{position:fixed;z-index:9999;display:none;overflow:hidden;border-radius:14px;background:var(--bg,#fff);color:var(--t,#222);border:1px solid var(--cb,rgba(0,0,0,.2));box-shadow:0 14px 30px -12px var(--sh,rgba(0,0,0,.3));font-family:"Noto Serif Bengali",Inter,serif}
#sg-box.on{display:block}
.sg-i{display:flex;align-items:center;gap:8px;padding:9px 12px;cursor:pointer;font-size:15px;line-height:1.35;-webkit-tap-highlight-color:transparent}
.sg-i+.sg-i{border-top:1px solid var(--b,rgba(0,0,0,.08))}
.sg-i[aria-selected=true],.sg-i:hover{background:color-mix(in srgb,var(--a,#B8892B) 16%,var(--bg,#fff))}
.sg-w{flex:1;min-width:0}
.sg-t{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sg-t b{color:var(--a,#B8892B);font-weight:700}
.sg-m{display:block;font-size:12px;color:var(--m,#777);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sg-x{flex:none;width:26px;height:26px;padding:0;border-radius:8px;border:0;background:transparent;color:var(--m,#777);font-size:13px;line-height:1;cursor:pointer;box-shadow:none;display:grid;place-items:center}
.sg-x:hover{background:color-mix(in srgb,var(--er,#d33) 16%,transparent);color:var(--er,#d33)}`;
document.head.appendChild(st);

const box=document.createElement('div');box.id='sg-box';box.setAttribute('role','listbox');
document.body.appendChild(box);
let cur=null,items=[],idx=-1,busy=0;

function hide(){box.classList.remove('on');box.textContent='';items=[];idx=-1}
function place(){
  if(!cur||!cur.isConnected||!box.classList.contains('on'))return hide();
  const r=cur.getBoundingClientRect(),vv=window.visualViewport,vh=(vv&&vv.height)||innerHeight,vt=(vv&&vv.offsetTop)||0;
  box.style.width=Math.max(r.width,220)+'px';
  box.style.left=Math.max(6,Math.min(r.left,innerWidth-box.offsetWidth-6))+'px';
  let top=r.bottom+4;
  if(top+box.offsetHeight>vt+vh-6&&r.top>box.offsetHeight+10)top=r.top-box.offsetHeight-4;
  box.style.top=top+'px';
}
function mark(){[...box.children].forEach((c,i)=>c.setAttribute('aria-selected',i===idx?'true':'false'))}
function show(el){
  cur=el;items=find(el);idx=-1;box.textContent='';
  if(!items.length)return hide();
  const q=norm(el.value);
  items.forEach((it,i)=>{
    const row=document.createElement('div');row.className='sg-i';row.setAttribute('role','option');row.dataset.i=i;
    const w=document.createElement('span');w.className='sg-w';
    const t=document.createElement('span');t.className='sg-t';
    const v=it.e.v,lv=v.toLowerCase(),at=lv.length===v.length?lv.indexOf(q):-1;
    if(at>=0){
      t.append(v.slice(0,at));const b=document.createElement('b');b.textContent=v.slice(at,at+q.length);t.append(b,v.slice(at+q.length));
    }else t.textContent=v;
    w.appendChild(t);
    if(it.e.m){const m=document.createElement('span');m.className='sg-m';m.textContent=it.e.m;w.appendChild(m)}
    const x=document.createElement('button');x.type='button';x.className='sg-x';x.textContent='✕';x.setAttribute('aria-label','এই সাজেশন মুছুন');x.title='এই সাজেশন মুছুন';
    row.append(w,x);box.appendChild(row);
  });
  box.classList.add('on');place();mark();
}

/* সাজেশন বেছে নিলে লেখা + ক্যাটাগরি/টাকা ইত্যাদি বসানো */
function apply(el,it){
  const x=it.e.x||{};let form=el.form;
  const fk=form&&form.dataset.f,keep={};
  if(form&&x.__ty){
    const b=form.querySelector('[data-ty="'+esc(x.__ty)+'"]');
    if(b&&!b.classList.contains('on')){
      form.querySelectorAll('input[name]').forEach(i=>{if(i!==el&&i.type!=='checkbox'&&i.type!=='radio')keep[i.name]=i.value});
      b.click();                                   // আয়/ব্যয় বদলালে ফর্ম নতুন করে আঁকা হয়
      form=fk?document.querySelector('form[data-f="'+esc(fk)+'"]'):form;
      el=form?form.querySelector('[name="'+esc(el.name)+'"]'):null;
      if(form)for(const n in keep){const f=form.querySelector('[name="'+esc(n)+'"]');if(f&&keep[n]!=='')f.value=keep[n]}
    }
  }
  if(!el)return;
  busy=1;
  el.value=it.e.v;
  if(form){
    for(const n in x){
      if(n==='__ty')continue;
      const f=form.querySelector('[name="'+esc(n)+'"]');if(!f||f===el)continue;
      if(f.tagName==='SELECT'){if([...f.options].some(o=>o.value===x[n]))f.value=x[n]}
      else if(f.value==='')f.value=x[n];            // যা আগে থেকে লেখা আছে তা মুছব না
    }
  }
  el.dispatchEvent(new Event('input',{bubbles:true}));
  busy=0;
  try{el.focus();el.setSelectionRange(el.value.length,el.value.length)}catch(e){}
  // টাকার ঘর ফাঁকা থাকলে সেখানে নিয়ে যাই, নইলে লেখার ঘরেই থাকি
  if(form){const a=form.querySelector('input[name=a]');if(a&&a.value==='')a.focus()}
}
function pick(i){const it=items[i];if(!it||!cur)return;const el=cur;hide();apply(el,it)}

/* ---------- ইভেন্ট (ডেলিগেশন — পেজ নতুন করে আঁকলেও কাজ করবে) ---------- */
document.addEventListener('focusin',e=>{
  const t=e.target;
  if(ok(t)){if(!t.dataset.sg){t.dataset.sg=1;t.setAttribute('autocomplete','off')}cur=t}
  else if(!box.contains(t))hide();
});
document.addEventListener('input',e=>{
  if(busy)return;const t=e.target;
  if(!ok(t)){return}
  show(t);
});
document.addEventListener('focusout',e=>{if(ok(e.target)&&!box.contains(e.relatedTarget))hide()});
document.addEventListener('keydown',e=>{
  if(!box.classList.contains('on')||e.target!==cur||e.isComposing)return;
  const n=items.length;
  if(e.key==='ArrowDown'){e.preventDefault();idx=(idx+1)%n;mark()}
  else if(e.key==='ArrowUp'){e.preventDefault();idx=(idx-1+n)%n;mark()}
  else if(e.key==='Enter'&&idx>=0){e.preventDefault();pick(idx)}
  else if(e.key==='Escape'||e.key==='Tab')hide();
});
/* সাবমিট হলে (পেজের নিজের হ্যান্ডলারের আগেই) ফর্মের সব লেখা মনে রাখা */
document.addEventListener('submit',e=>{
  const f=e.target;if(!f||!f.elements)return;
  f.querySelectorAll('input').forEach(i=>{if(ok(i))record(i,f)});
  hide();
},true);
/* ফর্ম ছাড়া ঘর (যেমন সঞ্চয় লক্ষ্য, ব্যাগের জায়গা) — ঘর ছেড়ে গেলে মনে রাখা */
document.addEventListener('change',e=>{const t=e.target;if(ok(t)&&!t.form)record(t,null)});
/* সাজেশনে চাপ: ফোকাস যেন না হারায় তাই mousedown আটকাই, বাছাই হয় click-এ */
box.addEventListener('mousedown',e=>e.preventDefault());
box.addEventListener('click',e=>{
  const row=e.target.closest('.sg-i');if(!row)return;
  const i=+row.dataset.i;
  if(e.target.closest('.sg-x')){
    e.stopPropagation();
    const it=items[i];if(!it||!cur)return;
    const db=load(),m=db[nsOf(cur)];if(m){delete m[it.k];flush(db)}
    show(cur);return;
  }
  pick(i);
});
addEventListener('resize',place);
addEventListener('scroll',place,{passive:true,capture:true});
if(window.visualViewport){visualViewport.addEventListener('resize',place);visualViewport.addEventListener('scroll',place)}
})();
