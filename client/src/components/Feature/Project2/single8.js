import React from "react";
import Header from "../../Header/index.js";
import { Link } from "react-router-dom";
import SinglesBG from "./SinglesBG.js";

export default function Single8() {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center overflow-x-hidden">
      <SinglesBG />
      <h1 className="text-5xl text-left text-[#B36551] font-monoton ml-1 my-2 p-3 drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]">
        Chocolate In Your Pocket
      </h1>
      <Header />
      <h1 className="hidden desktop:block bg-[#B36551] rounded-lg text-2xl mt-2 p-2 flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo">
        I talked to Hades...<br></br>
        <br></br>
        {`${process.env.REACT_APP_SINGLE8_TITLE}`}
      </h1>
      <h1 className="visible desktop:hidden bg-[#B36551] rounded-lg text-2xl mt-2 p-2 flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo">
        I talked to Hades...<br></br>
        <br></br>
        {`${process.env.REACT_APP_SINGLE8_TITLE}`}
      </h1>
      <div className="my-5 m-3 flex flex-row justify-center items-center">
        <section className="flex flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)] desktop:w-auto max-w-[50vw]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center">
              <button className="p-2 mx-4 my-10 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[40vw] tablet:w-[25vw] desktop:w-[14vw] wide:w-[12vw] hover:bg-red-300 hover:text-black">
                {/* UPDATE TO PROPER LINK */}
                <a
                  href="https://distrokid.com/hyperfollow/chocolateinyourpocket/melting-rewrapped"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                >
                  Listen Now
                </a>
              </button>
              <button className="p-2 mx-4 my-10 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[40vw] tablet:w-[25vw] desktop:w-[14vw] wide:w-[12vw] hover:bg-red-300 hover:text-black">
                <Link
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                  to="/contact"
                >
                  Follow
                </Link>
              </button>
            </div>
          </div>
          <div className="invisible">Hello</div>
        </section>
      </div>
    </div>
  );
}

// REDESIGN FOR BTL THEME
