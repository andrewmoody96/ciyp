import React from "react";
import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <>
      <div className="hidden desktop:flex">
        <ul className="font-moda text-white">
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link reloadDocument to="/">
              Home
            </Link>
          </button>
          {/*Reloads Home Page*/}
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <a href="#shows">Shows</a>
          </button>
          {/* Scroll to Shows Section */}
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <a href="#subscribe">Subscribe</a>
          </button>
          {/* Subscribe to Email, Social Link */}
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://linktr.ee/chocolateinyourpocket"
            >
              Listen
            </Link>
          </button>
          {/* Link to LinkTree */}
        </ul>
        <h1 className="fixed top-0 right-0 text-4xl text-center text-white font-moda m-2 my-1 p-1">
          CIYP
        </h1>
      </div>
    </>
  );
}
