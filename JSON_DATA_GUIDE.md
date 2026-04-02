# Dynamic Website JSON Data Guide

This website is fully **data-driven** using JSON files. Simply modify the JSON files in `/public/data/` to update the entire website without touching any code!

## 📁 JSON Files Location

All data files are stored in: `/public/data/`

- `home.json` - Homepage sections (hero, stats, categories, testimonials, etc.)
- `products.json` - All product data and product metadata

## 🔄 How It Works

1. **No Database Required** - All data is stored in simple JSON files
2. **Real-time Updates** - Changes to JSON files automatically reflect on the website
3. **Client-side Loading** - JSON files are fetched when the page loads
4. **Easy to Manage** - Just edit the JSON and refresh the page

## 📝 Home Page Data Structure (`home.json`)

### Hero Section
Update the hero banner with your own text, images, and CTAs:

```json
{
  "hero": {
    "badge": "Your custom badge text",
    "title": "Main heading",
    "titleHighlight": "Highlighted portion",
    "description": "Hero description text",
    "ctaButtons": [
      {
        "text": "Button text",
        "href": "/page-link",
        "variant": "primary" // or "outline"
      }
    ],
    "image": "/images/your-image.png",
    "statsCard1": {
      "number": "500+",
      "label": "Label"
    }
  }
}
```

### Stats Section
Add or modify statistics:

```json
{
  "stats": [
    {
      "number": "500+",
      "label": "Global Products"
    }
  ]
}
```

### Categories Section
Update product categories with images and counts:

```json
{
  "categories": [
    {
      "name": "Vegetables",
      "icon": "/images/category-icon.png",
      "count": "24 Products"
    }
  ]
}
```

### Why Us Features
Modify your key advantages:

```json
{
  "whyUs": [
    {
      "icon": "🌿",
      "title": "Feature Title",
      "description": "Feature description text"
    }
  ]
}
```

### Process Steps
Update your process workflow:

```json
{
  "process": [
    {
      "num": "01",
      "icon": "🌾",
      "title": "Step Title",
      "description": "Step description"
    }
  ]
}
```

### Testimonials
Add customer testimonials:

```json
{
  "testimonials": [
    {
      "text": "Customer quote",
      "name": "Customer Name",
      "role": "Position, Company",
      "stars": 5
    }
  ]
}
```

### Blog/Insights
Add blog posts or insights:

```json
{
  "insights": [
    {
      "tag": "CATEGORY",
      "title": "Article Title",
      "date": "Mar 2025",
      "image": "/images/blog-image.jpg"
    }
  ]
}
```

### CTA Section
Update the call-to-action banner:

```json
{
  "cta": {
    "title": "Ready to scale?",
    "description": "Your CTA description"
  }
}
```

## 📦 Products Data Structure (`products.json`)

### Adding Products

```json
{
  "products": [
    {
      "id": 1,
      "slug": "product-url-slug",
      "name": "Product Name",
      "category": "Vegetables",
      "form": "Powder",
      "image": "/images/products/product.png",
      "description": "Short description",
      "moq": "50 Kg",
      "shelfLife": "24 Months",
      "moisture": "< 5%",
      "packaging": ["1kg", "5kg", "25kg"],
      "formAvailable": "Powder / Slices",
      "origin": "India",
      "tags": ["Export Ready", "Top Seller"],
      "features": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ],
      "certifications": ["FSSAI", "ISO 22000"]
    }
  ]
}
```

### Categories List
Update available categories:

```json
{
  "categories": ["All Products", "Vegetables", "Fruits", "Spices"]
}
```

### Forms List
Update available product forms:

```json
{
  "forms": ["Powder", "Slices", "Flakes", "Whole"]
}
```

## 🎨 Features & Animations

### ✨ Built-in Features
- **Scroll Animations** - Sections fade in as you scroll
- **Hover Effects** - Cards and buttons have smooth hover states
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **3D Product Viewer** - Interactive 3D view of products (can be enabled on product pages)
- **Animated Counters** - Statistics count up when they come into view

### 📱 Mobile Responsive
All sections automatically adjust for:
- Small phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## 🚀 Quick Update Steps

1. Open `/public/data/home.json` in your code editor
2. Modify the text, images, and links you want to change
3. Save the file
4. **The website updates instantly!** (or refresh the page)

### Example: Update Hero Title
```json
// BEFORE
"title": "Pure. Preserved."

// AFTER
"title": "Your New Title"
```

## 🖼️ Image Paths

All images should be stored in `/public/images/` and referenced as:
```
/images/folder/image-name.png
```

## 🔗 Link Examples

- Internal links: `/products`, `/about`, `/contact`
- External links: `https://example.com`

## ⚙️ Advanced: Adding New Sections

To add a new section, you would:

1. Add data to `home.json`
2. Create a new component in `/src/components/sections/`
3. Import and use it in `/src/app/page.js`

For basic updates (text, images, links), no coding needed!

## 💡 Tips

- **No commas on last items** in arrays/objects
- **Keep image paths consistent** with the `/images/` folder structure
- **Use descriptive slugs** for products (e.g., `dehydrated-garlic-powder`)
- **Test on mobile** to ensure responsive design works
- **Keep JSON valid** - use a JSON validator if you're unsure

## ❓ FAQ

**Q: Do I need to restart the website?**
A: No! JSON changes apply automatically on page refresh.

**Q: Can I add/remove entire sections?**
A: Not without modifying code. The components are designed to use the JSON data structure as-is.

**Q: Can I change colors or styling?**
A: Colors are defined in `/src/app/globals.css`. For design changes, you may need developer help.

**Q: How do I add new product images?**
A: Upload them to `/public/images/products/` and reference them in `products.json`.

---

**Happy updating!** 🚀 Just modify the JSON and watch your website transform instantly.
