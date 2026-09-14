import React from "react";
import Link from "next/link";
import { products, categories, bundles, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BundleCard from "@/components/BundleCard";
import RecentlyViewed from "@/components/RecentlyViewed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naik Konkan Foods - Authentic Alibag Delicacies",
  description: "Authentic spices, pickles, and snacks from the heart of Konkan.",
};

export default function HomePage() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller").slice(0, 4);
  const konkanBrands = getProductsByCategory("masala-and-spices").slice(0, 4);

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#2b1b12]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/hero-bg.jpg"
            alt="Spices background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-[#c77b1f] text-white text-xs font-bold rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-[#c77b1f]/30">
            Since 1970 • Alibag, Maharashtra
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#fbf6ec] mb-6 drop-shadow-md">
            The True Taste of <span className="text-[#c77b1f]">Konkan</span>
          </h1>
          <p className="text-lg md:text-xl text-[#d8c9ae] mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            From Naik Aaji's kitchen to your table. Hand-pounded masalas, sun-dried pickles, and authentic delicacies made with love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/store"
              className="w-full sm:w-auto px-8 py-4 bg-[#c77b1f] text-white rounded-full font-bold hover:bg-[#a5620f] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#c77b1f]/20"
            >
              Shop All Products
            </Link>
            <Link
              href="/recipes"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20 hover:scale-105 active:scale-95"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-[#f3ead7] border-y border-[#d8c9ae] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-[#5a4636]">
          <span className="flex items-center gap-2"><span className="text-xl">🌿</span> 100% Natural</span>
          <span className="flex items-center gap-2"><span className="text-xl">☀️</span> Sun-dried</span>
          <span className="flex items-center gap-2"><span className="text-xl">👩🏽‍🍳</span> Naik Aaji's Recipe</span>
          <span className="flex items-center gap-2"><span className="text-xl">🇮🇳</span> Made in Alibag</span>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl font-bold text-[#2b1b12] mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/store?category=${cat.slug}`}
              className="group flex flex-col items-center p-6 bg-white rounded-3xl border border-[#d8c9ae]/40 hover:border-[#c77b1f] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#f3ead7] flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {cat.emoji}
              </div>
              <h3 className="font-semibold text-sm text-[#2b1b12] text-center group-hover:text-[#c77b1f] transition-colors">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-[#f3ead7] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#2b1b12] mb-2">Most Loved</h2>
              <p className="text-[#5a4636]">Customer favorites that fly off the shelves</p>
            </div>
            <Link href="/store" className="text-[#c77b1f] font-semibold hover:underline hidden sm:block">
              View All Bestsellers →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link href="/store" className="block sm:hidden text-[#c77b1f] font-semibold text-center mt-6">
            View All Bestsellers →
          </Link>
        </div>
      </section>

      {/* Festive Banner (New WOW Feature) */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#8a2e20] to-[#c77b1f] p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-lg">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider mb-4 border border-white/30">
                FESTIVE SPECIAL
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Gifting Made Sweet</h2>
              <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
                Curated boxes of authentic Konkan sweets, premium dry fruits, and chikki for the upcoming festive season. Corporate gifting available.
              </p>
              <Link
                href="/store?search=gift"
                className="inline-block px-6 py-3 bg-white text-[#8a2e20] rounded-xl font-bold hover:bg-[#f3ead7] transition-colors shadow-lg"
              >
                Explore Gift Boxes
              </Link>
            </div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse-subtle" />
              <img
                src="/gift-banner.jpg"
                alt="Festive Gifting"
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bundles/Combos */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-[#d8c9ae]/40">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2b1b12] mb-2">Combo Offers</h2>
            <p className="text-[#5a4636]">Buy together and save up to 15%</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BundleCard bundle={bundles[0]} />
          <BundleCard bundle={bundles[1]} />
        </div>
      </section>
      
      {/* Recently Viewed */}
      <RecentlyViewed />
    </div>
  );
}
