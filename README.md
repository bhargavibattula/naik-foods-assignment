# 🥥 Naik Konkan Foods — Enhanced Prototype

> **Full Stack MERN Intern Task Submission**  
> Built for **Bits and Volts Pvt. Ltd.**

A Next.js prototype demonstrating **6 key improvements** identified through analysis of [naikfoods.com](https://www.naikfoods.com) — focusing on conversion optimization, user experience, and growth-ready features.

---

## 🚀 Live Demo

**Deployed URL:** _[To be added after Vercel/Netlify deployment]_

---

## ✨ Features Implemented (With Visuals)

> **Note to Reviewer:** See the `public/screenshots` directory for high-res images of these features in action!

### 1. 🔍 Product Search & Filters
**Problem:** No search bar for 115+ SKUs — users can't find what they want  
**Solution:** Real-time full-text search across product names, descriptions, categories, and tags. Bonus: Category pills, price range slider, veg/non-veg toggle, sort options.
![Search & Filters UI](/public/screenshots/search.png)

### 2. 🚚 Free Delivery Progress Bar
**Problem:** ₹999 free delivery threshold exists but no visual progress indicator  
**Solution:** Animated progress bar in cart showing "Add ₹X more for FREE delivery"  
**Impact:** This is a proven AOV lever — typically lifts cart size 10-15%
![Free Delivery Progress](/public/screenshots/cart-drawer.png)

### 3. 📍 Pincode Serviceability Checker
**Problem:** Users from unserviceable areas add to cart and bounce at checkout  
**Solution:** Pincode check on product page with delivery estimate.
![Pincode Checker](/public/screenshots/product-page.png)

### 4. ⭐ Product Reviews & Ratings
**Problem:** Only generic homepage testimonials, no per-product social proof  
**Solution:** Star ratings on cards + detailed reviews on PDP with verified badges.

### 5. 🔥 Urgency & Scarcity Signals
**Problem:** No social proof or urgency cues anywhere on the site  
**Solution:** "X people bought this week", "Only Y left in stock!", low-stock badges.

### 6. 🎁 Bundle Combos & Cross-Sell
**Problem:** No AOV optimization — no "frequently bought together" or combo packs  
**Solution:** Bundle cards with combo discounts (8-12% off) + cross-sell in cart drawer.
![Bundle Combos](/public/screenshots/bundles.png)

### 7. 👩🏽‍🍳 Recipe Content Engine (WOW Feature)
**Problem:** Missing content-to-commerce pipeline  
**Solution:** 5 authentic Konkan recipes with one-click "Add All Ingredients to Cart".
![Recipe Engine](/public/screenshots/recipes.png)

### 8. 💖 Wishlist & Re-engagement (WOW Feature)
**Problem:** Users browse but don't convert immediately; no way to save intent  
**Solution:** Heart-toggle wishlist saved to local storage + "Recently Viewed" carousel.

### 9. 📱 WhatsApp Ordering (WOW Feature)
**Problem:** Bulk and custom orders have high friction  
**Solution:** Floating WhatsApp widget with pre-filled message.

### 10. ⚡ Micro-Interactions (WOW Feature)
**Problem:** Flat UX doesn't feel "premium"  
**Solution:** Quick View modal, Toast notifications, and CSS animations.

### 11. 🔄 Subscribe & Save (WOW Feature)
**Problem:** Missing recurring revenue model for daily essentials.
**Solution:** Native "Subscribe & Save 10%" toggle on product pages to drive Monthly Recurring Revenue (MRR).
![Subscribe & Save UI](/public/screenshots/subscribe.png)

### 12. 🪙 Naik Coins Loyalty Program (WOW Feature)
**Problem:** No gamification for customer retention.
**Solution:** Integrated "Naik Coins" rewards balance in the header navigation to incentivize repeat purchases.
![Naik Coins](/public/screenshots/header.png)

### 13. 🎊 Festive Gifting Banners
**Problem:** Poor promotion of high-margin corporate/festive gifts.
**Solution:** Premium visual banners driving traffic to curated gift boxes.
![Festive Gifting](/public/screenshots/festive.png)

### 14. 💳 ₹0 Price Bug Fix
**Problem:** "Aaswad Mitha Paan" shows ₹0 on the live site (data entry bug)  
**Solution:** Prototype displays "⚠️ Price to be updated" with disabled Add to Cart to prevent revenue leak.

### 15. 📞 Top Bar Direct Contact (WOW Feature)
**Problem:** High-intent customers wanting to make bulk orders or follow social media have to hunt for links.
**Solution:** A highly visible global top bar featuring a "Follow Us" Instagram link and a direct "Call to Book" dialer button.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| State | React Context (Cart) |
| Data | Mock data layer (30+ products, 10 categories, reviews, pincodes) |
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

*Built with ❤️ for Naik Konkan Foods — Authentic Alibag Delicacies*
