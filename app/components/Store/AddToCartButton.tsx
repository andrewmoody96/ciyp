import { useState } from "react";
import { addItem } from "~/lib/cart.client";

type Props = {
  variantId: string;
  disabled?: boolean;
};

export default function AddToCartButton({ variantId, disabled }: Props) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(variantId, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="font-moda mt-6 w-full bg-[#B36551] text-white px-6 py-3 rounded-md text-lg hover:bg-[#9c5644] transition-colors disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed"
    >
      {disabled ? "Sold out" : added ? "Added to cart ✓" : "Add to cart"}
    </button>
  );
}
