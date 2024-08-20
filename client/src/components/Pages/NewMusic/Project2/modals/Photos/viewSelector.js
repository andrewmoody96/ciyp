import React from "react";

export default function ViewSelector({ updateView }) {
  const clickHandler = (view) => {
    updateView(view);
  };

  return (
    <div className="absolute top-0 left-0 right-0 w-[70vw] h-[10vh] z-10 desktop:w-[50vw] mx-auto">
      <div className="flex font-moda text-black justify-center desktop:justify-center items-center">
        <button
          className="modalButton font-moda bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("photos")}
        >
          Photos
        </button>
        <button
          className="modalButton font-moda bg-[#e8B380] mx-1 p-[5px] text-xs hover:bg-black hover:text-white"
          onClick={() => clickHandler("videos")}
        >
          Videos
        </button>
      </div>
    </div>
  );
}
