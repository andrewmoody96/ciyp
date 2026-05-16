import { Link } from "react-router";
import type { Product } from "~/lib/store-types";
import { formatCents } from "~/lib/money";

export default function ProductCard({ product }: { product: Product }) {
  const primaryImage = product.images[0];
  const minVariantPrice = product.variants.reduce((min, v) => {
    const p = v.priceCents ?? product.basePriceCents;
    return p < min ? p : min;
  }, product.basePriceCents);
  const hasRange = product.variants.some(
    (v) => (v.priceCents ?? product.basePriceCents) !== minVariantPrice
  );

  return (
    <Link
      to={`/store/${product.slug}`}
      className="group block bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 hover:border-[#B36551] transition-colors"
    >
      <div className="aspect-square bg-black overflow-hidden">
        {primaryImage ? (
          <img
            src={primaryImage.s3Key}
            alt={primaryImage.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 font-moda">
            No image
          </div>
        )}
      </div>
      <div className="p-4 text-white font-moda">
        <h3 className="text-lg leading-tight group-hover:text-[#B36551] transition-colors">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-white/70">
          {hasRange ? "From " : ""}
          {formatCents(minVariantPrice)}
        </p>
      </div>
    </Link>
  );
}
