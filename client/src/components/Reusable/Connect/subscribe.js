import React from "react";

export default function Subscribe() {
  return (
    <>
      <div className="flex flex-col justify-between items-center desktop:w-[45vw]">
        {/* EMAIL SIGNUP */}
        <div className="flex flex-col bg-white/90 rounded-lg justify-center m-2">
          <div className="rounded-lg bg-transparent">
            {/* TODO: onClick to display "Thanks for signing up." ACTION CAN CALL METHOD WHICH CAN PERFORM THE POST?*/}
            <form
              action="https://gmail.us9.list-manage.com/subscribe/post?u=35ccf36e917bbf2fc2fff4fb9&id=d3c0491fe1"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate p-3 w-[90vw] desktop:w-[45vw]"
              noValidate
            >
              <div
                id="mc_embed_signup_scroll"
                className="flex flex-col justify-center items-center"
              >
                <h2 className="text-xl font-arvo text-center">
                  Let's keep in touch.
                </h2>
                <div className="indicates-required text-center mb-2">
                  <span className="asterisk text-[#B36551]">*</span> required
                </div>
                <div className="mc-field-group mb-2 flex justify-center items-center">
                  <label htmlFor="mce-EMAIL" className="font-arvo text-sm">
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
                      className="fab fa-tiktok m-3 fa-2x hover:text-[#B36551]"
                      aria-hidden="true"
                    />
                  </a>
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
                      className="fa fa-instagram m-3 fa-2x hover:text-[#B36551]"
                      aria-hidden="true"
                    />
                  </a>
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
                      className="fa fa-facebook m-3 fa-2x hover:text-[#B36551]"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
              <h4 className="text-xl flex justify-center mx-4 my-2">
                @chocolateinyourpocket
              </h4>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
