import React from "react";

export default function QuestionSelector({ updateAnswers }) {
  const clickHandler = (member) => {
    updateAnswers(member);
  };

  return (
    <div className="absolute top-0 left-0 right-0 w-[70vw] h-[10vh] z-10 desktop:w-[50vw] mx-auto">
      <div className="flex font-arvo text-black justify-center desktop:justify-center items-center">
        <button
          className="lyricButton font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("Rick")}
        >Rick</button>
        <button
          className="lyricButton font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("Cole")}
        >Cole</button>
        <button
          className="lyricButton font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("Hunter")}
        >Hunter</button>
        <button
          className="lyricButton font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("Trace")}
        >Trace</button>
        <button
          className="lyricButton font-arvo bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("Andrew")}
        >Andrew</button>
      </div>
    </div>
  );
}

// get answers to render