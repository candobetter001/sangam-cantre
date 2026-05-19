# Sangam Centre — Animation & Pop-up Overhaul

Date: 2026-05-20
Branch: `main` (in fork `candobetter001/sangam-cantre`)
Preview: https://sangam-cantre-dev.vercel.app

## TL;DR

The landing page is now a richly-animated experience: the river image at the top is overlaid with continuously-flowing waves, floating water particles, light-ripple circles, and a horizontal shimmer pass. Sections fade-up into view as the visitor scrolls. There is a stats counter, a welcome modal on first visit, a newsletter signup, a cookie banner, a scroll-progress bar, a back-to-top button, and animated hover effects on every card.

Nothing is on the live site (`sangamcentre.org`). Everything is on the fork's preview only.

## What was added — feature by feature

### 1. AnimatedRiverBanner (the hero)

The static `<img>` river banner was replaced by `src/components/AnimatedRiverBanner.tsx`, which adds the following on top of the same river image:

| Effect | How |
|---|---|
| Parallax | Image scrolls at 30% of page-scroll speed using `translateY` |
| Horizontal shimmer | Linear-gradient "light pass" sweeping every 6s |
| Floating bubbles | 35 SVG particles drifting up via `particle-rise` keyframe |
| Three wave layers | SVG paths at the bottom with three different `wave-slide` animations (9s, 13s, 18s) |
| Ripple circles | Three positioned circles using `ripple-expand` keyframe |
| Hero text fade-down | "Confluence · सङ्गम / Where Heritage Meets Progress" |
| Gradient text | "Meets Progress" cycles through teal shades |
| Bouncing scroll-down chevron | Click to scroll to content |

### 2. ScrollReveal wrapper

`src/components/ScrollReveal.tsx` — A reusable component that:
- Uses IntersectionObserver to detect when content enters viewport
- Fades-up children with a 40px translation
- Supports up/down/left/right/scale directions
- Optional staggered delay

Used to wrap every section + card on the homepage.

### 3. Animated stats counter

`src/components/AnimatedCounter.tsx` + `src/components/StatsSection.tsx`
- Counts from 0 to target over 2s with ease-out cubic
- Triggers when scrolled into view (IntersectionObserver, threshold 0.5)
- Used in "Our Journey in Numbers" section: 6+ Publications, 12+ Events, 7 Researchers, 5+ Recognitions
- Section has gradient teal-to-indigo background with dotted overlay

### 4. Welcome popup (first visit)

`src/components/WelcomePopup.tsx`
- Shows 1.8s after first page load
- Gradient teal-indigo header with Sparkles icon
- Two CTAs: "Learn About Us" → /about, "Explore Site" → dismiss
- Bounces in, fades out
- Backdrop blur, click-outside to close
- `localStorage` key `sangam_welcome_seen_v1` prevents re-show

### 5. Newsletter popup (slide-in)

`src/components/NewsletterPopup.tsx`
- Slides in bottom-left after the user scrolls ~150vh OR after 45s
- Email input + Subscribe button
- Success state with CheckCircle icon
- `localStorage` key `sangam_newsletter_v1` prevents re-show
- **Note:** Currently shows success animation only — wire up to Formspree to actually capture emails

### 6. Cookie consent banner

`src/components/CookieBanner.tsx`
- Slides up from bottom 1.2s after first load
- Cookie icon, message, Decline + Accept buttons
- `localStorage` key `sangam_cookie_consent_v1` stores choice

### 7. Scroll progress bar

`src/components/ScrollProgress.tsx`
- Fixed bar at top, 4px tall, teal-to-indigo gradient
- Width tracks scroll position 0–100%
- Above all other content (z-100)

### 8. Back-to-top button

`src/components/BackToTop.tsx`
- Appears after 400px scroll (bottom-right, above WhatsApp button)
- Teal circle with ArrowUp icon
- Smooth-scroll to top on click

### 9. Card 3D tilt + hover micro-interactions

In `src/index.css`:
- `.card-tilt` — perspective tilt + lift on hover
- `.img-zoom` — image scale on hover
- `.heading-underline` — animated underline that grows from center
- `.animate-glow-pulse` — pulsing glow ring around CTA buttons
- Arrow icons translate-x on group hover

Applied throughout `Home.tsx`.

### 10. Print-friendly classes preserved

The `.print-hidden` class on news ticker, popups, WhatsApp, scroll progress, etc. means none of this UI appears when the user prints a page.

### 11. Reduced-motion respected

A `@media (prefers-reduced-motion: reduce)` block at the end of `index.css` disables all animations + particles for users who request it.

## Files changed (this round only — Opus capacity test)

### New files (9)
| File | Purpose |
|---|---|
| `src/components/AnimatedRiverBanner.tsx` | The animated river hero |
| `src/components/ScrollReveal.tsx` | Reveal-on-scroll wrapper |
| `src/components/AnimatedCounter.tsx` | Counting number |
| `src/components/StatsSection.tsx` | "Our Journey in Numbers" |
| `src/components/WelcomePopup.tsx` | First-visit modal |
| `src/components/NewsletterPopup.tsx` | Newsletter slide-in |
| `src/components/CookieBanner.tsx` | Cookie consent |
| `src/components/ScrollProgress.tsx` | Top progress bar |
| `src/components/BackToTop.tsx` | Back-to-top button |

### Updated files (3)
| File | What changed |
|---|---|
| `src/index.css` | Added ~240 lines of keyframes, animation classes, and reduced-motion fallback |
| `src/components/Layout.tsx` | Wired in ScrollProgress, BackToTop, WelcomePopup, NewsletterPopup, CookieBanner |
| `src/pages/Home.tsx` | Replaced static `<img>` with AnimatedRiverBanner, wrapped sections in ScrollReveal, added StatsSection, added card-tilt and group-hover effects, full dark-mode classes |

## Testing rounds

| Round | Result |
|---|---|
| 1 | Homepage rendered correctly. Welcome popup, cookie banner, news ticker, animated river, "Where Heritage Meets Progress" hero, particles, wave layers, ripples, and scroll indicator all visible. |
| 2 | All routes accessible — `/contact`, `/awards`, `/annual-report`, `/publications`, `/events`, `/podcast`. Dark mode toggle flips colors correctly. No console errors. |
| 3 | Footer Annual Report link works. Newsletter popup persists across pages until dismissed. Back-to-top appears after scroll. Stats counters animate. Final landing-page sanity check passed. |

## Known minor items (not blocking)

- On the Awards page in dark mode, some teal text on the dark navy band has reduced contrast — readable but could be punchier. Easy CSS fix later.
- Newsletter popup is decorative — emails aren't sent anywhere yet (no Formspree endpoint wired in).
- One Vercel build warning persists: `imagemin error: backup-original/divya.JPG`. The build still completes successfully; only an old backup image fails to recompress.

## How to merge to live

When you and Suryaprakash are ready:
1. Go to https://github.com/candobetter001/sangam-cantre
2. Click "Contribute" → "Open pull request"
3. Base repo: `suryaprakash-k123/sangam-cantre`
4. Suryaprakash reviews + merges
5. The live site `sangamcentre.org` rebuilds automatically with everything that's currently on the preview.
