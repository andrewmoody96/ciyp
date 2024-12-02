import React from "react";
// components
import HomeVideo from "./homeVideo.js";
import Signup from "../../Reusable/Connect/signupForm.js";
import Shows from "../../Pages/Shows";
import featuredArt from "./featuredArt.webp";

export default function Default() {
  return (
    <>
      <HomeVideo />
      <div className="h-[100px] my-10 invisible">dummy div</div>
      <div
        className="my-5 m-3 flex flex-col 
      justify-center items-center"
      >
        <div className="relative w-[85vw] tablet:w-[75vw] desktop:w-[50vw] flex justify-center items-center">
          <img
            width="1200"
            height="1200"
            fetchpriority="high"
            alt="Back To Life Artwork"
            className="rounded-lg border-2 border-[#B36551] drop-shadow-[2px_1px_10px_rgba(255,255,255,0.7)]"
            src={featuredArt}
          ></img>
          <div className="absolute bottom-[-5%]">
            <button className="shadow-[inset_0_1px_5px_0_rgb(0,0,0);] p-1 mx-2 rounded-xl bg-[#B36551] border border-white font-moda text-white text-base text-center w-[20vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black">
              <a
                href="https://linktr.ee/chocolateinyourpocket"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-2"
              >
                Stream
              </a>
            </button>
          </div>
        </div>
        <section className="absolute top-[22%] flex flex-col justify-center items-center w-[95vw] mt-4 mb-2 text-center text-white">
          <p className="font-modaCaps px-4 rounded-lg text-[4rem] drop-shadow-[0_1px_5px_rgba(0,0,0,1)] text-white mb-5">
            Back To Life
            <p className="font-moda bg-[#262626]/25 border border-white px-2 rounded-lg text-[0.8rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white text-center m-auto w-[40%] mb-4">
              our new album
            </p>
          </p>
        </section>
        <div
          id="shows"
          className="h-[8vh] mt-tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h1 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white my-5">
            Shows
          </h1>
          <div className="overflow-x-scroll">{<Shows />}</div>
        </section>
        <div
          id="subscribe"
          className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h1 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">
            Subscribe
          </h1>
          <div className="overflow-x-scroll">{<Signup />}</div>
        </section>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
