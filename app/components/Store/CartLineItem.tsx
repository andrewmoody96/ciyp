import type { Product, ProductVariant } from "~/lib/store-types";
import { formatCents } from "~/lib/money";
import { removeItem, setQuantity } from "~/lib/cart.client";

type Props = {
  product: Product;
  variant: ProductVariant;
  quantity: number;
};

export default function CartLineItem({ product, variant, quantity }: Props) {
  const unitPrice = variant.priceCents ?? product.basePriceCents;
  const lineTotal = unitPrice * quantity;
  const image = product.images[0];

  return (
    <div className="flex gap-4 items-center py-4 border-b border-white/10">
      <div className="w-20 h-20 shrink-0 bg-black rounded overflow-hidden border border-white/10">
        {image && (
          <img
            src={image.s3Key}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 font-moda text-white">
        <h3 className="text-lg leading-tight">{product.title}</h3>
        {variant.name !== "Default" && (
          <p className="text-sm text-white/60">{variant.name}</p>
        )}
        <p className="text-sm text-white/70 mt-1">
          {formatCents(unitPrice)} each
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setQuantity(variant.id, quantity - 1)}
          className="font-moda w-8 h-8 rounded border border-white/20 text-white hover:border-[#B36551] hover:text-[#B36551]"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="font-moda text-white w-6 text-center">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity(variant.id, quantity + 1)}
          className="font-moda w-8 h-8 rounded border border-white/20 text-white hover:border-[#B36551] hover:text-[#B36551]"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="font-moda text-white w-24 text-right">
        {formatCents(lineTotal)}
      </div>
      <button
        type="button"
        onClick={() => removeItem(variant.id)}
        className="font-moda text-white/50 hover:text-[#B36551] text-sm"
        aria-label={`Remove ${product.title}`}
      >
        Remove
      </button>
    </div>
  );
}
