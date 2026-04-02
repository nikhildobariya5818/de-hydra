# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 1. ❌ Website shows blank page

**Symptoms:**
- White/blank page on load
- No content visible
- No console errors

**Solutions:**
1. **Hard refresh page:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Clear browser cache:**
   - Open DevTools (F12)
   - Right-click refresh button → "Empty cache and hard refresh"

3. **Check browser console:**
   - Press F12 → Console tab
   - Look for red error messages
   - Screenshot and check below

4. **Restart dev server:**
   - Stop the dev server
   - Run `npm run dev` again

---

### 2. ❌ JSON data not loading

**Symptoms:**
- Loading spinner stuck
- Page shows "Loading premium products..."
- No content after 5+ seconds

**Solutions:**
1. **Check JSON file syntax:**
   - Visit https://jsonlint.com/
   - Paste content of `/public/data/home.json` or `/products.json`
   - Look for syntax errors

2. **Common JSON errors:**
   ```
   ❌ Missing comma between items
   {
     "item1": "value1"
     "item2": "value2"  ← Missing comma!
   }
   
   ✅ Correct:
   {
     "item1": "value1",
     "item2": "value2"
   }
   ```

3. **Check file paths:**
   - Ensure files exist at `/public/data/home.json`
   - Ensure files exist at `/public/data/products.json`
   - File names are case-sensitive!

4. **Network issue:**
   - Open DevTools → Network tab
   - Reload page
   - Look for failed requests to `/data/*.json`
   - Check the response

---

### 3. ❌ Changes not appearing

**Symptoms:**
- Updated JSON but page unchanged
- Old content still showing
- Changes took 5+ minutes to show

**Solutions:**
1. **Refresh page properly:**
   - Normal refresh: `F5` or `Ctrl + R`
   - Hard refresh: `Ctrl + Shift + R` (Windows)
   - Hard refresh: `Cmd + Shift + R` (Mac)

2. **Clear cache:**
   - DevTools (F12) → Settings (⚙️) 
   - Check "Disable cache (while DevTools open)"
   - Reload page

3. **Save file properly:**
   - Ensure file is saved (check for unsaved indicator)
   - Some editors: `Ctrl + S` to explicitly save
   - Wait 1-2 seconds before refreshing

4. **Check for typos:**
   - Look for syntax errors in JSON
   - Use JSON validator to check

---

### 4. ❌ Images not loading

**Symptoms:**
- Broken image icons (🖼️ with X)
- Missing product images
- Missing category icons

**Solutions:**
1. **Check image location:**
   - All images must be in `/public/images/`
   - Example path: `/public/images/products/onion-flakes.png`

2. **Check path in JSON:**
   ```
   ✅ Correct: "/images/products/onion-flakes.png"
   ❌ Wrong: "images/products/onion-flakes.png" (no leading slash)
   ❌ Wrong: "/Images/..." (capital I, case-sensitive!)
   ```

3. **Verify file extension:**
   - Supported: `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`
   - Check spelling: `product.png` not `product.PNG`
   - Windows file system is case-insensitive, Linux/Mac is case-sensitive

4. **Check file exists:**
   - Navigate to `/public/images/` in file explorer
   - Verify image file is there
   - Check file isn't corrupted

5. **Try different image:**
   - Use a known working image path
   - Test with: `/images/blog/blog-1.jpg`
   - If it works, original image might be corrupted

---

### 5. ❌ Animations not working

**Symptoms:**
- No fade-in effects
- Cards don't animate
- Counters don't count up
- No smooth transitions

**Solutions:**
1. **Check Framer Motion installed:**
   ```bash
   npm list framer-motion
   ```
   Should show: `framer-motion@10.16.4` or similar

2. **If not installed:**
   ```bash
   npm install framer-motion
   ```

3. **Restart dev server:**
   - Stop server: `Ctrl + C`
   - Start again: `npm run dev`

4. **Check browser support:**
   - Animations require modern browser
   - Try: Chrome, Firefox, Safari, Edge
   - Avoid: Internet Explorer

5. **Performance issue:**
   - Disable browser extensions
   - Close other tabs
   - Restart browser
   - Check CPU usage

---

### 6. ❌ Responsive design broken

**Symptoms:**
- Mobile view looks squashed
- Text too small on phone
- Hamburger menu not working
- Layout overlapping

**Solutions:**
1. **Check viewport meta tag:**
   In `layout.js`, should have:
   ```javascript
   viewport: {
     width: "device-width",
     initialScale: 1,
   }
   ```

2. **Test on real mobile device:**
   - Desktop DevTools simulator not always accurate
   - Use actual phone to test

3. **Clear mobile cache:**
   - Mobile browsers cache aggressively
   - Hard refresh on mobile (usually 2-finger refresh)
   - Or close and reopen browser

4. **Check Tailwind breakpoints:**
   - Mobile first: no prefix (default)
   - Tablet: `md:` prefix (768px+)
   - Desktop: `lg:` prefix (1024px+)

5. **Hamburger menu not working:**
   - Check `useState` is imported in Navbar
   - Verify menu toggle button has `onClick={setOpen(!open)}`
   - Check for console errors

---

### 7. ❌ JSON syntax error

**Symptoms:**
- Console error mentioning JSON
- "Unexpected token" error
- Page shows error boundary

**Common mistakes:**

```javascript
// ❌ Missing quote
{
  "title": Missing quote here
}

// ❌ Single quotes (must be double)
{
  'title': 'Wrong quotes'
}

// ❌ Trailing comma
{
  "item": "value",  ← Comma here is wrong!
}

// ❌ Unescaped quotes in text
{
  "text": "He said "hello" world"
}
// ✅ Fix with backslash:
{
  "text": "He said \"hello\" world"
}

// ❌ Missing comma between properties
{
  "title": "Value"
  "desc": "Value" ← Missing comma above!
}

// ✅ Correct JSON
{
  "title": "Value",
  "desc": "Value"
}
```

**How to fix:**
1. Visit https://jsonlint.com/
2. Paste your JSON
3. Look for error message
4. Click on line number to fix
5. Save and refresh

---

### 8. ❌ 3D viewer not working

**Symptoms:**
- "View in 3D" button doesn't work
- 3D canvas shows black screen
- Rotation/zoom not responding

**Solutions:**
1. **Check Three.js installed:**
   ```bash
   npm list three
   ```

2. **Install if missing:**
   ```bash
   npm install three @react-three/fiber @react-three/drei
   ```

3. **Restart dev server:**
   - Stop: `Ctrl + C`
   - Start: `npm run dev`

4. **Check WebGL support:**
   - Open Console (F12)
   - Run: `document.createElement('canvas').getContext('webgl') !== null`
   - Should return: `true`
   - If false, WebGL not supported

5. **Browser compatibility:**
   - Works on: Chrome, Firefox, Safari, Edge
   - Doesn't work: Internet Explorer
   - Mobile support varies

---

### 9. ❌ Performance is slow

**Symptoms:**
- Page takes long to load
- Animations are laggy/jumpy
- Scrolling feels sluggish

**Solutions:**
1. **Check network speed:**
   - DevTools (F12) → Network tab
   - Reload page
   - Check "Total" time
   - Note slow requests

2. **Optimize images:**
   - Images should be < 100KB each
   - Use PNG for icons, JPG for photos
   - Use online tools: TinyPNG, ImageOptim

3. **Check browser extensions:**
   - Disable all extensions
   - Reload page
   - If faster, one extension is culprit

4. **Close other tabs:**
   - Too many tabs use memory
   - Close unnecessary tabs
   - Restart browser

5. **Check Lighthouse:**
   - DevTools → Lighthouse tab
   - Run "Performance" audit
   - Follow suggestions

6. **Production build:**
   ```bash
   npm run build
   npm run start
   ```

---

### 10. ❌ Mobile menu stuck open

**Symptoms:**
- Hamburger menu won't close
- Menu overlays entire page
- Can't click items

**Solutions:**
1. **Check state management:**
   In Navbar component:
   ```javascript
   const [open, setOpen] = useState(false)
   ```

2. **Verify close handlers:**
   - Each menu link should have: `onClick={() => setOpen(false)}`
   - Close button should have: `onClick={() => setOpen(!open)}`

3. **Check CSS z-index:**
   - Menu should have: `z-50` or higher
   - Ensure nothing overlaps

4. **Hard refresh:**
   - Mobile: Close and reopen browser
   - Or: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

---

### 11. ❌ Form submission not working

**Symptoms:**
- Form inputs not responding
- Can't type in fields
- Submit button does nothing

**Solutions:**
1. **Check input handlers:**
   ```javascript
   const [email, setEmail] = useState('')
   <input 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
   />
   ```

2. **Verify input structure:**
   - Each input needs `name` attribute
   - Should have `type` (text, email, etc.)
   - Should have `placeholder` for UX

3. **Form submission:**
   - Currently sends to `/contact` page
   - Needs backend API integration for actual submission
   - See WEBSITE_FEATURES.md for integration options

---

### 12. ❌ Console errors

**How to check console:**
1. Press `F12` to open DevTools
2. Click "Console" tab
3. Look for red 🔴 errors
4. Screenshot error message
5. Check solutions below

**Common console errors:**

**Error: "useJsonData is not defined"**
- Check import in page.js: `import { useJsonData }`
- Verify file exists: `/src/hooks/useJsonData.js`
- Check path is correct

**Error: "Cannot read property 'stats' of undefined"**
- JSON still loading
- Check if data is null before using
- Add safety checks: `data?.stats || []`

**Warning: "Each child in a list should have a key prop"**
- React warning (not an error)
- Add `key` prop to mapped items
- Usually harmless

**Error: "Failed to fetch"**
- Network issue
- JSON file missing or moved
- Server not running
- Check file at: `/public/data/home.json`

---

## 🆘 Still Having Issues?

### Step-by-step Debugging:

1. **Open DevTools:** Press `F12`
2. **Go to Console tab:** Look for errors
3. **Screenshot the error:** Copy exact message
4. **Check Network tab:** Look for failed requests
5. **Hard refresh page:** `Ctrl + Shift + R`
6. **Restart dev server:** Stop and restart npm
7. **Clear browser cache:** DevTools → Settings → Clear cache
8. **Reset browser:** Close all tabs, restart browser

### Questions to ask yourself:

- ✅ Did I save the file?
- ✅ Did I hard refresh the page?
- ✅ Did I restart the dev server?
- ✅ Is JSON syntax valid?
- ✅ Are file paths correct?
- ✅ Are images in `/public/images/`?
- ✅ Are dependencies installed?

### Getting Help:

If still stuck:
1. **Read the error message carefully** - it often says the solution
2. **Google the exact error message** - likely someone had same issue
3. **Check file paths** - 80% of issues are path-related
4. **Validate JSON** - Use https://jsonlint.com/
5. **Restart everything** - Often fixes mysterious issues

---

## 📊 Error Reference Table

| Error | Cause | Solution |
|-------|-------|----------|
| Blank page | Missing/broken JSON | Check `/public/data/` files |
| Images missing | Wrong path | Verify `/images/` path |
| No animations | Framer Motion missing | `npm install framer-motion` |
| Mobile broken | Viewport missing | Check `layout.js` viewport |
| Slow loading | Large images | Optimize images < 100KB |
| Menu stuck | State issue | Hard refresh page |
| Syntax error | Invalid JSON | Use https://jsonlint.com/ |
| Animations laggy | Performance | Close tabs, disable extensions |

---

**Last Updated:** April 2025
**Version:** 2.0

Remember: Most issues are solved by:
1. Hard refresh (`Ctrl + Shift + R`)
2. Restarting dev server
3. Checking JSON syntax
4. Verifying file paths

Good luck! 🚀
