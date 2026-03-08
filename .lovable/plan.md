

## Issues Found and Fix Plan

### 1. Kaohsiung Map Still Not Pinning Correctly
**Current code** (PricingSection.tsx line 133): Uses a text query `WEE 威易聯合辦公室 高雄市新興區中正三路55號27F` which Google Maps cannot reliably resolve.

**Fix**: Replace with coordinate-based embed URL using the exact coordinates of the building at 高雄市新興區中正三路55號 (approximately 22.6308, 120.3006). This is the most reliable way to pin a location and avoids Google Maps query resolution issues.

New URL: `https://maps.google.com/maps?q=22.6308,120.3006&z=17&ie=UTF8&iwloc=&output=embed`

### 2. "為什麼 Penny 能帶這門課" Not White Background
**Current code** (CasesSection.tsx line 82): Uses `bg-card` which renders as warm gray (HSL 35 35% 93%), not white.

**Fix**: Change `bg-card` to `bg-white` on line 82.

### 3. "為什麼推薦完整方案" Not White Background
**Current code** (PricingSection.tsx line 148): Uses `bg-card` which is also warm gray.

**Fix**: Change `bg-card` to `bg-white` on line 148.

### Files to Edit
- **PricingSection.tsx**: Fix map URL (line 133) + change bg-card to bg-white (line 148)
- **CasesSection.tsx**: Change bg-card to bg-white (line 82)

