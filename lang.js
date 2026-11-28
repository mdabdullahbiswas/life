/* Hayat — ভাষা (বাংলা / English)।
   বাংলা হলে কিছুই বদলায় না। English হলে প্রতিটি পেজের লেখা এই ফাইলের অভিধান থেকে অনুবাদ হয়।
   নতুন লেখা যোগ করলে নিচের D তালিকায় বাংলা → English লাইন যোগ করুন। */
(function(){
let LANG='bn';try{LANG=JSON.parse(localStorage.getItem('dl')||'{}').lang==='en'?'en':'bn'}catch(e){}
window.LANG=LANG;
if(LANG!=='en'){window.L=s=>s;return}

const D={
'ব্যালেন্স দেখতে ট্যাপ করুন':'Tap to reveal balance',
'হাতে আছে':'In hand',
'শুরুর হিসাব বদলান':'Edit starting balances',
'এখন আমার হাতে আছে':'Cash in hand right now',
'আমার টাকা কোথায়':'Where my money is',
'অঙ্ক দেখতে অ্যাকাউন্টে চাপ দিন — ৫ সেকেন্ড পর আবার ঝাপসা হয়ে যাবে।':'Tap an account to reveal the amount — it blurs again after 5 seconds.',
'⇄ টাকা সরান':'⇄ Move money',
'ব্যালান্স ঠিক করুন':'Set balances',
'প্রথমে “ব্যালান্স ঠিক করুন” চেপে প্রতিটি অ্যাকাউন্টে এখন কত আছে বসিয়ে নিন।':'First tap “Set balances” and enter how much each account holds right now.',
'প্রতিটি অ্যাকাউন্টে এখন যত টাকা আছে লিখুন।':'Enter how much each account holds right now.',
'নতুন অ্যাকাউন্ট (ঐচ্ছিক)':'New account (optional)',
'নাম (যেমন: ব্যাংক)':'Name (e.g. Bank)',
'এখন কত আছে':'Current balance',
'সেভ করুন':'Save',
'অ্যাকাউন্ট মুছুন':'Delete account',
'মোট ব্যালান্স দেখতে চাপুন':'Tap to show total balance',
'ব্যালান্স দেখতে চাপুন':'tap to show balance',
'ট্রান্সফার':'Transfer',
'টাকা ট্রান্সফার':'Transfer money',
'ট্রান্সফার করুন':'Transfer',
'ট্রান্সফার চার্জ':'Transfer fee',
'চার্জ':'Fee',
'কোন অ্যাকাউন্টে যোগ হবে':'Add to which account',
'কোন অ্যাকাউন্ট থেকে খরচ':'Spend from which account',
'কোথা থেকে':'From',
'কোথায়':'To',
'চার্জ (ঐচ্ছিক — যেমন ক্যাশ-আউট ফি)':'Fee (optional — e.g. cash-out charge)',
'যেমন বিকাশ থেকে তুলে হাতে রাখলে মোট টাকা একই থাকে — এটি আয়-ব্যয়ে গোনা হয় না। শুধু চার্জ ব্যয় হিসেবে কাটা হয়।':'For example, withdrawing from bKash to keep as cash leaves your total unchanged — it is not counted as income or expense. Only the fee is deducted as an expense.',
'ট্রান্সফারটি মুছবেন?':'Delete this transfer?',
'দুই অ্যাকাউন্টের ব্যালান্স আগের অবস্থায় ফিরে যাবে। এর চার্জ (থাকলে) সেটিও মুছে যাবে।':'Both account balances will return to how they were. Its fee (if any) will be removed too.',
'হ্যাঁ, সরান':'Yes, move',
'মুছা যাবে না':'Cannot delete',
'এই অ্যাকাউন্টে লেনদেন আছে, মুছলে হিসাব এলোমেলো হয়ে যাবে।':'This account has transactions; deleting it would break your records.',
'অ্যাকাউন্টটি মুছবেন?':'Delete this account?',
'তালিকা থেকে সরে যাবে।':'will be removed from the list.',
'দুটি অ্যাকাউন্ট আলাদা হতে হবে':'The two accounts must be different',
'যেখান থেকে সরাবেন আর যেখানে রাখবেন — দুটি আলাদা বেছে নিন।':'Choose two different accounts: where the money leaves and where it goes.',
'ব্যালান্স কম পড়ছে':'Insufficient balance',
'-এ এখন যা আছে তার চেয়ে বেশি সরাচ্ছেন। তবুও সরাবেন?':' holds less than the amount you are moving. Move it anyway?',
'নামটি আগে থেকেই আছে':'That name already exists',
'নতুন অ্যাকাউন্টের জন্য অন্য একটি নাম দিন।':'Please choose a different name for the new account.',
'পড়াশোনা ও চাকরিতে আগের খরচ একবার বসিয়ে দিন।':'Enter your earlier study and job spending once.',
'পড়াশোনা ও চাকরির কার্ডে “এ পর্যন্ত মোট” দেখুন। হাতে, বিকাশ ইত্যাদির ব্যালান্স “আমার টাকা কোথায়” কার্ড থেকে বসান।':'See “Total so far” on the study and job cards. Set the balances of cash, bKash and so on from the “Where my money is” card.',
'অ্যাকাউন্ট':'Account',
'সাজেশন সরান':'Remove suggestion',
'উপকাজের নাম':'Subtask name','নির্দিষ্ট মাস পর পর':'Every N months','ব্রাউজারে নোটিফিকেশন বন্ধ আছে। সাইট সেটিং থেকে অনুমতি দিন।':'Notifications are blocked in this browser. Allow them in site settings.','নোটিফিকেশন চালু নেই':'Notifications are off','আজকের কাজের তালিকা':'Today\u2019s task list','আজ এখনো বাকি':'What is still pending today','কাজের সময়ে রিমাইন্ডার':'Reminder at task time','নির্ধারিত সময়ে নোটিফিকেশন':'Notification at the set time','নোটিফিকেশন চালু করুন':'Turn on notifications','পুশ নোটিফিকেশন':'Push notifications','ঠিক সময়ে পেতে অ্যাপটি Home Screen-এ ইনস্টল করুন।':'For on-time alerts, install the app to your Home Screen.','এই ডিভাইসে পুশ চালু হয়েছে।':'Push is on for this device.','পরীক্ষার পুশ পাঠানো হয়েছে।':'Test push sent.',
'আজকের লক্ষ্য পূরণ হয়েছে।':'Today\u2019s goal is reached.','আজকের প্রথম সেশন শুরু করুন।':'Start today\u2019s first session.','ফোকাস সেশন সম্পন্ন। বিরতি নিন।':'Focus session complete. Take a break.','বিরতি শেষ। ফোকাসে ফিরুন।':'Break over. Back to focus.','প্রতিদিনের পড়া ঠিক করুন। টিক দিলে সময় যোগ হবে।':'Set your daily study. Ticking adds the time.','রুটিনের নাম':'Routine name',
'পরের বার':'Next time','এই কাজের বাকি পড়া সব দিন বাদ দিয়ে পরের বারে যান':'Skip all missed days of this task and go to the next time',
'বাকি কাজ খাতা':'Pending tasks log','বাকি কাজ':'Pending tasks','উপকাজ':'Subtasks','উপকাজ লিখে ＋ চাপুন (ঐচ্ছিক)':'Type a subtask and press ＋ (optional)','উপকাজ যোগ':'Add subtask','আজকের কাজে নিন':'Move to today','বাদ দিন':'Dismiss','সব বাদ দিন':'Dismiss all','কোনো বাকি কাজ নেই':'No pending tasks','সব বাকি কাজ বাদ দেবেন? (খাতা থেকে মুছে যাবে)':'Dismiss all pending tasks? (They will be removed from the log.)',
'মাস':'Month','বছর':'Year',
/* তাসবিহ */
'তাসবিহ':'Tasbih','কোনটা কতবার পড়েছেন, এখানে লিখে রাখুন':'Log what you recited and how many times','আজকের মোট':'Today\u2019s total','সুবহানাল্লাহ':'SubhanAllah','আল্লাহু আকবার':'Allahu Akbar','ইস্তিগফার':'Istighfar','দরূদ শরীফ':'Durood Sharif','লা ইলাহা ইল্লাল্লাহ':'La ilaha illallah',
'তাসবিহ / যিকিরের নাম':'Tasbih / dhikr name','তাসবিহের নাম':'Tasbih name','কতবার':'How many times','তারিখ':'Date','বার':'times','এডিট':'Edit','বাতিল':'Cancel','সংরক্ষণ করুন':'Save','এখনও কোনো এন্ট্রি নেই':'No entries yet',
/* PWA */
'অ্যাপ হিসেবে ইনস্টল করুন':'Install as an app','ইনস্টল':'Install',
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
'ফজরের আগ পর্যন্ত':'until Fajr','এশার পর':'After Isha','এখন চলছে':'Now','চলছে':'Ongoing','পর':'later','শুরু':'Starts',
'ফজর নীল ভোর':'Fajr blue dawn','যোহর সোনালি':'Dhuhr golden','আসর কমলা':'Asr orange','মাগরিব গোলাপি':'Maghrib pink','এশা বেগুনি':'Isha purple','হানাফি আসর':'Hanafi Asr','কারাচি ১৮':'Karachi 18',
/* রোজা / রমজান */
'ফরজ রোজা (রমজান)':'Fard fast (Ramadan)','রোজা নিষিদ্ধ (ঈদ/তাশরীকের দিন)':'Fasting prohibited (Eid / Tashreeq days)','আরাফার দিন':'Day of Arafah','আশুরা':'Ashura','আইয়ামে বীজ':'Ayyam al-Bid (white days)','শাওয়ালের ছয় রোজা':'Six fasts of Shawwal',
'নফল রোজার দিন':'Voluntary fast day','আজ নফল রোজার বিশেষ দিন নয়':'Today is not a special day for a voluntary fast','আজ নফল রোজা রেখেছি':'I kept a voluntary fast today','নফল রোজা ট্র্যাকার':'Voluntary fast tracker','টি এ বছর':'this year','এ মাসে':'this month',
'রমজান মোড':'Ramadan mode','প্রিভিউ':'Preview','আলহামদুলিল্লাহ':'Alhamdulillah','আজকের ইফতারের সময় হয়েছে':'It\u2019s iftar time','ইফতারের সময় হয়েছে':'It\u2019s time for iftar','সেহরি শেষ হতে বাকি':'Time left until suhoor ends','ইফতার হতে বাকি':'Time left until iftar','সেহরি শেষ হতে ১০ মিনিট বাকি':'10 minutes left until suhoor ends','সেহরির শেষ সময়':'Suhoor ends','সেহরি শেষ':'Suhoor ends','আজকের রোজা':'Today\u2019s fast','সেহরি':'Suhoor','ইফতার':'Iftar','রোজা':'Fasting','ঈদ':'Eid','তাশরীকের দিন':'Tashreeq days','ফরজ রোজা':'Fard fast','রোজা নিষিদ্ধ':'Fasting prohibited',
/* শুভেচ্ছা */
'সুপ্রভাত':'Good morning','শুভ অপরাহ্ন':'Good afternoon','শুভ সন্ধ্যা':'Good evening','শুভ রাত্রি':'Good night','আসসালামু আলাইকুম':'Assalamu Alaikum','মাশাআল্লাহ':'MashaAllah',
/* কাজ */
'আজকের কাজ':'Today\u2019s tasks','আজকের সব কাজ শেষ':'All of today\u2019s tasks are done','আজ কোনো কাজ নেই। নতুন কাজ যোগ করতে নিচের বাটনে চাপুন।':'No tasks today. Press the button below to add a new task.','আজ কোনো কাজ নেই। নিচে নতুন কাজ যোগ করুন।':'No tasks today. Add a new task below.','নতুন কাজ যোগ করুন':'Add a new task','কাজ যোগ করুন':'Add task','রোজা ট্র্যাকার':'Fast tracker','রেখেছি':'Fasted','রাখিনি':'Didn\u2019t fast','আজ কোনো কাজ নেই।':'No tasks today.','কাজের নাম':'Task name','কোন দিনের কাজ':'Which day','পুনরাবৃত্তি':'Repeat','শুধু এই দিন (পুনরাবৃত্তি নেই)':'This day only (no repeat)','নির্দিষ্ট দিন পর পর':'Every N days','কত দিন পর পর':'Every how many days',
'একবার':'Once','প্রতিদিন':'Daily','প্রতি সপ্তাহে':'Weekly','প্রতি মাসে':'Monthly','প্রতি বছর':'Yearly','দিন পর পর':'days apart',
'আজ সম্পন্ন':'Done today','টানা পূর্ণ দিন':'Full-day streak','পরিসংখ্যান':'Statistics','আগামী ৭ দিন':'Next 7 days','আগামীকাল':'Tomorrow','আজ':'Today','কোনো কাজ নেই':'No tasks','সব কাজ':'All tasks','মোট কাজ':'Total tasks','এখনো কোনো কাজ যোগ করা হয়নি':'No tasks added yet','কাজটি মুছে ফেলবেন?':'Delete this task?','কাজের সময়':'Task time','কাজের তালিকা':'Task list','এখনো কোনো কাজ নেই।':'No tasks yet.','কাজ':'Tasks',
/* হিসাব */
'এ মাসের হিসাব':'This month\u2019s accounts','এ মাসের তালিকা':'This month\u2019s list','এ মাসে এখনো কোনো হিসাব নেই':'No entries this month yet','হিসাব পেজ':'Accounts page','ব্যালেন্স':'Balance','মোট অবশিষ্ট':'Total remaining','অবশিষ্ট':'Remaining','আয়':'Income','ব্যয়':'Expense','টাকা':'Amount','বিবরণ':'Description','যোগ':'Add','হিসাব':'Accounts',
/* সেটিং */
'সব কিছু এক জায়গা থেকে নিয়ন্ত্রণ করুন':'Control everything from one place','চেহারা':'Appearance','রাতের মোড':'Night mode','অন্ধকার থিমে চোখের আরাম':'Easy on the eyes with the dark theme','রঙের সেট':'Colour theme','ওয়াক্ত অনুযায়ী রং':'Colour by prayer time','এমারেল্ড':'Emerald','গোল্ড':'Gold','নেভি':'Navy','বারগান্ডি':'Burgundy','শ্যাম্পেইন গোল্ড':'Champagne Gold','লাল':'Red',
'মোড ও নোটিফিকেশন':'Mode & notifications','সেহরি-ইফতার কাউন্টডাউন ও তারাবিহ ট্র্যাকার; রমজান মাসে নিজে থেকেই চালু হয়':'Suhoor/iftar countdown and Taraweeh tracker; turns on automatically in Ramadan','নামাজ, সেহরি-ইফতার ও কাজের সময়ে জানাবে':'Notifies you at prayer, suhoor/iftar and task times','নোটিফিকেশন পেতে হোম পেজ ব্রাউজারে খোলা থাকতে হবে।':'The home page must stay open in the browser to receive notifications.','নোটিফিকেশন':'Notifications','ইফতার ও কাজের সময়ে জানাবে':'Notifies you at iftar and task times','রমজান মাসে নিজে থেকেই চালু হয়':'Turns on automatically in Ramadan','এই ব্রাউজারে নোটিফিকেশন সমর্থিত নয়':'Notifications are not supported in this browser',
'প্রতি ওয়াক্তে কত':'How many per prayer','সবগুলোতে যোগ':'Add to all','আদায় করলে − চাপুন, বাকি থাকলে +।':'Press \u2212 when prayed, + when still owed.','কাযা':'Qaza','জুম্মা':'Jumu\u2019ah','বাকি ওয়াক্ত (কাযা)':'Missed prayers (Qaza)','গতকাল':'Yesterday','গণনা শুরু':'Counting from','কোনো কাযা নেই — মাশাআল্লাহ ✓':'No Qaza pending — mashaAllah ✓','ওয়াক্ত শেষ হয়েছে অথচ টিক দেওয়া হয়নি, সেগুলো এখানে দেখাবে · কাযা আদায় করলে ওয়াক্তের নামে ট্যাপ করুন — আদায় হিসেবে গণ্য ও রেকর্ড হবে, তালিকা থেকে সরে যাবে':'Prayers whose time ended without a tick appear here · tap a prayer once made up — it counts as prayed, is recorded, and leaves this list','কাযা আদায় হয়েছে (মোট)':'Qaza prayers made up (total)','কাযা আদায় ✓':'Qaza prayed ✓',
'গুগল শিট সিঙ্ক':'Google Sheet sync','Apps Script ওয়েব অ্যাপের লিংক দিন (পরের ধাপে সংযোগ হবে)।':'Enter the Apps Script web app link (connection comes in the next step).','সংরক্ষণ':'Save',
'ডেটা ব্যবস্থাপনা':'Data management','সব তথ্য শুধু এই ব্রাউজারে জমা থাকে। ব্যাকআপ নিয়ে রাখুন।':'All data is stored only in this browser. Keep a backup.','ব্যাকআপ নামান':'Download backup','ব্যাকআপ আনুন':'Import backup','সব মুছুন':'Delete all','ব্যাকআপ আনা হয়েছে':'Backup imported','ফাইলটি সঠিক ব্যাকআপ নয়':'This file is not a valid backup','সব তথ্য (নামাজ, কাজ, হিসাব, কাযা, সেটিং) চিরতরে মুছে যাবে। নিশ্চিত?':'All data (prayers, tasks, accounts, qaza, settings) will be erased permanently. Are you sure?','মুছুন':'Delete',
'আবহাওয়া আনা যায়নি। ইন্টারনেট সংযোগ দেখুন।':'Couldn\u2019t load the weather. Check your connection.','আবহাওয়া':'Weather','ঢাকা':'Dhaka','অনুভূত':'Feels like','আর্দ্রতা':'Humidity','বাতাস':'Wind','কিমি/ঘ':'km/h','বৃষ্টির সম্ভাবনা':'Chance of rain','সর্বোচ্চ':'High','সর্বনিম্ন':'Low','পরিষ্কার আকাশ':'Clear sky','আংশিক মেঘলা':'Partly cloudy','মেঘলা':'Cloudy','কুয়াশা':'Foggy','গুঁড়ি বৃষ্টি':'Drizzle','ভারী বৃষ্টি':'Heavy rain','বজ্রসহ বৃষ্টি':'Thunderstorm','বৃষ্টি':'Rain','তুষার':'Snow','লোড হচ্ছে…':'Loading…','আবার চেষ্টা':'Retry','রবি':'Sun','সোম':'Mon','মঙ্গল':'Tue','বুধ':'Wed','বৃহ':'Thu','শুক্র':'Fri','শনি':'Sat',
'ফোকাস করুন, ধারাবাহিকতা ধরে রাখুন':'Stay focused, keep the streak','ফোকাস সেশন সম্পন্ন! এবার একটু বিরতি নিন।':'Focus session complete! Take a short break.','বিরতি শেষ! আবার ফোকাসে ফিরুন।':'Break over! Back to focus.','কোনো বিষয় নেই। নতুন বিষয় যোগ করুন।':'No subjects yet. Add a new one.','পড়াশোনা':'Study','পড়া':'Study','ফোকাস টাইমার':'Focus timer','ফোকাস':'Focus','বিরতি':'Break','শুরু করুন':'Start','চালিয়ে যান':'Resume','থামান':'Pause','সেশন শেষ':'End session','রিসেট':'Reset','কোন বিষয়':'Subject','সাধারণ':'General','আজকের পড়া':'Today\u2019s study','লক্ষ্য পূরণ':'Goal reached','লক্ষ্য':'Goal','গড়':'Avg','দিনের ধারা':'day streak','সেশন':'Sessions','এ সপ্তাহ':'This week','সাপ্তাহিক পড়া':'Weekly study','বিষয়সমূহ':'Subjects','বিষয়ের নাম':'Subject name','ম্যানুয়াল যোগ':'Add manually','বিষয়টি মুছে ফেলবেন?':'Delete this subject?','পরীক্ষা':'Exams','পরীক্ষার নাম':'Exam name','কোনো পরীক্ষা নেই':'No exams yet','দিন বাকি':'days left','শেষ হয়েছে':'Ended',
'ব্যাগ প্যাকিং':'Bag packing','সব ব্যাগ':'All bags','গ্রামে যাওয়ার ব্যাগ':'Village trip bag','ঢাকা ফেরার ব্যাগ':'Back-to-Dhaka bag','বাজারের ব্যাগ':'Market bag','ভ্রমণের ব্যাগ':'Travel bag','অফিস ব্যাগ':'Office bag','হাসপাতাল ব্যাগ':'Hospital bag','নতুন ব্যাগ':'New bag','নিজের মতো তালিকা বানান':'Build your own list','ব্যাগের নাম':'Bag name','জিনিস প্যাক হয়েছে':'items packed','প্যাক হয়েছে':'packed','প্যাক':'Packed','বাকি':'Left','সব':'All','জরুরি বাকি':'Must-haves left','জরুরি':'Must-have','প্যাকিং শুরু করুন':'Start packing','ভালো এগোচ্ছে':'Going well','প্রায় হয়ে এসেছে':'Almost there','সব প্রস্তুত — নিশ্চিন্তে বের হোন':'All set — you\u2019re good to go','শেয়ার':'Share','সব খুলুন':'Unpack all','স্মার্ট অপশন':'Smart options','দিন':'days','শীত':'Winter','বর্ষা':'Rainy season','বাচ্চা সাথে':'With kids','দিন বদলালে জামা-মোজার সংখ্যা নিজে ঠিক হবে; অপশন চাপলে দরকারি জিনিস যোগ হবে।':'Changing days updates clothes automatically; tapping an option adds the essentials.','তালিকা':'List','এখানে কিছু নেই':'Nothing here','নতুন জিনিসের নাম':'New item name','যোগ করুন':'Add','এই ব্যাগটি মুছে ফেলবেন?':'Delete this bag?','তালিকা কপি হয়েছে':'List copied','মোবাইল ও চার্জার':'Phone & charger','পাওয়ার ব্যাংক':'Power bank','টাকা ও কার্ড':'Cash & cards','NID ও জরুরি কাগজ':'NID & important papers','নিয়মিত ওষুধ':'Regular medicine','জামা':'Shirts','আন্ডারওয়্যার':'Underwear','মোজা':'Socks','পাঞ্জাবি ও টুপি':'Panjabi & cap','জায়নামাজ':'Prayer mat','টুথব্রাশ ও পেস্ট':'Toothbrush & paste','সাবান ও শ্যাম্পু':'Soap & shampoo','তোয়ালে':'Towel','স্যান্ডেল':'Sandals','বাড়ির জন্য উপহার/মিষ্টি':'Gifts/sweets for home','টর্চ':'Torch','টিকিট ও বাসের তথ্য':'Ticket & bus info','টাকা ও খুচরা ভাড়া':'Cash & fare change','ঢাকার ঘরের চাবি':'Dhaka home keys','বাড়ি থেকে আনা খাবার/পিঠা':'Food/pitha from home','ধোয়া জামাকাপড়':'Washed clothes','পানির বোতল':'Water bottle','অফিস/কাজের জিনিস':'Work items','ব্যাগে তালা ও চেইন চেক':'Check bag lock & zips','কাপড়ের ব্যাগ':'Cloth bags','নগদ টাকা':'Cash','বাজারের তালিকা':'Shopping list','মোবাইল ও বিকাশ':'Phone & bKash','ছোট খুচরা টাকা':'Small change','মাছ-মাংসের আলাদা ব্যাগ':'Separate bag for fish/meat','ফ্রিজ/কুলার ব্যাগ':'Cooler bag','ছাতা বা টুপি':'Umbrella or cap','পাসপোর্ট/NID':'Passport/NID','টিকিট ও বুকিং':'Tickets & bookings','ফোন ও চার্জার':'Phone & charger','জুতা ও স্যান্ডেল':'Shoes & sandals','টয়লেট্রিজ':'Toiletries','সানগ্লাস ও টুপি':'Sunglasses & cap','ক্যামেরা':'Camera','হেডফোন':'Headphones','ফার্স্ট এইড বক্স':'First aid kit','ল্যাপটপ/ট্যাব':'Laptop/tablet','চার্জার':'Charger','মোবাইল':'Phone','ওয়ালেট ও আইডি কার্ড':'Wallet & ID card','চাবি':'Keys','ডায়েরি ও কলম':'Diary & pen','টিফিন ও পানি':'Tiffin & water','ছাতা':'Umbrella','আগের রিপোর্ট ও প্রেসক্রিপশন':'Previous reports & prescriptions','ওষুধের তালিকা':'Medicine list','চাদর ও তোয়ালে':'Sheet & towel','জামাকাপড়':'Clothes','হালকা খাবার':'Light food','চাদর/সোয়েটার':'Shawl/sweater','মাফলার':'Scarf','লোশন':'Lotion','রেইনকোট':'Raincoat','পলিথিন ব্যাগ':'Polythene bags','ডায়াপার ও টিস্যু':'Diapers & tissues','বাচ্চার খাবার':'Baby food','খেলনা':'Toys',
'ফেরার ব্যাগ বানান':'Build return bag','গ্রাম থেকে ফেরার মিলন':'Return check from village','নিয়ে গিয়েছিলেন':'You took','ফিরেছে':'Returned','ফেরেনি':'Not returned','এখনো ফেরেনি':'Not yet returned','সব জিনিস ফিরেছে':'Everything is back',
'যাত্রার তারিখ':'Trip date','তারিখ মুছুন':'Clear date','যাত্রা':'Trip','আজই যাত্রা':'Trip is today','আগামীকাল যাত্রা':'Trip is tomorrow','যাত্রার দিন পেরিয়ে গেছে':'Trip date has passed','তারিখ দিলে কাউন্টডাউন দেখাবে ও কাজের তালিকায় যোগ হবে।':'Set a date to see a countdown and add the trip to your task list.',
'গন্তব্যের আবহাওয়া':'Destination weather','খুঁজুন':'Search','জেলা/উপজেলা বা শহরের নাম':'District, upazila or city name','গন্তব্যের নাম দিলে সেখানকার আবহাওয়া দেখে দরকারি জিনিসের পরামর্শ দেওয়া হবে।':'Enter a destination to get packing suggestions based on its weather.','জায়গাটি খুঁজে পাওয়া যায়নি':'Place not found','তারিখটি ১৬ দিনের পূর্বাভাসের বাইরে — কাছাকাছি এলে পরামর্শ আসবে।':'The date is beyond the 16-day forecast — suggestions will appear closer to the date.','দরকারি জিনিস যোগ করা আছে ✓':'Needed items are already added ✓','আবহাওয়া স্বাভাবিক — বাড়তি কিছু লাগবে না।':'Weather looks normal — nothing extra needed.','কাল':'Tomorrow','যাত্রার সময়':'Trip time','টুপি':'Cap',
/* শ্রুতিমধুর নতুন লেখা (namaz.html) — পুরোনো চাবি অন্য পেজের জন্য রাখা আছে */
'কোন যিকির কতবার পড়লেন, এখানে যত্ন করে লিখে রাখুন':'Log what you recited and how many times','এখনও কিছু লেখা হয়নি':'No entries yet','যে ওয়াক্ত পেরিয়ে গেছে অথচ টিক পড়েনি, তা এখানে জমা থাকবে · কাযা আদায় করে ওয়াক্তের নামে ট্যাপ করুন — তা আদায় হিসেবে লেখা থাকবে আর তালিকা থেকে সরে যাবে':'Prayers whose time ended without a tick appear here · tap a prayer once made up — it counts as prayed, is recorded, and leaves this list',
'ভাষা':'Language','সেটিং':'Settings','হোম':'Home',
/* লেনদেনের খাতা (invoice.html) */
'জানু':'Jan','ফেব্রু':'Feb','সেপ্টে':'Sep','অক্টো':'Oct','নভে':'Nov','ডিসে':'Dec',
'লেনদেনের খাতা':'Transaction ledger',
'কে কত পাবে, কাকে কত দেব — মানুষ ধরে হিসাব, আর যে কাউকে বিবরণী পাঠানো যায়':'Who owes me, whom I owe — tracked person by person, with a statement you can send to anyone',
'নতুন লেনদেন':'New transaction',
'লেনদেন এডিট':'Edit transaction',
'লেনদেন সেভ করুন':'Save transaction',
'আপডেট করুন':'Update',
'আমি দিলাম':'I gave',
'সে দিল':'They gave',
'সে দিয়েছে':'They gave',
'আমি দিয়েছি':'I gave',
'আপনি দিয়েছেন':'You gave',
'আপনি':'You',
'ধার বা তার জন্য খরচ':'A loan, or an expense paid for them',
'ধার, ফেরত বা আমার জন্য খরচ':'A loan, a repayment, or an expense paid for me',
'সাম্প্রতিক — ট্যাপ করলেই নাম ও ফোন বসে যাবে':'Recent — tap to fill in name and phone',
'নাম':'Name',
'ফোন (ঐচ্ছিক)':'Phone (optional)',
'ফোন':'Phone',
'নাম লিখুন বা বেছে নিন':'Type or pick a name',
'কিসের বাবদ ও কত টাকা':'What for, and how much',
'একসাথে একাধিক জিনিস যোগ করা যায়':'you can add several items at once',
'কিসের বাবদ (যেমন: ফর্ম ফি)':'What for (e.g. form fee)',
'+ আরেকটা জিনিস':'+ Add another item',
'জিনিসটি সরান':'Remove this item',
'সরান':'Remove',
'বাবদ':'For',
'কাজের খরচ':'Work expense',
'ধার':'Loan',
'বাজার':'Groceries',
'যাতায়াত':'Transport',
'রিচার্জ / বিল':'Recharge / bill',
'চিকিৎসা':'Medical',
'উপহার':'Gift',
'অন্যান্য':'Other',
'লেনদেনসমূহ':'Transactions',
'লেনদেন':'Transaction',
'এই মানুষের পুরো খাতা মুছুন':'Delete this person\u2019s entire ledger',
'চলমান হিসাব':'Open account',
'চলমান':'Open',
'পাব':'to receive',
'দেব':'to pay',
'✓ সব হিসাব মিটে গেছে':'✓ All accounts settled',
'নতুন লেনদেন যোগ করলে নতুন পর্ব শুরু হবে':'Adding a transaction starts a new cycle',
'মিটেছে':'Settled',
'পর্ব:':'Cycle:',
'পর্ব':'Cycle',
'মানুষের খাতা':'People\u2019s ledgers',
'নাম বা ফোন দিয়ে খুঁজুন':'Search by name or phone',
'সবাই':'Everyone',
'আমি পাব':'I\u2019ll receive',
'আমি দেব':'I owe',
'মিটে গেছে':'Settled',
'এই ফিল্টারে কেউ নেই':'No one in this filter',
'এখনো কোনো লেনদেন নেই — ওপরের ফর্ম থেকে শুরু করুন':'No transactions yet — start from the form above',
'ব্যাকআপ':'Backup',
'কার হিসাব দেখবেন?':'Whose account would you like to see?',
'বাম পাশ থেকে কাউকে বেছে নিন, অথবা প্রথম লেনদেনটা যোগ করুন।':'Pick someone from the left, or add the first transaction.',
'এখানে তার হিসাব বিবরণী তৈরি হবে — ছবি বা মেসেজ করে পাঠাতে পারবেন।':'Their account statement will appear here — you can send it as an image or a message.',
'আমার নাম (বিবরণীর মাথায় থাকবে)':'My name (shown at the top of the statement)',
'হিসাব বিবরণী':'Account statement',
'লেনদেনের হিসাব বিবরণী':'Transaction statement',
'আমি আপনাকে দেব':'I owe you',
'আপনি আমাকে দেবেন':'You owe me',
'বাকি আছে':'Due',
'আমার দেনা':'I owe',
'মিটে গেছে ✓':'Settled ✓',
'হিসাব মিটে গেছে':'Account settled',
'হিসাব মিটল':'Settled',
'জাযাকাল্লাহু খাইরান':'Jazakallahu khayran',
'হিসাব পরিষ্কার, সম্পর্ক আরও পরিষ্কার':'clear accounts, clearer relations',
'হিসাবে কোনো ভুল থাকলে জানাবেন — ধন্যবাদ':'Please let me know if there is any mistake — thank you',
'আগের হিসাব মিটে গেছে — এটি নতুন পর্বের বিবরণী। ভুল থাকলে জানাবেন':'The earlier account is settled — this is the statement for the new cycle. Please let me know of any mistakes',
'📤 শেয়ার':'📤 Share',
'প্রিন্ট / PDF':'Print / PDF',
'✓ হিসাব মিটিয়ে দিন':'✓ Mark as settled',
'সোনালি':'Gold',
'নাম লিখুন':'Enter a name',
'অন্তত একটি জিনিসের টাকা লিখুন':'Enter the amount for at least one item',
'প্রতিটি জিনিসের টাকা লিখুন':'Enter an amount for each item',
'তারিখ দিন':'Enter a date',
'এই জিনিসের টাকা লিখুন':'Enter the amount for this item',
'টাকা লিখুন':'Enter an amount',
'আপডেট হয়েছে ✓':'Updated ✓',
'সেভ হয়েছে ✓':'Saved ✓',
'মুছে ফেলা হয়েছে':'Deleted',
'খাতা মুছে ফেলা হয়েছে':'Ledger deleted',
'হিসাব মিটে গেছে ✓ — আগের হিসাব “পর্ব” হিসেবে জমা থাকল':'Account settled ✓ — the earlier account is kept as a cycle',
'সেভ করা যায়নি, জায়গা ভরে গেছে?':'Could not save — is storage full?',
'ছবির টুল লোড হয়নি, ইন্টারনেট দেখুন':'Image tool did not load — check your internet',
'ছবি বানানো হচ্ছে…':'Creating image…',
'ছবি বানানো যায়নি':'Could not create the image',
'ছবি কপি হয়েছে — চ্যাটে Ctrl+V করে পাঠান':'Image copied — paste it into the chat with Ctrl+V',
'ছবি সেভ হয়েছে — চ্যাটে অ্যাটাচ করে পাঠান':'Image saved — attach it in the chat',
'এই ব্রাউজারে শেয়ার নেই, ছবি সেভ হয়েছে':'Sharing is not available in this browser; image saved',
'আমাদের হিসাব বিবরণী পাঠালাম':'I\u2019ve sent our account statement',
'আমাদের লেনদেনের হিসাব':'Our transaction summary',
'আলহামদুলিল্লাহ, হিসাব মিটে গেছে ✓':'Alhamdulillah, the account is settled ✓',
'মোট আমি পাব':'Total to receive','মোট আমি দেব':'Total to pay','আয়-ব্যয়ের হিসাব →':'Income & expenses →','আয়-ব্যয়ের হিসাব':'Income & expenses',
'সাম্প্রতিক':'Recent','আমার নাম':'My name','আয়-ব্যয়ের হিসাবেও রাখুন':'Also keep in income & expenses','হিসাব থেকে সরান':'Remove from accounts',
'সব হিসাবে তুলুন / সরান':'Add / remove all to accounts','হিসাব মিটিয়ে দিন':'Mark as settled','এখনো কোনো লেনদেন নেই':'No transactions yet',
'তালিকা থেকে কাউকে বেছে নিন, অথবা নতুন লেনদেন যোগ করুন।':'Pick someone from the list, or add a transaction.',
'আয়-ব্যয়ের হিসাবে যুক্ত হয়েছে':'Added to income & expenses','হিসাব থেকে সরানো হয়েছে':'Removed from accounts','সব হিসাব থেকে সরানো হয়েছে':'All removed from accounts','সব লেনদেন হিসাবে যুক্ত হয়েছে':'All transactions added to accounts',
'শেষ সিঙ্ক:':'Last sync:','শেষ ব্যাকআপ:':'Last backup:','ব্যাকআপ নেওয়া হয়নি':'No backup yet','এখনো ব্যাকআপ নেওয়া হয়নি':'No backup yet','পরীক্ষা করুন':'Send a test','ইনস্টল করা আছে':'Installed','অ্যাপ ইনস্টল করুন':'Install app','ব্রাউজারের মেনু থেকে “হোম স্ক্রিনে যোগ করুন” বা “ইনস্টল” বেছে নিন।':'From the browser menu, choose \u201cAdd to Home Screen\u201d or \u201cInstall\u201d.','আগের মতো করুন':'Reset to default','এখনই সিঙ্ক':'Sync now',
'আজকের পড়া শুরু করুন':'Start today\u2019s study',
/* সেটিং পেজ */
'পরবর্তী নামাজের কাউন্টডাউন':'Next prayer countdown','নফল নামাজসহ':'Including voluntary prayers','শুধু নফল রোজার দিনে আসে':'Shows only on voluntary fast days','হিসাবের সারাংশ':'Account summary',
'শিটে সংরক্ষিত':'Saved to Sheet','✅ তথ্য গুগল শিটে সিঙ্ক হচ্ছে। শেষ সিঙ্ক:':'✅ Data is syncing to Google Sheet. Last sync:','এইমাত্র':'just now','এছাড়া ব্যাকআপ ফাইলও নিয়ে রাখতে পারেন।':'You can also keep a backup file.',
'ব্যাকআপ নেই':'No backup','ব্যাকআপ পুরোনো':'Backup is old','ব্যাকআপ নিরাপদ':'Backup is safe','⚠️ এখনো ব্যাকআপ নেওয়া হয়নি। ব্রাউজারের ডেটা মুছলে সব হারাবে।':'⚠️ No backup has been taken yet. If the browser data is cleared, everything will be lost.','✅ শেষ ব্যাকআপ আজ।':'✅ Last backup: today.',
'আপনার তথ্য':'Your data','আকার':'Size','🔔 পরীক্ষা করুন':'🔔 Send a test','অ্যাপ':'App','✅ অ্যাপ হিসেবে ইনস্টল করা আছে':'✅ Installed as an app',
'হোম স্ক্রিন থেকে এক ট্যাপে খুলুন, অফলাইনেও চলবে।':'Open it from your home screen in one tap; it works offline too.','📲 অ্যাপ ইনস্টল করুন':'📲 Install app',
'iPhone-এ Safari-র শেয়ার বাটন থেকে "হোম স্ক্রিনে যোগ করুন" চাপুন। Android-এ Chrome-এর মেনু থেকে "ইনস্টল" করুন।':'On iPhone, tap Safari\u2019s Share button, then \u201cAdd to Home Screen\u201d. On Android, open Chrome\u2019s menu and choose \u201cInstall\u201d.',
'🔄 আপডেট ও ক্যাশ পরিষ্কার':'🔄 Update & clear cache','আপডেট ও ক্যাশ পরিষ্কার':'Update & clear cache','নতুন সংস্করণ না এলে এটি চাপুন। আপনার তথ্য মুছবে না।':'If the new version doesn\u2019t appear, tap this. Your data won\u2019t be deleted.',
'হোম পেজ':'Home page','কোন কার্ড দেখাবে আর কোন ক্রমে, তা ঠিক করুন।':'Choose which cards to show and in what order.','উপরে':'Up','নিচে':'Down','↺ আগের মতো করুন':'↺ Reset to default',
'✅ শেষ সিঙ্ক:':'✅ Last sync:','এখনো সিঙ্ক হয়নি':'Not synced yet','চালু':'On',
'ফোন ও কম্পিউটারের তথ্য গুগল শিটের মাধ্যমে মিলিয়ে রাখে। ইন্টারনেট না থাকলেও অ্যাপ চলবে, সংযোগ ফিরলে নিজে সিঙ্ক হবে। একই তথ্য দুই জায়গায় বদলালে সর্বশেষ বদলটি জেতে।':'Keeps your phone and computer data in step through Google Sheets. The app keeps working without internet and syncs by itself when the connection returns. If the same data is changed in two places, the latest change wins.',
'গোপন টোকেন':'Secret token','সংরক্ষণ ও সংযোগ':'Save & connect','🔄 এখনই সিঙ্ক':'🔄 Sync now','সংযোগ বিচ্ছিন্ন করুন':'Disconnect',
'সব তথ্য শুধু এই ব্রাউজারে জমা থাকে। নিয়মিত ব্যাকআপ নিয়ে রাখুন।':'All data is stored only in this browser. Please back up regularly.',
'ব্যাকআপ নামানো হয়েছে ✓':'Backup downloaded ✓','নোটিফিকেশন ঠিকমতো কাজ করছে ✓':'Notifications are working ✓','পাঠানো যায়নি':'Could not send',
'সব তথ্য (নামাজ, কাজ, হিসাব, কাযা, সেটিং) এই ডিভাইস থেকে মুছে যাবে।':'All data (prayers, tasks, accounts, qaza, settings) will be erased from this device.',
'সিঙ্ক চালু থাকলে শিটের তথ্য থেকে যাবে এবং আবার নেমে আসবে।':'If sync is on, the Sheet data will remain and come back down again.','নিশ্চিত?':'Are you sure?',
'ক্যাশ মুছে অ্যাপ নতুন করে লোড হবে। তথ্য মুছবে না। চালিয়ে যাবেন?':'The cache will be cleared and the app will reload. Your data won\u2019t be deleted. Continue?',
'sync.js লোড হয়নি — ফাইলটি আপলোড করেছেন?':'sync.js did not load \u2014 did you upload the file?','sync.js লোড হয়নি — ফাইলটি আপলোড করেছেন? তারপর "আপডেট ও ক্যাশ পরিষ্কার" চাপুন':'sync.js did not load \u2014 did you upload the file? Then tap \u201cUpdate & clear cache\u201d',
'সিঙ্ক হচ্ছে…':'Syncing…','সিঙ্ক হয়েছে ✓':'Synced ✓','সিঙ্ক হয়নি:':'Sync failed:',
'এই ডিভাইসে সিঙ্ক বন্ধ হবে। শিটের তথ্য ও এই ডিভাইসের তথ্য থেকে যাবে।':'Sync will stop on this device. The Sheet data and this device\u2019s data will both remain.',
'অনুমতি দেওয়া হয়নি':'Permission was not granted',
/* হেডার মেনু */
'খাতা':'Ledger','ব্যাগ':'Bags','প্রধান মেনু':'Main menu','মেনু':'Menu','সংযোগ হচ্ছে…':'Connecting…','সংযোগ সফল ✓':'Connected ✓','সংযোগ হয়নি:':'Connection failed:',
/* নামাজ পেজ */
'সুন্নতে মুয়াক্কাদা':'Sunnah Muakkadah',
'রাসূল (সা.) নিয়মিত আদায় করতেন; বিনা কারণে ছেড়ে দেওয়া উচিত নয়।':'The Prophet (ﷺ) prayed it regularly; it should not be left without a reason.',
'সুন্নতে গাইরে মুয়াক্কাদা':'Sunnah Ghayr Muakkadah',
'পড়লে সওয়াব মেলে, না পড়লে গুনাহ হয় না।':'Praying it earns reward; not praying it is not a sin.',
'ওয়াজিব':'Wajib',
'ফরজের প্রায় কাছাকাছি গুরুত্বপূর্ণ; কখনো ছেড়ে দেওয়া যায় না।':'Almost as important as Fard; it must never be left.',
'নফল':'Voluntary',
'ঐচ্ছিক; যত বেশি পড়বেন, তত বেশি সওয়াব পাবেন।':'Optional; the more you pray, the more reward you earn.',
'এখন':'Now',
'নফল নামাজের ফজিলত ও গুরুত্ব':'Virtues and importance of voluntary prayers',
'আল্লাহর নৈকট্য ও ফরজের ঘাটতি পূরণ':'Nearness to Allah and making up for shortfalls in Fard',
'নফল নামাজ আল্লাহ তাআলার নৈকট্য লাভের এক শ্রেষ্ঠ উপায়। ফরজ ও ওয়াজিবের পাশাপাশি নফল ইবাদত বান্দার আমলনামা ভারী করে এবং কিয়ামতের দিন ফরজের ঘাটতি পূরণ করে দেয়।':'Voluntary prayer is one of the best ways to draw near to Allah the Almighty. Alongside Fard and Wajib, voluntary worship adds weight to a servant’s record of deeds and makes up for any shortfall in Fard on the Day of Judgement.',
'রাসূলে কারীম (সা.) ইরশাদ করেছেন, বান্দা নফল ইবাদতের মাধ্যমে আল্লাহর এত বেশি নিকটবর্তী হতে থাকে যে, একপর্যায়ে আল্লাহ তাকে এমনভাবে ভালোবাসতে শুরু করেন যে, সে যার দ্বারা দেখে, তা দিয়েই সে দেখে; যার দ্বারা শুনে, তা দিয়েই সে শুনে।':'The Prophet (ﷺ) said that a servant keeps drawing nearer to Allah through voluntary worship, until Allah loves him so much that He becomes the sight with which he sees and the hearing with which he hears.',
'সহিহ বুখারি':'Sahih al-Bukhari',
'কবরের আলো ও শান্তি':'Light and peace in the grave',
'নিয়মিত নফল নামাজ—বিশেষ করে তাহাজ্জুদ ও চাশত—কবরের অন্ধকার দূর করে এবং পরকালের চিরস্থায়ী জীবনের প্রস্তুতি সহজ করে তোলে।':'Regular voluntary prayers — especially Tahajjud and Duha — dispel the darkness of the grave and make preparing for the eternal life of the Hereafter easier.',
'২–৮ রাকাত · রাতের শেষ তৃতীয়াংশের নিরিবিলি ইবাদত':'2–8 rak’ahs · quiet worship in the last third of the night',
'সময়':'Time',
'এশার পর থেকে সুবহে সাদিকের আগ পর্যন্ত; রাতের শেষ তৃতীয়াংশে পড়াই উত্তম':'From after Isha until before Subh Sadiq (true dawn); best prayed in the last third of the night',
'রাকাত':'Rak’ah',
'কমপক্ষে ২ রাকাত; সর্বোচ্চ ৮ রাকাত পর্যন্ত পড়া উত্তম':'At least 2 rak’ahs; up to 8 rak’ahs is best',
'মাসায়েল':'Rulings',
'এশার ফরজ ও সুন্নতের পর ঘুমিয়ে উঠে এই নামাজ আদায় করা হয়। ঘুম থেকে উঠতে না পারার আশঙ্কা থাকলে ঘুমানোর আগেও পড়ে নেওয়া যায়।':'This prayer is offered after waking from sleep, following the Isha Fard and Sunnah. If you fear you may not wake up, it can also be prayed before sleeping.',
'চাশতের নামাজ (দোহা)':'Duha (Chasht) prayer',
'২–১২ রাকাত · সূর্য ওঠার পর থেকে দুপুরের আগ পর্যন্ত':'2–12 rak’ahs · from after sunrise until before noon',
'সূর্য ভালোভাবে ওপরে ওঠার পর (সূর্যোদয়ের প্রায় ২০–২৫ মিনিট পর) থেকে দ্বিপ্রহরের ঠিক আগ মুহূর্ত পর্যন্ত':'From after the sun has risen well (about 20–25 minutes after sunrise) until just before midday',
'ন্যূনতম ২, সর্বোচ্চ ১২ রাকাত; সাধারণত ৪ বা ৮ রাকাত পড়া মুস্তাহাব':'Minimum 2, maximum 12 rak’ahs; praying 4 or 8 is usually mustahab',
'হযরত আবু হুরায়রা (রা.) বলেন, আমার বন্ধু (রাসূল সা.) আমাকে তিনটি ওসিয়ত করেছেন… তার মধ্যে অন্যতম হলো প্রতিদিন চাশতের দুই রাকাত নামাজ আদায় করা।':'Abu Hurairah (may Allah be pleased with him) said: My friend (the Prophet ﷺ) gave me three counsels… one of them was to pray two rak’ahs of Duha every day.',
'সহিহ বুখারি ও মুসলিম':'Sahih al-Bukhari and Muslim',
'সালাতুত তওবা (তওবার নামাজ)':'Salat al-Tawbah (prayer of repentance)',
'২ রাকাত · গুনাহের পর অনুশোচনায়':'2 rak’ahs · in remorse after a sin',
'কোনো গুনাহ হয়ে গেলে লজ্জা ও অনুশোচনা নিয়ে অজু করে দুই রাকাত নফল নামাজ পড়ুন, তারপর আল্লাহর দরবারে মনপ্রাণ উজাড় করে ক্ষমা চান।':'If you commit a sin, make wudu with shame and remorse, pray two rak’ahs of voluntary prayer, then ask Allah’s forgiveness with all your heart.',
'রাসূলুল্লাহ (সা.) বলেছেন, কোনো বান্দা গুনাহ করার পর সুন্দরভাবে অজু করে দুই রাকাত নামাজ পড়ে আল্লাহর কাছে ক্ষমা চাইলে আল্লাহ তাকে অবশ্যই ক্ষমা করেন।':'The Messenger of Allah (ﷺ) said: if a servant commits a sin, makes wudu well, prays two rak’ahs and asks Allah’s forgiveness, Allah will surely forgive him.',
'তিরমিজি ও আবু দাউদ':'Tirmidhi and Abu Dawud',
'নামাজের নিষিদ্ধ সময়সমূহ':'Prohibited times for prayer',
'দিনের তিনটি সময়ে কোনো নামাজই পড়া যায় না':'No prayer may be offered at three times of the day',
'দিনে মোট তিনটি সময়ে যেকোনো নামাজ—ফরজ, ওয়াজিব, কাযা কিংবা নফল—পড়া নিষিদ্ধ।':'At three times of the day, any prayer — Fard, Wajib, Qaza or voluntary — is prohibited.',
'সূর্য উদিত হতে শুরু করে কিছুটা ওপরে না ওঠা পর্যন্ত (প্রায় ১৫–২০ মিনিট)।':'From when the sun begins to rise until it has climbed a little (about 15–20 minutes).',
'দুপুরের মধ্যবর্তী সময় (জাওয়াল)':'Midday (Zawal)',
'সূর্য ঠিক মাথার ওপর স্থির থাকে, ছায়া প্রায় মিলিয়ে যায়; যোহরের ওয়াক্ত শুরুর আগের কয়েকটি মিনিট।':'The sun stands right overhead and shadows almost vanish; the few minutes before Dhuhr begins.',
'সূর্য হলুদ আভা ধারণ করার পর থেকে পুরোপুরি অস্ত যাওয়া পর্যন্ত। আসরের পর থেকে সূর্যাস্ত পর্যন্ত নফল নামাজও নিষেধ।':'From when the sun turns yellow until it has fully set. Voluntary prayers are also forbidden from after Asr until sunset.',
'রাসূলুল্লাহ (সা.) আমাদের তিনটি সময়ে নামাজ পড়তে এবং মৃতদের দাফন করতে নিষেধ করতেন: ১. যখন সূর্য উদিত হতে থাকে, যতক্ষণ না তা উঁচুতে ওঠে; ২. যখন ঠিক দুপুরে সূর্য আকাশের মধ্যভাগে থাকে, যতক্ষণ না তা ঢলে পড়ে; এবং ৩. যখন সূর্য অস্ত যাওয়ার উপক্রম হয়, যতক্ষণ না তা ডুবে যায়। (হযরত উকবা ইবনু আমির আল-জুহানি রা.)':'The Messenger of Allah (ﷺ) used to forbid us from praying and from burying our dead at three times: 1. when the sun is rising, until it is high; 2. when the sun is at the middle of the sky at noon, until it declines; and 3. when the sun is about to set, until it has set. (Uqbah ibn Amir al-Juhani, may Allah be pleased with him)',
'সহিহ মুসলিম: ৮৩১, তিরমিজি: ১০৩০':'Sahih Muslim: 831, Tirmidhi: 1030',
'ফজরের নামাজ':'Fajr prayer',
'যোহরের নামাজ':'Dhuhr prayer',
'আসরের নামাজ':'Asr prayer',
'মাগরিবের নামাজ':'Maghrib prayer',
'এশার নামাজ':'Isha prayer',
'জুম্মার নামাজ':'Jumu’ah prayer',
'২ রাকাত ফরজ · সুবহে সাদিক থেকে সূর্যোদয়ের আগ':'2 rak’ahs Fard · from Subh Sadiq until before sunrise',
'আগের সুন্নত':'Sunnah before',
'পরের সুন্নত':'Sunnah after',
'মুয়াক্কাদা':'Muakkadah',
'গাইরে মুয়াক্কাদা':'Ghayr Muakkadah',
'ফরজ':'Fard',
'সুবহে সাদিক থেকে সূর্যোদয়ের আগ পর্যন্ত':'From Subh Sadiq (true dawn) until before sunrise',
'সূর্যোদয় শুরু হলেই নিষিদ্ধ সময় এসে যায়, তাই তার আগেই ফজর আদায় করে নিন।':'The prohibited time begins as soon as the sunrise starts, so pray Fajr before then.',
'৪ রাকাত ফরজ · জাওয়ালের পর থেকে':'4 rak’ahs Fard · from after Zawal',
'সূর্য ঢলে পড়ার (জাওয়ালের) পর থেকে আসরের ওয়াক্ত শুরুর আগ পর্যন্ত':'From after the sun passes its zenith (Zawal) until before Asr begins',
'শুক্রবারে যোহরের পরিবর্তে জুম্মার নামাজ আদায় করা হয়।':'On Fridays, Jumu’ah prayer is offered instead of Dhuhr.',
'৪ রাকাত ফরজ · সূর্যাস্তের আগ পর্যন্ত':'4 rak’ahs Fard · until before sunset',
'আসরের ওয়াক্ত শুরু থেকে সূর্যাস্তের আগ পর্যন্ত':'From the start of Asr until before sunset',
'সূর্য হলুদ হয়ে গেলে আসর পড়া মাকরূহ, তাই সময় থাকতেই আদায় করে নিন।':'Praying Asr once the sun has turned yellow is makruh, so pray it while there is time.',
'৩ রাকাত ফরজ · সূর্যাস্তের পরপর':'3 rak’ahs Fard · right after sunset',
'সূর্যাস্ত থেকে এশার ওয়াক্ত শুরুর আগ পর্যন্ত':'From sunset until before Isha begins',
'মাগরিবের ওয়াক্ত তুলনামূলক সংক্ষিপ্ত, তাই দেরি না করে আদায় করাই উত্তম।':'The Maghrib window is comparatively short, so it is best to pray without delay.',
'৪ রাকাত ফরজ · রাতের নামাজ':'4 rak’ahs Fard · night prayer',
'এশার ওয়াক্ত শুরু থেকে সুবহে সাদিকের আগ পর্যন্ত':'From the start of Isha until before Subh Sadiq',
'বিতর নামাজ ওয়াজিব; এশার ফরজ ও সুন্নতের পর এটি আদায় করতে হয়।':'Witr prayer is Wajib; it is offered after the Isha Fard and Sunnah.',
'২ রাকাত ফরজ · জামাত ও খুতবাসহ · যোহরের ওয়াক্তে':'2 rak’ahs Fard · with congregation and khutbah · at Dhuhr time',
'যোহরের ওয়াক্তে — সূর্য ঢলে পড়ার (জাওয়ালের) পর থেকে আসরের ওয়াক্ত শুরুর আগ পর্যন্ত':'At Dhuhr time — from after the sun passes its zenith (Zawal) until before Asr begins',
'২ রাকাত, ইমামের খুতবা শোনার পর জামাতের সাথে':'2 rak’ahs, in congregation after listening to the imam’s khutbah',
'কার ওপর ফরজ':'Who it is obligatory for',
'প্রাপ্তবয়স্ক, সুস্থ ও মুকিম (সফরে নেই এমন) মুসলিম পুরুষের ওপর জুম্মা ফরজ। জুম্মার জন্য জামাত ও খুতবা শর্ত, তাই এটি একা পড়া যায় না।':'Jumu’ah is Fard on adult, healthy, resident (not travelling) Muslim men. Congregation and khutbah are conditions for Jumu’ah, so it cannot be prayed alone.',
'আজানের পর':'After the adhan',
'জুম্মার আজান হলে কেনাবেচাসহ সব দুনিয়াবি কাজ রেখে মসজিদের পথে রওনা দিতে হয় (সূরা জুমুআ: ৯)। খুতবা চলাকালে কথা বলা ও অন্য নামাজ পড়া নিষেধ।':'When the Jumu’ah adhan is called, leave all worldly affairs including trade and head to the mosque (Surah al-Jumu’ah: 9). Talking and praying other prayers during the khutbah is forbidden.',
'জুম্মা ছুটে গেলে':'If you miss Jumu’ah',
'জুম্মার কাযা হয় না। জামাত না পেলে বা কোনো কারণে জুম্মা পড়তে না পারলে সেদিন ৪ রাকাত যোহর আদায় করতে হয়।':'Jumu’ah has no Qaza. If you miss the congregation or cannot pray Jumu’ah for any reason, pray 4 rak’ahs of Dhuhr that day.',
'সুন্নত আমল':'Sunnah practices',
'শুক্রবারে গোসল করা, পরিচ্ছন্ন পোশাক পরা, সুগন্ধি লাগানো, আগেভাগে মসজিদে যাওয়া এবং সূরা কাহফ তিলাওয়াত করা মুস্তাহাব।':'On Fridays it is mustahab to bathe, wear clean clothes, apply perfume, go to the mosque early and recite Surah al-Kahf.',
'জামাত':'Jamaat',
'আরও জানুন':'Learn more',
'নফল নামাজের ফজিলত':'Virtues of voluntary prayers',
'ফজিলত ও গুরুত্ব':'Virtues and importance',
'সালাতুত তওবা':'Salat al-Tawbah',
'২ রাকাত · গুনাহের পর':'2 rak’ahs · after a sin',
'আদায় হয়েছে ✓':'Done ✓',
'কাযা আদায় ✓':'Qaza done ✓',
'ওয়াক্ত শেষ':'Time over',
'আজকের অগ্রগতি':'Today’s progress',
'মোট আমল':'Total deeds',
'ফরজ নামাজ':'Fard prayers',
'আদায় হলে টিক দিন · বিস্তারিত জানতে নামে ট্যাপ করুন':'Tick when done · tap a name for details',
'কাযা আদায় হয়েছে':'Qaza completed',
'কাযা আদায় হয়েছে (মোট)':'Qaza completed (total)',
'✓ কোনো কাযা নেই — মাশাআল্লাহ':'✓ No Qaza due — MashaAllah',
'ওয়াক্ত শেষ হয়েছে অথচ টিক দেওয়া হয়নি, সেগুলো এখানে জমা থাকে।':'Prayers whose time has ended without being ticked collect here.',
'কাযা আদায় করে ওয়াক্তের নামে ট্যাপ করুন — আদায় হিসেবে গণ্য হবে এবং তালিকা থেকে সরে যাবে।':'After praying the Qaza, tap the prayer’s name — it will count as done and leave the list.',
'কাযা গণনা শুরুর তারিখ':'Qaza counting start date',
'গণনা শুরু':'Counting from',
'এ সপ্তাহের ফরজ':'This week’s Fard',
'এ সপ্তাহ':'This week',
'সব ওয়াক্ত আদায় হয়েছে':'All prayers completed',
'ওয়াক্ত শুরু':'Prayer start',
'অটো:':'Auto:',
'জামাত / একামত':'Jamaat / Iqamah',
'খালি = নেই':'Empty = none',
'কত মিনিট আগে জানাবে':'Remind how many minutes before',
'০ = রিমাইন্ডার বন্ধ':'0 = reminder off',
'জুম্মার জামাত (শুক্রবার)':'Jumu’ah Jamaat (Friday)',
'স্থানীয় সময় ও রিমাইন্ডার':'Local times & reminders',
'বন্ধ':'Off',
'নামাজের রিমাইন্ডার চালু করুন':'Turn on prayer reminders',
'লুকান':'Hide',
'সেটিংস':'Settings',
'নোটিফিকেশন অনুমতি:':'Notification permission:',
'অনুমতি দেওয়া আছে ✓':'Granted ✓',
'বন্ধ আছে (ব্রাউজারের সেটিংসে গিয়ে চালু করুন)':'Blocked (turn it on in your browser settings)',
'এই ব্রাউজারে নেই':'Not available in this browser',
'এখনও অনুমতি দেওয়া হয়নি':'Permission not granted yet',
'অনুমতি দিন':'Allow',
'টেস্ট':'Test',
'সব ওয়াক্তে একই মিনিট':'Same minutes for all prayers',
'সবগুলোতে বসান':'Apply to all',
'আপনার এলাকার মসজিদের সময় দিলে ওয়াক্ত শুরুর সময় ও তার হিসাব সেই অনুযায়ী মিলে যাবে; খালি রাখলে স্বয়ংক্রিয় সময়ই থাকবে। জামাতের সময় দিলে রিমাইন্ডার জামাতের আগে আসবে, না দিলে ওয়াক্ত শুরুর আগে। নামাজে টিক দিলে সেই ওয়াক্তের রিমাইন্ডার আর আসবে না। অ্যাপ খোলা থাকলে ঠিক সময়েই রিমাইন্ডার পাবেন। অ্যাপ বন্ধ থাকলে Android Chrome-এ ইনস্টল করা অ্যাপ ব্যাকগ্রাউন্ডে সময় দেখে নেওয়ার চেষ্টা করে — তাই সময় কিছুটা আগে-পিছে হতে পারে।':'If you enter your local mosque’s times, the prayer start times and their calculations will follow them; if left empty, the automatic times stay. If you enter a jamaat time, the reminder comes before the jamaat, otherwise before the prayer starts. Once you tick a prayer, its reminder will not come again. While the app is open you will get reminders right on time. When the app is closed, the installed app on Android Chrome tries to check the time in the background — so timing may be slightly early or late.',
'জামাত:':'Jamaat:',
'নিজের এলাকার ওয়াক্ত ও জামাতের সময় যোগ করতে "সেটিংস" খুলুন':'To add your local prayer and jamaat times, open “Settings”',
'ফরজ, নফল ও নিষিদ্ধ সময়ের নিখুঁত হিসাব':'Accurate times for Fard, voluntary and prohibited prayers',
'টেস্ট রিমাইন্ডার':'Test reminder',
'রিমাইন্ডার এভাবেই আপনাকে জানাবে':'This is how reminders will notify you',
'ওয়াক্ত':'Prayer time',
'পরবর্তী ওয়াক্ত':'Next prayer',
'বন্ধ করুন':'Close',
'নামাজের নিষিদ্ধ সময়':'Prohibited prayer times',
'রাসূলুল্লাহ (সা.) এই সময়ে নামাজ পড়তে ও মৃতদের দাফন করতে নিষেধ করতেন:':'The Messenger of Allah (ﷺ) used to forbid praying and burying the dead at this time:',
'যখন সূর্য উদিত হতে থাকে, যতক্ষণ না তা উঁচুতে ওঠে':'when the sun is rising, until it is high',
'যখন ঠিক দুপুরে সূর্য আকাশের মধ্যভাগে থাকে, যতক্ষণ না তা ঢলে পড়ে':'when the sun is at the middle of the sky at noon, until it declines',
'যখন সূর্য অস্ত যাওয়ার উপক্রম হয়, যতক্ষণ না তা ডুবে যায়':'when the sun is about to set, until it has set',
'মনে রাখবেন':'Remember',
'এই সময়ে ফরজ, ওয়াজিব, কাযা ও নফল — কোনো নামাজই পড়া যায় না।':'At this time no prayer — Fard, Wajib, Qaza or voluntary — may be offered.',
/* পড়াশোনা পেজ — রুটিন ও বার্তা */
'আজকের লক্ষ্য পূরণ হয়েছে। এই ধারাবাহিকতাই আসল শক্তি।':'Today\u2019s goal is reached. This consistency is the real strength.','আজকের প্রথম সেশনটা এখনই শুরু করুন।':'Start today\u2019s first session now.','দৈনিক লক্ষ্য':'Daily goal','রুটিন':'Routine','দৈনিক রুটিন':'Daily routine','অন্যান্য দিনের রুটিন':'Routines for other days','আজকের জন্য কোনো রুটিন নেই।':'No routine for today.','প্রতিদিনের নির্দিষ্ট পড়া এখানে ঠিক করে রাখুন, যেমন "গণিত · ৪৫ মিনিট"। টিক দিলে সময়টা সেই বিষয়ে যোগ হবে।':'Set up your fixed daily study here, e.g. \u201cMaths \u00b7 45 min\u201d. Ticking it adds the time to that subject.','কী পড়বেন? যেমন: গণিত অনুশীলন':'What will you study? e.g. Maths practice','রুটিনে যোগ করুন':'Add to routine','রুটিনটি মুছে ফেলবেন?':'Delete this routine?','৫ সপ্তাহের ধারাবাহিকতা':'5-week consistency','কম':'Less','বেশি':'More','সম্পন্ন':'done','প্রতিদিন (মিনিট)':'Minutes per day','গোল্ড + এমারেল্ড':'Gold + Emerald','গোল্ড + নেভি':'Gold + Navy','গোল্ড + বারগান্ডি':'Gold + Burgundy',
/* হিসাব পেজ */
'খাবার':'Food','বিল':'Bills','কেনাকাটা':'Shopping','স্বাস্থ্য':'Health','বিনোদন':'Entertainment','শিক্ষা':'Education','বেতন':'Salary','ব্যবসা':'Business','অন্য আয়':'Other income',
'আগের মাস':'Previous month','পরের মাস':'Next month','অঙ্ক লুকান':'Hide amounts','এ মাসে অবশিষ্ট':'Remaining this month','সঞ্চয়ের হার':'Savings rate',
'হিসাব এডিট':'Edit entry','নতুন হিসাব':'New entry','বিবরণ (ঐচ্ছিক)':'Description (optional)','বাজেট (৳)':'Budget (\u09f3)',
'মাসিক বাজেট':'Monthly budget','সেট':'Set','বাজেট দিলে খরচের সীমা ও সতর্কবার্তা দেখাবে।':'Set a budget to see your spending limit and alerts.',
'সঞ্চয় লক্ষ্য':'Savings goal','লক্ষ্য (যেমন: বাইক)':'Goal (e.g. bike)','সেভ':'Save','মোট সঞ্চিত':'Total saved',
'ব্যয়ের ধরন':'Spending by category','এ মাসে কোনো ব্যয় নেই।':'No expenses this month.','৬ মাসের ধারা':'6-month trend',
'কোনো হিসাব পাওয়া যায়নি। উপরের ফর্ম থেকে প্রথমটি যোগ করুন।':'No entries found. Add the first one from the form above.','এই হিসাবটি মুছবেন?':'Delete this entry?','ধরন':'Type','ক্যাটাগরি':'Category',
'কাজ এডিট':'Edit task',
/* রোজা পেজ */
/* রোজা পেজ — অতিরিক্ত */
'✓ আজ রোজা রেখেছি':'✓ I fasted today','রমজান শুরু':'Ramadan begins','রমজান চলছে':'Ramadan is ongoing','শাওয়ালের ছয় রোজা শুরু':'Six fasts of Shawwal begin','আইয়ামে বীজ (১৩–১৫)':'Ayyam al-Bid (13–15)','এ মাসে (নফল)':'This month (voluntary)','মোট নফল':'Total voluntary','এ মাসে নফল রোজা':'Voluntary fasts this month','হিজরি তারিখ সমন্বয়':'Hijri date adjustment',

'শা\'বান':'Sha’ban',
'আগের ও পরের এক বছরের গুনাহের কাফফারা (সহিহ মুসলিম)':'Expiates the sins of the previous and the coming year (Sahih Muslim)',
'গত এক বছরের গুনাহের কাফফারা (সহিহ মুসলিম)':'Expiates the sins of the previous year (Sahih Muslim)',
'প্রতি মাসের তিন রোজা সারা বছর রোজা রাখার সমান সওয়াব (বুখারি–মুসলিম)':'Three fasts each month earn the reward of fasting the whole year (Bukhari–Muslim)',
'রমজানের পর ছয় রোজা পুরো বছরের রোজার সমান (সহিহ মুসলিম)':'Six fasts after Ramadan equal fasting the whole year (Sahih Muslim)',
'সোম–বৃহস্পতিবার আমল আল্লাহর কাছে পেশ করা হয় (তিরমিযি)':'Deeds are presented to Allah on Mondays and Thursdays (Tirmidhi)',
'সময় লোড হয়নি':'Times did not load',
'আবার চেষ্টা করুন':'Try again',
'সেহরি শেষ হতে':'Until Suhoor ends',
'ইফতারে বাকি':'Left until Iftar',
'ইফতারের সময় 🌙':'Iftar time 🌙',
'রোজার সঙ্গী · নফল ট্র্যাকার, সময় ও দোয়া':'Fasting companion · voluntary tracker, times & duas',
'হিজরি':'Hijri',
'আজ রমজানের রোজা রেখেছি':'I fasted today (Ramadan)',
'নফল রোজা / বিশেষ দিন':'Voluntary fast / special day',
'রমজানের রোজা':'Ramadan fasts',
'নিষিদ্ধ দিনে রোজা রাখা যায় না':'Fasting is not allowed on prohibited days',
'ঘরের নিচের ছোট সংখ্যা হিজরি তারিখ। ভবিষ্যতের তারিখ চিহ্নিত করা যায় না।':'The small number under each date is the Hijri date. Future dates cannot be marked.',
'আমার পরিসংখ্যান':'My statistics',
'এ বছরে (নফল)':'This year (voluntary)',
'এ বছরে':'This year',
'বর্তমান টানা':'Current streak',
'সর্বোচ্চ টানা':'Best streak',
'📤 শেয়ার কার্ড':'📤 Share card',
'সামনের রোজার দিন':'Upcoming fast days',
'রাখা হয়েছে':'kept',
'রমজান আসতে বাকি':'Until Ramadan',
'রমজানের কাযা রোজা':'Ramadan Qaza fasts',
'এখনো বাকি আছে এমন কাযা রোজার সংখ্যা। একটি রাখলে − চাপুন।':'Number of Qaza fasts still owed. Tap − when you keep one.',
'দোয়া ও নিয়ত':'Duas & intentions',
'ইফতারের দোয়া':'Iftar dua',
'অর্থ: পিপাসা মিটেছে, শিরা-উপশিরা সিক্ত হয়েছে এবং ইনশাআল্লাহ প্রতিদান নির্ধারিত হয়েছে। (আবু দাউদ)':'Meaning: The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills. (Abu Dawud)',
'অর্থ: হে আল্লাহ, আপনার জন্যই রোজা রেখেছি এবং আপনার দেওয়া রিজিক দিয়েই ইফতার করছি। (প্রচলিত দোয়া)':'Meaning: O Allah, I fasted for You and I break my fast with the provision You gave. (commonly recited dua)',
'সেহরির নিয়ত':'Suhoor intention',
'অর্থ: আমি আগামীকাল আল্লাহর জন্য রোজা রাখার নিয়ত করলাম। নিয়ত মূলত মনের সংকল্প, মুখে বলা জরুরি নয়।':'Meaning: I intend to fast tomorrow for the sake of Allah. Intention is mainly a resolve of the heart; saying it aloud is not required.',
'সমন্বয়':'Adjustments',
'হিজরি তারিখ':'Hijri date',
'চাঁদ দেখা অনুযায়ী মিলিয়ে নিন':'Adjust to the moon sighting',
'সেহরি-ইফতারের অবস্থান':'Suhoor & Iftar location',
'আপনার অবস্থান ব্যবহার হচ্ছে':'Using your location',
'এখন ঢাকার সময় দেখাচ্ছে':'Currently showing Dhaka time',
'📍 আপডেট':'📍 Update',
'🌙 আমার রোজা':'🌙 My fasts',
'আমার রোজা':'My fasts',
'এই ব্রাউজারে অবস্থান সমর্থিত নয়':'Location is not supported in this browser',
'অবস্থানের অনুমতি পাওয়া যায়নি':'Location permission was not granted',
/* কাজের সারাংশ নোটিফিকেশন */
'কাজের সারাংশ নোটিফিকেশন':'Task summary notifications','চালু':'On','বন্ধ':'Off',
'প্রথম সময়':'First time','আজ কী কী কাজ করতে হবে':'What you have to do today',
'দ্বিতীয় সময়':'Second time','আজ এখনো কী কী বাকি':'What is still pending today',
'🔔 নোটিফিকেশন চালু করুন':'🔔 Enable notifications','প্রথমটি পরীক্ষা':'Test the first','দ্বিতীয়টি পরীক্ষা':'Test the second',
'নোটিফিকেশন চালু আছে':'Notifications are on','নোটিফিকেশন চালু নেই — নিচের বাটন চাপুন':'Notifications are off — tap the button below',
'ব্রাউজারে নোটিফিকেশন বন্ধ করা আছে — সাইট সেটিং থেকে "Allow" করুন':'Notifications are blocked in the browser — set them to \u201cAllow\u201d in site settings',
'ঠিক সময়ে পেতে অ্যাপটি Home Screen-এ ইনস্টল করে রাখুন। অ্যাপ/পেজ একেবারে বন্ধ থাকলে ব্রাউজার সময়মতো জাগাতে নাও পারে — তখন পরের বার খুললেই সামারি আসবে।':'For on-time delivery, install the app to your Home Screen. If the app is fully closed, the browser may not wake it on time \u2014 the summary will then arrive the next time you open it.',
'এই ব্রাউজারে নোটিফিকেশন সমর্থিত নয়':'Notifications are not supported in this browser',
'অনুমতি দেওয়া হয়নি':'Permission was not granted','আগে নোটিফিকেশন চালু করুন':'Enable notifications first',
/* পপআপ */
'নিশ্চিত করুন':'Please confirm','বার্তা':'Notice','ঠিক আছে':'OK','হ্যাঁ, নিশ্চিত':'Yes, confirm','হ্যাঁ, মুছুন':'Yes, delete','হ্যাঁ, বাদ দিন':'Yes, dismiss',
'কাজটি মুছে ফেলবেন?':'Delete this task?','সব বাকি কাজ বাদ দেবেন?':'Dismiss all pending tasks?','এগুলো বাকি কাজ খাতা থেকে মুছে যাবে।':'These will be removed from the pending log.',
'📲 অ্যাপ বন্ধ থাকলেও (পুশ)':'📲 Even when the app is closed (push)','পুশ চালু আছে':'Push is on','পুশ চালু নেই':'Push is off','এই ডিভাইসে পুশ চালু করুন':'Enable push on this device','পুশ পরীক্ষা':'Test push','পুশ বন্ধ করুন':'Turn off push','⏰ কাজের নিজস্ব সময়ে রিমাইন্ডার':'⏰ Reminder at each task\u2019s own time','কাজে সময় দেওয়া থাকলে ঠিক সেই সময়ে নোটিফিকেশন (পুশ চালু থাকতে হবে)':'A notification at the exact time set on a task (push must be on)','ঠিক সময়ে':'On time','৫ মিনিট আগে':'5 min before','১০ মিনিট আগে':'10 min before','১৫ মিনিট আগে':'15 min before','৩০ মিনিট আগে':'30 min before',
'সময় (ঐচ্ছিক)':'Time (optional)','সময় নেই':'No time','নির্দিষ্ট মাস পর পর (যেমন ২ মাসে একবার)':'Every N months (e.g. every 2 months)','মাস পর পর':'months apart',
/* হিসাব পেজ: খাত (পড়াশোনা/চাকরি), অটো-দান, খাতা সংযোগ */
'খাত':'Purpose',
'সব খাত':'All purposes',
'কোন খাতের খরচ?':'Which purpose is this expense for?',
'চাকরি':'Job',
'পড়াশোনার খরচ':'Study expenses',
'চাকরির খরচ':'Job expenses',
'এ পর্যন্ত মোট':'Total so far',
'এ মাস':'This month',
'সব সময়':'All time',
'প্রাইভেট / কোচিং':'Tutoring / coaching',
'আবেদন ফি':'Application fee',
'ট্রেনিং':'Training',
'পোশাক':'Clothing',
'দান':'Donation',
'স্বয়ংক্রিয় দান':'Auto donation',
'স্বয়ংক্রিয় দৈনিক দান':'Automatic daily donation',
'চালু করুন':'Turn on',
'পরের কাটা':'Next deduction',
'দানের টাকা ও সময় দুটোই দিন':'Enter both the donation amount and the time',
'খাতা · দিলাম':'Ledger · I gave',
'খাতা · পেলাম':'Ledger · I received',
'খাতা খুলুন →':'Open ledger →',
'খাতায় দেখুন':'View in ledger',
'ধার মিটলে মোট সঞ্চয়':'Total savings once loans are settled',
'সব হিসাবে তুলুন':'Add all to accounts',
'এ মাসে কোনো খরচ নেই':'No expenses this month',
'এখনো কোনো খরচ নেই':'No expenses yet',
'খাতায় এখনো কোনো লেনদেন নেই':'No ledger transactions yet',
'কোনো হিসাব নেই':'No entries',
'সব সরান':'Remove all',
'হিসাব থেকে সরান':'Remove from accounts',
'দান বন্ধ করুন':'Turn off',
'এটি আয়-ব্যয়ের হিসাব থেকে সরাবেন? খাতায় লেনদেনটি থেকে যাবে।':'Remove this from income & expenses? The transaction will stay in the ledger.',
/* পড়াশোনা পেজ — পরীক্ষা কার্ড */
'নতুন পরীক্ষা':'New exam','পরীক্ষা যোগ করুন':'Add exam','সংরক্ষণ করুন':'Save changes','বাতিল':'Cancel','তারিখ':'Date','রুম নং (ঐচ্ছিক)':'Room no. (optional)','রুম নং':'Room no.','রুম':'Room','এডিট করুন':'Edit','পরীক্ষাটি মুছে ফেলবেন?':'Delete this exam?','যেমন: অর্থনীতি':'e.g. Economics','যেমন: ২০৩ বা ক-১২':'e.g. 203 or A-12','সাজেশন সরান':'Remove suggestion','দিন ছুটি':'days off','ছুটি নেই':'No break','একই দিনে':'Same day','পরবর্তী পরীক্ষা':'Next exam','আসন্ন পরীক্ষা':'Upcoming exams','মোট ছুটি':'Total break','শেষ পরীক্ষা পর্যন্ত':'Until the last exam'
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
 /* সেটিং পেজ: সময়/সংখ্যা বসানো বাক্য */
 const Pl=(n,w)=>(+num(n)===1?'1 '+w:num(n)+' '+w+'s');
 s=s.replace(new RegExp('^(.+) দেখান$'),'Show $1');
 s=s.replace(new RegExp('🔥 ('+BD+'+) দিন সব ওয়াক্ত','g'),(_,n)=>'🔥 '+Pl(n,'day')+' · all prayers');
 s=s.replace(new RegExp('🔥 ('+BD+'+) দিন টানা সব ওয়াক্ত','g'),(_,n)=>'🔥 '+Pl(n,'day')+' in a row · all prayers');
 s=s.replace(new RegExp('('+BD+'+) মিনিট পরে \\(','g'),'In $1 min (');
 s=s.replace(new RegExp('রমজানের ('+BD+'+) তম দিন','g'),'Day $1 of Ramadan');
 s=s.replace(new RegExp('^('+BD+'+) দিন পর$'),(_,n)=>'in '+Pl(n,'day'));
 s=s.replace(new RegExp('⚠️ শেষ ব্যাকআপ ('+BD+'+) দিন আগের। নতুন একটি নিন।','g'),(_,n)=>'⚠️ Your last backup was '+Pl(n,'day')+' ago. Please take a new one.');
 s=s.replace(new RegExp('✅ শেষ ব্যাকআপ ('+BD+'+) দিন আগে।','g'),(_,n)=>'✅ Last backup: '+Pl(n,'day')+' ago.');
 s=s.replace(new RegExp('('+BD+'+) মিনিট আগে','g'),'$1 min ago').replace(new RegExp('('+BD+'+) ঘণ্টা আগে','g'),'$1 h ago').replace(new RegExp('('+BD+'+) দিন আগে','g'),(_,n)=>Pl(n,'day')+' ago');
 s=s.replace(new RegExp('('+BD+'+)টি বদল পাঠানো বাকি','g'),(_,n)=>(+num(n)===1?'1 change':num(n)+' changes')+' waiting to be sent');
 s=s.replace(new RegExp('আর ('+BD+'+) দিন বাকি','g'),'$1 days left');
 /* লেনদেনের খাতা: নাম/সংখ্যা বসানো বাক্য */
 const Nn=(n,one,many)=>(+num(n)===1?'1 '+one:num(n)+' '+many);
 s=s.replace(new RegExp('^✓ (.+?)-এর আগের হিসাব মিটে গেছে। এখন লেনদেন করলে নতুন পর্ব শুরু হবে — আগের হিসাব “লেনদেনসমূহ”-এ আর বিবরণীর পর্ব-বোতামে থেকে যাবে।$'),'\u2713 $1\u2019s earlier account is settled. A new transaction now starts a new cycle \u2014 the earlier account stays under \u201cTransactions\u201d and in the statement\u2019s cycle buttons.');
 s=s.replace(new RegExp('^✓ (.+?)-এর আগের হিসাব মিটে গেছে — নতুন লেনদেনে নতুন পর্ব শুরু হবে।$'),'\\u2713 $1\\u2019s earlier account is settled \\u2014 a new transaction starts a new cycle.');
 s=s.replace(new RegExp('^(.+)-এর সব লেনদেন মুছে ফেলবেন\\? এটা ফেরানো যাবে না।$'),'Delete all of $1\u2019s transactions? This cannot be undone.');
 s=s.replace(new RegExp('^(.+)-এর লেনদেন$'),'$1\u2019s transactions');
 s=s.replace(new RegExp('^এই লেনদেনটি \\((.+?)\\) মুছে ফেলবেন\\?$'),'Delete this transaction ($1)?');
 s=s.replace(new RegExp('^আপনি (.+?)-কে পুরো (৳ [০-৯,.]+) ফেরত দিয়েছেন — মিটিয়ে দেবেন\\?$'),'You repaid $1 the full $2 \u2014 mark as settled?');
 s=s.replace(new RegExp('^(.+?) পুরো (৳ [০-৯,.]+) ফেরত দিয়েছে — মিটিয়ে দেবেন\\?$'),'$1 has repaid the full $2 \u2014 mark as settled?');
 s=s.replace(new RegExp('('+BD+'+)টি লেনদেন','g'),(_,n)=>Nn(n,'transaction','transactions'));
 s=s.replace(new RegExp('('+BD+'+)টি জিনিস সেভ হয়েছে','g'),(_,n)=>Nn(n,'item','items')+' saved');
 s=s.replace(new RegExp('('+BD+'+) জন(?!['+B+'])','g'),(_,n)=>Nn(n,'person','people'));
 s=s.replace(new RegExp('(['+BD.slice(1,-1)+']+ \\S+ ['+BD.slice(1,-1)+']+) থেকে (['+BD.slice(1,-1)+']+ \\S+ ['+BD.slice(1,-1)+']+) পর্যন্ত','g'),'from $1 to $2');
 s=s.replace(new RegExp('মোট বাকি: আপনি আমাকে (৳ [০-৯,.]+) দেবেন','g'),'Total due: you owe me $1');
 s=s.replace(new RegExp('মোট দেনা: আমি আপনাকে (৳ [০-৯,.]+) দেব','g'),'Total owed: I owe you $1');

 const wd=w=>w==='কাল'?'Tomorrow':'Trip time';
 s=s.replace(new RegExp('(কাল|যাত্রার সময়) বৃষ্টির সম্ভাবনা ('+BD+'+)%, (ছাতা ও রেইনকোট|ছাতা) যোগ করুন।','g'),(_,w,n,i)=>wd(w)+': '+n+'% chance of rain — add '+(i==='ছাতা'?'an umbrella':'an umbrella and raincoat')+'.');
 s=s.replace(new RegExp('(কাল|যাত্রার সময়) সর্বোচ্চ ('+BD+'+)° — গরম থাকবে, পানির বোতল ও টুপি যোগ করুন।','g'),(_,w,n)=>wd(w)+': up to '+n+'° — hot, add a water bottle and a cap.');
 s=s.replace(new RegExp('(কাল|যাত্রার সময়) সর্বনিম্ন ('+BD+'+)° — ঠান্ডা থাকবে, চাদর/সোয়েটার ও মাফলার যোগ করুন।','g'),(_,w,n)=>wd(w)+': down to '+n+'° — cold, add a shawl/sweater and a scarf.');
 s=s.replace(/^লক্ষ্যে পৌঁছাতে আর (.+) বাকি।$/,'$1 left to reach your goal.');
 s=s.replace(new RegExp('^(?:⚠️ )?বাজেট (৳ [০-৯,.]+) ছাড়িয়েছে$'),'Over budget by $1');
 s=s.replace(new RegExp('^(?:⚠️ )?বাজেটের ('+BD+'+)% শেষ$'),'$1% of budget used');
 s=s.replace(new RegExp('^মাসের ('+BD+'+)%$'),'$1% of this month\u2019s spending');
 s=s.replace(new RegExp('^(?:✅ )?দৈনিক খরচের সীমা (৳ [০-৯,.]+)$'),'Daily spending limit: $1');
 s=s.replace(RD,m=>D[m]);
 s=s.replace(new RegExp('(ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত) ('+BD+'+):('+BD+'+)','g'),(_,p,h,m)=>tm(h,m,p));
 s=s.replace(/(\d+:\d\d [AP]M) থেকে Isha পর্যন্ত/g,'from $1 until Isha');
 s=s.replace(/(\d+:\d\d [AP]M) থেকে/g,'from $1').replace(/(\d+:\d\d [AP]M) পর্যন্ত/g,'until $1');
 s=s.replace(new RegExp('('+BD+'+) দিন পর পর','g'),'Every $1 days');
 s=s.replace(new RegExp('('+BD+'+) ?ঘণ্টা (?='+BD+')','g'),'$1 h ').replace(new RegExp('('+BD+'+) ঘণ্টা','g'),'$1 h').replace(new RegExp('('+BD+'+) মিনিট','g'),'$1 min');
 s=s.replace(new RegExp('('+BD+'+) ?টি(?![\u0980-\u09FF])','g'),(_,n)=>(+num(n)===1?n+' item':n+' items'));
 s=s.replace(RU,m=>U[m]);
 return num(s).replace(/।/g,'.')}
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
