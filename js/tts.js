/* ============ TTS 三种音频切换控制器 ============
   音频版本：en（英文原声）/ zh（中文译文）/ mix（中英对照交替）
   用语音合成实时朗读，“三段音频”即三条独立的语音串（互不混合） */
const TTS = (() => {
  let voices = [];
  let stopped = true; // true=要求停止

  function refresh() { if ("speechSynthesis" in window) voices = speechSynthesis.getVoices(); }
  if ("speechSynthesis" in window) { refresh(); speechSynthesis.onvoiceschanged = refresh; }

  function pickVoice(langPrefer) {
    const need = langPrefer.startsWith("zh") ? "zh" : "en";
    const list = voices.filter(v => v.lang.toLowerCase().startsWith(need));
    if (need === "en") {
      const prefer = (Store.get().settings.accent || "US") === "UK" ? "gb" : "us";
      const match = list.find(v => v.lang.toLowerCase().includes(prefer));
      if (match) return match;
    }
    return list[0] || null;
  }

  function speak(text, lang, rate) {
    return new Promise((resolve, reject) => {
      if (!("speechSynthesis" in window)) return resolve();
      if (stopped) return resolve();
      const u = new SpeechSynthesisUtterance(text);
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.lang = v ? v.lang : lang;
      u.rate = rate || Store.get().settings.speed || 1;
      u.onend = resolve;
      u.onerror = () => resolve();
      speechSynthesis.speak(u);
    });
  }
  function stop() {
    stopped = true;
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  }
  /* 播放一组台词的指定版本（每段音频相互独立，不混播）
     version: 'en' | 'zh' | 'mix'   onLine(i) 每句开始回调，用于高亮 */
  async function playMaterial(lines, version, rate, onLine) {
    stopped = false;
    speechSynthesis.cancel(); // 清掉还没播完的
    for (let i = 0; i < lines.length; i++) {
      if (stopped) break;
      onLine && onLine(i);
      const line = lines[i];
      if (version === "zh") await speak(line.zh, "zh-CN", rate);
      else await speak(line.en, "en-US", rate);
      if (stopped) break;
      if (version === "mix") await speak(line.zh, "zh-CN", rate);
    }
    if (!stopped) onLine && onLine(-1);
  }
  const api = {
    speak, stop, refresh, playMaterial,
    available: "speechSynthesis" in window,
  };
  Object.defineProperty(api, "cancelled", {
    set(v) { stopped = v; if (v) { if ("speechSynthesis" in window) speechSynthesis.cancel(); } },
    get() { return stopped; },
  });
  return api;
})();
