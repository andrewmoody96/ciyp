import React from "react";

export default function Song({ track }) {
  console.log(`SONG FUNCTION`);
  let song = {
    song: {
      id: track._id,
      title: track.Title,
      lyrics: track.Lyrics,
      number: track.number,
    },
  };

  const data = Object.values(song);
  let words = data[0].lyrics.split("// ");

  const renderSong = () => {
    return words.map((lyric) => (
      <p className="flex flex-wrap text-xs desktop:text-base font-arvo text-black text-center desktop:text-left mb-[2px] desktop:mx-2 desktop:max-w-[35vw]">
        {lyric}
      </p>
    ));
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[9] desktop:top-0 desktop:bottom-0 w-[94vw] desktop:w-[70vw] h-[100vh] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)] flex justify-center items-center">
        <div className="h-[75vh] desktop:h-[75vh] desktop:w-[70vw] flex flex-col desktop:grid desktop:grid-cols-2 justify-center items-center overflow-x-hidden overflow-y-scroll">
          {renderSong()}
        </div>
      </div>
    </>
  );
}
