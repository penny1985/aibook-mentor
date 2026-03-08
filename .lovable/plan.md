

## AEO 補強計畫

### 一、語意化 HTML 強化（`Index.tsx` + 各 Section 元件）

- 每個 `<section>` 加上 `aria-labelledby` 屬性，對應的 `<h2>` / `<h3>` 加上 `id`
- Navbar 的 `<nav>` 加上 `aria-label="主要導覽"`

### 二、標題改為搜尋意圖格式（各 Section 元件）

根據記憶檔指示，將部分 h2/h3 調整為更貼近搜尋意圖的格式，例如：

| 現在 | 建議改為 |
|------|---------|
| 你清楚出版社需要什麼嗎？ | 出版社現在要的是什麼？素人投稿的現實 |
| 課程流程 | AI 出書實戰班怎麼上？完整課程流程 |
| 常見問題 | AI 出書實戰班常見問題 |

視覺呈現不變（可用 `<span className="sr-only">` 補充搜尋用文字），或直接調整標題文案。

### 三、補充 JSON-LD 欄位（`index.html`）

- Course 加入 `educationalLevel`、`teaches`（學習成果關鍵字）
- 加入 `og:image:width` / `og:image:height` meta 標籤
- 可選：加入 BreadcrumbList Schema

### 四、圖片 alt 文字優化（`ProblemSection.tsx`、`ProcessSection.tsx`）

將 alt 改為更具描述性的內容，例如：
- `workshopPhoto`：「陳沛孺 Penny 在台中 AI 出書實戰班工作坊帶領學員實作企劃書」
- `editorImg`：「布克文化總編輯賈俊國，30 年出版資歷，經手超過 500 本暢銷書」

### 修改檔案
- `index.html` — JSON-LD 補充欄位 + og:image 尺寸
- `src/components/Navbar.tsx` — aria-label
- `src/components/HeroSection.tsx` — heading id
- `src/components/ProblemSection.tsx` — aria-labelledby + alt 優化 + 標題調整
- `src/components/ProcessSection.tsx` — aria-labelledby + alt 優化 + 標題調整
- `src/components/FAQSection.tsx` — 標題調整
- `src/components/CasesSection.tsx` — aria-labelledby
- `src/components/CTASection.tsx` — aria-labelledby

