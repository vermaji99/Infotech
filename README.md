# Kopl — Figma implementation

Built from [FIGMA (1)](https://www.figma.com/design/hQ2K5S8k0jriXMM4mUp2fB/FIGMA--1-) with exported assets in `assets/figma/`.

## Figma nodes mapped

| Node | Frame | Implementation |
|------|--------|----------------|
| `68:60` | Desktop 1440px | Main layout (hero + compliance) |
| `41:6825` | Navbar Tablet Menu | Drawer menu ≥ tablet breakpoint |
| `3:1159` | Navbar Mobile Menu | Same drawer (327px width on mobile) |
| `41:3724` | Desktop typography | Roboto scale (64/48/24/20/18) |
| `65:72` | Tablet 768px | `@media (max-width: 1024px)` |
| `41:5403` | Tablet hero variant | Stacked hero grid |
| `41:5553` | Tablet compliance | Single-column compliance grid |
| `41:4975` | Mobile variant | `@media (max-width: 768px)` |

## Typography (Roboto — node 41:3724)

| Style | Desktop | Tablet (≤1024px) | Mobile (≤768px) |
|-------|---------|------------------|-----------------|
| H1 | 64 / 85 Bold | 54 / 75 | 38 / 48 |
| H2 | 48 / 70 Semibold | 46 / 60 | 34 / 48 |
| Large title | 24 / 32 Semibold | 24 / 32 | 22 / 32 |
| Title | 20 Medium | 20 | 19 |
| Body | 18 / 32 Regular | 18 / 32 | 18 / 32 |

## Responsive (Figma frames)

| Breakpoint | Figma node | Layout |
|------------|------------|--------|
| **Desktop** >1024px | `68:60` | Two-column hero; compliance 2×2 grid; squiggle on title |
| **Tablet** ≤1024px | [`41:5402`](https://www.figma.com/design/hQ2K5S8k0jriXMM4mUp2fB/FIGMA--1-?node-id=41-5402) | Contact Us + menu; hero copy → chevrons left → illustration; side-by-side CTAs; left checklist |
| **Mobile** ≤768px | [`41:4951`](https://www.figma.com/design/hQ2K5S8k0jriXMM4mUp2fB/FIGMA--1-?node-id=41-4951) | Logo + menu only; centered hero; stacked full-width CTAs; centered chevrons; illustration below; menu **327px** |

## Hover (Figma)

- **Primary buttons** (Contact us, Get Started): blue fill → white fill + blue border
- **Outline button** (Book A Consultation): outline → blue fill
- **Info cards:** light border → **2px blue** border

## Open locally

Open `index.html` in a browser. Resize the window or use DevTools device mode to test tablet/mobile.

## Layout specs (desktop)

- **Hero:** 829px height; content at `72px` / `180px`; visual `739×607`; cards at exact Figma offsets
- **Compliance:** `1240px` inner width; 2×2 grid (title + intro / illustration + cards); gaps `36px`, `33px`, `52px`, `40px`
- **Squiggle arrow:** Figma `41:4283` (`path20605`) — inner **102.39×88.67px**, **rotate -53.41°**, bbox **132.23×135.07** @ **(445.56, 90.85)**, fill `#B2C0FE`
- **Hero banner:** Figma `41:3872` — frame **739.13×607px**, image **739.13×538.79px** @ `top: 68.21px`
- **Compliance illustration:** Group 12 — **594×594px**
- **Assets:** One file per role — no duplicate images stacked in the same place

## Note on Figma API

If the Figma MCP rate limit resets, re-export nodes with `/add-plugin figma` for pixel-perfect updates to `65:72`, `41:5403`, `41:5553`, and `41:4975`.
