import { CartItem } from "./types";
import Icon from "@/components/ui/icon";

interface CartPageProps {
  cart: CartItem[];
  updateQty: (id: number, qty: number) => void;
  setPage: (p: "home" | "catalog" | "cart" | "profile") => void;
}

export default function CartPage({ cart, updateQty, setPage }: CartPageProps) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const deliveryFee = total > 5000 ? 0 : 390;

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="font-display text-6xl font-light text-muted-foreground/30 mb-6">0</p>
        <p className="font-display text-2xl font-light mb-3">Корзина пуста</p>
        <p className="text-sm text-muted-foreground mb-8">Добавьте товары, чтобы оформить заказ</p>
        <button
          onClick={() => setPage("catalog")}
          className="bg-foreground text-background px-8 py-3 text-sm tracking-widest hover:bg-foreground/80 transition-colors"
        >
          ПЕРЕЙТИ В КАТАЛОГ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">МОЙ ЗАКАЗ</p>
        <h1 className="font-display text-5xl font-light">Корзина</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-0">
          {cart.map((item, idx) => (
            <div key={item.id}>
              {idx > 0 && <div className="border-t border-border" />}
              <div className="flex gap-5 py-6">
                <div className="w-24 h-32 bg-muted overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground tracking-wider mb-1">{item.category}</p>
                  <h3 className="font-display text-xl font-light mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-4">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-medium">{(item.price * item.qty).toLocaleString("ru-RU")} ₽</span>
                      <button
                        onClick={() => updateQty(item.id, 0)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-secondary p-6 space-y-4 sticky top-24">
            <h2 className="font-display text-xl font-light mb-6">Итого</h2>

            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Товары ({cart.reduce((s, i) => s + i.qty, 0)})</span>
              <span>{total.toLocaleString("ru-RU")} ₽</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Доставка</span>
              <span>{deliveryFee === 0 ? <span className="text-green-600">Бесплатно</span> : `${deliveryFee} ₽`}</span>
            </div>

            {deliveryFee > 0 && (
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                Бесплатная доставка от 5 000 ₽ — ещё {(5000 - total).toLocaleString("ru-RU")} ₽
              </p>
            )}

            <div className="border-t border-border pt-4 flex justify-between">
              <span className="font-medium">К оплате</span>
              <span className="font-medium">{(total + deliveryFee).toLocaleString("ru-RU")} ₽</span>
            </div>

            <button className="w-full bg-foreground text-background py-3.5 text-sm tracking-widest hover:bg-foreground/80 transition-colors mt-2">
              ОФОРМИТЬ ЗАКАЗ
            </button>

            <button
              onClick={() => setPage("catalog")}
              className="w-full text-xs text-muted-foreground hover:text-foreground tracking-wider transition-colors text-center"
            >
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
