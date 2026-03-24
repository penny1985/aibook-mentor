

## 圖片載入優化方案

### 問題
所有圖片都是透過 `import` 靜態引入，Vite 會打包但不會做任何延遲載入或尺寸優化，導致首屏載入慢。

### 做法

**1. Hero Banner 預載（最關鍵）**
- 在 `index.html` 的 `<head>` 加入 `<link rel="preload" as="image" href="/src/assets/hero-banner.jpg">`，讓瀏覽器最早開始下載
- 在 `HeroSection.tsx` 的 `<img>` 加上 `loading="eager"` 和 `fetchPriority="high"`

**2. 其他圖片延遲載入**
- 所有非首屏圖片（ProblemSection、CasesSection、ProcessSection 的圖片）加上 `loading="lazy"`
- 這樣瀏覽器只在滾動接近時才下載，減少首屏競爭頻寬

**3. 加上圖片尺寸屬性**
- 為所有 `<img>` 補上 `width` 和 `height` 屬性，避免 layout shift

### 修改檔案
- `index.html`：加 preload link
- `HeroSection.tsx`：加 `fetchPriority="high"` + `loading="eager"`
- `ProblemSection.tsx`：所有 `<img>` 加 `loading="lazy"`
- `CasesSection.tsx`：所有 `<img>` 加 `loading="lazy"`
- `ProcessSection.tsx`：所有 `<img>` 加 `loading="lazy"`

