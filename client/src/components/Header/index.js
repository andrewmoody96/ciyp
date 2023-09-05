import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <header>
      <nav className="navBar text-white">
        <button
          className="text-xl font-arvo drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#262626] mt-5 mb-6 p-[5px] rounded-lg hover:bg-[#B36551] hover:text-black"
          onClick={handleToggle}
        >
          {navbarOpen ? `Close` : `Menu`}
        </button>
        <ul
          className={`menuNav flex flex-col justify-center ${
            navbarOpen ? " showMenu" : " hideMenu"
          }`}
        >
          <button className="font-arvo bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/">Home</Link>
          </button>
          <button className="font-arvo bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/shows">Shows</Link>
          </button>
          <button className="font-arvo bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <a
              href="https://linktr.ee/chocolateinyourpocket"
              target="_blank"
              rel="noreferrer"
              className="mx-1"
            >
              Listen
            </a>
          </button>
          <button className="font-arvo bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/contact">Contact</Link>
          </button>
          <button className="font-arvo bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/about">About</Link>
          </button>
          <button className="font-arvo bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/epk">EPK</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}
