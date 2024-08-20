import React from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
  const linkRender = () => {
    return (
      <Link to="/backtolife">
        <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-lg text-center w-[30vw] tablet:w-[20vw] desktop:w-[20vw] hover:bg-red-300 hover:text-black">
          Lyrics & More
        </button>
      </Link>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center tablet:my-20 tablet:w-[60vw]">
      <div className="flex justify-center items-center text-sm">
        <a
          href="https://linktr.ee/chocolateinyourpocket"
          target="_blank"
          rel="noreferrer"
          className="mx-1"
        >
          <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-lg text-center w-[30vw] tablet:w-[20vw] desktop:w-[20vw] hover:bg-red-300 hover:text-black">
            Listen
          </button>
        </a>
        {linkRender()}
        <Link to="/contact">
          <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-moda text-black text-sm desktop:text-lg text-center w-[30vw] tablet:w-[20vw] desktop:w-[20vw] hover:bg-red-300 hover:text-black">
            Follow
          </button>
        </Link>
      </div>
      <div className="desktop:my-10 invisible">Hello</div>
    </div>
  );
}
