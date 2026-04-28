import { Product } from "./types";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
  addToCart: (p: Product) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="group animate-fade-in">
      <div className="relative overflow-hidden bg-muted aspect-[3/4] mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] tracking-widest px-2 py-0.5 font-medium">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-3 left-3 right-3 bg-background text-foreground text-xs tracking-widest py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-foreground hover:text-background flex items-center justify-center gap-2 border border-border"
        >
          <Icon name="ShoppingBag" size={14} />
          В КОРЗИНУ
        </button>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wider">{product.category}</p>
        <h3 className="font-display text-lg font-light leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
        <p className="font-medium text-sm">{product.price.toLocaleString("ru-RU")} ₽</p>
      </div>
    </div>
  );
}
