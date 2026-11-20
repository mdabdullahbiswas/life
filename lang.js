/* Hayat — ভাষা (বাংলা / English)।
   বাংলা হলে কিছুই বদলায় না। English হলে প্রতিটি পেজের লেখা এই ফাইলের অভিধান থেকে অনুবাদ হয়।
   নতুন লেখা যোগ করলে নিচের D তালিকায় বাংলা → English লাইন যোগ করুন। */
(function(){
let LANG='bn';try{LANG=JSON.parse(localStorage.getItem('dl')||'{}').lang==='en'?'en':'bn'}catch(e){}
window.LANG=LANG;
if(LANG!=='en'){window.L=s=>s;return}

const D={
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
 s=s.replace(new RegExp('আর ('+BD+'+) দিন বাকি','g'),'$1 days left');
 const wd=w=>w==='কাল'?'Tomorrow':'Trip time';
 s=s.replace(new RegExp('(কাল|যাত্রার সময়) বৃষ্টির সম্ভাবনা ('+BD+'+)%, (ছাতা ও রেইনকোট|ছাতা) যোগ করুন।','g'),(_,w,n,i)=>wd(w)+': '+n+'% chance of rain — add '+(i==='ছাতা'?'an umbrella':'an umbrella and raincoat')+'.');
 s=s.replace(new RegExp('(কাল|যাত্রার সময়) সর্বোচ্চ ('+BD+'+)° — গরম থাকবে, পানির বোতল ও টুপি যোগ করুন।','g'),(_,w,n)=>wd(w)+': up to '+n+'° — hot, add a water bottle and a cap.');
 s=s.replace(new RegExp('(কাল|যাত্রার সময়) সর্বনিম্ন ('+BD+'+)° — ঠান্ডা থাকবে, চাদর/সোয়েটার ও মাফলার যোগ করুন।','g'),(_,w,n)=>wd(w)+': down to '+n+'° — cold, add a shawl/sweater and a scarf.');
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
