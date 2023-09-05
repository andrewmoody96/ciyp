import React from "react";
import { Link } from "react-router-dom";

export default function Project1Header() {
  return (
    <header>
      <nav className="text-white">
        <ul className="flex flex-col justify-center items-center">
          <button className="p-1 mx-auto my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
            <Link to="/shows">Shows</Link>
          </button>
          <button className="p-1 mx-auto my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
            <a
              href="https://linktr.ee/chocolateinyourpocket"
              target="_blank"
              rel="noreferrer"
              className="mx-1"
            >
              Listen
            </a>
          </button>
          <button className="p-1 mx-auto my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
            {" "}
            <Link to="/contact">Contact</Link>
          </button>
          <button className="p-1 mx-auto my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
            {" "}
            <Link to="/about">About</Link>
          </button>
          <button className="p-1 mx-auto my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
            {" "}
            <Link to="/epk">EPK</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}
