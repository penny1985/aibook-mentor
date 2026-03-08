

## 手機版小圓圖放在標題右邊

### 修改內容

修改 `src/components/ProblemSection.tsx` 第 15-26 行的標題區：

1. 在 `<h2>` 標題與小圓圖之間用 `flex` 並排，圖片放右邊
2. 小圓圖只在手機版顯示（`md:hidden`），桌面版維持原本右欄大圖

具體佈局：
- 將標題 `<h2>` 包在一個 `flex items-center gap-4` 的容器裡
- 標題在左（`flex-1`），小圓圖在右（`w-16 h-16 rounded-full object-cover shrink-0 md:hidden`）
- 原本的大圖容器加上 `hidden md:flex`

```text
手機版：
┌──────────────────────────┐
│  你心裡那本書，    [○]    │
│  卡了多久了？             │
│                          │
│  說明文字...              │
└──────────────────────────┘
```

### 修改檔案
- `src/components/ProblemSection.tsx`

