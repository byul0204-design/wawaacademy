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
  // 대표 사진이 없는 글에 번갈아 쓰는 기본 이미지
  const fallbacks = ["/assets/img/girl-writing.webp", "/assets/img/pair-blazers.webp",
                     "/assets/img/pair-shirts.webp", "/assets/img/thinking.webp"];
  eleventyConfig.addFilter("coverOr", (cover, i = 0) => cover || fallbacks[i % fallbacks.length]);

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
      .map((r) => ({ ...r, branches: b[r.slug], count: b[r.slug].length }));
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
