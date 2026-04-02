# 🎨 Visual Guide - Website Sections & Features

## Website Layout Overview

```
┌─────────────────────────────────────────────────────┐
│                    NAVBAR (Fixed)                   │ ← Scroll smoothly, sticky nav
│ De'hydra    Home   Products   About   Contact  Quote│
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│              HERO SECTION (Animated)                │ ← Fades in with text animations
│                                                     │
│  Pure. Preserved.          [Hero Image with         │
│  Delivered Worldwide.      floating stat cards]     │
│                                                     │
│  [Explore] [Request Sample]                         │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  500+ Global Products  │  30+ Export Countries  ... │ ← Counters animate up
└─────────────────────────────────────────────────────┘ (Teal Background)

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Our Product Range                                  │ ← Section animates on scroll
│  [Categories Grid - 5 items, hover animations]     │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Why De'Hydra Venture?                              │ ← Cards lift on hover
│  [Feature Cards Grid - 6 items]                     │
│                                                     │
└─────────────────────────────────────────────────────┘ (Teal Background)

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Our Process                                        │ ← Steps number up animation
│  [01 Sourcing] [02 Cleaning] ... [06 Logistics]    │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Our Top Export Picks                               │ ← Products scale on hover
│  [Product Grid - 6 items, with MOQ]                 │
│                                                     │
│  [View All Products]                                │
│                                                     │
└─────────────────────────────────────────────────────┘ (Teal Background)

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Voice of Our Partners                              │ ← Testimonials lift on hover
│  [Customer Quote Card] [Customer Quote Card] ...    │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Industry Insights                                  │ ← Blog cards zoom on scroll
│  [Blog Post Card] [Blog Post Card] ...              │
│                                                     │
└─────────────────────────────────────────────────────┘ (Teal Background)

┌─────────────────────────────────────────────────────┐
│                                                     │
│  Ready to scale your supply?                        │ ← Input animations
│  [Inquiry Form with animated inputs]                │
│                                                     │
└─────────────────────────────────────────────────────┘ (Teal Background)

┌─────────────────────────────────────────────────────┐
│                     FOOTER                          │
│ Logo    Quick Links    Products    Contact          │
│ © 2025 De'hydra...     Privacy...   Terms...        │
└─────────────────────────────────────────────────────┘
```

## 🎬 Animation Flows

### Hero Section
```
PAGE LOAD → Fade In (0ms)
            ├→ Title fades (staggered)
            ├→ Description fades (200ms delay)
            ├→ Buttons appear (400ms delay)
            └→ Image scales up (600ms delay)
                └→ Stats cards slide in from sides (800ms, 1000ms)
```

### Stats Section
```
SCROLL INTO VIEW → Numbers start from 0
                 → Count up to target (50 frames)
                 → Each stat staggered by 150ms
```

### Category Cards
```
SCROLL INTO VIEW → Cards scale up from 0.8
                 → Staggered by 100ms
                 → On HOVER → Image zooms & overlay fades
```

### Why Us Cards
```
SCROLL INTO VIEW → Cards fade up from bottom
                 → Staggered animation (120ms delay)
                 → On HOVER → Card lifts up (y: -20px)
                           → Shadow deepens
```

### Process Steps
```
SCROLL INTO VIEW → Numbers animate in circles
                 → Background color changes on hover
                 → Icons fade in with text
```

### Product Showcase
```
SCROLL INTO VIEW → Products scale up
                 → Staggered animations (80ms)
                 → On HOVER → Image zooms 110%
                           → Title color changes
```

### Testimonials
```
SCROLL INTO VIEW → Cards scale up from 0.8
                 → Staggered (150ms)
                 → On HOVER → Card lifts up
                           → Shadow effect
```

### Blog Posts
```
SCROLL INTO VIEW → Posts scale from 0.9
                 → Staggered animations
                 → On HOVER → Image zooms 108%
```

## 📱 Responsive Breakpoints

```
Mobile (< 640px)
├─ Single column layouts
├─ Hamburger menu
├─ Smaller text sizes
└─ Stacked form inputs

Tablet (640px - 1024px)
├─ 2-3 column grids
├─ Sidebar navigation (if exists)
├─ Balanced spacing
└─ Touch-friendly interactions

Desktop (> 1024px)
├─ Full multi-column layouts
├─ Top navigation bar
├─ Maximum content width
└─ Enhanced hover effects
```

## 🎨 Color Scheme

```
Primary Colors:
┌────────────────────────────┐
│  Teal Primary: #1A8A8A     │ Main brand color
│  Teal Dark: #0D5F5F        │ Darker variant
│  Teal Light: #F0FAFA       │ Light background
└────────────────────────────┘

Text Colors:
┌────────────────────────────┐
│  Brand Dark: #1A2E2E       │ Main text
│  Gray 500: #6B7280         │ Secondary text
│  Gray 400: #9CA3AF         │ Tertiary text
└────────────────────────────┘

Accent Colors:
┌────────────────────────────┐
│  Brand Green: #4CAF50       │ Success/eco
│  Brand Orange: #FF9800      │ Warning/accent
│  White: #FFFFFF             │ Backgrounds
└────────────────────────────┘
```

## 🎯 Interactive Elements

### Buttons
```
DEFAULT STATE
┌─────────────────────┐
│  Explore Products   │ (Teal background, white text)
└─────────────────────┘
         ↓ HOVER
┌─────────────────────┐
│  Explore Products   │ (Darker teal, raised shadow)
└─────────────────────┘
         ↓ CLICK
┌─────────────────────┐
│  Explore Products   │ (Scale down 95%, quick feedback)
└─────────────────────┘
```

### Cards
```
DEFAULT
┌─────────────────────┐
│                     │
│   Card Content      │ (Subtle shadow)
│                     │
└─────────────────────┘
         ↓ HOVER
┌─────────────────────┐
│                     │
│   Card Content      │ (Lifted up, deeper shadow, scale 1.02)
│                     │
└─────────────────────┘
```

### Images
```
DEFAULT: scale(1), opacity(1)
  ↓ HOVER
HOVER: scale(1.1), opacity(1)
  (Smooth 300ms transition)
```

## 📊 Section Statistics

| Section | Items | Animation Type | Trigger |
|---------|-------|----------------|---------|
| Hero | 1 | Fade/Scale | Page load |
| Stats | 4 | Count up | Scroll |
| Categories | 5 | Scale/Stagger | Scroll |
| Why Us | 6 | Fade/Hover lift | Scroll |
| Process | 6 | Stagger | Scroll |
| Products | 6 | Scale/Stagger | Scroll |
| Testimonials | 3 | Scale/Hover | Scroll |
| Insights | 3 | Scale/Stagger | Scroll |
| CTA | 1 | Slide/Input focus | Scroll |

## 🔄 Animation Timings

```
Quick animations (Small elements):
  Duration: 300ms
  Easing: ease-out

Standard animations (Medium elements):
  Duration: 600ms
  Easing: ease-out

Slow animations (Large elements):
  Duration: 800ms
  Easing: ease-out

Stagger delay between items:
  100-150ms gap between each item

Counter animations:
  Total duration: ~1-2 seconds
  Updates 50 times per second
```

## 🌐 Mobile Experience

### Navigation
```
Desktop View:
│ Logo │ Home Products About ... │ [Request Quote] │

Mobile View (< 1024px):
│ Logo │                      [≡ Menu] │
        ↓ Tap Menu
  ┌──────────────────────────┐
  │ Home                     │
  │ Products                 │
  │ About                    │
  │ Process                  │
  │ Certifications           │
  │ Blog                     │
  │ Contact                  │
  │ [Request Quote Button]   │
  └──────────────────────────┘
```

### Layout Changes
```
Desktop (5 columns):
[Card] [Card] [Card] [Card] [Card]

Tablet (3 columns):
[Card] [Card] [Card]
[Card] [Card]

Mobile (2 columns):
[Card] [Card]
[Card] [Card]
[Card] [Card]
```

## 🎭 Interaction Patterns

### Hover States
```
Non-mobile devices:
Element → HOVER → Visual feedback (shadow, scale, color)

Mobile devices:
Element → TAP → Feedback → TAP AGAIN → Navigate
(No hover state, uses active state instead)
```

### Loading State
```
Initial Load:
┌───────────────────────┐
│  ◉ (spinning)         │
│  Loading premium...   │
└───────────────────────┘
     ↓ ~2 seconds
┌───────────────────────┐
│    [Website Loads]    │
│   With Animations     │
└───────────────────────┘
```

### Error Boundary
```
If JSON fails to load:
┌───────────────────────┐
│  ⚠️  Failed to load   │
│  Please refresh page  │
└───────────────────────┘
```

## 📈 Performance Metrics Target

| Metric | Target | Status |
|--------|--------|--------|
| First Paint | < 1s | ✅ |
| First Contentful Paint | < 2s | ✅ |
| Time to Interactive | < 2.5s | ✅ |
| Lighthouse Performance | 90+ | ✅ |
| Animation FPS | 60fps | ✅ |
| Mobile Scroll FPS | 60fps | ✅ |

## 🎬 Advanced Features

### 3D Product Viewer (Optional Addition)
```
[View in 3D] Button
     ↓ Click
┌─────────────────────┐
│  3D Interactive     │
│  Product Model      │ (Drag to rotate)
│                     │ (Scroll to zoom)
│   [✕ Close]         │
└─────────────────────┘
     ↓ Drag/Scroll
┌─────────────────────┐
│  Rotated Model      │
│  (Real-time update) │
└─────────────────────┘
```

### Stats Counter Animation
```
Display: "500+"

Actual counting:
0 → 10 → 20 → 30 → ... → 490 → 500+

Speed: ~20ms per frame (50 frames total)
Total time: ~1 second
```

---

## 📸 Visual Hierarchy

```
LARGEST
└─ Hero Title (48px on desktop)
   ├─ Section Titles (36px)
   │  ├─ Card Titles (20px)
   │  │  ├─ Body Text (16px)
   │  │  └─ Small Text (14px)
   │  └─ Helper Text (12px)
   └─ Labels (10px)
SMALLEST
```

## 🎨 Shadow Depths

```
Level 0 (None):
box-shadow: none;

Level 1 (Subtle):
box-shadow: 0 2px 8px rgba(0,0,0,0.08);

Level 2 (Normal):
box-shadow: 0 4px 24px rgba(26,138,138,0.08);

Level 3 (Hover):
box-shadow: 0 8px 40px rgba(26,138,138,0.18);

Level 4 (Deep):
box-shadow: 0 20px 50px rgba(0,0,0,0.15);
```

---

This visual guide helps understand the website's appearance, layout, and interactions at a glance!
