import HamburgerNav from "./hamburgerNav";
import DesktopNav from "./desktopNav";

// -----------------------HEADER COMPONENT---------------------------
// Allows for render of both desktop & mobile headers.
// ------------------------------------------------------------------

export default function Header() {
  return (
    <header className="nav">
      <HamburgerNav />
      <DesktopNav />
    </header>
  );
}
