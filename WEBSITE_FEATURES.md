# De'Hydra Website - Dynamic Features & Animations

## 🎯 Website Overview

Your website is now **fully dynamic and data-driven**! Here's what's included:

## ✨ Key Features

### 1. **Fully JSON-Driven Content**
- All homepage content loads from `/public/data/home.json`
- All products load from `/public/data/products.json`
- Change JSON → Website updates instantly (no code needed!)
- See `JSON_DATA_GUIDE.md` for detailed instructions

### 2. **Smooth Scroll Animations**
- **Hero Section** - Fade in with staggered animations on load
- **Stats Counter** - Numbers count up from 0 as section comes into view
- **Category Cards** - Slide and scale animations on scroll
- **Why Us Cards** - Lift up on hover with shadow effects
- **Process Steps** - Numbered steps animate in sequence
- **Product Showcase** - Products fade in with scale animations
- **Testimonials** - Customer quotes appear with flip effects
- **Blog/Insights** - Articles zoom in on scroll
- All powered by **Framer Motion** for smooth 60fps animations

### 3. **Interactive Hover Effects**
- Cards lift up on hover
- Images zoom smoothly when hovering
- Buttons have press effects on mobile
- Text color transitions on hover
- Shadow depth increases for depth perception

### 4. **Responsive Design**
- **Mobile First** - Optimized for phones first
- **Tablet Friendly** - Perfect grid layouts for tablets
- **Desktop Enhanced** - Full-featured experience on large screens
- **Touch Optimized** - All buttons and links are touch-friendly
- **Hamburger Menu** - Mobile navigation toggles smoothly

### 5. **3D Product Viewer** (Ready to Use)
- Interactive 3D product visualization
- Drag to rotate, scroll to zoom
- Can be added to product detail pages
- Uses React Three Fiber for smooth 3D rendering

### 6. **Performance Optimized**
- Images lazy-loaded for faster page loads
- CSS animations use GPU acceleration
- Optimized bundle size
- Smooth 60fps animations on all devices

## 📱 Mobile Experience

The website is fully optimized for mobile:
- Navigation collapses into a hamburger menu
- Sections stack vertically
- Touch-friendly button sizes (at least 44px)
- Images scale responsively
- All animations work smoothly on mobile

## 🎨 Customization Options

### Change Colors
Edit `/src/app/globals.css` to modify the color scheme:
```css
--teal-primary: #1A8A8A;  /* Primary color */
--teal-dark: #0D5F5F;     /* Dark variant */
--brand-dark: #1A2E2E;    /* Text color */
```

### Modify Animations
Each component uses Framer Motion with customizable:
- Duration (how long animation takes)
- Delay (when animation starts)
- Stagger (spacing between items)
- Easing (animation curve)

### Adjust Typography
Font is Poppins from Google Fonts with weights 300-800:
- Update in `/src/app/layout.js`
- Adjust sizes in Tailwind classes

## 🚀 Component Structure

### Main Components
```
/src/components/sections/
├── HeroSection.jsx          - Hero banner with CTA
├── StatsSection.jsx         - Animated stat counters
├── CategoriesSection.jsx    - Product categories grid
├── WhyUsSection.jsx         - Features/benefits
├── ProcessSection.jsx       - Process workflow
├── ProductsShowcase.jsx     - Featured products
├── TestimonialsSection.jsx  - Customer reviews
├── InsightsSection.jsx      - Blog posts
└── CTASection.jsx           - Call to action

/src/components/3D/
└── ProductViewer3D.jsx      - Interactive 3D viewer
```

### Data Loading
All components use the custom hook:
```javascript
const { data, loading, error } = useJsonData('/data/home.json')
```

## 📊 Animation Types Used

1. **Fade In** - Elements fade from transparent to visible
2. **Slide In** - Elements slide in from sides
3. **Scale** - Elements grow from small to full size
4. **Stagger** - Multiple items animate in sequence
5. **Hover** - Interactive effects on mouseover
6. **Scroll Trigger** - Animations trigger on scroll

## 🔧 Technical Stack

- **Next.js 14** - React framework with SSR
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics
- **Three.js** - 3D rendering engine

## 📈 SEO Features

- Metadata configured in `layout.js`
- Mobile viewport settings
- Semantic HTML structure
- Image optimization with Next.js Image component
- Fast page load performance

## 🎬 Adding More Animations

To add animations to existing sections:

1. Import Framer Motion
2. Wrap elements with `motion.div` or `motion.button`
3. Add `initial`, `animate`, and `whileInView` props
4. Set `viewport={{ once: true }}` for scroll-triggered animations

Example:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Animated content
</motion.div>
```

## 🎥 Video/Media Support

To add videos:
- Store in `/public/videos/`
- Use HTML5 `<video>` tag
- Reference as `/videos/filename.mp4`

## 📧 Email Integration

Contact form submissions would need a backend API. Currently configured to accept form data ready for integration with:
- SendGrid
- Mailgun
- Custom Node.js backend
- Serverless functions

## 🌍 Multi-language Support

Currently single language (English). To add multiple languages:
1. Create separate JSON files for each language
2. Add language switcher component
3. Store language preference in URL or localStorage

## ♿ Accessibility

- Semantic HTML elements (`<main>`, `<section>`, `<header>`)
- ARIA labels on buttons and links
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Screen reader friendly

## 📦 Deployment

Ready to deploy to:
- **Vercel** (Recommended - built by Vercel)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** (Node.js required)

Deploy to Vercel:
```bash
git push origin main
# Vercel auto-deploys on push
```

## 🐛 Troubleshooting

**Animations not showing?**
- Check if Framer Motion is installed
- Verify `viewport={{ once: true }}` is set
- Open DevTools to check for console errors

**Images not loading?**
- Ensure images are in `/public/images/`
- Use correct path starting with `/`
- Check image format (PNG, JPG, WebP)

**JSON data not updating?**
- Refresh the page after changes
- Clear browser cache (Ctrl+Shift+Delete)
- Check JSON syntax with a validator

**Mobile menu not working?**
- Check that `useState` is imported
- Verify `setOpen` state management
- Ensure click handlers are attached

## 📞 Support Resources

- Next.js Docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs
- Three.js: https://threejs.org/docs/
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber/

---

**Last Updated:** April 2025
**Version:** 2.0 (Dynamic with Animations)
