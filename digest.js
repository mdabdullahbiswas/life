/* Hayat — দৈনিক সামারি পুশ (Firebase FCM) — এটি আলাদা একটি নতুন ফাইল (Digest.gs)।
   অ্যাপ বন্ধ থাকলেও নির্ধারিত দুই সময়ে (অ্যাপের "কাজের সারাংশ" সেটিং) এই স্ক্রিপ্ট শিট থেকে আজকের কাজ পড়ে ফোনে পুশ পাঠায়।
   সব ডাটা শিটেই থাকে; Firebase শুধু নোটিফিকেশন পৌঁছানোর কাজ করে।

   ★ Code.gs-এ শুধু একটি লাইন বদলাতে হবে:  res = sync(b);  →  res = route(b);
   ★ Project Settings → Script properties-এ FCM_SA নামে সার্ভিস অ্যাকাউন্টের JSON ফাইলের পুরো লেখা বসান (কোডে বা GitHub-এ কখনো নয়)।
   ★ একবার setupDigest চালান (▶ Run) — প্রতি মিনিটের টাইমার বসবে। তারপর Deploy → Manage deployments → New version। */

/* ---------- রাউটিং ---------- */
function route(b) {
  switch (b.a) {
    case 'fcm':     return saveFcm_(b);
    case 'fcmoff':  return dropFcm_(b);
    case 'fcmtest': return testPush_(b);
    default:        return sync(b);          // আগের মতো শিট সিঙ্ক
  }
}

/* ---------- টাইমার বসানো (একবার চালান) ---------- */
function setupDigest() {
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'dgTick') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('dgTick').timeBased().everyMinutes(1).create();
  Logger.log('টাইমার বসেছে ✓');
}
/* সার্ভিস অ্যাকাউন্টের কী ঠিক আছে কিনা দেখতে (Run করে Execution log দেখুন) */
function checkFcmKey() { Logger.log('টোকেন পাওয়া গেছে: ' + fcmAccessToken_().slice(0, 10) + '…'); }

/* ---------- সময়ের হিসাব ও লেখা বানানো (অ্যাপের digest-core.js-এর মতোই) ---------- */
const HDG = (function () {
  const mins = s => +s.slice(0, 2) * 60 + +s.slice(3, 5);
  const U = (y, m, d) => Date.UTC(y, m, d);
  const dp = s => { const a = String(s).split('-').map(Number); return U(a[0], a[1] - 1, a[2]); };
  function due(t, D) {
    if (!t || !/^\d{4}-\d\d-\d\d$/.test(String(t.start || ''))) return 0;
    const k = Math.round((U(D.y, D.m, D.d) - dp(t.start)) / 864e5); if (k < 0) return 0;
    const sd = +t.start.slice(8, 10), sm = +t.start.slice(5, 7) - 1, dim = new Date(U(D.y, D.m + 1, 0)).getUTCDate();
    return t.type == 'once' ? k == 0 : t.type == 'daily' || (t.type == 'every' && k % t.n == 0) || (t.type == 'weekly' && k % 7 == 0) ||
      (t.type == 'monthly' && Math.min(sd, dim) == D.d) || (t.type == 'yearly' && sd == D.d && sm == D.m);
  }
  function cfg(o) { const c = (o && o.dg) || {}; return { on: c.on !== 0, am: /^\d\d:\d\d$/.test(c.am) ? c.am : '07:00', pm: /^\d\d:\d\d$/.test(c.pm) ? c.pm : '22:00' }; }
  function plan(o, D, sent) {
    const c = cfg(o), out = []; if (!c.on) return out; sent = sent || {};
    ['am', 'pm'].forEach(k => {
      if (sent[k] === D.key) return;
      const at = mins(c[k]); if (D.cur < at) return;
      const end = k === 'am' ? Math.min(at + 300, mins(c.pm) > at ? mins(c.pm) - 1 : 1439) : 1439;
      if (D.cur > end) return;
      out.push(k);
    });
    return out;
  }
  function build(kind, o, D, Y) {
    const LN = o.lang === 'en', bn = n => LN ? String(n) : String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
    const tasks = Array.isArray(o.tasks) ? o.tasks : [], dn = o.done || {}, sk = o.skip || {};
    const isDone = (d, t) => !!(dn[d.key] || {})[t.id];
    const byTime = (a, b) => (a.time || '99:99').localeCompare(b.time || '99:99');
    const tm = s => { if (!s) return ''; const p = s.split(':').map(Number); return bn(p[0] % 12 || 12) + ':' + bn(String(p[1] || 0).padStart(2, '0')) + ' ' + (p[0] >= 12 ? 'PM' : 'AM'); };
    const lines = (ts, max, mark) => {
      const L = ts.slice().sort(byTime).slice(0, max).map(t => (mark && isDone(D, t) ? '✓ ' : '• ') + (t.time ? tm(t.time) + ' ' : '') + t.title);
      if (ts.length > max) L.push(LN ? '+ ' + (ts.length - max) + ' more' : '+ আরও ' + bn(ts.length - max) + ' টি');
      return L.join('\n');
    };
    const td = tasks.filter(t => due(t, D)), pend = td.filter(t => !isDone(D, t)), n = td.length;
    if (kind === 'am') {
      const miss = tasks.filter(t => due(t, Y) && !isDone(Y, t) && !(sk[Y.key] || {})[t.id]);
      let body = n ? lines(td, 6, true) : (LN ? 'No tasks scheduled today. Have a great day!' : 'আজ কোনো নির্ধারিত কাজ নেই। দিনটি শুভ হোক!');
      if (miss.length) body += LN ? '\n⚠ ' + miss.length + ' task' + (miss.length > 1 ? 's' : '') + ' left from yesterday' : '\n⚠ গতকাল ' + bn(miss.length) + ' টি কাজ বাকি ছিল';
      return { t: n ? (LN ? '📋 ' + n + ' task' + (n > 1 ? 's' : '') + ' to do today' : '📋 আজ ' + bn(n) + ' টি কাজ করতে হবে') : (LN ? '🌅 Good morning' : '🌅 সুপ্রভাত'), b: body, url: 'tasks.html' };
    }
    if (!n) return null;
    if (!pend.length) return { t: LN ? '🌙 All done for today ✅' : '🌙 আলহামদুলিল্লাহ — আজকের সব কাজ শেষ ✅', b: LN ? n + '/' + n + ' tasks completed. Rest well.' : bn(n) + '/' + bn(n) + ' টি কাজ সম্পন্ন। নিশ্চিন্তে ঘুমান।', url: 'tasks.html' };
    return { t: LN ? '⏳ ' + pend.length + ' task' + (pend.length > 1 ? 's' : '') + ' still pending today' : '⏳ আজ এখনো ' + bn(pend.length) + ' টি কাজ বাকি', b: lines(pend, 6, false) + (LN ? '\nDone: ' : '\nসম্পন্ন: ') + bn(n - pend.length) + '/' + bn(n), url: 'tasks.html' };
  }
  return { cfg, plan, build, due };
})();

function dgNow_(off) {
  const t = new Date(Date.now() + (off || 0) * 864e5);
  const k = Utilities.formatDate(t, TZ, 'yyyy-MM-dd'), hm = Utilities.formatDate(t, TZ, 'HH:mm'), a = k.split('-').map(Number);
  return { key: k, y: a[0], m: a[1] - 1, d: a[2], cur: +hm.slice(0, 2) * 60 + +hm.slice(3, 5) };
}

/* ---------- শিট থেকে পড়া ---------- */
function jp_(v) { try { return JSON.parse(v); } catch (e) { return undefined; } }
function dgRead_(name) {
  const sh = SpreadsheetApp.openById(SHEET_ID).getSheetByName(name); if (!sh) return [];
  const last = sh.getLastRow(); return last > 1 ? sh.getRange(2, 1, last - 1, 5).getValues() : [];
}
/* settings ট্যাব: সামারির সময় (dg/…), ভাষা, বাদ দেওয়া বাকি কাজ (skip/…) */
function dgSettings_() {
  const o = { dg: {}, skip: {} };
  dgRead_('settings').forEach(r => {
    if (isDel(r[4])) return;
    const k = String(r[0]), v = jp_(r[1]);
    if (k === 'lang') o.lang = v;
    else if (k.indexOf('dg/') === 0) o.dg[k.slice(3)] = v;
    else if (k.indexOf('skip/') === 0) { const p = k.split('/'); if (p.length === 3 && v) (o.skip[p[1]] = o.skip[p[1]] || {})[p[2]] = true; }
  });
  return o;
}
/* tasks ট্যাব: কাজের তালিকা (tasks#…) ও সম্পন্ন অবস্থা (done/তারিখ/id) */
function dgTasks_(D, Y, o) {
  o.tasks = []; o.done = {};
  dgRead_('tasks').forEach(r => {
    if (isDel(r[4])) return;
    const k = String(r[0]);
    if (k.indexOf('tasks#') === 0) { const t = jp_(r[1]); if (t && typeof t === 'object') o.tasks.push(t); }
    else if (k.indexOf('done/') === 0) {
      const p = k.split('/');
      if (p.length === 3 && (p[1] === D.key || p[1] === Y.key) && jp_(r[1]) === true) (o.done[p[1]] = o.done[p[1]] || {})[p[2]] = true;
    }
  });
}

/* ---------- ডিভাইসের টোকেন ---------- */
function getTokens_() { try { return JSON.parse(PropertiesService.getScriptProperties().getProperty('fcm_tokens') || '{}') || {}; } catch (e) { return {}; } }
function putTokens_(m) { PropertiesService.getScriptProperties().setProperty('fcm_tokens', JSON.stringify(m)); }
function saveFcm_(b) {
  const dev = String(b.dev || '').slice(0, 40), tok = String(b.fcm || '');
  if (!dev || tok.length < 50) return { ok: false, err: 'টোকেন ঠিক নয়' };
  const m = getTokens_();
  Object.keys(m).forEach(d => { if (m[d] === tok && d !== dev) delete m[d]; });
  m[dev] = tok; putTokens_(m);
  return { ok: true, devices: Object.keys(m).length };
}
function dropFcm_(b) { const m = getTokens_(); delete m[String(b.dev || '')]; putTokens_(m); return { ok: true }; }

/* ---------- FCM-এ পাঠানো (সার্ভিস অ্যাকাউন্ট দিয়ে) ---------- */
function fcmSa_() {
  const s = PropertiesService.getScriptProperties().getProperty('FCM_SA');
  if (!s) throw new Error('Script properties-এ FCM_SA বসানো হয়নি');
  return JSON.parse(s);
}
function fcmAccessToken_() {
  const cache = CacheService.getScriptCache(), c = cache.get('fcm_at'); if (c) return c;
  const sa = fcmSa_(), now = Math.floor(Date.now() / 1000);
  const b64 = s => Utilities.base64EncodeWebSafe(s).replace(/=+$/, '');
  const head = b64(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64(JSON.stringify({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/firebase.messaging', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const sig = Utilities.base64EncodeWebSafe(Utilities.computeRsaSha256Signature(head + '.' + claim, sa.private_key)).replace(/=+$/, '');
  const r = UrlFetchApp.fetch('https://oauth2.googleapis.com/token', { method: 'post', muteHttpExceptions: true, payload: { grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: head + '.' + claim + '.' + sig } });
  const j = jp_(r.getContentText()) || {};
  if (!j.access_token) throw new Error('FCM অনুমতি পাওয়া যায়নি: ' + r.getContentText().slice(0, 200));
  cache.put('fcm_at', j.access_token, 3000);
  return j.access_token;
}
function fcmSend_(token, m, tag) {
  const sa = fcmSa_();
  const body = { message: { token: token, data: { title: String(m.t), body: String(m.b), url: String(m.url || 'tasks.html'), tag: String(tag) }, webpush: { headers: { TTL: '7200', Urgency: 'high' } } } };
  const r = UrlFetchApp.fetch('https://fcm.googleapis.com/v1/projects/' + sa.project_id + '/messages:send', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { Authorization: 'Bearer ' + fcmAccessToken_() }, payload: JSON.stringify(body)
  });
  return { code: r.getResponseCode(), text: r.getContentText() };
}
function dgSendAll_(m, tag) {
  const toks = getTokens_(), res = { sent: 0, err: [] }; let ch = false;
  Object.keys(toks).forEach(d => {
    try {
      const r = fcmSend_(toks[d], m, tag);
      if (r.code === 200) res.sent++;
      else {
        res.err.push(r.code + ' ' + r.text.slice(0, 200));
        if (r.code === 404 || /UNREGISTERED/.test(r.text)) { delete toks[d]; ch = true; }   // মুছে যাওয়া/অচল টোকেন বাদ
      }
    } catch (e) { res.err.push(String(e && e.message || e)); }
  });
  if (ch) putTokens_(toks);
  return res;
}

/* ---------- প্রতি মিনিটে চলে: সময় হলে সামারি পাঠায় ---------- */
function dgTick() {
  if (!Object.keys(getTokens_()).length) return;                 // কোনো ডিভাইস না থাকলে শিটই খুলি না
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return;
  try {
    const o = dgSettings_(); if (!HDG.cfg(o).on) return;
    const D = dgNow_(0), P = PropertiesService.getScriptProperties();
    let sent = {}; try { sent = JSON.parse(P.getProperty('dg_sent') || '{}') || {}; } catch (e) {}
    const ks = HDG.plan(o, D, sent); if (!ks.length) return;
    const Y = dgNow_(-1); dgTasks_(D, Y, o);
    ks.forEach(k => {
      const m = HDG.build(k, o, D, Y);
      if (m) dgSendAll_(m, 'hayat-digest-' + k);
      sent[k] = D.key;
    });
    P.setProperty('dg_sent', JSON.stringify(sent));
  } finally { lock.releaseLock(); }
}

/* অ্যাপের "পুশ পরীক্ষা" বাটন: এখনই একটি সামারি পাঠায় */
function testPush_(b) {
  if (!Object.keys(getTokens_()).length) return { ok: false, err: 'কোনো ডিভাইস নিবন্ধিত নেই — আগে পুশ চালু করুন' };
  const k = b.k === 'pm' ? 'pm' : 'am', D = dgNow_(0), Y = dgNow_(-1), o = dgSettings_();
  dgTasks_(D, Y, o);
  let m = HDG.build(k, o, D, Y);
  if (!m) m = { t: '🔔 পরীক্ষা', b: 'আজ কোনো কাজ নেই, তাই দেখানোর মতো তালিকা নেই।', url: 'tasks.html' };
  const r = dgSendAll_(m, 'hayat-test-' + Date.now());
  return r.sent ? { ok: true, sent: r.sent } : { ok: false, err: r.err.join(' | ') || 'পাঠানো যায়নি' };
}
