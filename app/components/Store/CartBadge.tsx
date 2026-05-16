import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getCart, itemCount, subscribe } from "~/lib/cart.client";

export default function CartBadge() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const update = () => setCount(itemCount(getCart()));
    update();
    return subscribe(update);
  }, []);

  if (!mounted) return null;

  return (
    <Link
      to="/store/cart"
      className="font-moda text-white relative inline-flex items-center gap-1 hover:text-[#B36551] transition-colors"
      aria-label={`Cart, ${count} items`}
    >
      <span>Cart</span>
      {count > 0 && (
        <span className="bg-[#B36551] text-white text-xs rounded-full min-w-[1.25rem] h-5 px-1 inline-flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}
