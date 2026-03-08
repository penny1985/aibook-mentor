

## Plan: Multiple Content & Style Updates

### 1. Banner Image (ProblemSection)
- Copy uploaded image `user-uploads://Gemini_Generated_Image_h5wjxxh5wjxxh5wj.png` to `src/assets/blank-notebook.jpg` (replacing current)
- The image has a small star icon in bottom-right corner — add CSS to crop/hide it (e.g., wrap in overflow-hidden container with slight negative margin or use object-fit + object-position)

### 2. Google Maps Fix (CTASection)
- Replace current broken iframe URLs with correct Google Maps embed URLs using place search queries:
  - Monospace 台中: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5!2d120.6843!3d24.1516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d640a6e0cc1%3A0x73a8a8e1d4d0d3c6!2sMonospace` — use place ID search instead: `https://www.google.com/maps/embed/v1/place?key=...` or use `https://maps.google.com/maps?q=Monospace+台中&output=embed`
  - Since we can't use API keys, use the `maps?q=` embed approach for accurate pin placement

### 3. ProcessSection Updates
- Change "陪跑班核心權益" → "陪跑班專屬好康"
- Change background to white (`bg-white` or `bg-background`)
- Update editor bio text as specified (remove 城邦 reference, add 著有《鬧笑話》paragraph)
- Replace the feedback description block with the new two-part format (① ②)

### 4. PricingSection Updates
- Update 16,800 package items to the new list
- Update 7,500 package items to the new list

### 5. CasesSection Updates
- Update all 4 case studies with new title/result text as specified

### 6. CTASection Overhaul
- Merge CTA headline + course info + maps into one unified section
- Change headline text and description as specified
- "早鳥 3/28 截止" button scrolls to `#pricing` instead of being a badge
- Keep course info and maps below

### 7. Page Order (Index.tsx)
- Move pricing + course info + maps before FAQ: Hero → Problem → Process → Cases → Pricing/CourseInfo → FAQ → CTA

### 8. Footer Updates
- Change 2025 → 2026
- Add 官網 link: https://read-draw.com/

### 9. Background Color Fixes
- Several sections use `bg-secondary` (which is `35 30% 90%` — a brownish tone). Change appropriate sections to `bg-white` or `bg-background` for cleaner look. Specifically ProcessSection's editor highlight block and other dark-toned areas.

### Files to modify:
1. **src/assets/blank-notebook.jpg** — replace with uploaded image
2. **src/components/ProblemSection.tsx** — hide star corner on new image
3. **src/components/ProcessSection.tsx** — rename section, white bg for editor block, update bio & feedback text
4. **src/components/PricingSection.tsx** — update package items
5. **src/components/CasesSection.tsx** — update 4 case studies
6. **src/components/CTASection.tsx** — simplify to CTA + course info + maps merged, "早鳥" links to #pricing
7. **src/pages/Index.tsx** — reorder sections (pricing before FAQ)
8. **src/components/Footer.tsx** — 2026, add 官網 link
9. **src/index.css** — no major changes needed, but ensure `bg-secondary` isn't too dark

