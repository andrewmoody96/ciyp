import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Booking() {
  // const [subbed, setSubbed] = useState(false);
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
      <div className="flex flex-col justify-between items-center desktop:w-[45vw]">
        {/* BOOKING EMAIL FORM */}
        <div className="flex flex-col bg-white/90 rounded-lg justify-center pt-5 m-2">
          {!emailSent ? (
            <>
              <h2 className="text-2xl font-arvo mx-2 text-center">
                Booking Inquiries
              </h2>
              <p className="font-arvo text-center mt-2 text-sm">
                Want to book Chocolate?
              </p>
              <p className="font-arvo text-center text-sm">
                Send us a message.
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col justify-center font-arvo p-4 w-[90vw] desktop:w-[45vw]"
              >
                <label>Name</label>
                <input
                  required="required"
                  type="text"
                  minLength="1"
                  name="from_name"
                  placeholder="enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="required border-stone-500 border-2 rounded-md p-1 m-2 font-arvo"
                ></input>
                <label>Email</label>
                <input
                  required="required"
                  type="email"
                  name="user_email"
                  placeholder="email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="required border-stone-500 border-2 rounded-md p-1 m-2 font-arvo"
                ></input>
                <label>Message</label>
                <textarea
                  required="required"
                  name="message"
                  placeholder="type your message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="required border-stone-500 border-2 rounded-md p-1 m-2 font-arvo"
                ></textarea>
                <input
                  type="submit"
                  value="Send"
                  className="button cursor-pointer font-arvo bg-[#B36551] rounded-lg p-2 m-2 text-white hover:bg-red-300 hover:text-black text-center"
                  onClick={sendEmail}
                ></input>
              </form>
            </>
          ) : (
            <>
              <h3 className="flex flex-col w-auto font-arvo text-xl text-center visible p-2 m-2">
                Thanks for your message!
              </h3>
              <p className="font-arvo text-center text-sm mb-5">
                We will get back to you soon.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
