import React from "react";
// components
import HomeVideo from "./homeVideo.js";
import Nav from "../../Reusable/Menu/nav.js";
import Signup from "../../Reusable/Connect/signupForm.js";
import Shows from "../../Pages/Shows";

const featuredArt =
  "https://storage.googleapis.com/ciyp-photos/Album%20Art/B2LArt.jpeg";

export default function Default() {
  return (
    <>
      <HomeVideo />
      <Nav />
      <div className="h-[100px] my-10 invisible">dummy div</div>
      <section className="relative flex flex-col justify-center items-center w-[95vw] mt-4 mb-2 text-center text-white">
        <p className="font-modaCaps bg-[#262626]/25 border border-white px-4 rounded-lg text-[4rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">
          Back To Life
          <p className="font-moda bg-[#262626]/25 border border-white px-2 rounded-lg text-[0.8rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white text-center m-auto w-[40%] mb-4">
            our new album
          </p>
        </p>
      </section>
      <div
        className="my-5 m-3 flex flex-col 
      justify-center items-center"
      >
        <div className="w-[85vw] tablet:w-[75vw] desktop:w-[50vw] flex justify-center items-center relative">
          <img
            alt="Back To Life Artwork"
            className="rounded-lg border border-white drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
            src={featuredArt}
          ></img>
          <div className="absolute bottom-0">
            <button className="p-1 mx-2 rounded-lg rounded-b-none bg-[#B36551] border border-white font-moda text-white text-sm text-center w-[20vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black">
              <a
                href="https://linktr.ee/chocolateinyourpocket"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                Stream
              </a>
            </button>
            <button className="p-1 mx-2 rounded-lg rounded-b-none bg-[#B36551] border border-white font-moda text-white text-sm text-center w-[20vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black">
              <a
                href="https://linktr.ee/chocolateinyourpocket"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                More
              </a>
            </button>
          </div>
        </div>
        <div
          id="shows"
          className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h4 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">
            Shows
          </h4>
          <div className="overflow-x-scroll">{<Shows />}</div>
        </section>
        <div
          id="signup"
          className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h4 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">
            Emails
          </h4>
          <div className="overflow-x-scroll">{<Signup />}</div>
        </section>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
