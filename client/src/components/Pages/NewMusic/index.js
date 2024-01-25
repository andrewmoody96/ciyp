import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Reusable/Header";
const featuredSingle = "https://storage.googleapis.com/ciyp-photos/Album%20Art/Back%20And%20Forth%20-%20ARTWORK.webp";
const featuredProject = "https://storage.googleapis.com/ciyp-photos/Album%20Art/melting.%20(rewrapped)%20-%20ARTWORK.webp";

export default function NewMusic() {
  return (
    <>
      <div className="bg-[#f5eddc] fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%]"></div>
      <Header />
      <div className="relative top-0 mb-5 mx-3 flex flex-col justify-start items-center">
        <h1 className="text-4xl text-center text-black font-monoton p-1">
          CIYP<br></br>
          <span className="text-2xl text-center text-black font-arvo p-1">
            New Music
          </span>
        </h1>
        <section className="desktop:grid desktop:grid-cols-2">
          {/* NEW SINGLES */}
          <section className="m-2">
            <p className="text-lg text-center text-black font-arvo p-1">
              Back and Forth
            </p>
            <img
              alt="Featured Artwork - Click to Learn More"
              className="border rounded-lg desktop:w-[40vw]"
              src={featuredSingle}
            ></img>
            <div className="flex justify-center items-center text-sm">
              <a
                href="https://linktr.ee/chocolateinyourpocket"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[28vw] tablet:w-[20vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                  Listen
                </button>
              </a>
            </div>
          </section>
          {/* MELTING */}
          <section className="m-2">
            <p className="text-lg text-center text-black font-arvo p-1">
              melting. (rewrapped)
            </p>
            <img
              alt="Featured Artwork - Click to Learn More"
              className="border rounded-lg desktop:w-[40vw]"
              src={featuredProject}
            ></img>
            <div className="flex justify-center items-center text-sm">
              <a
                href="https://linktr.ee/chocolateinyourpocket"
                target="_blank"
                rel="noreferrer"
                className="mx-1"
              >
                <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[28vw] tablet:w-[20vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                  Listen
                </button>
              </a>
              <Link to="/melting">
                <button className="p-1 mx-2 my-2 desktop:my-5 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[29vw] tablet:w-[20vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black">
                  Lyrics & More
                </button>
              </Link>
            </div>
            <div className="h-[10vh] invisible"></div>
          </section>
        </section>
      </div>
    </>
  );
}
