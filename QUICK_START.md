# Quick Start - Making Changes to Your Website

## ⚡ 5-Minute Website Updates

Your website is **100% data-driven**. No coding needed for content changes!

## 🎯 Most Common Updates

### 1. Update Hero Section Text & Images

**File:** `/public/data/home.json`

Find this section:
```json
{
  "hero": {
    "badge": "🌿 Premium B2B Dehydrated Foods",
    "title": "Pure. Preserved.",
    "titleHighlight": "Delivered Worldwide.",
    "description": "Industry-leading dehydration...",
    "image": "/images/products/hero-product-flatlay.png"
  }
}
```

**Change it to:**
```json
{
  "hero": {
    "badge": "Your new badge",
    "title": "Your New Title",
    "titleHighlight": "Your Highlight",
    "description": "Your description text",
    "image": "/images/your-image.png"
  }
}
```

✅ **Done!** Refresh your page and see changes instantly.

---

### 2. Add/Edit Products

**File:** `/public/data/products.json`

Find the products array:
```json
{
  "products": [
    {
      "id": 1,
      "name": "Dehydrated Onion Flakes",
      "image": "/images/products/onion-flakes.png",
      "description": "Premium quality red onion flakes..."
    }
  ]
}
```

**To add a new product:** Copy the entire product object and paste it below, incrementing the `id`.

**To edit:** Just change the text fields you need.

✅ **Done!** Products appear instantly on the Products page.

---

### 3. Update Statistics

**File:** `/public/data/home.json`

Find the stats section:
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

**Change to:**
```json
{
  "stats": [
    {
      "number": "600+",
      "label": "Products Worldwide"
    }
  ]
}
```

✅ **Done!** Stats counter animates the new number.

---

### 4. Update Customer Testimonials

**File:** `/public/data/home.json`

Find testimonials:
```json
{
  "testimonials": [
    {
      "text": "De'hydra's consistency in quality is outstanding...",
      "name": "Ahmed Al-Farsi",
      "role": "Procurement Manager, Al Noor Trading, UAE",
      "stars": 5
    }
  ]
}
```

**Edit:** Just change the text, name, role, and stars (1-5).

✅ **Done!** New testimonials display immediately.

---

### 5. Add Blog Posts

**File:** `/public/data/home.json`

Find insights section:
```json
{
  "insights": [
    {
      "tag": "INDUSTRY",
      "title": "Future of Dehydrated Goods...",
      "date": "Mar 2025",
      "image": "/images/blog/blog-1.jpg"
    }
  ]
}
```

**Add a new one:**
```json
{
  "tag": "NEWS",
  "title": "Your Blog Post Title",
  "date": "Apr 2025",
  "image": "/images/blog/your-image.jpg"
}
```

✅ **Done!** Blog post appears in the "Industry Insights" section.

---

### 6. Change Button Text & Links

**File:** `/public/data/home.json`

Find CTA buttons in hero section:
```json
{
  "ctaButtons": [
    {
      "text": "Explore Our Products",
      "href": "/products",
      "variant": "primary"
    }
  ]
}
```

**Change to:**
```json
{
  "ctaButtons": [
    {
      "text": "Shop Now",
      "href": "/shop",
      "variant": "primary"
    }
  ]
}
```

✅ **Done!** Button text and link updated.

---

## 🖼️ Adding Images

1. Save your image to `/public/images/products/` or `/public/images/blog/`
2. Reference it in JSON as: `/images/folder/image-name.png`

**Supported formats:** PNG, JPG, WebP

---

## 🔗 Changing Links

Links use these formats:

| Type | Example |
|------|---------|
| Internal | `/products`, `/about`, `/contact` |
| External | `https://example.com` |
| Email | `mailto:info@example.com` |
| Phone | `tel:+919876543210` |
| WhatsApp | `https://wa.me/919876543210` |

---

## ✅ Step-by-Step Example: Update Hero Section

1. **Open file:** `/public/data/home.json`
2. **Find section:** Look for `"hero":{`
3. **Edit text:**
   - Change `"title"` to your new title
   - Change `"description"` to your new description
4. **Save file**
5. **Refresh webpage** - Changes appear instantly!

That's it! No code needed. 🚀

---

## 🎨 What You Can't Change (Without Code)

These require developer help:

- ❌ Colors and styling
- ❌ Layout or section order
- ❌ Adding completely new sections
- ❌ Animation timing/effects
- ❌ Font types or sizes

Everything else? ✅ You can do it!

---

## 💡 Pro Tips

1. **Always keep JSON valid**
   - Use quotes around text: `"title": "Your Title"`
   - Use commas between items (except the last one)
   - Use `{` and `}` for objects, `[` and `]` for arrays

2. **Backup before major changes**
   - Copy entire JSON to a text file first
   - Easy to restore if something breaks

3. **Test changes locally**
   - Make one small change at a time
   - Refresh page to see changes
   - If broken, undo and try again

4. **Use a JSON validator**
   - https://jsonlint.com/
   - Paste your JSON to check if it's valid
   - Helps catch syntax errors

---

## 🚨 If Something Breaks

**Issue:** Page shows error or blank

**Solution:**
1. Open browser DevTools (F12)
2. Check the Console tab for red errors
3. Look at the JSON file - likely has syntax error
4. Check for missing quotes, commas, or braces
5. Use JSON validator to find exact issue
6. Fix and refresh page

---

## 🎥 Example: Add New Product in 3 Steps

### Step 1: Copy existing product
```json
{
  "id": 12,
  "slug": "new-product",
  "name": "New Product Name",
  "image": "/images/products/new.png",
  ...
}
```

### Step 2: Change the details
```json
{
  "id": 12,
  "slug": "my-new-product",
  "name": "My Awesome Product",
  "image": "/images/products/my-product.png",
  "description": "This is my new product",
  ...
}
```

### Step 3: Save and refresh
Done! Your product is live.

---

## 📞 Need Help?

**Q: Where do I edit content?**
A: `/public/data/home.json` and `/public/data/products.json`

**Q: Changes not showing?**
A: Refresh the page (Ctrl+R or Cmd+R)

**Q: Did I break something?**
A: Use undo (Ctrl+Z) in your editor

**Q: How do I add new sections?**
A: That requires coding. Contact developer.

---

## 📋 Website File Structure

```
/public/
├── data/
│   ├── home.json        ← Edit for homepage content
│   └── products.json    ← Edit for products
└── images/
    ├── products/        ← Add product images here
    └── blog/            ← Add blog images here

/src/
├── components/          ← Code (don't touch unless you code)
├── app/                 ← Code (don't touch unless you code)
└── hooks/               ← Code (don't touch unless you code)
```

---

**Happy editing!** 🚀 Your website is fully in your hands now.

Last updated: April 2025
