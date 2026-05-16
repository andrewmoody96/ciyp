import { useEffect, useState } from "react";
import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import { getPublishedProducts } from "~/.server/products";
import type { Cart, Product, ProductVariant } from "~/lib/store-types";
import CartLineItem from "~/components/Store/CartLineItem";
import { formatCents } from "~/lib/money";
import { clearCart, getCart, subscribe } from "~/lib/cart.client";

export const meta: MetaFunction = () => [{ title: "Cart — CIYP" }];

export async function loader() {
  const products = await getPublishedProducts();
  return { products };
}

type ResolvedLine = {
  product: Product;
  variant: ProductVariant;
  quantity: number;
};

function resolveLines(cart: Cart, products: Product[]): ResolvedLine[] {
  const lines: ResolvedLine[] = [];
  for (const item of cart.items) {
    for (const product of products) {
      const variant = product.variants.find((v) => v.id === item.variantId);
      if (variant) {
        lines.push({ product, variant, quantity: item.quantity });
        break;
      }
    }
  }
  return lines;
}

export default function CartPage() {
  const { products } = useLoaderData<typeof loader>();
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState<Cart>({ items: [], updatedAt: "" });

  useEffect(() => {
    setMounted(true);
    const update = () => setCart(getCart());
    update();
    return subscribe(update);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[100vh] bg-[#0f0f0f] pt-20 pb-16">
        <div className="container px-4">
          <h1 className="font-moda text-4xl text-white">Cart</h1>
          <p className="font-moda text-white/60 mt-4">Loading…</p>
        </div>
      </div>
    );
  }

  const lines = resolveLines(cart, products);
  const subtotal = lines.reduce(
    (sum, l) =>
      sum + (l.variant.priceCents ?? l.product.basePriceCents) * l.quantity,
    0
  );

  return (
    <div className="min-h-[100vh] bg-[#0f0f0f] pt-20 pb-16">
      <div className="container px-4 max-w-3xl">
        <h1 className="font-moda text-4xl text-white">Cart</h1>

        {lines.length === 0 ? (
          <div className="mt-8 text-center">
            <p className="font-moda text-white/60">Your cart is empty.</p>
            <Link
              to="/store"
              className="inline-block font-moda mt-6 bg-[#B36551] text-white px-6 py-3 rounded-md hover:bg-[#9c5644] transition-colors"
            >
              Browse merch
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-6">
              {lines.map((line) => (
                <CartLineItem
                  key={line.variant.id}
                  product={line.product}
                  variant={line.variant}
                  quantity={line.quantity}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center font-moda text-white">
              <button
                type="button"
                onClick={() => clearCart()}
                className="text-sm text-white/50 hover:text-[#B36551]"
              >
                Clear cart
              </button>
              <div className="text-right">
                <p className="text-sm text-white/60">
                  Subtotal (shipping calculated at checkout)
                </p>
                <p className="text-2xl mt-1">{formatCents(subtotal)}</p>
              </div>
            </div>

            <button
              type="button"
              disabled
              title="Checkout will be enabled in Phase 2"
              className="font-moda mt-6 w-full bg-white/10 text-white/50 px-6 py-3 rounded-md text-lg cursor-not-allowed"
            >
              Checkout (coming soon)
            </button>
          </>
        )}
      </div>
    </div>
  );
}
