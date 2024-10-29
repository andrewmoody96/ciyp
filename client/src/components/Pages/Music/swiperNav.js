import React, { useState } from "react";
import { useSwiper } from "swiper/react";

export default function SwiperNav() {
  const swiper = useSwiper();
  const [noPrev, setNoPrev] = useState(true);
  const [noNext, setNoNext] = useState(false);

  const prev = () => {
    swiper.slidePrev();
    if (swiper.activeIndex === 1) {
      setNoNext(false);
    } else if (swiper.activeIndex === 0) {
      setNoNext(false);
      setNoPrev(true);
      console.log("Beginning of Slideshow");
      
    }
  };

  const next = () => {
    swiper.slideNext();
    if (swiper.activeIndex === 1) {
      setNoPrev(false);
    } else if (swiper.activeIndex === 2) {
      setNoNext(true);
      console.log("End of Slideshow")
    }
  };

  return (
    <div className="absolute -bottom-2 z-30">
      <button
        className={`m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md rounded-b-none text-lg py-1 px-3 hover:bg-[#B36551]/90 ${
          noPrev ? "hidden" : ""
        }`}
        onClick={() => prev()}
      >
        &#8592;<span className="hidden tablet:inline"> Back</span>
      </button>
      <button
        className={`m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md rounded-b-none text-lg py-1 px-3 hover:bg-[#B36551]/90 ${
          noNext ? "hidden" : ""
        }`}
        onClick={() => next()}
      >
        <span className="hidden tablet:inline">Next </span>&#8594;
      </button>
    </div>
  );
}
