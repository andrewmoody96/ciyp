import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./slideStyle.css";

export default function Photos({ photos }) {
  const slideImages = [];

  if (!photos.length) {
    return <h3 className="text-white">No Photos Yet</h3>;
  } else {
    photos.forEach((photo) => {
      slideImages.push(photo.mediaLink);
    });
    return (
      <>
        {" "}
        <a
          href="https://www.instagram.com/chocolateinyourpocket"
          target="_blank"
          rel="noreferrer"
          className="mb-2"
        >
          <button className="m-2 mb-1 text-center text-white bg-auto bg-[#B36551]/90 font-arvo w-auto rounded-md text-sm p-1 hover:bg-[#262626]/90 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]">
            View More on Instagram
          </button>
        </a>
        <Swiper id="photoSlides" modules={[Autoplay]} autoplay={true}>
          {slideImages.map((slideImage, index) => (
            <SwiperSlide className="flex justify-center items-center align-middle">
              <div key={index} className="flex justify-center">
                <div className="flex justify-center">
                  <img
                    src={slideImage}
                    alt="slideshow"
                    className="rounded-lg drop-shadow-[0_75px_10px_rgba(0,0,0,1)] border-4 border-[#262626] h-[75vh] w-[70vw] max-w-[715px] mx-3 my-4"
                  ></img>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}
