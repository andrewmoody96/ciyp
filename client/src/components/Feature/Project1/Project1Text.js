import React from "react";

export default function Project1Text() {
  return (
    <>
      <h1 className="text-3xl desktop:text-5xl text-center text-black font-arvo p-2 rounded-lg drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
        Where did the time go?
      </h1>
      <div className="w-[90vw] tablet:w-auto bg-white/60 border border-[#262626] rounded-lg backdrop:flex flex-col justify-center items-center mt-10 mb-7 mx-auto text-center font-arvo drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
        <p className="font-arvo text-2xl m-3 text-black">
          <em className="drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
            {process.env.REACT_APP_PROJECT1_TITLE}
          </em>
        </p>
        <p className="font-arvo m-3 text-black drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
          Our debut EP remastered.
          <br></br>
          Available everywhere you can stream music.
        </p>
      </div>
    </>
  );
}
