import React from "react";
// components
import HomeVideo from "../Home/homeVideo";
import SwiperNav from "./swiperNav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    title: "Back To Life",
    artURL:
      "https://storage.googleapis.com/ciyp-photos/Album%20Art/Album%20Art_B2LArt.webp",
    bonusURL: "/backtolife",
  },
  {
    title: "melting. (rewrapped)",
    artURL:
      "https://storage.googleapis.com/ciyp-photos/Album%20Art/melting.%20(rewrapped)%20-%20ARTWORK.webp",
    bonusURL: "/melting",
  },
  {
    title: "Die Trying",
    artURL:
      "https://storage.googleapis.com/ciyp-photos/Album%20Art/Die%20Trying%20-%20ARTWORK.webp",
    bonusURL: "/dietrying",
  },
];

export default function Music() {
  return (
    <>
      <HomeVideo />
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-moda text-center text-white text-4xl w-[75vw] bg-gradient-to-b from-black/50 to-zinc-800/50 mb-2 rounded-xl p-2">
            Music By Chocolate In Your Pocket
          </h1>
          <Swiper className="font-moda w-[80vw] mt-6">
            <SwiperNav />
            {projects.map((project, index) => (
              <SwiperSlide className="flex flex-col justify-center items-center">
                <div className="flex flex-col w-auto justify-center items-center">
                  <h2 className="w-[50vw] font-moda text-center text-white bg-gradient-to-b from-black/50 to-zinc-800/50 mb-2 text-2xl rounded-xl">
                    {project.title}
                  </h2>
                  <div key={index} className="flex justify-center max-h-[60vh]">
                    <div className="flex justify-center">
                      <img
                        src={project.artURL}
                        alt="slideshow"
                        className="rounded-lg drop-shadow-[0_75px_10px_rgba(0,0,0,1)] border-4 border-[#262626]"
                      ></img>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
