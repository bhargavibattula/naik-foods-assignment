"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FREE_DELIVERY_THRESHOLD, getProductById } from "@/data/products";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    amountToFreeDelivery,
    hasFreeDelivery,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  // Cross-sell: gather first 3 unique "frequently bought with" items not already in cart
  const cartProductIds = new Set(items.map((i) => i.product.id));
  const crossSellIds = new Set<string>();
  items.forEach((item) => {
    item.product.frequentlyBoughtWith.forEach((id) => {
      if (!cartProductIds.has(id) && crossSellIds.size < 3) {
        crossSellIds.add(id);
      }
    });
  });
  const crossSellProducts = Array.from(crossSellIds)
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#fbf6ec] z-[101] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#d8c9ae]">
          <h2 className="font-serif text-lg font-bold text-[#2b1b12]">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 hover:bg-[#d8c9ae]/40 rounded-lg transition-colors text-[#5a4636]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free delivery progress */}
        <div className="px-5 py-3 bg-[#f3ead7] border-b border-[#d8c9ae]">
          {hasFreeDelivery ? (
            <div className="flex items-center gap-2 text-[#4b6b3a]">
              <span className="text-lg">🎉</span>
              <span className="text-sm font-semibold">You&apos;ve unlocked FREE delivery!</span>
            </div>
          ) : (
            <>
              <p className="text-xs text-[#5a4636] mb-1.5">
                Add <span className="font-bold text-[#c77b1f]">₹{amountToFreeDelivery}</span> more for{" "}
                <span className="font-semibold text-[#4b6b3a]">FREE delivery</span>
              </p>
              <div className="w-full h-2 bg-[#d8c9ae] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c77b1f] to-[#4b6b3a] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[10px] text-[#a89580] mt-1 text-right">
                ₹{subtotal} / ₹{FREE_DELIVERY_THRESHOLD}
              </p>
            </>
          )}
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#a89580]">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-sm font-medium">Your cart is empty</p>
              <Link
                href="/store"
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-5 py-2 bg-[#c77b1f] text-white rounded-lg hover:bg-[#a5620f] transition-colors text-sm"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 p-3 bg-white rounded-xl border border-[#d8c9ae]/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#f3ead7] shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#2b1b12] truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-[#a89580]">{item.product.weight}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-1.5 bg-[#f3ead7] rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#5a4636] hover:text-[#c77b1f] transition-colors rounded-l-lg hover:bg-[#d8c9ae]/40"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-[#2b1b12]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#5a4636] hover:text-[#c77b1f] transition-colors rounded-r-lg hover:bg-[#d8c9ae]/40"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-bold text-[#2b1b12]">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="self-start p-1 text-[#a89580] hover:text-[#8a2e20] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}

          {/* Cross-sell */}
          {crossSellProducts.length > 0 && items.length > 0 && (
            <div className="pt-3 border-t border-[#d8c9ae]">
              <h3 className="text-xs font-bold text-[#5a4636] uppercase tracking-wider mb-2">
                Frequently bought together
              </h3>
              <div className="space-y-2">
                {crossSellProducts.map((product) => product && (
                  <CrossSellItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#d8c9ae] px-5 py-4 space-y-3 bg-white/50">
            <div className="flex justify-between text-sm">
              <span className="text-[#5a4636]">Subtotal</span>
              <span className="font-bold text-[#2b1b12] text-lg">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-xs text-[#a89580]">
              <span>Delivery</span>
              <span className={hasFreeDelivery ? "text-[#4b6b3a] font-semibold" : ""}>
                {hasFreeDelivery ? "FREE" : "Calculated at checkout"}
              </span>
            </div>
            <button className="w-full py-3 bg-[#c77b1f] text-white rounded-xl font-semibold hover:bg-[#a5620f] transition-all hover:shadow-lg active:scale-[0.98] text-sm">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2 text-xs text-[#a89580] hover:text-[#8a2e20] transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CrossSellItem({ product }: { product: any }) {
  const { addItem } = useCart();
  return (
    <div className="flex items-center gap-2 p-2 bg-white/60 rounded-lg border border-[#d8c9ae]/30">
      <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-[#2b1b12] truncate">{product.name}</p>
        <p className="text-xs text-[#a89580]">₹{product.price}</p>
      </div>
      <button
        onClick={() => addItem(product)}
        className="text-[10px] px-2.5 py-1 bg-[#c77b1f]/10 text-[#c77b1f] rounded-md font-semibold hover:bg-[#c77b1f] hover:text-white transition-all whitespace-nowrap"
      >
        + Add
      </button>
    </div>
  );
}
