

## 計畫：自動跳轉所有訪客到新網址

將所有進入此網站的訪客，自動跳轉到 `https://ai-book2026.lovable.app`。

### 做法

**修改檔案：`src/pages/Index.tsx`**

- 在元件最上方加入 `useEffect`，頁面一載入就執行 `window.location.replace("https://ai-book2026.lovable.app")`
- 使用 `replace` 而非 `assign`，這樣使用者按「上一頁」不會卡在跳轉迴圈
- 頁面內容改為簡單的「跳轉中...」提示文字，作為跳轉期間的畫面

### 影響範圍

- 僅修改一個檔案
- 所有訪客進站後會立即被導向新網址
- 原本的所有區塊內容都不會再被看到（但程式碼保留，日後可還原）

