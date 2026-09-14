import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { RecentlyViewedProvider } from "@/context/RecentlyViewedContext";
import { ToastProvider } from "@/context/ToastContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ToastContainer from "@/components/ToastContainer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Naik Konkan Foods - Authentic Alibag Delicacies | Prototype",
  description:
    "Discover the authentic taste of Konkan with Naik Konkan Foods. Premium, traditionally-made Konkan delicacies — spices, pickles, chikki, and more. Prototype with improved search, filters, cart UX, and more.",
  keywords: "konkan food, alibag, pickles, masala, chikki, naik foods, maharashtrian food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              <RecentlyViewedProvider>
                <Header />
                <CartDrawer />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <WhatsAppButton />
                <ToastContainer />
              </RecentlyViewedProvider>
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
