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
        className="m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md text-xs p-1 hover:bg-[#B36551]/90"
        onClick={() => prevPause()}
      >
        Prev
      </button>
      <button
        className="m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md text-xs p-1 hover:bg-[#B36551]/90"
        onClick={() => nextPause()}
      >
        Next
      </button>
    </div>
  );
}
