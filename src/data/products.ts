// ─── Types ───────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice: number | null;
  weight: string;
  image: string;
  badge: string | null; // "Sale", "Bestseller", "New", "Sold Out"
  inStock: boolean;
  stockCount: number;
  weeklyPurchases: number;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  tags: string[];
  frequentlyBoughtWith: string[]; // product IDs
  isVeg: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
  emoji: string;
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  productIds: string[];
  discountPercent: number;
  badge: string;
}

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { name: "Masala", slug: "masala", description: "Authentic Konkani spice blends", productCount: 8, emoji: "🌶️" },
  { name: "Pickles", slug: "pickles", description: "Traditional Aaji-style loncha", productCount: 10, emoji: "⚱️" },
  { name: "Chikki", slug: "chikki", description: "Jaggery-based crunchy treats", productCount: 5, emoji: "🧇" },
  { name: "Flours", slug: "flours", description: "Stone-ground nutritious flours", productCount: 6, emoji: "🌾" },
  { name: "Papad", slug: "papad", description: "Sun-dried crispy papads", productCount: 5, emoji: "🫓" },
  { name: "Syrup", slug: "syrup", description: "Natural kokum & fruit syrups", productCount: 4, emoji: "🥤" },
  { name: "Dry Fish Bazar", slug: "dry-fish-bazar", description: "Premium Konkan dry fish", productCount: 6, emoji: "🐟" },
  { name: "Konkan Meva", slug: "konkan-meva", description: "Dried Konkan fruits & nuts", productCount: 5, emoji: "🥜" },
  { name: "Baby Food", slug: "baby-food", description: "Nutritious traditional baby food", productCount: 2, emoji: "👶" },
  { name: "Premium Products", slug: "premium-products", description: "Naikancho signature snacks", productCount: 6, emoji: "⭐" },
  { name: "Gift Boxes", slug: "gift", description: "Curated festive gift boxes", productCount: 2, emoji: "🎁" },
];

// ─── Review data ─────────────────────────────────────────────────────────────

const reviewPool: Review[] = [
  { id: "r1", author: "Priya M.", rating: 5, date: "2026-08-20", comment: "Tastes exactly like my aaji used to make! Authentic Konkan flavor.", verified: true },
  { id: "r2", author: "Rohan K.", rating: 4, date: "2026-08-15", comment: "Good quality and fresh. Packaging could be a bit better.", verified: true },
  { id: "r3", author: "Sneha D.", rating: 5, date: "2026-07-28", comment: "Ordered for the second time. My whole family loved it!", verified: true },
  { id: "r4", author: "Amit P.", rating: 3, date: "2026-07-10", comment: "Decent product but expected more spice. Still good value for money.", verified: true },
  { id: "r5", author: "Kavita S.", rating: 5, date: "2026-08-05", comment: "Reminds me of my childhood in Vidarbha. Pure nostalgia!", verified: true },
  { id: "r6", author: "Vaibhav N.", rating: 4, date: "2026-06-22", comment: "Great taste, fast delivery. Would recommend to anyone missing Konkan food.", verified: true },
  { id: "r7", author: "Megha R.", rating: 5, date: "2026-08-30", comment: "Best quality I've found online. So fresh and aromatic!", verified: true },
  { id: "r8", author: "Suresh T.", rating: 4, date: "2026-07-18", comment: "Good product. The shelf life is also decent. Satisfied with purchase.", verified: false },
  { id: "r9", author: "Anjali B.", rating: 5, date: "2026-09-01", comment: "Gift hamper idea was perfect for Ganpati. Everyone loved it.", verified: true },
  { id: "r10", author: "Deepak G.", rating: 4, date: "2026-08-12", comment: "Authentic Maharashtrian taste. Will be ordering regularly now.", verified: true },
];

// ─── Products ────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── Masala ──
  {
    id: "masala-1",
    name: "Sandgi Mirchi",
    slug: "sandgi-mirchi",
    description: "Authentic Konkan-style chili powder made from sun-dried red chilies. Perfect for adding heat and color to curries, chutneys, and everyday cooking.",
    category: "Masala",
    categorySlug: "masala",
    price: 45,
    originalPrice: null,
    weight: "100g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 45,
    weeklyPurchases: 78,
    rating: 4.5,
    reviewCount: 34,
    reviews: [reviewPool[0], reviewPool[6], reviewPool[9]],
    tags: ["spicy", "red chili", "konkani", "masala"],
    frequentlyBoughtWith: ["masala-2", "pickle-1"],
    isVeg: true,
  },
  {
    id: "masala-2",
    name: "Goda Masala",
    slug: "goda-masala",
    description: "Traditional Maharashtrian Goda Masala blended with freshly roasted whole spices. A must-have for authentic Maharashtrian cuisine.",
    category: "Masala",
    categorySlug: "masala",
    price: 85,
    originalPrice: 100,
    weight: "100g",
    image: "/masala-product.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 22,
    weeklyPurchases: 92,
    rating: 4.7,
    reviewCount: 56,
    reviews: [reviewPool[0], reviewPool[2], reviewPool[6]],
    tags: ["maharashtrian", "goda", "aromatic", "masala"],
    frequentlyBoughtWith: ["masala-1", "flour-1"],
    isVeg: true,
  },
  {
    id: "masala-3",
    name: "Kala Masala",
    slug: "kala-masala",
    description: "Dark, aromatic Kala Masala made from over 20 roasted spices. Essential for Maharashtrian non-veg and special sabzis.",
    category: "Masala",
    categorySlug: "masala",
    price: 95,
    originalPrice: 110,
    weight: "100g",
    image: "/masala-product.jpg",
    badge: "Bestseller",
    inStock: true,
    stockCount: 18,
    weeklyPurchases: 110,
    rating: 4.8,
    reviewCount: 89,
    reviews: [reviewPool[4], reviewPool[6], reviewPool[9]],
    tags: ["dark", "aromatic", "premium", "masala"],
    frequentlyBoughtWith: ["masala-2", "masala-1"],
    isVeg: true,
  },
  {
    id: "masala-4",
    name: "Malvani Masala",
    slug: "malvani-masala",
    description: "Fiery Malvani masala perfect for coastal seafood dishes and Malvani chicken curry.",
    category: "Masala",
    categorySlug: "masala",
    price: 90,
    originalPrice: null,
    weight: "100g",
    image: "/masala-product.jpg",
    badge: null,
    inStock: true,
    stockCount: 30,
    weeklyPurchases: 65,
    rating: 4.4,
    reviewCount: 28,
    reviews: [reviewPool[5], reviewPool[7]],
    tags: ["malvani", "coastal", "seafood", "masala"],
    frequentlyBoughtWith: ["dryfish-1", "masala-3"],
    isVeg: true,
  },
  {
    id: "masala-5",
    name: "Sambar Masala",
    slug: "sambar-masala",
    description: "South Indian-Konkani style sambar powder with the right balance of tang and heat.",
    category: "Masala",
    categorySlug: "masala",
    price: 60,
    originalPrice: null,
    weight: "100g",
    image: "/masala-product.jpg",
    badge: null,
    inStock: true,
    stockCount: 40,
    weeklyPurchases: 42,
    rating: 4.3,
    reviewCount: 19,
    reviews: [reviewPool[1], reviewPool[7]],
    tags: ["sambar", "south-indian", "konkani", "masala"],
    frequentlyBoughtWith: ["flour-2", "papad-1"],
    isVeg: true,
  },

  // ── Pickles ──
  {
    id: "pickle-1",
    name: "Ambat God Tikhat Loncha",
    slug: "ambat-god-tikhat-loncha",
    description: "A unique three-taste pickle combining sweet, sour and spicy flavors. Made with raw mangoes, jaggery, and traditional Konkan spices.",
    category: "Pickles",
    categorySlug: "pickles",
    price: 90,
    originalPrice: 120,
    weight: "250g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 35,
    weeklyPurchases: 120,
    rating: 4.8,
    reviewCount: 95,
    reviews: [reviewPool[0], reviewPool[2], reviewPool[4]],
    tags: ["sweet", "sour", "spicy", "mango", "pickle"],
    frequentlyBoughtWith: ["pickle-2", "papad-1"],
    isVeg: true,
  },
  {
    id: "pickle-2",
    name: "Kairy Tikhat Loncha - Spicy Mango Pickle",
    slug: "kairy-tikhat-loncha",
    description: "Fiery raw mango pickle made with cold-pressed oil and traditional Konkani spices. Perfect with dal-rice.",
    category: "Pickles",
    categorySlug: "pickles",
    price: 90,
    originalPrice: 120,
    weight: "250g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 28,
    weeklyPurchases: 85,
    rating: 4.6,
    reviewCount: 67,
    reviews: [reviewPool[4], reviewPool[5], reviewPool[9]],
    tags: ["spicy", "mango", "tikhat", "pickle"],
    frequentlyBoughtWith: ["pickle-1", "pickle-3"],
    isVeg: true,
  },
  {
    id: "pickle-3",
    name: "Kairy Chunda - Raw Mango Chunda",
    slug: "kairy-chunda",
    description: "Sweet and tangy raw mango chunda, a Konkan specialty. Perfect as a side with paratha or thepla.",
    category: "Pickles",
    categorySlug: "pickles",
    price: 90,
    originalPrice: 120,
    weight: "250g",
    image: "/festive-treasure-box.jpg",
    badge: "Sold Out",
    inStock: false,
    stockCount: 0,
    weeklyPurchases: 95,
    rating: 4.7,
    reviewCount: 72,
    reviews: [reviewPool[2], reviewPool[8]],
    tags: ["sweet", "tangy", "mango", "chunda"],
    frequentlyBoughtWith: ["pickle-1", "pickle-2"],
    isVeg: true,
  },
  {
    id: "pickle-4",
    name: "Lemon Pickle",
    slug: "lemon-pickle",
    description: "Tangy lemon pickle made with fresh Konkan lemons, mustard, and fenugreek. Sun-cured for rich flavor.",
    category: "Pickles",
    categorySlug: "pickles",
    price: 75,
    originalPrice: null,
    weight: "200g",
    image: "/pickle-papad-hamper.jpg",
    badge: null,
    inStock: true,
    stockCount: 50,
    weeklyPurchases: 55,
    rating: 4.3,
    reviewCount: 31,
    reviews: [reviewPool[1], reviewPool[7]],
    tags: ["lemon", "tangy", "pickle"],
    frequentlyBoughtWith: ["pickle-1", "papad-1"],
    isVeg: true,
  },
  {
    id: "pickle-5",
    name: "Green Chili Pickle",
    slug: "green-chili-pickle",
    description: "Spicy green chili pickle made with mustard oil and aromatic spices. A fiery companion for any meal.",
    category: "Pickles",
    categorySlug: "pickles",
    price: 65,
    originalPrice: null,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: "New",
    inStock: true,
    stockCount: 60,
    weeklyPurchases: 38,
    rating: 4.2,
    reviewCount: 12,
    reviews: [reviewPool[3], reviewPool[5]],
    tags: ["green chili", "spicy", "pickle"],
    frequentlyBoughtWith: ["pickle-4", "masala-1"],
    isVeg: true,
  },

  // ── Chikki ──
  {
    id: "chikki-1",
    name: "Soft Coconut Jaggery Chikki",
    slug: "soft-coconut-jaggery-chikki",
    description: "Nutritious and delicious chikki made with fresh coconut shavings and organic jaggery. Soft, chewy, and naturally sweet.",
    category: "Chikki",
    categorySlug: "chikki",
    price: 135,
    originalPrice: 150,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 15,
    weeklyPurchases: 140,
    rating: 4.9,
    reviewCount: 128,
    reviews: [reviewPool[2], reviewPool[4], reviewPool[8]],
    tags: ["coconut", "jaggery", "sweet", "chikki", "healthy"],
    frequentlyBoughtWith: ["chikki-2", "chikki-3"],
    isVeg: true,
  },
  {
    id: "chikki-2",
    name: "Peanut Jaggery Chikki",
    slug: "peanut-jaggery-chikki",
    description: "Crunchy peanut chikki made with roasted groundnuts and pure jaggery. A protein-rich traditional snack.",
    category: "Chikki",
    categorySlug: "chikki",
    price: 110,
    originalPrice: 130,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 25,
    weeklyPurchases: 95,
    rating: 4.6,
    reviewCount: 78,
    reviews: [reviewPool[0], reviewPool[5]],
    tags: ["peanut", "jaggery", "crunchy", "chikki", "protein"],
    frequentlyBoughtWith: ["chikki-1", "chikki-3"],
    isVeg: true,
  },
  {
    id: "chikki-3",
    name: "Til Gul Chikki",
    slug: "til-gul-chikki",
    description: "Traditional sesame-jaggery chikki, a festive favourite. Rich in iron and calcium.",
    category: "Chikki",
    categorySlug: "chikki",
    price: 100,
    originalPrice: null,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 38,
    weeklyPurchases: 60,
    rating: 4.4,
    reviewCount: 42,
    reviews: [reviewPool[8], reviewPool[3]],
    tags: ["sesame", "til", "gul", "festive", "chikki"],
    frequentlyBoughtWith: ["chikki-1", "chikki-2"],
    isVeg: true,
  },

  // ── Flours ──
  {
    id: "flour-1",
    name: "Nachni Flour (Ragi)",
    slug: "nachni-flour",
    description: "Stone-ground finger millet flour, rich in calcium and iron. Perfect for roti, porridge, and baby food.",
    category: "Flours",
    categorySlug: "flours",
    price: 70,
    originalPrice: 85,
    weight: "500g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 42,
    weeklyPurchases: 68,
    rating: 4.5,
    reviewCount: 45,
    reviews: [reviewPool[2], reviewPool[6]],
    tags: ["nachni", "ragi", "millet", "healthy", "flour"],
    frequentlyBoughtWith: ["flour-2", "babyfood-1"],
    isVeg: true,
  },
  {
    id: "flour-2",
    name: "Bhajani Flour",
    slug: "bhajani-flour",
    description: "Multi-grain roasted flour for making traditional thalipeeth. A Maharashtrian kitchen essential.",
    category: "Flours",
    categorySlug: "flours",
    price: 80,
    originalPrice: null,
    weight: "500g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 35,
    weeklyPurchases: 52,
    rating: 4.6,
    reviewCount: 38,
    reviews: [reviewPool[0], reviewPool[9]],
    tags: ["bhajani", "multigrain", "thalipeeth", "flour"],
    frequentlyBoughtWith: ["flour-1", "masala-2"],
    isVeg: true,
  },
  {
    id: "flour-3",
    name: "Rice Flour",
    slug: "rice-flour",
    description: "Fine-ground Konkan rice flour for making modak, ukdiche, and other traditional sweets.",
    category: "Flours",
    categorySlug: "flours",
    price: 55,
    originalPrice: null,
    weight: "500g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 55,
    weeklyPurchases: 45,
    rating: 4.3,
    reviewCount: 22,
    reviews: [reviewPool[1], reviewPool[7]],
    tags: ["rice", "modak", "konkani", "flour"],
    frequentlyBoughtWith: ["flour-1", "flour-2"],
    isVeg: true,
  },

  // ── Papad ──
  {
    id: "papad-1",
    name: "Udid Papad",
    slug: "udid-papad",
    description: "Crispy urad dal papads, sun-dried the traditional way. Perfect with any meal.",
    category: "Papad",
    categorySlug: "papad",
    price: 60,
    originalPrice: null,
    weight: "200g",
    image: "/pickle-paratha.jpg",
    badge: null,
    inStock: true,
    stockCount: 65,
    weeklyPurchases: 72,
    rating: 4.4,
    reviewCount: 41,
    reviews: [reviewPool[5], reviewPool[9]],
    tags: ["udid", "urad", "crispy", "papad"],
    frequentlyBoughtWith: ["papad-2", "pickle-1"],
    isVeg: true,
  },
  {
    id: "papad-2",
    name: "Rice Papad",
    slug: "rice-papad",
    description: "Thin, crispy rice papads from Konkan. Light and crunchy, great as a snack or meal accompaniment.",
    category: "Papad",
    categorySlug: "papad",
    price: 50,
    originalPrice: null,
    weight: "200g",
    image: "/pickle-paratha.jpg",
    badge: null,
    inStock: true,
    stockCount: 70,
    weeklyPurchases: 55,
    rating: 4.3,
    reviewCount: 29,
    reviews: [reviewPool[1], reviewPool[7]],
    tags: ["rice", "crispy", "light", "papad"],
    frequentlyBoughtWith: ["papad-1", "pickle-4"],
    isVeg: true,
  },

  // ── Syrup ──
  {
    id: "syrup-1",
    name: "Kokum Syrup",
    slug: "kokum-syrup",
    description: "Refreshing kokum agal made from fresh Konkan kokum. A natural coolant and digestive aid.",
    category: "Syrup",
    categorySlug: "syrup",
    price: 120,
    originalPrice: null,
    weight: "500ml",
    image: "/kokum-sharbat.jpg",
    badge: "Bestseller",
    inStock: true,
    stockCount: 20,
    weeklyPurchases: 105,
    rating: 4.8,
    reviewCount: 88,
    reviews: [reviewPool[4], reviewPool[6], reviewPool[9]],
    tags: ["kokum", "natural", "coolant", "drink", "syrup"],
    frequentlyBoughtWith: ["syrup-2", "meva-1"],
    isVeg: true,
  },
  {
    id: "syrup-2",
    name: "Amla Syrup",
    slug: "amla-syrup",
    description: "Immunity-boosting amla syrup made from fresh Indian gooseberries. Rich in Vitamin C.",
    category: "Syrup",
    categorySlug: "syrup",
    price: 110,
    originalPrice: 130,
    weight: "500ml",
    image: "/kokum-sharbat.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 30,
    weeklyPurchases: 72,
    rating: 4.5,
    reviewCount: 52,
    reviews: [reviewPool[2], reviewPool[7]],
    tags: ["amla", "immunity", "vitamin-c", "healthy", "syrup"],
    frequentlyBoughtWith: ["syrup-1", "meva-2"],
    isVeg: true,
  },

  // ── Dry Fish ──
  {
    id: "dryfish-1",
    name: "Bombil (Bombay Duck) Dry",
    slug: "bombil-dry",
    description: "Premium sun-dried Bombay Duck from Konkan coast. A Konkan non-veg delicacy.",
    category: "Dry Fish Bazar",
    categorySlug: "dry-fish-bazar",
    price: 350,
    originalPrice: 400,
    weight: "250g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 12,
    weeklyPurchases: 45,
    rating: 4.6,
    reviewCount: 33,
    reviews: [reviewPool[5], reviewPool[9]],
    tags: ["bombil", "bombay duck", "non-veg", "seafood", "dry fish"],
    frequentlyBoughtWith: ["dryfish-2", "masala-4"],
    isVeg: false,
  },
  {
    id: "dryfish-2",
    name: "Jawla (Dried Shrimp)",
    slug: "jawla-dried-shrimp",
    description: "Tiny dried Konkan shrimp, packed with umami flavor. Perfect for chutneys and rice preparations.",
    category: "Dry Fish Bazar",
    categorySlug: "dry-fish-bazar",
    price: 280,
    originalPrice: null,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 18,
    weeklyPurchases: 38,
    rating: 4.4,
    reviewCount: 26,
    reviews: [reviewPool[3], reviewPool[5]],
    tags: ["jawla", "shrimp", "non-veg", "seafood", "dry fish"],
    frequentlyBoughtWith: ["dryfish-1", "masala-4"],
    isVeg: false,
  },

  // ── Konkan Meva ──
  {
    id: "meva-1",
    name: "Gavthi Kadwe Vaal - Field Beans",
    slug: "kadwe-vaal-field-beans",
    description: "Organic field beans sourced from Konkan farms. High in protein and traditional superfood.",
    category: "Konkan Meva",
    categorySlug: "konkan-meva",
    price: 180,
    originalPrice: null,
    weight: "500g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 25,
    weeklyPurchases: 32,
    rating: 4.3,
    reviewCount: 18,
    reviews: [reviewPool[1], reviewPool[9]],
    tags: ["vaal", "beans", "protein", "organic", "meva"],
    frequentlyBoughtWith: ["meva-2", "flour-1"],
    isVeg: true,
  },
  {
    id: "meva-2",
    name: "Amla Gulkand",
    slug: "amla-gulkand",
    description: "Sweet amla preserve infused with rose petals. A digestive delight rich in antioxidants.",
    category: "Konkan Meva",
    categorySlug: "konkan-meva",
    price: 125,
    originalPrice: null,
    weight: "250g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 40,
    weeklyPurchases: 58,
    rating: 4.5,
    reviewCount: 44,
    reviews: [reviewPool[2], reviewPool[6]],
    tags: ["amla", "gulkand", "rose", "digestive", "sweet"],
    frequentlyBoughtWith: ["syrup-2", "meva-1"],
    isVeg: true,
  },

  // ── Baby Food ──
  {
    id: "babyfood-1",
    name: "Bhardi - Nutritional Baby Food",
    slug: "bhardi-nutritional-baby-food",
    description: "Authentic baby food crafted from Naik Aaji's cherished recipe. A blend of roasted grains, nuts, and natural sweeteners for your little one's health.",
    category: "Baby Food",
    categorySlug: "baby-food",
    price: 70,
    originalPrice: 90,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 32,
    weeklyPurchases: 88,
    rating: 4.9,
    reviewCount: 112,
    reviews: [reviewPool[2], reviewPool[4], reviewPool[8]],
    tags: ["baby", "nutritional", "healthy", "traditional", "aaji"],
    frequentlyBoughtWith: ["flour-1", "meva-2"],
    isVeg: true,
  },

  // ── Premium / Naikancho ──
  {
    id: "premium-1",
    name: "Poha Chivda",
    slug: "poha-chivda",
    description: "Puffed Poha Chivda – the perfect tea-time snack. Light, crispy, and loaded with peanuts, curry leaves, and Konkani spices.",
    category: "Premium Products",
    categorySlug: "premium-products",
    price: 99,
    originalPrice: null,
    weight: "200g",
    image: "/thalipeeth.jpg",
    badge: "Bestseller",
    inStock: true,
    stockCount: 20,
    weeklyPurchases: 130,
    rating: 4.7,
    reviewCount: 96,
    reviews: [reviewPool[0], reviewPool[4], reviewPool[6]],
    tags: ["poha", "chivda", "snack", "teatime", "naikancho"],
    frequentlyBoughtWith: ["premium-2", "chikki-1"],
    isVeg: true,
  },
  {
    id: "premium-2",
    name: "Thin Poha Chivda",
    slug: "thin-poha-chivda",
    description: "Extra-thin poha chivda with a delicate crunch. A lighter variant of the classic Naikancho chivda.",
    category: "Premium Products",
    categorySlug: "premium-products",
    price: 110,
    originalPrice: null,
    weight: "200g",
    image: "/thalipeeth.jpg",
    badge: "New",
    inStock: true,
    stockCount: 15,
    weeklyPurchases: 45,
    rating: 4.5,
    reviewCount: 18,
    reviews: [reviewPool[6], reviewPool[9]],
    tags: ["thin poha", "chivda", "snack", "light", "naikancho"],
    frequentlyBoughtWith: ["premium-1", "chikki-2"],
    isVeg: true,
  },

  // ── Extra products to hit ~30 SKUs ──
  {
    id: "masala-6",
    name: "Kolhapuri Masala",
    slug: "kolhapuri-masala",
    description: "Extra-hot Kolhapuri masala for fiery curries. Not for the faint-hearted!",
    category: "Masala",
    categorySlug: "masala",
    price: 85,
    originalPrice: null,
    weight: "100g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 28,
    weeklyPurchases: 35,
    rating: 4.2,
    reviewCount: 15,
    reviews: [reviewPool[3], reviewPool[5]],
    tags: ["kolhapuri", "hot", "fiery", "masala"],
    frequentlyBoughtWith: ["masala-3", "masala-4"],
    isVeg: true,
  },
  {
    id: "pickle-6",
    name: "Aaswad Mitha Paan",
    slug: "aaswad-mitha-paan",
    description: "Sweet betel leaf preparation with gulkand and dry fruits. A refreshing mouth freshener.",
    category: "Pickles",
    categorySlug: "pickles",
    price: 0,
    originalPrice: null,
    weight: "100g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 50,
    weeklyPurchases: 25,
    rating: 4.0,
    reviewCount: 8,
    reviews: [reviewPool[7]],
    tags: ["paan", "mouth freshener", "sweet"],
    frequentlyBoughtWith: ["pickle-1"],
    isVeg: true,
  },
  {
    id: "syrup-3",
    name: "Lemon Ginger Syrup",
    slug: "lemon-ginger-syrup",
    description: "Refreshing lemon ginger syrup, a natural immune booster. Mix with water for an instant healthy drink.",
    category: "Syrup",
    categorySlug: "syrup",
    price: 95,
    originalPrice: null,
    weight: "500ml",
    image: "/festive-treasure-box.jpg",
    badge: "New",
    inStock: true,
    stockCount: 35,
    weeklyPurchases: 28,
    rating: 4.3,
    reviewCount: 10,
    reviews: [reviewPool[6]],
    tags: ["lemon", "ginger", "immune", "drink", "syrup"],
    frequentlyBoughtWith: ["syrup-1", "syrup-2"],
    isVeg: true,
  },
  {
    id: "flour-4",
    name: "Jawari Flour (Jowar)",
    slug: "jawari-flour",
    description: "Gluten-free sorghum flour for bhakri and roti. High fiber and naturally nutritious.",
    category: "Flours",
    categorySlug: "flours",
    price: 65,
    originalPrice: null,
    weight: "500g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 48,
    weeklyPurchases: 40,
    rating: 4.4,
    reviewCount: 25,
    reviews: [reviewPool[1], reviewPool[9]],
    tags: ["jawari", "jowar", "gluten-free", "millet", "flour"],
    frequentlyBoughtWith: ["flour-1", "flour-2"],
    isVeg: true,
  },
  {
    id: "meva-3",
    name: "Kokum Amsul",
    slug: "kokum-amsul",
    description: "Dried kokum rinds for souring curries and making refreshing drinks. A Konkan pantry essential.",
    category: "Konkan Meva",
    categorySlug: "konkan-meva",
    price: 90,
    originalPrice: null,
    weight: "200g",
    image: "/festive-treasure-box.jpg",
    badge: null,
    inStock: true,
    stockCount: 55,
    weeklyPurchases: 42,
    rating: 4.5,
    reviewCount: 30,
    reviews: [reviewPool[4], reviewPool[7]],
    tags: ["kokum", "amsul", "souring", "konkani", "meva"],
    frequentlyBoughtWith: ["syrup-1", "meva-1"],
    isVeg: true,
  },
  {
    id: "gift-1",
    name: "Konkan Festive Treasure Box",
    slug: "konkan-festive-treasure-box",
    description: "A premium assortment of Naik Aaji's finest Chikkis, Goda Masala, Kokum Syrup, and special Poha Chivda. Perfect for corporate gifting or festive occasions.",
    category: "Gift Boxes",
    categorySlug: "gift",
    price: 850,
    originalPrice: 1100,
    weight: "1.2kg",
    image: "/festive-treasure-box.jpg",
    badge: "Bestseller",
    inStock: true,
    stockCount: 15,
    weeklyPurchases: 25,
    rating: 4.8,
    reviewCount: 12,
    reviews: [reviewPool[0], reviewPool[1]],
    tags: ["gift", "festive", "premium", "combo", "box", "chikki"],
    frequentlyBoughtWith: ["gift-2"],
    isVeg: true,
  },
  {
    id: "gift-2",
    name: "Naik's Pickle & Papad Hamper",
    slug: "pickle-papad-hamper",
    description: "The ultimate savory combo in a beautifully crafted wooden box. Includes Mango Pickle, Mixed Veg Pickle, and 3 varieties of traditional Maharashtrian papads.",
    category: "Gift Boxes",
    categorySlug: "gift",
    price: 550,
    originalPrice: 650,
    weight: "800g",
    image: "/pickle-papad-hamper.jpg",
    badge: "Sale",
    inStock: true,
    stockCount: 8,
    weeklyPurchases: 10,
    rating: 4.6,
    reviewCount: 8,
    reviews: [reviewPool[2]],
    tags: ["gift", "hamper", "pickles", "papad", "box", "savory"],
    frequentlyBoughtWith: ["gift-1"],
    isVeg: true,
  },
];

// ─── Bundles ──────────────────────────────────────────────────────────────────

export const bundles: Bundle[] = [
  {
    id: "bundle-1",
    name: "Pickle Party Pack",
    description: "3 bestselling pickles at 10% off! Perfect combo for every meal.",
    productIds: ["pickle-1", "pickle-2", "pickle-4"],
    discountPercent: 10,
    badge: "Save 10%",
  },
  {
    id: "bundle-2",
    name: "Masala Kitchen Essentials",
    description: "Goda + Kala + Malvani masala trio. Stock your kitchen at 12% off.",
    productIds: ["masala-2", "masala-3", "masala-4"],
    discountPercent: 12,
    badge: "Save 12%",
  },
  {
    id: "bundle-3",
    name: "Healthy Snack Box",
    description: "Coconut Chikki + Peanut Chikki + Poha Chivda. A guilt-free treat bundle.",
    productIds: ["chikki-1", "chikki-2", "premium-1"],
    discountPercent: 8,
    badge: "Save 8%",
  },
  {
    id: "bundle-4",
    name: "Konkan Summer Coolers",
    description: "Kokum Syrup + Amla Syrup + Lemon Ginger Syrup. Beat the heat naturally!",
    productIds: ["syrup-1", "syrup-2", "syrup-3"],
    discountPercent: 10,
    badge: "Save 10%",
  },
];

// ─── Serviceable Pincodes ────────────────────────────────────────────────────

export const serviceablePincodes: { [key: string]: { city: string; estimatedDays: number } } = {
  // Alibag / Raigad
  "402201": { city: "Alibag", estimatedDays: 1 },
  "402202": { city: "Alibag", estimatedDays: 1 },
  "402203": { city: "Rewas", estimatedDays: 2 },
  "402204": { city: "Pen", estimatedDays: 2 },
  "402206": { city: "Murud", estimatedDays: 2 },
  "402301": { city: "Mahad", estimatedDays: 3 },
  // Mumbai
  "400001": { city: "Mumbai - Fort", estimatedDays: 2 },
  "400002": { city: "Mumbai - Kalbadevi", estimatedDays: 2 },
  "400004": { city: "Mumbai - Girgaon", estimatedDays: 2 },
  "400007": { city: "Mumbai - Grant Road", estimatedDays: 2 },
  "400050": { city: "Mumbai - Bandra", estimatedDays: 2 },
  "400051": { city: "Mumbai - Bandra East", estimatedDays: 2 },
  "400053": { city: "Mumbai - Andheri", estimatedDays: 2 },
  "400058": { city: "Mumbai - Andheri East", estimatedDays: 2 },
  "400069": { city: "Mumbai - Andheri West", estimatedDays: 2 },
  "400076": { city: "Mumbai - Powai", estimatedDays: 2 },
  "400080": { city: "Mumbai - Mulund", estimatedDays: 3 },
  "400086": { city: "Mumbai - Ghatkopar", estimatedDays: 3 },
  "400601": { city: "Thane", estimatedDays: 3 },
  // Pune
  "411001": { city: "Pune", estimatedDays: 3 },
  "411004": { city: "Pune - Camp", estimatedDays: 3 },
  "411006": { city: "Pune - Deccan", estimatedDays: 3 },
  "411038": { city: "Pune - Hinjewadi", estimatedDays: 3 },
  "411057": { city: "Pune - Wakad", estimatedDays: 3 },
  // Navi Mumbai
  "400614": { city: "Navi Mumbai - Panvel", estimatedDays: 2 },
  "400701": { city: "Navi Mumbai - Vashi", estimatedDays: 2 },
  "400706": { city: "Navi Mumbai - Belapur", estimatedDays: 2 },
  // Konkan belt
  "415612": { city: "Ratnagiri", estimatedDays: 3 },
  "416012": { city: "Kolhapur", estimatedDays: 4 },
  "403001": { city: "Goa - Panaji", estimatedDays: 4 },
  "416415": { city: "Sangli", estimatedDays: 4 },
  "431001": { city: "Aurangabad", estimatedDays: 4 },
  "440001": { city: "Nagpur", estimatedDays: 5 },
  // Metro cities
  "110001": { city: "New Delhi", estimatedDays: 5 },
  "560001": { city: "Bangalore", estimatedDays: 5 },
  "500001": { city: "Hyderabad", estimatedDays: 5 },
  "600001": { city: "Chennai", estimatedDays: 6 },
  "700001": { city: "Kolkata", estimatedDays: 6 },
  "380001": { city: "Ahmedabad", estimatedDays: 4 },
};

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}

export function filterProducts(opts: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  isVeg?: boolean;
  sort?: "price-asc" | "price-desc" | "rating" | "popularity" | "newest";
  search?: string;
}): Product[] {
  let result = opts.search ? searchProducts(opts.search) : [...products];

  if (opts.category) {
    result = result.filter((p) => p.categorySlug === opts.category);
  }
  if (opts.minPrice !== undefined) {
    result = result.filter((p) => p.price >= opts.minPrice!);
  }
  if (opts.maxPrice !== undefined) {
    result = result.filter((p) => p.price <= opts.maxPrice!);
  }
  if (opts.inStockOnly) {
    result = result.filter((p) => p.inStock);
  }
  if (opts.isVeg !== undefined) {
    result = result.filter((p) => p.isVeg === opts.isVeg);
  }

  switch (opts.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "popularity":
      result.sort((a, b) => b.weeklyPurchases - a.weeklyPurchases);
      break;
    case "newest":
      result.sort((a, b) => {
        const badgeOrder = { New: 0, Sale: 1, Bestseller: 2, "Sold Out": 3 };
        const aOrder = a.badge ? (badgeOrder[a.badge as keyof typeof badgeOrder] ?? 4) : 4;
        const bOrder = b.badge ? (badgeOrder[b.badge as keyof typeof badgeOrder] ?? 4) : 4;
        return aOrder - bOrder;
      });
      break;
    default:
      result.sort((a, b) => b.weeklyPurchases - a.weeklyPurchases);
  }

  return result;
}

export function checkPincode(pincode: string): {
  serviceable: boolean;
  city?: string;
  estimatedDays?: number;
} {
  const info = serviceablePincodes[pincode];
  if (info) {
    return { serviceable: true, city: info.city, estimatedDays: info.estimatedDays };
  }
  return { serviceable: false };
}

export const FREE_DELIVERY_THRESHOLD = 999;
