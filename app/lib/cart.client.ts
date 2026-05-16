import type { Cart, CartItem } from "./store-types";

const STORAGE_KEY = "ciyp.cart.v1";

function emptyCart(): Cart {
  return { items: [], updatedAt: new Date().toISOString() };
}

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function getCart(): Cart {
  if (!isBrowser()) return emptyCart();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyCart();
    const parsed = JSON.parse(raw) as Cart;
    if (!parsed || !Array.isArray(parsed.items)) return emptyCart();
    return parsed;
  } catch {
    return emptyCart();
  }
}

function saveCart(cart: Cart): Cart {
  if (!isBrowser()) return cart;
  const next: Cart = { ...cart, updatedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("ciyp-cart-change"));
  return next;
}

export function addItem(variantId: string, quantity = 1): Cart {
  const cart = getCart();
  const existing = cart.items.find((i) => i.variantId === variantId);
  let items: CartItem[];
  if (existing) {
    items = cart.items.map((i) =>
      i.variantId === variantId
        ? { ...i, quantity: i.quantity + quantity }
        : i
    );
  } else {
    items = [...cart.items, { variantId, quantity }];
  }
  return saveCart({ ...cart, items });
}

export function setQuantity(variantId: string, quantity: number): Cart {
  const cart = getCart();
  if (quantity <= 0) return removeItem(variantId);
  const items = cart.items.map((i) =>
    i.variantId === variantId ? { ...i, quantity } : i
  );
  return saveCart({ ...cart, items });
}

export function removeItem(variantId: string): Cart {
  const cart = getCart();
  const items = cart.items.filter((i) => i.variantId !== variantId);
  return saveCart({ ...cart, items });
}

export function clearCart(): Cart {
  return saveCart(emptyCart());
}

export function itemCount(cart: Cart): number {
  return cart.items.reduce((sum, i) => sum + i.quantity, 0);
}

export function subscribe(listener: () => void): () => void {
  if (!isBrowser()) return () => {};
  const handler = () => listener();
  window.addEventListener("ciyp-cart-change", handler);
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) listener();
  });
  return () => {
    window.removeEventListener("ciyp-cart-change", handler);
  };
}
