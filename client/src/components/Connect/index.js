import React from "react";
import connectVideo from "../../imagesAndVideos/connectLoop.webm";
import connectVideoMp4 from "../../imagesAndVideos/connectLoop.mp4";
// import Header from "../Header";
function Connect() {
  return (
    // STYLES: Add background color or whatever
    // Figured out how to remove personal addy from mailchimp redirect????
    <>
        <video
                controls
                autoPlay
                loop
                muted
                id="homeVideo"
                className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%] tablet:h-auto tablet:-top-80 desktop:h-auto desktop:fixed desktop:-top-96 desktop:z-[-1] wide:top-[-700px]"
            >
                <source type="video/webm" src={connectVideo}></source>
                <source type="video/mp4" src={connectVideoMp4}></source>
            </video>
        <div className="flex flex-col bg-white/90 rounded-lg">
          <div className="flex-col items-center">
            <div id="mc_embed_signup" className="rounded-lg">
              <form
                action="https://gmail.us9.list-manage.com/subscribe/post?u=35ccf36e917bbf2fc2fff4fb9&id=d3c0491fe1"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate p-3"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <h2 className="text-2xl font-arvo m-2 text-center">Subscribe</h2>
                  <div className="indicates-required text-center mb-5">
                    <span className="asterisk text-red-600">*</span> required
                  </div>
                  <div className="mc-field-group mb-2">
                    <label htmlFor="mce-EMAIL" className="font-arvo">
                      Email Address<span className="asterisk text-red-600">*</span>
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
                        className="button cursor-pointer font-arvo bg-red-600 rounded-lg p-2 text-white hover:bg-red-300 hover:text-black"
                      />
                      <p className="brandingLogo">
                        <a
                          href="http://eepurl.com/h7N6_n"
                          title="Mailchimp - email marketing made easy and fun"
                        >
                          <img
                            src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                            className="h-5" alt="Mailchimp Logo"
                          ></img>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-full font-arvo">
              <article className="m-3 h-100">
                <div id="socialContainer" className="flex flex-row justify-center">
                  <div
                    id="tiktokContainer"
                    className="flex flex-col items-center justify-center m-2"
                  >
                    <a
                      aria-label="{null}"
                      href="https://www.tiktok.com/@chocolateinyourpocket?is_from_webapp=1&sender_device=pc"
                      title="Link to TikTok"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-tiktok m-3 fa-4x hover:text-red-600" aria-hidden="true" />
                    </a>
                    <h4>TikTok</h4>
                  </div>
                  <div
                    id="instaContainer"
                    className="flex flex-col items-center justify-center m-2"
                  >
                    <a
                      aria-label="{null}"
                      href="https://www.instagram.com/chocolateinyourpocket/?hl=en"
                      title="Link to Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram m-3 fa-4x hover:text-red-600" aria-hidden="true" />
                    </a>
                    <h4>Instagram</h4>
                  </div>
                  <div
                    id="fbContainer"
                    className="flex flex-col items-center justify-center m-2"
                  >
                    <a
                      aria-label="{null}"
                      href="https://www.facebook.com/chocolateinyourpocket/"
                      title="Link to Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook m-3 fa-4x hover:text-red-600" aria-hidden="true" />
                    </a>
                    <h4>Facebook</h4>
                  </div>
                </div>
                <h4 className="text-xl flex justify-center m-5">@chocolateinyourpocket</h4>
              </article>
            </div>
          </div>
        </div>
    </>
  );
}

export default Connect;
