# 🥥 Naik Foods — Enhanced Prototype

> **Full Stack MERN Intern Task Submission**  
> Built for **Bits and Volts Pvt. Ltd.**

A Next.js prototype demonstrating **6 key improvements** identified through analysis of [naikfoods.com](https://www.naikfoods.com) — focusing on conversion optimization, user experience, and growth-ready features.


### 16. ♿ Accessibility & UX Enhancements
**Problem:** The live site suffers from a few citable UX and accessibility bugs:
1. **Viewport Meta Tag:** Sets `maximum-scale=1, user-scalable=no`, completely disabling pinch-to-zoom (critical accessibility bug for a food/ingredient site).
2. **Generic Testimonials:** Features placeholder/stock avatars with mismatched names, which damages brand trust.
3. **Newsletter Form:** Has no visible confirmation state upon signup.
4. **Pagination vs Filtering:** Store paginates 12 products per page across 10 pages but restricts sorting to "Newest first" only, reinforcing the urgent need for the robust search/filter/sort system implemented in this prototype.
5. **Store Locator Scaling:** Only lists a single Shukrawar Peth, Pune address under "Visit Our Store", lacking a scalable locator for future expansion.
**Solution:** Prototype implements accessible meta tags, provides real product-level reviews instead of fake global testimonials, and overhauls the store UX.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| State | React Context (Cart) |
| Data | Mock data layer (30+ products, 8 categories, reviews, pincodes) |
| Deployment | Vercel / Netlify compatible |

> **Why Next.js?** The live site already uses Next.js. This prototype mirrors the real stack while demonstrating improvements, making it directly relevant for integration discussions.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Cart provider
│   ├── page.tsx            # Homepage (hero, categories, bestsellers, bundles)
│   ├── globals.css         # Design system & animations
│   ├── store/
│   │   ├── page.tsx        # Store listing (with Suspense)
│   │   └── StoreContent.tsx # Search + filters + product grid
│   ├── product/[slug]/
│   │   └── page.tsx        # PDP (reviews, pincode, cross-sell)
│   └── about/
│       └── page.tsx        # Brand story
├── components/
│   ├── Header.tsx          # Sticky header with search + cart badge
│   ├── Footer.tsx          # Full footer
│   ├── CartDrawer.tsx      # Slide-in cart with free delivery bar
│   ├── ProductCard.tsx     # Card with badges, ratings, urgency
│   ├── BundleCard.tsx      # Combo pack card
│   └── PincodeChecker.tsx  # Pincode serviceability widget
├── context/
│   └── CartContext.tsx     # Cart state management
└── data/
    └── products.ts         # Mock database (products, categories, reviews, pincodes)
```

---

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder or use Netlify's Next.js plugin
```

---

## 📊 Analysis Summary

| Drawback Found | Business Impact | Feature Built |
|---------------|----------------|---------------|
| No search for 115+ SKUs | High intent users leave | ✅ Full-text search |
| No free delivery progress | Lost AOV uplift | ✅ Progress bar |
| No pincode check | Checkout bounce | ✅ Pincode checker |
| No per-product reviews | Low trust for food | ✅ Ratings + reviews |
| No urgency signals | No FOMO, delayed purchase | ✅ Stock + weekly buys |
| No cross-sell/bundles | Missed basket building | ✅ Combos + cart cross-sell |
| ₹0 priced products | Revenue leak | ✅ Flagged + handled |

---

## 👤 Submitted By

**Name:** BATTULA BHARGAVITEJASWI  
**Email:** bhargavitejaswi97@gmail.com  
**Date:** September 15, 2026  

---

*Built with ❤️ for Naik Foods — Authentic flavors from Vidarbha & Konkan*
