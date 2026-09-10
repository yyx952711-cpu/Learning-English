/* Service Worker：网络优先 → 永远先用最新版；断网时用缓存兜底（地铁无网也能练） */
const CACHE = "oral-app-v2";
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest", "./icon.svg",
  "./css/style.css",
  "./js/data.js", "./js/data_pdf.js", "./js/store.js", "./js/tts.js", "./js/recorder.js", "./js/app.js",
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  if (!e.request.url.startsWith(self.location.origin)) return; // 外部词典接口不劫持
  e.respondWith((async () => {
    try {
      // 有网 → 拿最新版 + 更新缓存（保证发布新版后用户立刻可用）
      const res = await fetch(e.request, { cache: "no-cache" });
      const cp = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, cp)).catch(() => {});
      return res;
    } catch (err) {
      // 断网 → 回退缓存
      const hit = await caches.match(e.request);
      return hit || caches.match("./index.html");
    }
  })());
});
