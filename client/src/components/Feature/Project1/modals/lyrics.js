import React, { useState, useEffect } from "react";
import Song from "../modals/song";

export default function Project1LyricModal() {
  const [view, setView] = useState("default");
  const [isLoaded, setIsLoaded] = useState(false);
  const [lyrics, setLyrics] = useState("default");

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
          console.log(songs);
          setLyrics([...songs]);
          setIsLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchLyrics();
  }, []);

  const changeView = () => {
    if (view === "song3") {
      return (
        <>
          <div className="fixed top-[5%] left-0 right-0 z-[10] w-[70vw] h-[10vh] desktop:w-[50vw] m-auto">
            <div className="flex font-arvo text-white justify-center desktop:justify-center items-center">
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song1")}
              >
                {process.env.REACT_APP_LYRIC1}
              </button>
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song2")}
              >
                {process.env.REACT_APP_LYRIC2}
              </button>
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song3")}
              >
                {process.env.REACT_APP_LYRIC3}
              </button>
            </div>
          </div>
          <Song
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={lyrics[2]}
          />
        </>
      );
    } else if (view === "song2") {
      return (
        <>
          <div className="fixed top-[5%] left-0 right-0 z-[10] w-[70vw] h-[10vh] desktop:w-[50vw] m-auto">
            <div className="flex font-arvo text-white justify-center desktop:justify-center items-center">
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song1")}
              >
                {process.env.REACT_APP_LYRIC1}
              </button>
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song2")}
              >
                {process.env.REACT_APP_LYRIC2}
              </button>
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song3")}
              >
                {process.env.REACT_APP_LYRIC3}
              </button>
            </div>
          </div>
          <Song
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={lyrics[1]}
          />
        </>
      );
    } else
      return (
        <>
          <div className="fixed top-[5%] left-0 right-0 z-[10] w-[70vw] h-[10vh] desktop:w-[50vw] m-auto">
            <div className="flex font-arvo text-white justify-center desktop:justify-center items-center">
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song1")}
              >
                {process.env.REACT_APP_LYRIC1}
              </button>
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song2")}
              >
                {process.env.REACT_APP_LYRIC2}
              </button>
              <button
                className="font-arvo bg-black mx-1 p-[5px] text-sm rounded-lg hover:bg-[#e8B380] hover:text-black my-2 drop-shadow-[10px_5px_1px_rgba(255,255,255,1)]"
                onClick={() => setView("song3")}
              >
                {process.env.REACT_APP_LYRIC3}
              </button>
            </div>
          </div>
          {/* Look at getting this to center in the div rather than trying to make it fixed position */}
          <Song
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={lyrics[0]}
          />
        </>
      );
  };

  return (
    <>
      <div
        className={`modal1Nav fixed left-0 right-0 top-0 bottom-0 desktop:bottom-4 m-auto w-[98vw] desktop:w-[70vw] drop-shadow-[0_1px_5px_rgba(0,0,0,1)]`}
      >
        {/* CONTAINER */}
        <>
          <div className="flex justify-center items-center w-[100vw] desktop:w-[70vw] h-[100vh]">
            <div className="bg-black rounded-lg fixed top-0 bottom-0 left-0 right-0 desktop:right-[50%] z-[2] w-[98vw] desktop:w-[35vw] h-[98vh] desktop:h-[90vh] m-auto desktop:border desktop:border-[#F6EFE4]"></div>
            <div className="hidden desktop:block bg-black rounded-lg fixed top-0 bottom-0 right-0 left-[50%] z-[2] w-[35vw] h-[100vh] desktop:h-[90vh] m-auto border border-[#F6EFE4]"></div>
            <div className="bg-[#F6EFE4] rounded-lg desktop:rounded-r-none fixed top-0 bottom-0 left-0 right-0 desktop:right-[48%] z-[3] w-[96vw] desktop:w-[33vw] h-[96vh] desktop:h-[88vh] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]"></div>
            <div className="hidden desktop:block bg-[#F6EFE4] rounded-lg rounded-l-none fixed top-0 bottom-0 right-0 left-[48%] z-[3] w-[33vw] h-[98vh] desktop:h-[88vh] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]"></div>
          </div>
        </>
        {/* LYRICS */}
        <>
          <div className="fixed top-[25%] left-0 right-0 z-[9] m-auto w-[100vw] desktop:w-[70vw] h-[5vh] text-black">
            {!isLoaded ? (
              <p className="fixed top-[25vw] desktop:left-[25%] left-0 right-0 m-auto font-arvo text-3xl text-center">
                loading...
              </p>
            ) : (
              changeView()
            )}
          </div>
        </>
      </div>
    </>
  );
}

// NEXT UP (IN ORDER) --
// 6. Make book smaller in desktop mode.
// 9. Keep polishing lyric formatting until it is correct.
// look into StackOverflow solution for modal