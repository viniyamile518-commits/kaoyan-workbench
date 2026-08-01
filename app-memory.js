/* ===== 考研工作台 v2 · 记忆与专业课模块 =====
 * 依赖：app.js（Store / CloudSync / TimerBus / DataLoader / utils / modules 注册表）
 * 加载顺序：app.js → app-memory.js → app-planner.js
 * 命名空间约定：mem* / kp* / major* / cloze* / sm2* / rsp* / markji*
 */

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
      <div class="kp-progress-bar" id="kp-sec-math-all">
        <div class="kp-progress-fill memorizing" style="width:${total ? Math.round(mastered/total*100) : 0}%;"></div>
        <div class="kp-progress-text">${mastered}/${total} 已掌握（${total ? Math.round(mastered/total*100) : 0}%）</div>
      </div>
      <div class="kp-progress-labels" id="kp-sec-math-labels">
        <span>待复习：${due.length}</span>
        <span>已掌握：${mastered}</span>
        <span>总计：${total}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🧮 临界复习点</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        基于 SM-2 变体 + 遗忘曲线（RSP 队列）排序，以下知识点即将遗忘或已到期，请逐一确认。
        点击"认识"延长复习间隔，"忘记"当天重排队尾。
      </p>
      <div id="reviewQueue"></div>
    </div>
    <div class="card">
      <div class="card-title">🎴 Markji 卡片背诵（公式速查）</div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;">
        来源：Markji「27考研数学公式大全（高数篇）」共 516 张卡片，按章节浏览、搜索、标记掌握。
        首次进入全部为「未学」。
      </p>
      <!-- [v2/T06] 批量标记工具栏（决策 D2） -->
      <div id="markjiToolbar" style="display:flex;gap:8px;margin-bottom:12px;align-items:center;">
        <input class="input" id="formulaSearch" placeholder="搜索卡片名称..." style="flex:1;" oninput="filterFormulas()">
        <button class="btn btn-outline btn-sm" onclick="bulkMarkMarkjiMastered()" style="white-space:nowrap;">⚡ 批量标记已掌握</button>
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

/* ══════════════════════════════════════════════════════════════
 * [v2/T08] SM-2 变体 + 遗忘曲线稳定度（ARCH §1.5 A5）
 * 交互层三档（0=忘记 1=模糊 2=认识）与 v1 完全一致；
 * 新增 stability（S）用于 R(t)=exp(-t/S) 连续排序。
 * v1 的 sm2Review 保留不动，供尚未迁移的调用点使用。
 * ══════════════════════════════════════════════════════════════ */
const SM2_CFG = {
  EASE_INIT: 2.50, EASE_MIN: 1.30, EASE_MAX: 2.80,
  EASE_DELTA: { 0: -0.30, 1: -0.15, 2: +0.10 },   // 按 quality 调整难度因子
  FIRST_GAP: { 0: 0, 1: 1, 2: 1 },                // 首次复习后的间隔（天）
  SECOND_GAP: { 0: 1, 1: 2, 2: 3 },               // 第二次
  Q_FACTOR: { 1: 0.60, 2: 1.00 },                 // 第三次起的间隔缩放
  TARGET_RETENTION: 0.85,                         // 临界复习点的目标记忆率
  MAX_INTERVAL: 180,
  DONE_REPS: 6                                    // 达标视为「已掌握」
};
/** 由 R(t)=exp(-t/S)=0.85 反推：t = S × (-ln 0.85) ≈ S × 0.16252 */
const LN_R = -Math.log(SM2_CFG.TARGET_RETENTION);

/**
 * 初始化一个全新的 MemState（ARCH §3.1）
 * @param {string} id                条目唯一 id
 * @param {string} [todayS]          'YYYY-MM-DD'，默认今天
 * @returns {object} 全新 MemState
 */
function initMemState(id, todayS) {
  const t = todayS || todayStr();
  return {
    id: id,
    reps: 0,
    ease: SM2_CFG.EASE_INIT,
    interval: 0,
    stability: 0,
    lapses: 0,
    lastQuality: null,
    lastReview: null,
    nextReview: t,
    done: false
  };
}

/**
 * SM-2 变体复习计算（纯函数，不修改入参）
 * @param {object} s        当前 MemState
 * @param {0|1|2} quality   0=忘记 1=模糊 2=认识
 * @param {string} todayS   'YYYY-MM-DD'
 * @returns {object} 全新 MemState
 *
 * 计算样例（T08 验收）：s={reps:3, ease:2.50, interval:6}, quality=1
 *   → ease = clamp(2.50 - 0.15) = 2.35
 *   → interval = round(6 × 2.35 × 0.60) = round(8.46) = 8
 *   → stability = 8 / 0.16252 ≈ 49.2
 */
function sm2ReviewV2(s, quality, todayS) {
  const src = s || {};
  const t = todayS || todayStr();
  const q = (quality === 0 || quality === 1 || quality === 2) ? quality : 2;
  const reps = typeof src.reps === 'number' ? src.reps : 0;
  let lapses = typeof src.lapses === 'number' ? src.lapses : 0;
  let ease = typeof src.ease === 'number' ? src.ease : SM2_CFG.EASE_INIT;
  let interval = 0;

  ease = clamp(ease + SM2_CFG.EASE_DELTA[q], SM2_CFG.EASE_MIN, SM2_CFG.EASE_MAX);

  let nextReps;
  if (q === 0) {
    // 忘记：重置节奏，当天再来一次
    nextReps = 0;
    lapses += 1;
    interval = 0;
  } else if (reps === 0) {
    nextReps = 1;
    interval = SM2_CFG.FIRST_GAP[q];
  } else if (reps === 1) {
    nextReps = 2;
    interval = SM2_CFG.SECOND_GAP[q];
  } else {
    nextReps = reps + 1;
    const prev = Math.max(1, src.interval || 1);
    interval = Math.round(prev * ease * SM2_CFG.Q_FACTOR[q]);
  }
  interval = Math.min(Math.max(0, interval), SM2_CFG.MAX_INTERVAL);

  // 稳定度：使 R(interval) 恰为 TARGET_RETENTION
  const stability = interval > 0 ? interval / LN_R : 0;

  return Object.assign({}, src, {
    reps: nextReps,
    ease: ease,
    interval: interval,
    stability: stability,
    lapses: lapses,
    lastQuality: q,
    lastReview: t,
    nextReview: dateOffset(t, interval),
    done: nextReps >= SM2_CFG.DONE_REPS
  });
}

/**
 * 当前记忆保持率 R(t) = exp(-t / S)
 * @param {object} s       MemState
 * @param {string} todayS  'YYYY-MM-DD'
 * @returns {number} 0..1；从未复习过返回 0
 */
function retention(s, todayS) {
  if (!s || !s.lastReview || !s.stability) return 0;
  const t = daysBetween(s.lastReview, todayS || todayStr());
  if (t <= 0) return 1;
  return Math.exp(-t / s.stability);
}

/**
 * 距离临界复习点还有几天（负数 = 已过期）
 * @param {object} s       MemState
 * @param {string} todayS  'YYYY-MM-DD'
 * @returns {number} 整数天数
 */
function daysToCritical(s, todayS) {
  if (!s || !s.nextReview) return 0;
  return daysBetween(todayS || todayStr(), s.nextReview);
}

/* ══════════════════════════════════════════════════════════════
 * [v2/T09] RSP 队列排序（Gumbel-Top-k 采样）
 * 同一天同一 salt → 顺序完全确定；隔天自动换序，避免位置记忆。
 * hashStr / mulberry32 已在 app.js 工具层定义（T02），此处直接复用。
 * ══════════════════════════════════════════════════════════════ */

/**
 * RSP 随机化排序
 * @param {object[]} items
 * @param {string} todayS
 * @param {{temperature?:number, salt?:string}} [opts] temperature: 0=纯贪心 1=近随机，默认 0.35
 * @returns {object[]} 排序后的新数组（不修改入参）
 */
function rspOrder(items, todayS, opts = {}) {
  const list = Array.isArray(items) ? items : [];
  if (list.length <= 1) return list.slice();
  const t = todayS || todayStr();
  const rawT = typeof opts.temperature === 'number' ? opts.temperature : 0.35;
  const rnd = mulberry32(hashStr(t + '|' + (opts.salt || '')));

  const scored = list.map(it => {
    const urgency = 1 - retention(it, t);                                  // 0..1
    const overdue = Math.min(Math.max(0, -daysToCritical(it, t)) / 30, 1);
    const lapsePenalty = Math.min((it.lapses || 0) / 5, 1);                // 常错优先
    const utility = urgency * 0.55 + overdue * 0.30 + lapsePenalty * 0.15;
    if (rawT <= 0) {
      // T=0 退化为纯贪心：不注入 gumbel 噪声
      return { it: it, score: utility };
    }
    const T = Math.max(rawT, 1e-3);
    const gumbel = -Math.log(-Math.log(rnd() + 1e-9) + 1e-9);
    return { it: it, score: utility / T + gumbel };
  });

  return scored.sort((a, b) => b.score - a.score).map(x => x.it);
}

/**
 * 构建今日复习队列
 * @param {object[]} pool   该学科全部条目（MemState）
 * @param {string} todayS   'YYYY-MM-DD'
 * @param {{limit?:number, salt?:string, temperature?:number}} [opts]
 * @returns {{queue:object[], dueCount:number, filledCount:number}}
 */
function buildReviewQueue(pool, todayS, opts = {}) {
  const t = todayS || todayStr();
  const limit = typeof opts.limit === 'number' ? opts.limit : 20;
  const alive = (Array.isArray(pool) ? pool : []).filter(p => p && !p.done);

  const dueSet = new Set();
  const due = alive.filter(p => {
    const isDue = !p.nextReview || p.nextReview <= t;
    if (isDue) dueSet.add(p);
    return isDue;
  });

  let queue = rspOrder(due, t, opts);

  let filled = 0;
  if (queue.length < limit) {
    // 到期不足则用「记忆率最低的未到期项」补齐，保证每日有稳定任务量
    const rest = alive
      .filter(p => !dueSet.has(p))
      .sort((a, b) => retention(a, t) - retention(b, t));
    const need = limit - queue.length;
    filled = Math.min(need, rest.length);
    queue = queue.concat(rest.slice(0, filled));
  }
  return { queue: queue.slice(0, limit), dueCount: due.length, filledCount: filled };
}

function addMathPoint() {
  const subject = document.getElementById('ptSubject').value;
  const chapter = document.getElementById('ptChapter').value.trim();
  const name = document.getElementById('ptName').value.trim();
  if (!name) return;
  // [v2/T08] 用 initMemState 统一初始化 MemState 字段（含 stability / lapses / lastQuality）
  Store.push('mathPoints', Object.assign(
    initMemState(uid('mp_'), today()),
    { subject: subject, chapter: chapter, name: name, createdAt: today() }
  ));
  document.getElementById('ptName').value = '';
  renderReviewQueue();
  renderPointList(Store.get('mathPoints'));
  patchMathProgress();
  toast('已添加知识点');
}

/**
 * [v2/T04-1] 局部刷新数学模块的记忆进度条（作用域化，不再用全局选择器）
 * @returns {void}
 */
function patchMathProgress() {
  const points = Store.get('mathPoints', []);
  const total = points.length;
  const mastered = points.filter(p => p.done).length;
  patchProgress('kp-sec-math-all', mastered, total, '已掌握');
  const labels = document.getElementById('kp-sec-math-labels');
  if (labels) {
    const due = points.filter(p => !p.done && (!p.nextReview || p.nextReview <= today())).length;
    labels.innerHTML = `<span>待复习：${due}</span><span>已掌握：${mastered}</span><span>总计：${total}</span>`;
  }
}

/**
 * [v2/T10] 统一复习队列渲染（数学）
 * 与专业课共用 buildReviewQueue / rspOrder / renderMemCard，无算法分支。
 * @returns {void}
 */
function renderReviewQueue() {
  const el = document.getElementById('reviewQueue');
  if (!el) return;
  const points = Store.get('mathPoints', []);
  const result = buildReviewQueue(points, today(), { limit: 20, salt: 'math' });
  if (!result.queue.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-state-text">🎉 今天没有需要复习的知识点！</div></div>';
    return;
  }
  const tip = result.filledCount > 0
    ? `<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">到期 ${result.dueCount} 条，已用记忆率最低的 ${result.filledCount} 条补齐至 ${result.queue.length} 条。</div>`
    : `<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">今日到期 ${result.dueCount} 条。</div>`;
  el.innerHTML = tip + result.queue.map(p => renderMemCard({
    id: p.id,
    title: p.name,
    meta: `${p.subject || '数学'} · ${p.chapter || '未分类'}`,
    state: p,
    handler: 'reviewMathPoint',
    extraHTML: '<a class="btn btn-outline btn-sm" href="https://www.markji.com/deck/editor/69d50111c8664d4b8ab2aa38" target="_blank">去Markji</a>'
  })).join('');
}

/**
 * [v2/T10] 复习卡片 HTML（数学 / 专业课 / markji 共用）
 * @param {{id:string,title:string,meta:string,state:object,handler:string,extraHTML?:string}} cfg
 * @returns {string} HTML 片段
 */
function renderMemCard(cfg) {
  const s = cfg.state || {};
  const t = today();
  const r = Math.round(retention(s, t) * 100);
  const gap = daysToCritical(s, t);
  const overdueTag = gap < 0
    ? `<span style="color:var(--danger);font-weight:700;">逾期 ${-gap} 天</span>`
    : (gap === 0 ? '<span style="color:var(--warning);font-weight:700;">今日到期</span>' : `<span style="color:var(--text-light);">${gap} 天后到期</span>`);
  const strengthColor = r >= 85 ? 'var(--success)' : r >= 60 ? 'var(--warning)' : 'var(--danger)';
  const extra = cfg.extraHTML || '';
  return `
    <div class="review-item due" id="memcard-${cfg.id}">
      <div class="review-info">
        <div class="review-name">${cfg.title}</div>
        <div class="review-meta">
          ${cfg.meta} · 已复习${s.reps || 0}次 · 难度${(s.ease || SM2_CFG.EASE_INIT).toFixed(2)}
          · 遗忘${s.lapses || 0}次 ·
          <span style="color:${strengthColor};font-weight:700;">记忆强度 ${r}%</span> · ${overdueTag}
        </div>
      </div>
      <button class="btn btn-success btn-sm" onclick="${cfg.handler}('${cfg.id}',2)">✅ 认识</button>
      <button class="btn btn-outline btn-sm" style="color:var(--warning);" onclick="${cfg.handler}('${cfg.id}',1)">🟡 模糊</button>
      <button class="btn btn-outline btn-sm" style="color:var(--danger);" onclick="${cfg.handler}('${cfg.id}',0)">❌ 忘记</button>
      ${extra}
    </div>
  `;
}

/**
 * [v2/T10] 复习反馈：只做局部 DOM 操作，禁止整页重渲染（无闪烁、滚动不跳）
 * @param {string} id      条目 id
 * @param {0|1|2} quality  0=忘记 1=模糊 2=认识
 * @returns {void}
 */
function reviewMathPoint(id, quality) {
  const points = Store.get('mathPoints', []);
  const idx = points.findIndex(x => x.id === id);
  if (idx < 0) return;
  const next = sm2ReviewV2(points[idx], quality, today());
  points[idx] = Object.assign({}, points[idx], next);
  Store.set('mathPoints', points);

  const card = document.getElementById('memcard-' + id);
  const host = document.getElementById('reviewQueue');
  if (card && host) {
    card.remove();
    if (quality === 0) {
      // 忘记 → 当天重新出现在队尾（interval=0，nextReview 仍是今天）
      host.insertAdjacentHTML('beforeend', renderMemCard({
        id: id,
        title: points[idx].name,
        meta: `${points[idx].subject || '数学'} · ${points[idx].chapter || '未分类'}`,
        state: points[idx],
        handler: 'reviewMathPoint',
        extraHTML: '<a class="btn btn-outline btn-sm" href="https://www.markji.com/deck/editor/69d50111c8664d4b8ab2aa38" target="_blank">去Markji</a>'
      }));
    } else if (!host.querySelector('.review-item')) {
      host.innerHTML = '<div class="empty-state"><div class="empty-state-text">🎉 今天的复习全部完成！</div></div>';
    }
  }
  patchMathProgress();
  renderPointList(points);
  toast(quality === 2 ? '已标记为认识' : quality === 1 ? '已标记为模糊' : '已标记为忘记，当天重排');
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

/* ══════════════════════════════════════════════════════════════
 * [v2/T06] markji 516 卡片状态层 + 批量标记已掌握（决策 D2）
 * 数据源：/markji_knowledge.json（根目录，非 data/），516 条 × 14 章
 * 状态键：ky_markjiState —— 懒生成，只有被交互过的条目才落盘
 * v1 的 formulaMastered / /api/math-formulas 保留只读，UI 不再写入
 * ══════════════════════════════════════════════════════════════ */
const MARKJI_DECK_URL = 'https://www.markji.com/deck/63098585634a5d0ae1151c3a';
/** 批量标记撤销窗口（毫秒） */
const MARKJI_UNDO_MS = 30000;

let _formulas = [];              // markji 卡片原始数组（保留 v1 变量名，避免调用点大改）
let _formulaChapter = 'all';
let _formulaLoaded = false;
let _markjiUndoSnapshot = null;  // 30 秒撤销用的内存快照

/**
 * 懒生成 markji 状态表：已有的保留，缺失的补 initMemState。
 * 【不落盘】——避免 516 条在启动路径上产生一次大写入（ARCH §4.5）。
 * @param {object[]} cards  markji 卡片数组
 * @returns {Record<string, object>} 完整状态表（内存对象）
 */
function ensureMarkjiState(cards) {
  const list = Array.isArray(cards) ? cards : [];
  const saved = Store.get('markjiState', {}) || {};
  const t = today();
  const state = {};
  list.forEach(card => {
    state[card.id] = saved[card.id] || initMemState(card.id, t);
  });
  // 保留已落盘但当前数据源里已不存在的条目，防止换版数据时丢进度
  Object.keys(saved).forEach(id => { if (!state[id]) state[id] = saved[id]; });
  return state;
}

/**
 * 加载 markji 卡片并渲染（对外沿用 v1 函数名 loadFormulas）
 * @returns {void}
 */
function loadFormulas() {
  if (_formulaLoaded) { renderFormulaChapters(); renderFormulaList(); return; }
  DataLoader.markjiCards().then(doc => {
    _formulas = (doc && doc.items) || [];
    _formulaLoaded = true;
    renderFormulaChapters();
    renderFormulaList();
  }).catch(() => {
    const el = document.getElementById('formulaList');
    if (el) el.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:16px;">卡片数据加载失败，请确认服务器运行中</p>';
  });
}

function renderFormulaChapters() {
  const el = document.getElementById('formulaChapters');
  if (!el) return;
  const chapters = [...new Set(_formulas.map(f => f.chapter))];
  const state = ensureMarkjiState(_formulas);
  let html = `<button class="btn btn-sm ${_formulaChapter === 'all' ? 'btn-primary' : 'btn-outline'}" onclick="setFormulaChapter('all')" style="margin:0;">全部 (${_formulas.length})</button>`;
  chapters.forEach(ch => {
    const inCh = _formulas.filter(f => f.chapter === ch);
    const doneCount = inCh.filter(f => state[f.id] && state[f.id].done).length;
    html += `<button class="btn btn-sm ${_formulaChapter === ch ? 'btn-primary' : 'btn-outline'}" onclick="setFormulaChapter('${ch.replace(/'/g, "\\'")}')" style="margin:0;font-size:12px;">${ch} (${doneCount}/${inCh.length})</button>`;
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

/**
 * 按当前章节筛选 + 搜索词过滤后的卡片列表
 * @returns {object[]}
 */
function currentMarkjiFiltered() {
  const input = document.getElementById('formulaSearch');
  const search = ((input && input.value) || '').trim().toLowerCase();
  let filtered = _formulas;
  if (_formulaChapter !== 'all') filtered = filtered.filter(f => f.chapter === _formulaChapter);
  if (search) {
    filtered = filtered.filter(f =>
      (f.title || '').toLowerCase().includes(search) || (f.chapter || '').toLowerCase().includes(search)
    );
  }
  return filtered;
}

function renderFormulaList() {
  const el = document.getElementById('formulaList');
  if (!el) return;
  const state = ensureMarkjiState(_formulas);
  const filtered = currentMarkjiFiltered();

  const stats = document.getElementById('formulaStats');
  if (stats) {
    const doneCount = filtered.filter(f => state[f.id] && state[f.id].done).length;
    stats.textContent = `${doneCount}/${filtered.length} 已掌握`;
  }

  if (!filtered.length) {
    el.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:16px;">未找到匹配的卡片</p>';
    return;
  }

  const byChapter = {};
  filtered.forEach(f => {
    if (!byChapter[f.chapter]) byChapter[f.chapter] = [];
    byChapter[f.chapter].push(f);
  });

  let html = '';
  Object.keys(byChapter).forEach(ch => {
    html += `<div style="font-weight:700;font-size:13px;margin:8px 0 4px;padding:4px 8px;background:var(--primary-light);border-radius:6px;color:var(--primary);">${ch}</div>`;
    byChapter[ch].forEach(f => { html += markjiRowHTML(f, state[f.id]); });
  });
  el.innerHTML = html;
}

/**
 * 单张卡片的行 HTML（带作用域 id，供局部 patch）
 * @param {object} card
 * @param {object} s     MemState
 * @returns {string}
 */
function markjiRowHTML(card, s) {
  const st = s || initMemState(card.id, today());
  const done = !!st.done;
  const r = Math.round(retention(st, today()) * 100);
  const sub = done
    ? '已掌握'
    : (st.reps ? `复习${st.reps}次 · 强度${r}%` : '未学');
  return `
    <div class="knowledge-item" style="display:flex;justify-content:space-between;align-items:center;" id="mkj-row-${card.id}">
      <div style="min-width:0;">
        <span class="knowledge-title" style="${done ? 'color:var(--text-light);text-decoration:line-through;' : ''}">${card.title}</span>
        <span style="font-size:11px;color:var(--text-light);margin-left:6px;">${sub}</span>
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0;">
        <button class="btn btn-sm ${done ? 'btn-success' : 'btn-outline'}" onclick="toggleFormulaMastered('${card.id}')" style="font-size:11px;padding:2px 8px;">${done ? '✓ 已掌握' : '掌握'}</button>
        ${done ? `<button class="btn btn-sm btn-outline" onclick="resetMarkjiCard('${card.id}')" style="font-size:11px;padding:2px 8px;">重新学习</button>` : ''}
        <a class="btn btn-sm btn-outline" href="${MARKJI_DECK_URL}" target="_blank" style="font-size:11px;padding:2px 8px;text-decoration:none;">Markji</a>
      </div>
    </div>
  `;
}

/**
 * 局部刷新单张卡片（不重绘整表）
 * @param {string} id
 * @returns {void}
 */
function patchMarkjiRow(id) {
  const row = document.getElementById('mkj-row-' + id);
  if (!row) return;
  const card = _formulas.find(f => f.id === id);
  if (!card) return;
  const state = Store.get('markjiState', {}) || {};
  row.outerHTML = markjiRowHTML(card, state[id]);
}

/**
 * 「已掌握」的 MemState（reps 达标 + 最长间隔）
 * @param {string} id
 * @param {string} t  'YYYY-MM-DD'
 * @returns {object}
 */
function masteredMemState(id, t) {
  return {
    id: id,
    reps: SM2_CFG.DONE_REPS,
    ease: SM2_CFG.EASE_INIT,
    interval: SM2_CFG.MAX_INTERVAL,
    stability: SM2_CFG.MAX_INTERVAL / LN_R,
    lapses: 0,
    lastQuality: 2,
    lastReview: t,
    nextReview: dateOffset(t, SM2_CFG.MAX_INTERVAL),
    done: true
  };
}

/**
 * 单张卡片「掌握 / 取消掌握」（对外沿用 v1 函数名）
 * @param {string} id
 * @returns {void}
 */
function toggleFormulaMastered(id) {
  const state = ensureMarkjiState(_formulas);
  const t = today();
  state[id] = (state[id] && state[id].done) ? initMemState(id, t) : masteredMemState(id, t);
  Store.set('markjiState', state);
  patchMarkjiRow(id);
  renderFormulaChapters();
  const stats = document.getElementById('formulaStats');
  if (stats) {
    const filtered = currentMarkjiFiltered();
    stats.textContent = `${filtered.filter(f => state[f.id] && state[f.id].done).length}/${filtered.length} 已掌握`;
  }
}

/**
 * 单条「重新学习」：状态归零，仅该卡片 DOM patch（ARCH §4.5 末段）
 * @param {string} id
 * @returns {void}
 */
function resetMarkjiCard(id) {
  const state = ensureMarkjiState(_formulas);
  state[id] = initMemState(id, today());
  Store.set('markjiState', state);
  patchMarkjiRow(id);
  renderFormulaChapters();
  toast('已重置为未学');
}

/**
 * 批量把「未学 / 未掌握」的卡片标记为已掌握（决策 D2）
 * 二次确认 → 内存快照 → 落盘 → 30 秒内可撤销
 * @returns {void}
 */
function bulkMarkMarkjiMastered() {
  if (!_formulaLoaded || !_formulas.length) { toast('卡片尚未加载完成'); return; }
  const state = ensureMarkjiState(_formulas);
  const pending = _formulas.filter(f => !(state[f.id] && state[f.id].done));
  if (!pending.length) { toast('已经全部标记为掌握了'); return; }
  const okToGo = window.confirm(
    `将把 ${_formulas.length} 条中的 ${pending.length} 条未掌握卡片标记为已掌握，\n此操作可在 ${MARKJI_UNDO_MS / 1000} 秒内撤销。继续？`
  );
  if (!okToGo) return;

  // 深拷贝前态，供撤销
  _markjiUndoSnapshot = JSON.parse(JSON.stringify(Store.get('markjiState', {}) || {}));
  const t = today();
  pending.forEach(f => { state[f.id] = masteredMemState(f.id, t); });
  Store.set('markjiState', state);

  renderFormulaChapters();
  renderFormulaList();
  showMarkjiUndoBar(pending.length);

  // 30 秒后释放快照（global: 作用域，切视图不清除，保证撤销窗口完整）
  TimerBus.once('global:markjiUndo', () => {
    _markjiUndoSnapshot = null;
    const bar = document.getElementById('markjiUndoBar');
    if (bar) bar.remove();
  }, MARKJI_UNDO_MS);
}

/**
 * 显示带「撤销」按钮的提示条
 * @param {number} n 本次影响条数
 * @returns {void}
 */
function showMarkjiUndoBar(n) {
  const host = document.getElementById('markjiToolbar');
  const old = document.getElementById('markjiUndoBar');
  if (old) old.remove();
  if (!host) { toast(`已标记 ${n} 条为已掌握`); return; }
  host.insertAdjacentHTML('afterend', `
    <div id="markjiUndoBar" style="display:flex;align-items:center;gap:10px;margin-bottom:10px;padding:8px 12px;border-radius:8px;background:var(--primary-light);font-size:12px;">
      <span>✅ 已标记 ${n} 条为已掌握（${MARKJI_UNDO_MS / 1000} 秒内可撤销）</span>
      <button class="btn btn-sm btn-outline" onclick="undoBulkMarkMarkji()" style="font-size:11px;padding:2px 8px;">撤销</button>
    </div>
  `);
}

/**
 * 撤销上一次批量标记（30 秒窗口内有效）
 * @returns {void}
 */
function undoBulkMarkMarkji() {
  if (!_markjiUndoSnapshot) { toast('撤销窗口已过期'); return; }
  Store.set('markjiState', _markjiUndoSnapshot);
  _markjiUndoSnapshot = null;
  TimerBus.clear('global:markjiUndo');
  const bar = document.getElementById('markjiUndoBar');
  if (bar) bar.remove();
  renderFormulaChapters();
  renderFormulaList();
  toast('已撤销');
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
      <!-- 知识点整理进度条（[v2/T04-1] 每章独立作用域 id：kp-sec-{subject}-{chapterId}）-->
      <div class="card">
        <div class="card-title">📊 知识点整理进度</div>
        <div class="kp-progress-bar" id="kp-sec-${subject}-all">
          <div class="kp-progress-fill organizing" style="width:${totalSections ? Math.round(organizedCount/totalSections*100) : 0}%;"></div>
          <div class="kp-progress-text">${organizedCount}/${totalSections} 已整理（${totalSections ? Math.round(organizedCount/totalSections*100) : 0}%）</div>
        </div>
        <div style="margin-top:12px;">
          ${cfg.chapters.map(ch => {
            const chStat = calcSectionProgress(subject, ch.id, orgProgress);
            const chPct = chStat.total ? Math.round(chStat.done / chStat.total * 100) : 0;
            return `
            <div style="margin-bottom:12px;">
              <div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:6px;">${ch.name}</div>
              <div class="kp-progress-bar" id="kp-sec-${subject}-${ch.id}" style="height:6px;margin-bottom:6px;">
                <div class="kp-progress-fill organizing" style="width:${chPct}%;"></div>
                <div class="kp-progress-text">${chStat.done}/${chStat.total} 已整理（${chPct}%）</div>
              </div>
              ${ch.sections.map((sec, si) => {
                const secId = `${ch.id}_${si}`;
                const done = !!orgProgress[secId];
                return `<div style="display:flex;align-items:center;gap:6px;padding:4px 0;font-size:13px;" id="kp-pt-${subject}-${secId}">
                  <input type="checkbox" class="kp-check" ${done ? 'checked' : ''} onchange="toggleOrgProgress('${subject}','${secId}')" style="accent-color:var(--primary);">
                  <span class="kp-pt-label" style="${done ? 'text-decoration:line-through;color:var(--text-light);' : ''}">${sec}</span>
                </div>`;
              }).join('')}
            </div>`;
          }).join('')}
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
        <!-- [v2/T04-3] 补齐专业课缺失的「新建分组」输入框，与 renderCourseModule 的接线保持一致 -->
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          <input class="input" id="grpName_${subject}" placeholder="新分组名称（如：基础阶段）" style="flex:1;font-size:13px;">
          <button class="btn btn-outline btn-sm" onclick="addCourseGroup('${subject}')">+ 新建分组</button>
        </div>
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

/**
 * [v2/T04-1] 计算某一章（或整科）的整理完成度
 * @param {string} subject       'GIS' | 'RS' | 'GPS'
 * @param {string} chapterId     章 id，如 'gis-p1'；传 'all' 或空则统计整科
 * @param {object} [st]          整理状态表；省略时自动从 Store 读取
 * @returns {{done:number, total:number}}
 */
function calcSectionProgress(subject, chapterId, st) {
  const cfg = MAJOR_DATA[subject];
  if (!cfg) return { done: 0, total: 0 };
  const data = st || Store.get(`major_orgProgress_${subject}`, {});
  const chapters = (!chapterId || chapterId === 'all')
    ? cfg.chapters
    : cfg.chapters.filter(ch => ch.id === chapterId);
  let done = 0;
  let total = 0;
  chapters.forEach(ch => {
    ch.sections.forEach((_, si) => {
      total += 1;
      if (data[`${ch.id}_${si}`]) done += 1;
    });
  });
  return { done: done, total: total };
}

/**
 * [v2/T04-1 + T04-2] 切换某个知识点的「已整理」状态
 * 只做三处局部 patch：该行样式 → 本章进度条 → 整科进度条。
 * 严禁 switchModule(currentModule) 整页重渲染（会丢滚动位置且引发闪烁）。
 * @param {string} subject 'GIS' | 'RS' | 'GPS'
 * @param {string} secId   形如 'gis-p1_3'
 * @returns {void}
 */
function toggleOrgProgress(subject, secId) {
  const key = `major_orgProgress_${subject}`;
  const data = Store.get(key, {});
  data[secId] = !data[secId];
  Store.set(key, data);

  // ① 只改这一行的删除线样式
  const row = document.getElementById(`kp-pt-${subject}-${secId}`);
  if (row) {
    const box = row.querySelector('.kp-check');
    if (box) box.checked = !!data[secId];
    const label = row.querySelector('.kp-pt-label');
    if (label) {
      label.style.textDecoration = data[secId] ? 'line-through' : 'none';
      label.style.color = data[secId] ? 'var(--text-light)' : '';
    }
  }

  // ② 只改本章的进度条（secId 的前缀即 chapterId）
  const chapterId = secId.indexOf('_') > -1 ? secId.slice(0, secId.lastIndexOf('_')) : secId;
  const chStat = calcSectionProgress(subject, chapterId, data);
  patchProgress(`kp-sec-${subject}-${chapterId}`, chStat.done, chStat.total, '已整理');

  // ③ 整科总进度条
  const allStat = calcSectionProgress(subject, 'all', data);
  patchProgress(`kp-sec-${subject}-all`, allStat.done, allStat.total, '已整理');
}

/**
 * [v2/T04-2] 渲染背诵轮次标签条（取代 switchModule 整页重渲染）
 * @param {string} subject
 * @returns {void}
 */
function renderMemRoundTabs(subject) {
  const el = document.getElementById(`memRounds_${subject}`);
  if (!el) return;
  const data = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
  const current = Store.get(`major_memCurrentRound_${subject}`, data.rounds.length - 1);
  el.innerHTML = data.rounds.map((r, i) =>
    `<span class="kp-round-tab ${i === current ? 'active' : ''}" onclick="switchMemRound('${subject}',${i})">${r.name}</span>`
  ).join('') + `<span class="kp-round-tab" onclick="addMemRound('${subject}')" style="color:var(--primary);">+ 新增轮次</span>`;
}

function addMemRound(subject) {
  const name = prompt('输入轮次名称（如：第二轮、强化背诵）：');
  if (!name || !name.trim()) return;
  const data = Store.get(`major_memorize_${subject}`, { rounds: [{ name: '第一轮', items: {} }] });
  data.rounds.push({ name: name.trim(), items: {} });
  Store.set(`major_memorize_${subject}`, data);
  Store.set(`major_memCurrentRound_${subject}`, data.rounds.length - 1);
  // [v2/T04-2] 局部刷新，不再 switchModule(currentModule)
  renderMemRoundTabs(subject);
  updateMemProgress(subject);
  renderMemClozeList(subject);
  toast('已新增轮次：' + name.trim());
}

function switchMemRound(subject, idx) {
  Store.set(`major_memCurrentRound_${subject}`, idx);
  // [v2/T04-2] 局部刷新，不再 switchModule(currentModule)
  renderMemRoundTabs(subject);
  updateMemProgress(subject);
  renderMemClozeList(subject);
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
        <div class="kp-cloze-item ${cls}" id="kp-cloze-${subject}-${secId}">
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
  // [v2/T04-2] 只 patch 被点击的那一条，不整表重绘（避免长列表滚动跳动）
  const row = document.getElementById(`kp-cloze-${subject}-${secId}`);
  if (row) {
    const now = data.rounds[currentRound].items[secId] || '';
    row.className = 'kp-cloze-item ' + now;
  } else {
    renderMemClozeList(subject);
  }
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

