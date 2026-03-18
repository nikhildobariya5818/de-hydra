# De'hydra Food Venture — Next.js Website

Premium B2B Dehydrated Food Website built with **Next.js 14 + Tailwind CSS**.
Powered by Sryshaya Group.

---

## 📁 Project Structure

```
dehydra-website/
├── src/
│   ├── app/
│   │   ├── layout.js               ← Root layout (Navbar + Footer on all pages)
│   │   ├── globals.css             ← Brand styles + Tailwind base
│   │   ├── page.js                 ← Homepage
│   │   ├── about/page.jsx          ← About Us page
│   │   ├── products/
│   │   │   ├── page.jsx            ← Products Catalog
│   │   │   └── [slug]/page.jsx     ← Product Detail page
│   │   ├── process/page.jsx        ← Our Process page
│   │   ├── certifications/page.jsx ← Certifications page
│   │   ├── contact/page.jsx        ← Contact / Inquiry page
│   │   └── blog/page.jsx           ← Blog / Insights page
│   ├── components/
│   │   └── layout/
│   │       ├── Navbar.jsx          ← Sticky responsive navbar
│   │       └── Footer.jsx          ← 4-column footer
│   └── data/
│       ├── products.js             ← All product data (11 products)
│       └── certificates.js         ← All certificate data
├── tailwind.config.js              ← Brand color palette
├── next.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Quick Start

### Step 1 — Install Node.js
Download from: https://nodejs.org (v18 or above)

### Step 2 — Unzip & Open Project
```bash
unzip dehydra-website.zip
cd dehydra-website
```

### Step 3 — Install Dependencies
```bash
npm install
```

### Step 4 — Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser ✅

---

## 📄 Pages Included

| Page            | Route              | Status   |
|-----------------|--------------------|----------|
| Homepage        | /                  | ✅ Done  |
| Products        | /products          | ✅ Done  |
| Product Detail  | /products/[slug]   | ✅ Done  |
| About Us        | /about             | ✅ Done  |
| Our Process     | /process           | ✅ Done  |
| Certifications  | /certifications    | ✅ Done  |
| Contact         | /contact           | ✅ Done  |
| Blog / Insights | /blog              | ✅ Done  |

---

## 🎨 Brand Colors Used

| Token          | Hex       | Usage                  |
|----------------|-----------|------------------------|
| teal-500       | #1A8A8A   | Primary brand color    |
| teal-700       | #0D5F5F   | Dark teal / sections   |
| teal-50        | #F0FAFA   | Light background       |
| brand.green    | #4CAF50   | Organic / WhatsApp     |
| brand.orange   | #FF9800   | Accents / tags         |
| brand.dark     | #1A2E2E   | Headings & body text   |

---

## 🖼️ Adding Your Product Images

Place your product images inside:
```
public/images/products/
```

Image naming should match slugs in `src/data/products.js`:
```
onion-flakes.jpg
garlic-powder.jpg
tomato-slices.jpg
mango-powder.jpg
green-peas.jpg
ginger-powder.jpg
red-chili.jpg
spinach.jpg
carrot-cubes.jpg
beetroot-powder.jpg
green-chili-flakes.jpg
```

Replace the emoji placeholders in each page with:
```jsx
import Image from "next/image"
<Image src="/images/products/onion-flakes.jpg" alt="Onion Flakes" fill className="object-cover" />
```

---

## 📦 Add More Products

Edit `src/data/products.js` — copy any product object and change:
- `id`, `slug`, `name`, `category`, `form`
- `description`, `moq`, `shelfLife`, `moisture`
- `packaging`, `tags`, `features`, `certifications`

---

## 📧 Connect Contact Form (EmailJS — Free)

1. Sign up at https://emailjs.com
2. Install: `npm install @emailjs/browser`
3. In `src/app/contact/page.jsx`, replace `handleSubmit` with:

```js
import emailjs from "@emailjs/browser"

const handleSubmit = async (e) => {
  e.preventDefault()
  await emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    { ...form },
    "YOUR_PUBLIC_KEY"
  )
  setSubmitted(true)
}
```

---

## 🌐 Deploy to Vercel (Free Hosting)

### Option A — GitHub + Vercel (Recommended)
```bash
git init
git add .
git commit -m "De'hydra website"
git remote add origin https://github.com/YOUR_USERNAME/dehydra-website
git push -u origin main
```
Then go to https://vercel.com → New Project → Import your GitHub repo → Deploy ✅

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
```

Your site will be live at: `dehydra-website.vercel.app`

---

## 🔧 Update Company Info

Search and replace across all files:
- `info@dehydra.in`       → your real email
- `+91 98765 43210`       → your real phone
- `Ahmedabad, Gujarat`    → your real address
- `Sryshaya Group`        → keep or update as needed

---

## 📱 Mobile Responsive
All pages are fully responsive:
- Desktop: Full layout
- Tablet: 2-column grids
- Mobile: Stacked single column + hamburger menu

---

Built with ❤️ for De'hydra Food Venture | Sryshaya Group
