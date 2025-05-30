import PropTypes from "prop-types"; // ES6

// -----------------------DESKTOP NAV BAR----------------------------
// Nav bar component for Desktop view. 
// ------------------------------------------------------------------

export default function Hamburger({ isOpen }) {
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

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
