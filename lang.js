/* Hayat — ভাষা (বাংলা / English)।
   বাংলা হলে কিছুই বদলায় না। English হলে প্রতিটি পেজের লেখা এই ফাইলের অভিধান থেকে অনুবাদ হয়।
   নতুন লেখা যোগ করলে নিচের D তালিকায় বাংলা → English লাইন যোগ করুন। */
(function(){
let LANG='bn';try{LANG=JSON.parse(localStorage.getItem('dl')||'{}').lang==='en'?'en':'bn'}catch(e){}
window.LANG=LANG;
if(LANG!=='en'){window.L=s=>s;return}

const D={
/* মাস */
'জানুয়ারি':'January','ফেব্রুয়ারি':'February','মার্চ':'March','এপ্রিল':'April','মে':'May','জুন':'June','জুলাই':'July','আগস্ট':'August','সেপ্টেম্বর':'September','অক্টোবর':'October','নভেম্বর':'November','ডিসেম্বর':'December',
/* বার */
'রবিবার':'Sunday','সোমবার':'Monday','মঙ্গলবার':'Tuesday','বুধবার':'Wednesday','বৃহস্পতিবার':'Thursday','শুক্রবার':'Friday','শনিবার':'Saturday',
/* হিজরি মাস */
'মুহাররম':'Muharram','সফর':'Safar','রবিউল আউয়াল':'Rabi\u2019 al-Awwal','রবিউস সানি':'Rabi\u2019 al-Thani','জমাদিউল আউয়াল':'Jumada al-Awwal','জমাদিউস সানি':'Jumada al-Thani','রজব':'Rajab','শা’বান':'Sha\u2019ban','রমজান':'Ramadan','শাওয়াল':'Shawwal','জিলকদ':'Dhul Qa\u2019dah','জিলহজ':'Dhul Hijjah','হি.':'AH',
/* নামাজ */
'ফজর':'Fajr','যোহর':'Dhuhr','আসর':'Asr','মাগরিব':'Maghrib','এশা':'Isha','বিতর':'Witr','তাহাজ্জুদ':'Tahajjud','ইশরাক':'Ishraq','চাশত':'Duha','আওয়াবিন':'Awwabin','তারাবিহ':'Taraweeh',
'নফল নামাজ ও নিষিদ্ধ সময়':'Voluntary prayers & prohibited times','নফল নামাজের সময়':'Voluntary prayer times','নফল নামাজ':'Voluntary prayers','নিষিদ্ধ সময়':'Prohibited times','কাযা নামাজ':'Qaza prayers','আজকের নামাজ':'Today\u2019s prayers','পরবর্তী নামাজ':'Next prayer','নামাজের সময় হয়েছে':'prayer time has come','নামাজ':'Prayer',
'ঢাকার সময় অনুযায়ী (আনুমানিক)':'Dhaka time (approximate)','ঢাকার সময় অনুযায়ী':'Dhaka time','ঢাকার নামাজের সময়':'Dhaka prayer times','আনুমানিক':'approximate',
'ওয়াক্ত শেষ হতে বাকি':'prayer time left','শুরু হতে বাকি':'time left to start','এখন ফরজ নামাজের ওয়াক্ত নেই':'no obligatory prayer time right now','এখন নামাজ পড়া নিষিদ্ধ':'prayer is prohibited now',
'সূর্যোদয়ের সময়':'Sunrise','দ্বিপ্রহর (যাওয়াল)':'Midday (Zawal)','সূর্যাস্তের সময়':'Sunset','সূর্যোদয়':'Sunrise','সূর্যাস্ত':'Sunset','দ্বিপ্রহর':'Midday','যাওয়াল':'Zawal',
'ফজরের আগ পর্যন্ত':'until Fajr','এশার পর':'After Isha','এখন চলছে':'Now','চলছে':'Ongoing','বাকি':'left','পর':'later','শুরু':'Starts',
'ফজর নীল ভোর':'Fajr blue dawn','যোহর সোনালি':'Dhuhr golden','আসর কমলা':'Asr orange','মাগরিব গোলাপি':'Maghrib pink','এশা বেগুনি':'Isha purple','হানাফি আসর':'Hanafi Asr','কারাচি ১৮':'Karachi 18',
/* রোজা / রমজান */
'ফরজ রোজা (রমজান)':'Fard fast (Ramadan)','রোজা নিষিদ্ধ (ঈদ/তাশরীকের দিন)':'Fasting prohibited (Eid / Tashreeq days)','আরাফার দিন':'Day of Arafah','আশুরা':'Ashura','আইয়ামে বীজ':'Ayyam al-Bid (white days)','শাওয়ালের ছয় রোজা':'Six fasts of Shawwal',
'নফল রোজার দিন':'Voluntary fast day','আজ নফল রোজার বিশেষ দিন নয়':'Today is not a special day for a voluntary fast','আজ নফল রোজা রেখেছি':'I kept a voluntary fast today','নফল রোজা ট্র্যাকার':'Voluntary fast tracker','টি এ বছর':'this year','এ মাসে':'this month',
'রমজান মোড':'Ramadan mode','প্রিভিউ':'Preview','আলহামদুলিল্লাহ':'Alhamdulillah','আজকের ইফতারের সময় হয়েছে':'It\u2019s iftar time','ইফতারের সময় হয়েছে':'It\u2019s time for iftar','সেহরি শেষ হতে বাকি':'Time left until suhoor ends','ইফতার হতে বাকি':'Time left until iftar','সেহরি শেষ হতে ১০ মিনিট বাকি':'10 minutes left until suhoor ends','সেহরির শেষ সময়':'Suhoor ends','সেহরি শেষ':'Suhoor ends','আজকের রোজা':'Today\u2019s fast','সেহরি':'Suhoor','ইফতার':'Iftar','রোজা':'Fasting','ঈদ':'Eid','তাশরীকের দিন':'Tashreeq days','ফরজ রোজা':'Fard fast','রোজা নিষিদ্ধ':'Fasting prohibited',
/* শুভেচ্ছা */
'সুপ্রভাত':'Good morning','শুভ অপরাহ্ন':'Good afternoon','শুভ সন্ধ্যা':'Good evening','শুভ রাত্রি':'Good night','আসসালামু আলাইকুম':'Assalamu Alaikum','মাশাআল্লাহ':'MashaAllah',
/* কাজ */
'আজকের কাজ':'Today\u2019s tasks','আজকের সব কাজ শেষ':'All of today\u2019s tasks are done','আজ কোনো কাজ নেই। নতুন কাজ যোগ করতে নিচের বাটনে চাপুন।':'No tasks today. Press the button below to add a new task.','আজ কোনো কাজ নেই। নিচে নতুন কাজ যোগ করুন।':'No tasks today. Add a new task below.','নতুন কাজ যোগ করুন':'Add a new task','কাজ যোগ করুন':'Add task','রোজা ট্র্যাকার':'Fast tracker','রেখেছি':'Fasted','রাখিনি':'Didn\u2019t fast','আজ কোনো কাজ নেই।':'No tasks today.','কাজের নাম':'Task name','কোন দিনের কাজ':'Which day','পুনরাবৃত্তি':'Repeat','শুধু এই দিন (পুনরাবৃত্তি নেই)':'This day only (no repeat)','নির্দিষ্ট দিন পর পর':'Every N days','কত দিন পর পর':'Every how many days','যোগ করুন':'Add',
'একবার':'Once','প্রতিদিন':'Daily','প্রতি সপ্তাহে':'Weekly','প্রতি মাসে':'Monthly','প্রতি বছর':'Yearly','দিন পর পর':'days apart',
'আজ সম্পন্ন':'Done today','টানা পূর্ণ দিন':'Full-day streak','পরিসংখ্যান':'Statistics','আগামী ৭ দিন':'Next 7 days','আগামীকাল':'Tomorrow','আজ':'Today','কোনো কাজ নেই':'No tasks','সব কাজ':'All tasks','মোট কাজ':'Total tasks','এখনো কোনো কাজ যোগ করা হয়নি':'No tasks added yet','কাজটি মুছে ফেলবেন?':'Delete this task?','কাজের সময়':'Task time','কাজের তালিকা':'Task list','এখনো কোনো কাজ নেই।':'No tasks yet.','কাজ':'Tasks',
/* হিসাব */
'এ মাসের হিসাব':'This month\u2019s accounts','এ মাসের তালিকা':'This month\u2019s list','এ মাসে এখনো কোনো হিসাব নেই':'No entries this month yet','হিসাব পেজ':'Accounts page','ব্যালেন্স':'Balance','মোট অবশিষ্ট':'Total remaining','অবশিষ্ট':'Remaining','আয়':'Income','ব্যয়':'Expense','টাকা':'Amount','বিবরণ':'Description','যোগ':'Add','হিসাব':'Accounts',
/* সেটিং */
'সব কিছু এক জায়গা থেকে নিয়ন্ত্রণ করুন':'Control everything from one place','চেহারা':'Appearance','রাতের মোড':'Night mode','অন্ধকার থিমে চোখের আরাম':'Easy on the eyes with the dark theme','রঙের সেট':'Colour theme','ওয়াক্ত অনুযায়ী রং':'Colour by prayer time','এমারেল্ড':'Emerald','গোল্ড':'Gold','নেভি':'Navy','বারগান্ডি':'Burgundy','শ্যাম্পেইন গোল্ড':'Champagne Gold','লাল':'Red',
'মোড ও নোটিফিকেশন':'Mode & notifications','সেহরি-ইফতার কাউন্টডাউন ও তারাবিহ ট্র্যাকার; রমজান মাসে নিজে থেকেই চালু হয়':'Suhoor/iftar countdown and Taraweeh tracker; turns on automatically in Ramadan','নামাজ, সেহরি-ইফতার ও কাজের সময়ে জানাবে':'Notifies you at prayer, suhoor/iftar and task times','নোটিফিকেশন পেতে হোম পেজ ব্রাউজারে খোলা থাকতে হবে।':'The home page must stay open in the browser to receive notifications.','নোটিফিকেশন':'Notifications','ইফতার ও কাজের সময়ে জানাবে':'Notifies you at iftar and task times','রমজান মাসে নিজে থেকেই চালু হয়':'Turns on automatically in Ramadan','এই ব্রাউজারে নোটিফিকেশন সমর্থিত নয়':'Notifications are not supported in this browser',
'প্রতি ওয়াক্তে কত':'How many per prayer','সবগুলোতে যোগ':'Add to all','আদায় করলে − চাপুন, বাকি থাকলে +।':'Press \u2212 when prayed, + when still owed.','মোট':'Total','কাযা':'Qaza',
'গুগল শিট সিঙ্ক':'Google Sheet sync','Apps Script ওয়েব অ্যাপের লিংক দিন (পরের ধাপে সংযোগ হবে)।':'Enter the Apps Script web app link (connection comes in the next step).','সংরক্ষণ':'Save',
'ডেটা ব্যবস্থাপনা':'Data management','সব তথ্য শুধু এই ব্রাউজারে জমা থাকে। ব্যাকআপ নিয়ে রাখুন।':'All data is stored only in this browser. Keep a backup.','ব্যাকআপ নামান':'Download backup','ব্যাকআপ আনুন':'Import backup','সব মুছুন':'Delete all','ব্যাকআপ আনা হয়েছে':'Backup imported','ফাইলটি সঠিক ব্যাকআপ নয়':'This file is not a valid backup','সব তথ্য (নামাজ, কাজ, হিসাব, কাযা, সেটিং) চিরতরে মুছে যাবে। নিশ্চিত?':'All data (prayers, tasks, accounts, qaza, settings) will be erased permanently. Are you sure?','মুছুন':'Delete',
'ভাষা':'Language','সেটিং':'Settings','হোম':'Home'
};
/* অক্ষরের বদলে শব্দ — গণনার পরে প্রযোজ্য */
const U={'ঘণ্টা':'Hours','মিনিট':'Minutes','সেকেন্ড':'Seconds','থেকে':'from','পর্যন্ত':'until','ভোর':'Dawn','সকাল':'Morning','দুপুর':'Noon','বিকাল':'Afternoon','সন্ধ্যা':'Evening','রাত':'Night','টি':'items','মোট':'Total'};

const esc=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const B='\u0980-\u09FF\u200c\u200d';
const mk=o=>new RegExp('(?<![' +B+ '])(?:'+Object.keys(o).sort((a,b)=>b.length-a.length).map(esc).join('|')+')(?![' +B+ '])','g');
const RD=mk(D),RU=mk(U);
const num=s=>s.replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));
const BD='[০-৯]';
function tm(h,m,p){h=+num(h);m=num(m);let ap;
 if(p==='ভোর'||p==='সকাল')ap='AM';else if(p==='রাত')ap=(h===12||h<=4)?'AM':'PM';else ap='PM';
 return h+':'+m+' '+ap}
function tr(s){
 if(!/[\u0980-\u09FF]/.test(s))return s;
 s=s.replace(RD,m=>D[m]);
 s=s.replace(new RegExp('(ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত) ('+BD+'+):('+BD+'+)','g'),(_,p,h,m)=>tm(h,m,p));
 s=s.replace(/(\d+:\d\d [AP]M) থেকে Isha পর্যন্ত/g,'from $1 until Isha');
 s=s.replace(/(\d+:\d\d [AP]M) থেকে/g,'from $1').replace(/(\d+:\d\d [AP]M) পর্যন্ত/g,'until $1');
 s=s.replace(new RegExp('('+BD+'+) দিন পর পর','g'),'Every $1 days');
 s=s.replace(new RegExp('('+BD+'+) ?ঘণ্টা (?='+BD+')','g'),'$1 h ').replace(new RegExp('('+BD+'+) ঘণ্টা','g'),'$1 h').replace(new RegExp('('+BD+'+) মিনিট','g'),'$1 min');
 s=s.replace(new RegExp('('+BD+'+) ?টি(?![\u0980-\u09FF])','g'),(_,n)=>(+num(n)===1?n+' item':n+' items'));
 s=s.replace(RU,m=>U[m]);
 return num(s)}
window.L=tr;

const SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,NOSCRIPT:1};
const ATTR=['placeholder','title','aria-label','alt'];
function node(n){
 if(n.nodeType===3){if(!n.parentNode||SKIP[n.parentNode.nodeName])return;const v=n.nodeValue,t=tr(v);if(t!==v)n.nodeValue=t;return}
 if(n.nodeType!==1||SKIP[n.nodeName])return;
 for(const a of ATTR){if(n.hasAttribute&&n.hasAttribute(a)){const v=n.getAttribute(a),t=tr(v);if(t!==v)n.setAttribute(a,t)}}
 for(let c=n.firstChild;c;c=c.nextSibling)node(c)}
new MutationObserver(ms=>{for(const m of ms)for(const n of m.addedNodes)node(n)}).observe(document,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',()=>{document.documentElement.lang='en';node(document.documentElement)});
['alert','confirm'].forEach(f=>{const o=window[f];window[f]=m=>o.call(window,tr(String(m)))});
if(window.Notification){const N=window.Notification;const W=function(t,o){return new N(tr(String(t)),o&&o.body?Object.assign({},o,{body:tr(o.body)}):o)};
 Object.defineProperty(W,'permission',{get:()=>N.permission});W.requestPermission=(...a)=>N.requestPermission(...a);window.Notification=W}
})();
