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
  el.innerHTML = items.reverse().map(q => `
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
  SECRET_KEYS: ['ky_syncConfig', 'ky_aiConfig'],

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
const today = () => new Date().toISOString().slice(0, 10);
const now = () => new Date().toISOString();
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
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

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// ===== 状态 =====
let currentModule = 'review';
let currentDate = today();

// ===== 导航 =====
function switchModule(name) {
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
let dashClockInterval = null;

modules['dashboard'] = (c) => {
  const examDate = Store.get('examDate', '2026-12-21');
  const days = daysUntil(examDate);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const yImproves = Store.getByDate('improve', yesterday);
  const improveItems = (yImproves && yImproves.items) ? yImproves.items : [];
  const todoData = Store.getByDate('todo', currentDate) || { items: [] };

  c.innerHTML = `
    <div class="dash-clock">
      <div class="dash-clock-date" id="dashDate"></div>
      <div class="dash-clock-time" id="dashTime">00:00:00</div>
      <div class="dash-clock-countdown">距离考研还有 ${days} 天 · ${examDate}</div>
    </div>
    <div class="dash-grid">
      <!-- 左上：昨日待改进 -->
      <div class="dash-panel">
        <div class="dash-panel-title">⚠️ 昨日待改进</div>
        <div class="dash-panel-body" id="dashImprove">
          ${improveItems.length ? improveItems.map(i => `
            <div style="padding:4px 0;font-size:13px;border-bottom:1px solid var(--border);">
              ${i.text}
            </div>
          `).join('') : '<div class="empty-state"><div class="empty-state-text">昨日无待改进项</div></div>'}
        </div>
      </div>
      <!-- 右上：每日目标填写 -->
      <div class="dash-panel">
        <div class="dash-panel-title">✅ 每日目标</div>
        <div style="display:flex;gap:6px;margin-bottom:8px;">
          <input class="input" id="dashTodoInput" placeholder="添加今日目标..." onkeypress="if(event.key==='Enter')addDashTodo()" style="flex:1;font-size:13px;">
          <button class="btn btn-primary btn-sm" onclick="addDashTodo()">+</button>
        </div>
        <div style="font-size:11px;color:var(--text-secondary);margin-bottom:6px;">
          💡 可在「复习规划师」生成方案后点击"同步到今日目标"
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

  // 实时时钟
  updateDashClock();
  if (dashClockInterval) clearInterval(dashClockInterval);
  dashClockInterval = setInterval(updateDashClock, 1000);

  renderDashTodo(todoData.items);
  updateDashPomoDisplay();
  renderDashPomoHistory();
};

function updateDashClock() {
  const now = new Date();
  const weekdays = ['周日','周一','周二','周三','周四','周五','周六'];
  const dateStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${weekdays[now.getDay()]}`;
  const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  const dEl = document.getElementById('dashDate');
  const tEl = document.getElementById('dashTime');
  if (dEl) dEl.textContent = dateStr;
  if (tEl) tEl.textContent = timeStr;
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
        <span class="dash-todo-text">${item.text}</span>
        ${item.source === 'ai' ? '<span class="dash-todo-source">AI</span>' : ''}
        <button class="todo-delete" onclick="delDashTodo('${item.id}')">✕</button>
      </div>
    `).join('') || '<div style="color:var(--text-light);font-size:12px;padding:8px 0;">全部完成！🎉</div>';
  }
  // 右下：看板（全部，已完成的有划线）
  if (kanbanEl) {
    kanbanEl.innerHTML = items.map(item => `
      <div class="dash-todo-item ${item.done ? 'done' : ''}">
        <input type="checkbox" class="dash-todo-checkbox" ${item.done ? 'checked' : ''} onclick="toggleDashTodo('${item.id}')">
        <span class="dash-todo-text">${item.text}</span>
        ${item.source === 'ai' ? '<span class="dash-todo-source">AI</span>' : ''}
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
  if (mEl) mEl.textContent = pomoMode === 'work' ? '专注模式' : '休息模式';
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

// ===== 复习规划师模块（接入WorkBuddy考试复习规划师专家工作流）=====
modules['study-planner'] = (c) => {
  const examDate = Store.get('examDate', '2026-12-21');
  const days = daysUntil(examDate);
  const target = Store.get('goalTarget', '');
  const ready = AIEngine.isReady();
  const cfg = AIEngine.getConfig();

  c.innerHTML = `
    <div class="card planner-expert-card">
      <div class="card-title">🧠 WorkBuddy 专家中心 · 考试复习规划师</div>
      <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-bottom:10px;">
        点「🚀 唤起」会直接拉起你本机已安装的 WorkBuddy 桌面应用，并尝试自动切换到「考试复习规划师」专家开聊（已自动复制专家名作保底）。
      </p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="openExpertCenter()">🚀 唤起并用专家对话</button>
        <button class="btn btn-outline" onclick="copyExpertName()">📋 复制专家名</button>
        <button class="btn btn-outline" onclick="openExpertWeb()">🌐 网页版</button>
      </div>
      <div style="font-size:11px;color:var(--text-light);margin-top:8px;">
        手动保底：WorkBuddy 左侧点「专家」→ 搜索框粘贴「考试复习规划师」→ 点「立即召唤」。首次需在桌面端「Claw设置 → 协议注册」启用 <b>workbuddy://</b>。
      </div>
    </div>

    <div class="card">
      <div class="card-title">📥 粘贴文字 · 智能识别任务</div>
      <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-bottom:10px;">
        把你的备考计划/安排粘贴到下面（可含<b>每日、每月、阶段/周</b>任务），系统自动识别并分类：
      </p>
      <textarea class="textarea" id="plannerPasteInput" placeholder="例如：&#10;【每日】&#10;- 背50个考研单词&#10;- 高数导数应用练习1小时&#10;【每月】&#10;- 完成数学二真题一套&#10;【阶段】基础阶段&#10;- 高数一轮复习&#10;- 线代知识点梳理" style="min-height:140px;"></textarea>
      <div style="display:flex;gap:8px;margin-top:10px;">
        <button class="btn btn-primary" onclick="plannerParsePaste()">🔍 智能识别</button>
        <button class="btn btn-outline" onclick="plannerClearPaste()">清空</button>
      </div>
      <div id="plannerParseResult" style="margin-top:12px;"></div>
    </div>

    <div class="card">
      <div class="card-title">🎯 我的目标</div>
      <div id="plannerMyGoals"></div>
    </div>

    <div class="card planner-expert-card">
      <div class="card-title">📋 考研学习计划 · 共享模板</div>
      <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-bottom:10px;">
        这是一份 WorkBuddy 共享的「制定考研学习计划」提示词模板，点下方按钮即可在 WorkBuddy（桌面端/网页版）中直接打开并基于你的备考情况生成计划。
      </p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="openStudyPlanTemplate()">🚀 打开规划模板</button>
        <button class="btn btn-outline" onclick="copyText('https://workbuddy.link/p/QSkX48VX06swlfW6zLakY6?ext2=copy_link')">🔗 复制链接</button>
      </div>
      <div style="font-size:11px;color:var(--text-light);margin-top:8px;">
        若已安装 WorkBuddy 桌面端，点击会直接唤起应用并预填该规划模板；未安装则在浏览器打开网页版。
      </div>
    </div>

    <div class="planner-collapse">
      <div class="planner-collapse-head" onclick="togglePlannerCollapse()">
        <span>🧠 复习规划师 · 规划对话区（点击展开）</span>
        <span class="planner-collapse-icon" id="plannerCollapseIcon">▸</span>
      </div>
      <div class="planner-collapse-body" id="plannerCollapseBody" style="display:none;">

        <div class="card">
          <div class="card-title">🧠 复习规划师</div>
          <p style="color:var(--text-secondary);margin-bottom:12px;font-size:13px;line-height:1.6;">
            基于 WorkBuddy「考试复习规划师」专家工作流，覆盖<b>规划→执行→复盘→修复→收口</b>全流程。
          </p>

          <div class="ai-status-bar ${ready ? 'ready' : 'notready'}">
            <span class="ai-status-dot"></span>
            <span class="ai-status-text">
              ${ready
                ? `AI 已连接 · ${AI_PROVIDERS[cfg.provider]?.name || cfg.provider} / ${cfg.model}`
                : 'AI 未配置 —— 配置后可在工作台内直接对话规划，无需跳转'}
            </span>
            <button class="btn btn-outline btn-sm" onclick="openAISettings(()=>switchModule('study-planner'))">
              ${ready ? '⚙️ 设置' : '🔑 立即配置'}
            </button>
          </div>

          <div class="planner-info-bar">
            <span class="planner-info-chip">📅 ${examDate}（${days}天）</span>
            ${target ? `<span class="planner-info-chip">🎯 ${target}</span>` : ''}
          </div>
          <div class="planner-tabs" id="plannerTabs">
            <button class="planner-tab active" data-scene="plan">📋 初次规划</button>
            <button class="planner-tab" data-scene="today">✅ 今日任务</button>
            <button class="planner-tab" data-scene="review">🔄 每日复盘</button>
            <button class="planner-tab" data-scene="fix">🔧 计划修复</button>
            <button class="planner-tab" data-scene="final">🎯 考前收口</button>
          </div>
          <div id="plannerScene"></div>
        </div>

        <div class="card" id="plannerChatCard">
          <div class="card-title" style="display:flex;align-items:center;justify-content:space-between;">
            <span>💬 与规划师对话</span>
            <span style="display:flex;gap:6px;">
              <button class="btn btn-outline btn-sm" onclick="plannerExtractTasks()">📤 提取任务到今日目标</button>
              <button class="btn btn-outline btn-sm" onclick="plannerClearChat()">🗑 清空对话</button>
            </span>
          </div>
          <div class="chat-box" id="plannerChatBox"></div>
          <div class="chat-input-row">
            <textarea class="textarea" id="plannerChatInput" placeholder="填好上方表单后点「🚀 开始规划」，或在这里直接提问、追问修改..." rows="2"></textarea>
            <div class="chat-input-btns">
              <button class="btn btn-primary" id="plannerSendBtn" onclick="plannerSend()">发送</button>
              <button class="btn btn-outline" id="plannerStopBtn" onclick="plannerStop()" style="display:none;">停止</button>
            </div>
          </div>
          <div style="font-size:11px;color:var(--text-light);margin-top:6px;">Enter 发送 · Shift+Enter 换行</div>
        </div>

      </div>
    </div>

    <div class="card">
      <div class="card-title">📋 规划历史</div>
      <div id="plannerHistory"></div>
    </div>
  `;

  document.querySelectorAll('.planner-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.planner-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      plannerCurrentScene = tab.dataset.scene;
      renderPlannerScene(tab.dataset.scene);
    };
  });

  const input = document.getElementById('plannerChatInput');
  if (input) {
    input.onkeydown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); plannerSend(); }
    };
  }

  plannerCurrentScene = 'plan';
  renderPlannerScene('plan');
  renderPlannerChat();
  renderPlannerHistory();
  renderPlannerMyGoals();
};

// ===== 规划师对话状态 =====
let plannerCurrentScene = 'plan';
let plannerAbortCtrl = null;

const PLANNER_SYSTEM_PROMPT = `你是「考试复习规划师」，专门帮助考研学生把模糊的复习意图，变成可执行、可验证、可修复的具体计划。

【你的核心原则】
1. 计划必须落到"今天几点做什么、做多少、怎么算完成"，不能停留在"多练习""加强基础"这类空话。
2. 任务必须带明确的量化交付物（如"高数第3章导数应用课后题 1-20 题，订正错题"），且单个任务不超过 90 分钟。
3. 必须尊重用户给出的真实可用时间，不要排出一天 14 小时的理想计划。留 15%~20% 缓冲给突发情况。
4. 先诊断再开方：如果关键信息缺失（可用时间、当前进度、薄弱点），先用一两个问题问清楚，不要凭空假设。
5. 计划要有优先级：分数性价比高的、拖着不做会连锁崩盘的，排在前面。

【输出格式要求】
- 用简洁的 Markdown，避免冗长客套。
- 给出"每日任务清单"时，每个任务单独一行，以 - 开头，格式为：\`- [科目] 具体任务 · 时长\`，方便用户一键导入待办。
- 每次给出计划后，用一句话说明"如果今天只能完成一件事，那就是___"。
- 最后附一个「验证标准」：怎么判断这一天/这一周的计划真的达成了。

【语气】
像一个见过很多考研学生、知道哪里会崩的靠谱学长。直接、务实、不灌鸡汤。`;

function plannerChatKey() {
  return 'plannerChat';
}

function getPlannerChat() {
  return Store.get(plannerChatKey(), []);
}

function setPlannerChat(msgs) {
  Store.set(plannerChatKey(), msgs);
}

function renderPlannerChat() {
  const box = document.getElementById('plannerChatBox');
  if (!box) return;
  const msgs = getPlannerChat();
  if (!msgs.length) {
    box.innerHTML = `
      <div class="chat-empty">
        <div style="font-size:32px;margin-bottom:8px;">🧠</div>
        <div style="font-size:13px;font-weight:600;margin-bottom:4px;">还没有开始对话</div>
        <div style="font-size:12px;color:var(--text-secondary);line-height:1.6;">
          在上方选择场景 → 填写信息 → 点「🚀 开始规划」<br>
          规划师会实时生成方案，你可以继续追问、要求调整
        </div>
      </div>`;
    return;
  }
  box.innerHTML = msgs.map((m, i) => `
    <div class="chat-msg ${m.role}">
      <div class="chat-avatar">${m.role === 'user' ? '🙋' : '🧠'}</div>
      <div class="chat-bubble">
        <div class="chat-content">${renderMarkdown(m.content)}</div>
        ${m.role === 'assistant' ? `
          <div class="chat-msg-actions">
            <button onclick="plannerCopyMsg(${i})">📋 复制</button>
            <button onclick="plannerExtractFrom(${i})">📤 提取任务</button>
            <button onclick="plannerSaveMsg(${i})">💾 存为方案</button>
          </div>` : ''}
      </div>
    </div>
  `).join('');
  box.scrollTop = box.scrollHeight;
}

// 轻量 Markdown 渲染（标题/加粗/列表/代码/表格分隔线）
function renderMarkdown(text) {
  let h = escapeHtml(text);
  h = h.replace(/```([\s\S]*?)```/g, (m, code) => `<pre class="chat-pre">${code}</pre>`);
  h = h.replace(/`([^`\n]+)`/g, '<code class="chat-code">$1</code>');
  h = h.replace(/^###\s+(.+)$/gm, '<div class="md-h3">$1</div>');
  h = h.replace(/^##\s+(.+)$/gm, '<div class="md-h2">$1</div>');
  h = h.replace(/^#\s+(.+)$/gm, '<div class="md-h1">$1</div>');
  h = h.replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>');
  h = h.replace(/^\s*[-*]\s+(.+)$/gm, '<div class="md-li">• $1</div>');
  h = h.replace(/^\s*(\d+)\.\s+(.+)$/gm, '<div class="md-li">$1. $2</div>');
  h = h.replace(/^---+$/gm, '<hr class="md-hr">');
  h = h.replace(/\n/g, '<br>');
  h = h.replace(/(<\/div>)<br>/g, '$1');
  h = h.replace(/(<hr class="md-hr">)<br>/g, '$1');
  return h;
}

// 从当前场景表单生成首条消息并发送
async function plannerStart() {
  const config = PLANNER_SCENES[plannerCurrentScene];
  if (!config) return;
  const values = {};
  config.fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) values[f.id] = el.value.trim();
  });
  const prompt = config.build(values);

  if (!AIEngine.isReady()) {
    openAISettings(() => { switchModule('study-planner'); });
    toast('请先配置 AI，配置后即可实时对话');
    return;
  }

  // 新场景开始时清空历史，避免上下文混乱
  setPlannerChat([]);
  await plannerSendMessage(prompt);
}

function plannerSend() {
  const input = document.getElementById('plannerChatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) { toast('请输入内容'); return; }
  if (!AIEngine.isReady()) {
    openAISettings(() => switchModule('study-planner'));
    toast('请先配置 AI');
    return;
  }
  input.value = '';
  plannerSendMessage(text);
}

async function plannerSendMessage(userText) {
  const msgs = getPlannerChat();
  msgs.push({ role: 'user', content: userText });
  setPlannerChat(msgs);
  renderPlannerChat();

  // 插入流式占位气泡
  const box = document.getElementById('plannerChatBox');
  const holder = document.createElement('div');
  holder.className = 'chat-msg assistant';
  holder.innerHTML = `
    <div class="chat-avatar">🧠</div>
    <div class="chat-bubble">
      <div class="chat-content" id="plannerStreaming"><span class="chat-typing">规划师思考中<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span></div>
    </div>`;
  box.appendChild(holder);
  box.scrollTop = box.scrollHeight;

  const sendBtn = document.getElementById('plannerSendBtn');
  const stopBtn = document.getElementById('plannerStopBtn');
  if (sendBtn) sendBtn.disabled = true;
  if (stopBtn) stopBtn.style.display = 'inline-block';

  plannerAbortCtrl = new AbortController();
  const streamEl = document.getElementById('plannerStreaming');
  let firstChunk = true;

  try {
    const apiMsgs = [
      { role: 'system', content: PLANNER_SYSTEM_PROMPT },
      ...msgs.slice(-12).map(m => ({ role: m.role, content: m.content })),
    ];

    const full = await AIEngine.chat(apiMsgs, (piece, all) => {
      if (firstChunk) { streamEl.innerHTML = ''; firstChunk = false; }
      streamEl.innerHTML = renderMarkdown(all) + '<span class="chat-cursor"></span>';
      box.scrollTop = box.scrollHeight;
    }, plannerAbortCtrl.signal);

    const msgs2 = getPlannerChat();
    msgs2.push({ role: 'assistant', content: full || '(空回复)' });
    setPlannerChat(msgs2);
    renderPlannerChat();
  } catch (e) {
    if (e.name === 'AbortError') {
      const partial = streamEl?.textContent || '';
      if (partial && !firstChunk) {
        const msgs3 = getPlannerChat();
        msgs3.push({ role: 'assistant', content: partial + '\n\n_（已手动停止）_' });
        setPlannerChat(msgs3);
      }
      renderPlannerChat();
      toast('已停止生成');
    } else {
      holder.remove();
      const errBox = document.createElement('div');
      errBox.className = 'chat-msg assistant';
      errBox.innerHTML = `
        <div class="chat-avatar">⚠️</div>
        <div class="chat-bubble" style="background:#fef2f2;border-color:#fecaca;">
          <div class="chat-content" style="color:#dc2626;font-size:13px;">
            <b>调用失败</b><br>${escapeHtml(e.message)}
            <div style="margin-top:8px;">
              <button class="btn btn-outline btn-sm" onclick="openAISettings(()=>switchModule('study-planner'))">⚙️ 检查设置</button>
            </div>
          </div>
        </div>`;
      box.appendChild(errBox);
      box.scrollTop = box.scrollHeight;
    }
  } finally {
    plannerAbortCtrl = null;
    if (sendBtn) sendBtn.disabled = false;
    if (stopBtn) stopBtn.style.display = 'none';
  }
}

function plannerStop() {
  if (plannerAbortCtrl) plannerAbortCtrl.abort();
}

function plannerClearChat() {
  if (!confirm('确定清空当前对话？规划历史不受影响。')) return;
  setPlannerChat([]);
  renderPlannerChat();
  toast('对话已清空');
}

function plannerCopyMsg(i) {
  const msgs = getPlannerChat();
  if (msgs[i]) copyText(msgs[i].content);
}

function plannerSaveMsg(i) {
  const msgs = getPlannerChat();
  if (!msgs[i]) return;
  const history = Store.get('plannerHistory', []);
  history.unshift({
    id: uid(),
    scene: plannerCurrentScene,
    title: (PLANNER_SCENES[plannerCurrentScene]?.title || '规划') + '（AI方案）',
    prompt: msgs[i].content.slice(0, 400),
    full: msgs[i].content,
    time: Date.now(),
  });
  if (history.length > 30) history.length = 30;
  Store.set('plannerHistory', history);
  toast('已保存到规划历史');
  renderPlannerHistory();
}

// 从 AI 回复中自动抽取任务行
function extractTaskLines(text) {
  const lines = text.split('\n');
  const tasks = [];
  for (let raw of lines) {
    let l = raw.trim();
    if (!l) continue;
    // 匹配 "- xxx" / "* xxx" / "1. xxx" / "- [ ] xxx"
    const m = l.match(/^(?:[-*]\s*(?:\[[ x]\]\s*)?|\d+[.、)]\s*)(.+)$/);
    if (!m) continue;
    let t = m[1].trim();
    t = t.replace(/\*\*/g, '').replace(/`/g, '').trim();
    if (t.length < 4 || t.length > 80) continue;
    // 过滤掉像标题、说明性的行
    if (/^(验证标准|如果今天|说明|注意|备注|总结|原则)/.test(t)) continue;
    if (t.endsWith('：') || t.endsWith(':')) continue;
    tasks.push(t);
  }
  return tasks;
}

function plannerExtractFrom(i) {
  const msgs = getPlannerChat();
  if (!msgs[i]) return;
  showExtractModal(extractTaskLines(msgs[i].content));
}

function plannerExtractTasks() {
  const msgs = getPlannerChat();
  const lastAI = [...msgs].reverse().find(m => m.role === 'assistant');
  if (!lastAI) { toast('还没有 AI 回复'); return; }
  showExtractModal(extractTaskLines(lastAI.content));
}

function showExtractModal(tasks) {
  if (!tasks.length) {
    modal('提取任务', `
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">
        没有自动识别到任务行。你可以手动粘贴要导入的任务（每行一个）：
      </p>
      <textarea class="textarea" id="syncTodoText" placeholder="高数极限计算练习 30min&#10;背50个考研单词" style="min-height:160px;"></textarea>
    `, (m) => {
      const text = m.querySelector('#syncTodoText').value.trim();
      const list = text.split('\n').map(t => t.trim()).filter(Boolean);
      if (!list.length) { toast('请输入任务'); return false; }
      syncPlannerToTodo(list);
      return true;
    });
    return;
  }

  modal('📤 提取任务到今日目标', `
    <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">
      自动识别到 <b>${tasks.length}</b> 条任务，取消勾选不需要的，确定后加入今日目标：
    </p>
    <div style="max-height:320px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:8px;">
      ${tasks.map((t, i) => `
        <label style="display:flex;align-items:flex-start;gap:8px;padding:6px 4px;font-size:13px;line-height:1.5;cursor:pointer;">
          <input type="checkbox" class="extract-cb" data-idx="${i}" checked style="margin-top:3px;flex-shrink:0;">
          <span>${escapeHtml(t)}</span>
        </label>
      `).join('')}
    </div>
  `, (m) => {
    const picked = [...m.querySelectorAll('.extract-cb')]
      .filter(cb => cb.checked)
      .map(cb => tasks[+cb.dataset.idx]);
    if (!picked.length) { toast('请至少勾选一条'); return false; }
    syncPlannerToTodo(picked);
    return true;
  });
}

// ===== WorkBuddy 专家中心入口 =====
// 优先尝试用 workbuddy:// 自定义协议直接唤起本地桌面应用并打开专家；
// 若协议未注册/未启用，则回退打开网页版。
// WorkBuddy 官方协议仅有 workbuddy://command?text=xxx（text 需 URL 编码），
// 没有"直接打开指定专家"的文档化深链。把专家名写进任务指令，让应用收到后
// 有最大概率自行切换到该专家并开聊；同时自动复制专家名作为手动保底。
function openExpertCenter() {
  const task = '请在专家中心切换到「考试复习规划师」专家，并基于我的考研备考情况（数学二 + 英语 + 政治 + 专业课 GIS/RS/GPS），帮我制定一份分阶段复习规划。';
  const deepLink = `workbuddy://command?text=${encodeURIComponent(task)}`;
  copyText('考试复习规划师'); // 保底：复制专家名，方便手动搜索
  toast('正在唤起 WorkBuddy 桌面应用…（已自动复制专家名）');
  try {
    const a = document.createElement('a');
    a.href = deepLink;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // 协议唤起后通常已切走；2.5s 后提示手动保底路径
    setTimeout(() => {
      toast('若未自动进入专家：在 WorkBuddy 左侧点「专家」→ 搜索框粘贴「考试复习规划师」→ 点「立即召唤」');
    }, 2500);
  } catch (e) {
    window.open('https://www.workbuddy.cn/', '_blank');
  }
}

function openExpertWeb() {
  window.open('https://www.workbuddy.cn/', '_blank');
  toast('已打开 WorkBuddy 网页版，请在左侧「专家」搜索「考试复习规划师」');
}

function copyExpertName() {
  copyText('考试复习规划师');
  toast('已复制专家名：考试复习规划师');
}

// 打开 WorkBuddy 共享的「制定考研学习计划」提示词模板
// workbuddy.link/p/... 是共享 prompt，点击后由 workbuddy.link 负责唤起桌面应用或打开网页版
function openStudyPlanTemplate() {
  const url = 'https://workbuddy.link/p/QSkX48VX06swlfW6zLakY6?ext2=copy_link';
  toast('正在打开「制定考研学习计划」共享模板…');
  window.open(url, '_blank');
}

// 折叠/展开「复习规划师」规划对话区
function togglePlannerCollapse() {
  const body = document.getElementById('plannerCollapseBody');
  if (!body) return;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  const icon = document.getElementById('plannerCollapseIcon');
  if (icon) icon.textContent = open ? '▸' : '▾';
}

// ===== 粘贴文字智能识别任务 =====
function plannerClearPaste() {
  const el = document.getElementById('plannerPasteInput');
  if (el) el.value = '';
  const r = document.getElementById('plannerParseResult');
  if (r) r.innerHTML = '';
}

function plannerParsePaste() {
  const el = document.getElementById('plannerPasteInput');
  if (!el) return;
  const text = el.value.trim();
  if (!text) { toast('请先粘贴文字'); return; }
  const buckets = parsePlanText(text);
  renderPlannerParseResult(buckets);
}

// 本地规则：按"小节标题"或行内关键词归类到 daily / monthly / phase
function parsePlanText(text) {
  const buckets = { daily: [], monthly: [], phase: [] };
  let current = null; // 当前小节类别
  const lines = text.split(/\r?\n/);
  for (let raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    // 小节标题识别（被 【】 或 [] 包裹，或整行就是关键词）
    const header = line.match(/^[【\[]?\s*(每日|每天|日计划|daily|day)\s*[\]】]?$/i)
      || line.match(/^[【\[]?\s*(每月|月计划|monthly|month)\s*[\]】]?$/i)
      || line.match(/^[【\[]?\s*(阶段|周计划|每周|weekly|phase|里程碑)\s*[\]】]?$/i);
    if (header) {
      const k = header[1];
      if (/每日|每天|日计划|daily|day/i.test(k)) current = 'daily';
      else if (/每月|月计划|monthly|month/i.test(k)) current = 'monthly';
      else current = 'phase';
      continue;
    }

    // 行内关键词（即使没有小节标题也能判断）
    const inlineDaily = /(每日|每天)/.test(line);
    const inlineMonthly = /(每月|月计划)/.test(line);
    const inlinePhase = /(阶段|第[一二三四五六七八九十\d]+周|本周|下周|里程碑|phase)/.test(line);

    // 任务行：列表项或纯短句
    const taskMatch = line.match(/^(?:[-*]\s*(?:\[[ x]\]\s*)?|\d+[.、)]\s*)(.+)$/);
    let taskText = null;
    if (taskMatch) {
      taskText = taskMatch[1].replace(/\*\*/g, '').replace(/`/g, '').trim();
    } else if (line.length >= 4 && line.length <= 60 && !/[：:]$/.test(line)
      && !/^(说明|注意|验证|总结|原则|如果|建议)/.test(line)) {
      taskText = line.replace(/\*\*/g, '').trim();
    }
    if (!taskText || taskText.length < 2) continue;

    let cat = current;
    if (!cat) {
      if (inlineDaily) cat = 'daily';
      else if (inlineMonthly) cat = 'monthly';
      else if (inlinePhase) cat = 'phase';
      else cat = 'daily'; // 默认归每日
    }
    if (!buckets[cat].includes(taskText)) buckets[cat].push(taskText);
  }
  return buckets;
}

function renderPlannerParseResult(buckets) {
  const box = document.getElementById('plannerParseResult');
  if (!box) return;
  const cats = [
    { key: 'daily', label: '📅 每日任务', target: '今日目标' },
    { key: 'monthly', label: '🗓 每月任务', target: '本月目标' },
    { key: 'phase', label: '🚩 阶段/周任务', target: '阶段目标' },
  ];
  const total = buckets.daily.length + buckets.monthly.length + buckets.phase.length;
  if (!total) {
    box.innerHTML = '<div class="empty-state" style="padding:16px;"><div class="empty-state-text">未能识别到任务。请确认文字含「每日 / 每月 / 阶段」等关键词，或每行一条任务（用 - 或 1. 开头）。</div></div>';
    return;
  }
  box.innerHTML = cats.map(cat => {
    const items = buckets[cat.key];
    if (!items.length) return '';
    return `
      <div class="parse-group">
        <div class="parse-group-title">${cat.label} <span class="parse-count">${items.length}</span></div>
        <div class="parse-items">
          ${items.map((t) => `
            <label class="parse-item">
              <input type="checkbox" class="parse-cb" data-cat="${cat.key}" checked>
              <span>${escapeHtml(t)}</span>
            </label>`).join('')}
        </div>
        <button class="btn btn-sm btn-primary" onclick="plannerAddParsed('${cat.key}')">➕ 加入${cat.target}</button>
      </div>`;
  }).join('');
  box.scrollIntoView({ behavior: 'smooth' });
}

function plannerAddParsed(cat) {
  const box = document.getElementById('plannerParseResult');
  if (!box) return;
  const cbs = [...box.querySelectorAll(`.parse-cb[data-cat="${cat}"]`)].filter(cb => cb.checked);
  if (!cbs.length) { toast('请至少勾选一条'); return; }
  const texts = cbs.map(cb => cb.parentElement.querySelector('span').textContent.trim());
  if (cat === 'daily') {
    syncPlannerToTodo(texts);
  } else if (cat === 'monthly') {
    addMonthlyGoals(texts);
  } else {
    addPhaseGoal(texts);
  }
  renderPlannerMyGoals();
  toast('已加入目标');
}

function monthKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

function addMonthlyGoals(texts) {
  const data = Store.getByDate('monthly', monthKey()) || { items: [] };
  texts.forEach(t => data.items.push({ id: uid(), text: t, done: false, source: 'paste' }));
  Store.setByDate('monthly', monthKey(), data);
}

function addPhaseGoal(texts) {
  const name = prompt('给这个阶段/周起个名字：', '新阶段目标');
  if (name === null) return; // 取消
  const phases = Store.get('phases', []);
  phases.push({
    id: uid(),
    name: (name || '新阶段目标').trim(),
    items: texts.map(t => ({ id: uid(), text: t, done: false })),
  });
  Store.set('phases', phases);
}

// ===== 我的目标展示 =====
function renderPlannerMyGoals() {
  const box = document.getElementById('plannerMyGoals');
  if (!box) return;
  const todoData = Store.getByDate('todo', currentDate) || { items: [] };
  const monthlyData = Store.getByDate('monthly', monthKey()) || { items: [] };
  const phases = Store.get('phases', []);

  let html = renderGoalGroup(`📅 今日目标`, todoData.items, 'toggleTodo', 'delTodo');
  html += renderGoalGroup(`🗓 本月目标 (${monthKey()})`, monthlyData.items, 'toggleMonthly', 'delMonthly');
  if (phases.length) {
    html += phases.map(p => renderPhaseGroup(p)).join('');
  }
  box.innerHTML = html;
}

function renderGoalGroup(title, items, toggleFn, delFn) {
  return `
    <div class="goal-group">
      <div class="goal-group-title">${title} ${items.length ? `<span class="parse-count">${items.length}</span>` : ''}</div>
      ${items.length ? `<div class="goal-items">` + items.map(it => `
        <div class="goal-item ${it.done ? 'done' : ''}">
          <div class="todo-checkbox ${it.done ? 'checked' : ''}" onclick="${toggleFn}('${it.id}')"></div>
          <span class="goal-text">${escapeHtml(it.text)}</span>
          <button class="todo-delete" onclick="${delFn}('${it.id}')">✕</button>
        </div>`).join('') + `</div>` : '<div class="goal-empty">暂无</div>'}
    </div>`;
}

function renderPhaseGroup(p) {
  const done = p.items.filter(x => x.done).length;
  return `
    <div class="goal-group phase-group">
      <div class="goal-group-title">
        🚩 ${escapeHtml(p.name)} <span class="parse-count">${done}/${p.items.length}</span>
        <button class="todo-delete phase-del" onclick="delPhase('${p.id}')">删阶段</button>
      </div>
      <div class="goal-items">
        ${p.items.map(it => `
          <div class="goal-item ${it.done ? 'done' : ''}">
            <div class="todo-checkbox ${it.done ? 'checked' : ''}" onclick="togglePhase('${p.id}','${it.id}')"></div>
            <span class="goal-text">${escapeHtml(it.text)}</span>
            <button class="todo-delete" onclick="delPhaseItem('${p.id}','${it.id}')">✕</button>
          </div>`).join('')}
      </div>
    </div>`;
}

function toggleMonthly(id) {
  const data = Store.getByDate('monthly', monthKey()) || { items: [] };
  const it = data.items.find(x => x.id === id);
  if (it) { it.done = !it.done; Store.setByDate('monthly', monthKey(), data); renderPlannerMyGoals(); }
}

function delMonthly(id) {
  const data = Store.getByDate('monthly', monthKey()) || { items: [] };
  data.items = data.items.filter(x => x.id !== id);
  Store.setByDate('monthly', monthKey(), data);
  renderPlannerMyGoals();
}

function togglePhase(pid, id) {
  const ps = Store.get('phases', []);
  const p = ps.find(x => x.id === pid);
  if (p) {
    const it = p.items.find(x => x.id === id);
    if (it) { it.done = !it.done; Store.set('phases', ps); renderPlannerMyGoals(); }
  }
}

function delPhaseItem(pid, id) {
  const ps = Store.get('phases', []);
  const p = ps.find(x => x.id === pid);
  if (p) { p.items = p.items.filter(x => x.id !== id); Store.set('phases', ps); renderPlannerMyGoals(); }
}

function delPhase(pid) {
  const ps = Store.get('phases', []);
  Store.set('phases', ps.filter(x => x.id !== pid));
  renderPlannerMyGoals();
}

const PLANNER_SCENES = {
  plan: {
    title: '初次规划',
    icon: '📋',
    desc: '还没有可执行计划时，生成完整备考方案 + 未来七天计划',
    fields: [
      { id: 'pl_hours', label: '每日可用学习时间（小时）', type: 'number', placeholder: '如: 6', hint: '含听课+做题+背诵的总时间' },
      { id: 'pl_math', label: '数学基础', type: 'textarea', placeholder: '如: 高数过了一轮，线代刚开始，导数应用薄弱' },
      { id: 'pl_eng', label: '英语基础', type: 'textarea', placeholder: '如: 单词背了一半，阅读正确率60%' },
      { id: 'pl_pol', label: '政治基础', type: 'textarea', placeholder: '如: 尚未开始' },
      { id: 'pl_major', label: '专业课基础', type: 'textarea', placeholder: '如: RS遥感过了一轮，GPS/GIS未开始' },
    ],
    build: (v) => {
      const examDate = Store.get('examDate', '2026-12-21');
      const days = daysUntil(examDate);
      const target = Store.get('goalTarget', '目标院校');
      const hours = v.pl_hours || '未填写';
      const mathBase = v.pl_math || '未填写';
      const engBase = v.pl_eng || '未填写';
      const polBase = v.pl_pol || '未填写';
      const majorBase = v.pl_major || '未填写';

      return `你是考试复习规划师。根据考试范围、剩余时间、现实约束和掌握证据，帮用户制定可执行的备考计划。

## 用户信息
- 目标：${target}
- 考研日期：${examDate}（距今${days}天）
- 每日可用学习时间：${hours}小时
- 当前基础：
  - 数学（二）：${mathBase}
  - 英语：${engBase}
  - 政治：${polBase}
  - 专业课（RS遥感/GPS定位/GIS系统）：${majorBase}

## 要求
请按以下格式输出备考方案：

### 1. 结论与风险
- 推荐模式（学期/冲刺/救急）
- 当前主攻科目及排序依据
- 每日总时间 / 净容量（总时间×0.7）
- 主要风险
- 待确认项

### 2. 阶段安排（表格）
| 阶段 | 目标 | 任务范围 | 完成标准 | 时间 |

### 3. 未来七天（表格）
| 日期 | A类任务（必做） | B类任务（增益） | 复习/验证 | 预计总时长 |

### 4. 今天先做
- 任务ID、动作与对象、预计时长、完成标准
- 完成后回复格式：任务ID｜完成度｜掌握度｜实际耗时｜卡点

## 规则
- 先根据真实可用时间计算净容量（总时间×0.7），再排任务，任务总时长不超过净容量
- 单项任务控制在20—50分钟
- A类任务直接影响近期考试或高权重弱项；B类有明确增益；C类时间允许再做
- 每项任务写明动作、知识点、预计时长和完成标准
- "看完""抄完""听懂"不直接视为掌握，需通过做题或复述验证
- 考研科目：数学二（高数+线代）、英语、政治、专业课（遥感RS/GPS定位/GIS系统）`;
    },
  },

  today: {
    title: '今日任务',
    icon: '✅',
    desc: '已有复习方向，安排今天的 A/B/C 类任务',
    fields: [
      { id: 'td_hours', label: '今天可用学习时间（小时）', type: 'number', placeholder: '如: 5', hint: '真实可用时间，含碎片时间' },
      { id: 'td_focus', label: '今天想重点突破的科目', type: 'text', placeholder: '如: 数学高数导数应用 + 英语阅读' },
      { id: 'td_progress', label: '当前进度/上次计划', type: 'textarea', placeholder: '如: 昨天做了2018年数学真题选择部分，错3道' },
    ],
    build: (v) => {
      const examDate = Store.get('examDate', '2026-12-21');
      const days = daysUntil(examDate);
      const hours = v.td_hours || '未填写';
      const focus = v.td_focus || '未填写';
      const progress = v.td_progress || '未填写';

      return `你是考试复习规划师。用户已有复习方向，需要安排今天的任务。

## 用户信息
- 考研日期：${examDate}（距今${days}天）
- 今天可用学习时间：${hours}小时
- 今天想重点突破：${focus}
- 当前进度/上次计划：${progress}

## 要求
请按以下格式输出今日任务：

### 1. 容量计算
- 总可用时间：${hours}小时
- 预留缓冲（20%）
- 净容量

### 2. A类任务（必须优先）
每项任务包含：任务ID、动作与对象、预计时长、完成标准、所需资料

### 3. B类任务（完成后有明确增益）
（没有则省略）

### 4. C类任务（时间允许再做）
（没有则省略）

### 5. 今日收口
- 主动回忆或自测建议
- 打卡格式：任务ID｜完成度｜掌握度｜实际耗时｜卡点

## 规则
- 任务时长之和不超过净容量
- 单项任务20—50分钟，疲劳时可缩短
- A类任务直接影响近期考试或高权重弱项
- 每项任务写明动作、知识点、预计时长和完成标准
- "看完""抄完"不直接视为掌握`;
    },
  },

  review: {
    title: '每日复盘',
    icon: '🔄',
    desc: '提交今日完成情况，复盘并调整明日计划',
    fields: [
      { id: 'rv_done', label: '今日完成了哪些任务', type: 'textarea', placeholder: '如: 做了2018年选择题+背了50个单词+听了1小时高数网课' },
      { id: 'rv_partial', label: '部分完成/未完成的任务', type: 'textarea', placeholder: '如: 解答题只做了前2道，时间不够' },
      { id: 'rv_mastery', label: '掌握度自评', type: 'textarea', placeholder: '如: 极限计算熟练，中值定理模糊，线代概念不会' },
      { id: 'rv_time', label: '实际耗时与差异', type: 'textarea', placeholder: '如: 计划4小时，实际用了5小时，选择题超时' },
      { id: 'rv_stuck', label: '主要卡点/错题', type: 'textarea', placeholder: '如: 2018年第3题不会，导数应用完全没思路' },
    ],
    build: (v) => {
      const examDate = Store.get('examDate', '2026-12-21');
      const days = daysUntil(examDate);
      const done = v.rv_done || '未填写';
      const partial = v.rv_partial || '无';
      const mastery = v.rv_mastery || '未填写';
      const timeDiff = v.rv_time || '未填写';
      const stuck = v.rv_stuck || '无';

      return `你是考试复习规划师。用户提交了今日完成情况，请复盘并调整明日计划。

## 用户信息
- 考研日期：${examDate}（距今${days}天）

## 今日完成情况
- 已完成：${done}
- 部分完成/未完成：${partial}
- 掌握度自评：${mastery}
- 实际耗时与差异：${timeDiff}
- 主要卡点/错题：${stuck}

## 要求
请按以下格式输出复盘：

### 1. 结论
- 今日状态：按计划 / 部分偏离 / 需要重排
- 触发原因
- 明日最优先

### 2. 执行与掌握
- 已完成
- 部分完成
- 已验证掌握（通过做题/复述/真题验证的）
- 仍未验证或新增弱项
- 预计与实际耗时差异

### 3. 计划变化
- 保留
- 后移
- 删除
- 替换
- 新增
- 变化原因

### 4. 下一步
- 明日A类任务
- 完成后回复格式：任务ID｜完成度｜掌握度｜实际耗时｜卡点

## 规则
- "看完""抄完"不直接视为掌握，需通过做题或复述验证
- A类任务连续两次未完成时启动重排
- 重排不是把未完成任务原样挪到明天，先判断失败原因再决定保留/拆分/降级/替换/后移/删除
- 不用压缩睡眠填补缺口`;
    },
  },

  fix: {
    title: '计划修复',
    icon: '🔧',
    desc: '计划偏离、超时、过载或条件变化时，修复计划',
    fields: [
      { id: 'fx_change', label: '发生了什么变化', type: 'textarea', placeholder: '如: 生病3天没学习 / 学校临时加课 / 政治还没开始' },
      { id: 'fx_remaining', label: '剩余可用容量', type: 'textarea', placeholder: '如: 每天只剩3小时，周末多一些' },
      { id: 'fx_constraint', label: '仍需保留的硬约束', type: 'textarea', placeholder: '如: 每天必须背单词+做数学题，不能砍' },
    ],
    build: (v) => {
      const examDate = Store.get('examDate', '2026-12-21');
      const days = daysUntil(examDate);
      const change = v.fx_change || '未填写';
      const remaining = v.fx_remaining || '未填写';
      const constraint = v.fx_constraint || '无';

      return `你是考试复习规划师。用户的计划出现了偏离，需要修复。

## 用户信息
- 考研日期：${examDate}（距今${days}天）

## 变化情况
- 发生了什么变化：${change}
- 剩余可用容量：${remaining}
- 仍需保留的硬约束：${constraint}

## 要求
请按以下格式输出计划修复：

### 1. 容量缺口
- 距最近考试
- 剩余总容量
- 现有任务估算
- 缺口

### 2. 取舍
- 必须保留
- 可以后移
- 建议删除
- 无法覆盖

### 3. 重排后的前三项任务
1. 任务ID｜动作｜时长｜完成标准
2. 任务ID｜动作｜时长｜完成标准
3. 任务ID｜动作｜时长｜完成标准

### 4. 变化原因
- 用户反馈或现实约束
- 使用的裁决规则

## 规则
- 容量不足时必须删除、后移或降级，不用压缩睡眠填补缺口
- 重排不是把未完成任务原样挪到明天，先判断失败原因再决定保留/拆分/降级/替换/后移/删除
- 多科排序使用同一裁决顺序：先按考试日期紧迫度，再按权重和掌握度
- 暂定信息标记"待确认"`;
    },
  },

  final: {
    title: '考前收口',
    icon: '🎯',
    desc: '临近考试，集中取舍，做最后冲刺',
    fields: [
      { id: 'fn_hours', label: '每天可用时间（小时）', type: 'number', placeholder: '如: 8', hint: '考前可适当增加' },
      { id: 'fn_uncovered', label: '尚未覆盖的范围', type: 'textarea', placeholder: '如: 线代特征值还没看，政治大题没背' },
      { id: 'fn_weak', label: '已验证的弱项', type: 'textarea', placeholder: '如: 数学二重积分总出错，英语新题型正确率低' },
      { id: 'fn_day', label: '考试当天安排', type: 'textarea', placeholder: '如: 上午考政治，下午考英语，第二天上午数学下午专业课' },
    ],
    build: (v) => {
      const examDate = Store.get('examDate', '2026-12-21');
      const days = daysUntil(examDate);
      const hours = v.fn_hours || '未填写';
      const uncovered = v.fn_uncovered || '未填写';
      const weak = v.fn_weak || '未填写';
      const examDay = v.fn_day || '未填写';

      return `你是考试复习规划师。考试临近，用户需要集中取舍。

## 用户信息
- 考研日期：${examDate}（距今${days}天）
- 每天可用时间：${hours}小时
- 尚未覆盖的范围：${uncovered}
- 已验证的弱项：${weak}
- 考试当天安排：${examDay}

## 要求
请按以下格式输出考前收口方案：

### 1. 收口判断
- 剩余天数
- 可覆盖范围（在剩余容量内能完成什么）
- 必须放弃的范围
- 取舍依据

### 2. 最后冲刺计划（表格）
| 日期 | 上午任务 | 下午任务 | 晚间任务 | 验证方式 |

### 3. 考前三天
- 每天重点
- 睡眠要求
- 不做事项（如不做新题、不看新课）

### 4. 考试当天
- 时间安排
- 必带物品
- 答题策略（如先易后难、时间分配）

## 规则
- 考前以巩固已学内容为主，不开新课
- 优先覆盖高权重且短期可提升的弱项
- 保证睡眠，不以通宵换进度
- 标注哪些范围已无法覆盖，不假装能做完
- 考前3天以主动回忆+真题套卷模拟为主`;
    },
  },
};

function renderPlannerScene(scene) {
  const config = PLANNER_SCENES[scene];
  if (!config) return;
  const box = document.getElementById('plannerScene');

  let fieldsHtml = '';
  config.fields.forEach(f => {
    const tag = f.type === 'textarea' ? 'textarea' : 'input';
    const cls = f.type === 'textarea' ? 'textarea' : 'input';
    const tagClose = f.type === 'textarea' ? '</textarea>' : '';
    fieldsHtml += `
      <div class="planner-field">
        <label>${f.label}</label>
        <${tag} class="${cls}" id="${f.id}" placeholder="${f.placeholder}" ${f.type === 'number' ? 'type="number" step="0.5" style="max-width:200px"' : `style="${f.type === 'textarea' ? '' : 'max-width:500px'}"`}></${tag}>
        ${f.hint ? `<div class="hint">${f.hint}</div>` : ''}
      </div>
    `;
  });

  box.innerHTML = `
    <div style="margin-bottom:12px;">
      <span style="font-size:14px;font-weight:700;">${config.icon} ${config.title}</span>
      <span style="font-size:12px;color:var(--text-secondary);margin-left:8px;">${config.desc}</span>
    </div>
    ${fieldsHtml}

    <div class="planner-action-bar">
      <button class="btn btn-primary planner-go-btn" onclick="plannerStart()">🚀 开始规划（AI 实时对话）</button>
      <button class="btn btn-outline" onclick="togglePlannerPrompt()" id="plannerPromptToggle">🔗 改用跳转外部 AI</button>
      <button class="btn btn-outline" onclick="openPlannerSync()">📤 手动同步到今日目标</button>
    </div>

    <div id="plannerPromptBox" style="display:none;"></div>
  `;

  config.fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) el.oninput = () => updatePlannerPrompt(scene);
  });

  updatePlannerPrompt(scene);
}

function updatePlannerPrompt(scene) {
  const config = PLANNER_SCENES[scene];
  if (!config) return;
  const values = {};
  config.fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) values[f.id] = el.value.trim();
  });
  const prompt = config.build(values);
  const el = document.getElementById('plannerPromptBox');
  if (!el) return;
  el.innerHTML = aiPromptBox(
    config.title,
    '点击跳转按钮时，Prompt 会自动复制到剪贴板，到对方网站粘贴发送即可。若复制失败可点「查看 Prompt」手动复制。',
    prompt
  );
}

function togglePlannerPrompt() {
  const box = document.getElementById('plannerPromptBox');
  const btn = document.getElementById('plannerPromptToggle');
  if (!box) return;
  const show = box.style.display === 'none';
  box.style.display = show ? 'block' : 'none';
  if (btn) btn.textContent = show ? '🔽 收起跳转选项' : '🔗 改用跳转外部 AI';
}

function savePlannerHistory(scene) {
  const config = PLANNER_SCENES[scene];
  if (!config) return;
  const values = {};
  config.fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) values[f.id] = el.value.trim();
  });
  const prompt = config.build(values);
  const history = Store.get('plannerHistory', []);
  history.unshift({
    id: uid(),
    scene,
    title: config.title,
    prompt: prompt.slice(0, 200) + '...',
    time: Date.now(),
  });
  if (history.length > 30) history.length = 30;
  Store.set('plannerHistory', history);
  toast('已保存到规划历史');
  renderPlannerHistory();
}

function openPlannerSync() {
  modal('同步到今日目标', `
    <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">将AI规划出的任务粘贴到下方（每行一个任务），同步到今日看板的每日目标中。</p>
    <textarea class="textarea" id="syncTodoText" placeholder="如：&#10;高数极限计算练习 30min&#10;背50个考研单词&#10;听线代网课第3章" style="min-height:160px;"></textarea>
  `, (m) => {
    const text = m.querySelector('#syncTodoText').value.trim();
    if (!text) { toast('请输入任务'); return false; }
    const tasks = text.split('\n').map(t => t.trim()).filter(t => t);
    if (!tasks.length) { toast('请输入任务'); return false; }
    syncPlannerToTodo(tasks);
    return true;
  });
}

function renderPlannerHistory() {
  const history = Store.get('plannerHistory', []);
  const el = document.getElementById('plannerHistory');
  if (!el) return;
  if (!history.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">暂无规划历史。生成方案后可点击"保存方案"记录。</div></div>';
    return;
  }
  el.innerHTML = history.map((h, i) => `
    <div class="planner-history-item">
      <div style="display:flex;align-items:center;margin-bottom:6px;gap:8px;flex-wrap:wrap;">
        <span style="font-weight:700;font-size:13px;">${PLANNER_SCENES[h.scene]?.icon || '📋'} ${h.title}</span>
        <span class="ph-tag tag tag-blue">${fmtDate(h.time)}</span>
        <span style="margin-left:auto;display:flex;gap:6px;">
          ${h.full ? `<button class="btn btn-outline btn-sm" onclick="viewPlannerHistory(${i})">👁 查看全文</button>` : ''}
          ${h.full ? `<button class="btn btn-outline btn-sm" onclick="reuseePlannerHistory(${i})">📤 提取任务</button>` : ''}
          <button class="btn btn-outline btn-sm" style="color:#dc2626;" onclick="delPlannerHistory(${i})">删除</button>
        </span>
      </div>
      <div style="font-size:12px;color:var(--text-secondary);line-height:1.6;max-height:80px;overflow:hidden;">${escapeHtml(h.prompt || '')}</div>
    </div>
  `).join('');
}

function viewPlannerHistory(i) {
  const h = Store.get('plannerHistory', [])[i];
  if (!h) return;
  modal(h.title, `<div class="chat-content" style="max-height:60vh;overflow-y:auto;font-size:13px;line-height:1.7;">${renderMarkdown(h.full || h.prompt || '')}</div>`, null, true);
}

function reuseePlannerHistory(i) {
  const h = Store.get('plannerHistory', [])[i];
  if (!h) return;
  showExtractModal(extractTaskLines(h.full || h.prompt || ''));
}

function delPlannerHistory(i) {
  const list = Store.get('plannerHistory', []);
  list.splice(i, 1);
  Store.set('plannerHistory', list);
  renderPlannerHistory();
  toast('已删除');
}

// ===== 数学模块 =====
modules['math-points'] = (c) => {
  const points = Store.get('mathPoints', []);
  const total = points.length;
  const mastered = points.filter(p => p.done).length;
  const due = points.filter(p => !p.done && p.nextReview && p.nextReview <= today());

  c.innerHTML = `
    <div class="quick-links">
      <a class="quick-link" href="https://www.markji.com/deck/editor/69d50111c8664d4b8ab2aa38" target="_blank">
        <span class="quick-link-icon">🎴</span>
        <div class="quick-link-info">
          <div class="quick-link-name">Markji数学卡组</div>
          <div class="quick-link-desc">数学知识点记忆卡</div>
        </div>
      </a>
      <a class="quick-link" href="https://mubu.com" target="_blank">
        <span class="quick-link-icon">🧠</span>
        <div class="quick-link-info">
          <div class="quick-link-name">幕布</div>
          <div class="quick-link-desc">整理思维导图</div>
        </div>
      </a>
      <a class="quick-link" href="https://www.maimemo.com" target="_blank">
        <span class="quick-link-icon">📱</span>
        <div class="quick-link-info">
          <div class="quick-link-name">墨墨记忆卡</div>
          <div class="quick-link-desc">APP端背诵</div>
        </div>
      </a>
    </div>
    <div class="card">
      <div class="card-title">📊 记忆进度</div>
      <div class="kp-progress-bar">
        <div class="kp-progress-fill memorizing" style="width:${total ? mastered/total*100 : 0}%;"></div>
        <div class="kp-progress-text">${mastered}/${total} 已掌握</div>
      </div>
      <div class="kp-progress-labels">
        <span>待复习：${due.length}</span>
        <span>已掌握：${mastered}</span>
        <span>总计：${total}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🧮 临界复习点</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        基于SM-2记忆算法，以下知识点即将遗忘或已到期，请逐一确认。点击"认识"延长复习间隔，点击"忘记"重置。
      </p>
      <div id="reviewQueue"></div>
    </div>
    <div class="card">
      <div class="card-title">📊 公式背诵速查</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        来源：Markji「27考研数学公式大全（高数篇）」共 515 个公式，按章节浏览、搜索、标记掌握。
      </p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="formulaSearch" placeholder="搜索公式名称..." style="flex:1;" oninput="filterFormulas()">
        <span id="formulaStats" style="font-size:12px;color:var(--text-secondary);line-height:34px;white-space:nowrap;"></span>
      </div>
      <div id="formulaChapters" style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;"></div>
      <div id="formulaList" style="max-height:600px;overflow-y:auto;"></div>
    </div>
    <div class="card">
      <div class="card-title">➕ 添加新知识点</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">添加你正在学习的知识点，系统会自动安排复习时间。</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <select class="select" id="ptSubject" style="width:120px;">
          <option value="高数">高数</option>
          <option value="线代">线代</option>
        </select>
        <input class="input" id="ptChapter" placeholder="章节（如：极限）" style="width:140px;">
        <input class="input" id="ptName" placeholder="知识点名称" style="flex:1;" onkeypress="if(event.key==='Enter')addMathPoint()">
        <button class="btn btn-primary" onclick="addMathPoint()">添加</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">📚 知识点列表</div>
      <div id="pointList"></div>
    </div>
  `;

  renderReviewQueue();
  renderPointList(points);
  loadFormulas();
};

// SM-2 记忆算法
function sm2Review(point, quality) {
  // quality: 0=忘记, 1=模糊, 2=认识
  if (quality === 0) {
    point.reps = 0;
    point.ease = Math.max(1.3, (point.ease || 2.5) - 0.2);
    point.interval = 1;
  } else if (quality === 1) {
    point.ease = Math.max(1.3, (point.ease || 2.5) - 0.15);
    point.interval = Math.max(1, Math.round((point.interval || 1) * 0.5));
    point.reps = Math.max(0, (point.reps || 0));
  } else {
    point.reps = (point.reps || 0) + 1;
    point.ease = ((point.ease || 2.5) + 0.1);
    if (point.reps === 1) point.interval = 1;
    else if (point.reps === 2) point.interval = 3;
    else point.interval = Math.round((point.interval || 1) * point.ease);
    // 超过5轮视为掌握
    if (point.reps >= 6) {
      point.done = true;
      point.nextReview = null;
      return point;
    }
  }
  const d = new Date();
  d.setDate(d.getDate() + point.interval);
  point.nextReview = d.toISOString().slice(0, 10);
  point.lastReview = today();
  return point;
}

function addMathPoint() {
  const subject = document.getElementById('ptSubject').value;
  const chapter = document.getElementById('ptChapter').value.trim();
  const name = document.getElementById('ptName').value.trim();
  if (!name) return;
  Store.push('mathPoints', {
    id: uid(), subject, chapter, name,
    createdAt: today(),
    reps: 0,
    ease: 2.5,
    interval: 0,
    nextReview: today(),
    lastReview: null,
    done: false
  });
  document.getElementById('ptName').value = '';
  renderReviewQueue();
  renderPointList(Store.get('mathPoints'));
  // 更新进度条
  const points = Store.get('mathPoints', []);
  const total = points.length;
  const mastered = points.filter(p => p.done).length;
  const fillEl = document.querySelector('.kp-progress-fill.memorizing');
  const textEl = document.querySelector('.kp-progress-text');
  if (fillEl) fillEl.style.width = `${total ? mastered/total*100 : 0}%`;
  if (textEl) textEl.textContent = `${mastered}/${total} 已掌握`;
  toast('已添加知识点');
}

function renderReviewQueue() {
  const points = Store.get('mathPoints', []);
  const due = points.filter(p => !p.done && p.nextReview && p.nextReview <= today());
  const el = document.getElementById('reviewQueue');
  if (!el) return;
  if (!due.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">🎉 今天没有需要复习的知识点！</div></div>';
    return;
  }
  el.innerHTML = due.map(p => `
    <div class="review-item due">
      <div class="review-info">
        <div class="review-name">${p.name}</div>
        <div class="review-meta">${p.subject} · ${p.chapter || '未分类'} · 已复习${p.reps || 0}次 · 难度${((p.ease || 2.5)).toFixed(1)}</div>
      </div>
      <button class="btn btn-success btn-sm" onclick="reviewMathPoint('${p.id}',2)">✅ 认识</button>
      <button class="btn btn-outline btn-sm" style="color:var(--warning);" onclick="reviewMathPoint('${p.id}',1)">🟡 模糊</button>
      <button class="btn btn-outline btn-sm" style="color:var(--danger);" onclick="reviewMathPoint('${p.id}',0)">❌ 忘记</button>
      <a class="btn btn-outline btn-sm" href="https://www.markji.com/deck/editor/69d50111c8664d4b8ab2aa38" target="_blank">去Markji</a>
    </div>
  `).join('');
}

function reviewMathPoint(id, quality) {
  const points = Store.get('mathPoints', []);
  const p = points.find(x => x.id === id);
  if (!p) return;
  sm2Review(p, quality);
  Store.set('mathPoints', points);
  renderReviewQueue();
  renderPointList(points);
  // 更新进度
  const total = points.length;
  const mastered = points.filter(x => x.done).length;
  const fillEl = document.querySelector('.kp-progress-fill.memorizing');
  const textEl = document.querySelector('.kp-progress-text');
  if (fillEl) fillEl.style.width = `${total ? mastered/total*100 : 0}%`;
  if (textEl) textEl.textContent = `${mastered}/${total} 已掌握`;
  toast(quality === 2 ? '已标记为认识' : quality === 1 ? '已标记为模糊' : '已标记为忘记');
}

function renderPointList(points) {
  const el = document.getElementById('pointList');
  if (!points.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">还没有知识点，添加一个开始吧~</div></div>';
    return;
  }
  const bySubject = {};
  points.forEach(p => {
    if (!bySubject[p.subject]) bySubject[p.subject] = [];
    bySubject[p.subject].push(p);
  });
  let html = '';
  for (const subject in bySubject) {
    html += `<div style="margin-bottom:16px;"><div style="font-weight:700;margin-bottom:8px;">${subject}</div>`;
    const byChapter = {};
    bySubject[subject].forEach(p => {
      if (!byChapter[p.chapter]) byChapter[p.chapter] = [];
      byChapter[p.chapter].push(p);
    });
    for (const ch in byChapter) {
      html += `<div style="margin-left:12px;margin-bottom:8px;"><div style="font-size:13px;font-weight:600;color:var(--text-secondary);margin-bottom:4px;">${ch || '未分类'}</div>`;
      byChapter[ch].forEach(p => {
        const stageTag = p.done ? 'tag-green' : (p.reps || 0) === 0 ? 'tag-gray' : `tag-blue`;
        const stageText = p.done ? '✅ 已掌握' : `复习${p.reps || 0}次`;
        html += `
          <div class="knowledge-item">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <span class="knowledge-title">${p.name}</span>
                <span class="tag ${stageTag}" style="margin-left:8px;">${stageText}</span>
              </div>
              <div>
                ${p.nextReview ? `<span style="font-size:11px;color:var(--text-light);">下次：${p.nextReview}</span>` : ''}
                <button class="todo-delete" onclick="delMathPoint('${p.id}')">✕</button>
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }
    html += '</div>';
  }
  el.innerHTML = html;
}

function delMathPoint(id) {
  Store.removeIn('mathPoints', id);
  renderReviewQueue();
  renderPointList(Store.get('mathPoints'));
}

// ===== 公式背诵（Markji 高数公式大全）=====
let _formulas = [];
let _formulaChapter = 'all';
let _formulaLoaded = false;

function loadFormulas() {
  if (_formulaLoaded) { renderFormulaList(); return; }
  fetch('api/math-formulas.json').then(r => r.json()).then(data => {
    _formulas = data.items || [];
    _formulaLoaded = true;
    renderFormulaChapters();
    renderFormulaList();
  }).catch(e => {
    const el = document.getElementById('formulaList');
    if (el) el.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:16px;">加载失败，请确认服务器运行中</p>';
  });
}

function renderFormulaChapters() {
  const el = document.getElementById('formulaChapters');
  if (!el) return;
  const chapters = [...new Set(_formulas.map(f => f.chapter))];
  const mastered = Store.get('formulaMastered', {});
  let html = `<button class="btn btn-sm ${_formulaChapter==='all'?'btn-primary':'btn-outline'}" onclick="setFormulaChapter('all')" style="margin:0;">全部 (${_formulas.length})</button>`;
  chapters.forEach(ch => {
    const count = _formulas.filter(f => f.chapter === ch).length;
    const masteredCount = _formulas.filter(f => f.chapter === ch && mastered[f.id]).length;
    html += `<button class="btn btn-sm ${_formulaChapter===ch?'btn-primary':'btn-outline'}" onclick="setFormulaChapter('${ch.replace(/'/g,"\\'")}')" style="margin:0;font-size:12px;">${ch} (${masteredCount}/${count})</button>`;
  });
  el.innerHTML = html;
}

function setFormulaChapter(ch) {
  _formulaChapter = ch;
  renderFormulaChapters();
  renderFormulaList();
}

function filterFormulas() {
  renderFormulaList();
}

function renderFormulaList() {
  const el = document.getElementById('formulaList');
  if (!el) return;
  const search = (document.getElementById('formulaSearch')?.value || '').trim().toLowerCase();
  const mastered = Store.get('formulaMastered', {});
  
  let filtered = _formulas;
  if (_formulaChapter !== 'all') {
    filtered = filtered.filter(f => f.chapter === _formulaChapter);
  }
  if (search) {
    filtered = filtered.filter(f => f.title.toLowerCase().includes(search) || f.chapter.toLowerCase().includes(search));
  }
  
  const stats = document.getElementById('formulaStats');
  if (stats) {
    const masteredCount = filtered.filter(f => mastered[f.id]).length;
    stats.textContent = `${masteredCount}/${filtered.length} 已掌握`;
  }
  
  if (!filtered.length) {
    el.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:16px;">未找到匹配的公式</p>';
    return;
  }
  
  // Group by chapter
  const byChapter = {};
  filtered.forEach(f => {
    if (!byChapter[f.chapter]) byChapter[f.chapter] = [];
    byChapter[f.chapter].push(f);
  });
  
  let html = '';
  for (const ch in byChapter) {
    html += `<div style="font-weight:700;font-size:13px;margin:8px 0 4px;padding:4px 8px;background:var(--primary-light);border-radius:6px;color:var(--primary);">${ch}</div>`;
    byChapter[ch].forEach(f => {
      const isMastered = mastered[f.id];
      html += `
        <div class="knowledge-item" style="display:flex;justify-content:space-between;align-items:center;">
          <span class="knowledge-title" style="${isMastered?'color:var(--text-light);text-decoration:line-through;':''}">${f.title}</span>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <button class="btn btn-sm ${isMastered?'btn-success':'btn-outline'}" onclick="toggleFormulaMastered('${f.id}')" style="font-size:11px;padding:2px 8px;">${isMastered?'✓ 已掌握':'掌握'}</button>
            <a class="btn btn-sm btn-outline" href="https://www.markji.com/deck/63098585634a5d0ae1151c3a" target="_blank" style="font-size:11px;padding:2px 8px;text-decoration:none;">Markji</a>
          </div>
        </div>
      `;
    });
  }
  el.innerHTML = html;
}

function toggleFormulaMastered(id) {
  const mastered = Store.get('formulaMastered', {});
  if (mastered[id]) delete mastered[id];
  else mastered[id] = true;
  Store.set('formulaMastered', mastered);
  renderFormulaChapters();
  renderFormulaList();
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
let _mathBankFilter = { year: 'all', type: 'all', point: 'all', chapter: 'all' };
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

async function loadMathBank() {
  const el = document.getElementById('mathBankList');
  if (el) el.innerHTML = '<div class="empty-state-text">加载中…</div>';
  try {
    const res = await fetch('api/math-questions.json');
    const data = await res.json();
    _mathBank = data.questions || [];
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
  const existingChapters = new Set(_mathBank.map(q => q.chapter).filter(Boolean));
  const chapters = MATH_CHAPTERS.filter(c => existingChapters.has(c));
  const points = [...new Set(_mathBank.map(q => q.knowledgePoint).filter(Boolean))].sort();

  filterEl.innerHTML = `
    <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:6px;">
      <span style="font-size:12px;color:var(--text-secondary);">年份：</span>
      <button class="btn btn-outline btn-sm ${_mathBankFilter.year==='all'?'active':''}" data-filter="year" data-value="all" onclick="setMBFilter('year','all')" style="font-size:12px;">全部</button>
      ${years.map(y => `<button class="btn btn-outline btn-sm ${_mathBankFilter.year===y?'active':''}" data-filter="year" data-value="${y}" onclick="setMBFilter('year','${y}')" style="font-size:12px;">${y}</button>`).join('')}
    </div>
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
    ${points.length ? `
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
              <span class="tag tag-green">${q.year}年</span>
              <span class="tag tag-purple">第${q.qnum}题</span>
              ${q.chapter ? `<span class="tag tag-orange" style="background:#fff3e0;color:#e65100;">${q.chapter}</span>` : ''}
              ${q.knowledgePoint ? `<span class="tag tag-gray">${q.knowledgePoint}</span>` : ''}
              ${(!hasAnswer || !hasExplanation) ? `<span class="tag tag-gray" style="background:#ffebee;color:#c62828;">答案/解析待补</span>` : ''}
            </div>
            <div class="math-content" style="font-size:14px;line-height:1.8;">${q.content}</div>
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
          <button class="btn btn-outline btn-sm" onclick="logPracticeFromBank('${q.year}','${q.qnum}')" style="font-size:12px;flex-shrink:0;" title="用4问标准记录本次练习">📋记录</button>
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
      _examPdfData = { exams: {}, solutions: {} };
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

modules['math-practice'] = (c) => {
  const today = new Date().toISOString().slice(0, 10);
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
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <div class="card-title" style="margin:0;">📖 练习历史</div>
        <select class="select" id="practiceFilter" style="width:120px;font-size:12px;" onchange="renderPracticeLog()">
          <option value="all">全部来源</option>
          <option value="题库">题库</option>
          <option value="课本例题">课本例题</option>
          <option value="课后题">课后题</option>
          <option value="1000题">1000题</option>
          <option value="真题">真题</option>
          <option value="其他">其他</option>
        </select>
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

  const filterEl = document.getElementById('practiceFilter');
  const filter = filterEl ? filterEl.value : 'all';
  const filtered = filter === 'all' ? records : records.filter(r => r.source === filter);

  // update stats
  const statTotal = document.getElementById('statTotal');
  const statPass = document.getElementById('statPass');
  const statHalf = document.getElementById('statHalf');
  const statFail = document.getElementById('statFail');
  if (statTotal) {
    let pass = 0, half = 0, fail = 0;
    filtered.forEach(r => {
      const score = (r.q1?1:0) + (r.q2?1:0) + (r.q3?1:0) + (r.q4?1:0);
      if (score === 4) pass++;
      else if (score >= 2) half++;
      else fail++;
    });
    statTotal.textContent = filtered.length;
    statPass.textContent = pass;
    statHalf.textContent = half;
    statFail.textContent = fail;
  }

  if (!filtered.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">还没有练习记录，做完一道题来记录吧~</div></div>';
    return;
  }

  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  const scoreColors = { 4: '#27ae60', 3: '#f39c12', 2: '#f39c12', 1: '#e74c3c', 0: '#e74c3c' };
  const scoreLabels = { 4: '完全掌握', 3: '基本掌握', 2: '半生不熟', 1: '未掌握', 0: '未掌握' };

  el.innerHTML = sorted.map(r => {
    const score = (r.q1?1:0) + (r.q2?1:0) + (r.q3?1:0) + (r.q4?1:0);
    const color = scoreColors[score];
    const label = scoreLabels[score];
    return `
      <div class="todo-item" style="flex-wrap:wrap;gap:6px;">
        <div style="flex:1;min-width:200px;">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-size:12px;color:var(--text-light);">${r.date}</span>
            <span class="tag tag-blue" style="font-size:11px;">${r.source}</span>
            <span style="font-size:14px;font-weight:600;">${r.ref}</span>
          </div>
          ${r.content ? `<div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">${r.content}</div>` : ''}
          <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
            ${PRACTICE_4Q.map((q, i) => {
              const checked = r['q' + (i+1)];
              return `<span style="font-size:11px;padding:2px 8px;border-radius:4px;${checked ? 'background:#27ae60;color:#fff;' : 'background:var(--bg-secondary);color:var(--text-light);text-decoration:line-through;'}">Q${i+1} ${q.label}</span>`;
            }).join('')}
          </div>
          ${r.note ? `<div style="font-size:12px;color:var(--text-secondary);margin-top:6px;font-style:italic;">📝 ${r.note}</div>` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <span style="font-size:12px;font-weight:700;padding:3px 10px;border-radius:12px;background:${color}22;color:${color};">${score}/4 ${label}</span>
          ${score < 4 ? `<button class="btn btn-outline btn-sm" style="font-size:11px;" onclick="retryPractice('${r.id}')">🔁 重做</button>` : ''}
          <button class="todo-delete" onclick="delPractice('${r.id}')">✕</button>
        </div>
      </div>
    `;
  }).join('');
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
  // create a new record today, same question, reset 4Q
  Store.push('practiceLog', {
    id: uid(),
    date: new Date().toISOString().slice(0, 10),
    source: old.source,
    ref: old.ref,
    content: old.content,
    note: '重做记录',
    q1: false, q2: false, q3: false, q4: false
  });
  renderPracticeLog();
  toast('已添加重做记录，完成后更新4问');
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
      <div class="card-title">📑 历年真题 PDF（2010-2022）</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        点击年份打开真题 PDF，再点「解析」查看详解。
      </p>
      <div id="engPdfList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:8px;"></div>
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

async function loadEngPdfExams() {
  if (!_engPdfData) {
    try {
      _engPdfData = { exams: {}, solutions: {} };
    } catch (e) {
      const el = document.getElementById('engPdfList');
      if (el) el.innerHTML = '<div class="empty-state-text">无法加载真题文件</div>';
      return;
    }
  }
  const el = document.getElementById('engPdfList');
  if (!el || !_engPdfData) return;
  const { exams, solutions } = _engPdfData;
  const years = Object.keys(exams).sort((a, b) => b - a);
  el.innerHTML = years.map(y => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid var(--border);border-radius:8px;">
      <span style="font-weight:600;font-size:14px;">${y}年</span>
      <div style="display:flex;gap:4px;">
        <a class="btn btn-outline btn-sm" href="/pdf/eng/${encodeURIComponent(exams[y])}" target="_blank" style="text-decoration:none;font-size:12px;">真题</a>
        <a class="btn btn-outline btn-sm" href="/pdf/eng_sol/${encodeURIComponent(solutions[y]||'')}" target="_blank" style="text-decoration:none;font-size:12px;color:var(--primary);border-color:var(--primary);">解析</a>
      </div>
    </div>
  `).join('');
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
      const res = await fetch('api/eng-questions.json');
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

// ----- 英语长难句 -----
// ----- 英语长难句（颉斌斌66句每日滚动）-----
modules['eng-sentence'] = (c) => {
  const xbbData = Store.get('xbb66', { current: 1, sentences: {} });
  const current = xbbData.current || 1;
  const todaySentence = xbbData.sentences[current] || { en: '', grammar: '', zh: '' };

  c.innerHTML = `
    <div class="quick-links">
      <a class="quick-link" href="https://www.bilibili.com/video/BV1NQRgYnEvD" target="_blank">
        <span class="quick-link-icon">📺</span>
        <div class="quick-link-info">
          <div class="quick-link-name">颉斌斌66句搞定语法长难句</div>
          <div class="quick-link-desc">B站课程全集</div>
        </div>
      </a>
    </div>
    <div class="card">
      <div class="card-title">📖 颉斌斌66句 · 每日滚动学习</div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <div style="flex:1;">
          <div class="kp-progress-bar">
            <div class="kp-progress-fill memorizing" style="width:${(current-1)/66*100}%;"></div>
            <div class="kp-progress-text">第 ${current} / 66 句</div>
          </div>
        </div>
        <button class="btn btn-outline btn-sm" onclick="xbbPrev()">上一句</button>
        <button class="btn btn-primary btn-sm" onclick="xbbNext()">下一句</button>
      </div>
      <div class="sentence-card-xbb" id="xbbCard">
        <div class="sentence-xbb-num">第 ${current} 句</div>
        <div class="sentence-xbb-en" id="xbbEn">${todaySentence.en || '（请点击编辑按钮录入今日句子）'}</div>
        <div class="sentence-xbb-btns">
          <button class="btn btn-outline btn-sm" onclick="xbbToggle('grammar')">📖 显示语法分析</button>
          <button class="btn btn-outline btn-sm" onclick="xbbToggle('zh')">📝 显示中文翻译</button>
          <button class="btn btn-outline btn-sm" onclick="xbbEdit(${current})">✏️ 编辑</button>
        </div>
        <div class="sentence-xbb-section" id="xbbGrammar" style="display:none;">
          <div class="sentence-xbb-label">语法分析</div>
          <div class="sentence-xbb-content">${todaySentence.grammar || '（暂无）'}</div>
        </div>
        <div class="sentence-xbb-section" id="xbbZh" style="display:none;">
          <div class="sentence-xbb-label">中文翻译</div>
          <div class="sentence-xbb-content">${todaySentence.zh || '（暂无）'}</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">➕ 自定义长难句</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">除了颉斌斌66句，你也可以添加其他长难句进行分析。</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="senEn" placeholder="输入英文长难句..." style="flex:1;" onkeypress="if(event.key==='Enter')addSentence()">
        <button class="btn btn-primary" onclick="addSentence()">添加句子</button>
      </div>
    </div>
    <div id="sentenceList"></div>
  `;

  renderSentenceList(Store.get('sentences', []));
};

function xbbToggle(section) {
  const el = document.getElementById('xbb' + (section === 'grammar' ? 'Grammar' : 'Zh'));
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function xbbEdit(num) {
  const data = Store.get('xbb66', { current: 1, sentences: {} });
  const s = data.sentences[num] || { en: '', grammar: '', zh: '' };
  modal(`编辑第 ${num} 句`, `
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">英文原句</label>
    <textarea class="textarea" id="xbbEnInput" style="margin-bottom:12px;">${s.en}</textarea>
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">语法分析</label>
    <textarea class="textarea" id="xbbGrammarInput" style="margin-bottom:12px;">${s.grammar}</textarea>
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">中文翻译</label>
    <textarea class="textarea" id="xbbZhInput">${s.zh}</textarea>
  `, (m) => {
    data.sentences[num] = {
      en: m.querySelector('#xbbEnInput').value.trim(),
      grammar: m.querySelector('#xbbGrammarInput').value.trim(),
      zh: m.querySelector('#xbbZhInput').value.trim()
    };
    Store.set('xbb66', data);
    switchModule('eng-sentence');
    return true;
  });
}

function xbbNext() {
  const data = Store.get('xbb66', { current: 1, sentences: {} });
  data.current = Math.min(66, (data.current || 1) + 1);
  Store.set('xbb66', data);
  switchModule('eng-sentence');
}

function xbbPrev() {
  const data = Store.get('xbb66', { current: 1, sentences: {} });
  data.current = Math.max(1, (data.current || 1) - 1);
  Store.set('xbb66', data);
  switchModule('eng-sentence');
}

function addSentence() {
  const en = document.getElementById('senEn').value.trim();
  if (!en) return;
  const m = modal('添加长难句', `
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">英文原句</label>
    <div style="font-size:15px;line-height:1.8;margin-bottom:12px;color:var(--text);">${en}</div>
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">中文翻译</label>
    <textarea class="textarea" id="senZh" placeholder="输入中文翻译..." style="margin-bottom:12px;"></textarea>
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">语法分析</label>
    <textarea class="textarea" id="senAnalysis" placeholder="分析句子结构（主语/谓语/从句/修饰成分等）..." style="min-height:120px;"></textarea>
  `, (modal) => {
    const zh = modal.querySelector('#senZh').value.trim();
    const analysis = modal.querySelector('#senAnalysis').value.trim();
    Store.push('sentences', { id: uid(), en, zh, analysis, time: now() });
    document.getElementById('senEn').value = '';
    renderSentenceList(Store.get('sentences'));
  });
}

function renderSentenceList(sentences) {
  const el = document.getElementById('sentenceList');
  if (!el) return;
  if (!sentences.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">还没有自定义长难句记录</div></div>';
    return;
  }
  el.innerHTML = sentences.map((s, i) => `
    <div class="sentence-card">
      <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;">
        <span style="font-size:12px;color:var(--text-light);">第 ${sentences.length - i} 句</span>
        <div>
          <button class="btn btn-outline btn-sm" onclick="editSentence('${s.id}')">编辑</button>
          <button class="todo-delete" onclick="delSentence('${s.id}')">✕</button>
        </div>
      </div>
      <div class="sentence-en">${s.en}</div>
      ${s.zh ? `<div class="sentence-zh">📄 ${s.zh}</div>` : ''}
      ${s.analysis ? `<div class="sentence-analysis"><span class="analysis-tag tag-blue">分析</span>${s.analysis.replace(/\n/g,'<br>')}</div>` : '<div style="font-size:12px;color:var(--text-light);">暂无分析</div>'}
    </div>
  `).join('');
}

function editSentence(id) {
  const sentences = Store.get('sentences');
  const s = sentences.find(x => x.id === id);
  if (!s) return;
  const m = modal('编辑长难句', `
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">英文原句</label>
    <textarea class="textarea" id="senEn" style="margin-bottom:12px;">${s.en}</textarea>
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">中文翻译</label>
    <textarea class="textarea" id="senZh" style="margin-bottom:12px;">${s.zh || ''}</textarea>
    <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">语法分析</label>
    <textarea class="textarea" id="senAnalysis" style="min-height:120px;">${s.analysis || ''}</textarea>
  `, (modal) => {
    s.en = modal.querySelector('#senEn').value.trim();
    s.zh = modal.querySelector('#senZh').value.trim();
    s.analysis = modal.querySelector('#senAnalysis').value.trim();
    Store.set('sentences', sentences);
    renderSentenceList(sentences);
  });
}

function delSentence(id) {
  Store.removeIn('sentences', id);
  renderSentenceList(Store.get('sentences'));
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

// ===== 政治模块（统一页面）=====
modules['politics'] = (c) => {
  renderCourseModule(c, 'politics', {
    titleSuffix: '（政治）',
    extraLinks: [
      { name: 'Markji政治卡组', url: 'https://www.markji.com/deck/editor/6a6ab653a1889901896b7c95', icon: '🎴' },
      { name: '幕布', url: 'https://mubu.com', icon: '🧠' }
    ]
  });

  // 追加资料直链和每日真题
  const wordLinks = Store.get('politicsWordLinks', []);
  const main = document.getElementById('content');
  const extraHTML = `
    <div class="card">
      <div class="card-title">📄 资料直链（Word/PDF）</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">添加Word/PDF等资料链接，一点即达。</p>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="input" id="wordLinkName" placeholder="资料名称（如：马原背诵笔记）" style="flex:1;">
        <input class="input" id="wordLinkUrl" placeholder="粘贴链接URL" style="flex:1;">
        <button class="btn btn-primary" onclick="addPoliticsWordLink()">添加</button>
      </div>
      <div id="wordLinkList"></div>
    </div>
    <div class="card">
      <div class="card-title">🎯 每日一题（历年真题选择题）</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">每天自动出一道历年考研政治选择题，做错自动收入错题本。</p>
      <div id="dailyQuizArea"></div>
    </div>
    <div class="card">
      <div class="card-title">📕 政治错题本</div>
      <div id="politicsWrongList"></div>
    </div>
  `;
  // 追加到content
  const div = document.createElement('div');
  div.innerHTML = extraHTML;
  main.appendChild(div);

  renderPoliticsWordLinks(wordLinks);
  renderDailyQuiz();
  renderPoliticsWrong();
};

function addPoliticsWordLink() {
  const name = document.getElementById('wordLinkName').value.trim();
  const url = document.getElementById('wordLinkUrl').value.trim();
  if (!name || !url) return;
  const links = Store.get('politicsWordLinks', []);
  links.unshift({ id: uid(), name, url, date: new Date().toISOString() });
  Store.set('politicsWordLinks', links);
  document.getElementById('wordLinkName').value = '';
  document.getElementById('wordLinkUrl').value = '';
  renderPoliticsWordLinks(links);
}

function deletePoliticsWordLink(id) {
  const links = Store.get('politicsWordLinks', []);
  const filtered = links.filter(l => l.id !== id);
  Store.set('politicsWordLinks', filtered);
  renderPoliticsWordLinks(filtered);
}

function renderPoliticsWordLinks(links) {
  const el = document.getElementById('wordLinkList');
  if (!el) return;
  if (!links.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--text-light);text-align:center;padding:16px;">暂无资料链接，点击上方添加</p>';
    return;
  }
  el.innerHTML = links.map(l => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;">
        <span style="font-size:18px;">📄</span>
        <div style="min-width:0;">
          <div style="font-size:14px;font-weight:600;">${l.name}</div>
          <div style="font-size:11px;color:var(--text-light);">${l.url}</div>
        </div>
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0;">
        <a class="btn btn-outline btn-sm" href="${l.url}" target="_blank">打开</a>
        <button class="todo-delete" onclick="deletePoliticsWordLink('${l.id}')">✕</button>
      </div>
    </div>
  `).join('');
}

// 政治每日真题
const POLITICS_QUIZ = [
  { q: '马克思主义哲学的直接理论来源是？', opts: ['德国古典哲学', '英国古典政治经济学', '法国空想社会主义', '黑格尔辩证法'], ans: 0, exp: '马克思主义哲学的直接理论来源是德国古典哲学，特别是黑格尔的辩证法和费尔巴哈的唯物主义。' },
  { q: '物质的唯一特性是？', opts: ['运动', '客观实在性', '可知性', '规律性'], ans: 1, exp: '物质的唯一特性是客观实在性，它存在于人的意识之外，为人的意识所反映。' },
  { q: '对立统一规律揭示了？', opts: ['事物发展的动力和源泉', '事物发展的状态和形式', '事物发展的方向和道路', '事物发展的总趋势'], ans: 0, exp: '对立统一规律揭示了事物发展的动力和源泉。质量互变规律揭示了事物发展的状态和形式。否定之否定规律揭示了事物发展的方向和道路。' },
  { q: '实践是检验真理的唯一标准，这是因为？', opts: ['实践是认识的来源', '实践具有直接现实性', '实践是认识发展的动力', '实践具有社会历史性'], ans: 1, exp: '实践是检验真理的唯一标准，是由真理的本性和实践的特点决定的。实践具有直接现实性，能够把主观和客观联系起来加以比较。' },
  { q: '社会存在中最基本的是？', opts: ['地理环境', '人口因素', '物质资料生产方式', '社会意识'], ans: 2, exp: '物质资料生产方式是社会存在中最基本的内容，它决定着社会的性质和面貌。' },
];

function renderDailyQuiz() {
  const el = document.getElementById('dailyQuizArea');
  if (!el) return;
  const dayStr = today();
  const seed = dayStr.split('-').join('');
  const idx = parseInt(seed) % POLITICS_QUIZ.length;
  const quiz = POLITICS_QUIZ[idx];
  const answered = Store.get('politicsQuizAnswered', {});
  const isAnswered = answered[dayStr];

  el.innerHTML = `
    <div style="background:var(--primary-light);border-radius:var(--radius);padding:16px;margin-bottom:12px;">
      <div style="font-size:12px;color:var(--primary);font-weight:700;margin-bottom:6px;">${dayStr} 每日一题</div>
      <div style="font-size:15px;font-weight:600;margin-bottom:12px;">${quiz.q}</div>
      <div id="quizOpts">
        ${quiz.opts.map((opt, i) => `
          <div style="padding:8px 12px;border:1px solid var(--border);border-radius:6px;margin-bottom:6px;cursor:pointer;font-size:13px;" onclick="answerQuiz(${i})" id="quizOpt${i}">
            ${String.fromCharCode(65+i)}. ${opt}
          </div>
        `).join('')}
      </div>
      <div id="quizResult"></div>
    </div>
  `;
  if (isAnswered !== undefined) {
    showQuizResult(quiz, isAnswered);
  }
}

function answerQuiz(idx) {
  const dayStr = today();
  const seed = dayStr.split('-').join('');
  const quizIdx = parseInt(seed) % POLITICS_QUIZ.length;
  const quiz = POLITICS_QUIZ[quizIdx];
  const answered = Store.get('politicsQuizAnswered', {});
  if (answered[dayStr] !== undefined) return;
  answered[dayStr] = idx;
  Store.set('politicsQuizAnswered', answered);
  if (idx !== quiz.ans) {
    // 加入错题本
    const wrongs = Store.get('politicsWrong', []);
    wrongs.unshift({ id: uid(), q: quiz.q, yourAns: quiz.opts[idx], correctAns: quiz.opts[quiz.ans], exp: quiz.exp, date: dayStr });
    Store.set('politicsWrong', wrongs);
    toast('答错了，已收入错题本');
  } else {
    toast('答对了！');
  }
  showQuizResult(quiz, idx);
  renderPoliticsWrong();
}

function showQuizResult(quiz, userAns) {
  const el = document.getElementById('quizResult');
  if (!el) return;
  const correct = userAns === quiz.ans;
  el.innerHTML = `
    <div style="margin-top:12px;padding:12px;border-radius:6px;background:${correct ? '#ebfbee' : '#fff0f6'};border:1px solid ${correct ? '#2f9e44' : '#d6336c'};">
      <div style="font-size:13px;font-weight:700;color:${correct ? '#2f9e44' : '#d6336c'};">
        ${correct ? '✅ 回答正确！' : '❌ 回答错误'}
      </div>
      ${!correct ? `<div style="font-size:13px;margin-top:4px;">你的答案：${quiz.opts[userAns]}</div><div style="font-size:13px;">正确答案：${quiz.opts[quiz.ans]}</div>` : ''}
      <div style="font-size:12px;color:var(--text-secondary);margin-top:6px;">💡 ${quiz.exp}</div>
    </div>
  `;
  // 禁用选项点击
  quiz.opts.forEach((_, i) => {
    const optEl = document.getElementById('quizOpt' + i);
    if (optEl) {
      optEl.style.cursor = 'default';
      optEl.style.pointerEvents = 'none';
      if (i === quiz.ans) optEl.style.background = '#ebfbee';
      else if (i === userAns) optEl.style.background = '#fff0f6';
    }
  });
}

function renderPoliticsWrong() {
  const wrongs = Store.get('politicsWrong', []);
  const el = document.getElementById('politicsWrongList');
  if (!el) return;
  if (!wrongs.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">暂无错题</div></div>';
    return;
  }
  el.innerHTML = wrongs.map(w => `
    <div class="knowledge-item" style="border-left:4px solid var(--danger);">
      <div class="knowledge-title">${w.q}</div>
      <div style="font-size:12px;color:var(--danger);margin-top:4px;">你的答案：${w.yourAns}</div>
      <div style="font-size:12px;color:var(--success);">正确答案：${w.correctAns}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">💡 ${w.exp}</div>
      <div style="font-size:11px;color:var(--text-light);margin-top:4px;">${w.date}</div>
    </div>
  `).join('');
}

// ===== 专业课模块（GIS/RS/GPS）=====
const MAJOR_DATA = {
  GIS: {
    name: 'GIS系统', icon: '🗺️',
    textbook: '《地理信息系统教程》(第二版) 汤国安主编, 高等教育出版社, 2019',
    chapters: [
      { id: 'gis-p1', name: '第一部分：GIS的基本概念', sections: [
        'GIS的基本概念', 'GIS的组成和功能', 'GIS与其他学科的关系', 'GIS应用范畴', 'GIS发展历程', 'GIS的发展趋势与研究热点'
      ]},
      { id: 'gis-p2', name: '第二部分：地理空间数据采集与管理', sections: [
        '地理空间数学基础', '地理空间与空间数据模型', '空间数据与空间数据结构', '空间数据组织与管理', '空间数据采集与处理'
      ]},
      { id: 'gis-p3', name: '第三部分：空间数据分析', sections: [
        '空间数据分析的概念', '空间对象的基本度量方法', '常用空间分析方法', 'DEM的概念与建模', '数字地形分析', '空间统计的概念与基本统计量', '空间数据分析方法', '空间数据插值', '空间统计分析与空间关系建模'
      ]},
      { id: 'gis-p4', name: '第四部分：地理信息可视化', sections: [
        '地理信息可视化的概念', '地理信息输出方式与类型', '地理信息可视化的原则', '地理信息可视化的形式'
      ]}
    ]
  },
  RS: {
    name: 'RS遥感', icon: '🛰️',
    textbook: '《遥感原理与应用》(第四版) 方圣辉等著, 武汉大学出版社, 2024',
    chapters: [
      { id: 'rs-p1', name: '第一部分：遥感的基本概念', sections: [
        '遥感的定义', '遥感分类', '遥感技术系统（遥感过程）'
      ]},
      { id: 'rs-p2', name: '第二部分：遥感物理基础', sections: [
        '电磁辐射的物理量', '黑体辐射规律', '太阳辐射经过大气层的物理传输过程与机理', '大气窗口的概念和应用', '地物反射规律', '典型地物的反射波谱特征'
      ]},
      { id: 'rs-p3', name: '第三部分：遥感成像原理', sections: [
        '遥感图像特征参数的概念与理解', '扫描成像传感器工作原理', '侧视雷达传感器工作原理'
      ]},
      { id: 'rs-p4', name: '第四部分：遥感图像处理与应用', sections: [
        '遥感图像校正（大气校正和几何校正）', '遥感图像运算的原理与方法', '空间滤波的原理与方法', '多光谱变换及彩色变换的原理与方法'
      ]},
      { id: 'rs-p5', name: '第五部分：遥感图像计算机解译', sections: [
        '遥感图像分类的概念与原理', '特征提取的定义及意义', '特征提取的方法', '监督分类的定义及方法', '监督分类和非监督分类的区别', '深度学习等AI技术在遥感领域的应用', '遥感技术的发展趋势'
      ]}
    ]
  },
  GPS: {
    name: 'GPS定位', icon: '📡',
    textbook: '《GPS测量与数据处理》(第四版) 李征航等著, 武汉大学出版社, 2024',
    chapters: [
      { id: 'gps-p1', name: '第一部分：绪论与GNSS时空基准', sections: [
        'GNSS定位技术的优越性', 'GNSS发展历程', 'GNSS基本定位原理', 'GNSS系统及各系统特点', 'PNT',
        'UTC/TAI/GPST/BDT时间系统含义及转换', 'GPS周、年积日与公历互换', '天球坐标系与地球坐标系表达及相互转换'
      ]},
      { id: 'gps-p2', name: '第二部分：全球定位系统的组成及信号结构', sections: [
        'GNSS系统组成及功能', 'GNSS卫星信号分类', '导航电文含义和内容', '开普勒轨道六参数', '广播星历和精密星历'
      ]},
      { id: 'gps-p3', name: '第三部分：GNSS定位中的误差源、定位方法', sections: [
        'GNSS定位误差源分类', '钟误差', '卫星星历误差', '电离层延迟', '对流层延迟', '多路径误差',
        '伪距观测方程', '载波相位观测方程', '线性化及误差方程解算', '精度评定',
        '单差/双差/三差观测值', '宽巷/窄巷/无电离层延迟观测值', '周跳探测及修复方法', '整周模糊度解算方法',
        'DOP分类与表达', '网络RTK', 'CORS', '差分GNSS的发展'
      ]},
      { id: 'gps-p4', name: '第四部分：GNSS控制网的技术设计、外业与数据处理', sections: [
        'GNSS网的建立过程', 'GNSS测量的基本概念', 'GNSS网精度密度设计', '基准设计', '布网形式', '图形设计和设计指标',
        '作业调度', '观测作业', '成果验收和上交资料',
        'RINEX/SP3数据格式', 'GNSS基线解算模式', '质量控制指标和参考指标', 'GNSS网平差整体流程', 'GNSS高程测量'
      ]}
    ]
  }
};

function makeMajorModule(subject) {
  const cfg = MAJOR_DATA[subject];
  if (!cfg) return () => {};
  return (c) => {
    // 计算总知识点数和已完成数
    const allSections = cfg.chapters.flatMap(ch => ch.sections);
    const totalSections = allSections.length;
    const orgProgress = Store.get(`major_orgProgress_${subject}`, {});
    const organizedCount = Object.values(orgProgress).filter(Boolean).length;
    const memData = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
    const clozeStatus = Store.get(`major_cloze_${subject}`, {});

    c.innerHTML = `
      <div class="quick-links">
        <a class="quick-link" href="https://mubu.com" target="_blank">
          <span class="quick-link-icon">🧠</span>
          <div class="quick-link-info"><div class="quick-link-name">幕布</div><div class="quick-link-desc">${cfg.name}思维导图</div></div>
        </a>
      </div>
      <div class="card">
        <div class="card-title">${cfg.icon} ${cfg.name}</div>
        <p style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">教材：${cfg.textbook}</p>
        <!-- Markji 牌组管理 -->
        <div style="margin-bottom:16px;">
          <div style="font-size:13px;font-weight:700;margin-bottom:6px;">🎴 Markji 牌组</div>
          <div id="markjiLinks_${subject}"></div>
          <div style="display:flex;gap:6px;margin-top:6px;">
            <input class="input" id="mkjName_${subject}" placeholder="牌组名称" style="flex:1;font-size:13px;">
            <input class="input" id="mkjUrl_${subject}" placeholder="牌组链接" style="flex:1;font-size:13px;">
            <button class="btn btn-outline btn-sm" onclick="addMarkjiLink('${subject}')">+ 添加</button>
          </div>
        </div>
      </div>
      <!-- 知识点整理进度条 -->
      <div class="card">
        <div class="card-title">📊 知识点整理进度</div>
        <div class="kp-progress-bar">
          <div class="kp-progress-fill organizing" style="width:${totalSections ? organizedCount/totalSections*100 : 0}%;"></div>
          <div class="kp-progress-text">${organizedCount}/${totalSections} 已整理</div>
        </div>
        <div style="margin-top:12px;">
          ${cfg.chapters.map(ch => `
            <div style="margin-bottom:12px;">
              <div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:6px;">${ch.name}</div>
              ${ch.sections.map((sec, si) => {
                const secId = `${ch.id}_${si}`;
                const done = orgProgress[secId];
                return `<div style="display:flex;align-items:center;gap:6px;padding:4px 0;font-size:13px;">
                  <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleOrgProgress('${subject}','${secId}')" style="accent-color:var(--primary);">
                  <span style="${done ? 'text-decoration:line-through;color:var(--text-light);' : ''}">${sec}</span>
                </div>`;
              }).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <!-- 知识点背诵进度条 -->
      <div class="card">
        <div class="card-title">📋 知识点背诵进度</div>
        <div class="kp-round-tabs" id="memRounds_${subject}">
          ${memData.rounds.map((r, i) => `<span class="kp-round-tab ${i === memData.rounds.length - 1 ? 'active' : ''}" onclick="switchMemRound('${subject}',${i})">${r.name}</span>`).join('')}
          <span class="kp-round-tab" onclick="addMemRound('${subject}')" style="color:var(--primary);">+ 新增轮次</span>
        </div>
        <div class="kp-progress-bar">
          <div class="kp-progress-fill memorizing" id="memBar_${subject}" style="width:0%;"></div>
          <div class="kp-progress-text" id="memText_${subject}">0/0 已背诵</div>
        </div>
        <div id="memClozeList_${subject}"></div>
      </div>
      ${COURSE_CLOUD_TIP}
      <div class="card">
        <div class="card-title">🎬 ${cfg.name}网课入口</div>
        <div id="courseGroupList_${subject}"></div>
      </div>
      <div class="card">
        <div class="card-title">📄 资料直链</div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <input class="input" id="majorDocName_${subject}" placeholder="资料名称" style="flex:1;font-size:13px;">
          <input class="input" id="majorDocUrl_${subject}" placeholder="链接URL" style="flex:1;font-size:13px;">
          <button class="btn btn-primary btn-sm" onclick="addMajorDoc('${subject}')">添加</button>
        </div>
        <div id="majorDocList_${subject}"></div>
      </div>
    `;

    // 渲染 Markji 链接
    renderMarkjiLinks(subject);
    // 渲染网课分组
    renderCourseGroups(subject);
    // 渲染资料直链
    renderMajorDocs(subject);
    // 渲染背诵进度
    updateMemProgress(subject);
    // 渲染挖空背诵
    renderMemClozeList(subject);
  };
}

function addMarkjiLink(subject) {
  const name = document.getElementById(`mkjName_${subject}`).value.trim();
  const url = document.getElementById(`mkjUrl_${subject}`).value.trim();
  if (!name || !url) { toast('请填写完整'); return; }
  const links = Store.get(`markjiLinks_${subject}`, []);
  links.push({ id: uid(), name, url });
  Store.set(`markjiLinks_${subject}`, links);
  document.getElementById(`mkjName_${subject}`).value = '';
  document.getElementById(`mkjUrl_${subject}`).value = '';
  renderMarkjiLinks(subject);
  toast('已添加');
}

function delMarkjiLink(subject, id) {
  const links = Store.get(`markjiLinks_${subject}`, []);
  Store.set(`markjiLinks_${subject}`, links.filter(l => l.id !== id));
  renderMarkjiLinks(subject);
}

function renderMarkjiLinks(subject) {
  const links = Store.get(`markjiLinks_${subject}`, []);
  const el = document.getElementById(`markjiLinks_${subject}`);
  if (!el) return;
  if (!links.length) {
    el.innerHTML = '<div style="font-size:12px;color:var(--text-light);">暂无Markji牌组链接</div>';
    return;
  }
  el.innerHTML = links.map(l => `
    <div class="course-group-item">
      <span>🎴</span>
      <span style="flex:1;font-size:13px;font-weight:600;">${l.name}</span>
      <a class="btn btn-primary btn-sm" href="${l.url}" target="_blank" style="font-size:11px;padding:2px 8px;">打开</a>
      <button class="todo-delete" onclick="delMarkjiLink('${subject}','${l.id}')">✕</button>
    </div>
  `).join('');
}

function toggleOrgProgress(subject, secId) {
  const data = Store.get(`major_orgProgress_${subject}`, {});
  data[secId] = !data[secId];
  Store.set(`major_orgProgress_${subject}`, data);
  // 刷新进度条
  const cfg = MAJOR_DATA[subject];
  const total = cfg.chapters.flatMap(ch => ch.sections).length;
  const done = Object.values(data).filter(Boolean).length;
  const bar = document.querySelector('.kp-progress-fill.organizing');
  const text = document.querySelector('.kp-progress-text');
  if (bar) bar.style.width = `${total ? done/total*100 : 0}%`;
  if (text) text.textContent = `${done}/${total} 已整理`;
  // 刷新checkbox样式
  switchModule(currentModule);
}

function addMemRound(subject) {
  const name = prompt('输入轮次名称（如：第二轮、强化背诵）：');
  if (!name || !name.trim()) return;
  const data = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
  data.rounds.push({ name: name.trim(), items: {} });
  Store.set(`major_memorize_${subject}`, data);
  switchModule(currentModule);
}

function switchMemRound(subject, idx) {
  Store.set(`major_memCurrentRound_${subject}`, idx);
  switchModule(currentModule);
}

function updateMemProgress(subject) {
  const data = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
  const currentRound = Store.get(`major_memCurrentRound_${subject}`, data.rounds.length - 1);
  const round = data.rounds[currentRound] || data.rounds[0];
  const cfg = MAJOR_DATA[subject];
  const allSections = cfg.chapters.flatMap(ch => ch.sections);
  const total = allSections.length;
  const items = round.items || {};
  const done = Object.values(items).filter(v => v === 'familiar').length;
  const blur = Object.values(items).filter(v => v === 'blur').length;
  const forgot = Object.values(items).filter(v => v === 'forgot').length;
  const studied = done + blur + forgot;
  const bar = document.getElementById(`memBar_${subject}`);
  const text = document.getElementById(`memText_${subject}`);
  if (bar) bar.style.width = `${total ? studied/total*100 : 0}%`;
  if (text) text.textContent = `${studied}/${total} 已背诵（熟悉${done}·模糊${blur}·忘记${forgot}）`;
}

function renderMemClozeList(subject) {
  const data = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
  const currentRound = Store.get(`major_memCurrentRound_${subject}`, data.rounds.length - 1);
  const round = data.rounds[currentRound] || data.rounds[0];
  const items = round.items || {};
  const cfg = MAJOR_DATA[subject];
  const el = document.getElementById(`memClozeList_${subject}`);
  if (!el) return;
  let html = '<div style="margin-top:12px;font-size:13px;font-weight:700;margin-bottom:8px;">知识点挖空背诵（标记掌握程度）</div>';
  cfg.chapters.forEach(ch => {
    html += `<div style="margin-bottom:10px;"><div style="font-size:12px;font-weight:600;color:var(--primary);margin-bottom:4px;">${ch.name}</div>`;
    ch.sections.forEach((sec, si) => {
      const secId = `${ch.id}_${si}`;
      const status = items[secId];
      const cls = status === 'familiar' ? 'familiar' : status === 'blur' ? 'blur' : status === 'forgot' ? 'forgot' : '';
      html += `
        <div class="kp-cloze-item ${cls}">
          <span style="flex:1;">${sec}</span>
          <div class="kp-cloze-btns">
            <button class="kp-btn-familiar" onclick="setMemStatus('${subject}','${secId}','familiar')">熟悉</button>
            <button class="kp-btn-blur" onclick="setMemStatus('${subject}','${secId}','blur')">模糊</button>
            <button class="kp-btn-forgot" onclick="setMemStatus('${subject}','${secId}','forgot')">忘记</button>
          </div>
        </div>
      `;
    });
    html += '</div>';
  });
  el.innerHTML = html;
}

function setMemStatus(subject, secId, status) {
  const data = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
  const currentRound = Store.get(`major_memCurrentRound_${subject}`, data.rounds.length - 1);
  if (!data.rounds[currentRound]) data.rounds[currentRound] = { name: '当前轮', items: {} };
  if (!data.rounds[currentRound].items) data.rounds[currentRound].items = {};
  // 如果再次点击相同状态则取消
  if (data.rounds[currentRound].items[secId] === status) {
    delete data.rounds[currentRound].items[secId];
  } else {
    data.rounds[currentRound].items[secId] = status;
  }
  Store.set(`major_memorize_${subject}`, data);
  updateMemProgress(subject);
  renderMemClozeList(subject);
}

function addMajorDoc(subject) {
  const name = document.getElementById(`majorDocName_${subject}`).value.trim();
  const url = document.getElementById(`majorDocUrl_${subject}`).value.trim();
  if (!name || !url) return;
  const docs = Store.get(`majorDocs_${subject}`, []);
  docs.unshift({ id: uid(), name, url });
  Store.set(`majorDocs_${subject}`, docs);
  document.getElementById(`majorDocName_${subject}`).value = '';
  document.getElementById(`majorDocUrl_${subject}`).value = '';
  renderMajorDocs(subject);
  toast('已添加');
}

function delMajorDoc(subject, id) {
  const docs = Store.get(`majorDocs_${subject}`, []);
  Store.set(`majorDocs_${subject}`, docs.filter(d => d.id !== id));
  renderMajorDocs(subject);
}

function renderMajorDocs(subject) {
  const docs = Store.get(`majorDocs_${subject}`, []);
  const el = document.getElementById(`majorDocList_${subject}`);
  if (!el) return;
  if (!docs.length) {
    el.innerHTML = '<div style="font-size:12px;color:var(--text-light);">暂无资料链接</div>';
    return;
  }
  el.innerHTML = docs.map(d => `
    <div class="course-group-item">
      <span>📄</span>
      <span style="flex:1;font-size:13px;font-weight:600;">${d.name}</span>
      <a class="btn btn-primary btn-sm" href="${d.url}" target="_blank" style="font-size:11px;padding:2px 8px;">打开</a>
      <button class="todo-delete" onclick="delMajorDoc('${subject}','${d.id}')">✕</button>
    </div>
  `).join('');
}

modules['major-gis'] = makeMajorModule('GIS');
modules['major-rs'] = makeMajorModule('RS');
modules['major-gps'] = makeMajorModule('GPS');

// ===== 番茄钟 =====
let pomoTimer = null;
let pomoSeconds = 25 * 60;
let pomoMode = 'work'; // work / break
let pomoCount = 0;
let pomoWorkMin = 25;
let pomoBreakMin = 5;
let pomoTask = ''; // 当前专注任务

modules['pomodoro'] = (c) => {
  const todayRecords = Store.getByDate('pomodoro', currentDate) || { count: 0, total: 0, sessions: [] };

  c.innerHTML = `
    <div class="card" style="text-align:center;">
      <div class="card-title">🍅 番茄钟</div>
      <div id="pomoDisplay" style="font-size:72px;font-weight:800;color:var(--primary);font-variant-numeric:tabular-nums;margin:20px 0;">${pomoWorkMin}:00</div>
      <div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;" id="pomoStatus">准备开始专注</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-bottom:16px;">
        <button class="btn btn-primary" id="pomoStartBtn" onclick="pomoStart()">▶ 开始</button>
        <button class="btn btn-outline" id="pomoPauseBtn" onclick="pomoPause()">⏸ 暂停</button>
        <button class="btn btn-outline" onclick="pomoReset()">🔄 重置</button>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;align-items:center;margin-bottom:12px;">
        <button class="btn btn-outline btn-sm ${pomoMode==='work'?'active':''}" onclick="pomoSetMode('work')">专注</button>
        <button class="btn btn-outline btn-sm ${pomoMode==='break'?'active':''}" onclick="pomoSetMode('break')">休息</button>
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
      <div class="stat-card"><div class="stat-value">${todayRecords.count}</div><div class="stat-label">今日番茄数</div></div>
      <div class="stat-card"><div class="stat-value">${todayRecords.total}</div><div class="stat-label">今日专注分钟</div></div>
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

function pomoStart() {
  if (pomoTimer) return;
  pomoTimer = setInterval(() => {
    pomoSeconds--;
    updatePomoDisplay();
    if (pomoSeconds <= 0) {
      pomoFinish();
    }
  }, 1000);
  const status = document.getElementById('pomoStatus');
  if (status) status.textContent = pomoMode === 'work' ? '专注中...' : '休息中...';
}

function pomoPause() {
  if (pomoTimer) {
    clearInterval(pomoTimer);
    pomoTimer = null;
    const status = document.getElementById('pomoStatus');
    if (status) status.textContent = '已暂停';
  }
}

function pomoReset() {
  clearInterval(pomoTimer);
  pomoTimer = null;
  pomoSeconds = pomoMode === 'work' ? pomoWorkMin * 60 : pomoBreakMin * 60;
  updatePomoDisplay();
  const status = document.getElementById('pomoStatus');
  if (status) status.textContent = pomoMode === 'work' ? '准备开始专注' : '准备休息';
}

function pomoSetMode(mode) {
  pomoMode = mode;
  pomoReset();
  document.querySelectorAll('.btn-sm').forEach(b => {
    if (b.textContent.trim() === '专注' || b.textContent.trim() === '休息') {
      b.classList.toggle('active', (mode === 'work' && b.textContent.trim() === '专注') || (mode === 'break' && b.textContent.trim() === '休息'));
    }
  });
}

function pomoFinish() {
  clearInterval(pomoTimer);
  pomoTimer = null;
  if (pomoMode === 'work') {
    const data = Store.getByDate('pomodoro', currentDate) || { count: 0, total: 0, sessions: [] };
    data.count++;
    data.total += pomoWorkMin;
    data.sessions = data.sessions || [];
    data.sessions.unshift({
      task: pomoTask || '未记录',
      minutes: pomoWorkMin,
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    });
    Store.setByDate('pomodoro', currentDate, data);
    pomoCount++;
    toast('🎉 专注完成！休息一下~');
    pomoMode = 'break';
    pomoSeconds = pomoBreakMin * 60;
  } else {
    toast('休息结束，继续专注！');
    pomoMode = 'work';
    pomoSeconds = pomoWorkMin * 60;
  }
  updatePomoDisplay();
  if (currentModule === 'pomodoro') switchModule('pomodoro');
  if (currentModule === 'dashboard') { updateDashPomoDisplay(); renderDashPomoHistory(); }
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
  // 悬浮窗按钮
  const float = document.getElementById('pomodoroFloat');
  document.getElementById('pomoStart').addEventListener('click', pomoStart);
  document.getElementById('pomoPause').addEventListener('click', pomoPause);
  document.getElementById('pomoReset').addEventListener('click', pomoReset);
  // 显示悬浮窗（当不在番茄钟模块时）
  // 暂时隐藏
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
