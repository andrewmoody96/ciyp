import React from "react";
import { Link } from "react-router-dom";
import goBack from "./goBack.jpeg";

export default function NotFound() {
  return (
    <>
      <div className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%]"></div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="text-white mb-10 bg-[#B36551]/90 rounded-lg drop-shadow-[0_1px_10px_rgba(0,0,0,1)]">
            <section className="p-2 text-center">
              <h2 className="m-2 text-4xl font-arvo drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">404: Not Found</h2>
              <h3 className="text-xl font-arvo text-center drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
                Welcome to Trace's Place. If you're here, you're not supposed to be.
                Check your signal flow and try again.
              </h3>
              <button className="bg-black text-white my-5 py-2 px-4 rounded-full">
                <Link to="/">Homepage</Link>
              </button>
            </section>
        </div>
        </div>
        <img
          className="mt-5 rounded-lg drop-shadow-[0_1px_30px_rgba(0,0,0,1)]"
          src={goBack}
          alt="404Trace"
        ></img>
      </div>
    </>
  );
}

// UPDATE FOR NEW STYLE