import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Booking from "./booking";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

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
        <div className="justify-center items-center">{<Booking />}</div>
      </div>
    </>
  );
}
