import React from "react";

export default function LyricSelector({updateLyrics}) {
  
  const clickHandler = (song) => {
    updateLyrics(song)
  }

  return (
    (
      <div className="absolute top-0 left-0 right-0 w-[70vw] h-[10vh] z-10 desktop:w-[50vw] mx-auto">
        <div className="flex font-arvo text-black justify-center desktop:justify-center items-center">
          <button
            className="font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs border-2 tablet:border-t-0 border-black rounded-lg tablet:rounded-t-none hover:bg-black hover:text-white my-2"
            onClick={() => clickHandler("song1")}
          >
            {process.env.REACT_APP_LYRIC1}
          </button>
          <button
            className="font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs border-2 tablet:border-t-0 border-black rounded-lg tablet:rounded-t-none hover:bg-black hover:text-white my-2"
            onClick={() => clickHandler("song2")}
          >
            {process.env.REACT_APP_LYRIC2}
          </button>
          <button
            className="font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs border-2 tablet:border-t-0 border-black rounded-lg tablet:rounded-t-none hover:bg-black hover:text-white my-2"
            onClick={() => clickHandler("song3")}
          >
            {process.env.REACT_APP_LYRIC3}
          </button>
        </div>
      </div>
    )
  );
};

// const PhotoButtons = () => {

// }

// const AboutButtons = () => {

// }