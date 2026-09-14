import React from "react";
import Link from "next/link";
import { recipes } from "@/data/recipes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes | Naik Konkan Foods",
  description: "Cook authentic Konkan recipes with Naik Foods products. Step-by-step guides with one-click ingredient shopping.",
};

export default function RecipesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-[#c77b1f]/10 text-[#c77b1f] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          Cook with Naik Foods
        </span>
        <h1 className="font-serif text-4xl font-bold text-[#2b1b12] mb-3">
          🍛 Authentic Konkan Recipes
        </h1>
        <p className="text-[#5a4636] text-sm max-w-lg mx-auto">
          Traditional recipes from Naik Aaji&apos;s kitchen — each one uses our products for 
          guaranteed authentic taste. Shop ingredients in one click!
        </p>
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => {
          const linkedProducts = recipe.ingredients.filter((i) => i.productId).length;
          return (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.slug}`}
              className="group bg-white rounded-2xl border border-[#d8c9ae]/40 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-[#f3ead7]">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    recipe.isVeg ? "bg-[#4b6b3a] text-white" : "bg-[#8a2e20] text-white"
                  }`}>
                    {recipe.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-[#2b1b12]">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-serif text-lg font-bold text-[#2b1b12] mb-1 group-hover:text-[#c77b1f] transition-colors">
                  {recipe.name}
                </h2>
                <p className="text-xs text-[#5a4636] line-clamp-2 mb-3">
                  {recipe.description}
                </p>

                <div className="flex items-center gap-4 text-[10px] text-[#a89580] mb-3">
                  <span className="flex items-center gap-1">⏱ {recipe.cookTime}</span>
                  <span className="flex items-center gap-1">🍽 {recipe.servings} servings</span>
                  <span className="flex items-center gap-1">📋 {recipe.steps.length} steps</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#c77b1f] font-semibold">
                    🛒 {linkedProducts} products from our store
                  </span>
                  <span className="text-xs text-[#a89580] group-hover:text-[#c77b1f] transition-colors">
                    View Recipe →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
