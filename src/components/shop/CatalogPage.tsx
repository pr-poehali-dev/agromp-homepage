import { useState } from "react";
import { Product } from "./types";
import { PRODUCTS, CATEGORIES } from "./data";
import ProductCard from "./ProductCard";

interface CatalogPageProps {
  addToCart: (p: Product) => void;
}

export default function CatalogPage({ addToCart }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [sortBy, setSortBy] = useState("default");

  const filtered = PRODUCTS
    .filter((p) => activeCategory === "Все" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">МАГАЗИН</p>
        <h1 className="font-display text-5xl font-light">Каталог</h1>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs tracking-wider text-muted-foreground bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-foreground cursor-pointer"
        >
          <option value="default">По умолчанию</option>
          <option value="price-asc">Цена: по возрастанию</option>
          <option value="price-desc">Цена: по убыванию</option>
        </select>
      </div>

      <p className="text-sm text-muted-foreground mb-8">{filtered.length} товаров</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
