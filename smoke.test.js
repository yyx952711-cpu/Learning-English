// 冒烟测试：jsdom 加载 APP，模拟点击核心流程
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const root = __dirname;

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dom = new JSDOM(html, { url: "http://localhost/", runScripts: "outside-only", pretendToBeVisual: true });
const { window } = dom;

window.speechSynthesis = {
  getVoices: () => [{ lang: "en-US", name: "en" }, { lang: "zh-CN", name: "zh" }],
  speak: () => {}, cancel: () => {}, onvoiceschanged: null,
};
window.SpeechSynthesisUtterance = function (t) { this.text = t; };
window.navigator.mediaDevices = { getUserMedia: async () => { throw new Error("no mic in test"); } };
window.Audio = function () { return { play: () => {}, pause: () => {} }; };
window.fetch = async () => { throw new Error("offline in test"); };

const all = ["js/data.js", "js/data_pdf.js", "js/store.js", "js/tts.js", "js/recorder.js", "js/app.js"]
  .map(f => fs.readFileSync(path.join(root, f), "utf8")).join("\n;\n");
const epilogue = `window.__test = { Store, renderReview, renderMe, renderHome, render, openTopic, openScene, goBack, countDue, setView: (f, a) => { viewFn = f; viewArg = a; } };`;
window.eval(all + "\n;\n" + epilogue);
const T = window.__test;

const d = window.document;
const q = s => d.querySelector(s);
const qa = s => [...d.querySelectorAll(s)];
let pass = 0;
const fails = [];
const check = (name, cond) => { cond ? pass++ : (fails.push(name), console.log("FAIL:", name)); };

check("home-1-resource-folder", qa(".res-cell").length === 1 && qa(".scene-cell").length === 0);

// 资源夹 → 场景列表 → 场景
window.eval("openResource('ae')");
check("resource-page-scenes", qa(".scene-cell").length === 6);
qa(".scene-cell")[0].click();
check("via-resource-to-scene", q(".page-title").textContent.length > 2);

// PDF 话题页：直接展示两种模式（无预览无难度选择）
T.openTopic("d21");
check("topic-two-modes", !!q("#btnListen") && !!q("#btnDialog"));
check("topic-no-preview", !q("#preview") && qa(".level-row").length === 0);
check("topic-title", q(".page-title").textContent.includes("餐厅点餐"));

q("#btnDialog").click();
q("#startBtn").click();
check("pdf-dialog-run", qa("#stage .bubble").length >= 1);

// 场景话题列表
T.setView(T.renderHome, null); T.render();
T.openScene("travel");
check("scene-title-travel", q(".page-title").textContent.includes("旅行"));
check("scene-3-topics", qa(".topic-card").length === 3);

// 听读跟读：完整对话 + 三种展示切换 + 收藏/掌握
T.openTopic("travel-airport");
q("#btnListen").click();
check("listen-3-zone-layout", view_class_has("listen-mode") && order_ok());
function view_class_has(c) { return d.getElementById("view").classList.contains(c); }
function order_ok() {
  const ids = [...d.getElementById("view").children].map(x => x.id || x.className);
  return ids.indexOf("playerBar") === ids.indexOf("senPanel") + 1 && ids.indexOf("chipRow") === ids.indexOf("playerBar") + 1;
}
check("listen-full-dialog", qa(".line-item").length === 6);
check("listen-3-audio-btns", qa(".audio-toggle button").length === 3);
check("listen-nav-topic-btns", !!q("#prevT") && !!q("#nextT"));
check("listen-loop-btn", !!q("#loopBtn"));
check("listen-rec-collapsed", q("#recZone").style.display === "none");
q("#recToggle").click();
check("listen-rec-expanded", q("#recZone").style.display !== "none");

qa(".audio-toggle button").find(b => b.dataset.ver === "zh").click();
check("listen-zh-only", qa(".sentence-zh.big").length === 6 && qa(".sentence-en").length === 0);
qa(".audio-toggle button").find(b => b.dataset.ver === "mix").click();
check("listen-mix-both", qa(".sentence-en").length === 6 && qa(".sentence-zh").length === 6);
qa(".audio-toggle button").find(b => b.dataset.ver === "en").click();

// 点词查义（本地词库：restaurant 场景 travel-airport 无 match → 在线失败 → 暂无网络释义）
q(".line-item .w").click();
check("word-pop-shown", !!q(".word-pop"));
q("#wpAdd").click();
check("word-in-book", Object.keys(T.Store.get().wordbook).length === 1);
q("#wpClose").click();
check("word-pop-closed", !q(".word-pop"));

// 收藏文案（已收藏/收藏）
q("#favBtn").click();
check("fav-saved", !!T.Store.get().favs["travel-airport:s0"]);
check("fav-chip-已收藏", q("#favBtn").textContent.includes("已收藏"));
q("#favBtn").click();
check("fav-removed", !T.Store.get().favs["travel-airport:s0"]);
q("#favBtn").click();
q("#masterBtn").click();
check("master-saved", T.Store.get().mastery["travel-airport:s0"] === "mastered");

// 上一个/下一个话题导航（travel 场景 3 个话题循环）
const before = q(".page-title").textContent;
q("#nextT").click();
check("nav-next-topic", q(".page-title").textContent !== before && qa(".line-item").length > 0);
q("#prevT").click();

// 情景对话（不再需要难度选择）
T.setView(T.renderHome, null); T.render();
T.openTopic("travel-airport");
q("#btnDialog").click();
check("dialog-setup", !!q("#rA") && !!q("#rB") && qa("[data-h]").length === 3);
q("#startBtn").click();
check("dialog-run-header", q(".page-title").textContent.includes("角色扮演"));
check("dialog-bubble-appeared", q("#stage").children.length > 0);

// 复习模块
T.setView(T.renderHome, null); T.render();
T.Store.setReviewWeak("travel-hotel:s1");
T.setView(T.renderReview, null); T.render();
check("review-item-listed", q(".ri-title").textContent.length > 3);
check("review-count-due", T.countDue() > 0);

// 个人中心（含生词本卡片）
T.setView(T.renderMe, null); T.render();
check("me-page-title", q(".page-title").textContent.includes("个人中心"));
check("me-wordbook", d.body.textContent.includes("生词本"));

T.setView(T.renderHome, null); T.render();
check("home-again-ok", qa(".res-cell").length === 1);

console.log("PASS: " + pass + ", FAIL: " + fails.length);
process.exit(fails.length ? 1 : 0);
