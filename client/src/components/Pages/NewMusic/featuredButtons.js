import React from "react";
import { Link } from "react-router-dom";
import featuredArt from "../../../imagesAndVideos/Back And Forth - ARTWORK.jpg";

export default function Buttons() {
  return (
    <div className="flex flex-col justify-center items-center tablet:my-20 tablet:w-[60vw]">
      {/* NEWEST SINGLES */}
      <section>
        <p className="text-xl text-center text-black font-arvo p-1">
          Back and Forth<br></br>
          <span className="text-lg">Out Now!</span>
        </p>
        <img
          alt="Featured Artwork - Click to Learn More"
          className="border rounded-lg"
          src={featuredArt}
        ></img>
        <div className="flex justify-center items-center text-sm">
          <a
            href="https://linktr.ee/chocolateinyourpocket"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[28vw] tablet:w-[20vw] desktop:w-[20vw] hover:bg-red-300 hover:text-black">
              Listen
            </button>
          </a>
        </div>
      </section>
      {/* MELTING */}
      <section>
        <div className="flex justify-center items-center text-sm">
          <a
            href="https://linktr.ee/chocolateinyourpocket"
            target="_blank"
            rel="noreferrer"
            className="mx-1"
          >
            <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[28vw] tablet:w-[20vw] desktop:w-[20vw] hover:bg-red-300 hover:text-black">
              Listen
            </button>
          </a>
          <Link to="/melting">
            <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[29vw] tablet:w-[20vw] desktop:w-[20vw] hover:bg-red-300 hover:text-black">
              Lyrics & More
            </button>
          </Link>
        </div>
      </section>
      <div className="desktop:my-10 invisible">Hello</div>
    </div>
  );
}
