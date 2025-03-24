import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// -----------------------SIGNUP COMPONENT---------------------------
// Handles signups for the CIYP email list.
// ------------------------------------------------------------------

import PropTypes from "prop-types";

export default function Signup({ isActive, onShow }) {
  return (
    <>
      {isActive === true ? (
        <div className="flex flex-col justify-center items-center desktop:w-[50vw]">
          {/* EMAIL SIGNUP */}
          <div className="flex flex-col bg-white/90 border-2 border-[#B36551] rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,255,0.6)] justify-center m-2 shadow-[inset_0_1px_5px_0_rgb(0,0,0);]">
            <div className="rounded-lg bg-transparent">
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
                  <h2 className="text-xl font-moda text-center">
                    Let&apos;s keep in touch.
                  </h2>
                  <div className="mc-field-group flex justify-center items-center">
                    <label htmlFor="mce-EMAIL" className="font-moda text-sm">
                      Email Address
                      <span className="asterisk text-[#C89184]">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email border-stone-500 border-2 rounded-md p-1 m-2 font-moda"
                      id="mce-EMAIL"
                      placeholder="email@email.com"
                      autoComplete="off"
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
                  <div className="font-moda indicates-required text-center text-xs mb-2">
                    <span className="asterisk text-[#C89184]">*</span> required
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot flex flex-row items-center justify-between w-full">
                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button cursor-pointer font-moda bg-[#C89184] rounded-lg p-2 text-white hover:bg-red-300 hover:text-black"
                      />
                      <p className="brandingLogo">
                        <a
                          href="http://eepurl.com/h7N6_n"
                          title="Mailchimp - email marketing made easy and fun"
                        >
                          <img
                            width="220px"
                            height="42px"
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
            <div className="w-full font-moda">
              <article className="mx-1 h-auto">
                <div
                  id="socialContainer"
                  className="flex flex-row justify-center text-xs"
                >
                  <div
                    id="tiktokContainer"
                    className="flex flex-col items-center justify-center mx-1"
                  >
                    <a
                      aria-label="{null}"
                      href="https://www.tiktok.com/@chocolateinyourpocket?is_from_webapp=1&sender_device=pc"
                      title="Link to TikTok"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="m-2 fa-2x hover:text-[#C89184]"
                        icon={faTiktok}
                      />
                    </a>
                  </div>
                  <div
                    id="instaContainer"
                    className="flex flex-col items-center justify-center mx-1"
                  >
                    <a
                      aria-label="{null}"
                      href="https://www.instagram.com/chocolateinyourpocket/?hl=en"
                      title="Link to Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="m-2 fa-2x hover:text-[#C89184]"
                        icon={faInstagram}
                      />
                    </a>
                  </div>
                  <div
                    id="fbContainer"
                    className="flex flex-col items-center justify-center mx-1"
                  >
                    <a
                      aria-label="{null}"
                      href="https://www.facebook.com/chocolateinyourpocket/"
                      title="Link to Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="m-2 fa-2x hover:text-[#C89184]"
                        icon={faFacebook}
                      />
                    </a>
                  </div>
                  <h3 className="text-sm flex justify-center items-center">
                    @chocolateinyourpocket
                  </h3>
                </div>
                <br></br>
                <p className="text-sm text-center flex justify-center mx-4 mb-2">
                  Want to book Chocolate?&nbsp;
                  <button onClick={onShow} className="text-red-600">
                    Click Here
                  </button>
                </p>
              </article>
            </div>
          </div>
          <div className="invisible h-10">dummy div</div>
        </div>
      ) : null}
    </>
  );
}

Signup.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};
