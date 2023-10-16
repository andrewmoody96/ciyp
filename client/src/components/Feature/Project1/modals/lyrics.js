import React, { useState, useEffect } from "react";
import Song from "../modals/song";
import LyricSelector from "./lyricSelector";
import ModalClose from "./modalClose";

export default function Project1LyricModal({ toggleModal, open }) {
  const [isOpen, setIsOpen] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [lyrics, setLyrics] = useState("default");
  const [selection, setSelection] = useState("song1");

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
  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const res = await fetch("/api/lyrics");
        const jsonData = await res.json();
        const songs = [];
        if (!jsonData) {
          console.error("load failed");
          setLyrics("default");
        } else {
          console.log("load successful");
          jsonData.forEach((song) => {
            songs.push(song);
          });
          setLyrics([...songs]);
          setIsLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchLyrics();
  }, []);

  // const lyricButtons = () => {
  //   // top-[1%] tablet:top-[16%] left-0 right-0 z-[10]

  //   return (
  //     <div
  //       className="absolute top-0 left-0 right-0 z-10 w-[70vw] h-[10vh] desktop:w-[50vw] m-auto"
  //     >
  //       <div className="flex font-arvo text-white justify-center desktop:justify-center items-center">
  //         <button
  //           className="font-arvo bg-black mx-1 p-[5px] text-xs rounded-lg rounded-t-none hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
  //           onClick={() => setSelection("song1")}
  //         >
  //           {process.env.REACT_APP_LYRIC1}
  //         </button>
  //         <button
  //           className="font-arvo bg-black mx-1 p-[5px] text-xs rounded-lg rounded-t-none hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
  //           onClick={() => setSelection("song2")}
  //         >
  //           {process.env.REACT_APP_LYRIC2}
  //         </button>
  //         <button
  //           className="font-arvo bg-black mx-1 p-[5px] text-xs rounded-lg rounded-t-none hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
  //           onClick={() => setSelection("song3")}
  //         >
  //           {process.env.REACT_APP_LYRIC3}
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  const updateLyrics = (title) => {
    setSelection(title);
  };

  const changeselection = () => {
    if (selection === "song3") {
      return (
        <>
          <Song
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={lyrics[2]}
          />
        </>
      );
    } else if (selection === "song2") {
      return (
        <>
          <Song
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={lyrics[1]}
          />
        </>
      );
    } else
      return (
        <>
          <Song
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={lyrics[0]}
          />
        </>
      );
  };

  return (
    <>
      {/* CONTAINER */}
      <>
        <div
          id="notebook"
          className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] desktop:w-[70vw] h-[100vh] tablet:w-[73vw] tablet:h-[73vw] m-auto"
        >
          <LyricSelector updateLyrics={updateLyrics} />
          <div className="bg-black rounded-lg fixed top-0 bottom-0 left-0 right-0 z-[2] w-[98vw] h-[98vh] tablet:w-[73vw] tablet:h-[73vw] m-auto"></div>
          <div className="bg-[#F6EFE4] rounded-lg fixed top-0 bottom-0 left-0 right-0 z-[3] w-[96vw] h-[96vh] tablet:w-[71vw] tablet:h-[71vw] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]">
            <ModalClose
              id="modalCloseButton"
              toggleModal={toggleModal}
              open={open}
            />
          </div>
        </div>
        {/* LYRICS */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[5] m-auto w-[100vw] tablet:w-[70vw] h-[5vh] text-black">
          {!isLoaded ? (
            <p className="fixed top-[25vw] desktop:left-[25%] left-0 right-0 m-auto font-arvo text-3xl text-center">
              loading...
            </p>
          ) : (
            changeselection()
          )}
        </div>
      </>
    </>
  );
}

// CLOSE BUTTON NOT FIRING -- check z indexes
