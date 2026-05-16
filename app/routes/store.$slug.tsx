import { useState } from "react";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData, Link, data } from "react-router";
import { getProductBySlug } from "~/.server/products";
import ProductGallery from "~/components/Store/ProductGallery";
import VariantSelector from "~/components/Store/VariantSelector";
import AddToCartButton from "~/components/Store/AddToCartButton";
import { formatCents } from "~/lib/money";

export const meta: MetaFunction<typeof loader> = ({ data: loaderData }) => {
  if (!loaderData?.product) {
    return [{ title: "Product not found — CIYP" }];
  }
  const p = loaderData.product;
  return [
    { title: p.seoTitle ?? `${p.title} — CIYP` },
    {
      name: "description",
      content: p.seoDescription ?? p.description,
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) {
    throw data("Not found", { status: 404 });
  }
  const product = await getProductBySlug(slug);
  if (!product) {
    throw data("Not found", { status: 404 });
  }
  return { product };
}

export default function ProductDetail() {
  const { product } = useLoaderData<typeof loader>();
  const firstAvailable =
    product.variants.find((v) => v.inventoryQty !== 0) ?? product.variants[0];
  const [selectedVariantId, setSelectedVariantId] = useState(
    firstAvailable.id
  );

  const selected =
    product.variants.find((v) => v.id === selectedVariantId) ?? firstAvailable;
  const price = selected.priceCents ?? product.basePriceCents;
  const soldOut = selected.inventoryQty === 0;

  return (
    <div className="min-h-[100vh] bg-[#0f0f0f] pt-20 pb-16">
      <div className="container px-4">
        <nav className="mb-6 font-moda text-sm">
          <Link to="/store" className="text-white/60 hover:text-[#B36551]">
            ← Back to merch
          </Link>
        </nav>

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-10">
          <ProductGallery images={product.images} />

          <div>
            <h1 className="font-moda text-4xl text-white">{product.title}</h1>
            <p className="font-moda text-2xl text-[#B36551] mt-2">
              {formatCents(price)}
            </p>
            <p className="font-moda text-white/80 mt-6 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            <VariantSelector
              variants={product.variants}
              selectedVariantId={selectedVariantId}
              onSelect={setSelectedVariantId}
            />

            {product.kind === "DIGITAL" && (
              <p className="font-moda text-sm text-white/60 mt-4">
                Digital download — delivered by email after purchase.
              </p>
            )}

            <AddToCartButton variantId={selected.id} disabled={soldOut} />

            {selected.inventoryQty > 0 && selected.inventoryQty <= 5 && (
              <p className="font-moda text-sm text-[#B36551] mt-3">
                Only {selected.inventoryQty} left
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
