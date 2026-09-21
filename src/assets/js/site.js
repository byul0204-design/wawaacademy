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
