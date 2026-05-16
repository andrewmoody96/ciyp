import { useState } from "react";
import type { ProductImage } from "~/lib/store-types";

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = images[activeIdx];

  if (!active) {
    return (
      <div className="aspect-square bg-[#1a1a1a] rounded-lg flex items-center justify-center text-white/30 font-moda">
        No image
      </div>
    );
  }

  return (
    <div>
      <div className="aspect-square bg-black rounded-lg overflow-hidden border border-white/10">
        <img
          src={active.s3Key}
          alt={active.alt}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                idx === activeIdx
                  ? "border-[#B36551]"
                  : "border-white/10 hover:border-white/30"
              }`}
              aria-label={`Show image ${idx + 1}`}
            >
              <img
                src={img.s3Key}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
