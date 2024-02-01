import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Booking from "./booking";
import Subscribe from "./subscribe";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const [view, setView] = useState("subscribe");

  const formSelector = () => {
    if (view === "booking") {
      return <Booking />;
    } else return <Subscribe />;
  };

  const sendEmail = (e) => {
    console.log("sendEmail started");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flbsr3u",
        "template_jbdqq69",
        form.current,
        "GE2GzT-ce8oYtsn-e"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");

    // change state so form or button will hide
    setEmailSent(true);
  };

  useEffect(() => {
    // console.log("isUpcoming is: ", isUpcoming);
  }, [emailSent]);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="p-2 mx-2 my-4 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center  w-[25vw] tablet:w-[25vw] desktop:w-[10vw] hover:bg-red-300 hover:text-black"
          onClick={() => {
            setView("subscribe");
          }}
        >
          Subscribe
        </button>
        <button
          className="p-2 mx-2 my-4 rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)] bg-[#B36551] border border-black font-arvo text-white text-sm text-center w-[25vw] tablet:w-[25vs] desktop:w-[10vw] hover:bg-red-300 hover:text-black"
          onClick={() => {
            setView("booking");
          }}
        >
          Booking
        </button>
      </div>
      <div className="justify-center items-center">{formSelector()}</div>
    </>
  );
}
