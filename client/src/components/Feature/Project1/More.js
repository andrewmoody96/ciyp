import React, { useState } from "react";
import Header from "../../Header";
import SinglesBG from "./SinglesBG.js";
import Lyrics from "./modals/lyrics";
// import MakingOf from "./modals/makingOf";
// import Slideshow from "./modals/slideshow";

export default function MoreProject1() {
  const [view, setView] = useState("closed");

  // Modal Toggles
  const toggleView = () => {
    if (view === "openLyrics") {
      return (
        <div className={"fixed right-0 top-0 bottom-0 z-[9]"}>
          <Lyrics
            className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
          />
          <button
            className={`fixed w-[15vw] desktop:w-[5vw] left-0 right-0 bottom-0 z-[9] font-arvo text-xs tablet:text-sm text-black bg-[#B36551] p-[5px] rounded-lg rounded-b-none hover:bg-black hover:text-white m-auto ${
              view === "openLyrics" ? "block" : "hidden"
            } drop-shadow-[-1px_1px_5px_rgba(0,0,0,0.7)]`}
            onClick={() => {
              setView("closeLyrics");
            }}
          >
            Close
          </button>
        </div>
      );
    } else if (view === "openMakingEP") {
      // return (
      //   <div className={"fixed right-0 top-0 bottom-0 z-[9]"}>
      //     <MakingOf
      //       className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
      //     />
      //     <button
      //       className={`fixed h-[5vh] w-[15vw] left-0 right-0 bottom-[25%] z-[9] font-arvo text-white bg-black p-1 rounded-lg hover:bg-[#e8B380] hover:text-black m-auto ${
      //         view === "opemMakingEP" ? "block" : "hidden"
      //       } drop-shadow-[-1px_1px_5px_rgba(0,0,0,0.7)]`}
      //       onClick={() => {
      //         setView("closeMakingEP");
      //       }}
      //     >
      //       Close
      //     </button>
      //   </div>
      // );
    } else if (view === "openPhotos") {
      // return (
      //   <div className={"fixed right-0 top-0 bottom-0 z-[9]"}>
      //     <Slideshow
      //       className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
      //     />
      //     <button
      //       className={`fixed h-[5vh] w-[15vw] left-0 right-0 bottom-[20%] z-[9] font-arvo text-white bg-black p-1 rounded-lg hover:bg-[#e8B380] hover:text-black m-auto ${
      //         view === "openPhotos" ? "block" : "hidden"
      //       } drop-shadow-[-1px_1px_5px_rgba(0,0,0,0.7)]`}
      //       onClick={() => {
      //         setView("closePhotos");
      //       }}
      //     >
      //       Close
      //     </button>
      //   </div>
      // );
    } else {
      console.log("closed");
    }
  };

  return (
    <div className="container h-[100vh] absolute top-0">
      {toggleView()}
      <SinglesBG />
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <Header />
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-4xl text-center text-black font-bungee mt-2 p-1 rounded-lg">
            Chocolate In Your Pocket
          </h1>
        </div>
        <div className="desktop:mb-10 tablet:mt-4 h-[10vh] hidden tablet:block tablet:invisible">
          {/* Hello */}
        </div>
        <div className="flex flex-col justify-center items-center my-8">
          <section className="bg-white/60 border border-[#262626] rounded-lg flex-col justify-center items-center mt-10 mb-7 mx-auto text-center text-black font-arvo drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
            <h1 className="text-xl text-center text-black font-arvo mt-2 p-2 rounded-lg">
            Learn more about how we made our first EP.<br></br>View lyrics,
              photos, and read stories below.
            </h1>
            <div className="grid desktop:flex justify-center items-center">
              <button className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-md text-center h-[5vh] w-[30vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                <a
                  href="https://linktr.ee/chocolateinyourpocket"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                >
                  Listen
                </a>
              </button>
              <button
                className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-md text-center w-[30vw] tablet:w-[25vw] h-[5vh] desktop:w-[10vw] hover:bg-red-300 hover:text-black"
                onClick={() => setView("openLyrics")}
              >
                Lyric Book
              </button>
              <button className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-md text-center h-[5vh] w-[30vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                Making the EP
              </button>
              <button className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-md text-center h-[5vh] w-[30vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                Photos
              </button>
            </div>
            {/* <div className="invisible">{"dummy div for spacing"}</div> */}
          </section>
        </div>
      </div>
    </div>
  );
}


// 10.11 EoD Notes
// Lyrics fit in all screen sizes
// Lyric buttons moved based on iPhone SE size -- NEEDS TO BE CHANGED FOR TABLET/DESKTOP
// Removed second page of "Notebook" container
// -----------------------------------------------
// Next Up:
// Move lyric buttons based on screen size
// apply CSS to make "Notebook" appear to be written on paper