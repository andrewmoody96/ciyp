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
        <div className="fixed top-0 left-0 right-0 bottom-0 desktop:top-0 desktop:bottom-0 w-[94vw] desktop:w-[70vw] h-[100vh] m-auto flex justify-center items-center">
            <Swiper id="photoSlides" modules={[Autoplay]} autoplay={true}>
              {slideImages.map((slideImage, index) => (
                <SwiperSlide className="flex justify-center items-center align-middle">
                  <div key={index} className="flex justify-center">
                    <div className="flex justify-center m-3">
                      <img
                        src={slideImage}
                        alt="slideshow"
                        className="object-contain w-auto tablet:w-[50%] desktop:w-auto max-h-[75vh] h-auto border-2 border-black"
                      ></img>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </>
    );
  }
}
