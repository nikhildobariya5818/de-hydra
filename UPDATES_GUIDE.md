# Website Updates Guide - Animations, Blog & Certificates

## 🎉 What's New

This update adds comprehensive animations across all pages, a fully dynamic blog system with individual article pages, and a certificates JSON system.

---

## 📊 **New Features**

### 1. **Animations on All Pages**
- ✅ Scroll-triggered fade-in animations
- ✅ Staggered card animations
- ✅ Smooth hover effects
- ✅ Page transition animations
- ✅ Counter animations (loading states)
- ✅ 60fps GPU-accelerated performance

**Animated Pages:**
- Homepage (all sections)
- Products Page
- Blog Page
- Certifications Page
- Blog Detail Pages

### 2. **Dynamic Blog System**

#### Blog Listing Page (`/blog`)
- ✅ Dynamic content from JSON
- ✅ Featured article showcase
- ✅ Article grid with animations
- ✅ Popular articles sidebar
- ✅ Newsletter signup
- ✅ Search-ready interface

#### Blog Detail Pages (`/blog/[slug]`)
- ✅ Full article content rendering
- ✅ Author information
- ✅ Table of contents
- ✅ Related articles section
- ✅ Share buttons
- ✅ Scroll-triggered animations
- ✅ Call-to-action sections
- ✅ Newsletter signup widget

### 3. **Certificates JSON System**

**Data Structure:**
```
/public/data/certificates.json
├── productCerts (6 items)
├── exportCerts (6 items)
└── downloadCerts (6 items)
```

**Features:**
- Product certifications (FSSAI, ISO, HACCP, GMP, Organic, etc.)
- Export certifications (COO, Phytosanitary, Health, etc.)
- Downloadable certificate documentation
- Status tracking (Active, Per Shipment, Permanent)
- Easy to update and manage

---

## 📝 **How to Update Content**

### Add a New Blog Article

1. Open `/public/data/blog.json`
2. Add to the `articles` array:

```json
{
  "id": 7,
  "slug": "your-article-slug",
  "tag": "EXPORT",
  "date": "Apr 2, 2025",
  "readTime": "6 min",
  "title": "Your Article Title",
  "excerpt": "Brief description for listing page",
  "img": "/images/blog/blog-10.jpg",
  "author": "Author Name",
  "authorRole": "Author Role",
  "content": "<h2>Article content in HTML...</h2>",
  "relatedArticles": [1, 2],
  "keywords": ["keyword1", "keyword2"]
}
```

3. Save the file
4. Refresh your browser - article is live!

### Update Blog Popular Articles

Edit the `popular` array in `/public/data/blog.json`:

```json
"popular": [
  {
    "title": "Article Title",
    "reads": "2.4k reads",
    "img": "/images/blog/blog-image.jpg"
  }
]
```

### Update Certificates

Edit `/public/data/certificates.json`:

```json
{
  "id": 1,
  "icon": "✅",
  "title": "Certificate Name",
  "fullName": "Full Name",
  "status": "Active",
  "number": "CERT123456",
  "validUntil": "Dec 31, 2025",
  "description": "Description here",
  "tags": ["Tag1", "Tag2"]
}
```

---

## 🎨 **Animation Components**

### AnimatedSection Component
Wraps sections with scroll-triggered animations.

```jsx
<AnimatedSection delay={0.2} variant="slideInUp">
  <section>Content here</section>
</AnimatedSection>
```

**Variants:**
- `fadeInUp` - Fade in with upward movement
- `slideIn` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleIn` - Scale and fade

### Manual Motion Animations
Use Framer Motion directly:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

---

## 📱 **Responsive Design**

All new features are fully responsive:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

Blog detail pages stack properly on mobile with readable typography.

---

## 🔗 **Blog URLs**

Access blog articles directly:
```
/blog - Blog listing
/blog/navigating-global-food-export-regulations-2024 - Article detail
/blog/science-of-nutrient-retention-solar-drying - Article detail
/blog/iot-cold-chain-dry-logistics - Article detail
/blog/reducing-post-harvest-loss-smallholder-farmers - Article detail
/blog/india-dehydrated-food-export-trends-2025 - Article detail
/blog/choosing-right-bulk-dehydrated-supplier - Article detail
```

---

## 🎯 **Performance Notes**

- Animations use GPU acceleration (60fps)
- Scroll-triggered animations only animate when visible
- Intersection Observer for optimal performance
- Lazy loading on images
- Minimal bundle size impact

---

## 🛠️ **Customization**

### Change Animation Timing
Edit `/src/components/AnimatedSection.jsx`:

```jsx
transition={{ duration: 1.2, delay }} // Increase duration
```

### Modify Tag Colors
In blog pages, update `tagColors`:

```javascript
const tagColors = {
  EXPORT: 'bg-blue-100 text-blue-600',
  HEALTH: 'bg-green-100 text-green-600',
  NEWCATEGORY: 'bg-pink-100 text-pink-600',
}
```

### Customize Blog Detail Layout
Edit `/src/app/blog/[slug]/page.jsx` for:
- Sidebar position
- Content width
- Section order
- Related articles count

---

## 📦 **Dependencies Added**

```json
"react-intersection-observer": "^9.5.2"
```

This allows scroll-triggered animations without complex calculations.

---

## 🚀 **Deployment Notes**

1. All JSON files are in `/public/data/`
2. Images should be in `/public/images/` directory
3. No database changes needed
4. Full backward compatibility maintained
5. Ready for production deployment

---

## 💡 **Tips**

1. **HTML Content in Blog:** Use proper HTML tags in the `content` field:
   ```html
   <h2>Heading</h2>
   <p>Paragraph</p>
   <ul><li>List item</li></ul>
   ```

2. **Image Optimization:** Compress images before uploading:
   - Blog images: ~800x600px
   - Certificates: ~400x300px

3. **SEO:** Add relevant keywords to each article for better search ranking

4. **Testing:** Always test new articles on mobile before deploying

---

## ❓ **Troubleshooting**

### Blog Articles Not Showing
- Check `/public/data/blog.json` syntax
- Ensure all required fields are filled
- Check image paths are correct

### Animations Not Working
- Ensure Framer Motion is installed: `npm list framer-motion`
- Check browser console for errors
- Clear cache and refresh

### Certificate Links Not Working
- Verify certificate file paths in JSON
- Ensure files are in `/public/data/`

---

## 📞 **Support**

For issues or questions:
1. Check the JSON syntax in the data files
2. Verify image paths exist
3. Clear browser cache
4. Restart dev server: `npm run dev`

---

**Version:** 2.0.0
**Last Updated:** April 2, 2025
**Status:** Production Ready ✅
