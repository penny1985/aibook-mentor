

## Plan: Nordic Natural Style Overhaul + Content Updates

### 1. Color System Overhaul (index.css)
Current problem: `--background: 40 33% 97%` is a grey-green, `--surface-dark: 150 25% 14%` is a heavy dark green. The user wants a warm, Nordic natural feel — warm whites, soft sage greens, and golden accents.

Changes:
- `--background`: shift to true warm white `40 40% 98%`
- `--foreground`: soften to warm dark brown-green `80 15% 18%`
- `--surface-dark`: change from deep forest green to a warm, lighter tone like `90 20% 28%` (warm olive-green, not heavy)
- `--secondary`: warm cream-sage `80 25% 94%`
- `--accent-green`: softer sage green `130 25% 42%` (less saturated, warmer)
- `--muted-foreground`: warmer grey `80 8% 45%`
- `--border`: warm beige `45 20% 85%`
- Adjust card, popover, primary tokens accordingly to match warm Nordic palette

### 2. HeroSection Overhaul
- Generate a new hero background image with AI: bright, airy, natural Nordic scene (warm light, greenery, books, soft focus)
- Simplify top tag to just: `4/11 台中 ｜ 4/12 高雄`  (remove early bird deadline, remove duplicate location info)
- Increase line-height on h1: change `leading-tight` to `leading-relaxed` or add explicit `leading-[1.4]`
- Change the subtitle text from "帶著一份可投遞的書籍企劃書離開，這個組合市面上找不到第二個" to "讓你帶著一份可投遞的書籍企劃書離開"
- Remove the bottom tags section (duplicate location/early bird info)
- Simplify CTA area — reduce the verbose dual-location, dual-product button grid. Keep it cleaner

### 3. Typography Line Height
- All section headings (`h2`) that have `<br/>` or multi-line content: change `leading-tight` to `leading-relaxed` or `leading-loose`
- Apply to: HeroSection h1, ProblemSection h2, ProcessSection h2, CasesSection h2, CTASection h2

### 4. Add Editor (賈俊國) Photo
- Copy uploaded image `user-uploads://464574588_10235101354824930_200028535020637560_n.jpg` to `src/assets/editor-jia.jpg`
- Add the photo in ProcessSection's "總編會客室" block, displayed alongside his bio text

### 5. Generate New Hero Image
- Use AI image generation to create a warm, bright, Nordic natural style image (soft greenery, warm light, books/writing atmosphere, airy and inviting)

### Files to modify:
1. **src/index.css** — Warm Nordic color tokens
2. **src/components/HeroSection.tsx** — Simplify content, fix line heights, new bg image, update subtitle
3. **src/components/ProcessSection.tsx** — Add editor photo, fix heading line heights
4. **src/components/ProblemSection.tsx** — Fix heading line heights
5. **src/components/CasesSection.tsx** — Fix heading line heights  
6. **src/components/CTASection.tsx** — Fix heading line heights
7. **src/components/FAQSection.tsx** — Fix heading line heights
8. **src/components/Navbar.tsx** — Adjust to warm palette (not heavy dark green)
9. **src/components/Footer.tsx** — Adjust to warm palette
10. **New asset**: `src/assets/editor-jia.jpg` (copy from upload)
11. **New asset**: Generate new hero image

