import React from "react";

export default function Project2Text() {
  return (
    <>
      <h1 className="text-3xl desktop:text-5xl text-center text-black font-moda p-2 rounded-lg">
        A couple stitches, you'll be fine. 
      </h1>
      <div className="w-[90vw] tablet:w-auto bg-white/60 border border-[#262626] rounded-lg backdrop:flex flex-col justify-center items-center mt-10 mb-7 mx-auto text-center font-modaba">
        <p className="font-moda text-2xl m-3 text-black">
          <em className="">
            {process.env.REACT_APP_PROJECT2_TITLE}
          </em>
        </p>
        <p className="font-moda m-3 text-black">
          The new album from Chocolate In Your Pocket.
          <br></br>
          Available everywhere you can stream music.
        </p>
      </div>
    </>
  );
}
