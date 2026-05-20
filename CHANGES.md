# Sangam Centre — Site Overhaul

Date: 2026-05-20
Branch: `main` (fork at `candobetter001/sangam-cantre`)
Preview: https://sangam-cantre-dev.vercel.app

## What's New — 50+ functional features

### New Pages (15)

| URL | Purpose |
|---|---|
| `/team` | Full team page with researcher bios, photos, interests, contact links |
| `/faq` | 10-question accordion FAQ |
| `/press-kit` | Press kit with boilerplate, contacts, quick facts |
| `/privacy` | Privacy Policy (GDPR/DPDP-style) |
| `/terms` | Terms of Use |
| `/cookies` | Cookie Policy |
| `/code-of-conduct` | Community standards |
| `/accessibility` | Accessibility statement |
| `/diversity` | Diversity & Inclusion statement |
| `/open-data` | Open Data policy |
| `/sitemap` | Visual site map (all pages organised) |
| `/volunteer` | Volunteer signup (Formspree-ready) |
| `/speaker-request` | Invite Sangam researchers as speakers |
| `/collaborate` | Research collaboration intake |
| `/bookmarks` | View saved publications/events |
| `404` | Redesigned with popular-page suggestions |

### New Components (11)

| Component | Function |
|---|---|
| `SearchModal` | Cmd+K site-wide search across 25+ pages |
| `Breadcrumbs` | Auto-generated breadcrumbs on inner pages |
| `ShareButtons` | Twitter, LinkedIn, WhatsApp, Facebook, Email, Copy-link |
| `PrintButton` | One-click print using window.print() |
| `ReadingTime` | Word-count-based reading estimate |
| `SkipToContent` | A11y skip-to-main link on tab focus |
| `AccessibilityMenu` | Font size, high-contrast mode, dyslexic-readable font |
| `CitationModal` | BibTeX, APA, MLA, Chicago citation generator |
| `BookmarkButton` | Save items to localStorage |
| `EventCountdown` | Live ticker counting down to next event |
| `ImageLightbox` | Click-to-zoom gallery with keyboard nav |

### Infrastructure / SEO

- Schema.org **Organization** JSON-LD in `<head>`
- Schema.org **WebSite** JSON-LD with site-search action
- RSS feed at `/rss.xml` (auto-discoverable via `<link rel="alternate">`)
- Footer reorganised into 4 columns: Follow Us, Explore, Engage, Policies
- Footer search hint: "Press ⌘K to search"

### Accessibility

- `prefers-reduced-motion` respected
- Skip-to-content link
- Keyboard search (Cmd+K / `/`)
- ARIA labels on all interactive elements
- Font-size adjuster (75% → 150%)
- High-contrast mode (1.35x contrast filter)
- Dyslexic-readable font option
- `:focus-visible` 3px teal outline for keyboard navigation

### Forms

All forms use Formspree. Replace `YOUR_FORM_ID` in each component after Formspree signup:
- `/contact` — general inquiries (Subject dropdown)
- `/events` — register interest
- `/volunteer` — volunteer signup
- `/speaker-request` — speaker invitations
- `/collaborate` — research proposals

### Search

- Press `⌘K` (Mac) / `Ctrl+K` (Windows) or `/` to open
- 26 pages indexed with title, description, keywords
- Arrow keys to navigate, Enter to select, Esc to close

### Site Map

- Visual at `/sitemap` (human-readable)
- XML at `/sitemap.xml` (for search engines)
- RSS at `/rss.xml` (for feed readers)

## Earlier work also live

From the previous animation round:
- Animated river hero with floating particles, wave layers, ripples
- Scroll-triggered fade-up reveals
- "Our Journey in Numbers" stats counters
- Welcome popup, newsletter slide-in, cookie banner
- Dark mode toggle
- Scroll progress bar, back-to-top button
- News ticker

## Pending user actions

After Formspree signup at formspree.io:
- Replace `YOUR_FORM_ID` in `Contact.tsx`, `Events.tsx`, `Volunteer.tsx`, `SpeakerRequest.tsx`, `Collaborate.tsx`
- Replace `G-XXXXXXXXXX` in `index.html` with real GA4 ID
- Replace `919800000000` in `Layout.tsx` with real WhatsApp number
- Upload real PDFs for Annual Reports

## How to ship to live

When you and Suryaprakash agree, open a PR from `candobetter001/sangam-cantre` → `suryaprakash-k123/sangam-cantre`. Suryaprakash merges and sangamcentre.org rebuilds with everything.

<!-- redeploy trigger 1779258389 -->
