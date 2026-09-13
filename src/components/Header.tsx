"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/store?search=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { href: "/store?category=masala", label: "Masala" },
    { href: "/store?category=pickles", label: "Pickles" },
    { href: "/store?category=chikki", label: "Chikki" },
    { href: "/store?category=flours", label: "Flours" },
    { href: "/store?category=papad", label: "Papad" },
    { href: "/store?category=syrup", label: "Syrup" },
    { href: "/store?category=dry-fish-bazar", label: "Dry Fish" },
    { href: "/recipes", label: "Recipes 🥘" },
    { href: "/store", label: "All Products" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#2b1b12] text-[#f3ead7] text-xs py-1.5 text-center tracking-wide">
        🚚 Free delivery on orders above ₹999 &nbsp;|&nbsp; 🌿 100% Authentic Konkan Products
      </div>

      <header className="sticky top-0 z-50 bg-[#fbf6ec]/95 backdrop-blur-md border-b border-[#d8c9ae] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#2b1b12] hover:text-[#c77b1f] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🥥</span>
            <div>
              <h1 className="font-serif text-xl font-bold text-[#2b1b12] leading-tight tracking-tight">
                Naik Konkan Foods
              </h1>
              <p className="text-[10px] text-[#5a4636] tracking-widest uppercase -mt-0.5">
                Authentic Alibag Delicacies
              </p>
            </div>
          </Link>

          {/* Loyalty / Rewards (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#c77b1f]/10 rounded-full border border-[#c77b1f]/20 cursor-pointer hover:bg-[#c77b1f]/20 transition-colors">
            <span className="text-lg">🪙</span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#5a4636] uppercase leading-none">Naik Coins</span>
              <span className="text-sm font-bold text-[#c77b1f] leading-none">450 pts</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[#5a4636] hover:text-[#c77b1f] hover:bg-[#c77b1f]/5 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#5a4636] hover:text-[#c77b1f] hover:bg-[#c77b1f]/5 rounded-lg transition-all"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#5a4636] hover:text-[#c77b1f] hover:bg-[#c77b1f]/5 rounded-lg transition-all"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#c77b1f] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-once">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar - expandable */}
        {searchOpen && (
          <div className="border-t border-[#d8c9ae] bg-[#f3ead7]">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto px-4 py-3 flex gap-2">
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for masala, pickles, chikki, papad..."
                className="flex-1 px-4 py-2.5 rounded-lg border border-[#d8c9ae] bg-white text-[#2b1b12] placeholder-[#a89580] focus:outline-none focus:ring-2 focus:ring-[#c77b1f] focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#c77b1f] text-white rounded-lg hover:bg-[#a5620f] transition-colors text-sm font-medium"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#d8c9ae] bg-[#fbf6ec] px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm text-[#5a4636] hover:text-[#c77b1f] hover:bg-[#c77b1f]/5 rounded-lg transition-all font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
