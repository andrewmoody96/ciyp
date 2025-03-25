import { useState } from "react";
import Booking from "./booking";
import Signup from "./signup";

// -------------------------CONTACT PAGE-------------------------------
// Displays links to socials, email subscription signup, & booking forms.
// Renders skeleton and manages state for form rendering.
// --------------------------------------------------------------------

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center">
        <Signup isActive={activeIndex === 0} onShow={() => setActiveIndex(1)} />
        <Booking
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(0)}
          resetEmail={null}
        />
      </div>
    </>
  );
}
