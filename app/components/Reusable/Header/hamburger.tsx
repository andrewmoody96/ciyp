// -----------------------HAMBURGER COMPONENT------------------------
// Hamburger icon component for mobile nav.
// ------------------------------------------------------------------

interface HamburgerProps {
  isOpen: boolean;
}

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <>
      <div className="hamburger">
        <div
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
          className="burger"
        ></div>
        <div
          className={"burger " + (isOpen ? "patty2open" : "patty2closed")}
        ></div>
        <div
          style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }}
          className="burger"
        ></div>
      </div>
    </>
  );
}