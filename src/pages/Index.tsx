import { useState } from "react";
import Header from "@/components/shop/Header";
import HomePage from "@/components/shop/HomePage";
import CatalogPage from "@/components/shop/CatalogPage";
import CartPage from "@/components/shop/CartPage";
import ProfilePage from "@/components/shop/ProfilePage";
import { CartItem, Product } from "@/components/shop/types";

export default function Index() {
  const [page, setPage] = useState<"home" | "catalog" | "cart" | "profile">("home");
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
    }
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header page={page} setPage={setPage} cartCount={cartCount} />
      <main>
        {page === "home" && <HomePage setPage={setPage} addToCart={addToCart} />}
        {page === "catalog" && <CatalogPage addToCart={addToCart} />}
        {page === "cart" && <CartPage cart={cart} updateQty={updateQty} setPage={setPage} />}
        {page === "profile" && <ProfilePage />}
      </main>
    </div>
  );
}
