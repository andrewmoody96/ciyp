import React, { useState } from "react";
import Header from "../../Header";
import SinglesBG from "./SinglesBG.js";
import Lyrics from "./modals/lyrics";
import ModalClose from "./modals/modalClose";
// import MakingOf from "./modals/makingOf";
// import Slideshow from "./modals/slideshow";

export default function MoreProject1() {
  const [open, setOpen] = useState("closed");
  // const offsetCalc = () => {
  //   const modal = document.querySelector(".modalContainer");
  //   const buttons = document.getElementById("modalButtons");
  //   let position = modal.getBoundingClientRect();

  //   const applyOffset = (val) => {
  //     buttons.setAttribute(
  //       "style",
  //       `top:${val.top}; left:${val.left}; right:${val.right}`
  //     );
  //   };

  //   let offset = {
  //     top: position.top,
  //     left: position.left,
  //     right: position.right,
  //   };
  //   console.log(offset);
  //   applyOffset(offset);
  // };

  // Modal Toggles
  const toggleModal = (tOf) => {
    setOpen(tOf);
  };

  const whichModal = () => {
    if (open === "openLyrics") {
      return (
        <div
          id="lyricModal"
          className={"fixed left-0 right-0 top-0 bottom-0 z-[9]"}
        >
          <Lyrics
            className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`} toggleModal={toggleModal} open={open}
          />
          {/* <button
            className={`fixed w-[15vw] desktop:w-[5vw] left-0 right-0 bottom-0 tablet:bottom-[20vh] z-[9] font-arvo text-xs tablet:text-sm text-black bg-[#B36551] p-[5px] rounded-lg rounded-b-none hover:bg-black hover:text-white m-auto ${
              open === "openLyrics" ? "block" : "hidden"
            } drop-shadow-[-1px_1px_5px_rgba(0,0,0,0.7)]`}
            onClick={() => {
              setOpen("closeLyrics");
            }}
          >
            Close
          </button> */}
          {/* <ModalClose id="modalCloseButton" toggleModal={toggleModal} open={open}/> */}
        </div>
      );
    } else if (open === "openMakingEP") {
      // return (
      //   <div className={"fixed right-0 top-0 bottom-0 z-[9]"}>
      //     <MakingOf
      //       className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
      //     />
      //     <ModalClose id="modalCloseButton" toggleModal={toggleModal} open={open}/>
      //   </div>
      // );
    } else if (open === "openPhotos") {
      // return (
      //   <div className={"fixed right-0 top-0 bottom-0 z-[9]"}>
      //     <Slideshow
      //       className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
      //     />
      //     <ModalClose id="modalCloseButton" toggleModal={toggleModal} open={open}/>
      //   </div>
      // );
    } else {
      console.log("closed");
    }
  };

  // document.addEventListener("DOMContentLoaded", () => {
  //   offsetCalc();
  // });
  // window.addEventListener("resize", () => {
  //   offsetCalc();
  // });

  return (
    <div className="container h-[100vh] absolute top-0">
      {whichModal()}
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
              Learn more about how we made our first EP.<br></br>open lyrics,
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
                onClick={() => setOpen("openLyrics")}
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
