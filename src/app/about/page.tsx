import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Naik Aaji | Naik Foods",
  description: "The story behind Naik Foods — tradition, taste, and Naik Aaji's legacy.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="text-6xl block mb-4">👵🏽</span>
        <h1 className="font-serif text-4xl font-bold text-[#2b1b12] mb-4">The Spirit of Naik Aaji</h1>
        <p className="text-[#5a4636] text-sm max-w-xl mx-auto leading-relaxed">
          Where tradition meets taste, and every dish tells a story.
        </p>
      </div>

      <div className="prose prose-sm max-w-none space-y-6 text-[#5a4636] leading-relaxed">
        <p>
          Welcome to <strong>Naik Foods</strong>, where tradition meets taste, and every dish tells a story. 
          At the heart of our culinary journey lies the indomitable spirit of <strong>Naik Aaji</strong>, a revered 
          figure whose passion for flavor and dedication to quality have shaped the essence of our brand.
        </p>

        <p>
          Rooted in the rich culinary heritage of the Konkan region, Naik Aaji&apos;s recipes have been passed down 
          through generations, preserving the authentic tastes that define Alibag&apos;s food culture. From hand-ground 
          masalas to sun-dried pickles, every product carries the warmth and care of her kitchen.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {[
            { value: "50+", label: "Years of Tradition" },
            { value: "30+", label: "Authentic Products" },
            { value: "1000+", label: "Happy Customers" },
            { value: "100%", label: "Natural Ingredients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-[#f3ead7] rounded-2xl">
              <span className="text-2xl font-bold text-[#c77b1f] block">{stat.value}</span>
              <span className="text-xs text-[#5a4636] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl font-bold text-[#2b1b12]">Our Brands</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#d8c9ae]/40">
            <h3 className="font-serif text-lg font-bold text-[#2b1b12] mb-2">🥥 Konkan Foods</h3>
            <p className="text-sm">
              The original brand — flours, spices, syrups, pickles, and papads made from time-honored 
              Konkani recipes. Every product is a testament to Naik Aaji&apos;s culinary mastery.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#d8c9ae]/40">
            <h3 className="font-serif text-lg font-bold text-[#2b1b12] mb-2">✨ Naikāncho</h3>
            <p className="text-sm">
              The youth-forward brand — premium snack products like Poha Chivda and Chikki with 
              modern packaging and national reach, while staying true to Konkani roots.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/store"
          className="inline-block px-8 py-3.5 bg-[#c77b1f] text-white rounded-xl font-semibold hover:bg-[#a5620f] transition-all hover:shadow-lg text-sm"
        >
          Explore Our Products
        </Link>
      </div>
    </div>
  );
}
