

## 修正 OG / Twitter / JSON-LD 過時資訊

目前 `index.html` 有多處內容還是舊版（台中/高雄實體場、陪跑限額 5 人），導致分享出去時顯示錯誤資訊。

### 修改項目

**1. meta description（第 7 行）**
- 「4/11 台中、4/12 高雄，陪跑限額 5 人」→「4/11（六）線上直播，陪跑限額 10 人」

**2. OG / Twitter 標籤整理**
- 移除底部重複的 og:title / og:description / twitter:title / twitter:description（第 182-185 行）
- 在原本空白的位置（第 13、25 行）補回正確的 title 和 description
- og:description 和 twitter:description 同步更新為新版文案

**3. JSON-LD 結構化資料（第 70-135 行）**
- 刪除高雄場 `CourseInstance`（第 106-134 行）
- 台中場改為線上場：
  - name → 「AI 出書實戰班 線上場」
  - location 改為 `VirtualLocation`，url 指向網站
  - courseMode → `online`
  - 日期維持 2025-04-11

這些改動確保 LINE / Facebook / Slack 等平台分享時能正確顯示標題、描述和圖片。

