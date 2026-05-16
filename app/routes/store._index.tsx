import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import { getPublishedProducts } from "~/.server/products";
import ProductCard from "~/components/Store/ProductCard";

export const meta: MetaFunction = () => [
  { title: "Merch — CIYP" },
  {
    name: "description",
    content: "Official merch from Chocolate In Your Pocket.",
  },
];

export async function loader() {
  const products = await getPublishedProducts();
  return { products };
}

export default function StoreIndex() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-[100vh] bg-[#0f0f0f] pt-20 pb-16">
      <div className="container px-4">
        <header className="mb-10 text-center">
          <h1 className="font-moda text-5xl text-white drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
            Merch
          </h1>
          <p className="font-moda text-white/60 mt-2">
            Official goods from Chocolate In Your Pocket.
          </p>
        </header>

        {products.length === 0 ? (
          <p className="font-moda text-white/60 text-center">
            Nothing in the store right now. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 wide:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
