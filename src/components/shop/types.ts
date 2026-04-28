export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  badge?: string;
}

export interface CartItem extends Product {
  qty: number;
}
