export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger ml-2">
        <div
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
          className="burger"
        ></div>
        <div
          className={"burger " + (isOpen ? "patty2open" : "patty2closed")}
        // className="burger"
        ></div>
        <div
          style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }}
          className="burger"
        ></div>
      </div>
    </>
  );
}
