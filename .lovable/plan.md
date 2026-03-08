

## Spacing Audit for ProblemSection

### Problems Found

1. **Section 1 "你心裡那本書"** (line 14): Inner grid has `mb-28` but the section itself already has `py-20 md:py-28` padding — this creates excessive bottom space before the white section.

2. **Section 3 "傳統出版" block** (lines 52-75): The `space-y-6` wrapper only gives 1.5rem between child elements. The transition from the text content to "Market reality" (line 78) has **no explicit top margin** — they're squeezed together.

3. **"Market reality" block** (line 78): Has `mb-28` at the bottom, creating a large gap before "Solution" — inconsistent with the tight gap above it.

4. **"Why publish now" image** (line 44): Has `mb-8` bottom margin inside its section which adds unnecessary padding since the section already has `py-20 md:py-28`.

### Plan

Normalize all internal sub-block spacing to a consistent rhythm:

| Location | Current | Change to |
|---|---|---|
| Line 14: Problem intro grid | `mb-28` | Remove (section padding is enough) |
| Line 44: whyPublishNow img | `mb-8` | Remove trailing margin |
| Line 52: `space-y-6` wrapper | `space-y-6` | Remove `space-y-6`, add explicit `mb-16` between sub-blocks |
| Line 72: Transition paragraph | `mt-6` | `mt-12` for breathing room |
| Line 78: Market reality | `border-l-4 ... mb-28` | Change to `mt-16 mb-16` for consistent spacing |
| Line 106: Solution block | No top margin | Add `mt-16` (or rely on Market reality's `mb-16`) |

The goal: ~4rem (mt/mb-16) between every major sub-block inside section 3, and let section-level `py-20 md:py-28` handle the outer spacing without redundant inner margins.

