import { useState } from "react";
import Hamburger from "./hamburger";
import { Link } from "react-router-dom";
export default function Nav() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <div className="nav">
        <ul
          style={{ display: burgerOpen ? "inline" : "none" }}
          className="bg-[#262626] border-r border-b rounded-br-md h-auto w-[50vw] mt-[3.1rem] absolute font-moda text-white"
        >
          <button className="font-moda m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link to="/">Home</Link>
          </button>
          {/* Shows, Email Signup */}
          <button className="font-moda m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <a href="#shows">Shows</a>
          </button>
          {/* Scroll to Shows Section */}
          <button className="font-moda m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link to="/about">About</Link>
          </button>
          {/* Bio, link to EPK, Member Info */}
          <button className="font-moda m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link to="/contact">Booking</Link>
          </button>
          {/* Email Booking, Instagram Link */}
          <button className="font-moda m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link target="_blank" rel="noreferrer" to="https://linktr.ee/chocolateinyourpocket">Listen</Link>
          </button>
          {/* Link to LinkTree */}
        </ul>
        <div
          className="hamburger flex items-center  justify-center tablet:hidden"
          onClick={toggleBurger}
        >
          <Hamburger isOpen={burgerOpen} />
        </div>
        <h1 className="fixed top-0 right-0 text-4xl text-center text-white font-moda m-2 my-1 p-1">
          CIYP
        </h1>
      </div>
    </>
  );
}
