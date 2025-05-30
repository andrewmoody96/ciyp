import { useState } from "react";
import Hamburger from "./hamburger";

// -----------------------HAMBURGER NAV BAR----------------------------
// Hamburger menu component for Mobile view.
// --------------------------------------------------------------------

export default function HamburgerNav() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => setBurgerOpen((prev) => !prev);

  return (
    <>
      <div className="desktop:hidden">
        <ul
          className={`flex-col items-center tablet:justify-center bg-[#262626] border-r border-b rounded-br-md h-[100vh] w-[50vw] tablet:h-[50vh] tablet:w-[25vw] mt-[3.1rem] absolute font-moda text-white text-4xl ${
            burgerOpen ? "flex" : "hidden"
          }`}
        >
          <button className="m-2 p-[5px] rounded-lg hover:text-[#B36551]">
            <a onClick={() => location.reload()} href="/">
              Home
            </a>
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
            <a
              onClick={toggleBurger}
              target="_blank"
              rel="noreferrer"
              href="https://linktr.ee/chocolateinyourpocket"
            >
              Music
            </a>
          </button>
          {/* Link to LinkTree */}
        </ul>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className="hamburger flex items-center justify-center desktop:hidden"
          onClick={toggleBurger}
          role="menu"
          tabIndex={0}
        >
          <Hamburger isOpen={burgerOpen} />
        </div>
        <h1 className="fixed top-0 right-0 text-4xl text-center text-white font-moda m-2 my-1 p-1">
          <a onClick={() => location.reload()} href="/">
            CIYP
          </a>
        </h1>
      </div>
    </>
  );
}
