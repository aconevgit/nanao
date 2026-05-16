# Nanotemplate — Project Brief

## What This Project Is

Nanotemplate is a single-page HTML landing page template for digital product sellers. It is sold as a one-time purchase for $9.99 and is positioned as the anti-ClickFunnels: a 24kb, zero-dependency, self-hosted alternative to subscription funnel builders. The product consists of three files — `index.html`, `styles.css`, `script.js` — and requires no build tools, no framework, and no external services except the video embed (Voomly) and the payment processor (Stripe, not yet wired).

**Target audience:** Indie creators, Notion template sellers, digital course creators, freelance designers — anyone selling a digital product who does not want to pay $197/month for ClickFunnels.

**Competitive positioning:** Speed (24kb vs 2.86MB average), cost ($9.99 once vs subscription), ownership (raw files, host anywhere), and aesthetics (not a "cringe" funnel).

**Current price in JSON-LD and copy:** $9.99 USD. Stripe is not connected — the buy buttons currently scroll to the footer section.

---

## File Structure

```
/
├── index.html
├── styles.css
├── script.js
├── fonts/
│   ├── inter-v20-latin-regular.woff2
│   ├── inter-v20-latin-500.woff2
│   ├── inter-v20-latin-600.woff2
│   ├── inter-v20-latin-700.woff2
│   └── inter-v20-latin-800.woff2
├── images/
│   ├── logo.svg
│   ├── favicon.svg
│   └── video-thumbnail.webp
└── quick-start-guide.pdf
```

---

## Page Section Structure (in document order)

### 1. Navigation
- Sticky, glassmorphism background (`rgba(255,255,255,0.95)` + `backdrop-filter: blur(12px)`)
- Left: SVG logo (`images/logo.svg`, 36×36, `fetchpriority="high"`)
- Right: nav-links group (hidden on mobile, visible at 640px+) containing:
  - **Preview** button — scrolls to `#video-block`
  - **Features** button — scrolls to `#features-block`
  - **Quick Start Guide** — downloads `quick-start-guide.pdf`
- Right: **Buy Now** button (`nav-cta-text`) — scrolls to `#footer-area`
- `aria-label="Main navigation"` on `<nav>`

### 2. Hero
- White background, centered text
- Eyebrow: `$197/month for a funnel builder you barely use.`
- H1: `I spent $2,561 on ClickFunnels. Made $0 sales.`
- Supporting text: `The no code HTML landing page template for digital products. Ultra-optimised, pixel perfect, SEO-ready. Three files, 24kb. No funnel builder required.`
- CTA group: **Buy Now** (btn-primary, scrolls to footer) + **See It In Action** (ghost-link, scrolls to video)
- Hero note: `$9.99 one time. No subscription. Yours forever.`
- All elements have `.reveal` / `.reveal-delay-N` classes for scroll animation

### 3. Pain Amplification
- Dark background (`--color-surface-dark: #0f1117`)
- H2: `You are not bad at selling. You are using the wrong tool.`
- Subhead: ClickFunnels critique
- Three pain cards in a responsive grid:
  - `119X` — Only 24KB code
  - `$9.99` — One Payment
  - `94%` — No Cringe
- Each card: `pain-number` (stat), `pain-label` (h3), `pain-desc`

### 4. Video
- White background, id `video-block`
- H2: `You are already looking at the template. Watch how fast you can make it yours.`
- Video facade pattern: thumbnail shown by default, Voomly iframe hidden (`display: none`) until play button is clicked
- Thumbnail: `images/video-thumbnail.webp` (1920×1080, `loading="lazy"`, `decoding="async"`)
- Play button: circular brand-colour button with CSS triangle arrow
- Caption: `🎬 3‑min demo: real automation workflow — no distractions`
- Voomly iframe has `sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"`, `title="Nanotemplate product demo video"`

### 5. Features
- Dark background, id `features-block`
- Eyebrow: `Under the hood`
- H2: `Built with obsessive attention to craft.`
- Six filter buttons: All (default active), Speed, SEO, Design, Ownership, Code
  - `aria-pressed` attributes managed by JS
  - `aria-live="polite"` on `.features-grid` for screen reader announcements
- 15 feature cards in an `auto-fill minmax(240px, 1fr)` grid, grouped by category:
  - **Speed** (3): Loads before anything else / Video only loads when clicked / Fonts load from your server
  - **SEO** (3): Star ratings in Google search / Perfect social sharing / Mobile first by default
  - **Design** (3): No layout jumps / Buttons that feel alive / Works for everyone
  - **Ownership** (3): Three files. That is it. / Nothing breaks if you edit it / No data sent anywhere
  - **Code** (3): Zero dependencies / Keyboard and screen reader ready / PageSpeed 98 plus
- Each card: SVG icon (inline, `stroke="#818cf8"`), h3 title, description div
- CTA below grid: **Buy Now** (btn-primary, scrolls to footer)

### 6. Testimonials
- Pale blue background (`--color-bg-testimonials: #e8edf5`)
- H2: `Look at what our customers have to say!`
- Rotating carousel — three slides, auto-advances every 6 seconds, pauses on hover and when tab hidden
- Each slide:
  - Left: avatar circle with initials (SM/JK/MR), 5-star rating, `<cite>` wrapping author name and title
  - Right: quote text with decorative ornament quotes (❝ ❞) via `::before` / `::after`
- Dot navigation rendered dynamically by JS below the container
- Three testimonials: Sarah M. (Digital Course Creator), James K. (Notion Template Seller), Mia R. (Freelance Designer)

### 7. Footer
- Dark background, id `footer-area` — this is the scroll target for all Buy Now buttons
- Logo (28×28, `fetchpriority="low"`, white via CSS `filter: brightness(0) invert(1)`) — links to `#` (scroll to top)
- Copyright: `© 2026 Nanotemplate - HTML template`
- **Note:** Stripe payment integration is not implemented. The footer is currently just a copyright bar. The buy CTA destination needs to be updated to a Stripe checkout link when ready.

---

## Head / SEO / Meta

- `<title>`: `Nanotemplate - #1 ClickFunnels Alternative`
- Meta description: `A 24kb HTML landing page template for digital products. Faster than ClickFunnels, owned forever, $9.99 one time.`
- `theme-color`: `#ffffff`
- `robots`: `index, follow`
- Canonical: `https://nanotemplate.com/`
- Open Graph: type, url, title, description, image (`video-thumbnail.webp` 1920×1080)
- Twitter Card: `summary_large_image`, title, description, image + alt
- Favicon: `images/favicon.svg` (also used as apple-touch-icon)
- Font preload: `fonts/inter-v20-latin-regular.woff2` (regular weight only)
- JSON-LD: `Product` schema with `Offer` ($9.99 USD, InStock) and `AggregateRating` (5/5, 3 reviews), `image` and `url` properties included

---

## Color Token System (`:root`)

### Brand
| Token | Value | Usage |
|---|---|---|
| `--color-brand` | `#4f46e5` | Primary indigo — buttons, stars, eyebrow, focus rings |
| `--color-brand-hover` | `#4338ca` | Darker indigo for hover states |
| `--color-brand-light` | `#818cf8` | Lighter indigo — SVG icon strokes, active filter button |
| `--color-brand-glow-soft` | `rgba(79,70,229,0.35)` | btn-primary hover box-shadow |
| `--color-brand-glow-faint` | `rgba(79,70,229,0.04)` | ghost-link hover background |
| `--color-brand-glow-pulse` | `rgba(79,70,229,0.3)` | pulse-glow animation box-shadow |
| `--color-brand-light-alpha` | `rgba(129,140,248,0.4)` | filter-btn hover border |
| `--color-brand-light-soft` | `rgba(129,140,248,0.2)` | feat-card hover border |
| `--color-brand-light-hover` | `#c7d2fe` | filter-btn hover text color |

### Surfaces
| Token | Value | Usage |
|---|---|---|
| `--color-surface-dark` | `#0f1117` | Pain, Features, Footer section backgrounds |
| `--color-card-dark` | `#1a1f2e` | Pain cards, feature cards |
| `--color-bg-primary` | `#ffffff` | Hero, Video section backgrounds |
| `--color-bg-secondary` | `#f8fafc` | Body background, video wrapper fill |
| `--color-bg-nav` | `rgba(255,255,255,0.95)` | Sticky nav background |
| `--color-bg-testimonials` | `#e8edf5` | Testimonials section background |
| `--color-bg-avatar` | `#e2e8f0` | Avatar circle background; also footer base text color |
| `--color-bg-dot` | `#cbd5e1` | Inactive dot background; features section subhead text |

### Text
| Token | Value | Usage |
|---|---|---|
| `--color-text-primary` | `#0b0b0f` | Main body text, headings on light |
| `--color-text-muted` | `#6c727f` | Hero note, video caption, testimonial title |
| `--color-text-dark-muted` | `#94a3b8` | Text on dark surfaces (feat-card desc, pain desc) |
| `--color-text-on-dark` | `#ffffff` | Headings and labels on dark surfaces |
| `--color-text-subtle` | `#4b5563` | Nav links, ghost-link, nav-cta hover |
| `--color-text-hero` | `#3b4458` | Hero supporting text |
| `--color-text-muted-light` | `#5b677b` | Defined but not yet applied to any rule |
| `--color-text-section` | `#5b677b` | Section header `p` subtext on light sections |
| `--color-text-footer` | `#7e8a98` | Footer copyright text |
| `--color-text-footer-logo` | `#eef2ff` | Footer logo text (unused since logo is an img) |
| `--color-avatar-initials` | `#1e293b` | Initials text color inside avatar placeholder |

### Borders
| Token | Value | Usage |
|---|---|---|
| `--color-border` | `#eceef2` | Light section bottom borders |
| `--color-border-dark` | `rgba(255,255,255,0.06)` | Dark section borders, card borders, filter btn border |
| `--color-border-dark-hover` | `rgba(255,255,255,0.12)` | Pain card hover border |
| `--color-border-light` | `#e2e8f0` | Ghost-link border |
| `--color-video-border` | `#eef2f6` | Video wrapper border |

### Shadows
| Token | Value | Usage |
|---|---|---|
| `--color-shadow-nav` | `rgba(0,0,0,0.12)` | Nav bottom shadow |
| `--color-shadow-sm` | `rgba(0,0,0,0.02)` | Video wrapper box-shadow |
| `--color-shadow-avatar` | `rgba(0,0,0,0.05)` | Avatar circle box-shadow |

### Radii
| Token | Value | Usage |
|---|---|---|
| `--radius-pill` | `40px` | Buttons, filter pills |
| `--radius-card` | `16px` | Video wrapper |
| `--radius-card-sm` | `14px` | Defined, not currently referenced |
| `--radius-card-dark` | `14px` | Feature cards |
| `--radius-card-pain` | `20px` | Pain cards |

### Transitions
| Token | Value | Usage |
|---|---|---|
| `--transition-base` | `0.2s ease` | All standard hover/state transitions |
| `--duration-slow` | `0.4s` | Video facade fade out |

---

## Typography Scale

### Defined tokens (not yet applied to rules — still uses raw `px` values in rules)
```
--text-xs:   12px
--text-sm:   13px
--text-base: 14px
--text-md:   15px
--text-lg:   16px
--text-xl:   18px
--text-2xl:  20px
--text-3xl:  24px
--text-4xl:  32px
--text-5xl:  40px
--text-6xl:  56px
--text-7xl:  72px
```

### Actual font-size values in use (by element)

| Element | Mobile | 480px | 640px | 768px | 1024px |
|---|---|---|---|---|---|
| `.eyebrow` | 12px | — | 13px | — | 14px |
| `.hero-title` | 36px | — | 50px | 58px | 65px |
| `.hero-supporting-text` | 16px | — | 18px | — | 24px |
| `.hero-note` | 13px | — | — | — | — |
| `.section-header h2` | 32px | — | 36px | 38px | 42px |
| `.section-header p` | 16px | — | 17px | — | 18px |
| `.pain-number` | 48px | — | 60px | — | 72px |
| `.pain-label` | 18px | — | 20px | — | 22px |
| `.pain-desc` | 16px | — | 17px | — | 18px |
| `.feat-card-title` | 15px | — | — | — | — |
| `.feat-card-desc` | 13px | — | — | — | — |
| `.testimonial-quote` | 20px | 20px | 22px | — | — |
| `.testimonial-author` | 16px | — | — | — | — |
| `.testimonial-title` | 13px | — | — | — | — |
| `.avatar-placeholder` | 24px | 1.4em | — | — | — |
| `.btn-primary` | 15px | — | 16px | — | — |
| `.ghost-link` | 15px | — | 16px | — | — |
| `.nav-cta-text` | 14px | — | 15px | — | 16px |
| `.nav-link` | 14px | — | 15px | — | 16px |
| `.video-caption` | 13px | — | — | — | — |
| `.footer-copyright` | 13px | — | 14px | — | 15px |
| `.logo` | 20px | — | 22px | — | — |

### Line heights in use
- `1.1` — pain-number
- `1.2` — hero-title
- `1.3` — feat-card-title
- `1.4` — body default, testimonial-quote, pain-desc
- `1.5` — hero-supporting-text
- `1.6` — feat-card-desc

### Letter spacing in use
- `-0.02em` — hero-title
- `-0.015em` — .logo
- `-0.01em` — .footer-logo
- `1.4px` — .eyebrow (uppercase tracking, intentionally in px)

### Font family
Inter, self-hosted. Five weights loaded via `@font-face`: 400, 500, 600, 700, 800. Only the 400 regular is preloaded in `<head>`.

---

## Spacing Scale

### Defined tokens (not yet applied to rules — still uses raw `px` values in rules)
```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-30: 120px
--space-35: 140px
--space-40: 160px
```

---

## Responsive Breakpoints

### Base (mobile, no breakpoint)
- Container: `width: 100%`, `padding: 0 20px`, no max-width
- Nav: `padding: 16px 0`, nav-links hidden
- Pain grid: single column
- Testimonial slide: column layout
- All sections: `padding: 96px 0` (pain, video, testimonials) or `100px 0 96px` (hero)
- Features: `padding: 96px 0`
- Footer: `padding: 56px 0 48px`

### 480px
- Testimonial quote: 20px
- Testimonial avatar: 80×80px
- Avatar placeholder font: `1.4em`

### 640px
- Nav links visible (`display: flex`)
- Container: `padding: 0 24px`
- Nav padding: `20px 0`
- Logo: 22px
- Pain grid: 2 columns, `gap: 24px`
- All major sections: `padding: 120px 0`
- Features: `padding: 120px 0`
- Footer: `padding: 64px 0 56px`
- Hero title: 50px
- Hero supporting text: 18px
- Section h2: 36px, section p: 17px
- Buttons: `padding: 16px 40px`, 16px font-size
- Testimonial: switches to row layout, quote 22px, avatar 88×88

### 768px
- Container: `max-width: 960px`, `padding: 0 24px`
- Hero title: 58px
- Section h2: 38px
- Pain grid: 3 columns, `gap: 28px`

### 1024px
- Container: `max-width: 960px`, `padding: 0 20px` (tighter padding at full width)
- Nav-cta: 16px, nav-link: 16px
- Hero title: 65px
- Hero: `padding: 160px 0 140px`
- All major sections: `padding: 160px 0`
- Features: `padding: 160px 0`
- Footer: `padding: 80px 0 72px`
- Hero supporting text: 24px
- Section h2: 42px, section p: 18px
- Pain number: 72px, pain label: 22px, pain desc: 18px
- Footer copyright: 15px

---

## JavaScript Functionality (script.js)

The entire file is wrapped in an IIFE — zero global scope pollution.

### Smooth scroll helper
```js
smoothScrollToElementWithOffset(element, offsetPx)
```
Calculates element's `absoluteTop` via `getBoundingClientRect() + scrollY` and calls `window.scrollTo({ behavior: 'smooth' })` with an offset to account for the sticky nav.

### Scroll targets wired up
| Trigger | Target | Offset |
|---|---|---|
| `#seeItInActionBtn` (See It In Action) | `#video-block` | 48px |
| `.btn-primary` (first match) | `#footer-area` | 32px |
| `.nav-cta-text` | `#footer-area` | 32px |
| `#navPreviewBtn` | `#video-block` | 48px |
| `#navFeaturesBtn` | `#features-block` | 48px |
| Hash `#video-block` on load | `#video-block` | 48px (100ms delay) |

**Note:** `.btn-primary` uses `document.querySelector` which selects only the first match. The features section CTA (second `.btn-primary`) is not connected and does not scroll — it relies on its `href="#footer-area"` attribute directly.

### Video facade
On click of `#videoFacade`: adds `.hidden` class to facade (opacity 0, pointer-events none), sets `#voomlyPlayer` to `display: block`. The Voomly iframe is hidden via inline `style="display: none"` until this fires.

### Testimonial carousel
- `createDots()` — dynamically creates `<button type="button" class="dot">` elements in `#testimonialDots`, one per `.testimonial-slide`
- `showSlide(index)` — toggles `.active` class on slides and dots
- `startAutoRotate()` / `stopAutoRotate()` — `setInterval` at 6000ms
- Dot click: stops auto-rotate, shows target slide, restarts auto-rotate
- `#testimonialContainer` mouseenter/mouseleave — pauses/resumes rotation
- `document` visibilitychange — pauses when tab hidden, resumes on visible

### Feature filter
- Click on any `.filter-btn`:
  1. Removes `.active` from all filter buttons, adds to clicked
  2. Sets `aria-pressed="false"` on all, `aria-pressed="true"` on clicked (via `event.target`)
  3. Inside `requestAnimationFrame`: iterates `.feat-card` elements, adds/removes `.hidden` based on `data-category` vs `data-filter`
  4. After filtering: queries `.feat-card:not(.hidden)` count and total, updates `aria-label` on `.features-grid` with `"Showing N of M features"`

### Scroll reveal (IntersectionObserver)
- Observes all `.reveal` elements with `threshold: 0.12` and `rootMargin: '0px 0px -40px 0px'`
- On intersection: adds `.is-visible` class, then unobserves the element
- CSS handles the animation: `opacity 0 → 1`, `translateY(20px) → 0`, `0.5s cubic-bezier(0.25, 0.1, 0.25, 1)`
- Delay classes: `.reveal-delay-1` (80ms), `.reveal-delay-2` (160ms), `.reveal-delay-3` (240ms)

---

## Design Aesthetic and Positioning

**Aesthetic:** Premium minimal SaaS landing page, 2025–2026 style. Dark sections alternate with light, creating visual rhythm. The indigo brand color (`#4f46e5`) is used sparingly — CTAs, stars, icons, quote marks. Inter at 800 weight for display headings gives a confident, editorial feel.

**Visual motifs:**
- Glassmorphism sticky nav (backdrop-filter blur)
- GPU-composited pulse-glow animation on primary CTA button via `::before` pseudo-element (opacity + transform only — no box-shadow repaint)
- Scroll reveal on all major elements (fade up)
- Alternating dark/light section rhythm: light → dark → light → dark → light → dark
- Rounded pill buttons (`border-radius: 40px`)
- Inline SVG icons in feature cards (all use `stroke="#818cf8"`, hardcoded — not tokenised)

**Copy voice:** Conversational, direct, first-person pain-led. Confrontational headline (`I spent $2,561 on ClickFunnels. Made $0 sales.`). No jargon. Short sentences.

**Accessibility:**
- All sections have `aria-labelledby` pointing to their heading id
- All buttons have `type="button"`
- Arrow spans have `aria-hidden="true"`
- Filter buttons have `aria-pressed` managed by JS
- Avatar placeholders have `role="img"` and `aria-label`
- Voomly iframe has `title` and `sandbox`
- `:focus-visible` styles on all interactive elements
- `prefers-reduced-motion` block disables all animations
- `cite` element wraps testimonial author + title

---

## Known Outstanding Issues

### Critical / Functional
1. **Stripe not connected.** All "Buy Now" buttons scroll to `#footer-area` which contains only a copyright line. The actual purchase flow does not exist yet.
2. **Video needs replacement.** The Voomly embed ID (`DU8OyhdE2nk-...`) is a placeholder. The demo video has not been recorded for the final product.
3. **Only first `.btn-primary` is wired by JS.** `document.querySelector('.btn-primary')` selects only the hero CTA. The features section CTA relies on its `href` attribute. This is not a bug but is inconsistent with the other scroll handlers.
4. **Font preload covers only regular weight.** Only `inter-v20-latin-regular.woff2` is preloaded. The 600 weight (used for buttons, nav CTA, eyebrow) and 700/800 (used for headings) are not preloaded, meaning they will cause FOUT on first load.

### Design System / CSS
5. **Type scale tokens defined but not applied.** `--text-xs` through `--text-7xl` exist in `:root` but all font-size values in the stylesheet still use raw `px` values. The tokens are not referenced anywhere.
6. **Spacing tokens defined but not applied.** `--space-1` through `--space-40` exist in `:root` but no `padding`, `margin`, or `gap` value in the stylesheet uses them. All spacing is still raw `px`.
7. **Line-height and letter-spacing tokens defined but not applied.** `--line-height-*` and `--letter-spacing-*` tokens exist but are not referenced in any rules.
8. **`--radius-card-sm` is defined but never used.** It is `14px`, same value as `--radius-card-dark`. One of these should be removed.
9. **`--color-text-muted-light` is defined but never used.** Added to `:root` but no rule references it. `--color-text-section` covers the same value (`#5b677b`). One should be removed.
10. **`--color-text-footer-logo` is effectively unused.** The footer logo is an `<img>` element with a CSS `filter: brightness(0) invert(1)` applied — the color token is set on `.footer-logo` text but the element renders only an image. The token is not visually active.
11. **SVG icon stroke color is hardcoded.** All 15 feature card SVGs have `stroke="#818cf8"` hardcoded as an HTML attribute. This should reference `--color-brand-light` but inline SVG attributes cannot use CSS custom properties directly. Wrapping in `currentColor` and setting `color` via CSS on `.feat-card svg` is the correct fix.
12. **`.testimonial-avatar` has `border: 2px solid #ffffff` hardcoded.** This is the one remaining hardcoded `#ffffff` — it was deliberately left because it is a decorative border (not text or icon color), but it should eventually use `var(--color-bg-primary)` for consistency.
13. **`1.5px` border-width on `.nav-cta-text` and `.ghost-link`** is a sub-pixel value not on the spacing scale.
14. **`hero-section` bottom padding is asymmetric** at desktop: `160px 0 140px`. The `140px` does not have a spacing token (`--space-35` exists for this value but is not used).
15. **`pain-label` has `margin-bottom: 14px`** — not on the 4px grid (should be 12px or 16px).
16. **`feat-card` padding is `24px 22px`** — the `22px` horizontal value is not on the 4px grid.
17. **`video-play-btn` is 72×72px** — no token for this size.
18. **`section-header` has `margin-bottom: 64px`** — this is `--space-16` but uses raw `px`.

### Content
19. **JSON-LD `aggregateRating.reviewCount: "3"`** matches the three testimonials, but these are placeholder testimonials. When real reviews exist this needs updating.
20. **`og:title` differs from `<title>`**: page title is `Nanotemplate - #1 ClickFunnels Alternative`, og:title is `Nanotemplate - HTML Landing Page Template`. These should be consistent.

---

## Hardcoded Values That Still Need Tokenising or Attention

| Location | Property | Value | Recommended token |
|---|---|---|---|
| All 15 feat-card SVGs (HTML) | `stroke` attribute | `#818cf8` | Cannot use CSS var in SVG attributes — use `currentColor` pattern |
| `.testimonial-avatar` | `border` | `2px solid #ffffff` | `var(--color-bg-primary)` |
| `.nav-cta-text` | `border` | `1.5px solid transparent` | No token for 1.5px border width |
| `.ghost-link` | `border` | `1.5px solid var(--color-border-light)` | No token for 1.5px border width |
| `.video-play-btn` | `width/height` | `72px` | No size token |
| `.video-play-btn::after` | `border-width` | `10px 0 10px 18px` | No token |
| `.section-header` | `margin-bottom` | `64px` | `var(--space-16)` |
| `.pain-label` | `margin-bottom` | `14px` | Off-grid — should be `var(--space-4)` (16px) |
| `.feat-card` | `padding` | `24px 22px` | `22px` is off-grid |
| `.hero-section` (1024px) | `padding` | `160px 0 140px` | `140px` is `--space-35`, unused |
| `.avatar-placeholder` | `font-size` | `24px` (base) | `var(--text-3xl)` |
| `.pain-number` | `font-size` | `48px` (base) | No matching token in scale |
| `.dot.active` | `width` | `24px` | No token |
| All font-size rules | `font-size` | raw px throughout | All `--text-*` tokens defined, none applied |
| All spacing rules | `padding/margin/gap` | raw px throughout | All `--space-*` tokens defined, none applied |

---

## Next Actions (priority order)

1. **Connect Stripe** — wire buy button href to Stripe payment link
2. **Record and replace video** — swap Voomly embed ID
3. **Preload 600 and 800 weight fonts** — add two more `<link rel="preload">` tags
4. **Fix SVG icon colors** — replace hardcoded `stroke="#818cf8"` with `currentColor` pattern and set `color: var(--color-brand-light)` on `.feat-card svg`
5. **Apply type scale tokens** — replace all raw `font-size: Npx` values with `var(--text-*)` references
6. **Apply spacing tokens** — replace raw padding/margin/gap values with `var(--space-*)` references
7. **Clean up duplicate tokens** — remove `--radius-card-sm` (same as `--radius-card-dark`) and `--color-text-muted-light` (same as `--color-text-section`, never used)
8. **Fix og:title / page title mismatch**
