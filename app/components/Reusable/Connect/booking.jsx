import PropTypes from "prop-types"; // ES6
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ----------------------BOOKING COMPONENT---------------------------
// Handles form submission for Mailchimp. Renders inside Booking Form.
// ------------------------------------------------------------------

// UX - Improved visual experience when sending message. (ex. "Thanks! We will get back to you shortly.")

export default function Booking({ isActive, onShow }) {
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

  useEffect(() => {}, [emailSent]);

  return (
    <>
      {isActive === true ? (
        <div className="flex flex-col justify-center items-center desktop:w-[50vw]">
          {/* EMAIL SIGNUP */}
          <div className="rounded-lg bg-transparent">
            {/* BOOKING EMAIL FORM */}
            <div className="flex flex-col bg-white/90 border-2 border-[#B36551] rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.6)] justify-center items-center mx-auto shadow-[inset_0_1px_5px_0_rgb(0,0,0);]">
              {!emailSent ? (
                <>
                  <h2 className="text-2xl font-moda mx-2 mt-2 text-center">
                    Booking Inquiries
                  </h2>
                  <p className="font-moda text-center mt-2 text-sm">
                    Want to book Chocolate?
                  </p>
                  <p className="font-moda text-center text-sm">
                    Send us a message.
                  </p>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col justify-center font-moda p-4 w-[90vw] desktop:w-[45vw]"
                  >
                    <label className="my-1">
                      Name
                      <input
                        required="required"
                        type="text"
                        minLength="1"
                        name="from_name"
                        placeholder="enter name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="required border-stone-500 border-2 rounded-md p-1 font-moda w-[100%]"
                      ></input>
                    </label>
                    <label className="my-1">
                      Email
                      <input
                        required="required"
                        type="email"
                        name="user_email"
                        placeholder="email@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="required border-stone-500 border-2 rounded-md p-1 font-moda w-[100%]"
                      ></input>
                    </label>
                    <label className="my-1">
                      Message
                      <br></br>
                      <textarea
                        required="required"
                        name="message"
                        placeholder="type your message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="required border-stone-500 border-2 rounded-md p-1 font-moda w-[100%]"
                      ></textarea>
                    </label>
                    <input
                      type="submit"
                      value="Send"
                      className="button cursor-pointer font-moda bg-[#B36551] rounded-lg p-2 m-2 text-white hover:bg-red-300 hover:text-black text-center"
                      onClick={sendEmail}
                    ></input>
                  </form>
                </>
              ) : (
                <>
                  <h3 className="flex flex-col w-auto font-moda text-xl text-center visible p-2 m-2">
                    Thanks for your message!
                  </h3>
                  <p className="font-moda text-center text-sm mb-5">
                    We will get back to you soon.
                  </p>
                  <button
                    onClick={onShow}
                    className="font-moda text-red-600 mb-2 hover:text-black"
                  >
                    Join our mailing list!
                  </button>
                </>
              )}
            </div>
            <div className="invisible h-10">dummy div</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

Booking.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};
