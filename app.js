/* ===== 考研工作台 - 主应用 ===== */

// ===== 励志语录库 =====
const QUOTES = [
  { content: "你现在的态度，决定你十年后的高度。", source: "佚名" },
  { content: "种一棵树最好的时间是十年前，其次是现在。", source: "佚名" },
  { content: "所有的努力都不会完全白费，你付出的每一点滴汗水，都在为你积累着回报。", source: "佚名" },
  { content: "不要在该奋斗的年纪选择安逸。", source: "佚名" },
  { content: "你背不下来的书，总有人能背下来；你做不出的题，总有人能做出来；你愿意拖到明天的事，总有人今天努力做完。那么不好意思，你想过的生活也只能别人过了。", source: "考研圈流行语" },
  { content: "既然选择了远方，便只顾风雨兼程。", source: "汪国真《热爱生命》" },
  { content: "我不去想是否能够成功，既然选择了远方，便只顾风雨兼程。", source: "汪国真" },
  { content: "天下事有难易乎？为之，则难者亦易矣；不为，则易者亦难矣。", source: "彭端淑《为学》" },
  { content: "故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身。", source: "《孟子》" },
  { content: "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。", source: "《道德经》" },
  { content: "宝剑锋从磨砺出，梅花香自苦寒来。", source: "《警世贤文》" },
  { content: "业精于勤，荒于嬉；行成于思，毁于随。", source: "韩愈《进学解》" },
  { content: "路漫漫其修远兮，吾将上下而求索。", source: "屈原《离骚》" },
  { content: "长风破浪会有时，直挂云帆济沧海。", source: "李白《行路难》" },
  { content: "千磨万击还坚劲，任尔东西南北风。", source: "郑燮《竹石》" },
  { content: "没有人能替你承受痛苦，也没有人能拿走你的坚强。", source: "佚名" },
  { content: "最大的失败不是跌倒，而是从来不敢奔跑。", source: "佚名" },
  { content: "你只管努力，剩下的交给时间。", source: "佚名" },
  { content: "每一个不曾起舞的日子，都是对生命的辜负。", source: "尼采" },
  { content: "一个人知道自己为什么而活，就可以忍受任何一种生活。", source: "尼采" },
  { content: "成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。", source: "佚名" },
  { content: "星光不问赶路人，时光不负有心人。", source: "佚名" },
  { content: "你的孤独，虽败犹荣。", source: "刘同" },
  { content: "向死而生，向难而行。", source: "佚名" },
  { content: "我们一路奋战，不是为了改变世界，而是为了不让世界改变我们。", source: "《熔炉》" },
  { content: "如果你不出去走走，你就会以为这就是世界。", source: "佚名" },
  { content: "当你穿过了暴风雨，你就不再是原来那个人了。", source: "村上春树" },
  { content: "哪有什么天生好运，不过都是在暗处努力。", source: "佚名" },
  { content: "比你优秀的人比你还努力，你有什么资格不拼命。", source: "佚名" },
  { content: "不要假装很努力，因为结果不会陪你演戏。", source: "佚名" },
  { content: "现在不玩命，将来命玩你。", source: "佚名" },
  { content: "今天你翻的书，就是以后你数的钱。", source: "佚名" },
  { content: "只要你够努力，最坏的结果不过是大器晚成。", source: "佚名" },
  { content: "命运给你一个比别人低的起点，是为了让你演一个绝地反击的故事。", source: "刘媛媛《超级演说家》" },
  { content: "有些路，走下去会很苦很累，但是不走会后悔。", source: "佚名" },
  { content: "人生没有白走的路，每一步都算数。", source: "李宗盛" },
  { content: "不管前方的路有多苦，只要走的方向正确，不管多么崎岖，都比站在原地更接近幸福。", source: "宫崎骏《千与千寻》" },
  { content: "放弃不难，但坚持一定很酷。", source: "佚名" },
  { content: "你以为的极限，其实只是别人的起点。", source: "佚名" },
  { content: "如果你觉得现在走得辛苦，那说明你在走上坡路。", source: "佚名" },
  { content: "愿你历尽千帆，归来仍是少年。", source: "佚名" },
  { content: "别人的话只能参考，你的人生自己决定。", source: "佚名" },
  { content: "慢慢来，比较快。", source: "佚名" },
  { content: "时间不会辜负每一个用力生活的人。", source: "佚名" },
  { content: "世间自有公道，付出总有回报。说到不如做到，要做就做最好。", source: "佚名" },
  { content: "苦不苦，想想红军两万五；累不累，想想革命老前辈。", source: "佚名" },
  { content: "这不是结束，甚至不是结束的开始，但这可能是开始的结束。", source: "丘吉尔" },
  { content: "当你觉得晚了的时候，恰恰是最早的时候。", source: "佚名" },
  { content: "努力到无能为力，拼搏到感动自己。", source: "佚名" },
  { content: "成长就是把哭声调成静音的过程。", source: "佚名" },
];

let currentQuote = null;

function getRandomQuote() {
  const saved = Store.get('savedQuotes', []);
  // 从预置语库和收藏中随机
  const all = [...QUOTES, ...saved];
  return all[Math.floor(Math.random() * all.length)];
}

function renderQuoteBar() {
  currentQuote = getRandomQuote();
  const saved = Store.get('savedQuotes', []);
  const isSaved = saved.some(q => q.content === currentQuote.content);
  const bar = document.getElementById('quoteBar');
  if (!bar) return;
  bar.innerHTML = `
    <span style="flex-shrink:0;font-size:16px;">💬</span>
    <div class="quote-text">
      <span class="quote-content">${currentQuote.content}</span>
      <span class="quote-source">— ${currentQuote.source}</span>
    </div>
    <div class="quote-actions">
      <button class="quote-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveQuote()" title="${isSaved ? '已收藏' : '收藏'}">
        ${isSaved ? '⭐' : '☆'}
      </button>
      <button class="quote-btn" onclick="nextQuote()" title="换一句">🔄</button>
    </div>
  `;
}

function nextQuote() {
  let q;
  do {
    q = getRandomQuote();
  } while (currentQuote && q.content === currentQuote.content && QUOTES.length > 1);
  currentQuote = q;
  const saved = Store.get('savedQuotes', []);
  const isSaved = saved.some(q => q.content === currentQuote.content);
  const bar = document.getElementById('quoteBar');
  bar.innerHTML = `
    <span style="flex-shrink:0;font-size:16px;">💬</span>
    <div class="quote-text">
      <span class="quote-content">${currentQuote.content}</span>
      <span class="quote-source">— ${currentQuote.source}</span>
    </div>
    <div class="quote-actions">
      <button class="quote-btn ${isSaved ? 'saved' : ''}" onclick="toggleSaveQuote()" title="${isSaved ? '已收藏' : '收藏'}">
        ${isSaved ? '⭐' : '☆'}
      </button>
      <button class="quote-btn" onclick="nextQuote()" title="换一句">🔄</button>
    </div>
  `;
}

function toggleSaveQuote() {
  if (!currentQuote) return;
  const saved = Store.get('savedQuotes', []);
  const idx = saved.findIndex(q => q.content === currentQuote.content);
  if (idx >= 0) {
    saved.splice(idx, 1);
    toast('已取消收藏');
  } else {
    saved.push({ ...currentQuote, id: uid(), time: now() });
    toast('已收藏');
  }
  Store.set('savedQuotes', saved);
  // 刷新按钮状态
  const isSaved = idx < 0;
  const btn = document.querySelector('.quote-btn');
  if (btn) {
    btn.textContent = isSaved ? '⭐' : '☆';
    btn.classList.toggle('saved', isSaved);
  }
  // 如果在收藏页面，刷新列表
  if (currentModule === 'quotes') switchModule('quotes');
}

// ===== 我的收藏模块 =====
// (modules['quotes'] 移到 const modules 声明之后，避免 TDZ 错误)

function addCustomQuote() {
  const content = document.getElementById('quoteInput').value.trim();
  const source = document.getElementById('quoteSourceInput').value.trim() || '我';
  if (!content) return;
  Store.push('savedQuotes', { id: uid(), content, source, time: now() });
  document.getElementById('quoteInput').value = '';
  document.getElementById('quoteSourceInput').value = '';
  renderQuoteList(Store.get('savedQuotes'));
  toast('已添加');
}

function renderQuoteList(items) {
  const el = document.getElementById('quoteList');
  if (!el) return;
  if (!items.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-icon">💬</div><div class="empty-state-text">还没有收藏的句子，去顶部点☆收藏吧~</div></div>';
    return;
  }
  // [v2/T04-5] 原为 items.reverse()，原地反转会污染调用方数组导致列表反复抖动
  el.innerHTML = [...items].reverse().map(q => `
    <div class="sentence-card">
      <div style="font-size:14px;line-height:1.8;font-weight:500;">"${q.content}"</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:8px;">— ${q.source} ${q.time ? `· ${fmtDate(q.time)}` : ''}</div>
      <button class="todo-delete" style="margin-top:6px;" onclick="delQuote('${q.id}')">删除</button>
    </div>
  `).join('');
}

function delQuote(id) {
  Store.removeIn('savedQuotes', id);
  renderQuoteList(Store.get('savedQuotes'));
  toast('已删除');
}

// ===== 存储层 =====
const Store = {
  get(key, def = null) {
    try {
      const v = localStorage.getItem('ky_' + key);
      return v ? JSON.parse(v) : def;
    } catch { return def; }
  },
  set(key, val) {
    localStorage.setItem('ky_' + key, JSON.stringify(val));
  },
  del(key) {
    localStorage.removeItem('ky_' + key);
  },
  // 获取带日期前缀的数据
  getByDate(key, date) {
    const all = this.get(key, {});
    return all[date] || null;
  },
  setByDate(key, date, val) {
    const all = this.get(key, {});
    all[date] = val;
    this.set(key, all);
  },
  // 追加到数组
  push(key, item) {
    const arr = this.get(key, []);
    arr.push(item);
    this.set(key, arr);
    return item;
  },
  // 更新数组中某项
  updateIn(key, id, updates) {
    const arr = this.get(key, []);
    const idx = arr.findIndex(x => x.id === id);
    if (idx >= 0) {
      arr[idx] = { ...arr[idx], ...updates };
      this.set(key, arr);
    }
  },
  // 删除数组中某项
  removeIn(key, id) {
    const arr = this.get(key, []);
    this.set(key, arr.filter(x => x.id !== id));
  }
};

// ===== 云端同步层（基于 GitHub API） =====
const SYNC_REPO = 'viniyamile518-commits/kaoyan-workbench';
const SYNC_FILE = 'sync-data.json';
const SYNC_BRANCH = 'sync-data';

const CloudSync = {
  // 同步配置（存在 localStorage 中）
  getConfig() {
    return Store.get('syncConfig', null);
  },
  setConfig(cfg) {
    Store.set('syncConfig', cfg);
  },
  isEnabled() {
    const cfg = this.getConfig();
    return cfg && cfg.token && cfg.roomId;
  },

  // GitHub API: 读取 sync-data.json
  async pull() {
    const cfg = this.getConfig();
    if (!cfg) throw new Error('未配置同步');
    const url = `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_FILE}?ref=${SYNC_BRANCH}&t=${Date.now()}`;
    const res = await fetch(url, {
      headers: {
        'Authorization': `token ${cfg.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (res.status === 404) return null; // 还没有云端数据
    if (!res.ok) throw new Error(`拉取失败: ${res.status}`);
    const json = await res.json();
    const content = atob(json.content.replace(/\n/g, ''));
    return { sha: json.sha, data: JSON.parse(content) };
  },

  // GitHub API: 写入 sync-data.json
  async push(data, sha) {
    const cfg = this.getConfig();
    if (!cfg) throw new Error('未配置同步');
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    const url = `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_FILE}`;
    const body = {
      message: `sync: ${new Date().toISOString()}`,
      content: content,
      branch: SYNC_BRANCH
    };
    if (sha) body.sha = sha;
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${cfg.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(`推送失败: ${err.message || res.status}`);
    }
    const json = await res.json();
    return json.content.sha;
  },

  // 确保同步分支存在
  async ensureBranch() {
    const cfg = this.getConfig();
    const url = `https://api.github.com/repos/${SYNC_REPO}/branches/${SYNC_BRANCH}`;
    const res = await fetch(url, {
      headers: {
        'Authorization': `token ${cfg.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (res.status === 200) return true; // 分支已存在
    if (res.status !== 404) return false;

    // 创建分支：从 main 的 SHA 创建
    const mainRes = await fetch(`https://api.github.com/repos/${SYNC_REPO}/branches/main`, {
      headers: {
        'Authorization': `token ${cfg.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (!mainRes.ok) return false;
    const mainJson = await mainRes.json();
    const createRes = await fetch(`https://api.github.com/repos/${SYNC_REPO}/git/refs`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${cfg.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ref: `refs/heads/${SYNC_BRANCH}`,
        sha: mainJson.commit.sha
      })
    });
    return createRes.ok;
  },

  // 收集本地所有 ky_ 数据
  // 绝不上传到云端的敏感 key（含密钥/凭据）
  // [v2/T03] ky_backup_v1 为 v1 全量快照（可达数百 KB），排除以免撑爆同步文件
  SECRET_KEYS: ['ky_syncConfig', 'ky_aiConfig', 'ky_backup_v1'],

  collectLocal() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('ky_') && !this.SECRET_KEYS.includes(key)) {
        try { data[key] = JSON.parse(localStorage.getItem(key)); } catch {}
      }
    }
    return data;
  },

  // 将云端数据写入本地
  applyToLocal(cloudData) {
    if (!cloudData) return;
    for (const key in cloudData) {
      if (key.startsWith('ky_') && !this.SECRET_KEYS.includes(key)) {
        localStorage.setItem(key, JSON.stringify(cloudData[key]));
      }
    }
  },

  // 智能合并：以时间戳为准，云端更新的字段覆盖本地
  merge(localData, cloudData, cloudTime) {
    const merged = { ...localData };
    if (cloudData) {
      for (const key in cloudData) {
        // 如果云端有但本地没有，或云端更新，用云端
        if (!(key in merged) || cloudTime > (Store.get('lastSyncTime', 0))) {
          merged[key] = cloudData[key];
        }
      }
    }
    return merged;
  }
};

// ===== 工具函数 =====
// [v2/T02] today() 由 UTC 切片改为委托 todayStr()（本地时区）。
// 理由：ARCH §6.2 规定「今天」一律走 todayStr()；若两者不一致，
// 本地 00:00–08:00 期间 today() 会返回前一天，导致同一天的数据被写入两个日期键。
const today = () => todayStr();
const now = () => new Date().toISOString();
/**
 * 生成短唯一 id
 * @param {string} [prefix=''] 前缀，如 'pg_'
 * @returns {string}
 */
const uid = (prefix = '') => prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const daysUntil = (dateStr) => {
  const d = new Date(dateStr + 'T00:00:00');
  const now = new Date(new Date().toDateString());
  return Math.ceil((d - now) / 86400000);
};
const fmtDate = (d) => {
  const dt = new Date(d);
  return `${dt.getMonth()+1}月${dt.getDate()}日 ${dt.getHours().toString().padStart(2,'0')}:${dt.getMinutes().toString().padStart(2,'0')}`;
};

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

function modal(title, contentHTML, onConfirm, hideActions) {
  const m = document.createElement('div');
  m.className = 'modal show';
  const actionsHTML = hideActions
    ? `<div class="modal-actions"><button class="btn btn-outline" data-act="cancel">关闭</button></div>`
    : `<div class="modal-actions"><button class="btn btn-outline" data-act="cancel">取消</button><button class="btn btn-primary" data-act="ok">确定</button></div>`;
  m.innerHTML = `
    <div class="modal-box">
      <div class="modal-title">${title}</div>
      <div class="modal-body">${contentHTML}</div>
      ${actionsHTML}
    </div>
  `;
  document.body.appendChild(m);
  m.querySelector('[data-act="cancel"]').onclick = () => m.remove();
  if (!hideActions) {
    m.querySelector('[data-act="ok"]').onclick = () => {
      if (onConfirm && onConfirm(m) !== false) m.remove();
    };
  }
  return m;
}

// 数学题图放大查看（图片版做题本）
function openMathImgModal(src, caption) {
  const safeCaption = String(caption||'').replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
  const html = `
    <div style="text-align:center;">
      <img src="${src}" alt="${safeCaption}" style="max-width:92vw;max-height:78vh;height:auto;border-radius:6px;background:#fff;display:block;margin:0 auto;" />
      <div style="margin-top:10px;font-size:13px;color:var(--text-secondary);">${safeCaption}</div>
    </div>
  `;
  modal('题目图片 · ' + safeCaption, html, null, true);
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ══════════════════════════════════════════════════════════════
 * [v2/T02] 工具层：日期 · 数值 · 确定性随机 · 每日轮换
 * 约定（ARCH §6.2）：日期一律 'YYYY-MM-DD' 本地时区字符串；
 * 日期运算一律走 dateOffset / daysBetween，禁止手写毫秒加减。
 * ══════════════════════════════════════════════════════════════ */

/**
 * 今天的本地日期字符串
 * @returns {string} 'YYYY-MM-DD'
 */
function todayStr() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

/**
 * 将 'YYYY-MM-DD' 解析为本地零点 Date（规避 UTC 解析陷阱）
 * @param {string} dateStr
 * @returns {Date|null}
 */
function parseDateStr(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null;
  const m = dateStr.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

/**
 * 日期偏移（用 setDate 构造，天然规避夏令时/时区陷阱，ARCH R5）
 * @param {string} dateStr 'YYYY-MM-DD'
 * @param {number} days    可为负
 * @returns {string} 'YYYY-MM-DD'
 */
function dateOffset(dateStr, days) {
  const d = parseDateStr(dateStr);
  if (!d) return dateStr;
  d.setDate(d.getDate() + (Number(days) || 0));
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

/**
 * 两个日期相差天数（to - from）
 * @param {string} fromStr
 * @param {string} toStr
 * @returns {number} 整数天数；任一无效返回 0
 */
function daysBetween(fromStr, toStr) {
  const a = parseDateStr(fromStr);
  const b = parseDateStr(toStr);
  if (!a || !b) return 0;
  // 归一到 UTC 零点做差，消除夏令时导致的 23/25 小时误差
  const ua = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const ub = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((ub - ua) / 86400000);
}

/**
 * [v2/T02] ARCH §3.2 约定名 addDays()，实现委托给 dateOffset()。
 * 保留两个名字是为了 TP4/TP5 按设计文档直接调用 addDays 时不必再改签名；
 * 只有一份实现，不构成重复代码。非法基准日期回退为今天。
 * @param {string} dateStr 'YYYY-MM-DD'
 * @param {number} n       偏移天数，可为负
 * @returns {string} 'YYYY-MM-DD'
 */
function addDays(dateStr, n) {
  return dateOffset(parseDateStr(dateStr) ? dateStr : todayStr(), n);
}

/**
 * 数值钳制
 * @param {number} v
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
function clamp(v, lo, hi) {
  const n = Number(v);
  if (!Number.isFinite(n)) return lo;
  return Math.min(Math.max(n, lo), hi);
}

/**
 * FNV-1a 字符串哈希
 * @param {string} str
 * @returns {number} uint32
 */
function hashStr(str) {
  const s = String(str == null ? '' : str);
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * mulberry32 确定性伪随机数发生器
 * @param {number} seed
 * @returns {() => number} 每次返回 [0,1)
 */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * 确定性伪随机单选：同一天同一 salt 恒定，隔天跳变
 * @template T
 * @param {T[]} arr
 * @param {string} dateStr
 * @param {string} [saltKey='']
 * @returns {T|null}
 */
function dailyPick(arr, dateStr, saltKey = '') {
  if (!arr || !arr.length) return null;
  return arr[hashStr(dateStr + '|' + saltKey) % arr.length];
}

/**
 * 确定性伪随机多选（不重复），基于种子 Fisher-Yates
 * @template T
 * @param {T[]} arr
 * @param {string} dateStr
 * @param {string} saltKey
 * @param {number} n
 * @returns {T[]}
 */
function dailyPickN(arr, dateStr, saltKey, n) {
  if (!arr || !arr.length) return [];
  const rnd = mulberry32(hashStr(dateStr + '|' + saltKey));
  const pool = arr.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
  return pool.slice(0, Math.min(Math.max(0, n | 0), pool.length));
}

/**
 * 严格顺序循环轮换：Day1 → DayN → Day1
 * @template T
 * @param {T[]} arr
 * @param {string} dateStr
 * @param {string} startDateStr
 * @param {number} [manualOffset=0]
 * @returns {{item:T, index:number, total:number}|null}
 */
function rotateByDate(arr, dateStr, startDateStr, manualOffset = 0) {
  if (!arr || !arr.length) return null;
  const d = daysBetween(startDateStr || dateStr, dateStr);
  const n = arr.length;
  const idx = (((d + (Number(manualOffset) || 0)) % n) + n) % n;
  return { item: arr[idx], index: idx, total: n };
}

/* ══════════════════════════════════════════════════════════════
 * [v2/T02] TimerBus：统一定时器总线
 * 作用域约定：'view:'   随模块切换销毁（switchModule 首行 clearScope）
 *             'global:' 应用级常驻，仅用户显式停止才清（如番茄钟）
 * ══════════════════════════════════════════════════════════════ */
const TimerBus = {
  _h: Object.create(null),

  /**
   * 注册（并替换同名）定时器
   * @param {string} name 形如 'view:dashClock' / 'global:pomodoro'
   * @param {() => void} fn
   * @param {number} ms
   * @returns {string} name
   */
  set(name, fn, ms) {
    this.clear(name);
    this._h[name] = { id: setInterval(fn, ms), once: false };
    return name;
  },

  /**
   * 注册一次性延时任务（同样纳入作用域管理，可被 clearScope 统一回收）
   * @param {string} name 形如 'global:markjiUndo'
   * @param {() => void} fn
   * @param {number} ms
   * @returns {string} name
   */
  once(name, fn, ms) {
    this.clear(name);
    const self = this;
    this._h[name] = {
      id: setTimeout(() => { delete self._h[name]; fn(); }, ms),
      once: true
    };
    return name;
  },

  /**
   * 清除指定定时器（自动区分 interval / timeout）
   * @param {string} name
   */
  clear(name) {
    const h = this._h[name];
    if (h) {
      if (h.once) clearTimeout(h.id);
      else clearInterval(h.id);
      delete this._h[name];
    }
  },

  /**
   * 清除某一作用域下全部定时器
   * @param {string} prefix 'view:' | 'global:'
   */
  clearScope(prefix) {
    Object.keys(this._h)
      .filter(k => k.indexOf(prefix) === 0)
      .forEach(k => this.clear(k));
  },

  /** @returns {string[]} 当前存活的定时器名 */
  list() { return Object.keys(this._h); },

  /**
   * 判断某定时器是否存活
   * @param {string} name
   * @returns {boolean}
   */
  has(name) { return !!this._h[name]; }
};

/* ══════════════════════════════════════════════════════════════
 * [v2/T05] DataLoader：内容资产统一加载层
 * 路径约定（ARCH §6.6）：
 *   major_knowledge / eng_sentences_66 / politics_questions → /data/
 *   markji_knowledge                                        → /（根目录）
 * 失败降级：返回 fallback + toast，绝不抛出导致模块白屏。
 * ══════════════════════════════════════════════════════════════ */
const DataLoader = {
  /** @type {Map<string, any>} 已加载结果缓存 */
  _cache: new Map(),
  /** @type {Map<string, Promise<any>>} 进行中的请求，防止并发重复拉取 */
  _inflight: new Map(),
  /** @type {Set<string>} 已提示过失败的路径，避免 toast 刷屏 */
  _warned: new Set(),

  /**
   * 带内存缓存的 JSON 加载
   * @template T
   * @param {string} path 形如 '/data/major_knowledge.json'
   * @param {T} [fallback=null] 失败时返回值
   * @returns {Promise<T>}
   */
  async load(path, fallback = null) {
    if (this._cache.has(path)) return this._cache.get(path);
    if (this._inflight.has(path)) return this._inflight.get(path);

    const p = (async () => {
      try {
        const res = await fetch(path, { cache: 'no-cache' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const json = await res.json();
        this._cache.set(path, json);
        return json;
      } catch (err) {
        console.error('[DataLoader] 加载失败:', path, err);
        if (!this._warned.has(path)) {
          this._warned.add(path);
          if (typeof toast === 'function') toast('内容加载失败，请检查服务是否启动');
        }
        return fallback;
      } finally {
        this._inflight.delete(path);
      }
    })();

    this._inflight.set(path, p);
    return p;
  },

  /**
   * 专业课知识树：34 章 / 255 知识点
   * @returns {Promise<{meta:object, subjects:Array}>}
   */
  majorKnowledge() {
    return this.load('/data/major_knowledge.json', { meta: {}, subjects: [] });
  },

  /**
   * 英语长难句 66 句
   * @returns {Promise<{meta:object, sentences:Array}>}
   */
  engSentences() {
    return this.load('/data/eng_sentences_66.json', { meta: {}, sentences: [] });
  },

  /**
   * 政治题库 125 题
   * @returns {Promise<{meta:object, questions:Array}>}
   */
  politicsQuestions() {
    return this.load('/data/politics_questions.json', { meta: {}, questions: [] });
  },

  /**
   * markji 数学公式卡片 516 条（注意：在项目根目录，不在 data/）
   * @returns {Promise<{totalItems:number, items:Array}>}
   */
  markjiCards() {
    return this.load('/markji_knowledge.json', { totalItems: 0, items: [] });
  },

  /** 清空全部缓存（调试用） */
  clearCache() {
    this._cache.clear();
    this._inflight.clear();
    this._warned.clear();
  }
};

/* ══════════════════════════════════════════════════════════════
 * [v2/T04-1] 作用域化进度条 patch（ARCH §1.6 A6-bug）
 * v1 缺陷：document.querySelector('.kp-progress-text') 永远命中页面
 *          第一个进度条 —— 第 3 章的操作改了第 1 章的条。
 * v2 修法：所有进度条外层必须带唯一 id（形如 'kp-sec-gis-p1'），
 *          查询严格限定在该 scope 内，并且只做局部 patch，
 *          禁止用 switchModule(currentModule) 整页重渲染。
 * ══════════════════════════════════════════════════════════════ */

/**
 * 局部刷新某个进度条（作用域化，绝不触碰其他进度条）
 * @param {string} scopeId 进度条容器元素 id，如 'kp-sec-gis-p1'
 * @param {number} done    已完成数
 * @param {number} total   总数
 * @param {string} [label] 可选后缀文案，如 '已整理'；省略时输出 'done/total（pct%）'
 * @returns {boolean} 是否命中并完成 patch（视图已切走时返回 false）
 */
function patchProgress(scopeId, done, total, label = '') {
  const scope = document.getElementById(scopeId);
  if (!scope) return false;                 // 视图已切走，静默返回
  const d = Number(done) || 0;
  const t = Number(total) || 0;
  const pct = t ? Math.round(d / t * 100) : 0;
  const fill = scope.querySelector('.kp-progress-fill');
  const text = scope.querySelector('.kp-progress-text');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = label ? `${d}/${t} ${label}（${pct}%）` : `${d}/${t}（${pct}%）`;
  return true;
}

/* ══════════════════════════════════════════════════════════════
 * [v2/T03] 数据模型迁移 v1 → v2
 * 核心策略：追加优先于改写，归档优先于删除，懒生成优先于批量写入。
 * 幂等：连跑 N 次结果一致；失败不阻塞启动（仅记录日志）。
 * ══════════════════════════════════════════════════════════════ */
const SCHEMA_VERSION = 2;

/**
 * 归一化课程分组数据
 * ⚠️ 运行时契约以 v1 的 getCourseData() 为准：`{ groups: CourseGroup[] }`，
 *    而非 ARCH §3.1 声明的裸数组。此处同时写入 name 与 title 双字段，
 *    使 v1 渲染器（读 name）与 v2 renderLinkGroup（读 title）均可工作。
 * @param {any} old v1 的 courses_{cat} 数据（数组或已是 v2 结构）
 * @returns {{groups: Array<{id:string,name:string,links:Array}>}}
 */
function normalizeCourseGroups(old) {
  // 已是 v2 结构则原样返回（幂等）
  if (old && !Array.isArray(old) && Array.isArray(old.groups)) return old;

  const list = Array.isArray(old) ? old : [];
  const links = list.map(c => {
    const name = c && (c.name || c.title) ? (c.name || c.title) : '未命名';
    return {
      id: (c && c.id) || uid(),
      name: name,
      title: name,
      type: (c && c.type) || '其他',
      url: (c && c.url) || '',
      note: (c && c.note) || ''
    };
  });
  return { groups: [{ id: uid(), name: '默认分组', links: links }] };
}

/**
 * 执行 v1 → v2 数据迁移
 * @returns {{migrated:boolean, from:number, to:number, log?:string[], error?:string}}
 */
function migrateV1toV2() {
  const from = Number(Store.get('schemaVersion', 1)) || 1;
  if (from >= SCHEMA_VERSION) return { migrated: false, from: from, to: from };

  // ── Step 0：全量快照备份（唯一一次性大写入，只保留一份） ──
  const snapshot = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.indexOf('ky_') === 0 && k !== 'ky_backup_v1') {
      snapshot[k] = localStorage.getItem(k);
    }
  }
  try {
    localStorage.setItem('ky_backup_v1', JSON.stringify({ at: Date.now(), from: from, data: snapshot }));
  } catch (e) {
    console.warn('[migrate] 备份失败（可能配额不足），继续迁移', e);
  }

  const log = [];
  try {
    const tStr = todayStr();

    // ── Step 1：mathPoints 补齐 SM-2 v2 字段（幂等） ──
    const pts = Store.get('mathPoints', []);
    let touched = 0;
    if (Array.isArray(pts)) {
      pts.forEach(p => {
        if (p && p.stability === undefined) {
          // 由既有 interval 反推 stability，使 R(interval) 恰为目标记忆率
          const iv = Number(p.interval) || 0;
          p.stability = iv > 0 ? iv / 0.16251892949777494 : 0;
          p.lapses = p.lapses == null ? 0 : p.lapses;
          p.lastQuality = p.lastQuality == null ? null : p.lastQuality;
          p.lastReview = p.lastReview == null ? (p.nextReview || null) : p.lastReview;
          touched++;
        }
      });
      if (touched) { Store.set('mathPoints', pts); log.push('mathPoints +v2字段 ×' + touched); }
    }

    // ── Step 2：xbb66.current → engSentenceState（保留旧键不删） ──
    if (!Store.get('engSentenceState')) {
      const oldXbb = Store.get('xbb66', {}) || {};
      Store.set('engSentenceState', {
        startDate: oldXbb.startDate || tStr,
        // v1 的 current 是 1-based 句号，v2 的 manualOffset 是 0-based 偏移
        manualOffset: Math.max(0, (Number(oldXbb.current) || 1) - 1),
        marks: oldXbb.marks || {},
        migratedFrom: 'xbb66'
      });
      log.push('xbb66 → engSentenceState');
    }

    // ── Step 3：旧规划器数据归档（只搬不删原始键，UI 不再读） ──
    if (!Store.get('plannerArchive')) {
      const legacyKeys = ['phases', 'monthly', 'milestones', 'goalSplits', 'goalTarget', 'plannerHistory'];
      const arc = {};
      legacyKeys.forEach(k => {
        const v = Store.get(k);
        if (v != null) arc[k] = v;
      });
      if (Object.keys(arc).length) {
        Store.set('plannerArchive', { at: Date.now(), data: arc });
        log.push('旧规划数据已归档 ×' + Object.keys(arc).length);
      }
    }

    // ── Step 4：courses_ → coursesV2_（v1 已做过则跳过） ──
    ['math', 'eng', 'politics', 'gis', 'rs', 'gps'].forEach(cat => {
      if (Store.get('coursesV2_' + cat) == null) {
        const oldCourses = Store.get('courses_' + cat);
        if (oldCourses) {
          Store.set('coursesV2_' + cat, normalizeCourseGroups(oldCourses));
          log.push('coursesV2_' + cat);
        }
      }
    });

    // ── Step 5：dailyGoals 容器初始化（不预填任何日期） ──
    if (Store.get('dailyGoals') == null) Store.set('dailyGoals', {});

    // ── Step 6：v1 的 todo[date].items[].source='ai' → 'planner' ──
    const todoAll = Store.get('todo', {}) || {};
    let srcFixed = 0;
    Object.keys(todoAll).forEach(d => {
      const rec = todoAll[d];
      if (rec && Array.isArray(rec.items)) {
        rec.items.forEach(it => {
          if (it && it.source === 'ai') { it.source = 'planner'; srcFixed++; }
        });
      }
    });
    if (srcFixed) { Store.set('todo', todoAll); log.push("todo source 'ai'→'planner' ×" + srcFixed); }

    // ⚠️ 不在此处生成 markjiState 的 516 条记录 —— 见 ensureMarkjiState() 懒生成
    Store.set('schemaVersion', SCHEMA_VERSION);
    console.info('[migrate] v1→v2 完成：', log);
    return { migrated: true, from: from, to: SCHEMA_VERSION, log: log };

  } catch (err) {
    console.error('[migrate] 失败，已保留 ky_backup_v1，可在控制台调用 rollbackToV1() 还原', err);
    return { migrated: false, from: from, to: from, error: String(err) };
  }
}

/**
 * 回滚到 v1 快照（控制台手动调用）
 * @returns {void}
 */
function rollbackToV1() {
  const bak = Store.get('backup_v1');
  if (!bak || !bak.data) { toast('无可用备份'); return; }
  Object.keys(bak.data).forEach(k => {
    localStorage.setItem(k, bak.data[k]);
  });
  localStorage.removeItem('ky_schemaVersion');
  toast('已回滚到 v1，即将刷新');
  setTimeout(() => location.reload(), 600);
}

// ===== 状态 =====
let currentModule = 'review';
let currentDate = today();

// ===== 导航 =====
function switchModule(name) {
  TimerBus.clearScope('view:');   // [v2/T02] 清掉上个视图的定时器，根治 dashClockInterval 泄漏
  currentModule = name;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const nav = document.querySelector(`.nav-item[data-module="${name}"]`);
  if (nav) {
    nav.classList.add('active');
    document.getElementById('pageTitle').textContent = nav.querySelector('.nav-text').textContent;
  }
  const content = document.getElementById('content');
  content.innerHTML = '';
  const headerExtra = document.getElementById('headerExtra');
  headerExtra.innerHTML = '';

  // 渲染对应模块
  if (modules[name]) modules[name](content, headerExtra);
  else content.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🚧</div><div class="empty-state-text">模块开发中...</div></div>';

  // 移动端关闭侧边栏
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
  }
}

// ===== AI 跳转 =====
// ===== AI 引擎：OpenAI 兼容接口，浏览器直连，支持流式 =====
const AI_PROVIDERS = {
  siliconflow: {
    name: '硅基流动（有免费模型）',
    base: 'https://api.siliconflow.cn/v1/chat/completions',
    models: ['Qwen/Qwen2.5-7B-Instruct', 'THUDM/glm-4-9b-chat', 'deepseek-ai/DeepSeek-V3'],
    keyUrl: 'https://cloud.siliconflow.cn/account/ak',
    tip: '注册送额度，Qwen2.5-7B 等小模型永久免费。推荐新手首选。',
  },
  zhipu: {
    name: '智谱 GLM（推荐 · 有免费模型）',
    base: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    models: ['glm-4-flash', 'glm-4.5-flash', 'glm-4.7-flash', 'glm-4-air', 'glm-4-plus'],
    keyUrl: 'https://open.bigmodel.cn/usercenter/apikeys',
    tip: 'glm-4-flash 永久免费不限量（128K上下文）；glm-4.7-flash 也免费且更强（200K）。新用户另送2000万Token。',
  },
  deepseek: {
    name: 'DeepSeek（付费，最便宜）',
    base: 'https://api.deepseek.com/chat/completions',
    models: ['deepseek-chat', 'deepseek-reasoner'],
    keyUrl: 'https://platform.deepseek.com/api_keys',
    tip: '约 ¥1/百万 token，规划一次不到 1 分钱，效果最好。',
  },
  moonshot: {
    name: 'Kimi / Moonshot',
    base: 'https://api.moonshot.cn/v1/chat/completions',
    models: ['moonshot-v1-8k', 'moonshot-v1-32k'],
    keyUrl: 'https://platform.moonshot.cn/console/api-keys',
    tip: '注册送 ¥15 额度。',
  },
  custom: {
    name: '自定义（OpenAI 兼容）',
    base: '',
    models: [],
    keyUrl: '',
    tip: '填写任意 OpenAI 兼容接口的完整 URL，如 https://xxx/v1/chat/completions',
  },
};

const AIEngine = {
  getConfig() {
    return Store.get('aiConfig', {
      provider: 'siliconflow',
      apiKey: '',
      model: 'Qwen/Qwen2.5-7B-Instruct',
      customBase: '',
    });
  },
  setConfig(cfg) {
    Store.set('aiConfig', cfg);
  },
  isReady() {
    const c = this.getConfig();
    return !!(c.apiKey && c.model);
  },
  endpoint() {
    const c = this.getConfig();
    if (c.provider === 'custom') return c.customBase;
    return AI_PROVIDERS[c.provider]?.base || '';
  },

  /**
   * 流式对话
   * @param {Array} messages [{role,content}]
   * @param {Function} onDelta 每次收到增量文本时回调
   * @param {AbortSignal} signal 中止信号
   * @returns {Promise<string>} 完整回复
   */
  async chat(messages, onDelta, signal) {
    const c = this.getConfig();
    const url = this.endpoint();
    if (!url) throw new Error('未配置 API 地址');
    if (!c.apiKey) throw new Error('未配置 API Key');

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + c.apiKey,
      },
      body: JSON.stringify({
        model: c.model,
        messages,
        stream: true,
        temperature: 0.6,
        max_tokens: 4000,
      }),
      signal,
    });

    if (!res.ok) {
      let msg = `HTTP ${res.status}`;
      try {
        const err = await res.json();
        msg += ' · ' + (err.error?.message || err.message || JSON.stringify(err).slice(0, 200));
      } catch (e) {
        try { msg += ' · ' + (await res.text()).slice(0, 200); } catch (e2) {}
      }
      if (res.status === 401) msg += '\n（API Key 无效，请到设置里检查）';
      if (res.status === 429) msg += '\n（额度用尽或请求过快）';
      throw new Error(msg);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let full = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const t = line.trim();
        if (!t || !t.startsWith('data:')) continue;
        const data = t.slice(5).trim();
        if (data === '[DONE]') continue;
        try {
          const json = JSON.parse(data);
          const delta = json.choices?.[0]?.delta;
          const piece = delta?.content || delta?.reasoning_content || '';
          if (piece) {
            full += piece;
            if (onDelta) onDelta(piece, full);
          }
        } catch (e) { /* 忽略不完整分片 */ }
      }
    }
    return full;
  },

  // 非流式测试连接
  async test() {
    const c = this.getConfig();
    const url = this.endpoint();
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + c.apiKey },
      body: JSON.stringify({ model: c.model, messages: [{ role: 'user', content: '回复"ok"两个字' }], max_tokens: 10 }),
    });
    if (!res.ok) {
      let msg = `HTTP ${res.status}`;
      try { const e = await res.json(); msg += ' · ' + (e.error?.message || JSON.stringify(e).slice(0, 150)); } catch (x) {}
      throw new Error(msg);
    }
    const j = await res.json();
    return j.choices?.[0]?.message?.content || '(空回复)';
  },
};

// ===== AI 设置面板 =====
function openAISettings(onSaved) {
  const cfg = AIEngine.getConfig();
  const provOptions = Object.entries(AI_PROVIDERS)
    .map(([k, v]) => `<option value="${k}" ${cfg.provider === k ? 'selected' : ''}>${v.name}</option>`)
    .join('');

  const m = modal('⚙️ AI 对话设置', `
    <div style="font-size:12px;color:var(--text-secondary);line-height:1.7;margin-bottom:12px;background:#f0f7ff;padding:10px 12px;border-radius:8px;">
      配置后，规划师就能<b>在工作台里直接和 AI 对话</b>，不用再跳转复制粘贴。<br>
      API Key 只保存在你自己的浏览器里，不会上传到任何服务器。
    </div>

    <details class="ai-guide" open>
      <summary>🔰 第一次配置？点这里看 3 步教程（免费）</summary>
      <div class="ai-guide-body">
        <div class="ai-guide-step">
          <span class="ai-guide-num">1</span>
          <div>
            <b>注册智谱账号</b>（手机号验证码，1分钟）<br>
            <a href="https://open.bigmodel.cn/login" target="_blank">→ 打开注册页 open.bigmodel.cn</a>
          </div>
        </div>
        <div class="ai-guide-step">
          <span class="ai-guide-num">2</span>
          <div>
            <b>创建 API Key</b>：登录后进「API 密钥」页，点<b>「添加新的API Key」</b>，
            再点复制按钮把它复制下来（形如 <code>xxxx.yyyy</code>）<br>
            <a href="https://open.bigmodel.cn/usercenter/apikeys" target="_blank">→ 直达密钥页面</a>
          </div>
        </div>
        <div class="ai-guide-step">
          <span class="ai-guide-num">3</span>
          <div>
            <b>粘贴到下面的输入框</b>，点「🔌 测试连接」看到绿色 ✅ 就成功了，
            最后点「确定」保存。
          </div>
        </div>
        <div class="ai-guide-note">
          💡 用 <b>glm-4-flash</b> 模型完全免费、不限量，不用充值也不用绑卡。
          <button class="btn btn-outline btn-sm" id="aiQuickFill" style="margin-top:8px;">⚡ 一键填入推荐配置</button>
        </div>
      </div>
    </details>

    <div style="margin-bottom:10px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;">服务商</label>
      <select class="select" id="aiProvider">${provOptions}</select>
      <div id="aiProviderTip" style="font-size:12px;color:var(--text-secondary);margin-top:5px;line-height:1.5;"></div>
    </div>

    <div style="margin-bottom:10px;" id="aiCustomBaseWrap">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;">接口地址</label>
      <input class="input" id="aiCustomBase" value="${cfg.customBase || ''}" placeholder="https://xxx/v1/chat/completions">
    </div>

    <div style="margin-bottom:10px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;">
        API Key <a id="aiKeyLink" href="#" target="_blank" style="font-weight:400;font-size:12px;margin-left:6px;">去获取 →</a>
      </label>
      <input class="input" id="aiApiKey" type="password" value="${cfg.apiKey || ''}" placeholder="sk-...">
    </div>

    <div style="margin-bottom:10px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px;">模型</label>
      <input class="input" id="aiModel" value="${cfg.model || ''}" list="aiModelList" placeholder="模型名称">
      <datalist id="aiModelList"></datalist>
    </div>

    <div style="display:flex;gap:8px;align-items:center;">
      <button class="btn btn-outline btn-sm" id="aiTestBtn">🔌 测试连接</button>
      <span id="aiTestResult" style="font-size:12px;"></span>
    </div>
  `, (mm) => {
    const cfg2 = {
      provider: mm.querySelector('#aiProvider').value,
      apiKey: mm.querySelector('#aiApiKey').value.trim(),
      model: mm.querySelector('#aiModel').value.trim(),
      customBase: mm.querySelector('#aiCustomBase').value.trim(),
    };
    if (!cfg2.apiKey) { toast('请填写 API Key'); return false; }
    if (!cfg2.model) { toast('请填写模型名称'); return false; }
    AIEngine.setConfig(cfg2);
    toast('AI 设置已保存');
    if (onSaved) onSaved();
    return true;
  });

  const provSel = m.querySelector('#aiProvider');
  const tipEl = m.querySelector('#aiProviderTip');
  const keyLink = m.querySelector('#aiKeyLink');
  const modelInput = m.querySelector('#aiModel');
  const modelList = m.querySelector('#aiModelList');
  const customWrap = m.querySelector('#aiCustomBaseWrap');

  function syncProvider(resetModel) {
    const p = AI_PROVIDERS[provSel.value];
    tipEl.textContent = p.tip;
    keyLink.href = p.keyUrl || '#';
    keyLink.style.display = p.keyUrl ? 'inline' : 'none';
    customWrap.style.display = provSel.value === 'custom' ? 'block' : 'none';
    modelList.innerHTML = p.models.map(x => `<option value="${x}">`).join('');
    if (resetModel && p.models.length) modelInput.value = p.models[0];
  }
  provSel.onchange = () => syncProvider(true);
  syncProvider(false);

  // 一键填入推荐配置（智谱免费模型）
  const quickFill = m.querySelector('#aiQuickFill');
  if (quickFill) {
    quickFill.onclick = () => {
      provSel.value = 'zhipu';
      syncProvider(false);
      modelInput.value = 'glm-4-flash';
      const keyInput = m.querySelector('#aiApiKey');
      keyInput.focus();
      toast(keyInput.value ? '已填入推荐配置' : '已填好服务商和模型，只差粘贴 API Key');
    };
  }

  m.querySelector('#aiTestBtn').onclick = async () => {
    const btn = m.querySelector('#aiTestBtn');
    const out = m.querySelector('#aiTestResult');
    AIEngine.setConfig({
      provider: provSel.value,
      apiKey: m.querySelector('#aiApiKey').value.trim(),
      model: modelInput.value.trim(),
      customBase: m.querySelector('#aiCustomBase').value.trim(),
    });
    btn.disabled = true;
    out.textContent = '连接中...';
    out.style.color = 'var(--text-secondary)';
    try {
      const r = await AIEngine.test();
      out.innerHTML = '✅ <b>连接成功！</b>点「确定」保存即可开始用';
      out.style.color = '#16a34a';
    } catch (e) {
      const raw = e.message || '';
      let hint = raw.slice(0, 100);
      if (/401|invalid.*key|鉴权|认证|apikey/i.test(raw)) {
        hint = 'API Key 不对 —— 检查是否复制完整（智谱的 Key 中间有个点，要一起复制）';
      } else if (/404|not found|model/i.test(raw)) {
        hint = '模型名不对 —— 免费的填 glm-4-flash（注意是横杠不是下划线）';
      } else if (/429|rate|quota|余额|欠费/i.test(raw)) {
        hint = '请求太频繁或额度用尽 —— 稍等几秒再试，或换 glm-4-flash 免费模型';
      } else if (/failed to fetch|networkerror|load failed/i.test(raw)) {
        hint = '网络连不上 —— 检查网络，或关掉代理/VPN 再试（智谱是国内服务，不需要翻墙）';
      }
      out.innerHTML = '❌ ' + hint;
      out.style.color = '#dc2626';
    }
    btn.disabled = false;
  };

  return m;
}

const AI_SITES = {
  yuanbao: 'https://yuanbao.tencent.com/chat',
  deepseek: 'https://chat.deepseek.com/',
  doubao: 'https://www.doubao.com/chat/',
  kimi: 'https://kimi.moonshot.cn/',
};

function aiJump(target, prompt) {
  const url = AI_SITES[target] || AI_SITES.deepseek;
  // 先复制再打开：新标签页会抢焦点导致 clipboard 写入失败，故同步写入
  let copied = false;
  try {
    const ta = document.createElement('textarea');
    ta.value = prompt;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;';
    document.body.appendChild(ta);
    ta.select();
    copied = document.execCommand('copy');
    document.body.removeChild(ta);
  } catch (e) { copied = false; }

  if (!copied && navigator.clipboard) {
    navigator.clipboard.writeText(prompt).catch(() => {});
  }
  toast(copied ? 'Prompt 已复制，正在打开 AI...' : '正在打开 AI，请手动粘贴 Prompt');

  const w = window.open(url, '_blank');
  if (!w) toast('浏览器拦截了弹窗，请允许弹窗后重试');
}

// Prompt 注册表：避免把长文本内联进 HTML 属性（换行/引号会截断属性导致按钮失效）
window.__aiPrompts = window.__aiPrompts || {};
let __aiPromptSeq = 0;

function registerPrompt(text) {
  const key = 'p' + (++__aiPromptSeq);
  window.__aiPrompts[key] = text;
  return key;
}

function getPrompt(key) {
  return window.__aiPrompts[key] || '';
}

function aiJumpKey(target, key) {
  aiJump(target, getPrompt(key));
}

function copyPromptKey(key) {
  const text = getPrompt(key);
  copyText(text);
}

// 通用复制（带降级方案，http/非安全上下文下 clipboard API 不可用）
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => toast('已复制到剪贴板'))
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;left:-9999px;top:0;';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    toast('已复制到剪贴板');
  } catch (e) {
    toast('复制失败，请手动选择文本复制');
  }
  document.body.removeChild(ta);
}

function aiPromptBox(title, desc, promptText) {
  const key = registerPrompt(promptText);
  return `
    <div class="ai-prompt-box">
      <div class="ai-prompt-title">🤖 ${title}</div>
      <div class="ai-prompt-desc">${desc}</div>
      <div class="ai-prompt-actions">
        <button class="btn btn-primary" onclick="aiJumpKey('yuanbao','${key}')">🟦 跳转腾讯元宝</button>
        <button class="btn btn-primary" onclick="aiJumpKey('deepseek','${key}')">🐋 跳转DeepSeek</button>
        <button class="btn btn-primary" onclick="aiJumpKey('doubao','${key}')">🌊 跳转豆包</button>
        <button class="btn btn-outline" onclick="copyPromptKey('${key}')">📋 复制Prompt</button>
        <button class="btn btn-outline" onclick="viewPromptKey('${key}')">👁 查看Prompt</button>
      </div>
    </div>
  `;
}

function viewPromptKey(key) {
  const text = getPrompt(key);
  const m = modal('Prompt 全文', `
    <textarea class="textarea" readonly style="min-height:320px;font-size:12px;line-height:1.6;">${escapeHtml(text)}</textarea>
    <p style="font-size:12px;color:var(--text-secondary);margin-top:8px;">可直接全选复制，粘贴到任意 AI 对话框。</p>
  `, null, true);
  const ta = m.querySelector('textarea');
  if (ta) { ta.focus(); ta.select(); }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

// ===== 模块定义 =====
const modules = {};

// ===== 今日看板（合并：时钟+倒计时+待改进+番茄钟+每日目标+看板）=====
// [v2/T02] 原 `let dashClockInterval` 已由 TimerBus('view:dashClock') 接管：
// switchModule 首行 clearScope('view:') 会自动回收，不再泄漏每秒定时器。

/**
 * [v2/T11] 「待改进」面板的回溯游标（天）。
 * 默认 1 = 从昨天开始向前找；点击「查看更早」时按 DASH_IMPROVE_STEP 递增，
 * 使 resolveImproveSource 能跳过已展示的那一天、继续向更早回溯。
 * 每次进入 dashboard 模块重置为 1。
 * @type {number}
 */
let _dashImproveMinBack = 1;

/** [v2/T11] 「待改进」单次回溯窗口上限（天），与 ARCH §1.4 的 7 天口径一致。 */
const DASH_IMPROVE_WINDOW = 7;

modules['dashboard'] = (c) => {
  const examDate = Store.get('examDate', '2026-12-21');
  const days = daysUntil(examDate);
  const todoData = Store.getByDate('todo', currentDate) || { items: [] };
  _dashImproveMinBack = 1;   // [v2/T11] 每次进入首页重置「查看更早」游标

  c.innerHTML = `
    <div class="dash-clock">
      <div class="dash-clock-date" id="dashDate"></div>
      <div class="dash-clock-time" id="dashTime">00:00:00</div>
      <div class="dash-clock-countdown">距离考研还有 ${days} 天 · ${examDate}</div>
    </div>
    <div class="dash-grid">
      <!-- 左上：待改进（[v2/T11] 7 天回溯，见 resolveImproveSource） -->
      <div class="dash-panel">
        <div class="dash-panel-title" id="dashImproveTitle">⚠️ 待改进</div>
        <div class="dash-panel-body" id="dashImprove"></div>
      </div>
      <!-- 右上：每日目标填写 -->
      <div class="dash-panel">
        <div class="dash-panel-title">✅ 每日目标</div>
        <div style="display:flex;gap:6px;margin-bottom:8px;">
          <input class="input" id="dashTodoInput" placeholder="添加今日目标..." onkeypress="if(event.key==='Enter')addDashTodo()" style="flex:1;font-size:13px;">
          <button class="btn btn-primary btn-sm" onclick="addDashTodo()">+</button>
        </div>
        <!-- [v2/T16] 规划师文本粘贴导入入口（决策 D3） -->
        <div class="dash-import-bar">
          <button class="btn btn-outline btn-sm" onclick="openImportDialog()">📥 导入规划结果</button>
          <button class="btn btn-outline btn-sm" onclick="copyPlannerPrompt()">📋 复制 Prompt</button>
        </div>
        <div class="dash-panel-body" id="dashTodoList"></div>
      </div>
      <!-- 左下：番茄钟 -->
      <div class="dash-panel">
        <div class="dash-panel-title">
          🍅 番茄钟
          <a class="dash-link" onclick="switchModule('pomodoro')" style="margin-left:auto;font-size:11px;color:var(--primary);cursor:pointer;">完整历史 →</a>
        </div>
        <div class="dash-panel-body dash-pomo">
          <div class="dash-pomo-mode" id="dashPomoMode">专注模式</div>
          <div class="dash-pomo-time" id="dashPomoTime">25:00</div>
          <input class="input" id="dashPomoTask" placeholder="当前任务..." style="max-width:180px;font-size:12px;text-align:center;margin-top:6px;" value="${pomoTask || ''}">
          <div class="dash-pomo-settings">
            <span>专注</span>
            <input type="number" id="dashPomoWork" value="${pomoWorkMin}" min="1" max="120" class="dash-pomo-input" onchange="dashPomoUpdateTime('work',this.value)"><span>分</span>
            <span style="margin-left:8px;">休息</span>
            <input type="number" id="dashPomoBreak" value="${pomoBreakMin}" min="1" max="60" class="dash-pomo-input" onchange="dashPomoUpdateTime('break',this.value)"><span>分</span>
          </div>
          <div class="dash-pomo-controls">
            <button onclick="dashPomoStart()">开始</button>
            <button onclick="dashPomoPause()">暂停</button>
            <button onclick="dashPomoReset()">重置</button>
            <button onclick="dashPomoToggle()">${pomoMode === 'work' ? '休息' : '专注'}</button>
          </div>
          <div class="dash-pomo-controls" style="margin-top:6px;flex-wrap:wrap;justify-content:center;">
            <button class="dash-pomo-mini" onclick="pomoAdjust(-1)">−1分</button>
            <button class="dash-pomo-mini" onclick="pomoAdjust(1)">+1分</button>
            <button class="dash-pomo-mini" id="dashDirDown" onclick="dashPomoSetDir('down')" style="${pomoDir==='down'?'font-weight:700;':''}">↓倒计时</button>
            <button class="dash-pomo-mini" id="dashDirUp" onclick="dashPomoSetDir('up')" style="${pomoDir==='up'?'font-weight:700;':''}">↑正计时</button>
          </div>
          <div id="dashPomoStat" class="dash-pomo-stat"></div>
          <div id="dashPomoHistory" class="dash-pomo-history"></div>
        </div>
      </div>
      <!-- 右下：每日目标看板（划掉效果） -->
      <div class="dash-panel">
        <div class="dash-panel-title">📋 目标看板 <span id="dashTodoStats" style="font-size:11px;font-weight:400;color:var(--text-secondary);margin-left:auto;"></span></div>
        <div class="dash-panel-body" id="dashKanban"></div>
      </div>
    </div>
  `;

  // 实时时钟（[v2/T02] 走 TimerBus 的 view: 作用域，切模块自动回收）
  updateDashClock();
  TimerBus.set('view:dashClock', updateDashClock, 1000);

  renderDashImprove();
  renderDashTodo(todoData.items);
  updateDashPomoDisplay();
  renderDashPomoHistory();
};

/**
 * [v2/T04] 解析「待改进」面板的数据源：向前回溯最多 maxBack 天，
 * 取第一个有内容的日期。勾选状态归属源日期，跨天不清空、不迁移。
 * @param {string} baseDate 'YYYY-MM-DD'
 * @param {number} [maxBack=7] 最大回溯天数
 * @returns {{date:string|null, daysAgo:number, items:Array, stale:boolean}}
 */
function resolveImproveSource(baseDate, maxBack = 7) {
  const all = Store.get('improve', {}) || {};
  for (let i = 1; i <= maxBack; i++) {
    const d = dateOffset(baseDate, -i);
    const rec = all[d];
    const items = ((rec && rec.items) || []).filter(x => x && x.text);
    if (items.length) {
      return { date: d, daysAgo: i, items: items, stale: i > 1 };
    }
  }
  return { date: null, daysAgo: 0, items: [], stale: false };
}

/**
 * [v2/T11] 渲染首页「待改进」面板（ARCH §1.4）。
 * - 以 _dashImproveMinBack 为起点向前回溯 DASH_IMPROVE_WINDOW 天，取第一个有内容的日期
 * - daysAgo === 1 → 标题「⚠️ 待改进 · 昨日」
 * - daysAgo  >  1 → 标题「⚠️ 待改进」+ .tag.orange「N 天前（YYYY-MM-DD）」（陈旧提示）
 * - 窗口内无内容 → 空态，引导去「复盘改进」记录
 * - 勾选状态写回源日期，跨天不清空、不迁移
 * 仅操作面板内节点，不做全局 querySelector（§6.8 红线）。
 * @returns {void}
 */
function renderDashImprove() {
  const bodyEl = document.getElementById('dashImprove');
  const titleEl = document.getElementById('dashImproveTitle');
  if (!bodyEl) return;

  const shift = Math.max(0, _dashImproveMinBack - 1);
  const base = shift > 0 ? dateOffset(currentDate, -shift) : currentDate;
  const src = resolveImproveSource(base, DASH_IMPROVE_WINDOW);
  const daysAgo = src.date ? shift + src.daysAgo : 0;
  const stale = daysAgo > 1;

  // ---- 标题 ----
  if (titleEl) {
    if (!src.date) {
      titleEl.innerHTML = '⚠️ 待改进';
    } else if (stale) {
      titleEl.innerHTML = `⚠️ 待改进 <span class="tag orange">${daysAgo} 天前 · ${src.date}</span>`;
    } else {
      titleEl.innerHTML = '⚠️ 待改进 · 昨日';
    }
  }

  // ---- 空态 ----
  if (!src.date) {
    const scope = shift > 0
      ? `更早 ${DASH_IMPROVE_WINDOW} 天内没有更多记录了`
      : `近 ${DASH_IMPROVE_WINDOW} 天没有待改进记录，继续保持！`;
    bodyEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📈</div>
        <div class="empty-state-text">${scope}</div>
        <div class="dash-improve-actions">
          ${shift > 0 ? '<button class="btn btn-outline btn-sm" onclick="dashImproveReset()">回到最近</button>' : ''}
          <button class="btn btn-outline btn-sm" onclick="switchModule('review-improve')">去记录 →</button>
        </div>
      </div>`;
    return;
  }

  // ---- 列表 ----
  const rows = src.items.map(item => `
    <div class="dash-improve-item ${item.done ? 'done' : ''}">
      <input type="checkbox" class="dash-todo-checkbox" ${item.done ? 'checked' : ''}
             onclick="toggleDashImprove('${src.date}','${item.id}')">
      <span class="dash-improve-text">${escapeHtml(item.text)}</span>
    </div>`).join('');

  const doneCount = src.items.filter(x => x.done).length;
  bodyEl.innerHTML = `
    ${rows}
    <div class="dash-improve-foot">
      <span class="dash-improve-count">${doneCount}/${src.items.length} 已处理</span>
      <button class="btn btn-outline btn-sm" onclick="dashImproveMore()">查看更早</button>
      ${shift > 0 ? '<button class="btn btn-outline btn-sm" onclick="dashImproveReset()">回到最近</button>' : ''}
    </div>`;
}

/**
 * [v2/T11] 勾选/取消勾选某条待改进项。状态归属源日期，不迁移到今天。
 * @param {string} srcDate 源日期 'YYYY-MM-DD'
 * @param {string} id 条目 id
 * @returns {void}
 */
function toggleDashImprove(srcDate, id) {
  const data = Store.getByDate('improve', srcDate) || { items: [] };
  const item = (data.items || []).find(x => x && x.id === id);
  if (!item) return;
  item.done = !item.done;
  Store.setByDate('improve', srcDate, data);
  renderDashImprove();
}

/**
 * [v2/T11] 「查看更早」：把回溯游标推到当前展示日期的前一天，再渲染一次。
 * @returns {void}
 */
function dashImproveMore() {
  const shift = Math.max(0, _dashImproveMinBack - 1);
  const base = shift > 0 ? dateOffset(currentDate, -shift) : currentDate;
  const src = resolveImproveSource(base, DASH_IMPROVE_WINDOW);
  // 无内容时不再推进游标，避免无意义空翻页
  if (!src.date) return;
  _dashImproveMinBack = shift + src.daysAgo + 1;
  renderDashImprove();
}

/**
 * [v2/T11] 回到最近一次有内容的待改进日期。
 * @returns {void}
 */
function dashImproveReset() {
  _dashImproveMinBack = 1;
  renderDashImprove();
}

function updateDashClock() {
  const now = new Date();
  const weekdays = ['周日','周一','周二','周三','周四','周五','周六'];
  const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${weekdays[now.getDay()]}`;
  const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  const dEl = document.getElementById('dashDate');
  const tEl = document.getElementById('dashTime');
  if (dEl) dEl.textContent = dateStr;
  if (tEl) tEl.textContent = timeStr;
  // 看板番茄钟跟随全局计时器实时显示（与模块页/悬浮窗一致）
  updateDashPomoDisplay();
}

function addDashTodo() {
  const input = document.getElementById('dashTodoInput');
  const text = input.value.trim();
  if (!text) return;
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  data.items.push({ id: uid(), text, done: false, source: 'manual' });
  Store.setByDate('todo', currentDate, data);
  input.value = '';
  renderDashTodo(data.items);
}

function renderDashTodo(items) {
  const listEl = document.getElementById('dashTodoList');
  const kanbanEl = document.getElementById('dashKanban');
  const statsEl = document.getElementById('dashTodoStats');
  if (!items.length) {
    if (listEl) listEl.innerHTML = '<div style="color:var(--text-light);font-size:12px;padding:8px 0;">暂无目标</div>';
    if (kanbanEl) kanbanEl.innerHTML = '<div class="empty-state"><div class="empty-state-text">还没有目标，添加一个开始今天的学习</div></div>';
    if (statsEl) statsEl.textContent = '';
    return;
  }
  // 右上：输入区下方显示未完成
  const undone = items.filter(x => !x.done);
  if (listEl) {
    listEl.innerHTML = undone.map(item => `
      <div class="dash-todo-item">
        <input type="checkbox" class="dash-todo-checkbox" onclick="toggleDashTodo('${item.id}')">
        <span class="dash-todo-text">${escapeHtml(item.text)}</span>
        ${item.source === 'planner' ? '<span class="dash-todo-source">规划师</span>' : ''}
        <button class="todo-delete" onclick="delDashTodo('${item.id}')">✕</button>
      </div>
    `).join('') || '<div style="color:var(--text-light);font-size:12px;padding:8px 0;">全部完成！🎉</div>';
  }
  // 右下：看板（全部，已完成的有划线）
  if (kanbanEl) {
    kanbanEl.innerHTML = items.map(item => `
      <div class="dash-todo-item ${item.done ? 'done' : ''}">
        <input type="checkbox" class="dash-todo-checkbox" ${item.done ? 'checked' : ''} onclick="toggleDashTodo('${item.id}')">
        <span class="dash-todo-text">${escapeHtml(item.text)}</span>
        ${item.source === 'planner' ? '<span class="dash-todo-source">规划师</span>' : ''}
      </div>
    `).join('');
  }
  const done = items.filter(x => x.done).length;
  if (statsEl) statsEl.textContent = `${done}/${items.length}`;
}

function toggleDashTodo(id) {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  const item = data.items.find(x => x.id === id);
  if (item) {
    item.done = !item.done;
    Store.setByDate('todo', currentDate, data);
    renderDashTodo(data.items);
  }
}

function delDashTodo(id) {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  data.items = data.items.filter(x => x.id !== id);
  Store.setByDate('todo', currentDate, data);
  renderDashTodo(data.items);
}

function syncPlannerToTodo(taskTexts) {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  taskTexts.forEach(text => {
    data.items.push({ id: uid(), text, done: false, source: 'ai' });
  });
  Store.setByDate('todo', currentDate, data);
  toast(`已同步 ${taskTexts.length} 项到今日目标`);
  if (currentModule === 'dashboard') renderDashTodo(data.items);
}

// 看板内番茄钟控制
function dashPomoStart() {
  pomoTask = document.getElementById('dashPomoTask')?.value || '';
  pomoStart();
}
function dashPomoPause() { pomoPause(); }
function dashPomoReset() { pomoReset(); }
function dashPomoToggle() { pomoSetMode(pomoMode === 'work' ? 'break' : 'work'); updateDashPomoDisplay(); }
function dashPomoSetDir(dir) {
  pomoSetDir(dir);
  updateDashPomoDisplay();
  const dEl = document.getElementById('dashDirDown');
  const uEl = document.getElementById('dashDirUp');
  if (dEl) dEl.style.fontWeight = dir === 'down' ? '700' : '400';
  if (uEl) uEl.style.fontWeight = dir === 'up' ? '700' : '400';
}

// 看板番茄钟：手动调节时间
function dashPomoUpdateTime(mode, val) {
  val = parseInt(val) || 1;
  if (val < 1) val = 1;
  if (mode === 'work') {
    pomoWorkMin = val;
    const inp = document.getElementById('dashPomoWork');
    if (inp) inp.value = val;
    if (pomoMode === 'work' && !pomoTimer) {
      pomoSeconds = val * 60;
      updateDashPomoDisplay();
    }
  } else {
    pomoBreakMin = val;
    const inp = document.getElementById('dashPomoBreak');
    if (inp) inp.value = val;
    if (pomoMode === 'break' && !pomoTimer) {
      pomoSeconds = val * 60;
      updateDashPomoDisplay();
    }
  }
}

// 看板番茄钟：渲染今日统计 + 最近记录
function renderDashPomoHistory() {
  const statEl = document.getElementById('dashPomoStat');
  const histEl = document.getElementById('dashPomoHistory');
  if (!histEl) return;
  const rec = Store.getByDate('pomodoro', currentDate) || { count: 0, total: 0, sessions: [] };
  if (statEl) statEl.textContent = `今日 🍅 ${rec.count} 个 · 专注 ${rec.total} 分钟`;
  const sessions = rec.sessions || [];
  if (!sessions.length) {
    histEl.innerHTML = '<div style="font-size:11px;color:var(--text-light);text-align:center;padding:6px;">完成后这里显示专注记录</div>';
    return;
  }
  histEl.innerHTML = sessions.slice(0, 5).map(s => `
    <div class="dash-pomo-history-item">
      <span>🍅</span>
      <span class="t">${s.task}</span>
      <span class="m">${s.minutes}分 ${s.time}</span>
    </div>
  `).join('');
}

function updateDashPomoDisplay() {
  const m = Math.floor(pomoSeconds / 60);
  const s = pomoSeconds % 60;
  const timeStr = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const tEl = document.getElementById('dashPomoTime');
  const mEl = document.getElementById('dashPomoMode');
  if (tEl) tEl.textContent = timeStr;
  if (mEl) mEl.textContent = (pomoMode === 'work' ? '专注' : '休息') + (pomoDir === 'up' ? '·正计时' : '·倒计时');
}

// ===== 回顾与改进（合并今日回顾 + 待改进）=====
modules['review-improve'] = (c) => {
  const reviewData = Store.getByDate('review', currentDate) || { items: [] };
  const improveData = Store.getByDate('improve', currentDate) || { items: [] };

  c.innerHTML = `
    <div class="date-bar">
      <label>日期：</label>
      <input type="date" id="riDate" value="${currentDate}">
    </div>
    <div class="card">
      <div class="card-title">📝 今日回顾</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">记录今天做了什么，学了什么。</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="reviewInput" placeholder="如：做2018年数学真题选择题..." onkeypress="if(event.key==='Enter')addReview()">
        <button class="btn btn-primary" onclick="addReview()">添加</button>
      </div>
      <div id="reviewList"></div>
    </div>
    <div class="card">
      <div class="card-title">⚠️ 待改进</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">今天哪里没做好？明天怎么改进？（次日显示在看板中）</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="improveInput" placeholder="如：数学做题速度太慢..." onkeypress="if(event.key==='Enter')addImprove()">
        <button class="btn btn-primary" onclick="addImprove()">添加</button>
      </div>
      <div id="improveList"></div>
    </div>
  `;

  document.getElementById('riDate').onchange = (e) => {
    currentDate = e.target.value;
    switchModule('review-improve');
  };

  renderReviewList(reviewData.items);
  renderImproveList(improveData.items);
};

// ----- 我的收藏 -----
modules['quotes'] = (c) => {
  const saved = Store.get('savedQuotes', []);

  c.innerHTML = `
    <div class="card">
      <div class="card-title">💬 我的收藏</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        在顶部励志语条点击 ☆ 可收藏喜欢的句子，收藏后会显示在这里。
      </p>
      <div style="display:flex;gap:8px;margin-bottom:14px;">
        <input class="input" id="quoteInput" placeholder="输入一句话..." style="flex:1;" onkeypress="if(event.key==='Enter')document.getElementById('quoteSourceInput').focus()">
        <input class="input" id="quoteSourceInput" placeholder="来源（选填）" style="width:160px;" onkeypress="if(event.key==='Enter')addCustomQuote()">
        <button class="btn btn-primary" onclick="addCustomQuote()">添加</button>
      </div>
    </div>
    <div id="quoteList"></div>
  `;

  renderQuoteList(saved);
};

// ----- 今日回顾 -----
modules['review'] = (c) => {
  const data = Store.getByDate('review', currentDate) || { items: [] };

  c.innerHTML = `
    <div class="date-bar">
      <label>日期：</label>
      <input type="date" id="reviewDate" value="${currentDate}">
    </div>
    <div class="card">
      <div class="card-title">📝 今日做了什么</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="reviewInput" placeholder="记录今天完成的一件事..." onkeypress="if(event.key==='Enter')addReview()">
        <button class="btn btn-primary" onclick="addReview()">添加</button>
      </div>
      <div id="reviewList"></div>
    </div>
  `;

  document.getElementById('reviewDate').onchange = (e) => {
    currentDate = e.target.value;
    switchModule('review');
  };

  renderReviewList(data.items);
};

function addReview() {
  const input = document.getElementById('reviewInput');
  const text = input.value.trim();
  if (!text) return;
  const data = Store.getByDate('review', currentDate) || { items: [] };
  data.items.push({ id: uid(), text, time: now() });
  Store.setByDate('review', currentDate, data);
  input.value = '';
  renderReviewList(data.items);
}

function renderReviewList(items) {
  const list = document.getElementById('reviewList');
  if (!items.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📝</div><div class="empty-state-text">今天还没有记录，做完事来打个勾~</div></div>';
    return;
  }
  list.innerHTML = items.map(item => `
    <div class="todo-item">
      <span style="font-size:14px;flex:1;">${item.text}</span>
      <span style="font-size:11px;color:var(--text-light);">${fmtDate(item.time)}</span>
      <button class="todo-delete" onclick="delReview('${item.id}')">✕</button>
    </div>
  `).join('');
}

function delReview(id) {
  const data = Store.getByDate('review', currentDate) || { items: [] };
  data.items = data.items.filter(x => x.id !== id);
  Store.setByDate('review', currentDate, data);
  renderReviewList(data.items);
}

// ----- 待改进 -----
modules['improve'] = (c) => {
  const data = Store.getByDate('improve', currentDate) || { items: [] };

  c.innerHTML = `
    <div class="date-bar">
      <label>日期：</label>
      <input type="date" id="improveDate" value="${currentDate}">
    </div>
    <div class="card">
      <div class="card-title">📈 待改进的地方</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="improveInput" placeholder="记录需要改进的点..." onkeypress="if(event.key==='Enter')addImprove()">
        <button class="btn btn-primary" onclick="addImprove()">添加</button>
      </div>
      <div id="improveList"></div>
    </div>
  `;

  document.getElementById('improveDate').onchange = (e) => {
    currentDate = e.target.value;
    switchModule('improve');
  };

  renderImproveList(data.items);
};

function addImprove() {
  const input = document.getElementById('improveInput');
  const text = input.value.trim();
  if (!text) return;
  const data = Store.getByDate('improve', currentDate) || { items: [] };
  data.items.push({ id: uid(), text, time: now() });
  Store.setByDate('improve', currentDate, data);
  input.value = '';
  renderImproveList(data.items);
}

function renderImproveList(items) {
  const list = document.getElementById('improveList');
  if (!items.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📈</div><div class="empty-state-text">没有待改进项，继续保持！</div></div>';
    return;
  }
  list.innerHTML = items.map(item => `
    <div class="todo-item" style="border-left:3px solid var(--warning);">
      <span style="font-size:14px;flex:1;">⚠️ ${item.text}</span>
      <span style="font-size:11px;color:var(--text-light);">${fmtDate(item.time)}</span>
      <button class="todo-delete" onclick="delImprove('${item.id}')">✕</button>
    </div>
  `).join('');
}

function delImprove(id) {
  const data = Store.getByDate('improve', currentDate) || { items: [] };
  data.items = data.items.filter(x => x.id !== id);
  Store.setByDate('improve', currentDate, data);
  renderImproveList(data.items);
}

// ----- AI 目标拆解 -----
modules['goal-split'] = (c) => {
  const history = Store.get('goalSplits', []);

  c.innerHTML = `
    <div class="card">
      <div class="card-title">🧩 AI 目标拆解</div>
      <p style="color:var(--text-secondary);margin-bottom:16px;font-size:13px;line-height:1.6;">
        告诉AI你的考研目标和剩余时间，它会帮你把大目标拆解成月度/周度任务量。
      </p>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">考试日期</label>
        <input type="date" class="input" id="goalExamDate" value="${Store.get('examDate','2026-12-21')}" style="max-width:200px;">
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">目标院校及专业</label>
        <input class="input" id="goalTarget" placeholder="例如：XX大学 遥感专业" value="${Store.get('goalTarget','')}" style="max-width:400px;">
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">拆解周期</label>
        <select class="select" id="goalPeriod" style="max-width:200px;">
          <option value="month">按月拆解</option>
          <option value="halfyear">按半年拆解</option>
        </select>
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">当前进度与需求</label>
        <textarea class="textarea" id="goalDesc" placeholder="描述你当前各科复习进度、薄弱环节、每天可用学习时间等..."></textarea>
      </div>
      <div id="aiGoalBox"></div>
    </div>
    <div class="card">
      <div class="card-title">📋 历史拆解方案</div>
      <div id="goalHistory"></div>
    </div>
  `;

  renderGoalPrompt();
  renderGoalHistory(history);

  ['goalExamDate','goalTarget','goalPeriod','goalDesc'].forEach(id => {
    document.getElementById(id).oninput = renderGoalPrompt;
  });
};

function renderGoalPrompt() {
  const examDate = document.getElementById('goalExamDate').value;
  const target = document.getElementById('goalTarget').value || '目标院校';
  const period = document.getElementById('goalPeriod');
  const periodText = period ? period.options[period.selectedIndex].text : '按月拆解';
  const desc = document.getElementById('goalDesc').value || '（未填写当前进度）';
  const days = daysUntil(examDate);

  const prompt = `我是${target}的考研学生，考研日期是${examDate}（距今${days}天）。
当前情况：${desc}
请帮我做${periodText}的学习计划拆解，要求：
1. 把数学（高数+线代）、英语、政治、专业课（遥感RS/GPS/GIS）四科的任务量合理分配到每个${periodText === '按月拆解' ? '月' : '阶段'}
2. 标注每科在每个阶段的重点任务
3. 给出每周建议学习时长分配
4. 标注关键节点（如真题刷几遍、模拟考时间等）
请用表格形式输出。`;

  document.getElementById('aiGoalBox').innerHTML = aiPromptBox(
    '一键拆解',
    `点击下方按钮，AI将根据你的信息生成${periodText}计划。Prompt会自动复制到剪贴板。`,
    prompt
  );
}

function renderGoalHistory(history) {
  const box = document.getElementById('goalHistory');
  if (!history.length) {
    box.innerHTML = '<div class="empty-state"><div class="empty-state-text">暂无历史方案。拆解后可点击"保存方案"记录。</div></div>';
    return;
  }
  box.innerHTML = history.map(h => `
    <div class="knowledge-item">
      <div class="knowledge-title">${h.target} · ${h.period}</div>
      <div class="knowledge-content">${h.desc.slice(0,100)}...</div>
      <div style="margin-top:6px;font-size:11px;color:var(--text-light);">${fmtDate(h.time)}</div>
    </div>
  `).join('');
}

// ----- 每日目标 -----
modules['daily-todo'] = (c) => {
  const data = Store.getByDate('todo', currentDate) || { items: [] };

  c.innerHTML = `
    <div class="date-bar">
      <label>日期：</label>
      <input type="date" id="todoDate" value="${currentDate}">
      <button class="btn btn-outline btn-sm" onclick="copyYesterdayTodo()">复制昨天</button>
      <button class="btn btn-outline btn-sm" onclick="clearTodo()">🗑 清空</button>
    </div>
    <div class="card">
      <div class="card-title">✅ 每日目标</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="todoInput" placeholder="添加今日待办..." onkeypress="if(event.key==='Enter')addTodo()">
        <button class="btn btn-primary" onclick="addTodo()">添加</button>
      </div>
      <div id="todoList"></div>
      <div id="todoStats" style="margin-top:12px;"></div>
    </div>
  `;

  document.getElementById('todoDate').onchange = (e) => {
    currentDate = e.target.value;
    switchModule('daily-todo');
  };

  renderTodoList(data.items);
};

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  data.items.push({ id: uid(), text, done: false });
  Store.setByDate('todo', currentDate, data);
  input.value = '';
  renderTodoList(data.items);
}

function renderTodoList(items) {
  const list = document.getElementById('todoList');
  const stats = document.getElementById('todoStats');
  if (!items.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✅</div><div class="empty-state-text">还没有待办，添加一个开始今天的学习吧~</div></div>';
    stats.innerHTML = '';
    return;
  }
  const done = items.filter(x => x.done).length;
  list.innerHTML = items.map(item => `
    <div class="todo-item ${item.done ? 'done' : ''}">
      <div class="todo-checkbox ${item.done ? 'checked' : ''}" onclick="toggleTodo('${item.id}')"></div>
      <span class="todo-text">${item.text}</span>
      <button class="todo-delete" onclick="delTodo('${item.id}')">✕</button>
    </div>
  `).join('');
  stats.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;">
      <span style="font-size:13px;color:var(--text-secondary);">完成 ${done}/${items.length}</span>
      <div class="progress-bar" style="flex:1;">
        <div class="progress-fill" style="width:${items.length ? done/items.length*100 : 0}%"></div>
      </div>
      <span style="font-size:13px;font-weight:600;color:var(--primary);">${items.length ? Math.round(done/items.length*100) : 0}%</span>
    </div>
  `;
}

function toggleTodo(id) {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  const item = data.items.find(x => x.id === id);
  if (item) {
    item.done = !item.done;
    Store.setByDate('todo', currentDate, data);
    renderTodoList(data.items);
  }
}

function delTodo(id) {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  data.items = data.items.filter(x => x.id !== id);
  Store.setByDate('todo', currentDate, data);
  renderTodoList(data.items);
}

function clearTodo() {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  if (!data.items.length) { toast('今日目标本来就是空的'); return; }
  if (!confirm('确定清空今日目标？该操作不可恢复。')) return;
  Store.setByDate('todo', currentDate, { items: [] });
  renderTodoList([]);
  toast('已清空今日目标');
}

function copyYesterdayTodo() {
  const y = new Date(currentDate);
  y.setDate(y.getDate() - 1);
  const yStr = y.toISOString().slice(0,10);
  const yData = Store.getByDate('todo', yStr);
  if (!yData || !yData.items || !yData.items.length) {
    toast('昨天没有待办记录');
    return;
  }
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  yData.items.filter(x => !x.done).forEach(x => {
    data.items.push({ id: uid(), text: x.text, done: false });
  });
  Store.setByDate('todo', currentDate, data);
  toast('已复制昨天未完成的待办');
  renderTodoList(data.items);
}

// ----- 目标看板 -----
modules['kanban'] = (c) => {
  const boards = Store.get('kanban', [
    { id: 'todo', title: '📌 待开始', items: [] },
    { id: 'doing', title: '🔄 进行中', items: [] },
    { id: 'done', title: '✅ 已完成', items: [] }
  ]);

  c.innerHTML = `
    <div class="card" style="padding:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div class="card-title">📋 目标看板</div>
        <button class="btn btn-primary btn-sm" onclick="addKanbanCard()">+ 新增任务</button>
      </div>
      <div class="kanban-board" id="kanbanBoard"></div>
    </div>
  `;

  renderKanban(boards);
};

function renderKanban(boards) {
  const el = document.getElementById('kanbanBoard');
  el.innerHTML = boards.map(col => `
    <div class="kanban-col" data-col="${col.id}">
      <div class="kanban-col-title">${col.title} <span style="color:var(--text-light);">(${col.items.length})</span></div>
      ${col.items.map(item => `
        <div class="kanban-card" draggable="true" data-id="${item.id}" data-col="${col.id}">
          <div class="kanban-card-title">${item.title}</div>
          ${item.desc ? `<div class="kanban-card-desc">${item.desc}</div>` : ''}
          <div style="margin-top:8px;">
            <button class="btn btn-outline btn-sm" onclick="editKanbanCard('${item.id}','${col.id}')">编辑</button>
            <button class="btn btn-outline btn-sm" style="color:var(--danger);" onclick="delKanbanCard('${item.id}','${col.id}')">删除</button>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // 拖拽
  let dragId = null, dragCol = null;
  el.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      dragId = card.dataset.id;
      dragCol = card.dataset.col;
      card.classList.add('dragging');
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
  });
  el.querySelectorAll('.kanban-col').forEach(col => {
    col.addEventListener('dragover', (e) => e.preventDefault());
    col.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!dragId) return;
      const boards = Store.get('kanban');
      const fromCol = boards.find(b => b.id === dragCol);
      const toCol = boards.find(b => b.id === col.dataset.col);
      if (fromCol && toCol && fromCol !== toCol) {
        const item = fromCol.items.find(x => x.id === dragId);
        if (item) {
          fromCol.items = fromCol.items.filter(x => x.id !== dragId);
          toCol.items.push(item);
          Store.set('kanban', boards);
          renderKanban(boards);
        }
      }
    });
  });
}

function addKanbanCard() {
  const m = modal('新增任务', `
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">任务标题</label>
    <input class="input" id="kTitle" placeholder="输入任务名称..." style="margin-bottom:12px;">
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">描述（选填）</label>
    <textarea class="textarea" id="kDesc" placeholder="任务描述..."></textarea>
    <label style="font-size:13px;font-weight:600;display:block;margin:12px 0 6px;">放到哪一列</label>
    <select class="select" id="kCol">
      <option value="todo">📌 待开始</option>
      <option value="doing">🔄 进行中</option>
      <option value="done">✅ 已完成</option>
    </select>
  `, (modal) => {
    const title = modal.querySelector('#kTitle').value.trim();
    if (!title) { toast('请输入标题'); return false; }
    const desc = modal.querySelector('#kDesc').value.trim();
    const col = modal.querySelector('#kCol').value;
    const boards = Store.get('kanban');
    boards.find(b => b.id === col).items.push({ id: uid(), title, desc });
    Store.set('kanban', boards);
    renderKanban(boards);
  });
}

function delKanbanCard(id, colId) {
  if (!confirm('确认删除？')) return;
  const boards = Store.get('kanban');
  const col = boards.find(b => b.id === colId);
  col.items = col.items.filter(x => x.id !== id);
  Store.set('kanban', boards);
  renderKanban(boards);
}

function editKanbanCard(id, colId) {
  const boards = Store.get('kanban');
  const col = boards.find(b => b.id === colId);
  const item = col.items.find(x => x.id === id);
  if (!item) return;
  const m = modal('编辑任务', `
    <input class="input" id="kTitle" value="${item.title}" style="margin-bottom:12px;">
    <textarea class="textarea" id="kDesc">${item.desc || ''}</textarea>
  `, (modal) => {
    item.title = modal.querySelector('#kTitle').value.trim() || item.title;
    item.desc = modal.querySelector('#kDesc').value.trim();
    Store.set('kanban', boards);
    renderKanban(boards);
  });
}

// ----- 考试倒计时 -----
modules['countdown'] = (c) => {
  const examDate = Store.get('examDate', '2026-12-21');
  const days = daysUntil(examDate);

  c.innerHTML = `
    <div class="stat-grid">
      <div class="stat-card" style="background:var(--primary-light);border-color:var(--primary);">
        <div class="stat-value" style="font-size:48px;">${days}</div>
        <div class="stat-label">距考研还有（天）</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">⏰ 设置考试日期</div>
      <div style="display:flex;gap:12px;align-items:center;">
        <input type="date" class="input" id="examDateInput" value="${examDate}" style="max-width:200px;">
        <button class="btn btn-primary" onclick="saveExamDate()">保存</button>
      </div>
      <p style="margin-top:12px;font-size:13px;color:var(--text-secondary);">
        当前考试日期：${examDate}（距今 ${days} 天）
      </p>
    </div>
    <div class="card">
      <div class="card-title">📅 里程碑节点</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">添加重要日期节点，把握节奏。</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="msName" placeholder="里程碑名称（如：第一轮复习结束）" style="flex:1;">
        <input type="date" class="input" id="msDate" style="width:160px;">
        <button class="btn btn-primary" onclick="addMilestone()">添加</button>
      </div>
      <div id="msList"></div>
    </div>
  `;

  renderMilestones();
};

function saveExamDate() {
  const d = document.getElementById('examDateInput').value;
  if (!d) return;
  Store.set('examDate', d);
  toast('已保存考试日期');
  updateCountdown();
  switchModule('countdown');
}

function addMilestone() {
  const name = document.getElementById('msName').value.trim();
  const date = document.getElementById('msDate').value;
  if (!name || !date) { toast('请填写完整'); return; }
  Store.push('milestones', { id: uid(), name, date });
  document.getElementById('msName').value = '';
  document.getElementById('msDate').value = '';
  renderMilestones();
}

function renderMilestones() {
  const ms = Store.get('milestones', []).sort((a,b) => a.date.localeCompare(b.date));
  const el = document.getElementById('msList');
  if (!ms.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">暂无里程碑</div></div>';
    return;
  }
  el.innerHTML = ms.map(m => {
    const d = daysUntil(m.date);
    const tag = d < 0 ? 'tag-gray' : d <= 30 ? 'tag-red' : d <= 90 ? 'tag-orange' : 'tag-green';
    const status = d < 0 ? '已过' : `${d}天后`;
    return `
      <div class="todo-item">
        <span style="flex:1;font-size:14px;">${m.name}</span>
        <span style="font-size:12px;color:var(--text-secondary);">${m.date}</span>
        <span class="tag ${tag}">${status}</span>
        <button class="todo-delete" onclick="delMilestone('${m.id}')">✕</button>
      </div>
    `;
  }).join('');
}

function delMilestone(id) {
  Store.removeIn('milestones', id);
  renderMilestones();
}

function updateCountdown() {
  const examDate = Store.get('examDate', '2026-12-21');
  const days = daysUntil(examDate);
  const el = document.getElementById('countdownDays');
  if (el) el.textContent = days;
}

// ----- 通用网课入口（支持分组）-----
const COURSE_CLOUD_TIP = `
  <div class="cloud-tip">
    <b>📋 网盘链接说明</b><br>
    <b>夸克网盘：</b>请粘贴分享链接+提取码（如 https://pan.quark.cn/s/xxxx 提取码: abc），点击后跳转到网盘页面，需手动输入提取码。<br>
    <b>百度网盘：</b>请粘贴分享链接+提取码（如 https://pan.baidu.com/s/xxxx 提取码: abc），同上。<br>
    <b>直链跳转：</b>网盘不支持文件级直链，建议将常用文件的分享链接单独保存，此处记录该链接便于快速到达。
  </div>
`;

function renderCourseModule(c, category, opts = {}) {
  const data = getCourseData(category);
  const mubuUrl = opts.mubuUrl || 'https://mubu.com';
  const extraLinks = opts.extraLinks || [];

  c.innerHTML = `
    <div class="card">
      <div class="card-title">🎬 网课入口${opts.titleSuffix || ''}</div>
      ${COURSE_CLOUD_TIP}
      <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;">
        <a class="btn btn-outline btn-sm" href="${mubuUrl}" target="_blank">🧠 幕布思维导图</a>
        ${extraLinks.map(l => `<a class="btn btn-outline btn-sm" href="${l.url}" target="_blank">${l.icon || '🔗'} ${l.name}</a>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="grpName_${category}" placeholder="新分组名称（如：基础阶段）" style="flex:1;">
        <button class="btn btn-outline" onclick="addCourseGroup('${category}')">+ 新建分组</button>
      </div>
      <div id="courseGroupList_${category}"></div>
    </div>
  `;
  renderCourseGroups(category);
}

function getCourseData(category) {
  let data = Store.get('coursesV2_' + category, null);
  if (!data) {
    // 迁移旧数据
    const old = Store.get('courses_' + category, []);
    data = { groups: [{ id: uid(), name: '默认分组', links: old.map(c => ({ id: c.id || uid(), name: c.name, type: c.type || '其他', url: c.url })) }] };
    Store.set('coursesV2_' + category, data);
  }
  return data;
}

function addCourseGroup(category) {
  const name = document.getElementById('grpName_' + category).value.trim();
  if (!name) { toast('请输入分组名称'); return; }
  const data = getCourseData(category);
  data.groups.push({ id: uid(), name, links: [] });
  Store.set('coursesV2_' + category, data);
  document.getElementById('grpName_' + category).value = '';
  renderCourseGroups(category);
  toast('已新建分组');
}

function delCourseGroup(category, grpId) {
  if (!confirm('删除分组将连同其中的链接一起删除，确认？')) return;
  const data = getCourseData(category);
  data.groups = data.groups.filter(g => g.id !== grpId);
  Store.set('coursesV2_' + category, data);
  renderCourseGroups(category);
}

function renameCourseGroup(category, grpId) {
  const data = getCourseData(category);
  const grp = data.groups.find(g => g.id === grpId);
  if (!grp) return;
  const name = prompt('输入新的分组名称：', grp.name);
  if (name && name.trim()) {
    grp.name = name.trim();
    Store.set('coursesV2_' + category, data);
    renderCourseGroups(category);
  }
}

function addCourseLink(category, grpId) {
  const nameInput = document.getElementById(`linkName_${category}_${grpId}`);
  const urlInput = document.getElementById(`linkUrl_${category}_${grpId}`);
  const typeSelect = document.getElementById(`linkType_${category}_${grpId}`);
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  const type = typeSelect.value;
  if (!name || !url) { toast('请填写完整'); return; }
  const data = getCourseData(category);
  const grp = data.groups.find(g => g.id === grpId);
  if (!grp) return;
  grp.links.push({ id: uid(), name, type, url });
  Store.set('coursesV2_' + category, data);
  nameInput.value = '';
  urlInput.value = '';
  renderCourseGroups(category);
  toast('已添加');
}

function delCourseLink(category, grpId, linkId) {
  const data = getCourseData(category);
  const grp = data.groups.find(g => g.id === grpId);
  if (!grp) return;
  grp.links = grp.links.filter(l => l.id !== linkId);
  Store.set('coursesV2_' + category, data);
  renderCourseGroups(category);
}

function renderCourseGroups(category) {
  const data = getCourseData(category);
  const el = document.getElementById('courseGroupList_' + category);
  if (!el) return;
  const icons = { '夸克网盘': '☁️', '百度网盘': '💾', 'B站': '📺', '其他': '🔗' };
  if (!data.groups.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">还没有分组，新建一个开始吧~</div></div>';
    return;
  }
  el.innerHTML = data.groups.map(g => `
    <div class="course-group">
      <div class="course-group-header">
        <span>📁 ${g.name}</span>
        <span style="font-size:11px;color:var(--text-light);">(${g.links.length})</span>
        <button class="btn btn-outline btn-sm" onclick="renameCourseGroup('${category}','${g.id}')" style="margin-left:auto;font-size:11px;">✏️ 重命名</button>
        <button class="todo-delete" onclick="delCourseGroup('${category}','${g.id}')">✕</button>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;">
        <input class="input" id="linkName_${category}_${g.id}" placeholder="课程名称" style="flex:1;min-width:120px;font-size:13px;">
        <select class="select" id="linkType_${category}_${g.id}" style="width:100px;font-size:13px;">
          <option value="夸克网盘">夸克网盘</option>
          <option value="百度网盘">百度网盘</option>
          <option value="B站">B站</option>
          <option value="其他">其他</option>
        </select>
        <input class="input" id="linkUrl_${category}_${g.id}" placeholder="粘贴链接URL" style="flex:1;min-width:120px;font-size:13px;">
        <button class="btn btn-primary btn-sm" onclick="addCourseLink('${category}','${g.id}')">+ 添加</button>
      </div>
      ${g.links.length ? g.links.map(l => `
        <div class="course-group-item">
          <span style="font-size:16px;">${icons[l.type] || '🔗'}</span>
          <span style="flex:1;font-size:13px;font-weight:600;">${l.name}</span>
          <span class="tag tag-blue" style="font-size:10px;">${l.type}</span>
          <a class="btn btn-primary btn-sm" href="${l.url}" target="_blank" style="font-size:11px;padding:2px 8px;">▶️</a>
          <button class="todo-delete" onclick="delCourseLink('${category}','${g.id}','${l.id}')">✕</button>
        </div>
      `).join('') : '<div style="font-size:12px;color:var(--text-light);padding:4px 0;">暂无链接</div>'}
    </div>
  `).join('');
}

// ===== 数学网课（使用通用分组模块）=====
modules['math-course'] = (c) => {
  renderCourseModule(c, 'math', {
    titleSuffix: '（数学二）',
    extraLinks: [{ name: '数学公式卡组', url: 'https://www.markji.com/deck/editor/69d50111c8664d4b8ab2aa38', icon: '🎴' }]
  });
};

// ----- 数学真题 -----
modules['math-exam'] = (c) => {
  c.innerHTML = `
    <div class="card">
      <div class="card-title">📑 历年真题 PDF（1987-2024）</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        点击年份打开真题 PDF，再点「解析」查看详解。建议从近10年开始刷。
      </p>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;" id="yearFilter">
        <button class="btn btn-outline btn-sm" onclick="filterYears('recent')" style="font-size:12px;">近10年</button>
        <button class="btn btn-outline btn-sm" onclick="filterYears('all')" style="font-size:12px;">全部</button>
      </div>
      <div id="pdfExamList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;"></div>
    </div>
    <div class="card">
      <div class="card-title">📚 已录入真题题库（图片识别 + LaTeX）</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        通过 PDF 图片识别录入的真题，支持按年份/题型/知识点筛选。公式由 MathJax 渲染。
      </p>
      <div id="mathBankFilter"></div>
      <div id="mathBankList" style="margin-top:12px;"></div>
    </div>
    <div class="card">
      <div class="card-title">🗂️ 手动录入题库</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        手动录入题目，按知识点和题型分类。支持查看答案和详解。
      </p>
      <div id="mathQBFilter"></div>
      <div style="margin-top:12px;">
        <button class="btn btn-primary" onclick="openMathQBEditor()">+ 添加题目</button>
      </div>
      <div id="mathQBList" style="margin-top:12px;"></div>
    </div>
  `;

  loadPdfExams('recent');
  loadMathBank();
  renderMathQB();
};

// ===== 数学题库（按年份/题型/章节/知识点筛选）=====
let _mathBank = [];
let _mathBankFilter = { book: '真题', year: 'all', type: 'all', point: 'all', chapter: 'all' };
let _mathBankFiltered = [];
let _mathBankPage = 1;
const _mathBankPerPage = 20;
let _mathBankFilterReady = false;

// 章节体系（用于按章节归类展示）
const MATH_CHAPTERS = [
  '第1章 高等数学预备知识',
  '第2章 数列极限',
  '第3章 函数极限与连续性',
  '第4章 一元函数微分学的概念与计算',
  '第5章 一元函数微分学的几何应用',
  '第6章 中值定理',
  '第7章 零点问题',
  '第8章 一元函数积分学的概念与计算',
  '第9章 一元函数积分学的几何应用',
  '第10章 积分等式与积分不等式',
  '第11章 多元函数微分学',
  '第12章 二重积分',
  '第13章 常微分方程',
  '第14章 无穷级数',
  '线性代数·行列式',
  '线性代数·矩阵',
  '线性代数·向量组',
  '线性代数·线性方程组',
  '线性代数·特征值与特征向量',
  '线性代数·二次型',
  '未分类'
];

const MATH_BANK_TYPES = [
  { id: 'choice', name: '选择题' },
  { id: 'fill', name: '填空题' },
  { id: 'solution', name: '解答题' }
];

// 题库数据加载：本地走 /api/math-questions（服务端聚合）；静态部署(GitHub Pages)无服务端，
// 回退到分题集静态文件 api/math-questions-{zhen,30jiang,1000}.json
async function loadMathBankData() {
  try {
    const res = await fetch('/api/math-questions');
    if (res.ok) return await res.json();
  } catch (e) { /* 静态部署下走回退 */ }
  const [a, b, c] = await Promise.all([
    fetch('api/math-questions-zhen.json').then(r => r.json()).catch(() => ({ questions: [] })),
    fetch('api/math-questions-30jiang.json').then(r => r.json()).catch(() => ({ questions: [] })),
    fetch('api/math-questions-1000.json').then(r => r.json()).catch(() => ({ questions: [] }))
  ]);
  return { questions: [].concat(a.questions || [], b.questions || [], c.questions || []) };
}

async function loadMathBank() {
  const el = document.getElementById('mathBankList');
  if (el) el.innerHTML = '<div class="empty-state-text">加载中…</div>';
  try {
    const data = await loadMathBankData();
    _mathBank = (data.questions || []).map(q => q.book ? q : Object.assign({}, q, { book: '真题' }));
    _mathBankFilterReady = false;
    renderMathBank();
  } catch (e) {
    if (el) el.innerHTML = '<div class="empty-state-text">题库加载失败，请确认服务器正在运行</div>';
  }
}

function renderMathBank() {
  renderMathBankFilters();
  renderMathBankList();
}

// 筛选栏：只在数据首次加载时构建一次，之后不再重建
function renderMathBankFilters() {
  const filterEl = document.getElementById('mathBankFilter');
  if (!filterEl) return;
  if (_mathBankFilterReady) return;

  if (!_mathBank.length) {
    filterEl.innerHTML = '';
    return;
  }

  const years = [...new Set(_mathBank.map(q => q.year))].sort((a, b) => b - a);
  const bookQs = _mathBankFilter.book === 'all' ? _mathBank : _mathBank.filter(q => q.book === _mathBankFilter.book);
  const existingChapters = new Set(bookQs.map(q => q.chapter).filter(Boolean));
  const chapters = MATH_CHAPTERS.filter(c => existingChapters.has(c));
  const points = [...new Set(_mathBank.filter(q => q.book === '真题').map(q => q.knowledgePoint).filter(Boolean))].sort();

  filterEl.innerHTML = `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px;">
      <span style="font-size:12px;color:var(--text-secondary);">题集：</span>
      <button class="btn btn-outline btn-sm ${_mathBankFilter.book==='真题'?'active':''}" data-bfilter="book" data-value="真题" onclick="setMBBook('真题')" style="font-size:12px;">历年真题</button>
      <button class="btn btn-outline btn-sm ${_mathBankFilter.book==='30讲'?'active':''}" data-bfilter="book" data-value="30讲" onclick="setMBBook('30讲')" style="font-size:12px;">30讲例题</button>
      <button class="btn btn-outline btn-sm ${_mathBankFilter.book==='1000题'?'active':''}" data-bfilter="book" data-value="1000题" onclick="setMBBook('1000题')" style="font-size:12px;">1000题·基础篇</button>
    </div>
    ${_mathBankFilter.book === '真题' ? `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px;">
      <span style="font-size:12px;color:var(--text-secondary);">年份：</span>
      <button class="btn btn-outline btn-sm ${_mathBankFilter.year==='all'?'active':''}" data-filter="year" data-value="all" onclick="setMBFilter('year','all')" style="font-size:12px;">全部</button>
      ${years.map(y => `<button class="btn btn-outline btn-sm ${_mathBankFilter.year===y?'active':''}" data-filter="year" data-value="${y}" onclick="setMBFilter('year','${y}')" style="font-size:12px;">${y}</button>`).join('')}
    </div>` : ''}
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px;">
      <span style="font-size:12px;color:var(--text-secondary);">题型：</span>
      <button class="btn btn-outline btn-sm ${_mathBankFilter.type==='all'?'active':''}" data-filter="type" data-value="all" onclick="setMBFilter('type','all')" style="font-size:12px;">全部</button>
      ${MATH_BANK_TYPES.map(t => `<button class="btn btn-outline btn-sm ${_mathBankFilter.type===t.id?'active':''}" data-filter="type" data-value="${t.id}" onclick="setMBFilter('type','${t.id}')" style="font-size:12px;">${t.name}</button>`).join('')}
    </div>
    <details ${_mathBankFilter.chapter!=='all'?'open':''} style="margin-bottom:6px;">
      <summary id="mb-chapter-summary" style="font-size:12px;color:var(--text-secondary);cursor:pointer;padding:4px 0;">
        ${_mathBankFilter.chapter==='all' ? '📚 按章节筛选' : '📚 当前：' + _mathBankFilter.chapter}
      </summary>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;padding:6px 0;">
        <button class="btn btn-outline btn-sm ${_mathBankFilter.chapter==='all'?'active':''}" data-filter="chapter" data-value="all" onclick="setMBFilter('chapter','all')" style="font-size:12px;">全部章节</button>
        ${chapters.map(c => `<button class="btn btn-outline btn-sm ${_mathBankFilter.chapter===c?'active':''}" data-filter="chapter" data-value="${c}" onclick="setMBFilter('chapter','${c}')" style="font-size:12px;">${c}</button>`).join('')}
      </div>
    </details>
    ${_mathBankFilter.book === '真题' && points.length ? `
    <details ${_mathBankFilter.point!=='all'?'open':''}>
      <summary id="mb-point-summary" style="font-size:12px;color:var(--text-secondary);cursor:pointer;padding:4px 0;">
        ${_mathBankFilter.point==='all' ? '🏷️ 按知识点筛选' : '🏷️ 当前：' + _mathBankFilter.point}
      </summary>
      <div style="padding:6px 0;">
        <select onchange="setMBFilter('point', this.value)" style="width:100%;max-width:400px;padding:4px 8px;font-size:12px;border:1px solid var(--border);border-radius:4px;background:var(--card-bg);color:var(--text-primary);">
          <option value="all" ${_mathBankFilter.point==='all'?'selected':''}>全部知识点</option>
          ${points.map(p => `<option value="${p}" ${_mathBankFilter.point===p?'selected':''}>${p}</option>`).join('')}
        </select>
      </div>
    </details>` : ''}
  `;
  _mathBankFilterReady = true;
}

// 题目列表：每次筛选/翻页时只重建此部分
function renderMathBankList() {
  const el = document.getElementById('mathBankList');
  if (!el) return;

  if (!_mathBank.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">题库暂无数据</div></div>';
    return;
  }

  // 过滤
  _mathBankFiltered = _mathBank.filter(q => {
    if (_mathBankFilter.book !== 'all' && q.book !== _mathBankFilter.book) return false;
    if (_mathBankFilter.year !== 'all' && q.year !== _mathBankFilter.year) return false;
    if (_mathBankFilter.type !== 'all' && q.type !== _mathBankFilter.type) return false;
    if (_mathBankFilter.chapter !== 'all' && q.chapter !== _mathBankFilter.chapter) return false;
    if (_mathBankFilter.point !== 'all' && q.knowledgePoint !== _mathBankFilter.point) return false;
    return true;
  });

  if (!_mathBankFiltered.length) {
    el.innerHTML = '<div class="empty-state-text">当前筛选无结果</div>';
    return;
  }

  // 分页
  const totalPages = Math.ceil(_mathBankFiltered.length / _mathBankPerPage);
  if (_mathBankPage > totalPages) _mathBankPage = 1;
  const start = (_mathBankPage - 1) * _mathBankPerPage;
  const pageItems = _mathBankFiltered.slice(start, start + _mathBankPerPage);

  const typeName = (id) => (MATH_BANK_TYPES.find(t => t.id === id) || {}).name || id;

  let html = pageItems.map(q => {
    const hasAnswer = q.answer && q.answer.trim().length > 0;
    const hasExplanation = q.explanation && q.explanation.trim().length > 0;
    return `
      <div class="knowledge-item" data-qid="${q.id}">
        <div style="display:flex;justify-content:space-between;align-items:start;gap:8px;">
          <div style="flex:1;min-width:0;">
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
              <span class="tag tag-blue">${typeName(q.type)}</span>
              ${q.book === '真题' ? `<span class="tag tag-green">${q.year}年</span>` : `<span class="tag tag-green">${q.book}</span>`}
              <span class="tag tag-purple">${q.book === '真题' ? '第' + q.qnum + '题' : '例 ' + q.qnum}</span>
              ${q.chapter ? `<span class="tag tag-orange" style="background:#fff3e0;color:#e65100;">${q.chapter}</span>` : ''}
              ${q.knowledgePoint && q.knowledgePoint !== q.chapter ? `<span class="tag tag-gray">${q.knowledgePoint}</span>` : ''}
              ${(!hasAnswer || !hasExplanation) ? `<span class="tag tag-gray" style="background:#ffebee;color:#c62828;">答案/解析待补</span>` : ''}
            </div>
            ${(q.book === '30讲' || q.book === '1000题')
              ? `<div class="math-img-wrap" style="margin:4px 0;">
                   <img src="${q.content}" alt="${q.book} ${q.qnum}" loading="lazy"
                        style="max-width:100%;height:auto;border-radius:6px;border:1px solid var(--border);background:#fff;cursor:zoom-in;display:block;"
                        onclick="openMathImgModal('${q.content}','${q.book} ${q.qnum}')" />
                 </div>`
              : `<div class="math-content" style="font-size:14px;line-height:1.8;">${q.content}</div>`}
            ${q.options && q.options.length ? `
              <div style="margin-top:6px;font-size:13px;color:var(--text-secondary);">
                ${q.options.map(o => `<div>${o}</div>`).join('')}
              </div>` : ''}
            <div id="mb-ans-${q.id}" style="display:none;">
              ${hasAnswer ? `
                <div style="margin-top:8px;padding:8px;background:var(--hover);border-radius:6px;font-size:13px;">
                  <strong>答案：</strong><span class="math-content">${q.answer}</span>
                </div>` : ''}
              ${hasExplanation ? `
                <div style="margin-top:6px;padding:8px;background:var(--hover);border-radius:6px;font-size:13px;">
                  <strong>详解：</strong><span class="math-content">${q.explanation}</span>
                </div>` : ''}
              ${!hasAnswer && !hasExplanation ? `
                <div style="margin-top:8px;padding:8px;background:#fff3e0;border-radius:6px;font-size:13px;color:#e65100;">
                  ⚠️ 本题答案和解析尚未录入（请参照PDF真题补充）
                </div>` : ''}
              ${hasAnswer && !hasExplanation ? `
                <div style="margin-top:4px;padding:6px 8px;background:#fff8e1;border-radius:6px;font-size:12px;color:#f57c00;">
                  💡 答案已收录，详细解析暂缺
                </div>` : ''}
            </div>
          </div>
          <button class="btn btn-outline btn-sm" id="mb-btn-${q.id}" onclick="toggleMBAnswer('${q.id}')" style="font-size:12px;flex-shrink:0;">答案</button>
          <button class="btn btn-outline btn-sm" onclick="addBankToWrong('${q.year}','${q.qnum}','${q.type||''}','${(q.chapter||'').replace(/'/g,"\\'")}')" style="font-size:12px;flex-shrink:0;color:var(--danger);" title="加入错题本">📕错题</button>
          <button class="btn btn-outline btn-sm" onclick="logPracticeFromQid('${q.id}')" style="font-size:12px;flex-shrink:0;" title="用4问标准记录本次练习">📋记录</button>
        </div>
      </div>
    `;
  }).join('');

  // 分页导航
  if (totalPages > 1) {
    let pageBtns = '';
    const maxBtns = 9;
    let ps = Math.max(1, _mathBankPage - 4);
    let pe = Math.min(totalPages, ps + maxBtns - 1);
    if (pe - ps + 1 < maxBtns) ps = Math.max(1, pe - maxBtns + 1);
    for (let p = ps; p <= pe; p++) {
      pageBtns += `<button class="btn btn-outline btn-sm ${p===_mathBankPage?'active':''}" onclick="setMBPage(${p})" style="font-size:12px;min-width:30px;">${p}</button>`;
    }
    html += `
      <div style="display:flex;justify-content:center;align-items:center;gap:6px;padding:12px 0;flex-wrap:wrap;">
        ${_mathBankPage > 1 ? `<button class="btn btn-outline btn-sm" onclick="setMBPage(${_mathBankPage - 1})" style="font-size:12px;">上一页</button>` : ''}
        ${pageBtns}
        ${_mathBankPage < totalPages ? `<button class="btn btn-outline btn-sm" onclick="setMBPage(${_mathBankPage + 1})" style="font-size:12px;">下一页</button>` : ''}
        <span style="font-size:12px;color:var(--text-secondary);margin-left:8px;">共 ${_mathBankFiltered.length} 题 · 第 ${_mathBankPage}/${totalPages} 页</span>
      </div>
    `;
  }

  el.innerHTML = html;

  // MathJax 只渲染当前页（最多20题）
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([el]).catch(e => console.warn('MathJax:', e));
  }
}

function setMBFilter(key, value) {
  _mathBankFilter[key] = value;
  _mathBankPage = 1;
  // 通过 DOM 更新按钮激活态，不重建筛选栏
  document.querySelectorAll('[data-filter="' + key + '"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === String(value));
  });
  // 更新折叠面板标题
  if (key === 'chapter') {
    const s = document.getElementById('mb-chapter-summary');
    if (s) s.textContent = value === 'all' ? '📚 按章节筛选' : '📚 当前：' + value;
  }
  if (key === 'point') {
    const s = document.getElementById('mb-point-summary');
    if (s) s.textContent = value === 'all' ? '🏷️ 按知识点筛选' : '🏷️ 当前：' + value;
  }
  renderMathBankList();
}

function setMBPage(page) {
  _mathBankPage = page;
  renderMathBankList();
}

function toggleMBAnswer(id) {
  const ctn = document.getElementById('mb-ans-' + id);
  const btn = document.getElementById('mb-btn-' + id);
  if (!ctn || !btn) return;
  if (ctn.style.display === 'none' || !ctn.style.display) {
    ctn.style.display = 'block';
    btn.textContent = '收起';
    // 只渲染该题的答案容器
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([ctn]).catch(e => console.warn('MathJax:', e));
    }
  } else {
    ctn.style.display = 'none';
    btn.textContent = '答案';
  }
}

// ===== 数学题库（手动录入版本）=====
let _mathQBFilter = { type: 'all', point: 'all' };

const MATH_Q_TYPES = [
  { id: 'choice', name: '选择题' },
  { id: 'fill', name: '填空题' },
  { id: 'solve', name: '解答题' }
];

function renderMathQB() {
  // 渲染筛选条
  const filterEl = document.getElementById('mathQBFilter');
  if (!filterEl) return;
  const allQ = Store.get('mathQB', []);
  const points = [...new Set(allQ.map(q => q.point).filter(Boolean))];

  filterEl.innerHTML = `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:8px;">
      <span style="font-size:12px;color:var(--text-secondary);">题型：</span>
      <button class="btn btn-outline btn-sm ${_mathQBFilter.type==='all'?'active':''}" onclick="_mathQBFilter.type='all';renderMathQB()" style="font-size:12px;">全部</button>
      ${MATH_Q_TYPES.map(t => `<button class="btn btn-outline btn-sm ${_mathQBFilter.type===t.id?'active':''}" onclick="_mathQBFilter.type='${t.id}';renderMathQB()" style="font-size:12px;">${t.name}</button>`).join('')}
    </div>
    ${points.length ? `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
      <span style="font-size:12px;color:var(--text-secondary);">知识点：</span>
      <button class="btn btn-outline btn-sm ${_mathQBFilter.point==='all'?'active':''}" onclick="_mathQBFilter.point='all';renderMathQB()" style="font-size:12px;">全部</button>
      ${points.map(p => `<button class="btn btn-outline btn-sm ${_mathQBFilter.point===p?'active':''}" onclick="_mathQBFilter.point='${p}';renderMathQB()" style="font-size:12px;">${p}</button>`).join('')}
    </div>` : ''}
  `;

  // 渲染题目列表
  const el = document.getElementById('mathQBList');
  if (!el) return;

  let list = allQ;
  if (_mathQBFilter.type !== 'all') list = list.filter(q => q.type === _mathQBFilter.type);
  if (_mathQBFilter.point !== 'all') list = list.filter(q => q.point === _mathQBFilter.point);

  if (!list.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">题库还是空的，点击「添加题目」开始录入</div></div>';
    return;
  }

  const typeName = (id) => (MATH_Q_TYPES.find(t => t.id === id) || {}).name || id;
  el.innerHTML = list.map(q => `
    <div class="knowledge-item" id="mq-${q.id}">
      <div style="display:flex;justify-content:space-between;align-items:start;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
            <span class="tag tag-blue">${typeName(q.type)}</span>
            ${q.point ? `<span class="tag tag-purple">${q.point}</span>` : ''}
            ${q.year ? `<span class="tag tag-green">${q.year}年</span>` : ''}
            ${q.done ? `<span class="tag tag-green">已做</span>` : ''}
          </div>
          <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${q.content}</div>
        </div>
        <div style="display:flex;gap:4px;flex-shrink:0;">
          <button class="btn btn-outline btn-sm" onclick="toggleQBAnswer('${q.id}')" style="font-size:12px;">${q._showAns ? '收起' : '答案'}</button>
          <button class="btn btn-outline btn-sm" onclick="toggleQBDone('${q.id}')" style="font-size:12px;">${q.done ? '撤销' : '完成'}</button>
          <button class="btn btn-outline btn-sm" onclick="editMathQB('${q.id}')" style="font-size:12px;">编辑</button>
          <button class="todo-delete" onclick="delMathQB('${q.id}')">✕</button>
        </div>
      </div>
      ${q._showAns && q.answer ? `
        <div style="margin-top:8px;padding:10px;background:var(--hover);border-radius:6px;font-size:13px;line-height:1.6;">
          <div style="font-weight:600;margin-bottom:4px;">答案</div>
          <div style="white-space:pre-wrap;">${q.answer}</div>
        </div>` : ''}
      ${q._showAns && q.explain ? `
        <div style="margin-top:8px;padding:10px;background:var(--hover);border-radius:6px;font-size:13px;line-height:1.6;">
          <div style="font-weight:600;margin-bottom:4px;">详解</div>
          <div style="white-space:pre-wrap;">${q.explain}</div>
        </div>` : ''}
    </div>
  `).join('');
}

function openMathQBEditor(id) {
  const editing = id ? Store.get('mathQB').find(q => q.id === id) : null;
  const q = editing || { type: 'choice', point: '', year: '', content: '', answer: '', explain: '' };

  modal(id ? '编辑题目' : '添加题目', `
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <div>
        <label style="font-size:12px;color:var(--text-secondary);">题型</label>
        <select class="select" id="qbType" style="width:120px;">
          ${MATH_Q_TYPES.map(t => `<option value="${t.id}" ${q.type===t.id?'selected':''}>${t.name}</option>`).join('')}
        </select>
      </div>
      <div>
        <label style="font-size:12px;color:var(--text-secondary);">知识点</label>
        <input class="input" id="qbPoint" value="${q.point||''}" placeholder="如：极限" style="width:120px;">
      </div>
      <div>
        <label style="font-size:12px;color:var(--text-secondary);">年份</label>
        <input class="input" id="qbYear" value="${q.year||''}" placeholder="如：2024" style="width:100px;">
      </div>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:12px;color:var(--text-secondary);">题目内容</label>
      <textarea class="textarea" id="qbContent" style="min-height:100px;" placeholder="输入或粘贴题目...">${q.content||''}</textarea>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:12px;color:var(--text-secondary);">答案</label>
      <textarea class="textarea" id="qbAnswer" style="min-height:60px;" placeholder="答案（选填）">${q.answer||''}</textarea>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:12px;color:var(--text-secondary);">详解</label>
      <textarea class="textarea" id="qbExplain" style="min-height:100px;" placeholder="详细解析（选填）">${q.explain||''}</textarea>
    </div>
  `, (m) => {
    const item = {
      type: m.querySelector('#qbType').value,
      point: m.querySelector('#qbPoint').value.trim(),
      year: m.querySelector('#qbYear').value.trim(),
      content: m.querySelector('#qbContent').value.trim(),
      answer: m.querySelector('#qbAnswer').value.trim(),
      explain: m.querySelector('#qbExplain').value.trim()
    };
    if (!item.content) { toast('请输入题目内容'); return true; }
    if (editing) {
      Object.assign(editing, item);
      Store.set('mathQB', Store.get('mathQB'));
    } else {
      item.id = uid();
      item.done = false;
      Store.push('mathQB', item);
    }
    renderMathQB();
    return false;
  });
}

function editMathQB(id) { openMathQBEditor(id); }

function delMathQB(id) {
  Store.removeIn('mathQB', id);
  renderMathQB();
}

function toggleQBAnswer(id) {
  const list = Store.get('mathQB');
  const q = list.find(x => x.id === id);
  if (!q) return;
  q._showAns = !q._showAns;
  Store.set('mathQB', list);
  renderMathQB();
}

function toggleQBDone(id) {
  const list = Store.get('mathQB');
  const q = list.find(x => x.id === id);
  if (!q) return;
  q.done = !q.done;
  Store.set('mathQB', list);
  renderMathQB();
}

let _examPdfData = null;
let _examFilter = 'recent';

async function loadPdfExams(filter) {
  _examFilter = filter;
  if (!_examPdfData) {
    try {
      const res = await fetch('/api/math-exams');
      _examPdfData = await res.json();
    } catch (e) {
      document.getElementById('pdfExamList').innerHTML = '<div class="empty-state-text">无法加载真题文件，请确认服务器正常运行</div>';
      return;
    }
  }
  renderPdfExams();
}

function filterYears(filter) {
  loadPdfExams(filter);
}

function renderPdfExams() {
  const el = document.getElementById('pdfExamList');
  if (!el || !_examPdfData) return;
  const { exams, solutions } = _examPdfData;
  let years = Object.keys(exams).sort((a, b) => b - a);
  if (_examFilter === 'recent') years = years.slice(0, 10);

  el.innerHTML = years.map(y => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--border);border-radius:8px;">
      <span style="font-weight:600;font-size:14px;">${y}年</span>
      <div style="display:flex;gap:4px;">
        <a class="btn btn-outline btn-sm" href="/pdf/math/${encodeURIComponent(exams[y])}" target="_blank" style="text-decoration:none;font-size:12px;">真题</a>
        <a class="btn btn-outline btn-sm" href="/pdf/math/${encodeURIComponent(solutions[y])}" target="_blank" style="text-decoration:none;font-size:12px;color:var(--primary);border-color:var(--primary);">解析</a>
      </div>
    </div>
  `).join('');
}

// ----- 数学错题本 -----
modules['math-wrongbook'] = (c) => {
  c.innerHTML = `
    <div class="card">
      <div class="card-title">📕 数学错题本</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="wqChapter" placeholder="章节" style="width:120px;">
        <input class="input" id="wqQuestion" placeholder="错题题目" style="flex:1;" onkeypress="if(event.key==='Enter')addWrong()">
        <button class="btn btn-primary" onclick="addWrong()">添加</button>
      </div>
      <div style="margin-bottom:12px;">
        <textarea class="textarea" id="wqAnswer" placeholder="正确答案/解析（选填）"></textarea>
      </div>
      <div id="wrongList"></div>
    </div>
  `;
  renderWrongList();
};

function addWrong() {
  const chapter = document.getElementById('wqChapter').value.trim();
  const question = document.getElementById('wqQuestion').value.trim();
  const answer = document.getElementById('wqAnswer').value.trim();
  if (!question) return;
  Store.push('wrongBook', { id: uid(), subject: '数学', chapter, question, answer, time: now() });
  document.getElementById('wqQuestion').value = '';
  document.getElementById('wqAnswer').value = '';
  renderWrongList();
}

function renderWrongList() {
  const items = Store.get('wrongBook', []).filter(x => x.subject === '数学');
  const el = document.getElementById('wrongList');
  if (!items.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📕</div><div class="empty-state-text">还没有错题，加油~</div></div>';
    return;
  }
  el.innerHTML = items.map(item => `
    <div class="wrong-item">
      <div class="wrong-q">${item.question}</div>
      ${item.answer ? `<div class="wrong-a">${item.answer}</div>` : ''}
      <div class="wrong-tags">
        ${item.chapter ? `<span class="tag tag-blue">${item.chapter}</span>` : ''}
        <span class="tag tag-gray">${fmtDate(item.time)}</span>
      </div>
      <button class="todo-delete" onclick="delWrong('${item.id}')">✕</button>
    </div>
  `).join('');
}

function delWrong(id) {
  Store.removeIn('wrongBook', id);
  renderWrongList();
}

// ----- 数学练习记录（4问标准） -----
const PRACTICE_4Q = [
  { key: 'q1', label: '独立完成', desc: '遮住答案，从头到尾算出正确结果' },
  { key: 'q2', label: '理解方法', desc: '能说出用了什么方法、为什么用它' },
  { key: 'q3', label: '识别关键', desc: '能指出这道题的"关键一步"在哪' },
  { key: 'q4', label: '举一反三', desc: '把数字换一组，还能做出来' }
];

const PRACTICE_SCORE_COLORS = { 4: '#27ae60', 3: '#f39c12', 2: '#f39c12', 1: '#e74c3c', 0: '#e74c3c' };
const PRACTICE_SCORE_LABELS = { 4: '完全掌握', 3: '基本掌握', 2: '半生不熟', 1: '未掌握', 0: '未掌握' };

// 当前正在内联编辑的练习记录 id（null 表示无）
let editingPracticeId = null;

// 把 4 问得分映射到掌握程度筛选桶
function practiceMasteryBucket(score) {
  if (score === 4) return 'pass4';
  if (score === 3) return 'pass3';
  if (score === 2) return 'pass2';
  return 'pass01';
}

modules['math-practice'] = (c) => {
  const today = new Date().toISOString().slice(0, 10);
  editingPracticeId = null; // 进入模块时清掉上次的编辑态
  const records = Store.get('practiceLog', []);

  c.innerHTML = `
    <div class="card">
      <div class="card-title">📋 4问标准练习记录</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;line-height:1.7;">
        每做完一道题，用 4 个问题检验是否真掌握。4 个全是 ✓ 才算"过"，否则标记隔天重做。<br>
        <span style="color:var(--text-light);">标准来源：考研复习规划师建议</span>
      </p>

      <div style="background:var(--bg-secondary);border-radius:10px;padding:14px 16px;margin-bottom:20px;">
        <div style="font-size:13px;font-weight:700;margin-bottom:8px;color:var(--text-primary);">4问标准</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;">
          ${PRACTICE_4Q.map((q, i) => `
            <div style="font-size:12px;color:var(--text-secondary);">
              <span style="font-weight:700;color:var(--accent);">Q${i+1} ${q.label}</span>
              <span style="color:var(--text-light);"> — ${q.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
        <input class="input" id="practiceDate" type="date" value="${today}" style="width:130px;">
        <select class="select" id="practiceSource" style="width:130px;" onchange="togglePracticeRefInput()">
          <option value="题库">题库</option>
          <option value="课本例题">课本例题</option>
          <option value="课后题">课后题</option>
          <option value="30讲例题">30讲例题</option>
          <option value="1000题">1000题</option>
          <option value="真题">真题</option>
          <option value="其他">其他</option>
        </select>
        <input class="input" id="practiceRef" placeholder="题目标识（如 2025年第1题 / 张宇30讲第5讲例3）" style="flex:1;min-width:200px;">
      </div>

      <div style="display:flex;gap:8px;margin-bottom:16px;">
        <textarea class="textarea" id="practiceContent" placeholder="题目简述（可选，便于回顾）" rows="2" style="font-size:13px;"></textarea>
      </div>

      <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;align-items:center;">
        <span style="font-size:13px;font-weight:600;color:var(--text-secondary);">4问达标：</span>
        ${PRACTICE_4Q.map((q, i) => `
          <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:13px;padding:4px 10px;border:1px solid var(--border);border-radius:6px;" id="qLabel${i+1}">
            <input type="checkbox" id="practiceQ${i+1}" onchange="updateQLabel(${i+1})" style="width:16px;height:16px;cursor:pointer;">
            <span>Q${i+1} ${q.label}</span>
          </label>
        `).join('')}
      </div>

      <div style="display:flex;gap:8px;margin-bottom:16px;">
        <textarea class="textarea" id="practiceNote" placeholder="备注（可选：卡在哪、下次怎么改）" rows="2" style="font-size:13px;"></textarea>
      </div>

      <button class="btn btn-primary" onclick="addPracticeLog()" style="width:100%;">+ 记录本次练习</button>
    </div>

    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
      <div class="card" style="flex:1;min-width:120px;padding:12px 16px;text-align:center;">
        <div style="font-size:24px;font-weight:800;color:var(--accent);" id="statTotal">0</div>
        <div style="font-size:11px;color:var(--text-light);">总练习</div>
      </div>
      <div class="card" style="flex:1;min-width:120px;padding:12px 16px;text-align:center;">
        <div style="font-size:24px;font-weight:800;color:#27ae60;" id="statPass">0</div>
        <div style="font-size:11px;color:var(--text-light);">完全掌握(4/4)</div>
      </div>
      <div class="card" style="flex:1;min-width:120px;padding:12px 16px;text-align:center;">
        <div style="font-size:24px;font-weight:800;color:#f39c12;" id="statHalf">0</div>
        <div style="font-size:11px;color:var(--text-light);">半生不熟(2-3/4)</div>
      </div>
      <div class="card" style="flex:1;min-width:120px;padding:12px 16px;text-align:center;">
        <div style="font-size:24px;font-weight:800;color:#e74c3c;" id="statFail">0</div>
        <div style="font-size:11px;color:var(--text-light);">未掌握(0-1/4)</div>
      </div>
    </div>

    <div class="card">
      <div class="card-title" style="margin:0 0 12px;">📖 练习历史</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
        <select class="select" id="practiceFilter" style="width:108px;font-size:12px;" onchange="renderPracticeLog()" title="按来源筛选">
          <option value="all">全部来源</option>
          <option value="题库">题库</option>
          <option value="课本例题">课本例题</option>
          <option value="课后题">课后题</option>
          <option value="30讲例题">30讲例题</option>
          <option value="1000题">1000题</option>
          <option value="真题">真题</option>
          <option value="其他">其他</option>
        </select>
        <select class="select" id="practiceMastery" style="width:130px;font-size:12px;" onchange="renderPracticeLog()" title="按掌握程度筛选">
          <option value="all">全部掌握度</option>
          <option value="pass4">完全掌握(4/4)</option>
          <option value="pass3">基本掌握(3/4)</option>
          <option value="pass2">半生不熟(2/4)</option>
          <option value="pass01">未掌握(0-1/4)</option>
        </select>
        <input class="input" id="practiceFrom" type="date" style="width:140px;font-size:12px;" onchange="renderPracticeLog()" title="起始日期">
        <span style="font-size:12px;color:var(--text-light);">至</span>
        <input class="input" id="practiceTo" type="date" style="width:140px;font-size:12px;" onchange="renderPracticeLog()" title="结束日期">
        <select class="select" id="practiceRetry" style="width:130px;font-size:12px;" onchange="renderPracticeLog()" title="按重做次数筛选">
          <option value="all">全部重做</option>
          <option value="orig">原始题(未重做)</option>
          <option value="r1">第1次重做</option>
          <option value="r2">第2次重做</option>
          <option value="r3">第3次重做</option>
          <option value="r4plus">第4次及以上</option>
        </select>
        <button class="btn btn-outline btn-sm" style="font-size:11px;" onclick="resetPracticeFilters()">重置筛选</button>
      </div>
      <div id="practiceList"></div>
    </div>
  `;

  renderPracticeLog();
};

function updateQLabel(idx) {
  const cb = document.getElementById('practiceQ' + idx);
  const label = document.getElementById('qLabel' + idx);
  if (cb.checked) {
    label.style.background = 'var(--accent)';
    label.style.color = '#fff';
    label.style.borderColor = 'var(--accent)';
  } else {
    label.style.background = '';
    label.style.color = '';
    label.style.borderColor = 'var(--border)';
  }
}

function addPracticeLog() {
  const date = document.getElementById('practiceDate').value;
  const source = document.getElementById('practiceSource').value;
  const ref = document.getElementById('practiceRef').value.trim();
  const content = document.getElementById('practiceContent').value.trim();
  const note = document.getElementById('practiceNote').value.trim();
  const q1 = document.getElementById('practiceQ1').checked;
  const q2 = document.getElementById('practiceQ2').checked;
  const q3 = document.getElementById('practiceQ3').checked;
  const q4 = document.getElementById('practiceQ4').checked;

  if (!ref) { toast('请填写题目标识'); return; }

  Store.push('practiceLog', {
    id: uid(), date, source, ref, content, note, q1, q2, q3, q4
  });

  // reset form
  document.getElementById('practiceRef').value = '';
  document.getElementById('practiceContent').value = '';
  document.getElementById('practiceNote').value = '';
  PRACTICE_4Q.forEach((q, i) => {
    document.getElementById('practiceQ' + (i + 1)).checked = false;
    updateQLabel(i + 1);
  });

  renderPracticeLog();
  toast('已记录');
}

function renderPracticeLog() {
  const records = Store.get('practiceLog', []);
  const el = document.getElementById('practiceList');
  if (!el) return;

  // 读取四个筛选维度（来源 / 掌握程度 / 起止日期），缺省容错
  const fSource = document.getElementById('practiceFilter');
  const fMastery = document.getElementById('practiceMastery');
  const fFrom = document.getElementById('practiceFrom');
  const fTo = document.getElementById('practiceTo');
  const source = fSource ? fSource.value : 'all';
  const mastery = fMastery ? fMastery.value : 'all';
  const from = fFrom ? fFrom.value : '';
  const to = fTo ? fTo.value : '';
  const fRetry = document.getElementById('practiceRetry');
  const retry = fRetry ? fRetry.value : 'all';

  const filtered = records.filter(r => {
    const score = (r.q1?1:0) + (r.q2?1:0) + (r.q3?1:0) + (r.q4?1:0);
    if (source !== 'all' && r.source !== source) return false;
    if (mastery !== 'all' && practiceMasteryBucket(score) !== mastery) return false;
    if (from && r.date < from) return false;
    if (to && r.date > to) return false;
    if (retry !== 'all') {
      const isOrig = !r.retryOf;
      const at = r.attempt || 0;
      if (retry === 'orig' && !isOrig) return false;
      if (retry === 'r1' && at !== 1) return false;
      if (retry === 'r2' && at !== 2) return false;
      if (retry === 'r3' && at !== 3) return false;
      if (retry === 'r4plus' && at < 4) return false;
    }
    return true;
  });

  // 统计（永远基于全部记录，不受上方筛选影响）
  const statTotal = document.getElementById('statTotal');
  const statPass = document.getElementById('statPass');
  const statHalf = document.getElementById('statHalf');
  const statFail = document.getElementById('statFail');
  if (statTotal) {
    // 统计永远基于【全部记录】，不受上方筛选（来源/掌握度/日期/重做次数）影响。
    // 按题目标识(ref)归组：同一题的原始记录与重做记录视为一题。
    // 总练习数 = 去重后的题目数（重做不重复计入）；
    // 熟练度按每题【最新一次】练习情况统计（重做会覆盖旧评价）。
    const groups = {};
    records.forEach(r => {
      const key = r.ref || r.id;
      (groups[key] || (groups[key] = [])).push(r);
    });
    let pass = 0, half = 0, fail = 0;
    Object.keys(groups).forEach(key => {
      const recs = groups[key];
      // 取最新一次：日期降序 → 同日期按重做次数(attempt)降序 → id 降序兜底
      const latest = recs.slice().sort((a, b) =>
        b.date.localeCompare(a.date) ||
        (b.attempt || 0) - (a.attempt || 0) ||
        b.id.localeCompare(a.id)
      )[0];
      const score = (latest.q1?1:0) + (latest.q2?1:0) + (latest.q3?1:0) + (latest.q4?1:0);
      if (score === 4) pass++;
      else if (score >= 2) half++;
      else fail++;
    });
    statTotal.textContent = Object.keys(groups).length;
    statPass.textContent = pass;
    statHalf.textContent = half;
    statFail.textContent = fail;
  }

  if (!filtered.length && !editingPracticeId) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">没有符合条件的练习记录~</div></div>';
    return;
  }

  let renderList = [...filtered].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  // 修复：重做/编辑自动创建的新记录可能不满足当前筛选条件，
  // 强制把正在编辑的记录放入渲染列表顶部，避免编辑窗口被筛选隐藏
  if (editingPracticeId) {
    const editingRec = records.find(r => r.id === editingPracticeId);
    if (editingRec && !renderList.some(r => r.id === editingPracticeId)) {
      renderList = [editingRec, ...renderList];
    }
  }

  el.innerHTML = renderList.map(r => {
    if (r.id === editingPracticeId) return renderPracticeEditRow(r);
    const score = (r.q1?1:0) + (r.q2?1:0) + (r.q3?1:0) + (r.q4?1:0);
    return renderPracticeViewRow(r, score);
  }).join('');

  // 编辑行渲染后给 4 问勾选标签上色
  if (editingPracticeId) {
    PRACTICE_4Q.forEach((_, i) => updateEditQLabel(i + 1));
  }
}

// 练习历史 —— 普通展示行
function renderPracticeViewRow(r, score) {
  const color = PRACTICE_SCORE_COLORS[score];
  const label = PRACTICE_SCORE_LABELS[score];
  const retryTag = r.retryOf ? `<span class="tag tag-orange" style="font-size:11px;">↻ 第${(r.attempt||1)}次重做</span>` : '';
  return `
    <div class="todo-item" style="flex-wrap:wrap;gap:6px;">
      <div style="flex:1;min-width:200px;">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span style="font-size:12px;color:var(--text-light);">${r.date}</span>
          <span class="tag tag-blue" style="font-size:11px;">${escapeHtml(r.source)}</span>
          ${retryTag}
          <span style="font-size:14px;font-weight:600;">${escapeHtml(r.ref)}</span>
        </div>
        ${r.content ? `<div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">${escapeHtml(r.content)}</div>` : ''}
        <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
          ${PRACTICE_4Q.map((q, i) => {
            const checked = r['q' + (i+1)];
            return `<span style="font-size:11px;padding:2px 8px;border-radius:4px;${checked ? 'background:#27ae60;color:#fff;' : 'background:var(--bg-secondary);color:var(--text-light);text-decoration:line-through;'}">Q${i+1} ${q.label}</span>`;
          }).join('')}
        </div>
        ${r.note ? `<div style="font-size:12px;color:var(--text-secondary);margin-top:6px;font-style:italic;">📝 ${escapeHtml(r.note)}</div>` : ''}
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;">
        <span style="font-size:12px;font-weight:700;padding:3px 10px;border-radius:12px;background:${color}22;color:${color};">${score}/4 ${label}</span>
        <button class="btn btn-outline btn-sm" style="font-size:11px;" onclick="editPractice('${r.id}')">✏️ 编辑</button>
        ${score < 4 ? `<button class="btn btn-outline btn-sm" style="font-size:11px;" onclick="retryPractice('${r.id}')">🔁 重做</button>` : ''}
        <button class="todo-delete" onclick="delPractice('${r.id}')">✕</button>
      </div>
    </div>`;
}

// 练习历史 —— 内联编辑行
function renderPracticeEditRow(r) {
  const score = (r.q1?1:0) + (r.q2?1:0) + (r.q3?1:0) + (r.q4?1:0);
  const color = PRACTICE_SCORE_COLORS[score];
  const label = PRACTICE_SCORE_LABELS[score];
  const sources = ['题库','课本例题','课后题','30讲例题','1000题','真题','其他'];
  return `
    <div class="todo-item" style="flex-wrap:wrap;gap:8px;background:var(--bg-secondary);border:1px solid var(--accent);">
      <div style="flex:1;min-width:240px;">
        <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
          <input class="input" id="editDate" type="date" value="${r.date}" style="width:130px;font-size:12px;">
          <select class="select" id="editSource" style="width:110px;font-size:12px;">
            ${sources.map(s => `<option value="${s}" ${r.source===s?'selected':''}>${s}</option>`).join('')}
          </select>
          <input class="input" id="editRef" value="${escapeHtml(r.ref)}" placeholder="题目标识" style="flex:1;min-width:160px;font-size:12px;">
        </div>
        <input class="input" id="editContent" value="${escapeHtml(r.content||'')}" placeholder="题目简述（可选）" style="width:100%;font-size:12px;margin-bottom:8px;">
        <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap;align-items:center;">
          <span style="font-size:12px;font-weight:600;color:var(--text-secondary);">4问达标：</span>
          ${PRACTICE_4Q.map((q, i) => `
            <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:12px;padding:4px 10px;border:1px solid var(--border);border-radius:6px;" id="editQLabel${i+1}">
              <input type="checkbox" id="editQ${i+1}" ${r['q'+(i+1)]?'checked':''} onchange="updateEditQLabel(${i+1})" style="width:16px;height:16px;cursor:pointer;">
              <span>Q${i+1} ${q.label}</span>
            </label>
          `).join('')}
        </div>
        <textarea class="textarea" id="editNote" placeholder="备注（卡在哪、下次怎么改）" rows="2" style="width:100%;font-size:12px;">${escapeHtml(r.note||'')}</textarea>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;justify-content:flex-start;">
        <span style="font-size:12px;font-weight:700;padding:3px 10px;border-radius:12px;background:${color}22;color:${color};text-align:center;">${score}/4 ${label}</span>
        <button class="btn btn-primary btn-sm" style="font-size:11px;" onclick="savePracticeEdit('${r.id}')">💾 保存</button>
        <button class="btn btn-outline btn-sm" style="font-size:11px;" onclick="cancelPracticeEdit()">取消</button>
        <button class="todo-delete" onclick="delPractice('${r.id}')">✕</button>
      </div>
    </div>`;
}

function updateEditQLabel(idx) {
  const cb = document.getElementById('editQ' + idx);
  const label = document.getElementById('editQLabel' + idx);
  if (!cb || !label) return;
  if (cb.checked) {
    label.style.background = 'var(--accent)';
    label.style.color = '#fff';
    label.style.borderColor = 'var(--accent)';
  } else {
    label.style.background = '';
    label.style.color = '';
    label.style.borderColor = 'var(--border)';
  }
}

function editPractice(id) {
  editingPracticeId = id;
  renderPracticeLog();
}

function cancelPracticeEdit() {
  editingPracticeId = null;
  renderPracticeLog();
}

function savePracticeEdit(id) {
  const records = Store.get('practiceLog', []);
  const idx = records.findIndex(r => r.id === id);
  if (idx < 0) { editingPracticeId = null; return; }
  const date = document.getElementById('editDate').value;
  const source = document.getElementById('editSource').value;
  const ref = document.getElementById('editRef').value.trim();
  const content = document.getElementById('editContent').value.trim();
  const note = document.getElementById('editNote').value.trim();
  if (!ref) { toast('请填写题目标识'); return; }
  records[idx] = {
    ...records[idx],
    date, source, ref, content, note,
    q1: document.getElementById('editQ1').checked,
    q2: document.getElementById('editQ2').checked,
    q3: document.getElementById('editQ3').checked,
    q4: document.getElementById('editQ4').checked
  };
  Store.set('practiceLog', records);
  editingPracticeId = null;
  renderPracticeLog();
  toast('已保存');
}

function resetPracticeFilters() {
  const a = document.getElementById('practiceFilter'); if (a) a.value = 'all';
  const b = document.getElementById('practiceMastery'); if (b) b.value = 'all';
  const e = document.getElementById('practiceRetry'); if (e) e.value = 'all';
  const c = document.getElementById('practiceFrom'); if (c) c.value = '';
  const d = document.getElementById('practiceTo'); if (d) d.value = '';
  renderPracticeLog();
}

function delPractice(id) {
  Store.removeIn('practiceLog', id);
  renderPracticeLog();
  toast('已删除');
}

function retryPractice(id) {
  const records = Store.get('practiceLog', []);
  const old = records.find(r => r.id === id);
  if (!old) return;
  // 新开一条重做记录（今日），归到同一条原始题，4问重置为未达标
  const newId = uid();
  const attempt = (old.retryOf ? (old.attempt || 1) : 0) + 1;
  Store.push('practiceLog', {
    id: newId,
    date: new Date().toISOString().slice(0, 10),
    source: old.source,
    ref: old.ref,
    content: old.content,
    note: '',
    q1: false, q2: false, q3: false, q4: false,
    retryOf: old.retryOf || old.id,
    attempt
  });
  // 直接进编辑态，方便立刻勾本次重做的4问 + 写备注
  editingPracticeId = newId;
  renderPracticeLog();
  toast('已开重做记录，勾好4问后点保存');
}

function togglePracticeRefInput() {
  // keep ref input visible, just change placeholder hint
  const src = document.getElementById('practiceSource').value;
  const refEl = document.getElementById('practiceRef');
  const hints = {
    '题库': '如 2025年第1题',
    '课本例题': '如 张宇30讲第5讲例3',
    '课后题': '如 张宇30讲第5讲课后第2题',
    '1000题': '如 1000题第1章第15题',
    '真题': '如 2024年第17题',
    '其他': '自定义标识'
  };
  refEl.placeholder = hints[src] || '题目标识';
}

function logPracticeFromBank(year, qnum) {
  switchModule('math-practice');
  setTimeout(() => {
    const srcEl = document.getElementById('practiceSource');
    const refEl = document.getElementById('practiceRef');
    if (srcEl) srcEl.value = '题库';
    if (refEl) refEl.value = year + '年第' + qnum + '题';
    if (refEl) refEl.focus();
  }, 100);
}

// 从题库卡片跳转到「4问练习记录」，按题集自动填好来源与题目标识
function logPracticeFromQid(qid) {
  const q = (_mathBank || []).find(x => x.id === qid);
  if (!q) { toast('未找到该题'); return; }
  logPracticeFromQuestion(q);
}

function logPracticeFromQuestion(q) {
  switchModule('math-practice');
  setTimeout(() => {
    const srcEl = document.getElementById('practiceSource');
    const refEl = document.getElementById('practiceRef');
    let src = '题库', ref = '';
    if (q.book === '30讲') { src = '30讲例题'; ref = '30讲 例' + q.qnum; }
    else if (q.book === '1000题') { src = '1000题'; ref = '1000题 ' + (q.chapter || '') + ' #' + q.qnum; }
    else { src = '题库'; ref = (q.year || '') + '年第' + q.qnum + '题'; }
    if (srcEl) srcEl.value = src;
    if (refEl) refEl.value = ref.trim();
    if (window.togglePracticeRefInput) togglePracticeRefInput();
    if (refEl) refEl.focus();
    toast('已填入来源与题号，勾好4问后点「记录本次练习」');
  }, 120);
}

// 题集来源切换：重建筛选栏（年份/知识点仅在真题下显示）
function setMBBook(book) {
  _mathBankFilter.book = book;
  _mathBankFilter.year = 'all';
  _mathBankFilter.point = 'all';
  _mathBankPage = 1;
  _mathBankFilterReady = false; // 强制重建筛选栏
  renderMathBank();
}

function addBankToWrong(year, qnum, type, chapter) {
  const wrongs = Store.get('mathWrong', []);
  const exists = wrongs.some(w => w.year === year && w.qnum === qnum);
  if (exists) { toast('已在错题本中'); return; }
  wrongs.unshift({
    id: uid(),
    year, qnum,
    type: type || '',
    chapter: chapter || '',
    note: '',
    time: now()
  });
  Store.set('mathWrong', wrongs);
  toast('已加入错题本');
}

// ===== 英语模块 =====
// ===== 英语模块 =====
modules['eng-course'] = (c) => {
  renderCourseModule(c, 'eng', {
    titleSuffix: '（英语一）',
    extraLinks: [{ name: '幕布知识点', url: 'https://mubu.com', icon: '🧠' }]
  });
};

modules['eng-vocab'] = (c) => { c.innerHTML = '<div class="empty-state"><div class="empty-state-text">单词背诵已移至墨墨背单词APP</div></div>'; };

// ----- 英语真题 -----
modules['eng-exam'] = (c) => {
  const types = [
    { id: 'cloze', name: '完形填空', score: 10, icon: '📝' },
    { id: 'reading', name: '阅读理解', score: 40, icon: '📖' },
    { id: 'newtype', name: '新题型', score: 10, icon: '🔀' },
    { id: 'translate', name: '翻译', score: 10, icon: '🌐' },
    { id: 'essay_big', name: '大作文', score: 20, icon: '✍️' },
    { id: 'essay_small', name: '小作文', score: 10, icon: '✏️' }
  ];
  const records = Store.get('engExams', {});

  c.innerHTML = `
    <div class="card">
      <div class="card-title">📑 真题资料库（按年份 × 题型）</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;line-height:1.6;">
        三套资料：<b>答案速查</b>（快速对答案）/ <b>真题解析及复习思路</b>（逐题详解）/ <b>逐词逐句精讲册</b>（逐句翻译）。
        本地版🖥️一点即开 PDF；云端/手机版请点 📋 复制路径，再到电脑资源管理器打开。
      </p>
      <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;align-items:center;">
        <span style="font-size:12px;color:var(--text-secondary);">视图：</span>
        <button class="btn btn-outline btn-sm ${_engExamView==='year'?'active':''}" onclick="_engExamView='year';renderEnglishExams()">📅 按年份</button>
        <button class="btn btn-outline btn-sm ${_engExamView==='type'?'active':''}" onclick="_engExamView='type';renderEnglishExams()">🗂️ 按题型</button>
      </div>
      <div id="engPdfList" style="display:flex;flex-direction:column;gap:10px;"></div>
    </div>
    <div class="card">
      <div class="card-title">✏️ 按题型记录练习</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;">
        按题型记录练习情况，满分100分。
      </p>
      <div class="stat-grid">
        ${types.map(t => {
          const r = records[t.id] || [];
          const done = r.length;
          const avg = done ? (r.reduce((s,x)=>s+x.score,0)/done).toFixed(1) : '--';
          return `
            <div class="stat-card" style="cursor:pointer;" onclick="switchEngType('${t.id}')">
              <div style="font-size:24px;margin-bottom:4px;">${t.icon}</div>
              <div style="font-size:13px;font-weight:600;">${t.name}</div>
              <div style="font-size:11px;color:var(--text-secondary);">满分 ${t.score}</div>
              <div style="margin-top:6px;">
                <span style="font-size:18px;font-weight:800;color:var(--primary);">${avg}</span>
                <span style="font-size:11px;color:var(--text-light);"> / ${t.score}（${done}套）</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    <div class="card" id="engTypeDetail"></div>
    <div class="card">
      <div class="card-title">🗂️ 自录题库（按知识点 / 题型分类）</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        自己录入的题目，按知识点和题型分类刷题。
      </p>
      <div id="engQBFilter"></div>
      <div style="margin-top:12px;">
        <button class="btn btn-primary" onclick="openEngQBEditor()">+ 添加题目</button>
      </div>
      <div id="engQBList" style="margin-top:12px;"></div>
    </div>
    <div class="card">
      <div class="card-title">📄 PDF详解</div>
      <p style="font-size:13px;color:var(--text-secondary);">后续在此添加PDF真题详解链接。</p>
    </div>
  `;

  // 加载英语真题 PDF
  loadEngPdfExams();
  renderEngQB();
};

// ===== 英语题库 =====
let _engQBFilter = { type: 'all', point: 'all' };

const ENG_Q_TYPES = [
  { id: 'cloze', name: '完形填空' },
  { id: 'reading', name: '阅读理解' },
  { id: 'newtype', name: '新题型' },
  { id: 'translate', name: '翻译' },
  { id: 'essay_big', name: '大作文' },
  { id: 'essay_small', name: '小作文' }
];

function renderEngQB() {
  const filterEl = document.getElementById('engQBFilter');
  if (!filterEl) return;
  const allQ = Store.get('engQB', []);
  const points = [...new Set(allQ.map(q => q.point).filter(Boolean))];

  filterEl.innerHTML = `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:8px;">
      <span style="font-size:12px;color:var(--text-secondary);">题型：</span>
      <button class="btn btn-outline btn-sm ${_engQBFilter.type==='all'?'active':''}" onclick="_engQBFilter.type='all';renderEngQB()" style="font-size:12px;">全部</button>
      ${ENG_Q_TYPES.map(t => `<button class="btn btn-outline btn-sm ${_engQBFilter.type===t.id?'active':''}" onclick="_engQBFilter.type='${t.id}';renderEngQB()" style="font-size:12px;">${t.name}</button>`).join('')}
    </div>
    ${points.length ? `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
      <span style="font-size:12px;color:var(--text-secondary);">知识点：</span>
      <button class="btn btn-outline btn-sm ${_engQBFilter.point==='all'?'active':''}" onclick="_engQBFilter.point='all';renderEngQB()" style="font-size:12px;">全部</button>
      ${points.map(p => `<button class="btn btn-outline btn-sm ${_engQBFilter.point===p?'active':''}" onclick="_engQBFilter.point='${p}';renderEngQB()" style="font-size:12px;">${p}</button>`).join('')}
    </div>` : ''}
  `;

  const el = document.getElementById('engQBList');
  if (!el) return;

  let list = allQ;
  if (_engQBFilter.type !== 'all') list = list.filter(q => q.type === _engQBFilter.type);
  if (_engQBFilter.point !== 'all') list = list.filter(q => q.point === _engQBFilter.point);

  if (!list.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">题库还是空的，点击「添加题目」开始录入</div></div>';
    return;
  }

  const typeName = (id) => (ENG_Q_TYPES.find(t => t.id === id) || {}).name || id;
  el.innerHTML = list.map(q => `
    <div class="knowledge-item" id="eq-${q.id}">
      <div style="display:flex;justify-content:space-between;align-items:start;gap:8px;">
        <div style="flex:1;min-width:0;">
          <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
            <span class="tag tag-blue">${typeName(q.type)}</span>
            ${q.point ? `<span class="tag tag-purple">${q.point}</span>` : ''}
            ${q.year ? `<span class="tag tag-green">${q.year}年</span>` : ''}
            ${q.done ? `<span class="tag tag-green">已做</span>` : ''}
          </div>
          <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${q.content}</div>
        </div>
        <div style="display:flex;gap:4px;flex-shrink:0;">
          <button class="btn btn-outline btn-sm" onclick="toggleEngQBAnswer('${q.id}')" style="font-size:12px;">${q._showAns ? '收起' : '答案'}</button>
          <button class="btn btn-outline btn-sm" onclick="toggleEngQBDone('${q.id}')" style="font-size:12px;">${q.done ? '撤销' : '完成'}</button>
          <button class="btn btn-outline btn-sm" onclick="editEngQB('${q.id}')" style="font-size:12px;">编辑</button>
          <button class="todo-delete" onclick="delEngQB('${q.id}')">✕</button>
        </div>
      </div>
      ${q._showAns && q.answer ? `
        <div style="margin-top:8px;padding:10px;background:var(--hover);border-radius:6px;font-size:13px;line-height:1.6;">
          <div style="font-weight:600;margin-bottom:4px;">答案</div>
          <div style="white-space:pre-wrap;">${q.answer}</div>
        </div>` : ''}
      ${q._showAns && q.explain ? `
        <div style="margin-top:8px;padding:10px;background:var(--hover);border-radius:6px;font-size:13px;line-height:1.6;">
          <div style="font-weight:600;margin-bottom:4px;">详解</div>
          <div style="white-space:pre-wrap;">${q.explain}</div>
        </div>` : ''}
    </div>
  `).join('');
}

function openEngQBEditor(id) {
  const editing = id ? Store.get('engQB').find(q => q.id === id) : null;
  const q = editing || { type: 'cloze', point: '', year: '', content: '', answer: '', explain: '' };

  modal(id ? '编辑题目' : '添加题目', `
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <div>
        <label style="font-size:12px;color:var(--text-secondary);">题型</label>
        <select class="select" id="eqbType" style="width:130px;">
          ${ENG_Q_TYPES.map(t => `<option value="${t.id}" ${q.type===t.id?'selected':''}>${t.name}</option>`).join('')}
        </select>
      </div>
      <div>
        <label style="font-size:12px;color:var(--text-secondary);">知识点</label>
        <input class="input" id="eqbPoint" value="${q.point||''}" placeholder="如：定语从句" style="width:130px;">
      </div>
      <div>
        <label style="font-size:12px;color:var(--text-secondary);">年份</label>
        <input class="input" id="eqbYear" value="${q.year||''}" placeholder="如：2022" style="width:100px;">
      </div>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:12px;color:var(--text-secondary);">题目内容</label>
      <textarea class="textarea" id="eqbContent" style="min-height:100px;" placeholder="输入或粘贴题目...">${q.content||''}</textarea>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:12px;color:var(--text-secondary);">答案</label>
      <textarea class="textarea" id="eqbAnswer" style="min-height:60px;" placeholder="答案（选填）">${q.answer||''}</textarea>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:12px;color:var(--text-secondary);">详解</label>
      <textarea class="textarea" id="eqbExplain" style="min-height:100px;" placeholder="详细解析（选填）">${q.explain||''}</textarea>
    </div>
  `, (m) => {
    const item = {
      type: m.querySelector('#eqbType').value,
      point: m.querySelector('#eqbPoint').value.trim(),
      year: m.querySelector('#eqbYear').value.trim(),
      content: m.querySelector('#eqbContent').value.trim(),
      answer: m.querySelector('#eqbAnswer').value.trim(),
      explain: m.querySelector('#eqbExplain').value.trim()
    };
    if (!item.content) { toast('请输入题目内容'); return true; }
    if (editing) {
      Object.assign(editing, item);
      Store.set('engQB', Store.get('engQB'));
    } else {
      item.id = uid();
      item.done = false;
      Store.push('engQB', item);
    }
    renderEngQB();
    return false;
  });
}

function editEngQB(id) { openEngQBEditor(id); }

function delEngQB(id) {
  Store.removeIn('engQB', id);
  renderEngQB();
}

function toggleEngQBAnswer(id) {
  const list = Store.get('engQB');
  const q = list.find(x => x.id === id);
  if (!q) return;
  q._showAns = !q._showAns;
  Store.set('engQB', list);
  renderEngQB();
}

function toggleEngQBDone(id) {
  const list = Store.get('engQB');
  const q = list.find(x => x.id === id);
  if (!q) return;
  q.done = !q.done;
  Store.set('engQB', list);
  renderEngQB();
}

let _engPdfData = null;
let _engExamView = 'year';

async function loadEngPdfExams() {
  if (!_engPdfData) {
    try {
      const res = await fetch('api/english_exams.json');
      _engPdfData = await res.json();
    } catch (e) {
      const el = document.getElementById('engPdfList');
      if (el) el.innerHTML = '<div class="empty-state-text">无法加载真题索引（请确认 api/english_exams.json 存在）</div>';
      return;
    }
  }
  renderEnglishExams();
}

function renderEnglishExams() {
  const el = document.getElementById('engPdfList');
  if (!el || !_engPdfData) return;
  const { sources, types, exams, yearList } = _engPdfData;
  if (_engExamView === 'year') {
    el.innerHTML = yearList.map(y => {
      const rec = exams[y] || {};
      const btns = sources.map(s => engSourceBtn(s, rec[s.id])).join('');
      return `<div class="eng-year-card">
        <div class="eng-year">${y} 年</div>
        <div class="eng-src-row">${btns}</div>
      </div>`;
    }).join('');
  } else {
    el.innerHTML = types.map(t => {
      const rows = yearList.map(y => {
        const rec = exams[y] || {};
        const btns = sources.map(s => engSourceBtn(s, rec[s.id])).join('');
        return `<div class="eng-type-year"><span class="eng-type-year-name">${y}</span><span class="eng-src-row">${btns}</span></div>`;
      }).join('');
      return `<div class="eng-type-card">
        <div class="eng-type-title">${t.name}（${t.score}分）</div>
        <div class="eng-type-hint">每套资料均含「${t.name}」，打开对应 PDF 后翻到该题型页（顺序：完形 → 阅读 → 新题型 → 翻译 → 小作文 → 大作文）</div>
        ${rows}
      </div>`;
    }).join('');
  }
}

// 生成单套资料的入口按钮（有路径→打开/复制；无路径→标记缺失）
function engSourceBtn(s, path) {
  if (!path) return `<span class="eng-src eng-missing">${s.name}<span style="font-size:10px;color:var(--text-light);margin-left:3px;">缺</span></span>`;
  const fileUrl = 'file:///' + path.replace(/\\/g, '/');
  const safe = path.replace(/'/g, "\\'");
  return `<span class="eng-src">
    <a class="btn btn-outline btn-sm" href="${fileUrl}" target="_blank" style="text-decoration:none;font-size:12px;">${s.name}</a>
    <button class="btn btn-ghost btn-sm" onclick="copyText('${safe}')" title="复制本地路径">📋</button>
  </span>`;
}

// ===== 英语内置题库（从PDF提取） =====
let _engBank = null;
let _engBankFilter = { year: 'all', type: 'all' };

async function loadEngBank() {
  const filterEl = document.getElementById('engBankFilter');
  const listEl = document.getElementById('engBankList');
  if (!filterEl || !listEl) return;

  if (!_engBank) {
    filterEl.innerHTML = '<div class="empty-state-text">加载中...</div>';
    try {
      const res = await fetch('/api/eng-questions');
      const data = await res.json();
      _engBank = data.questions || [];
    } catch (e) {
      filterEl.innerHTML = '';
      listEl.innerHTML = '<div class="empty-state"><div class="empty-state-text">无法加载题库数据</div></div>';
      return;
    }
  }

  const years = [...new Set(_engBank.map(q => q.year))].sort((a, b) => b - a);
  const types = [...new Set(_engBank.map(q => q.type))];

  const typeName = (id) => {
    const names = { cloze: '完形填空', reading: '阅读理解', newtype: '新题型', translate: '翻译', essay_big: '大作文', essay_small: '小作文' };
    return names[id] || id;
  };

  filterEl.innerHTML = `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:8px;">
      <span style="font-size:12px;color:var(--text-secondary);">年份：</span>
      <button class="btn btn-outline btn-sm ${_engBankFilter.year==='all'?'active':''}" onclick="_engBankFilter.year='all';loadEngBank()" style="font-size:12px;">全部</button>
      ${years.map(y => `<button class="btn btn-outline btn-sm ${_engBankFilter.year===y?'active':''}" onclick="_engBankFilter.year='${y}';loadEngBank()" style="font-size:12px;">${y}</button>`).join('')}
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
      <span style="font-size:12px;color:var(--text-secondary);">题型：</span>
      <button class="btn btn-outline btn-sm ${_engBankFilter.type==='all'?'active':''}" onclick="_engBankFilter.type='all';loadEngBank()" style="font-size:12px;">全部</button>
      ${types.map(t => `<button class="btn btn-outline btn-sm ${_engBankFilter.type===t?'active':''}" onclick="_engBankFilter.type='${t}';loadEngBank()" style="font-size:12px;">${typeName(t)}</button>`).join('')}
    </div>
  `;

  let list = _engBank;
  if (_engBankFilter.year !== 'all') list = list.filter(q => q.year === _engBankFilter.year);
  if (_engBankFilter.type !== 'all') list = list.filter(q => q.type === _engBankFilter.type);

  if (!list.length) {
    listEl.innerHTML = '<div class="empty-state"><div class="empty-state-text">没有符合条件的题目</div></div>';
    return;
  }

  const doneSet = new Set(Store.get('engBankDone', []));
  listEl.innerHTML = list.map(q => {
    const isDone = doneSet.has(q.id);
    return `
      <div class="knowledge-item">
        <div style="display:flex;justify-content:space-between;align-items:start;gap:8px;">
          <div style="flex:1;min-width:0;">
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
              <span class="tag tag-blue">${typeName(q.type)}</span>
              <span class="tag tag-green">${q.year}年</span>
              <span class="tag tag-purple">第${q.qnum}题</span>
              ${isDone ? '<span class="tag tag-green">已做</span>' : ''}
            </div>
            <div style="font-size:13px;line-height:1.6;white-space:pre-wrap;max-height:300px;overflow-y:auto;padding:8px;background:var(--hover);border-radius:6px;">${q.content}</div>
            <div id="engAns-${q.id}" style="display:none;margin-top:8px;padding:8px;background:#e8f5e9;border-radius:6px;font-size:13px;line-height:1.6;white-space:pre-wrap;">
              <strong>答案：</strong>${q.answer}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0;">
            <button class="btn btn-outline btn-sm" onclick="toggleEngBankAns('${q.id}')" style="font-size:12px;">答案</button>
            <button class="btn btn-outline btn-sm" onclick="toggleEngBankDone('${q.id}')" style="font-size:12px;">${isDone?'撤销':'完成'}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleEngBankAns(id) {
  const el = document.getElementById('engAns-' + id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function toggleEngBankDone(id) {
  const done = Store.get('engBankDone', []);
  const idx = done.indexOf(id);
  if (idx >= 0) done.splice(idx, 1);
  else done.push(id);
  Store.set('engBankDone', done);
  loadEngBank();
}

let currentEngType = null;
function switchEngType(typeId) {
  currentEngType = typeId;
  const types = {
    'cloze': { name: '完形填空', score: 10 },
    'reading': { name: '阅读理解', score: 40 },
    'newtype': { name: '新题型', score: 10 },
    'translate': { name: '翻译', score: 10 },
    'essay_big': { name: '大作文', score: 20 },
    'essay_small': { name: '小作文', score: 10 }
  };
  const t = types[typeId];
  const records = Store.get('engExams', {});
  const list = records[typeId] || [];

  const detail = document.getElementById('engTypeDetail');
  detail.innerHTML = `
    <div class="card-title">${t.name} 练习记录</div>
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <input class="input" id="engYear" placeholder="年份（如：2024）" style="width:120px;">
      <input class="input" id="engScore" type="number" placeholder="得分" max="${t.score}" style="width:100px;">
      <input class="input" id="engNote" placeholder="备注（选填）" style="flex:1;">
      <button class="btn btn-primary" onclick="addEngRecord('${typeId}', ${t.score})">记录</button>
    </div>
    <div>
      ${list.length ? list.map(r => `
        <div class="todo-item">
          <span style="flex:1;font-size:13px;">${r.year}年 ${t.name}</span>
          <span style="font-weight:700;color:var(--primary);">${r.score}/${t.score}</span>
          ${r.note ? `<span style="font-size:12px;color:var(--text-secondary);margin-left:8px;">${r.note}</span>` : ''}
          <button class="todo-delete" onclick="delEngRecord('${typeId}','${r.id}')">✕</button>
        </div>
      `).join('') : '<div class="empty-state"><div class="empty-state-text">暂无记录</div></div>'}
    </div>
  `;
}

function addEngRecord(typeId, maxScore) {
  const year = document.getElementById('engYear').value.trim();
  const score = parseFloat(document.getElementById('engScore').value);
  const note = document.getElementById('engNote').value.trim();
  if (!year || isNaN(score)) { toast('请填写年份和得分'); return; }
  if (score > maxScore) { toast(`得分不能超过${maxScore}`); return; }
  const records = Store.get('engExams', {});
  if (!records[typeId]) records[typeId] = [];
  records[typeId].push({ id: uid(), year, score, note });
  Store.set('engExams', records);
  switchEngType(typeId);
  // 刷新统计
  modules['eng-exam'](document.getElementById('content'));
  switchEngType(typeId);
}

function delEngRecord(typeId, id) {
  const records = Store.get('engExams', {});
  records[typeId] = records[typeId].filter(x => x.id !== id);
  Store.set('engExams', records);
  switchEngType(typeId);
  modules['eng-exam'](document.getElementById('content'));
  switchEngType(typeId);
}

// ----- 英语AI作文批改 -----
modules['eng-essay'] = (c) => {
  c.innerHTML = `
    <div class="card">
      <div class="card-title">✍️ AI 考研作文批改</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        选择作文类型，粘贴你的作文，AI会按考研评分标准批改。
      </p>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">作文类型</label>
        <select class="select" id="essayType" style="max-width:200px;">
          <option value="大作文">大作文（图画作文 20分）</option>
          <option value="小作文">小作文（应用文 10分）</option>
        </select>
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">题目/要求（选填）</label>
        <input class="input" id="essayTopic" placeholder="如：2024年考研英语一大作文题目...">
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">你的作文</label>
        <textarea class="textarea" id="essayContent" placeholder="在此粘贴你的英语作文..." style="min-height:160px;line-height:1.8;"></textarea>
      </div>
      <div id="essayAiBox"></div>
    </div>
  `;

  renderEssayPrompt();
  ['essayType','essayTopic','essayContent'].forEach(id => {
    document.getElementById(id).oninput = renderEssayPrompt;
  });
};

function renderEssayPrompt() {
  const type = document.getElementById('essayType').value;
  const topic = document.getElementById('essayTopic').value || '（未填写题目）';
  const content = document.getElementById('essayContent').value || '（未填写作文）';

  const prompt = `请作为考研英语阅卷老师，批改以下考研英语${type}作文。

题目/要求：${topic}

我的作文：
"""
${content}
"""

请按考研评分标准给出：
1. 得分（${type === '大作文' ? '满分20' : '满分10'}分）
2. 评分理由（内容、语言、结构三个维度）
3. 语法错误标注（逐句指出并改正）
4. 词汇/句式提升建议
5. 改写后的高分范文`;

  document.getElementById('essayAiBox').innerHTML = aiPromptBox(
    '一键批改',
    '点击按钮跳转到AI，Prompt会自动复制到剪贴板，粘贴即可批改。',
    prompt
  );
}

// ===== 番茄钟 =====
// [v2/T11] 计时器迁移到 TimerBus 的 global: 作用域（ARCH §1.3-3）：
//   - switchModule 首行只清 'view:'，因此番茄钟可跨模块存活
//   - pomoTimer 退化为「是否在运行」的布尔标记，不再持有 setInterval 句柄
/** [v2/T11] TimerBus 中番茄钟的固定名字（global 作用域，跨模块存活） */
const POMO_TIMER_KEY = 'global:pomodoro';
let pomoTimer = false;
let pomoSeconds = 25 * 60;
let pomoMode = 'work'; // work / break
let pomoCount = 0;
let pomoWorkMin = 25;
let pomoBreakMin = 5;
let pomoTask = ''; // 当前专注任务
let pomoDir = 'down'; // 'down' 倒计时 / 'up' 正计时
let pomoStarted = false; // 本次计时是否已开始（用于正计时重置时记录时长）

modules['pomodoro'] = (c) => {
  const todayRecords = Store.getByDate('pomodoro', currentDate) || { count: 0, total: 0, sessions: [] };

  c.innerHTML = `
    <div class="card" style="text-align:center;">
      <div class="card-title">🍅 番茄钟</div>
      <div id="pomoDisplay" style="font-size:72px;font-weight:800;color:var(--primary);font-variant-numeric:tabular-nums;margin:20px 0;">${pomoWorkMin}:00</div>
      <div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;" id="pomoStatus">准备开始专注</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;">
        <button class="btn btn-primary" id="pomoStartBtn" onclick="pomoStart()">▶ 开始</button>
        <button class="btn btn-outline" id="pomoPauseBtn" onclick="pomoPause()">⏸ 暂停</button>
        <button class="btn btn-outline" onclick="pomoReset()">🔄 重置</button>
      </div>
      <div style="display:flex;gap:6px;justify-content:center;margin-bottom:16px;">
        <button class="btn btn-outline btn-sm" onclick="pomoAdjust(-5)">−5分</button>
        <button class="btn btn-outline btn-sm" onclick="pomoAdjust(-1)">−1分</button>
        <button class="btn btn-outline btn-sm" onclick="pomoAdjust(1)">+1分</button>
        <button class="btn btn-outline btn-sm" onclick="pomoAdjust(5)">+5分</button>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;align-items:center;margin-bottom:12px;">
        <button class="btn btn-outline btn-sm ${pomoDir==='down'?'active':''}" id="pomoDirDown" onclick="pomoSetDir('down')">⏬ 倒计时</button>
        <button class="btn btn-outline btn-sm ${pomoDir==='up'?'active':''}" id="pomoDirUp" onclick="pomoSetDir('up')">⏫ 正计时</button>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;align-items:center;margin-bottom:12px;">
        <button class="btn btn-outline btn-sm ${pomoMode==='work'?'active':''}" id="pomoModeWork" onclick="pomoSetMode('work')">专注</button>
        <button class="btn btn-outline btn-sm ${pomoMode==='break'?'active':''}" id="pomoModeBreak" onclick="pomoSetMode('break')">休息</button>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;align-items:center;margin-bottom:16px;">
        <label style="font-size:13px;color:var(--text-secondary);">专注</label>
        <input type="number" id="pomoWorkInput" value="${pomoWorkMin}" min="1" max="120" style="width:56px;text-align:center;" class="input" onchange="pomoUpdateTime('work',this.value)"> <span style="font-size:13px;color:var(--text-secondary);">分钟</span>
        <label style="font-size:13px;color:var(--text-secondary);margin-left:8px;">休息</label>
        <input type="number" id="pomoBreakInput" value="${pomoBreakMin}" min="1" max="60" style="width:56px;text-align:center;" class="input" onchange="pomoUpdateTime('break',this.value)"> <span style="font-size:13px;color:var(--text-secondary);">分钟</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">📝 当前专注内容</div>
      <input class="input" id="pomoTaskInput" placeholder="这段时间在干什么？（如：高数极限练习）" value="${pomoTask}" oninput="pomoTask=this.value" style="margin-bottom:12px;">
      <p style="font-size:12px;color:var(--text-light);">开始前填写，专注完成后会自动记录到这里</p>
    </div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-value" id="pomoStatCount">${todayRecords.count}</div><div class="stat-label">今日番茄数</div></div>
      <div class="stat-card"><div class="stat-value" id="pomoStatTotal">${todayRecords.total}</div><div class="stat-label">今日专注分钟</div></div>
    </div>
    <div class="card">
      <div class="card-title">📋 今日专注记录</div>
      <div id="pomoSessions"></div>
    </div>
    <div class="card">
      <div class="card-title">📊 最近7天</div>
      <div id="pomoHistory"></div>
    </div>
  `;

  renderPomoSessions(todayRecords.sessions || []);
  renderPomoHistory();
};

function pomoUpdateTime(mode, val) {
  val = parseInt(val) || 1;
  if (val < 1) val = 1;
  if (mode === 'work') {
    pomoWorkMin = val;
    if (pomoMode === 'work' && !pomoTimer) {
      pomoSeconds = val * 60;
      updatePomoDisplay();
    }
  } else {
    pomoBreakMin = val;
    if (pomoMode === 'break' && !pomoTimer) {
      pomoSeconds = val * 60;
      updatePomoDisplay();
    }
  }
}

/**
 * [v2/T11] 启动番茄钟。走 TimerBus('global:pomodoro')，切换模块不会被回收。
 * @returns {void}
 */
function pomoStart() {
  if (pomoTimer) return;
  pomoTimer = true;
  pomoStarted = true;
  TimerBus.set(POMO_TIMER_KEY, pomoTick, 1000);
  const status = document.getElementById('pomoStatus');
  if (status) status.textContent = pomoDir === 'up'
    ? (pomoMode === 'work' ? '计时中...' : '休息计时中...')
    : (pomoMode === 'work' ? '专注中...' : '休息中...');
  pomoRenderAll();
}

/**
 * [v2/T11] 番茄钟每秒回调。抽成具名函数，方便 TimerBus 复用与单测。
 * @returns {void}
 */
function pomoTick() {
  if (pomoDir === 'up') {
    // 正计时：累加，无自动结束
    pomoSeconds++;
    pomoRenderAll();
  } else {
    // 倒计时：递减，归零自动完成
    pomoSeconds--;
    pomoRenderAll();
    if (pomoSeconds <= 0) pomoFinish();
  }
}

/**
 * [v2/T11] 暂停番茄钟（保留剩余秒数）。
 * @returns {void}
 */
function pomoPause() {
  if (!pomoTimer) return;
  TimerBus.clear(POMO_TIMER_KEY);
  pomoTimer = false;
  const status = document.getElementById('pomoStatus');
  if (status) status.textContent = '已暂停';
}

/**
 * [v2/T11] 重置番茄钟到当前模式的满时长。
 * @returns {void}
 */
function pomoReset() {
  TimerBus.clear(POMO_TIMER_KEY);
  pomoTimer = false;
  // 正计时模式下，重置前若已计时则记录本次时长
  if (pomoDir === 'up' && pomoSeconds > 0 && pomoStarted) {
    recordPomoSession(Math.max(1, Math.round(pomoSeconds / 60)));
  }
  pomoStarted = false;
  // 倒计时：重置回当前模式满时长；正计时：归零重新计时
  pomoSeconds = pomoDir === 'down'
    ? (pomoMode === 'work' ? pomoWorkMin * 60 : pomoBreakMin * 60)
    : 0;
  pomoRenderAll();
  const status = document.getElementById('pomoStatus');
  if (status) status.textContent = pomoDir === 'down'
    ? (pomoMode === 'work' ? '准备开始专注' : '准备休息')
    : '准备开始计时';
}

/**
 * [v2/T11] 切换番茄钟模式。
 * 原实现用 document.querySelectorAll('.btn-sm') 全局扫描并按文案匹配，
 * 会误伤其它模块的同类按钮（§6.8 红线）；改为按固定 id 精确定位。
 * @param {'work'|'break'} mode
 * @returns {void}
 */
function pomoSetMode(mode) {
  pomoMode = mode;
  pomoReset();
  const wEl = document.getElementById('pomoModeWork');
  const bEl = document.getElementById('pomoModeBreak');
  if (wEl) wEl.classList.toggle('active', mode === 'work');
  if (bEl) bEl.classList.toggle('active', mode === 'break');
}

/** 切换倒计时/正计时方向（切换即重置计时） */
function pomoSetDir(dir) {
  pomoDir = dir;
  pomoReset();
  const dEl = document.getElementById('pomoDirDown');
  const uEl = document.getElementById('pomoDirUp');
  if (dEl) dEl.classList.toggle('active', dir === 'down');
  if (uEl) uEl.classList.toggle('active', dir === 'up');
}

/** 手动调整当前计时（±分钟，运行中/暂停时均可），下限 0 */
function pomoAdjust(deltaMin) {
  pomoSeconds = Math.max(0, pomoSeconds + deltaMin * 60);
  pomoRenderAll();
  if (currentModule === 'dashboard') renderDashPomoHistory();
}

/** 记录一次专注时段到今日统计与历史（倒计时完成 / 正计时重置时共用） */
function recordPomoSession(mins, msg) {
  const data = Store.getByDate('pomodoro', currentDate) || { count: 0, total: 0, sessions: [] };
  data.count++;
  data.total += mins;
  data.sessions = data.sessions || [];
  data.sessions.unshift({
    task: pomoTask || '未记录',
    minutes: mins,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  });
  Store.setByDate('pomodoro', currentDate, data);
  pomoCount++;
  toast(msg || `🎉 已记录 ${mins} 分钟专注！`);
  if (currentModule === 'pomodoro') {
    renderPomoSessions(data.sessions || []);
    renderPomoHistory();
    renderPomoStat(data);
  }
  if (currentModule === 'dashboard') renderDashPomoHistory();
}

function pomoFinish() {
  TimerBus.clear(POMO_TIMER_KEY);
  pomoTimer = false;
  if (pomoMode === 'work') {
    recordPomoSession(pomoWorkMin, '🎉 专注完成！休息一下~');
    pomoMode = 'break';
  } else {
    toast('休息结束，继续专注！');
    pomoMode = 'work';
  }
  pomoSeconds = pomoMode === 'work' ? pomoWorkMin * 60 : pomoBreakMin * 60;
  updatePomoDisplay();
  updateDashPomoDisplay();
  const wEl = document.getElementById('pomoModeWork');
  const bEl = document.getElementById('pomoModeBreak');
  if (wEl) wEl.classList.toggle('active', pomoMode === 'work');
  if (bEl) bEl.classList.toggle('active', pomoMode === 'break');
  if (currentModule === 'pomodoro') {
    const status = document.getElementById('pomoStatus');
    if (status) status.textContent = pomoMode === 'work' ? '准备开始专注' : '准备休息';
  }
  if (currentModule === 'dashboard') renderDashPomoHistory();
}

/**
 * [v2/T11] 局部刷新番茄钟模块页的两个统计卡片（替代整页 switchModule 重建）。
 * @param {{count:number,total:number}} rec 今日番茄记录
 * @returns {void}
 */
function renderPomoStat(rec) {
  const cEl = document.getElementById('pomoStatCount');
  const tEl = document.getElementById('pomoStatTotal');
  if (cEl) cEl.textContent = String(rec.count || 0);
  if (tEl) tEl.textContent = String(rec.total || 0);
}

function updatePomoDisplay() {
  const m = Math.floor(pomoSeconds / 60);
  const s = pomoSeconds % 60;
  const display = document.getElementById('pomoDisplay');
  if (display) display.textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  // 悬浮窗
  const float = document.getElementById('pomoTime');
  if (float) float.textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// 统一刷新所有番茄钟显示：模块页 + 悬浮窗 + 看板，保证多入口倒计时同步
function pomoRenderAll() {
  updatePomoDisplay();
  updateDashPomoDisplay();
}

function renderPomoSessions(sessions) {
  const el = document.getElementById('pomoSessions');
  if (!el) return;
  if (!sessions || !sessions.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--text-light);text-align:center;padding:12px;">今天还没有完成番茄钟</p>';
    return;
  }
  el.innerHTML = sessions.map(s => `
    <div style="display:flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;">
      <span style="font-size:18px;">🍅</span>
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:600;">${s.task}</div>
        <div style="font-size:11px;color:var(--text-light);">${s.time} · ${s.minutes}分钟</div>
      </div>
    </div>
  `).join('');
}

function renderPomoHistory() {
  const all = Store.get('pomodoro', {});
  const days = Object.keys(all).sort().reverse().slice(0, 7);
  const el = document.getElementById('pomoHistory');
  if (!el) return;
  if (!days.length) { el.innerHTML = '<div class="empty-state"><div class="empty-state-text">暂无记录</div></div>'; return; }
  el.innerHTML = days.map(d => {
    const r = all[d];
    const sessionCount = (r.sessions || []).length;
    return `
    <div class="todo-item">
      <span style="flex:1;font-size:13px;">${d}</span>
      <span style="font-size:14px;font-weight:600;">🍅 ${r.count}个 / ${r.total}分钟</span>
    </div>
  `;}).join('');
}

// ===== 备忘录 =====
modules['memo'] = (c) => {
  c.innerHTML = `
    <div class="card">
      <div class="card-title">📌 备忘录</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="memoInput" placeholder="随手记点什么..." onkeypress="if(event.key==='Enter')addMemo()">
        <button class="btn btn-primary" onclick="addMemo()">添加</button>
      </div>
      <div id="memoList"></div>
    </div>
  `;
  renderMemoList();
};

function addMemo() {
  const text = document.getElementById('memoInput').value.trim();
  if (!text) return;
  Store.push('memos', { id: uid(), text, time: now() });
  document.getElementById('memoInput').value = '';
  renderMemoList();
}

function renderMemoList() {
  const items = Store.get('memos', []).reverse();
  const el = document.getElementById('memoList');
  if (!items.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📌</div><div class="empty-state-text">还没有备忘，随手记点什么~</div></div>';
    return;
  }
  el.innerHTML = items.map(item => `
    <div class="memo-item">
      <div class="memo-text">${item.text}</div>
      <div class="memo-date">${fmtDate(item.time)}</div>
      <button class="memo-delete" onclick="delMemo('${item.id}')">✕</button>
    </div>
  `).join('');
}

function delMemo(id) {
  Store.removeIn('memos', id);
  renderMemoList();
}

// ===== 初始化 =====
function init() {
  // [v2/T03] 数据迁移：必须在任何模块渲染之前执行，且失败不阻塞启动
  try {
    const mg = migrateV1toV2();
    if (mg.migrated) {
      console.info('[init] 数据已升级到 v' + mg.to, mg.log);
      setTimeout(() => toast('数据已升级到 v2'), 400);
    } else if (mg.error) {
      console.warn('[init] 迁移未完成：', mg.error);
    }
  } catch (e) {
    console.error('[init] 迁移异常，已跳过，应用继续启动', e);
  }

  // 导航点击
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // 外部链接（AI助手）
      if (item.classList.contains('nav-external')) {
        e.preventDefault();
        window.open(item.dataset.url, '_blank');
        return;
      }
      // 子菜单展开/折叠
      if (item.classList.contains('nav-parent')) {
        e.preventDefault();
        item.classList.toggle('collapsed');
        const sub = document.getElementById(item.dataset.toggle);
        if (sub) sub.classList.toggle('collapsed');
        return;
      }
      e.preventDefault();
      switchModule(item.dataset.module);
    });
  });

  // 侧边栏折叠
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
  });

  // 移动端菜单
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.add('show');
    document.getElementById('overlay').classList.add('show');
  });
  document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
  });

  // 倒计时
  updateCountdown();

  // 励志语
  renderQuoteBar();

  // 云端同步
  document.getElementById('syncBtn').addEventListener('click', openSyncPanel);

  // AI 设置
  const aiBtn = document.getElementById('aiSettingsBtn');
  if (aiBtn) aiBtn.addEventListener('click', () => openAISettings(() => {
    if (currentModule === 'study-planner') switchModule('study-planner');
  }));

  // 导出
  document.getElementById('exportBtn').addEventListener('click', () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // 排除含密钥的配置，避免备份文件外泄导致凭据泄露
      if (key.startsWith('ky_') && !['ky_syncConfig', 'ky_aiConfig'].includes(key)) {
        data[key] = JSON.parse(localStorage.getItem(key));
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `考研工作台_备份_${today()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast('数据已导出');
  });

  // 导入
  document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
  });
  document.getElementById('importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        for (const key in data) {
          if (key.startsWith('ky_')) {
            localStorage.setItem(key, JSON.stringify(data[key]));
          }
        }
        toast('数据已导入');
        switchModule(currentModule);
      } catch {
        toast('导入失败，文件格式错误');
      }
    };
    reader.readAsText(file);
  });

  // 默认加载今日看板
  switchModule('dashboard');
}

// 番茄钟悬浮窗控制
document.addEventListener('DOMContentLoaded', () => {
  init();
  // 悬浮窗按钮（这些按钮仅在进入番茄钟模块后才存在于 DOM，故判空绑定）
  const startEl = document.getElementById('pomoStart');
  const pauseEl = document.getElementById('pomoPause');
  const resetEl = document.getElementById('pomoReset');
  if (startEl) startEl.addEventListener('click', pomoStart);
  if (pauseEl) pauseEl.addEventListener('click', pomoPause);
  if (resetEl) resetEl.addEventListener('click', pomoReset);
  updatePomoDisplay();
});

// ===== 云端同步功能 =====

function openSyncPanel() {
  const cfg = CloudSync.getConfig();
  const enabled = CloudSync.isEnabled();

  modal('☁️ 云端同步', `
    <div style="margin-bottom:16px;padding:12px;background:var(--bg-secondary);border-radius:8px;font-size:13px;color:var(--text-secondary);line-height:1.6;">
      <b>同步说明：</b><br>
      • 通过 GitHub 仓库存储数据，所有设备访问同一份<br>
      • 手机/平板/电脑用同一个同步码即可同步<br>
      • 数据包括：学习目标、错题本、知识点进度、背诵记录等<br>
      • 本地数据不会被删除，同步是合并而非覆盖
    </div>

    <div id="syncStatus">
      ${enabled ? `
        <div style="padding:10px 14px;background:#e8f5e9;border-radius:8px;margin-bottom:12px;font-size:13px;">
          ✅ 同步已开启 · 同步码: <b>${cfg.roomId}</b>
        </div>
      ` : `
        <div style="padding:10px 14px;background:var(--bg-secondary);border-radius:8px;margin-bottom:12px;font-size:13px;color:var(--text-secondary);">
          ⚠️ 同步未开启，请填写下方信息
        </div>
      `}
    </div>

    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">GitHub Token</label>
    <input class="input" id="syncToken" placeholder="ghp_xxxxx..." value="${cfg?.token || ''}" style="margin-bottom:12px;width:100%;font-size:13px;">
    <div style="font-size:11px;color:var(--text-light);margin-bottom:12px;">
      从 github.com/settings/tokens 创建，勾选 repo 权限
    </div>

    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">同步码（自定义，所有设备用同一个）</label>
    <input class="input" id="syncRoomId" placeholder="如: kaoyan2027" value="${cfg?.roomId || ''}" style="margin-bottom:16px;width:100%;font-size:13px;">

    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="saveSyncConfig()" style="flex:1;min-width:100px;">保存配置</button>
      ${enabled ? `
        <button class="btn btn-outline" onclick="doSync('merge')" style="flex:1;min-width:100px;">🔄 智能同步</button>
        <button class="btn btn-outline" onclick="doSync('push')" style="flex:1;min-width:100px;">⬆️ 上传本地</button>
        <button class="btn btn-outline" onclick="doSync('pull')" style="flex:1;min-width:100px;">⬇️ 拉取云端</button>
        <button class="btn btn-outline" onclick="closeSyncModal()" style="flex:1;min-width:100px;color:#e74c3c;">关闭</button>
      ` : ''}
    </div>

    <div id="syncResult" style="margin-top:12px;font-size:13px;"></div>
  `, null, true);
}

// 关闭同步弹窗（不执行确认）
function closeSyncModal() {
  const m = document.querySelector('.modal-overlay');
  if (m) m.remove();
}

function saveSyncConfig() {
  const token = document.getElementById('syncToken').value.trim();
  const roomId = document.getElementById('syncRoomId').value.trim();
  if (!token || !roomId) {
    toast('请填写 Token 和同步码');
    return;
  }
  CloudSync.setConfig({ token, roomId });
  toast('✅ 同步配置已保存');
  closeSyncModal();
  setTimeout(() => openSyncPanel(), 300);
}

async function doSync(mode) {
  const resultEl = document.getElementById('syncResult');
  if (!resultEl) return;

  resultEl.innerHTML = '<span style="color:var(--text-secondary);">⏳ 同步中...</span>';

  try {
    // 确保分支存在
    await CloudSync.ensureBranch();

    // 拉取云端数据
    const cloud = await CloudSync.pull();
    const localData = CloudSync.collectLocal();

    if (mode === 'pull') {
      // 仅拉取：用云端覆盖本地
      if (!cloud) {
        resultEl.innerHTML = '<span style="color:#e67e22;">⚠️ 云端暂无数据</span>';
        return;
      }
      CloudSync.applyToLocal(cloud.data);
      Store.set('lastSyncTime', Date.now());
      resultEl.innerHTML = `<span style="color:#27ae60;">✅ 已从云端拉取 ${Object.keys(cloud.data).length} 项数据</span>`;
      setTimeout(() => { closeSyncModal(); switchModule(currentModule); }, 1500);

    } else if (mode === 'push') {
      // 仅上传：用本地覆盖云端
      const sha = await CloudSync.push(localData, cloud?.sha);
      Store.set('lastSyncTime', Date.now());
      resultEl.innerHTML = `<span style="color:#27ae60;">✅ 已上传 ${Object.keys(localData).length} 项数据到云端</span>`;
      setTimeout(() => closeSyncModal(), 1500);

    } else if (mode === 'merge') {
      // 智能合并
      let mergedData;
      if (cloud) {
        // 合并策略：云端有的 + 本地有的，全部保留
        mergedData = { ...cloud.data };
        for (const key in localData) {
          if (!(key in mergedData) || JSON.stringify(localData[key]) !== JSON.stringify(mergedData[key])) {
            // 本地有更新或新增，用本地
            mergedData[key] = localData[key];
          }
        }
      } else {
        mergedData = localData;
      }

      // 推送合并后的数据
      const sha = await CloudSync.push(mergedData, cloud?.sha);
      // 同时更新本地
      CloudSync.applyToLocal(mergedData);
      Store.set('lastSyncTime', Date.now());

      const totalKeys = Object.keys(mergedData).length;
      resultEl.innerHTML = `<span style="color:#27ae60;">✅ 同步完成！共 ${totalKeys} 项数据</span>`;
      setTimeout(() => { closeSyncModal(); switchModule(currentModule); }, 1500);
    }
  } catch (err) {
    resultEl.innerHTML = `<span style="color:#e74c3c;">❌ ${err.message}</span>`;
  }
}
