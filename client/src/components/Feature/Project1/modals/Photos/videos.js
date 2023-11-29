import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperNav from "./swiperNav.js";
import "swiper/css";
import "swiper/css/navigation";
import "./slideStyle.css";

export default function Videos({ videos }) {
  const slideVideos = [];

  if (!videos.length) {
    return <h3 className="text-white">No Videos Yet</h3>;
  } else {
    videos.forEach((video) => {
      slideVideos.push(video.mediaLink);
    });

    return (
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 desktop:top-0 desktop:bottom-0 w-[94vw] desktop:w-[70vw] h-[100vh] m-auto flex justify-center items-center">
          <Swiper id="videosSlides" modules={[Navigation]} navigation={false}>
            <SwiperNav className="swiperNav" />
            {videos &&
              videos.map((video) => (
                <SwiperSlide className="flex justify-center items-center align-middle">
                  <div key={video.mediaLink} className="flex justify-center">
                    <div className="flex justify-center items-center m-3">
                      <video
                        muted
                        controls
                        playsInline
                        alt="video"
                        className="bg-static object-contain w-auto tablet:w-[50%] desktop:w-auto max-h-[75vh] h-auto border-0 rounded-md"
                      >
                        <source src={video.mediaLink} type="video/webm" />
                      </video>
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
