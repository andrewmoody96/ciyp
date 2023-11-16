import React, { useState, useEffect } from "react";
import Song from "./song";
import LyricSelector from "./lyricSelector";
import ModalClose from "../modalClose";

export default function Project1LyricModal({ toggleModal }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [lyrics, setLyrics] = useState("default");
  const [selection, setSelection] = useState("song1");

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
        <div className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] desktop:w-[70vw] h-[100vh] tablet:w-[73vw] m-auto">
          <div className="modalContainer rounded-lg absolute top-0 bottom-0 left-0 right-0 z-[3] w-[94vw] h-[96vh] tablet:w-[71vw] tablet:h-[71vw] desktop:h-auto m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]">
            {/* LYRICS */}
            <LyricSelector updateLyrics={updateLyrics} />
            <ModalClose
              className="z-[11]"
              toggleModal={toggleModal}
              open={true}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[5] m-auto w-[100vw] tablet:w-[70vw] h-[5vh] text-black">
              {!isLoaded ? (
                <p className="fixed top-[25vw] left-0 right-0 m-auto font-arvo text-3xl text-center">
                  loading...
                </p>
              ) : (
                changeselection()
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
