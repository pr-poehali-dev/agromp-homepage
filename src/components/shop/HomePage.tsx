import { Product } from "./types";
import { PRODUCTS } from "./data";
import ProductCard from "./ProductCard";

interface HomePageProps {
  setPage: (p: "home" | "catalog" | "cart" | "profile") => void;
  addToCart: (p: Product) => void;
}

export default function HomePage({ setPage, addToCart }: HomePageProps) {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div>
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/3f18e54b-a9df-4c88-acdf-02a9e8439f7c.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-lg animate-slide-up">
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">НОВАЯ КОЛЛЕКЦИЯ</p>
            <h1 className="font-display text-6xl md:text-8xl font-light leading-none mb-6">
              Вещи<br />
              <em>с душой</em>
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Предметы, созданные вручную с вниманием к материалам и деталям
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setPage("catalog")}
                className="bg-foreground text-background px-8 py-3 text-sm tracking-widest hover:bg-foreground/80 transition-colors"
              >
                КАТАЛОГ
              </button>
              <button
                onClick={() => setPage("catalog")}
                className="border border-foreground text-foreground px-8 py-3 text-sm tracking-widest hover:bg-secondary transition-colors"
              >
                НОВИНКИ
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">ИЗБРАННОЕ</p>
            <h2 className="font-display text-4xl font-light">Популярное</h2>
          </div>
          <button
            onClick={() => setPage("catalog")}
            className="text-sm text-muted-foreground hover:text-foreground tracking-wider transition-colors flex items-center gap-2"
          >
            Смотреть всё
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { num: "01", title: "Натуральные материалы", desc: "Только проверенное сырьё и честный состав" },
              { num: "02", title: "Ручная работа", desc: "Каждая вещь сделана с вниманием к деталям" },
              { num: "03", title: "Доставка по России", desc: "Быстро и бережно упакованный заказ" },
            ].map((item) => (
              <div key={item.num} className="space-y-3">
                <p className="font-display text-5xl text-muted-foreground/40 font-light">{item.num}</p>
                <h3 className="font-display text-xl font-light">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl font-light tracking-widest">FORMA</span>
          <p className="text-sm text-muted-foreground">© 2024 — Все права защищены</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Доставка</a>
            <a href="#" className="hover:text-foreground transition-colors">Возврат</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
