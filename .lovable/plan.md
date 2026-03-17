

## Plan: 更新報名連結與陪跑限額

### 修改內容

**1. PricingSection.tsx — 報名連結**
- 一日工作坊按鈕（第 34 行）：改為 `https://api.payuni.com.tw/api/uop/receive_info/1/1/FUNC94518350/NqnfzQ39lTK4TArHZtDc`
- 移除高雄場按鈕（第 41-48 行），按鈕文字改為「立即報名」
- 工作坊＋陪跑班按鈕（第 83 行）：改為 `https://api.payuni.com.tw/api/uop/receive_info/1/1/FUNC94518350/xCKxadxq7rF8e8XOqDNS`
- 移除高雄場按鈕（第 90-97 行），按鈕文字改為「立即報名」
- 第 78 行：「陪跑限額 5 人」改為「陪跑限額 10 人」

**2. HeroSection.tsx**
- 第 46 行：「陪跑限額 5 人」改為「陪跑限額 10 人」

**3. ProcessSection.tsx**
- 第 110 行：「陪跑限額 5 人」改為「陪跑限額 10 人」

