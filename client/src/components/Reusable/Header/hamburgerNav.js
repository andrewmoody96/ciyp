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
      <div className="desktop:hidden">
        <ul
          style={{ display: burgerOpen ? "flex" : "none" }}
          className="flex-col items-center tablet:justify-center bg-[#262626] border-r border-b rounded-br-md h-[100vh] w-[50vw] tablet:h-[50vh] tablet:w-[25vw] mt-[3.1rem] absolute font-moda text-white text-4xl "
        >
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <Link reloadDocument to="/">
              Home
            </Link>
          </button>
          {/*Reloads Home Page*/}
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <a onClick={toggleBurger} href="#shows">
              Shows
            </a>
          </button>
          {/* Scroll to Shows Section */}
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <a onClick={toggleBurger} href="#subscribe">
              Subscribe
            </a>
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
        <div
          className="hamburger flex items-center  justify-center desktop:hidden"
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
