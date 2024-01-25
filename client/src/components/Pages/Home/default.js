import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import featuredArt from "../../../imagesAndVideos/Back And Forth - ARTWORK.jpg";
import Contact from "../../Reusable/Connect";
import Shows from "../../Pages/Shows";

export default function Default() {
  const [view, setView] = useState("shows");

  const changeInfo = () => {
    if (view === "connect") {
      return <Contact />;
    } else {
      return <Shows />;
    }
  };

  return (
    <>
      <div className="bg-[#f5eddc] fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%]"></div>
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center text-black font-monoton mt-2 p-1">
          CIYP
        </h1>
        <div className="h-[2vh] tablet:h-[5vh] w-[100vw] invisible"></div>
        <p className="text-xl text-center text-black font-arvo p-1">
          Back and Forth<br></br><span className="text-lg">Out Now!</span>
        </p>
        {/* FEATURED PANE */}
        <section className="relative flex flex-col justify-between items-center">
          <img
            alt="Featured Artwork - Click to Learn More"
            className="border rounded-lg"
            src={featuredArt}
          ></img>
          <button className="absolute w-[20vw] bottom-0 left-0 right-0 z-[1] p-2 m-auto rounded-t-lg bg-[#B36551] border border-t-black border-l-black border-r-black font-arvo text-white text-[0.6rem] text-center hover:bg-red-300 hover:text-black">
            <Link to="/newmusic">Learn More</Link>
          </button>
        </section>
        {/* SECONDARY PANE BUTTONS */}
        <div className="flex justify-between">
          <button className="p-2 mx-2 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vw] desktop:w-[25vw] hover:bg-red-300 hover:text-black">
            <a
              href="https://linktr.ee/chocolateinyourpocket"
              target="_blank"
              rel="noreferrer"
              className="mx-1"
            >
              Listen
            </a>
          </button>
          <button
            className="p-2 mx-2 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vw] desktop:w-[25vw] hover:bg-red-300 hover:text-black"
            onClick={() => {
              setView("shows");
            }}
          >
            Shows
          </button>
          <button
            className="p-2 mx-2 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vs] desktop:w-[25vw] hover:bg-red-300 hover:text-black"
            onClick={() => {
              setView("connect");
            }}
          >
            Connect
          </button>
        </div>
        {/* SECONDARY PANE */}
        <section className="flex justify-center items-center w-[97vw]">
          <div className="overflow-x-scroll">{changeInfo()}</div>
        </section>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
