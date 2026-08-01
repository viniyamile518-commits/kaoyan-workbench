/* ===== 考研工作台 v2 · 规划与题库模块 =====
 * 依赖：app.js（Store / CloudSync / TimerBus / DataLoader / utils / modules 注册表）
 * 加载顺序：app.js → app-memory.js → app-planner.js
 * 命名空间约定：planner* / pol* / xbb* / goal* / quiz*
 */

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
      <div class="card-title" style="display:flex;align-items:center;justify-content:space-between;">
        <span>🎯 我的目标</span>
        <span style="display:flex;gap:6px;">
          <button class="btn btn-outline btn-sm" onclick="plannerClearTodayGoals()">🗑 清空今日</button>
          <button class="btn btn-outline btn-sm" onclick="plannerClearAllGoals()">🧹 清空全部</button>
        </span>
      </div>
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

  let html = renderGoalGroup(`📅 今日目标`, todoData.items, 'toggleTodo', 'delTodo', 'plannerClearTodayGoals');
  html += renderGoalGroup(`🗓 本月目标 (${monthKey()})`, monthlyData.items, 'toggleMonthly', 'delMonthly', 'plannerClearMonthly');
  if (phases.length) {
    html += phases.map(p => renderPhaseGroup(p)).join('');
  }
  box.innerHTML = html;
}

function renderGoalGroup(title, items, toggleFn, delFn, clearFn) {
  const clearBtn = clearFn ? `<button class="goal-clear" onclick="${clearFn}()">清空</button>` : '';
  return `
    <div class="goal-group">
      <div class="goal-group-title">${title} ${items.length ? `<span class="parse-count">${items.length}</span>` : ''} ${clearBtn}</div>
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

// 一键清空：今日目标
function plannerClearTodayGoals() {
  const data = Store.getByDate('todo', currentDate) || { items: [] };
  if (!data.items.length) { toast('今日目标本来就是空的'); return; }
  if (!confirm('确定清空「今日目标」？该操作不可恢复。')) return;
  Store.setByDate('todo', currentDate, { items: [] });
  renderPlannerMyGoals();
  if (typeof renderTodoList === 'function' && document.getElementById('todoList')) renderTodoList([]);
  toast('已清空今日目标');
}

// 一键清空：本月目标
function plannerClearMonthly() {
  const data = Store.getByDate('monthly', monthKey()) || { items: [] };
  if (!data.items.length) { toast('本月目标本来就是空的'); return; }
  if (!confirm('确定清空「本月目标」？该操作不可恢复。')) return;
  Store.setByDate('monthly', monthKey(), { items: [] });
  renderPlannerMyGoals();
  toast('已清空本月目标');
}

// 一键清空：我的目标（今日+本月+阶段）
function plannerClearAllGoals() {
  const todo = Store.getByDate('todo', currentDate) || { items: [] };
  const monthly = Store.getByDate('monthly', monthKey()) || { items: [] };
  const phases = Store.get('phases', []);
  if (!todo.items.length && !monthly.items.length && !phases.length) {
    toast('目标本来就是空的'); return;
  }
  if (!confirm('确定清空全部目标（今日+本月+阶段）？该操作不可恢复。')) return;
  Store.setByDate('todo', currentDate, { items: [] });
  Store.setByDate('monthly', monthKey(), { items: [] });
  Store.set('phases', []);
  renderPlannerMyGoals();
  if (typeof renderTodoList === 'function' && document.getElementById('todoList')) renderTodoList([]);
  toast('已清空全部目标');
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


// ----- 英语长难句 -----
// ----- 英语长难句（颉斌斌66句每日滚动）-----
modules['eng-sentence'] = (c) => {
  const BASE = window.XBB66_BASE || {};
  const THEORY = window.XBB66_THEORY || '';
  const xbbData = Store.get('xbb66', { current: 1, sentences: {} });
  const current = xbbData.current || 1;
  const todaySentence = xbbData.sentences[current] || BASE[current] || { en: '', grammar: '', zh: '' };

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
      <div class="card-title" style="cursor:pointer;" onclick="xbbToggleTheory()">📚 理论篇 · 方法论（点击展开/收起）</div>
      <div id="xbbTheory" style="display:none;max-height:380px;overflow:auto;font-size:13px;line-height:1.95;white-space:pre-wrap;color:var(--text);">${escapeHtml(THEORY)}</div>
    </div>
    <div class="card">
      <div class="card-title">📖 颉斌斌66句 · 每日滚动学习 <span style="font-size:11px;color:#94a3b8;font-weight:400;margin-left:6px;">${window.__XBB66_VERSION__ || 'fallback'}</span></div>
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

function xbbToggleTheory() {
  const el = document.getElementById('xbbTheory');
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function xbbEdit(num) {
  const data = Store.get('xbb66', { current: 1, sentences: {} });
  const s = data.sentences[num] || (window.XBB66_BASE && window.XBB66_BASE[num]) || { en: '', grammar: '', zh: '' };
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
      <div class="card-title">🎯 每日五题（历年真题选择题）</div>
      <p style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">
        每天从 125 道历年考研政治真题中确定性抽取 5 道，同日刷新题目不变、跨天自动换题；做错自动收入错题本。
      </p>
      <div id="dailyQuizArea"></div>
    </div>
    <div class="card">
      <div class="card-title">📕 政治错题本</div>
      <div id="politicsWrongList"></div>
    </div>
  `;
  // [v2/T04-4] 缺陷修复：v1 用 document.getElementById('content').appendChild(div)，
  // 与 host 参数 c 脱钩，切走再切回会重复追加。改为直接写入 host。
  c.insertAdjacentHTML('beforeend', extraHTML);

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

/* ══════════════════════════════════════════════════════════════
 * [v2/T07] 政治每日真题（R-48 / R-49）
 * 数据源：/data/politics_questions.json —— 125 道（84 单选 + 41 多选）
 * v1 缺陷：seed = 'YYYYMMDD' 数字 % length，在 125 题下分布严重不均
 *          （相邻日期几乎命中同一批题），且只出 1 道、只支持单选。
 * v2 修法：dailyPickN(questions, today, 'politics', 5) 确定性抽 5 道，
 *          结果写 politicsQuizState.dailySets[today] —— 同日刷新不变。
 *          多选精确匹配判分；错题自动进 ky_politicsWrong。
 * ══════════════════════════════════════════════════════════════ */
const POLITICS_DAILY_N = 5;
/** 当前已加载的题库（内存缓存，避免每次渲染都读 DataLoader） */
let _politicsQuestions = [];

/**
 * 读取（并按需初始化）政治刷题状态
 * @returns {{answered: object, dailySets: object}}
 */
function getPoliticsQuizState() {
  const st = Store.get('politicsQuizState', null) || {};
  if (!st.answered || typeof st.answered !== 'object') st.answered = {};
  if (!st.dailySets || typeof st.dailySets !== 'object') st.dailySets = {};
  return st;
}

/**
 * 取「今天这 5 道题」——第一次算完就落盘，之后同日恒定
 * @param {object[]} questions 全量题库
 * @param {string} dayStr      'YYYY-MM-DD'
 * @returns {object[]} 5 道题对象（数据缺失时按实际数量返回）
 */
function getDailyPoliticsSet(questions, dayStr) {
  if (!questions.length) return [];
  const st = getPoliticsQuizState();
  let ids = st.dailySets[dayStr];
  if (!Array.isArray(ids) || !ids.length) {
    ids = dailyPickN(questions, dayStr, 'politics', POLITICS_DAILY_N).map(q => q.id);
    st.dailySets[dayStr] = ids;
    Store.set('politicsQuizState', st);
  }
  const byId = {};
  questions.forEach(q => { byId[q.id] = q; });
  const picked = ids.map(id => byId[id]).filter(Boolean);
  // 题库版本变化导致 id 失效时，就地重算并覆盖，避免永久空白
  if (picked.length < Math.min(POLITICS_DAILY_N, questions.length)) {
    const fresh = dailyPickN(questions, dayStr, 'politics', POLITICS_DAILY_N);
    st.dailySets[dayStr] = fresh.map(q => q.id);
    Store.set('politicsQuizState', st);
    return fresh;
  }
  return picked;
}

/**
 * 判分：多选必须「精确匹配」——选项字母升序拼接后与 answer 严格相等
 * 「选对但不全」（如答案 ABC 只选 AB）判错。
 * @param {object} q         题目对象
 * @param {string[]} picked  用户勾选的字母数组，如 ['C','A']
 * @returns {{correct:boolean, answerText:string, pickedText:string}}
 */
function gradePolitics(q, picked) {
  const opts = (q && q.options) || {};
  const norm = (Array.isArray(picked) ? picked : []).slice().sort().join('');
  const std = String((q && q.answer) || '').split('').sort().join('');
  const toText = letters => String(letters || '')
    .split('')
    .map(L => `${L}. ${opts[L] || ''}`)
    .join('；');
  return {
    correct: norm.length > 0 && norm === std,
    answerText: toText(std),
    pickedText: toText(norm)
  };
}

/**
 * 渲染每日五题（异步：先占位再填充，避免白屏）
 * @param {HTMLElement} [host] 容器，省略时取 #dailyQuizArea
 * @returns {void}
 */
function renderDailyQuiz(host) {
  const el = host || document.getElementById('dailyQuizArea');
  if (!el) return;
  el.innerHTML = '<p style="font-size:13px;color:var(--text-light);padding:12px;">题库加载中…</p>';
  DataLoader.politicsQuestions().then(doc => {
    _politicsQuestions = (doc && doc.questions) || [];
    const target = host || document.getElementById('dailyQuizArea');
    if (!target) return;                      // 视图已切走
    if (!_politicsQuestions.length) {
      target.innerHTML = '<p style="font-size:13px;color:var(--text-light);padding:12px;">题库为空，请确认 /data/politics_questions.json 可访问。</p>';
      return;
    }
    paintDailyQuiz(target);
  });
}

/**
 * 实际绘制五题列表（同步，依赖 _politicsQuestions 已就绪）
 * @param {HTMLElement} el
 * @returns {void}
 */
function paintDailyQuiz(el) {
  const dayStr = today();
  const set = getDailyPoliticsSet(_politicsQuestions, dayStr);
  const st = getPoliticsQuizState();
  const doneCount = set.filter(q => st.answered[q.id]).length;

  el.innerHTML = `
    <div style="font-size:12px;color:var(--primary);font-weight:700;margin-bottom:8px;">
      ${dayStr} 每日五题　<span id="quizDoneCount">${doneCount}</span>/${set.length} 已作答
    </div>
    ${set.map((q, qi) => politicsQuizCardHTML(q, qi, st.answered[q.id])).join('')}
  `;
}

/**
 * 单题卡片 HTML
 * @param {object} q       题目
 * @param {number} qi      当天序号（1-based 展示）
 * @param {object} [rec]   已作答记录 {picked, correct, at}
 * @returns {string}
 */
function politicsQuizCardHTML(q, qi, rec) {
  const isMulti = q.type === 'multi';
  const letters = ['A', 'B', 'C', 'D'].filter(L => q.options && q.options[L] !== undefined);
  const answered = !!rec;
  const pickedSet = new Set(answered ? String(rec.picked || '').split('') : []);

  const optsHTML = letters.map(L => {
    let bg = '';
    if (answered) {
      const isRight = String(q.answer || '').indexOf(L) > -1;
      if (isRight) bg = 'background:#ebfbee;border-color:#2f9e44;';
      else if (pickedSet.has(L)) bg = 'background:#fff0f6;border-color:#d6336c;';
    }
    return `
      <div class="pq-opt" data-letter="${L}"
           style="padding:8px 12px;border:1px solid var(--border);border-radius:6px;margin-bottom:6px;font-size:13px;${answered ? 'pointer-events:none;cursor:default;' : 'cursor:pointer;'}${bg}"
           ${answered ? '' : `onclick="togglePoliticsOpt('${q.id}','${L}')"`}>
        <span style="font-weight:700;">${L}.</span> ${q.options[L]}
      </div>`;
  }).join('');

  return `
    <div class="pq-card" id="pq-${q.id}" data-qid="${q.id}" data-index="${qi}"
         style="background:var(--primary-light);border-radius:var(--radius);padding:16px;margin-bottom:12px;">
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;">
        第 ${qi + 1} 题 · ${q.year || ''}年 · ${q.tag || ''} ·
        <span style="font-weight:700;color:${isMulti ? 'var(--warning)' : 'var(--primary)'};">${isMulti ? '多选（少选/多选均判错）' : '单选'}</span>
      </div>
      <div style="font-size:15px;font-weight:600;margin-bottom:12px;">${q.question}</div>
      <div class="pq-opts">${optsHTML}</div>
      ${answered ? '' : `
        <button class="btn btn-primary btn-sm" onclick="submitPoliticsAnswer('${q.id}')" style="margin-top:4px;">提交答案</button>
        <span style="font-size:12px;color:var(--text-light);margin-left:8px;">${isMulti ? '可多选，选全才算对' : '选择一项'}</span>
      `}
      <div class="pq-result" id="pq-result-${q.id}">${answered ? politicsResultHTML(q, rec) : ''}</div>
    </div>
  `;
}

/**
 * 判分结果区 HTML
 * @param {object} q
 * @param {{picked:string, correct:boolean}} rec
 * @returns {string}
 */
function politicsResultHTML(q, rec) {
  const g = gradePolitics(q, String(rec.picked || '').split(''));
  const ok = rec.correct;
  return `
    <div style="margin-top:12px;padding:12px;border-radius:6px;background:${ok ? '#ebfbee' : '#fff0f6'};border:1px solid ${ok ? '#2f9e44' : '#d6336c'};">
      <div style="font-size:13px;font-weight:700;color:${ok ? '#2f9e44' : '#d6336c'};">
        ${ok ? '✅ 回答正确！' : '❌ 回答错误'}
      </div>
      ${ok ? '' : `<div style="font-size:13px;margin-top:4px;">你的答案：${g.pickedText || '（未选）'}</div>`}
      <div style="font-size:13px;margin-top:2px;">正确答案：${g.answerText}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:6px;">💡 ${q.explanation || '暂无解析'}</div>
    </div>
  `;
}

/**
 * 勾选/取消勾选一个选项（单选互斥，多选可叠加）
 * @param {string} qid
 * @param {string} letter 'A'|'B'|'C'|'D'
 * @returns {void}
 */
function togglePoliticsOpt(qid, letter) {
  const card = document.getElementById('pq-' + qid);
  if (!card) return;
  const q = _politicsQuestions.find(x => x.id === qid);
  const isMulti = q && q.type === 'multi';
  const target = card.querySelector(`.pq-opt[data-letter="${letter}"]`);
  if (!target) return;
  const on = target.getAttribute('data-picked') === '1';
  if (!isMulti) {
    card.querySelectorAll('.pq-opt').forEach(o => {
      o.setAttribute('data-picked', '0');
      o.style.background = '';
      o.style.borderColor = 'var(--border)';
    });
  }
  const next = on ? '0' : '1';
  target.setAttribute('data-picked', next);
  target.style.background = next === '1' ? 'var(--primary-light)' : '';
  target.style.borderColor = next === '1' ? 'var(--primary)' : 'var(--border)';
}

/**
 * 提交某一题的答案：判分 → 落盘 → 错题入库 → 只 patch 这一张卡
 * 全程不调用 switchModule，避免整页重渲染。
 * @param {string} qid
 * @returns {void}
 */
function submitPoliticsAnswer(qid) {
  const card = document.getElementById('pq-' + qid);
  const q = _politicsQuestions.find(x => x.id === qid);
  if (!card || !q) return;

  const picked = Array.from(card.querySelectorAll('.pq-opt'))
    .filter(o => o.getAttribute('data-picked') === '1')
    .map(o => o.getAttribute('data-letter'));
  if (!picked.length) { toast('请先选择答案'); return; }

  const g = gradePolitics(q, picked);
  const pickedStr = picked.slice().sort().join('');

  const st = getPoliticsQuizState();
  if (st.answered[qid]) return;                       // 已作答，不允许重复提交
  st.answered[qid] = { picked: pickedStr, correct: g.correct, at: Date.now() };
  Store.set('politicsQuizState', st);

  if (!g.correct) {
    const wrongs = Store.get('politicsWrong', []);
    wrongs.unshift({
      id: uid('pw_'),
      qid: qid,
      q: q.question,
      type: q.type,
      tag: q.tag || '',
      year: q.year || '',
      yourAns: g.pickedText,
      correctAns: g.answerText,
      exp: q.explanation || '',
      date: today()
    });
    Store.set('politicsWrong', wrongs);
    toast('答错了，已收入错题本');
  } else {
    toast('答对了！');
  }

  // 只重绘这一张卡（含禁用点击 + 结果区），其余题目与滚动位置不动
  const qi = Number(card.getAttribute('data-index') || 0);
  card.outerHTML = politicsQuizCardHTML(q, qi, st.answered[qid]);

  const counter = document.getElementById('quizDoneCount');
  if (counter) {
    const set = getDailyPoliticsSet(_politicsQuestions, today());
    counter.textContent = String(set.filter(x => st.answered[x.id]).length);
  }
  renderPoliticsWrong();
}

/**
 * 政治错题本（兼容 v1 已存在的旧结构：无 qid / type / tag 字段）
 * @returns {void}
 */
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
      <div style="font-size:11px;color:var(--text-light);margin-top:2px;">
        ${w.year ? w.year + '年 · ' : ''}${w.tag ? w.tag + ' · ' : ''}${w.type === 'multi' ? '多选' : '单选'}
      </div>
      <div style="font-size:12px;color:var(--danger);margin-top:4px;">你的答案：${w.yourAns}</div>
      <div style="font-size:12px;color:var(--success);">正确答案：${w.correctAns}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">💡 ${w.exp}</div>
      <div style="font-size:11px;color:var(--text-light);margin-top:4px;">${w.date}</div>
    </div>
  `).join('');
}

