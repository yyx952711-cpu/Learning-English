/* ============ 路由 & 页面渲染 ============ */
const $ = sel => document.querySelector(sel);
const viewEl = $("#view");
let currentTab = "home";
let stateStack = []; // 页面返回栈 {fn, arg}
let learnTimer = null; // 学习时长计时
let pageAudio = []; // 复盘用音频对象

function pushView(fn, arg) { stateStack.push({ fn: viewFn, arg: viewArg }); viewFn = fn; viewArg = arg; render(); }
let viewFn = renderHome, viewArg = null;
function render() {
  TTS.cancelled = true; TTS.stop();
  if (pageAudio) pageAudio.forEach(a => a.pause());
  if (typeof wordPopEl !== "undefined" && wordPopEl) { wordPopEl.remove(); wordPopEl = null; }
  viewEl.classList.remove("listen-mode");
  viewEl.scrollTop = 0;
  viewFn(viewArg);
  updateTabbar();
  startLearnTimer();
}
function updateTabbar() {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  const map = { renderScene: "home", renderTopic: "home", renderListen: "home", renderDialogSetup: "home", renderReview: "review", renderMe: "me" };
  const cur = map[viewFn.name] || currentTab;
  document.querySelectorAll(".tab").forEach(t => { if (t.dataset.tab === cur) t.classList.add("active"); });
  const n = countDue();
  document.querySelectorAll('.tab[data-tab="review"] .tab-icon').forEach(i => i.innerHTML = "🔁" + (n ? `<span class="review-badge">${n}</span>` : ""));
}
function goBack() {
  if (!stateStack.length) { viewFn = renderHome; viewArg = null; }
  else { const p = stateStack.pop(); viewFn = p.fn; viewArg = p.arg; }
  render();
}
function openResource(resId) { pushView(renderResource, resId); }
function renderResource(resId) {
  const r = RESOURCES.find(x => x.id === resId);
  viewEl.innerHTML = header(`${r.icon} ${r.name}`, r.desc) + `
    <div class="section-title">📚 场景列表</div>
    <div class="scene-grid" style="grid-template-columns:repeat(2,1fr);">
      ${r.sceneIds.map(id => {
        const s = SCENES.find(x => x.id === id); if (!s) return "";
        return `<button class="scene-cell" onclick="openScene('${s.id}')">
          <div class="scene-icon">${s.icon}</div><div class="scene-name">${s.name}</div>
          <div class="scene-count">${s.topics.length} 个话题</div></button>`;
      }).join("")}
    </div>`;
}
function openScene(sceneId) { pushView(renderScene, sceneId); }
function openTopic(topicId) { pushView(renderTopic, topicId); }
function header(title, sub) {
  return `<div class="page-header back-top">
    <button class="back-btn" onclick="goBack()">‹</button>
    <div><div class="page-title">${title}</div>${sub ? `<div class="page-sub">${sub}</div>` : ""}</div>
  </div>`;
}
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1600);
}
function startLearnTimer() {
  clearInterval(learnTimer);
  learnTimer = setInterval(() => {
    if (["renderListen", "renderDialogRun", "renderTopic"].includes(viewFn.name)) Store.addLearnSeconds(30);
  }, 30000);
}

/* ---------- 首页 ---------- */
function renderHome() {
  const st = Store.get();
  const mins = Math.round(st.stats.totalSeconds / 60);
  const favN = Object.keys(st.favs).length;
  const dueN = countDue();
  const today = new Date().toDateString() === st.lastPractice;
  let recentHtml = "";
  st.recent.forEach(r => {
    const f = findTopic(r.topicId); if (!f) return;
    recentHtml += `<div class="recent-item" onclick="openTopic('${r.topicId}')">
      <div class="ri-icon">${f.topic.icon}</div>
      <div><div class="ri-title">${f.topic.name}</div><div class="ri-sub">${f.scene.name}</div></div>
      <div class="arrow">›</div></div>`;
  });
  const favItems = Object.entries(st.favs).slice(0, 3);
  let favHtml = favItems.map(([id, f]) => `<div class="recent-item" onclick="openTopic('${id.split(":")[0]}')">
      <div class="ri-icon">⭐</div><div><div class="ri-title">${f.en}</div><div class="ri-sub">${f.topicName}</div></div>
      <div class="arrow">›</div></div>`).join("");
  viewEl.innerHTML = `
    <div class="hero">
      <h1>日常口语助手 🗣️</h1>
      <p>生活 · 工作 · 旅行，碎片时间练口语</p>
      <div class="stats-row">
        <div class="stat-box"><div class="stat-num">${mins}</div><div class="stat-label">累计分钟</div></div>
        <div class="stat-box"><div class="stat-num">${st.stats.dialogCount}</div><div class="stat-label">完成对话</div></div>
        <div class="stat-box"><div class="stat-num">${favN}</div><div class="stat-label">收藏句子</div></div>
        <div class="stat-box"><div class="stat-num">${dueN ? dueN : "🎉"}</div><div class="stat-label">${dueN ? "待复习" : "全部掌握"}</div></div>
      </div>
    </div>
    <div class="card" style="padding:14px;">
      <div class="section-title">📅 今日打卡</div>
      <div style="font-size:13px;color:${today ? "var(--ok)" : "var(--muted)"}">${today ? "✅ 今天已练习，继续保持！" : "今天还没开始练习，选个场景开练吧"}</div>
    </div>
    <div class="section-title">🗃️ 选择资源</div>
    <div class="res-grid">
      ${RESOURCES.map(r => {
        const topics = r.sceneIds.map(id => SCENES.find(s => s.id === id)).filter(Boolean).reduce((n, s) => n + s.topics.length, 0);
        return `<button class="res-cell" onclick="openResource('${r.id}')">
          <div class="res-icon">${r.icon}</div>
          <div style="flex:1;text-align:left"><div class="res-name">${r.name}</div>
          <div class="res-desc">${r.desc}</div>
          <div class="scene-count">${r.sceneIds.length} 个场景 · ${topics} 个话题</div></div>
          <div class="arrow">›</div></button>`;
      }).join("")}
    </div>
    <div style="height:16px"></div>
    <div class="section-title">🕘 最近练习<span class="more" onclick="currentTab='home';viewFn=renderSceneAll;viewArg=null;render()">全部 ›</span></div>
    <div class="card" style="padding:6px 12px;">${recentHtml || `<div class="empty-block" style="padding:20px;">还没有练习记录，先去首页挑个话题吧</div>`}</div>
    ${favHtml ? `<div class="section-title">⭐ 我的收藏<span class="more" onclick="viewFn=renderMe;viewArg='fav';render()">更多 ›</span></div>
    <div class="card" style="padding:6px 12px;">${favHtml}</div>` : ""}`;
}

/* ---------- 全部场景话题 ---------- */
function renderSceneAll() {
  viewEl.innerHTML = header("全部话题", "三大场景 · 所有话题") +
    SCENES.map(s => `
    <div class="section-title">${s.icon} ${s.name}</div>
    ${s.topics.map(t => topicCardHtml(t, s)).join("")}`).join("");
}
function topicCardHtml(t, s) {
  const mid = `${t.id}:s0`;
  const m = Store.get().mastery[mid];
  const tag = m === "mastered" ? `<span class="tag ok">已掌握</span>` : m === "weak" ? `<span class="tag warn">待加强</span>` : "";
  return `<button class="topic-card" onclick="openTopic('${t.id}')">
    <div class="topic-icon">${t.icon}</div>
    <div style="flex:1"><div class="topic-title">${t.name}</div><div class="topic-desc">${t.desc}</div>
    <div><span class="tag">${t.sentences.length} 短句</span><span class="tag">${t.dialogs.length} 对话</span>${tag}</div></div>
    <div class="arrow" style="color:#c6cad6">›</div></button>`;
}

/* ---------- 场景话题列表 ---------- */
function renderScene(sceneId) {
  const s = SCENES.find(x => x.id === sceneId);
  viewEl.innerHTML = header(`${s.icon} ${s.name}`, s.desc) +
    `<div class="section-title">📚 话题列表</div>` + s.topics.map(t => topicCardHtml(t, s)).join("");
}

/* ---------- 话题详情：两种模式 ---------- */
function renderTopic(topicId) {
  const f = findTopic(topicId); const { topic, scene } = f;
  Store.addRecent(topicId, scene.id); Store.save();
  viewEl.innerHTML = header(`${topic.icon} ${topic.name}`, scene.name + " · " + topic.desc) + `
    <div class="card" style="text-align:center;padding:26px 16px;">
      <div style="font-size:40px">${topic.icon}</div>
      <div style="font-size:17px;font-weight:800;margin-top:8px">${topic.name}</div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px">${topic.desc}</div>
      <div style="display:flex;gap:12px;margin-top:18px;">
        <button class="mode-btn" style="padding:20px 8px" id="btnListen">🎧<b style="font-size:16px">听读跟读</b><small>完整对话 · 三种音频 · 跟读</small></button>
        <button class="mode-btn gold" style="padding:20px 8px" id="btnDialog">🎭<b style="font-size:16px">情景对话</b><small>角色扮演 · 提示分级</small></button>
      </div>
    </div>
    <div style="text-align:center;font-size:11px;color:var(--muted);">长按 / 点击对话里单词可查词 · 加入生词本</div>`;
  $("#btnListen").onclick = () => pushView(renderListen, topicId);
  $("#btnDialog").onclick = () => pushView(renderDialogSetup, topicId);
}

/* ---------- 模式A：听读跟读 ---------- */
function renderListen(topicId) {
  const f = findTopic(topicId); const { topic, scene } = f;
  const lines = (topic.dialogs && topic.dialogs[0]) ? topic.dialogs[0].lines : topic.sentences;
  const tIdx = scene.topics.findIndex(t => t.id === topicId);
  let idx = 0, version = "en", loopAll = false, playing = false, recorderOn = false, recData = null, recOpen = false;
  const itemId = i => `${topicId}:s${i}`;
  const verLabel = { en: "🇬🇧 英文", zh: "🀄 中文", mix: "🔀 中英对照" };
  /* 单词可点击：把英文台词拆成可点单词 */
  const wordsHtml = en => en.split(/\s+/).map(w => {
    const pure = w.replace(/[^A-Za-z'’-]/g, "");
    return `<span class="w" data-w="${pure}">${w}</span>`;
  }).join(" ");
  const lineHtml = (l, ver) =>
    ver === "zh" ? `<div class="sentence-zh big">${l.zh}</div>`
    : ver === "mix" ? `<div class="sentence-en">${wordsHtml(l.en)}</div><div class="sentence-zh">${l.zh}</div>`
    : `<div class="sentence-en">${wordsHtml(l.en)}</div>`;
  viewEl.innerHTML = header(`🎧 ${topic.name} · 听读跟读`, "完整原对话 · 点句子=单句播 · 播放键=连续播放")
    + `<div id="senPanel"></div>
    <div class="player-bar" id="playerBar">
      <div class="audio-toggle">
        <button data-ver="en">🇬🇧 英文</button>
        <button data-ver="zh">🀄 中文</button>
        <button data-ver="mix">🔀 中英对照</button>
      </div>
      <div class="speed-slider"><span>字号</span><button class="chip" id="fsDn">A-</button><button class="chip" id="fsUp">A+</button><span style="margin-left:auto">语速</span><input type="range" id="rate" min="0.75" max="1.25" step="0.05" value="${Store.get().settings.speed}"><b id="rateV">${Store.get().settings.speed}x</b></div>
      <div class="ctrl-row">
        <button id="prevT" style="font-size:11px">⏪ 上一话题</button>
        <button id="loopBtn" class="${loopAll ? "chip on" : ""}" style="font-size:12px">🔁 循环</button>
        <button class="play-main" id="main">▶</button>
        <button id="nextT" style="font-size:11px">下一话题 ⏩</button>
        <button id="recToggle" style="font-size:13px">🎤 跟读</button>
      </div>
      <div id="recZone" style="display:none"></div>
    </div>
    <div class="chip-row" id="chipRow"></div>`;
  viewEl.classList.add("listen-mode");
  function drawRec() {
    const z = $("#recZone");
    z.style.display = recOpen ? "block" : "none";
    $("#recToggle").style.fontWeight = recOpen ? 700 : 400;
    if (recOpen) z.innerHTML = `
      <div class="rec-btns" style="margin-bottom:8px">
        <button id="recBtn">● 点击录音跟读</button>
        <button id="playMine" ${recData ? "" : "disabled"}>🔊 我的录音</button>
        <button id="playOri" ${recData ? "" : "disabled"}>🎧 原声对比</button>
      </div>
      <div class="rec-filename" id="recTip">录音为当前选中的句子 · 录完可回放与原声对比</div>
      <div id="recTip" hidden></div>`;
    updateRecBtns();
    $("#recToggle").onclick = () => { recOpen = !recOpen; drawRec(); };
    const rb = $("#recBtn");
    if (rb) rb.onclick = async () => {
      if (recorderOn) {
        const d = await Recorder.stop(); recorderOn = false; recData = d;
        $("#recTip").textContent = "✅ 录音完成，可回放对比原声";
        updateRecBtns(); return;
      }
      try { await Recorder.start(); recorderOn = true; updateRecBtns(); $("#recTip").textContent = "🔴 录音中… 大声读出来吧"; }
      catch (e) { toast("无法访问麦克风，需 https 或 localhost"); }
    };
    const pm = $("#playMine");
    if (pm) pm.onclick = () => new Audio(Recorder.url).play();
    const po = $("#playOri");
    if (po) po.onclick = () => { TTS.cancelled = false; TTS.playMaterial([lines[idx]], "en", +$("#rate").value, null); };
  }
  function updateRecTip(txt) { const t = $("#recTip"); if (t) t.textContent = txt; }
  function updateRecBtns() {
    const rb = $("#recBtn"); if (rb) { rb.textContent = recorderOn ? "■ 停止录音" : "● 点击录音跟读"; rb.classList.toggle("hot", recorderOn); }
    const pm = $("#playMine"); if (pm) pm.disabled = !recData;
    const po = $("#playOri"); if (po) po.disabled = !recData;
  }
  function draw() {
    $("#senPanel").innerHTML = lines.map((l, i) => `<div class="line-item ${i === idx ? "current" : ""}" data-i="${i}">
        <div class="line-no">${l.who ? "👤 " + l.who : "第 " + (i + 1) + " 句"}</div>${lineHtml(l, version)}
      </div>`).join("");
    bindLineEvents();
    const id = itemId(idx);
    $("#chipRow").innerHTML = `
      <span class="chip fav ${Store.get().favs[id] ? "" : ""}" id="favBtn" style="${Store.get().favs[id] ? "background:#fff0ef;color:var(--warn);font-weight:700" : ""}">${Store.get().favs[id] ? "❤️ 已收藏" : "🤍 收藏"}</span>
      <span class="chip ${Store.get().mastery[id] === "mastered" ? "mastered" : ""}" id="masterBtn">${Store.get().mastery[id] === "mastered" ? "✅ 已掌握" : "✅ 标记掌握"}</span>
      <span class="chip ${Store.get().mastery[id] === "weak" ? "on" : ""}" id="weakBtn">${Store.get().mastery[id] === "weak" ? "⚠️ 薄弱" : "⚠️ 加入复习"}</span>`;
    $("#favBtn").onclick = () => {
      const sen = lines[idx];
      const on = Store.toggleFav(id, { en: sen.en, zh: sen.zh, topicName: topic.name, sceneId: scene.id });
      toast(on ? "❤️ 已收藏" : "已取消收藏"); draw();
    };
    $("#masterBtn").onclick = () => {
      const mastered = Store.get().mastery[id] === "mastered";
      Store.markMastery(id, mastered ? null : "mastered");
      if (!mastered) { delete Store.get().review[id]; Store.save(); }
      toast(mastered ? "已取消掌握" : "✅ 标记为已掌握"); draw();
    };
    $("#weakBtn").onclick = () => {
      const weak = Store.get().mastery[id] === "weak";
      if (weak) { Store.markMastery(id, null); delete Store.get().review[id]; Store.save(); toast("已移出复习"); }
      else { Store.setReviewWeak(id); toast("⚠️ 已加入复习计划"); }
      draw(); updateTabbar();
    };
    document.querySelector(`.audio-toggle [data-ver="${version}"]`).classList.add("active");
    viewEl.style.setProperty("--line-fs", (Store.get().settings.fontSize || 17) + "px");
    const cur = document.querySelector(".line-item.current");
    if (cur && cur.scrollIntoView && playing) cur.scrollIntoView({ block: "nearest" });
  }
  function bindLineEvents() {
    document.querySelectorAll(".line-item").forEach(el => el.onclick = e => {
      if (e.target.classList.contains("w")) return;
      if (playing) { TTS.stop(); playing = false; }
      idx = +el.dataset.i; draw(); playOne();
    });
    document.querySelectorAll(".line-item .w[data-w]").forEach(sp => {
      sp.onclick = e => {
        e.stopPropagation(); e.preventDefault();
        if (sp.dataset.w) showWordPop(sp.dataset.w, topic);
      };
    });
  }
  const setVer = v => {
    version = v;
    document.querySelectorAll(".audio-toggle button").forEach(b => b.classList.remove("active"));
    document.querySelector(`.audio-toggle [data-ver="${v}"]`).classList.add("active");
    draw(); // 仅切换展示方式，不触发播放
  };
  document.querySelectorAll(".audio-toggle button").forEach(b => b.onclick = () => setVer(b.dataset.ver));

  /* 播放永远是英文原声：单句 / 连播（含整段循环） */
  async function playOne() {
    playing = true; $("#main").textContent = "⏸"; TTS.cancelled = false;
    await TTS.playMaterial([lines[idx]], "en", +$("#rate").value, null);
    playing = false; $("#main").textContent = "▶";
  }
  async function playAll() {
    TTS.cancelled = false;
    do {
      playing = true; $("#main").textContent = "⏸";
      for (let i = idx; i < lines.length; i++) {
        idx = i; draw();
        await TTS.playMaterial([lines[i]], "en", +$("#rate").value, null);
        if (TTS.cancelled) { playing = false; $("#main").textContent = "▶"; return; }
      }
      idx = 0;
    } while (loopAll && !TTS.cancelled);
    playing = false; $("#main").textContent = "▶";
  }
  $("#main").onclick = () => {
    if (playing) { TTS.cancelled = true; playing = false; $("#main").textContent = "▶"; return; }
    playAll();
  };
  $("#loopBtn").onclick = () => {
    loopAll = !loopAll;
    $("#loopBtn").className = loopAll ? "chip on" : "";
    $("#loopBtn").style.fontWeight = loopAll ? 700 : 400;
    toast(loopAll ? "🔁 已开启循环连续播放" : "已关闭循环");
  };
  function jumpTopic(dir) {
    TTS.stop(); playing = false; recOpen = false;
    const nid = scene.topics[(tIdx + dir + scene.topics.length) % scene.topics.length].id;
    stateStack.pop(); pushView(renderListen, nid);
  }
  $("#prevT").onclick = () => jumpTopic(-1);
  $("#nextT").onclick = () => jumpTopic(1);
  $("#fsUp").onclick = () => { const st = Store.get(); st.settings.fontSize = Math.min(26, (st.settings.fontSize || 17) + 1); Store.save(); draw(); };
  $("#fsDn").onclick = () => { const st = Store.get(); st.settings.fontSize = Math.max(12, (st.settings.fontSize || 17) - 1); Store.save(); draw(); };
  $("#rate").oninput = e => { $("#rateV").textContent = (+e.target.value).toFixed(2).replace(/\.?0+$/, "") + "x"; };
  $("#rate").onchange = e => { Store.get().settings.speed = +e.target.value; Store.save(); };
  drawRec(); draw();
}
/* 掌握/收藏按钮通用绑定 */
function bindMarkBtns(id, redraw) {
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(el => el.onclick = () => {
    const topic = findTopic(id.split(":")[0]).topic;
    const i = +id.split(":s")[1];
    const src = (topic.dialogs && topic.dialogs[0]) ? topic.dialogs[0].lines : topic.sentences;
    const sen = src[i] || src[0];
    const on = Store.toggleFav(id, { en: sen.en, zh: sen.zh, topicName: topic.name, sceneId: findTopic(topic.id).scene.id });
    toast(on ? "⭐ 已收藏" : "已取消收藏"); redraw && redraw();
  });
  document.querySelectorAll(`[data-master="${id}"]`).forEach(el => el.onclick = () => {
    const mastered = Store.get().mastery[id] === "mastered";
    Store.markMastery(id, mastered ? null : "mastered");
    if (!mastered) { delete Store.get().review[id]; Store.save(); }
    toast(mastered ? "已取消掌握" : "✅ 标记为已掌握"); redraw && redraw();
  });
  document.querySelectorAll(`[data-weak="${id}"]`).forEach(el => el.onclick = () => {
    const weak = Store.get().mastery[id] === "weak";
    if (weak) { Store.markMastery(id, null); delete Store.get().review[id]; Store.save(); toast("已移出复习"); }
    else { Store.setReviewWeak(id); toast("⚠️ 已加入复习计划"); }
    redraw && redraw();
    updateTabbar();
  });
}

/* ---------- 模式B：情景对话 ---------- */
function renderDialogSetup(topicId) {
  const f = findTopic(topicId);
  const d = f.topic.dialogs[0];
  let role = "B", hint = "both";
  viewEl.innerHTML = header(`🎭 ${f.topic.name} · 情景对话`, d.title + "（" + d.lines.length + " 句）") + `
    <div class="card">
      <div class="section-title">👥 选择你要扮演的角色</div>
      <div class="level-row">
        <button class="level-btn" id="rB">🙋 我演 B（我方开口机位=第2句）</button>
        <button class="level-btn" id="rA">🙋 我演 A（先开口机位=第1句）</button>
      </div>
      <div class="section-title" style="margin-top:16px">💡 台词提示等级</div>
      <div class="level-row">
        <button class="level-btn" data-h="none">🔒 无提示（高阶）</button>
        <button class="level-btn" data-h="zh">🀄 中文提示（中阶）</button>
        <button class="level-btn" data-h="both">📖 中英对照（入门）</button>
      </div>
    </div>
    <button class="btn-primary btn-primary" style="width:100%;padding:14px;border-radius:14px;font-size:16px;font-weight:700;border:none;cursor:pointer;" id="startBtn">开始对话 ▶</button>
    <div class="card" style="margin-top:14px">
      <div class="section-title">🗣️ 对话剧本</div>
      ${d.lines.map(l => `<div style="font-size:12px;padding:4px 0;color:var(--muted)"><b style="color:${l.who === 'A' ? 'var(--primary)' : '#e67e22'}">${l.who === 'A' ? '🧔 对方' : '🙋 我'}</b>：${l.en} <span style="opacity:.6">(${l.zh})</span></div>`).join("")}
    </div>`;
  $("#rB").classList.add("active");
  $("#rB").onclick = () => { role = "B"; $("#rB").classList.add("active"); $("#rA").classList.remove("active"); };
  $("#rA").onclick = () => { role = "A"; $("#rA").classList.add("active"); $("#rB").classList.remove("active"); };
  document.querySelectorAll("[data-h]").forEach(b => b.onclick = () => { hint = b.dataset.h; document.querySelectorAll("[data-h]").forEach(x => x.classList.remove("active")); b.classList.add("active"); });
  $("#startBtn").onclick = () => pushView(renderDialogRun, { topicId, d, role, hint });
}

let dialogRecordings = [];
function renderDialogRun(cfg) {
  const { d, role } = cfg;
  const partner = role === "A" ? "B" : "A";
  let i = 0; dialogRecordings = []; let recording = false;
  viewEl.innerHTML = header("🎭 角色扮演中", `你扮演 ${role}，APP 扮演 ${partner}`) + `
    <div style="display:flex;gap:6px;margin-bottom:12px;align-items:center;">
      <span class="chip on">提示：${{none: "无", zh: "中文", both: "中英对照"}[cfg.hint]}</span>
      <span class="chip" id="turnLabel"></span>
    </div>
    <div id="stage"></div>
    <div class="hint-box" id="hintBox"></div>
    <div class="stage-actions" id="actions"></div>
    <div id="endBox"></div>`;

  function addBubble(who, text, zh, user, rec) {
    const stage = $("#stage");
    const div = document.createElement("div");
    div.className = user ? "bubble user" : "bubble";
    div.innerHTML = `<div class="avatar">${who}</div>
      <div class="bubble-content">${text}${cfg.hint !== "none" ? `<span class="bubble-zh">${zh}</span>` : ""}
        ${rec ? `<div class="b-funcs b-func show" data-url="${rec}">🔊 播放我的这段录音</div>` : ""}</div>`;
    stage.appendChild(div);
    stage.querySelectorAll(".b-func").forEach(el => {
      if (el.dataset.bound) return; el.dataset.bound = 1;
      el.onclick = () => new Audio(el.dataset.url).play();
    });
    stage.scrollTop = stage.scrollHeight;
    viewEl.scrollTop = viewEl.scrollHeight;
  }
  function hintHtml(line) {
    if (cfg.hint === "both") return `<div style="font-size:15px;font-weight:700">${line.en}</div><div style="font-size:12px;color:var(--muted);margin-top:6px">${line.zh}</div>`;
    if (cfg.hint === "zh") return `<div style="font-size:14px;color:var(--muted)">${line.zh}</div>`;
    return `<div style="font-size:13px;color:#999">🔒 无提示：凭记忆说出台词，说完点下方按钮</div>`;
  }
  function updateHintBox(line) {
    $("#turnLabel").textContent = "第 " + (i + 1) + "/" + d.lines.length + " 句";
    if (!line) $("#hintBox").innerHTML = ""; else $("#hintBox").innerHTML = `<div style="font-size:11px;color:var(--muted);margin-bottom:6px">🎤 你的台词</div>${hintHtml(line)}`;
  }
  async function playPartner(id) {
    TTS.cancelled = false;
    await TTS.speak(d.lines[id].en, "en-US", Store.get().settings.speed || 1);
  }
  function showRecordBtn(line) {
    const box = $("#hintBox");
    let b = document.createElement("button");
    b.className = "btn-danger btn-primary btn-primary";
    b.style.cssText = "background:var(--primary);border:none;color:#fff;padding:10px 18px;border-radius:12px;font-weight:700;cursor:pointer;margin-top:8px;";
    b.textContent = "● 录音并说出台词";
    b.onclick = async () => {
      if (recording) return;
      try { await Recorder.start(); } catch (e) { toast("无法访问麦克风"); return; }
      recording = true; b.textContent = "🔴 录音中…说完请点击 [■ 我说完了]";
      b.disabled = false;
      b.onclick = async () => {
        const rec = await Recorder.stop();
        dialogRecordings[i] = rec.url;
        recording = false;
        addBubble(role, line.en, line.zh, true, rec.url);
        b.remove();
        $("#actions").innerHTML = `<button class="btn-primary" id="nextStep">说得不错，继续 ▶</button>`;
        $("#nextStep").onclick = () => next();
      };
    };
    box.appendChild(b);
  }
  const userLine = id => d.lines[id].who === role;
  async function step() {
    TTS.cancelled = true; TTS.stop();
    $("#turnLabel").textContent = "第 " + (i + 1) + "/" + d.lines.length + " 句";
    if (i >= d.lines.length) return endReplay();
    const line = d.lines[i];
    if (!userLine(i)) {
      addBubble(line.who, line.en, line.zh, false, null);
      $("#hintBox").innerHTML = `<div style="font-size:13px;color:var(--muted)">🔊 对方正在说话…</div>`;
      $("#actions").innerHTML = "";
      await playPartner(i);
      $("#hintBox").innerHTML = `<div style="font-size:13px;color:var(--muted)">✕ 该你说了！想好你的台词</div>`;
      updateHintBox(line); showRecordBtn(line);
    } else {
      updateHintBox(line); showRecordBtn(line);
    }
  }
  function next() {
    i++;
    $("#actions").innerHTML = "";
    if (i >= d.lines.length) endReplay(); else step();
  }
  async function endReplay() {
    Store.addDialogDone(); Store.save();
    $("#hintBox").style.display = "none";
    $("#actions").innerHTML = "";
    // 结果卡：复盘 + 复习标记
    $("#endBox").innerHTML = `<div class="card" style="text-align:center">
      <div style="font-size:20px;font-weight:800">🎉 对话完成！</div>
      <div style="font-size:12px;color:var(--muted);margin:6px 0 14px">回放复盘一遍会更牢固</div>
      <button class="btn-primary" id="replayBtn" style="border:none;background:var(--primary);color:#fff;padding:12px 22px;border-radius:12px;font-weight:700;cursor:pointer">🎬 回放整段对话</button><br><br>
      <button id="masterBtn" style="border:1.5px solid var(--primary);background:#fff;color:var(--primary);padding:12px 22px;border-radius:12px;font-weight:700;cursor:pointer;">✅ 标记已掌握</button>
      <button id="weakBtn" style="border:1.5px solid #ffd3cc;background:#fff;color:var(--warn);padding:12px 22px;border-radius:12px;font-weight:700;cursor:pointer;">⚠️ 标记薄弱</button>
    </div>`;
    $("#replayBtn").onclick = async () => {
      TTS.cancelled = false;
      for (let k = 0; k < d.lines.length; k++) {
        if (TTS.cancelled) return;
        await TTS.speak(d.lines[k].en, "en-US", Store.get().settings.speed || 1);
        if (dialogRecordings[k]) await playAudio(dialogRecordings[k]);
        else if (userLine(k)) await new Promise(r => setTimeout(r, 200));
      }
      toast("回放结束");
    };
    $("#masterBtn").onclick = () => {
      Store.markMastery(`${cfg.topicId}:d0`, "mastered");
      delete Store.get().review[`${cfg.topicId}:d0`];
      Store.save(); toast("✅ 已标记掌握");
    };
    $("#weakBtn").onclick = () => {
      Store.setReviewWeak(`${cfg.topicId}:d0`);
      toast("⚠️ 已加入复习计划");
      updateTabbar();
    };
  }
  async function playAudio(url) { await new Promise(r => { const a = new Audio(url); pageAudio.push(a); a.onended = r; a.onerror = r; a.play(); }); }
  // 开场
  step();
}

/* ---------- 点词查义 & 生词本 ---------- */
let wordPopEl = null;
function showWordPop(word, topic) {
  wordPopEl = wordPopEl || document.createElement("div");
  wordPopEl.className = "word-pop";
  wordPopEl.style.display = "block";
  document.body.appendChild(wordPopEl);
  const local = []
    .concat(topic.words || [])
    .concat((topic.dialogs && topic.dialogs[0] && topic.dialogs[0].words) || [])
    .find(w => w.en.toLowerCase() === word.toLowerCase());
  const inBook = () => !!Store.get().wordbook[word];
  wordPopEl.innerHTML = `<div class="wp-word">${word} <span class="wp-def loading">查词中…</span></div>
    <div class="wp-actions">
      <button class="chip on" id="wpSpeak">🔊 朗读</button>
      <button class="chip ${inBook() ? "fav" : ""}" id="wpAdd">${inBook() ? "✓ 已在生词本" : "＋ 加入生词本"}</button>
      <button class="chip" id="wpClose">✕</button>
    </div>`;
  $("#wpSpeak").onclick = () => { TTS.cancelled = false; TTS.speak(word, "en-US", 1); };
  $("#wpClose").onclick = () => wordPopEl.remove();
  $("#wpAdd").onclick = () => {
    const book = Store.get().wordbook;
    if (book[word]) { Store.removeWord(word); toast("已从生词本移除"); }
    else {
      const info = { topicName: topic.name };
      if (local) info.zh = local.zh;
      if (wordPopEl.dataset.zh) info.zh = wordPopEl.dataset.zh;
      if (wordPopEl.dataset.phonetic) info.phonetic = wordPopEl.dataset.phonetic;
      if (wordPopEl.dataset.def) info.def = wordPopEl.dataset.def;
      Store.addWord(word, info); toast("📖 已加入生词本");
    }
    $("#wpAdd").textContent = inBook() ? "✓ 已在生词本" : "＋ 加入生词本";
    $("#wpAdd").classList.toggle("fav", inBook());
    updateTabbar();
  };
  if (local) { renderWordMeaning(word, local.zh, "", ""); return; }
  renderWordMeaning(word, "", "", "正在查询网络释义…");
  lookupOnline(word);
  async function lookupOnline(w) {
    // 1) MyMemory 中英翻译（国内网络可达）
    try {
      const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(w)}&langpair=en|zh-CN`);
      const m = await r.json();
      const zh = m && m.responseData && m.responseData.translatedText;
      const okText = zh && !/INVALID|INVALID/i.test(zh) && (m.responseData.match === "0.99" || /^[~\u4e00-\u9fa5a-zA-Z]/.test(zh));
      if (okText) {
        wordPopEl.dataset.zh = (m.responseData.match && m.responseData.match >= "1" ? "" : "译: ") + zh;
        renderWordMeaning(w, zh, "", "");
        return;
      }
      if (zh && /[\u4e00-\u9fa5]/.test(zh)) {
        wordPopEl.dataset.zh = zh;
        renderWordMeaning(w, zh, "", "");
        return;
      }
    } catch (e) { /* 继续下一来源 */ }
    // 2) 英文释义接口（部分网络不可达）
    try {
      const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(w)}`);
      const data = await r.json();
      if (Array.isArray(data)) {
        const e0 = data[0];
        const ph = (e0.phonetic || (e0.phonetics || []).map(p => p.text).filter(Boolean)[0] || "");
        const defs = [];
        (e0.meanings || []).slice(0, 2).forEach(m => (m.definitions || []).slice(0, 1).forEach(d => defs.push(`[${m.partOfSpeech}] ${d.definition}`)));
        wordPopEl.dataset.phonetic = ph; wordPopEl.dataset.def = defs.join("；") || "";
        renderWordMeaning(w, "", ph, defs.join("；"));
        return;
      }
    } catch (e) { /* 落入最终提示 */ }
    const d2 = wordPopEl.querySelector(".wp-def");
    if (d2) { d2.className = "wp-def"; d2.textContent = "网络查询失败，暂无释义（可点击朗读）"; }
  }
  function renderWordMeaning(w, zh, ph, def) {
    const d = wordPopEl.querySelector(".wp-def");
    if (!d) return;
    d.className = "wp-def";
    d.textContent = (zh ? zh + "  " : "") + (ph ? ph + "  " : "") + def;
  }
}


/* ---------- 复习页 ---------- */
function todayEnd() { return new Date(new Date().setHours(24, 0, 0, 0)).getTime(); }
function countDue() {
  const st = Store.get();
  const dueNow = Object.entries(st.review).filter(([id, r]) => (r.nextTs || 0) <= Date.now() && st.mastery[id] !== "mastered").map(e => e[0]);
  const weak = Object.keys(st.mastery).filter(k => st.mastery[k] === "weak" && !dueNow.includes(k));
  return dueNow.length + weak.length;
}
function renderReview() {
  const st = Store.get();
  const due = Object.entries(st.review).filter(([id, r]) => (r.nextTs || 0) <= Date.now() && st.mastery[id] !== "mastered").map(e => e[0]);
  const weak = Object.keys(st.mastery).filter(k => st.mastery[k] === "weak" && !due.includes(k));
  const items = [...due, ...weak];
  viewEl.innerHTML = header("🔁 复习计划", "依据艾宾浩斯记忆曲线安排 · 越薄弱越常出现") + `
    <div class="card">
      <div class="section-title">📋 今日待复习（${due.length + weak.length} 条）</div>
      ${items.length ? "" : `<div class="empty-block">🎉 暂无待复习内容<br><span style="font-size:11px">在练习里点「⚠️ 加入复习」或「薄弱」后，内容会出现在这里</span></div>`}
      ${items.slice(0, 20).map(id => `<div class="recent-item" onclick="openReviewItem('${id}')">
        <div class="ri-icon">📌</div>
        <div style="min-width:0"><div class="ri-title" style="text-overflow:ellipsis;overflow:hidden;white-space:nowrap">${favText(id)}</div>
        <div class="ri-sub">${id.endsWith("d0") ? "进阶对话" : "入门短句"}</div></div>
        <div class="arrow">›</div></div>`).join("")}
    </div>
    <div class="section-title">🎯 随机抽一个练</div>
    <button class="btn-primary btn-primary" id="randBtn" style="width:100%;padding:14px;border-radius:14px;font-size:15px;font-weight:700;border:none;cursor:pointer;">🎲 随机复习一题</button>
    <div id="randBox"></div>`;
  $("#randBtn").onclick = () => {
    if (!items.length) return toast("暂无复习内容");
    const id = items[Math.floor(Math.random() * items.length)];
    openReviewItem(id);
  };
}
function favText(id) {
  const t = id.split(":")[0];
  const f = findTopic(t); if (!f) return id;
  const k = id.split(":s")[1];
  if (k !== undefined) return f.topic.sentences[+k] ? f.topic.sentences[+k].en : id;
  const f2 = Store.get().favs[id];
  if (f2) return f2.en;
  const d = f.topic.dialogs[0];
  return d ? d.title + "（对话）" : id;
}
function openReviewItem(id) {
  const [tid, kind] = id.split(":");
  if (kind === "d0") goDialogFromReview(tid);
  else pushView(renderListen, tid);
}
function goDialogFromReview(topicId) {
  const f = findTopic(topicId);
  const d = f.topic.dialogs[0];
  const role = "B", hint = "both";
  pushView(renderDialogRun, { topicId, d, role, hint });
}

/* ---------- 我的 ---------- */
function renderMe(tab) {
  const st = Store.get();
  const mins = Math.round(st.stats.totalSeconds / 60);
  const favList = Object.entries(st.favs).map(([id, f]) => ({ id, ...f }));
  const isFavTab = tab === "fav";
  viewEl.innerHTML = header("👤 个人中心", "学习情况与偏好设置") + (isFavTab ? renderFavTab(favList) : `
    <div class="hero" style="background:linear-gradient(120deg,#ffb74d,#ff9f43)">
      <h1>共练习 ${mins} 分钟</h1>
      <p>开始于 ${new Date(st.stats.startedAt).toLocaleDateString()}</p>
      <div class="stats-row">
        <div class="stat-box"><div class="stat-num">${mins}</div><div class="stat-label">练习分钟</div></div>
        <div class="stat-box"><div class="stat-num">${st.stats.dialogCount}</div><div class="stat-label">完成对话</div></div>
        <div class="stat-box"><div class="stat-num">${favList.length}</div><div class="stat-label">收藏</div></div>
      </div>
    </div>
    <div class="card">
      <div class="section-title">⭐ 我的收藏</div>
      <div class="recent-item" onclick="viewFn=renderMe;viewArg='fav';render()"><div class="ri-icon">⭐</div><div class="ri-title">查看全部收藏（${favList.length}）</div><div class="arrow">›</div></div>
    </div>
    <div class="card">
      <div class="section-title">📖 生词本（${Object.keys(st.wordbook).length}）</div>
      ${Object.keys(st.wordbook).length ? Object.entries(st.wordbook).slice(-8).reverse().map(([w, info]) => `
        <div class="recent-item">
          <div class="ri-icon">🔤</div>
          <div style="min-width:0;flex:1"><div class="ri-title">${w}</div><div class="ri-sub">${info.zh || info.def || ""} <span style="opacity:.6">${info.topicName ? "· " + info.topicName : ""}</span></div></div>
          <span class="chip on" onclick="TTS.cancelled=false;TTS.speak('${w.replace(/'/g, "\\'")}','en-US')">🔊</span>
          <span class="chip" onclick="Store.removeWord('${w}');viewFn=renderMe;viewArg=null;render();toast('已移出生词本')">✕</span>
        </div>`).join("") : `<div style="font-size:12px;color:var(--muted);">在对话里点击单词即可查词并加入生词本</div>`}
    </div>
    <div class="card">
      <div class="section-title">⚙️ 设置</div>
      <div class="setting-row"><div><div class="sr-label">默认语速</div><div class="sr-desc">0.75x 恢复慢速，1.25x 提速</div></div>
        <b style="font-size:13px">${st.settings.speed}x</b></div>
      <div class="setting-row"><div><div class="sr-label">默认播报顺序</div><div class="sr-desc">连播时的朗读顺序</div></div>
        <div class="seg">
          <button data-po="en-zh" class="${st.settings.playOrder === "en-zh" ? "on" : ""}">英→中</button>
          <button data-po="zh-en" class="${st.settings.playOrder === "zh-en" ? "on" : ""}">中→英</button>
        </div></div>
      <div class="setting-row"><div><div class="sr-label">英语音色</div><div class="sr-desc">美式 / 英式发音（切换需设备已有该音色）</div></div>
        <div class="seg">
          <button data-acc="US" class="${st.settings.accent === "US" ? "on" : ""}">🇺🇸 美式</button>
          <button data-acc="UK" class="${st.settings.accent === "UK" ? "on" : ""}">🇬🇧 英式</button>
        </div></div>
      <div class="setting-row"><div><div class="sr-label">保存录音</div><div class="sr-desc">开启后录音保留在本次会话</div></div>
        <label class="switch"><input type="checkbox" id="saveSw" ${st.settings.saveRecordings ? "checked" : ""}><em></em></label></div>
    </div>
    <div style="text-align:center;margin-top:4px"><span style="font-size:12px;color:var(--muted);cursor:pointer" onclick="if(confirm('确定清空全部练习数据吗？')==true && (Store.reset(), render(), true)) {} ">清空练习数据</span></div>
    <div style="height:8px"></div>`);
  document.querySelectorAll("[data-po]").forEach(b => b.onclick = () => { st.settings.playOrder = b.dataset.po; Store.save(); renderMe(); });
  document.querySelectorAll("[data-acc]").forEach(b => b.onclick = () => { st.settings.accent = b.dataset.acc; Store.save(); renderMe(); });
  const sw = $("#saveSw"); if (sw) sw.onchange = e => { st.settings.saveRecordings = e.target.checked; Store.save(); };
}
function renderFavTab(list) {
  return `<button class="btn-primary btn-primary" style="width:100%;padding:11px;border:none;border-radius:12px;color:var(--primary);background:#fff;font-weight:700;cursor:pointer;margin-bottom:14px;box-shadow:var(--shadow)" onclick="viewFn=renderMe;viewArg=null;render()">‹ 返回设置</button>
    <div class="section-title">⭐ 收藏的句子（${list.length}）</div>
    ${list.length ? list.map(f => `<div class="card" style="padding:14px">
      <div style="font-size:15px;font-weight:700">${f.en}</div>
      <div style="font-size:13px;color:var(--muted);margin-top:4px">${f.zh}</div>
      <div style="margin-top:10px;display:flex;gap:8px;align-items:center">
        <button class="chip on" onclick="TTS.cancelled=false;TTS.speak('${f.en.replace(/'/g, "\\'")}','en-US')">🎧 听原声</button>
        <span style="font-size:11px;color:var(--muted)">${f.topicName}</span>
        <span class="chip" onclick="Store.toggleFav('${f.id}','');viewFn=renderMe;viewArg='fav';render();toast('已取消收藏')" style="margin-left:auto">🗑 移除</span>
      </div></div>`).join("") : `<div class="empty-block">🌟 还没有收藏<br>在听读练习里点「⭐ 收藏」把好句子加进来</div>`}`;
}

/* ---------- Tab 事件 ---------- */
document.querySelectorAll(".tab").forEach(t => t.onclick = () => {
  currentTab = t.dataset.tab;
  stateStack = [];
  viewFn = { home: renderHome, review: renderReview, me: renderMe }[currentTab];
  viewArg = currentTab === "me" ? null : viewArg;
  render();
});

/* 启动 */
if (!TTS.available) toast("当前浏览器不支持语音合成，建议用 Chrome / Edge");
TTS.refresh && window.speechSynthesis && TTS.refresh();
render();
