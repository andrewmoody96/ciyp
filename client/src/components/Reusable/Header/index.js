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
          className="text-lg font-moda drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#262626] mb-5 p-[5px] rounded-b-lg hover:bg-[#B36551] hover:text-black"
          onClick={handleToggle}
        >
          {navbarOpen ? `Close` : `Menu`}
        </button>
        <ul
          className={`menuNav flex flex-col justify-center ${
            navbarOpen ? " showMenu" : " hideMenu"
          }`}
        >
          <button className="font-moda bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/">Home</Link>
          </button>
          <button className="font-moda bg-[#B36551] mx-1 p-[5px] rounded-lg hover:bg-white hover:text-black my-3">
            <Link to="/epk">EPK</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}
