// ─────────────────────────────────────────────────────────────
//  빌드 설정. 평소에는 손댈 일이 없습니다.
// ─────────────────────────────────────────────────────────────
import fs from "node:fs";

const regions = JSON.parse(fs.readFileSync("./src/_data/regions.json", "utf-8"));
const regionOrder = Object.fromEntries(regions.map((r, i) => [r.slug, i]));
const regionName = Object.fromEntries(regions.map((r) => [r.slug, r.name]));

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.ignores.add("src/admin/**");   // 관리자 화면은 그대로 복사만
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/naver*.html");   // 네이버 소유확인 파일
  eleventyConfig.ignores.add("src/naver*.html");

  // ── 필터 ────────────────────────────────────────────────
  const kst = (d) => new Date(d).toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit",
  });
  eleventyConfig.addFilter("dateKR", (d) => d ? kst(d).replace(/\.\s*$/, "").replace(/\.\s/g, ".") : "");
  eleventyConfig.addFilter("dateISO", (d) => d ? new Date(d).toISOString().slice(0, 10) : "");
  eleventyConfig.addFilter("dateRFC", (d) => new Date(d).toUTCString());
  eleventyConfig.addFilter("excerpt", (html = "", n = 150) => {
    const t = String(html).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return t.length > n ? t.slice(0, n) + "…" : t;
  });
  eleventyConfig.addFilter("where", (arr = [], k, v) => (arr || []).filter((x) => x[k] === v));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v ?? ""));
  eleventyConfig.addFilter("regionName", (slug) => regionName[slug] || slug);
  eleventyConfig.addFilter("tel", (s = "") => "tel:" + String(s).replace(/[^0-9]/g, ""));
  eleventyConfig.addFilter("telNumber", (s = "") => String(s).replace(/[^0-9]/g, ""));
  // 대표 사진이 없는 글에 번갈아 쓰는 기본 이미지
  const fallbacks = ["/assets/img/girl-writing.webp", "/assets/img/pair-blazers.webp",
                     "/assets/img/pair-shirts.webp", "/assets/img/thinking.webp"];
  eleventyConfig.addFilter("coverOr", (cover, i = 0) => cover || fallbacks[i % fallbacks.length]);

  // 반복 배너 (워드프레스 스니펫 역할)
  // 이미지: src/assets/img/banners/<이름>/ 폴더의 파일을 이름순으로 이어 붙임
  // 설정: src/_data/banners.json (alt, 링크, 자동으로 붙일 곳), 크기: src/_data/bannerDims.json
  // 본문에 <!-- banner:이름 --> 를 쓰면 그 자리에 들어가고,
  // auto 에 "branch" 가 있으면 모든 지점 페이지의 주소·학교 정보 아래에 자동으로 붙음
  const readJson = (p) => { try { return JSON.parse(fs.readFileSync(p, "utf-8")); } catch { return {}; } };
  const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const bannerHtml = (key) => {
    const b = readJson("./src/_data/banners.json")[key];
    const dims = readJson("./src/_data/bannerDims.json")[key] || {};
    const dir = `./src/assets/img/banners/${key}`;
    if (!b || !fs.existsSync(dir)) return "";
    const files = fs.readdirSync(dir).filter((f) => /\.(webp|jpe?g|png|gif)$/i.test(f)).sort();
    if (!files.length) return "";
    const imgs = files.map((f, i) => {
      const [w, h] = dims[f] || [];
      const size = w && h ? ` width="${w}" height="${h}"` : "";
      return `<img src="/assets/img/banners/${key}/${f}" alt="${i === 0 ? esc(b.alt) : ""}"${size} loading="lazy" decoding="async">`;
    }).join("");
    const body = b.link ? `<a href="${esc(b.link)}" aria-label="${esc(b.label || "")}">${imgs}</a>` : imgs;
    return `<figure class="promo-banner" data-banner="${key}">${body}</figure>`;
  };
  eleventyConfig.addFilter("bannerize", (html = "") =>
    String(html).replace(/<!--\s*banner:([a-z0-9-]+)\s*-->/g, (m, key) => bannerHtml(key)));
  eleventyConfig.addFilter("autoBanners", (place, html = "") => {
    const all = readJson("./src/_data/banners.json");
    return Object.keys(all)
      .filter((key) => (all[key].auto || []).includes(place))
      .filter((key) => !new RegExp(`<!--\\s*banner:${key}\\s*-->`).test(String(html)))
      .map((key) => bannerHtml(key))
      .join("");
  });

  // 본문의 '## 자주 묻는 질문' 아래 '### 질문' + 답변을 뽑아 FAQ 구조화 데이터로
  eleventyConfig.addFilter("faqItems", (html = "") => {
    const m = String(html).match(/<h2[^>]*>\s*자주 묻는 질문\s*<\/h2>([\s\S]*?)(?=<h2|$)/);
    if (!m) return [];
    const text = (s) => s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    return m[1].split(/<h3[^>]*>/).slice(1).map((part) => {
      const [q, a = ""] = part.split(/<\/h3>/);
      return { q: text(q), a: text(a) };
    }).filter((x) => x.q && x.a);
  });

  // ── 학습정보 ────────────────────────────────────────────
  const infoLive = (api) => api.getFilteredByTag("info")
    .filter((p) => !p.data.draft).sort((a, b) => b.date - a.date);
  eleventyConfig.addCollection("info", infoLive);
  eleventyConfig.addCollection("infoCategories", (api) => {
    const b = {}, label = {};
    for (const p of infoLive(api)) {
      const s = p.data.category || "study";
      label[s] = p.data.categoryLabel; (b[s] = b[s] || []).push(p);
    }
    return Object.keys(b).map((slug) => ({ slug, label: label[slug], posts: b[slug], count: b[slug].length }));
  });

  // ── 전국지점 ────────────────────────────────────────────
  const branchLive = (api) => api.getFilteredByTag("branch")
    .filter((p) => !p.data.draft)
    .sort((a, b) =>
      (regionOrder[a.data.region] ?? 99) - (regionOrder[b.data.region] ?? 99) ||
      String(a.data.branchName).localeCompare(String(b.data.branchName), "ko"));
  eleventyConfig.addCollection("branches", branchLive);
  eleventyConfig.addCollection("branchRegions", (api) => {
    const b = {};
    for (const p of branchLive(api)) (b[p.data.region] = b[p.data.region] || []).push(p);
    return regions.filter((r) => b[r.slug])
      .map((r) => {
        // real: 예시(sample: true)를 뺀 실제 지점 — 사이트맵·RSS·색인 여부에 사용
        const real = b[r.slug].filter((p) => !p.data.sample);
        return { ...r, branches: b[r.slug], count: b[r.slug].length, real, realCount: real.length };
      });
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
