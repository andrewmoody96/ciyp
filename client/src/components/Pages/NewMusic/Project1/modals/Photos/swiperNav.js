import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperNav() {
  const swiper = useSwiper();

  const prevPause = () => {
    document.querySelectorAll("video").forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
    swiper.slidePrev();
  };

  const nextPause = () => {
    document.querySelectorAll("video").forEach((v) => {
      v.pause();
      v.currentTime = 0;
    });
    swiper.slideNext();
  };

  return (
    <div className="swiperButtons">
      <button
        className="modalButton font-arvo bg-[#e8B380] mx-2 p-[5px] text-xs hover:bg-black hover:text-white"
        onClick={() => prevPause()}
      >
        Prev
      </button>
      <button
        className="modalButton font-arvo bg-[#e8B380] mx-2 p-[5px] text-xs hover:bg-black hover:text-white"
        onClick={() => nextPause()}
      >
        Next
      </button>
    </div>
  );
}
