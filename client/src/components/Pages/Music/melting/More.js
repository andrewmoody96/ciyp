import React, { useState } from "react";
import ProjectArt from "./ProjectArt.js";
import Lyrics from "./modals/Lyrics/lyrics.js";
import QandA from "./modals/AboutEP/p1QandA.js";
import Photos from "./modals/Photos/galleryModal.js";

export default function MoreProject1() {
  const [open, setOpen] = useState("closed");

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
            className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
            toggleModal={toggleModal}
            open={true}
          />
        </div>
      );
    } else if (open === "openQandA") {
      return (
        <div className={"fixed left-0 right-0 top-0 bottom-0 z-[9]"}>
          <QandA
            className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
            toggleModal={toggleModal}
            open={true}
          />
        </div>
      );
    } else if (open === "openPhotos") {
      return (
        <div className={"fixed left-0 right-0 top-0 bottom-0 z-[9]"}>
          <Photos
            className={`Lyrics1Nav fixed left-0 right-0 top-0 bottom-0 z-[9]`}
            toggleModal={toggleModal}
            open={true}
          />
        </div>
      );
    } else {
      console.log("closed");
    }
  };

  return (
    <div className="container h-[100vh] absolute top-0">
      {whichModal()}
      <ProjectArt />
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-4xl text-center text-black font-monoton mt-8 p-1 rounded-lg">
            melting.
          </h1>
        </div>
        <div className="desktop:mb-10 tablet:mt-4 h-[10vh] hidden tablet:block tablet:invisible">
          {/* Hello */}
        </div>
        <div className="flex flex-col justify-center items-center my-8">
          <section className="bg-white/60 border border-[#262626] rounded-lg flex-col justify-center items-center mt-10 mb-7 mx-auto text-center text-black font-moda drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
            <h1 className="text-xl text-center text-black font-moda mt-2 p-2 rounded-lg">
              Learn more about how we made our first EP.<br></br>open lyrics,
              photos, and read stories below.
            </h1>
            <div className="grid desktop:flex justify-center items-center">
              <button className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-md text-center h-[5vh] w-[30vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                <a
                  href="https://distrokid.com/hyperfollow/chocolateinyourpocket/melting-rewrapped-2"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                >
                  Listen
                </a>
              </button>
              <button
                className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-md text-center w-[30vw] tablet:w-[25vw] h-[5vh] desktop:w-[10vw] hover:bg-red-300 hover:text-black"
                onClick={() => setOpen("openLyrics")}
              >
                Lyric Book
              </button>
              <button
                className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-md text-center h-[5vh] w-[30vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black"
                onClick={() => setOpen("openQandA")}
              >
                Q & A
              </button>
              <button
                className="p-1 mx-2 my-6 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-md text-center h-[5vh] w-[30vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black"
                onClick={() => setOpen("openPhotos")}
              >
                Photos
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
