import Icon from "@/components/ui/icon";

interface HeaderProps {
  page: string;
  setPage: (p: "home" | "catalog" | "cart" | "profile") => void;
  cartCount: number;
}

export default function Header({ page, setPage, cartCount }: HeaderProps) {
  const navItems = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="font-display text-2xl font-light tracking-widest text-foreground hover:opacity-70 transition-opacity"
        >
          FORMA
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id as "home" | "catalog")}
              className={`text-sm tracking-wider transition-colors ${
                page === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setPage("cart")}
            className={`relative flex items-center gap-1 transition-colors ${
              page === "cart" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon name="ShoppingBag" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setPage("profile")}
            className={`transition-colors ${
              page === "profile" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon name="User" size={20} />
          </button>
        </div>
      </div>

      <div className="md:hidden flex border-t border-border">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id as "home" | "catalog")}
            className={`flex-1 py-2 text-xs tracking-wider transition-colors ${
              page === item.id
                ? "text-foreground font-medium bg-secondary"
                : "text-muted-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
