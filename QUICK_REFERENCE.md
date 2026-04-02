# Quick Reference - Animations, Blog & Certificates

## 🎬 What Changed Today

### Before
- Static HTML pages
- No blog system
- No animations
- Hardcoded content

### After
- Fully animated pages
- Dynamic blog with detail pages
- 6 ready-to-read articles
- JSON-based certificates
- Production-ready

---

## 📋 File Locations

### Data Files (Easy to Edit)
```
/public/data/blog.json          - Blog articles & content
/public/data/certificates.json  - All certificates
/public/data/home.json          - Homepage content
/public/data/products.json      - Products content
```

### Code Files (New)
```
/src/app/blog/page.jsx                   - Blog listing (updated)
/src/app/blog/[slug]/page.jsx            - Blog detail pages (NEW)
/src/components/AnimatedSection.jsx      - Animation wrapper (NEW)
```

### Documentation
```
QUICK_START.md                   - Start here (5 min read)
UPDATES_GUIDE.md                 - Feature documentation
FEATURE_COMPLETION_SUMMARY.md    - What was built
VISUAL_GUIDE.md                  - Design reference
QUICK_REFERENCE.md               - This file!
```

---

## ⚡ Quick Tasks

### Read Blog Articles
```
Navigate to: /blog
Click any article to see full content
```

### Add New Blog Article
```
1. Edit: /public/data/blog.json
2. Add to "articles" array
3. Refresh browser - it's live!
```

### Update Certificates
```
1. Edit: /public/data/certificates.json
2. Change any certificate details
3. Refresh browser - it's live!
```

### View Animations
```
Visit any page and scroll
- Products: /products
- Blog: /blog
- Certificates: /certifications
```

---

## 🔗 Blog Article Links

**6 Ready-to-Read Articles:**

1. `/blog/navigating-global-food-export-regulations-2024`
   - Tag: EXPORT | 6 min read

2. `/blog/science-of-nutrient-retention-solar-drying`
   - Tag: HEALTH | 5 min read

3. `/blog/iot-cold-chain-dry-logistics`
   - Tag: TECHNOLOGY | 7 min read

4. `/blog/reducing-post-harvest-loss-smallholder-farmers`
   - Tag: IMPACT | 4 min read

5. `/blog/india-dehydrated-food-export-trends-2025`
   - Tag: EXPORT | 5 min read

6. `/blog/choosing-right-bulk-dehydrated-supplier`
   - Tag: HEALTH | 6 min read

---

## 🎨 Animation Examples

### Fade-in on Scroll
```jsx
<AnimatedSection>
  <section>Content fades in when scrolled into view</section>
</AnimatedSection>
```

### Slide-in Effect
```jsx
<AnimatedSection variant="slideIn">
  <section>Slides in from left side</section>
</AnimatedSection>
```

### Delayed Animation
```jsx
<AnimatedSection delay={0.3}>
  <section>Waits 0.3s before animating</section>
</AnimatedSection>
```

---

## 📊 JSON Structure Examples

### Blog Article Structure
```json
{
  "id": 1,
  "slug": "unique-url-slug",
  "tag": "EXPORT",
  "title": "Article Title",
  "author": "John Doe",
  "content": "<h2>HTML formatted content</h2>",
  "relatedArticles": [2, 3, 4]
}
```

### Certificate Structure
```json
{
  "id": 1,
  "title": "FSSAI License",
  "status": "Active",
  "number": "FLI/2020/123456",
  "validUntil": "Dec 31, 2025"
}
```

---

## 🚀 Common Operations

### Change Article Order
Edit `/public/data/blog.json` - change position in array

### Hide an Article
In blog.json, change `id: 1` to `id: 99` (won't match slug)

### Add Related Articles
In article JSON, update `relatedArticles: [2, 5, 6]`

### Change Animation Speed
Edit `/src/components/AnimatedSection.jsx`:
```jsx
transition={{ duration: 1.2 }} // increase for slower
```

### Update Tag Colors
In `/src/app/blog/page.jsx`:
```javascript
const tagColors = {
  EXPORT: 'bg-blue-100 text-blue-600',
  MYNEWCATEGORY: 'bg-pink-100 text-pink-600'
}
```

---

## ✅ Checklist for Updates

- [ ] JSON syntax is valid (test in jsonlint.com)
- [ ] All required fields are filled
- [ ] Image paths are correct
- [ ] Article slugs are unique
- [ ] Related articles IDs exist
- [ ] HTML content is properly formatted
- [ ] Test on mobile view
- [ ] Check animations are smooth

---

## 🎯 Page-by-Page Animations

| Page | Animation | Type |
|------|-----------|------|
| Homepage | All sections | Scroll-triggered |
| Blog | Cards + featured | Staggered |
| Blog Detail | Content + sidebar | Progressive |
| Products | Filters + grid | Cascade |
| Certifications | Cards | Staggered |

---

## 📱 Mobile Testing

All pages are mobile-responsive:
- Animations work on touch devices
- Touch targets are 44px+
- Text is readable at all sizes
- Images scale properly

**Test on:**
- iPhone/iPad
- Android phones
- Small tablets
- Landscape mode

---

## 🐛 If Something Breaks

### Blog not showing
✓ Check JSON syntax
✓ Verify slugs in JSON match URLs
✓ Clear browser cache
✓ Refresh dev server

### Animations not working
✓ Check Framer Motion installed
✓ Clear node_modules, reinstall
✓ Check browser console for errors

### Images not loading
✓ Verify image paths
✓ Check file exists in /public/images/
✓ Check image format (.jpg, .png)

---

## 📞 Quick Support

**Most Common Issues:**

1. **JSON won't save**
   - Check for syntax errors (missing commas, brackets)
   - Use online JSON validator

2. **Blog article not appearing**
   - Verify "slug" is unique
   - Check all required fields exist
   - Refresh page (Ctrl+F5)

3. **Animations lag**
   - Close other browser tabs
   - Clear browser cache
   - Check GPU acceleration enabled

---

## 🔄 Update Workflow

```
1. Edit JSON file in /public/data/
2. Save file
3. Refresh browser (Ctrl+F5)
4. Changes appear immediately!
```

No rebuild needed. No deployment required.
Just edit → Save → Refresh!

---

## 💡 Pro Tips

1. **Keep slugs short & meaningful**
   - Good: `export-regulations-2024`
   - Bad: `article123`

2. **Use descriptive article tags**
   - EXPORT, HEALTH, TECHNOLOGY, IMPACT

3. **Write good excerpts**
   - Shown in listings, should intrigue

4. **Add multiple related articles**
   - Helps keep readers engaged

5. **Keep content up-to-date**
   - Check dates regularly

---

## 📈 Analytics Ready

All pages support analytics tracking:
- Page views (/blog, /blog/slug)
- Click tracking (article links)
- Scroll depth (animations)
- Time on page (article detail)

---

## 🎓 Learning Resources

- Framer Motion: https://www.framer.com/motion/
- React: https://react.dev
- Next.js: https://nextjs.org
- Tailwind CSS: https://tailwindcss.com

---

## 🎉 You're All Set!

Everything is ready to go:
- ✅ Animations working
- ✅ Blog system live
- ✅ Certificates updated
- ✅ Documentation complete
- ✅ Production ready

Start by updating your first blog article!

---

**Quick Links:**
- Homepage: `/`
- Blog: `/blog`
- Products: `/products`
- Certifications: `/certifications`
- Contact: `/contact`

**Data Files:**
- `/public/data/blog.json` - Edit blog content
- `/public/data/certificates.json` - Edit certificates
- `/public/data/home.json` - Edit homepage
- `/public/data/products.json` - Edit products

**Happy blogging! 📝✨**
