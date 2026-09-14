"use client";

import React, { use } from "react";
import Link from "next/link";
import { getRecipeBySlug, getRecipeProducts } from "@/data/recipes";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const recipe = getRecipeBySlug(slug);
  const { addItem } = useCart();
  const { addToast } = useToast();

  if (!recipe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="text-5xl block mb-4">📖</span>
        <h1 className="font-serif text-2xl font-bold text-[#2b1b12] mb-2">Recipe Not Found</h1>
        <Link href="/recipes" className="text-[#c77b1f] text-sm hover:underline">
          ← Browse All Recipes
        </Link>
      </div>
    );
  }

  const linkedProducts = getRecipeProducts(recipe);
  const totalProductCost = linkedProducts.reduce((sum, { product }) => sum + product.price, 0);

  const handleAddAllToCart = () => {
    let added = 0;
    linkedProducts.forEach(({ product }) => {
      if (product.inStock && product.price > 0) {
        addItem(product);
        added++;
      }
    });
    addToast(`${added} ingredient${added > 1 ? "s" : ""} added to cart!`, "success", "🛒");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#a89580] mb-6">
        <Link href="/" className="hover:text-[#c77b1f] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/recipes" className="hover:text-[#c77b1f] transition-colors">Recipes</Link>
        <span>/</span>
        <span className="text-[#2b1b12] font-medium">{recipe.name}</span>
      </nav>

      {/* Hero */}
      <div className="aspect-[16/7] rounded-3xl overflow-hidden mb-8 relative bg-[#f3ead7]">
        <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex gap-2 mb-2">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              recipe.isVeg ? "bg-[#4b6b3a] text-white" : "bg-[#8a2e20] text-white"
            }`}>
              {recipe.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-[#2b1b12]">
              {recipe.difficulty}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-[#2b1b12]">
              {recipe.category}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">{recipe.name}</h1>
        </div>
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap gap-6 mb-8 p-4 bg-[#f3ead7] rounded-2xl">
        {[
          { icon: "⏱", label: "Cook Time", value: recipe.cookTime },
          { icon: "🍽", label: "Servings", value: `${recipe.servings} servings` },
          { icon: "📋", label: "Steps", value: `${recipe.steps.length} steps` },
          { icon: "📊", label: "Difficulty", value: recipe.difficulty },
        ].map((meta) => (
          <div key={meta.label} className="flex items-center gap-2">
            <span className="text-lg">{meta.icon}</span>
            <div>
              <p className="text-[10px] text-[#a89580] uppercase tracking-wider">{meta.label}</p>
              <p className="text-sm font-semibold text-[#2b1b12]">{meta.value}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-[#5a4636] leading-relaxed mb-10">{recipe.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients - sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl border border-[#d8c9ae]/40 p-5">
            <h2 className="font-serif text-lg font-bold text-[#2b1b12] mb-4">Ingredients</h2>

            <ul className="space-y-2.5 mb-5">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 w-4 h-4 rounded border border-[#d8c9ae] shrink-0 flex items-center justify-center text-[8px] text-[#a89580]">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <span className={`${ing.productId ? "text-[#c77b1f] font-medium" : "text-[#2b1b12]"}`}>
                      {ing.name}
                    </span>
                    <span className="text-[#a89580]"> — {ing.quantity}</span>
                    {ing.productId && (
                      <span className="text-[10px] text-[#4b6b3a] ml-1 font-medium">
                        ✓ Available in store
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Shop ingredients CTA */}
            {linkedProducts.length > 0 && (
              <div className="border-t border-[#d8c9ae] pt-4">
                <h3 className="text-xs font-bold text-[#5a4636] uppercase tracking-wider mb-3">
                  🛒 Shop from Our Store ({linkedProducts.length} items)
                </h3>

                <div className="space-y-2 mb-4">
                  {linkedProducts.map(({ ingredient, product }) => (
                    <div key={product.id} className="flex items-center gap-2 p-2 bg-[#f3ead7] rounded-lg">
                      <img src={product.image} alt={product.name} className="w-8 h-8 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-[#2b1b12] truncate">{product.name}</p>
                        <p className="text-[10px] text-[#a89580]">{ingredient.quantity}</p>
                      </div>
                      <span className="text-xs font-bold text-[#2b1b12]">₹{product.price}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-[#5a4636]">Total</span>
                  <span className="font-bold text-[#2b1b12]">₹{totalProductCost}</span>
                </div>

                <button
                  onClick={handleAddAllToCart}
                  className="w-full py-3 bg-[#c77b1f] text-white rounded-xl font-semibold hover:bg-[#a5620f] transition-all hover:shadow-lg active:scale-[0.98] text-sm"
                >
                  Add All Ingredients to Cart
                </button>

                <p className="text-[10px] text-[#a89580] mt-2 text-center">
                  Only store-available items will be added
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Steps - main content */}
        <div className="lg:col-span-2">
          <h2 className="font-serif text-lg font-bold text-[#2b1b12] mb-6">Instructions</h2>

          <div className="space-y-6">
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#c77b1f] text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm text-[#2b1b12] leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          {recipe.tips.length > 0 && (
            <div className="mt-10 p-5 bg-[#c77b1f]/5 rounded-2xl border border-[#c77b1f]/20">
              <h3 className="font-serif text-base font-bold text-[#2b1b12] mb-3 flex items-center gap-2">
                <span>💡</span> Pro Tips from Naik Aaji
              </h3>
              <ul className="space-y-2">
                {recipe.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-[#5a4636] flex items-start gap-2">
                    <span className="text-[#c77b1f] mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#f3ead7] text-[#5a4636] rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* More recipes */}
          <div className="mt-10 pt-6 border-t border-[#d8c9ae]">
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 text-[#c77b1f] text-sm font-semibold hover:text-[#a5620f] transition-colors"
            >
              ← More Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
