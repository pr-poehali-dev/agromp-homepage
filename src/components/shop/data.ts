import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Льняная рубашка",
    price: 4900,
    image: "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/23d01305-3dae-4b23-9760-1dfc63c464d5.jpg",
    category: "Одежда",
    description: "Натуральный лён, свободный крой, идеально для тёплого сезона",
    badge: "Хит"
  },
  {
    id: 2,
    name: "Керамическая ваза",
    price: 3200,
    image: "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/cf54c096-aaa2-4726-97d3-bac2e3fff525.jpg",
    category: "Интерьер",
    description: "Ручная работа, минималистичная форма, матовое покрытие"
  },
  {
    id: 3,
    name: "Арома-свеча",
    price: 1800,
    image: "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/3f18e54b-a9df-4c88-acdf-02a9e8439f7c.jpg",
    category: "Уход",
    description: "Соевый воск, аромат ветивера и сандалового дерева",
    badge: "Новинка"
  },
  {
    id: 4,
    name: "Хлопковый плед",
    price: 5600,
    image: "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/cf54c096-aaa2-4726-97d3-bac2e3fff525.jpg",
    category: "Интерьер",
    description: "100% хлопок, крупная вязка, универсальный серый оттенок"
  },
  {
    id: 5,
    name: "Сыворотка для лица",
    price: 2700,
    image: "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/23d01305-3dae-4b23-9760-1dfc63c464d5.jpg",
    category: "Уход",
    description: "Гиалуроновая кислота и экстракт ромашки, 30 мл"
  },
  {
    id: 6,
    name: "Шерстяной шарф",
    price: 3400,
    image: "https://cdn.poehali.dev/projects/70f83ffb-17f4-47b7-bdcf-e9220a685571/files/3f18e54b-a9df-4c88-acdf-02a9e8439f7c.jpg",
    category: "Одежда",
    description: "Мериносовая шерсть, крупная клетка, 180×50 см",
    badge: "−15%"
  },
];

export const CATEGORIES = ["Все", "Одежда", "Интерьер", "Уход"];
