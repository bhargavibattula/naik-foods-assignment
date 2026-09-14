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
      <div className="bg-[#2b1b12] text-[#f3ead7] text-xs py-1.5 px-4 tracking-wide flex justify-between items-center max-w-full">
        <div className="hidden sm:flex items-center gap-3">
          <a href="https://www.instagram.com/naikfoods_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c77b1f] transition-colors flex items-center gap-1.5" aria-label="Instagram">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            <span className="font-medium">Follow Us</span>
          </a>
        </div>
        
        <div className="flex-1 text-center">
          🚚 Free delivery on orders above ₹999 &nbsp;|&nbsp; 🌿 100% Authentic flavors from Vidarbha & Konkan
        </div>
        
        <div className="hidden sm:flex items-center">
          <a href="tel:+919730046247" className="flex items-center gap-1.5 hover:text-[#c77b1f] transition-colors bg-[#c77b1f]/20 px-3 py-0.5 rounded-full border border-[#c77b1f]/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-bold">Call to Book</span>
          </a>
        </div>
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
                Naik Foods
              </h1>
              <p className="text-[10px] text-[#5a4636] tracking-widest uppercase -mt-0.5">
                Authentic flavors from Vidarbha & Konkan
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
