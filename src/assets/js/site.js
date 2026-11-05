// 담당 학교 D-day (한국 시간 기준)
(function () {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  document.querySelectorAll("[data-exam]").forEach((el) => {
    const [y, m, d] = (el.dataset.exam || "").split("-").map(Number);
    const days = Math.round((new Date(y, m - 1, d) - today) / 86400000);
    if (!y || isNaN(days) || days < 0) { el.remove(); return; }
    el.textContent = days === 0 ? "오늘 시험" : "D-" + days;
    el.title = "다음 시험 " + el.dataset.exam;
    if (days <= 28) el.classList.add("is-close");
  });
})();

// 학년 탭 (휴대폰에서만 탭, 넓은 화면은 세 칸)
(function () {
  document.querySelectorAll("[data-tabs]").forEach((box) => {
    const tabs = [...box.querySelectorAll('[role="tab"]')];
    const pick = (t) => tabs.forEach((x) => {
      const on = x === t;
      x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
    });
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => pick(t));
      t.addEventListener("keydown", (e) => {
        const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        const n = tabs[(i + d + tabs.length) % tabs.length]; pick(n); n.focus();
      });
    });
  });
})();

// 전국지점 검색 (지점명·동네·주소·학교 이름)
(function () {
  const form = document.querySelector("[data-branch-search]");
  if (!form) return;
  const input = form.querySelector("input");
  const count = form.querySelector("[data-branch-count]");
  const empty = document.querySelector("[data-branch-empty]");
  const items = [...document.querySelectorAll("li[data-search]")];
  const norm = (s) => String(s || "").toLowerCase().replace(/[\s·,()|-]/g, "");
  items.forEach((li) => { li._t = norm(li.dataset.search); });
  const run = () => {
    const words = input.value.trim().split(/\s+/).map(norm).filter(Boolean);
    let shown = 0;
    items.forEach((li) => {
      const ok = words.every((w) => li._t.includes(w));
      li.hidden = !ok; if (ok) shown++;
    });
    document.querySelectorAll(".region").forEach((sec) => {
      sec.hidden = !sec.querySelector("li[data-search]:not([hidden])");
    });
    empty.hidden = shown > 0;
    count.textContent = words.length ? "검색 결과 " + shown + "곳" : "";
    const u = new URL(location.href);
    if (words.length) u.searchParams.set("q", input.value.trim()); else u.searchParams.delete("q");
    history.replaceState(null, "", u);
  };
  input.addEventListener("input", run);
  const q = new URLSearchParams(location.search).get("q");
  if (q) { input.value = q; run(); }
})();