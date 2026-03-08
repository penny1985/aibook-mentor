

## 調整方案：放大純文字 + 限制圖片寬度

目前純文字多為 `text-base`（16px），圖片則撐滿整個容器寬度，導致圖中文字顯得特別大。

### 具體改動

**1. ProblemSection.tsx — 放大純文字**
- 所有段落內文從 `text-base`（16px）→ `text-lg`（18px）
- 強調句從 `text-lg` → `text-xl`
- 小標題 `text-3xl` → `text-4xl`

**2. ProblemSection.tsx — 限制圖片寬度**
- `whyPublishNowImg`：加上 `max-w-2xl mx-auto`（最大約 672px，居中）
- `publisherLossImg`：加上 `max-w-2xl mx-auto`
- `sixWeekOutcomeImg`：加上 `max-w-2xl mx-auto`

**3. ProcessSection.tsx — 同步放大文字**
- 段落內文 `text-base` → `text-lg`，保持跨區塊一致

這樣圖片視覺上會縮小，文字會放大，兩者比例更協調。

