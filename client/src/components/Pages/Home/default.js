import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import Nav from "../../Reusable/Menu/nav.js";
import Connect from "../../Reusable/Connect";
import Signup from "../../Reusable/Connect/signupForm.js"
import Shows from "../../Pages/Shows";
const featuredArt =
  "https://storage.googleapis.com/ciyp-photos/Album%20Art/Eurydice%20-%20ARTWORK.webp";

const BackToLifeArt =
  "https://storage.googleapis.com/ciyp-photos/Album%20Art/B2LArt.jpeg";

export default function Default() {
  return (
    <>
      <div className="bg-gray-500 fixed top-0 left-0 right-0 w-[100vw] h-[100%]"></div>
      <Nav />
      <div className="h-[50px] invisible">dummy div</div>
      <section className="relative flex flex-col justify-center items-center w-[95vw] mt-4 mb-2 text-center text-white">
        <p className="font-rocksalt text-4xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]">
          Back To Life
        </p>
        <p className="font-arvo mt-2 mb-2 drop-shadow-[0_1px_5px_rgba(0,0,0,0.4)]">
          the new album by <br></br>Chocolate In Your Pocket
        </p>
      </section>
      <div
        className="my-5 m-3 flex flex-col 
      justify-center items-center"
      >
        <div className="w-[95vw] flex justify-center relative">
          <img
            alt="Back To Life Artwork"
            className="rounded-lg border border-white drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
            src={BackToLifeArt}
          ></img>
          <div className="absolute bottom-0">
            <button className="p-1 mx-2 rounded-lg rounded-b-none bg-[#B36551] border border-white font-arvo text-white text-sm text-center w-[20vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black">
              <a
                href="https://linktr.ee/chocolateinyourpocket"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                Stream
              </a>
            </button>
            <button className="p-1 mx-2 rounded-lg rounded-b-none bg-[#B36551] border border-white font-arvo text-white text-sm text-center w-[20vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black">
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
        <div id="shows" className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"></div>
        {/* CONTAINER */}
        <div className="relative desktop:flex justify-center items-center desktop:w-[100vw] desktop:h-auto">
          <div className="desktop:flex desktop:flex-col desktop:w-[45vw]">
            <section
              className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]"
            >
              <h4 className="font-rocksalt text-4xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">Shows</h4>
              <div className="overflow-x-scroll">{<Shows/>}</div>
            </section>
            <div id="signup" className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"></div>
            <section
              className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]"
            >
              <h4 className="font-rocksalt text-4xl drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">Emails</h4>
              <div className="overflow-x-scroll">{<Signup />}</div>
            </section>
          </div>
        </div>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
