
import products from '../data/products.json';

export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  short: string;
  description: string;
};

export function listProducts(): Product[] {
  return products as Product[];
}

export function getProduct(id: string): Product | undefined {
  return (products as Product[]).find(p => p.id === id);
}

// cart helpers with localStorage
export type CartItem = { id: string; qty: number; };
const KEY = 'cart_v1';
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
export function setCart(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(items));
}
export function addToCart(id: string, qty = 1) {
  const items = getCart();
  const idx = items.findIndex(i => i.id === id);
  if (idx >= 0) items[idx].qty += qty;
  else items.push({ id, qty });
  setCart(items);
}
export function removeFromCart(id: string) {
  const items = getCart().filter(i => i.id !== id);
  setCart(items);
}
export function total(items: CartItem[]) {
  const map = new Map(listProducts().map(p => [p.id, p]));
  return items.reduce((acc, it) => {
    const p = map.get(it.id);
    return acc + (p ? p.price * it.qty : 0);
  }, 0);
}
