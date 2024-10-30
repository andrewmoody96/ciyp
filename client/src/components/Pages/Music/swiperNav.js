import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSwiper } from "swiper/react";

export default function SwiperNav({ projects }) {
  const swiper = useSwiper();
  const [noPrev, setNoPrev] = useState(true);
  const [noNext, setNoNext] = useState(false);

  let releases = projects;

  const buttonRenderer = (i) => {
    console.log(i);
    if (i === 0) {
      return (
        <>
          <button className="mx-1 text-center text-black bg-[#B36551]/90 font-moda w-fit rounded-md border border-black text-sm py-1 px-3 hover:bg-[#262626]/90 hover:text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${releases[0].streaming}`}
            >
              Stream
            </a>{" "}
          </button>
          <button className="mx-1 text-center text-black bg-[#B36551]/90 font-moda w-fit rounded-md border border-black text-sm py-1 px-3 hover:bg-[#262626]/90 hover:text-white">
            <Link to={releases[0].bonus}>Bonus</Link>
          </button>
        </>
      );
    } else if (i === 1) {
      return (
        <>
          <button className="mx-1 text-center text-black bg-[#B36551]/90 font-moda w-fit rounded-md border border-black text-sm py-1 px-3 hover:bg-[#262626]/90 hover:text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${releases[1].streaming}`}
            >
              Stream
            </a>
          </button>
          <button className="mx-1 text-center text-black bg-[#B36551]/90 font-moda w-fit rounded-md border border-black text-sm py-1 px-3 hover:bg-[#262626]/90 hover:text-white">
            <Link to={releases[1].bonus}>Bonus</Link>
          </button>
        </>
      );
    } else if (i === 2) {
      return (
        <>
          <button className="mx-1 text-center text-black bg-[#B36551]/90 font-moda w-fit rounded-md border border-black text-sm py-1 px-3 hover:bg-[#262626]/90 hover:text-white">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${releases[2].streaming}`}
            >
              Stream
            </a>
          </button>
          <button className="mx-1 text-center text-black bg-[#B36551]/90 font-moda w-fit rounded-md border border-black text-sm py-1 px-3 hover:bg-[#262626]/90 hover:text-white">
            <Link to={releases[2].bonus}>Bonus</Link>
          </button>
        </>
      );
    }
  };

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
      console.log("End of Slideshow");
    }
  };

  return (
    <div className="absolute -bottom-[0.33rem] z-30">
      <div className="flex justify-between items-center">
        <button
          className={`m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md rounded-b-none text-lg py-1 px-3 hover:bg-[#B36551]/90 ${
            noPrev ? "pointer-events-none bg-[#262626]/50 text-white/50" : ""
          }`}
          onClick={() => prev()}
        >
          &#8592;<span className="hidden"> Back</span>
        </button>
        {buttonRenderer(swiper.activeIndex)}
        <button
          className={`m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md rounded-b-none text-lg py-1 px-3 hover:bg-[#B36551]/90 ${
            noNext ? "pointer-events-none bg-[#262626]/50 text-white/50" : ""
          }`}
          onClick={() => next()}
        >
          <span className="hidden">Next </span>&#8594;
        </button>
      </div>
    </div>
  );
}
