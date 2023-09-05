import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import connectVideo from "../../imagesAndVideos/connectLoop.webm";
import connectVideoMp4 from "../../imagesAndVideos/connectLoop.mp4";
import Header from "../Header";

export default function Contact() {
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

  // const signUp = (e) => {
  //   console.log("signUp started");
  //   e.preventDefault();

  //   // setEmailSub("");
  // };

  return (
    <div className="h-[100vh] absolute top-0">
      <video
        playsInline
        autoPlay
        loop
        muted
        id="homeVideo"
        className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%] tablet:h-auto tablet:-top-80 desktop:h-auto desktop:fixed desktop:-top-96 desktop:z-[-1] wide:top-[-700px]"
      >
        <source type="video/webm" src={connectVideo}></source>
        <source type="video/mp4" src={connectVideoMp4}></source>
      </video>
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <h1 className="text-4xl text-center text-white font-monoton mt-2 p-1 rounded-lg">
        Contact   Us
      </h1>
      <div className="h-[5vh] tablet:h-[10vh] invisible">
        {/* dummy div for spacing */}
      </div>
      <div className="flex flex-col justify-between items-center tablet:flex-row tablet:justify-between tablet:items-center">
        {/* EMAIL SIGNUP */}
        <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] flex flex-col bg-white/90 rounded-lg justify-center m-2">
          <div className="rounded-lg bg-transparent">
            {/* TODO: onClick to display "Thanks for signing up." ACTION CAN CALL METHOD WHICH CAN PERFORM THE POST?*/}
            <form
              action="https://gmail.us9.list-manage.com/subscribe/post?u=35ccf36e917bbf2fc2fff4fb9&id=d3c0491fe1"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate p-3"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2 className="text-2xl font-arvo text-center">Subscribe</h2>
                <div className="indicates-required text-center mb-5">
                  <span className="asterisk text-[#B36551]">*</span> required
                </div>
                <div className="mc-field-group mb-2">
                  <label htmlFor="mce-EMAIL" className="font-arvo">
                    Email Address
                    <span className="asterisk text-[#B36551]">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email border-stone-500 border-2 rounded-md p-1 m-2 font-arvo"
                    id="mce-EMAIL"
                    placeholder="email@email.com"
                  />
                </div>
                <div
                  id="mce-responses"
                  className="clear foot"
                  style={{ display: "none" }}
                >
                  <div className="response" id="mce-error-response"></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_35ccf36e917bbf2fc2fff4fb9_d3c0491fe1"
                    tabIndex={-1}
                    defaultValue
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot flex flex-row items-center justify-between w-full">
                    <input
                      type="submit"
                      defaultValue="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button cursor-pointer font-arvo bg-[#B36551] rounded-lg p-2 text-white hover:bg-red-300 hover:text-black"
                    />
                    <p className="brandingLogo">
                      <a
                        href="http://eepurl.com/h7N6_n"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <img
                          src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                          className="h-5"
                          alt="Mailchimp Logo"
                        ></img>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full font-arvo">
            <article className="mx-2 h-auto">
              <div
                id="socialContainer"
                className="flex flex-row justify-center"
              >
                <div
                  id="tiktokContainer"
                  className="flex flex-col items-center justify-center mx-2"
                >
                  <a
                    aria-label="{null}"
                    href="https://www.tiktok.com/@chocolateinyourpocket?is_from_webapp=1&sender_device=pc"
                    title="Link to TikTok"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-tiktok m-3 fa-4x hover:text-[#B36551]"
                      aria-hidden="true"
                    />
                  </a>
                  <h4>TikTok</h4>
                </div>
                <div
                  id="instaContainer"
                  className="flex flex-col items-center justify-center mx-2"
                >
                  <a
                    aria-label="{null}"
                    href="https://www.instagram.com/chocolateinyourpocket/?hl=en"
                    title="Link to Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-instagram m-3 fa-4x hover:text-[#B36551]"
                      aria-hidden="true"
                    />
                  </a>
                  <h4>Instagram</h4>
                </div>
                <div
                  id="fbContainer"
                  className="flex flex-col items-center justify-center mx-2"
                >
                  <a
                    aria-label="{null}"
                    href="https://www.facebook.com/chocolateinyourpocket/"
                    title="Link to Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa fa-facebook m-3 fa-4x hover:text-[#B36551]"
                      aria-hidden="true"
                    />
                  </a>
                  <h4>Facebook</h4>
                </div>
              </div>
              <h4 className="text-xl flex justify-center m-4">
                @chocolateinyourpocket
              </h4>
            </article>
          </div>
        </div>
        {/* BOOKING EMAIL FORM */}
        <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] flex flex-col bg-white/90 rounded-lg justify-center pt-5 m-2">
          {!emailSent ? (
          <>
            <h2 className="text-2xl font-arvo mx-2 text-center">
              Booking Inquiries
            </h2>
            <p className="font-arvo text-center mt-2 text-sm">
              Want to book Chocolate?
            </p>
            <p className="font-arvo text-center text-sm">Send us a message.</p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center font-arvo p-4"
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
            <p className="font-arvo text-center text-sm mb-5">We will get back to you soon.</p>
          </>
          )}
        </div>
      </div>
      <div className="h-[10vh] tablet:h-[20vh] invisible">
        {/* dummy div for spacing */}
      </div>
    </div>
  );
}
