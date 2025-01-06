import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerNav"
import DesktopNav from "./desktopNav";

export default function Header() {
  return (
    <header className="nav">
      <HamburgerMenu />
      <DesktopNav />
    </header>
  );
}