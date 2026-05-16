import type { ProductVariant } from "~/lib/store-types";

type Props = {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelect: (variantId: string) => void;
};

export default function VariantSelector({
  variants,
  selectedVariantId,
  onSelect,
}: Props) {
  if (variants.length <= 1) return null;

  return (
    <div className="mt-4">
      <p className="font-moda text-sm text-white/70 mb-2">Select option</p>
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => {
          const isSelected = v.id === selectedVariantId;
          const isOut = v.inventoryQty === 0;
          return (
            <button
              key={v.id}
              type="button"
              disabled={isOut}
              onClick={() => onSelect(v.id)}
              className={`font-moda px-4 py-2 rounded-md border transition-colors ${
                isSelected
                  ? "border-[#B36551] bg-[#B36551] text-white"
                  : "border-white/20 text-white hover:border-white/50"
              } ${isOut ? "opacity-40 cursor-not-allowed line-through" : ""}`}
              aria-pressed={isSelected}
            >
              {v.name}
              {isOut ? " (sold out)" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}
