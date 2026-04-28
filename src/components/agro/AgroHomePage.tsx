import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/a8f7276a-5a76-4152-8488-8515ca14d2b0.jpg";
const FARMER_PHOTO = "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/bb907058-9c89-4114-9ec0-aab4750460c9.jpg";

const CATEGORIES = [
  { icon: "🥕", label: "Овощи" },
  { icon: "🍎", label: "Фрукты" },
  { icon: "🥩", label: "Мясо" },
  { icon: "🥛", label: "Молочка" },
  { icon: "🌾", label: "Зерно" },
  { icon: "🚜", label: "Техника" },
];

const ADVANTAGES = [
  { icon: "Users", title: "Готовая аудитория", desc: "Тысячи покупателей уже ищут фермерские товары на платформе" },
  { icon: "Zap", title: "Быстрый старт за 24ч", desc: "Открываем витрину в течение суток после оплаты" },
  { icon: "BadgeCheck", title: "Без скрытых комиссий", desc: "Разовая оплата — никаких процентов с продаж" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Личный менеджер всегда на связи в рабочее время" },
];

const STEPS = [
  { num: "01", title: "Выбери тариф", desc: "Подберите подходящий план под ваш объём товаров" },
  { num: "02", title: "Оплати разово", desc: "Одна оплата без подписок и ежемесячных списаний" },
  { num: "03", title: "Отправь данные", desc: "Заполните форму — я открою личный кабинет за 24 часа" },
  { num: "04", title: "Загружай товары", desc: "Добавляйте продукты и начинайте получать заказы" },
];

const TARIFFS = [
  {
    name: "Базовый",
    price: "3 000",
    badge: null,
    items: "10 товаров",
    features: ["10 позиций в каталоге", "Email-поддержка", "Личный кабинет", "Статистика продаж"],
    highlighted: false,
  },
  {
    name: "Оптимальный",
    price: "6 000",
    badge: "🔥 Популярный",
    items: "50 товаров",
    features: ["50 позиций в каталоге", "Приоритетная поддержка", "Продвижение в каталоге", "Личный кабинет", "Статистика и аналитика"],
    highlighted: true,
  },
  {
    name: "VIP",
    price: "12 000",
    badge: null,
    items: "Безлимит товаров",
    features: ["Безлимит позиций", "Персональный менеджер", "Место на главном слайде", "Приоритетная поддержка", "Расширенная аналитика"],
    highlighted: false,
  },
];

const PARTNERS = ["ЭкоФерма Кубань", "АгроСад Белгород", "Молочный двор", "Зерновой союз"];

export default function AgroHomePage() {
  const [activeTab, setActiveTab] = useState<"farmer" | "buyer">("farmer");
  const [showSticky, setShowSticky] = useState(false);
  const tariffsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTariffs = () => {
    tariffsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBuyTariff = (name: string) => {
    alert(`Спасибо! Вы выбрали тариф «${name}». Я свяжусь с вами для открытия кабинета.`);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1F1F1F]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl font-black text-[#21b82c]">АгроМП</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {["Каталог", "О сервисе", "Статьи"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-[#21b82c] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-gray-500 hover:text-[#21b82c] transition-colors p-1">
              <Icon name="ShoppingCart" size={22} />
            </button>
            <button className="text-gray-500 hover:text-[#21b82c] transition-colors p-1">
              <Icon name="User" size={22} />
            </button>
            <button className="btn-outline-green px-4 py-2 text-sm hidden sm:block">
              Стать продавцом
            </button>
          </div>
        </div>
      </header>

      {/* HERO WITH TABS */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Ферма" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            {/* Tabs */}
            <div className="flex gap-2 mb-10">
              {[
                { id: "farmer", label: "🌱 Я фермер" },
                { id: "buyer", label: "🛒 Я покупатель" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "farmer" | "buyer")}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#21b82c] text-white shadow-lg shadow-green-500/30"
                      : "bg-white/20 text-white backdrop-blur hover:bg-white/30"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "farmer" && (
              <div className="animate-slide-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
                  Вывозите урожай<br />
                  <span className="text-[#21b82c]">без посредников</span><br />
                  от 3 000 ₽
                </h1>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Разместите товары на фермерской витрине.<br />
                  Разовая оплата, без ежемесячных подписок.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  {["✅ Безлимит покупателей", "✅ Вы ставите цену", "✅ Юридическая защита"].map((utp) => (
                    <span key={utp} className="bg-white/15 backdrop-blur text-white text-sm px-4 py-2 rounded-full font-medium">
                      {utp}
                    </span>
                  ))}
                </div>

                <button onClick={scrollToTariffs} className="btn-green px-8 py-4 text-base inline-flex items-center gap-2">
                  Выбрать тариф
                  <Icon name="ArrowRight" size={18} />
                </button>
              </div>
            )}

            {activeTab === "buyer" && (
              <div className="animate-slide-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
                  Свежие продукты<br />
                  <span className="text-[#21b82c]">от фермера к столу</span>
                </h1>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Напрямую от проверенных фермеров.<br />
                  Никаких лишних наценок и посредников.
                </p>
                <button className="btn-green px-8 py-4 text-base inline-flex items-center gap-2">
                  Перейти в каталог
                  <Icon name="ArrowRight" size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[#21b82c] text-sm font-semibold uppercase tracking-widest">Почему АгроМП</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Преимущества для продавца</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv) => (
              <div key={adv.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#21b82c]/20 transition-all group">
                <div className="w-12 h-12 bg-[#e8f9e9] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#21b82c] transition-colors">
                  <Icon name={adv.icon} size={22} className="text-[#21b82c] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-base mb-2">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="py-20 bg-[#f8fdf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[#21b82c] text-sm font-semibold uppercase tracking-widest">Просто и быстро</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Как начать продавать</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 h-full">
                  <div className="text-5xl font-black text-[#21b82c]/15 mb-3">{step.num}</div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 z-10 items-center justify-center w-8 h-8 bg-[#21b82c] text-white rounded-full text-xs font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section ref={tariffsRef} id="tariffs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[#21b82c] text-sm font-semibold uppercase tracking-widest">Тарифы</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Выберите подходящий план</h2>
            <p className="text-gray-500 mt-3">Разовая оплата — никаких ежемесячных списаний</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {TARIFFS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                  t.highlighted
                    ? "bg-[#21b82c] text-white shadow-2xl shadow-green-500/25 scale-105"
                    : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {t.badge}
                  </span>
                )}

                <div className="mb-6">
                  <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${t.highlighted ? "text-white/70" : "text-gray-400"}`}>
                    {t.name}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black">{t.price}</span>
                    <span className={`text-lg mb-1 ${t.highlighted ? "text-white/70" : "text-gray-400"}`}>₽</span>
                  </div>
                  <p className={`text-sm mt-1 font-medium ${t.highlighted ? "text-white/80" : "text-[#21b82c]"}`}>{t.items}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 flex-shrink-0 ${t.highlighted ? "text-white" : "text-[#21b82c]"}`}>✓</span>
                      <span className={t.highlighted ? "text-white/90" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyTariff(t.name)}
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all ${
                    t.highlighted
                      ? "bg-white text-[#21b82c] hover:bg-gray-50 hover:shadow-lg"
                      : "btn-green"
                  }`}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-[#f8fdf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 bg-[#21b82c] text-white rounded-full px-6 py-3 mb-6">
              <Icon name="TrendingUp" size={20} />
              <span className="font-black text-2xl">150+</span>
              <span className="font-medium">фермеров уже продают с нами</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {PARTNERS.map((p) => (
              <div key={p} className="bg-white border border-gray-200 rounded-full px-6 py-2.5 text-sm font-medium text-gray-600 shadow-sm">
                {p}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex gap-6 items-start">
              <img
                src={FARMER_PHOTO}
                alt="Мария"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-[#21b82c]"
              />
              <div>
                <div className="flex gap-1 mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-3 italic">
                  "Нашла 20 оптовых покупателей за первый месяц. Простой интерфейс, отзывчивая поддержка. Рекомендую всем фермерам!"
                </p>
                <p className="font-bold text-sm">Мария Соколова</p>
                <p className="text-[#21b82c] text-xs font-medium">Фермер из Краснодара</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#21b82c] text-sm font-semibold uppercase tracking-widest">Ассортимент</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2">Популярные категории</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 hover:border-[#21b82c] hover:shadow-md hover:-translate-y-1 transition-all group bg-white"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-[#21b82c] transition-colors">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F1F1F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-2xl font-black text-[#21b82c]">АгроМП</span>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
              <a href="mailto:support@agromp.ru" className="hover:text-white transition-colors">support@agromp.ru</a>
            </div>
            <p className="text-gray-500 text-sm">© 2024 АгроМП</p>
          </div>
        </div>
      </footer>

      {/* STICKY BAR */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSticky ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-[#1F1F1F] text-white px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl">
          <p className="text-sm font-semibold">🔥 Стань продавцом за 3000 ₽ — Откроем магазин сегодня!</p>
          <button
            onClick={scrollToTariffs}
            className="btn-green px-6 py-2.5 text-sm whitespace-nowrap flex-shrink-0"
          >
            Начать продавать
          </button>
        </div>
      </div>

    </div>
  );
}
