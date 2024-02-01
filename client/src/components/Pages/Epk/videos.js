import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperNav from "./swiperNav.js";
import "swiper/css";
import "swiper/css/navigation";
import "./slideStyle.css";

export default function Videos({ videos }) {
  if (!videos.length) {
    return (
      <div className="flex flex-col">
        <a
          href="https://www.instagram.com/chocolateinyourpocket/reels/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="m-1 text-center text-white bg-auto bg-[#B36551]/90 font-arvo w-auto rounded-md text-xs p-1 hover:bg-[#262626]/90 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]">
            View More on Instagram
          </button>
        </a>
        <h3 className="text-white my-6">No Videos</h3>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <a
          href="https://www.instagram.com/chocolateinyourpocket/reels/"
          target="_blank"
          rel="noreferrer"
          className="mb-2"
        >
          <button className="m-1 text-center text-white bg-auto bg-[#B36551]/90 font-arvo w-auto rounded-md text-xs p-1 hover:bg-[#262626]/90 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]">
            View More on Instagram
          </button>
        </a>
        <div className="flex justify-center items-center">
          <Swiper id="videosSlides" modules={[Navigation]} navigation={false}>
            <SwiperNav className="swiperNav" />
            {videos &&
              videos.map((video) => (
                <SwiperSlide className="flex justify-center items-center align-middle">
                  <div
                    key={video.mediaLink}
                    className="flex flex-col justify-center items-center"
                  >
                    <video
                      controls
                      playsInline
                      alt="video"
                      className="bg-static w-[60vw] desktop:w-[30vw] m-3 border-4 border-[#262626] rounded-lg"
                    >
                      <source src={video.mediaLink} type="video/mp4" />
                    </video>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    );
  }
}
