import React from "react";
import { Link } from "react-router-dom";
// components
import Header from "../Header";
import HomeVideo from "./homeVideo";

export default function Default() {
  return (
    <>
      <HomeVideo />
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center text-white font-monoton bg-[#262626]/75 mt-2 p-1 rounded-lg">
          Chocolate In Your Pocket
        </h1>
        <div className="flex items-center justify-between">
          <Header />
        </div>
        <section className="flex justify-between items-center">
          <button className="p-2 mx-4 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] font-arvo text-white text-reg text-center  w-[25vw] tablet:w-[25vw] desktop:w-[25vw] hover:bg-red-300 hover:text-black">
            <Link to="/contact">Contact</Link>
          </button>
          <button className="p-2 mx-4 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] font-arvo text-white text-reg text-center w-[25vw] tablet:w-[25vs] desktop:w-[25vw] hover:bg-red-300 hover:text-black">
            <a
              href="https://linktr.ee/chocolateinyourpocket"
              target="_blank"
              rel="noreferrer"
              className="mx-1"
            >
              Follow
            </a>
          </button>
        </section>
      </div>
    </>
  );
}
