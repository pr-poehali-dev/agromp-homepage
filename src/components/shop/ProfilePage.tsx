import { useState } from "react";
import Icon from "@/components/ui/icon";

const ORDERS = [
  { id: "ORD-2841", date: "12 апр 2024", status: "Доставлен", total: 8700, items: 2 },
  { id: "ORD-2790", date: "3 мар 2024", status: "Доставлен", total: 4900, items: 1 },
];

const TABS = ["Профиль", "Заказы", "Избранное"];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Профиль");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">АККАУНТ</p>
          <h1 className="font-display text-5xl font-light">Войти</h1>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}
          className="space-y-4"
        >
          <div>
            <label className="text-xs tracking-wider text-muted-foreground block mb-2">EMAIL</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          <div>
            <label className="text-xs tracking-wider text-muted-foreground block mb-2">ПАРОЛЬ</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-background py-3.5 text-sm tracking-widest hover:bg-foreground/80 transition-colors mt-2"
          >
            ВОЙТИ
          </button>

          <div className="text-center pt-2">
            <button type="button" className="text-xs text-muted-foreground hover:text-foreground tracking-wider transition-colors">
              Создать аккаунт
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10 flex items-start justify-between">
        <div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">АККАУНТ</p>
          <h1 className="font-display text-5xl font-light">Профиль</h1>
        </div>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="text-xs text-muted-foreground hover:text-foreground tracking-wider transition-colors flex items-center gap-2 mt-4"
        >
          <Icon name="LogOut" size={14} />
          Выйти
        </button>
      </div>

      <div className="flex gap-0 border-b border-border mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-xs tracking-wider transition-colors ${
              activeTab === tab
                ? "border-b-2 border-foreground text-foreground -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "Профиль" && (
        <div className="max-w-md space-y-5">
          {[
            { label: "ИМЯ", value: "Александра Иванова", type: "text" },
            { label: "EMAIL", value: "a.ivanova@mail.ru", type: "email" },
            { label: "ТЕЛЕФОН", value: "+7 (999) 123-45-67", type: "tel" },
          ].map((field) => (
            <div key={field.label}>
              <label className="text-xs tracking-wider text-muted-foreground block mb-2">{field.label}</label>
              <input
                type={field.type}
                defaultValue={field.value}
                className="w-full border border-border px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          ))}
          <button className="bg-foreground text-background px-8 py-3 text-xs tracking-widest hover:bg-foreground/80 transition-colors">
            СОХРАНИТЬ
          </button>
        </div>
      )}

      {activeTab === "Заказы" && (
        <div className="space-y-0">
          {ORDERS.map((order, idx) => (
            <div key={order.id}>
              {idx > 0 && <div className="border-t border-border" />}
              <div className="flex items-center justify-between py-5">
                <div>
                  <p className="font-medium text-sm mb-1">{order.id}</p>
                  <p className="text-xs text-muted-foreground">{order.date} · {order.items} товара</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium mb-1">{order.total.toLocaleString("ru-RU")} ₽</p>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5">{order.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Избранное" && (
        <div className="text-center py-12">
          <Icon name="Heart" size={40} className="mx-auto text-muted-foreground/30 mb-4" />
          <p className="font-display text-2xl font-light mb-2">Пусто</p>
          <p className="text-sm text-muted-foreground">Сохраняйте понравившиеся товары</p>
        </div>
      )}
    </div>
  );
}
