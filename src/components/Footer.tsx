import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2b1b12] text-[#d8c9ae]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥥</span>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#f3ead7]">Naik Konkan Foods</h2>
                <p className="text-[10px] tracking-widest uppercase text-[#a89580]">Authentic Alibag Delicacies</p>
              </div>
            </div>
            <p className="text-sm text-[#a89580] leading-relaxed">
              Discover the authentic taste of Konkan. Premium, traditionally-made delicacies from Alibag, Maharashtra.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/naikkonkanfoodbazar" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#5a4636]/30 rounded-lg hover:bg-[#c77b1f]/30 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/konkanfoodbazar/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#5a4636]/30 rounded-lg hover:bg-[#c77b1f]/30 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-sm text-[#f3ead7] mb-3 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              {["Masala", "Pickles", "Chikki", "Flours", "Papad", "Syrup", "Dry Fish Bazar"].map((cat) => (
                <li key={cat}>
                  <Link href={`/store?category=${cat.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-[#a89580] hover:text-[#c77b1f] transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-sm text-[#f3ead7] mb-3 uppercase tracking-wider">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[#a89580] hover:text-[#c77b1f] transition-colors">About Naik Aaji</Link></li>
              <li><a href="https://www.naikfoods.com/pages/contact" className="text-sm text-[#a89580] hover:text-[#c77b1f] transition-colors">Contact Us</a></li>
              <li><a href="https://www.naikfoods.com/policies/refund-policy" className="text-sm text-[#a89580] hover:text-[#c77b1f] transition-colors">Refund Policy</a></li>
              <li><a href="https://www.naikfoods.com/policies/privacy-policy" className="text-sm text-[#a89580] hover:text-[#c77b1f] transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.naikfoods.com/policies/terms-of-service" className="text-sm text-[#a89580] hover:text-[#c77b1f] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm text-[#f3ead7] mb-3 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-[#a89580]">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Alibag, Raigad District, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🌐</span>
                <a href="https://www.naikfoods.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c77b1f] transition-colors">
                  www.naikfoods.com
                </a>
              </li>
            </ul>

            <div className="mt-4 p-3 bg-[#5a4636]/20 rounded-lg">
              <p className="text-xs text-[#d8c9ae] font-medium mb-1">🛡️ Secure Payments</p>
              <p className="text-[10px] text-[#a89580]">Razorpay • UPI • Cards • Net Banking</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#5a4636]/30 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#a89580]">
          <p>© 2026 Naik Konkan Foods. All rights reserved.</p>
          <p>
            Prototype built for{" "}
            <span className="text-[#c77b1f] font-medium">Bits and Volts Pvt. Ltd.</span>{" "}
            — Full Stack MERN Intern Task
          </p>
        </div>
      </div>
    </footer>
  );
}
