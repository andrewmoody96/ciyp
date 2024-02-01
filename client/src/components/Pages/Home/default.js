import React, { useState } from "react";
import { Link } from "react-router-dom";
// components
import Contact from "../../Reusable/Connect";
import Shows from "../../Pages/Shows";
const featuredArt =
  "https://storage.googleapis.com/ciyp-photos/Album%20Art/Back%20And%20Forth%20-%20ARTWORK.webp";

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
        {/* CONTAINER */}
        <div className="desktop:flex justify-center items-center desktop:w-[100vw] desktop:h-auto">
          {/* FEATURED PANE */}
          <section className="relative flex flex-col justify-between items-center desktop:w-[45vw]">
            <p className="text-xl text-center text-black font-arvo p-1">
              Back and Forth<br></br>
              <span className="text-lg">Out Now!</span>
            </p>
            <img
              alt="Featured Artwork - Click to Learn More"
              className="border rounded-lg desktop:w-[40vw] desktop:h-auto"
              src={featuredArt}
            ></img>
            <button className="absolute w-[20vw] desktop:w-[10vw] bottom-0 left-0 right-0 z-[1] p-2 m-auto rounded-t-lg bg-[#B36551] border border-t-black border-l-black border-r-black font-arvo text-white text-[0.6rem] text-center hover:bg-red-300 hover:text-black">
              <Link to="/newmusic">Learn More</Link>
            </button>
          </section>
          <div className="desktop:flex desktop:flex-col desktop:w-[45vw]">
            {/* SECONDARY PANE BUTTONS */}
            <div className="flex justify-between desktop:justify-center">
              <button className="p-2 mx-2 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black">
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
                className="p-2 mx-2 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vw] desktop:w-[15vw] hover:bg-red-300 hover:text-black"
                onClick={() => {
                  setView("shows");
                }}
              >
                Shows
              </button>
              <button
                className="p-2 mx-2 my-10 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vs] desktop:w-[15vw] hover:bg-red-300 hover:text-black"
                onClick={() => {
                  setView("connect");
                }}
              >
                Connect
              </button>
            </div>
            {/* SECONDARY PANE */}
            <section className="flex justify-center items-center w-[97vw] desktop:w-[45vw]">
              <div className="overflow-x-scroll">{changeInfo()}</div>
            </section>
          </div>
        </div>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
