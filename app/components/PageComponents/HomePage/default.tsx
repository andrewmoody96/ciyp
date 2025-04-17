import HomeVideo from "./homeVideo";
import Signup from "../../Reusable/Connect/index";
import Shows from "../Shows/index";
import featuredArt from "../../../assets/featuredArt.webp";

// -------------------------DEFAULT PAGE-------------------------------
// This is the main homepage view. Featured info/project, shows, & quick links to socials and contact.
// ------------------------------------------------------------------

export default function Default() {
  return (
    <>
      <HomeVideo />
      <div className="h-[100px] my-10 invisible">dummy div</div>{" "}
      <div className="mx-auto my-5 m-3 flex flex-col justify-center items-center">
        <div className="relative w-[85vw] tablet:w-[75vw] desktop:w-[50vw] flex justify-center items-center">
          <img
            width="1200"
            height="1200"
            // eslint-disable-next-line react/no-unknown-property
            fetchpriority="high"
            alt="Back To Life Artwork"
            className="rounded-lg border-2 border-[#B36551] drop-shadow-[2px_1px_10px_rgba(255,255,255,0.7)]"
            src={featuredArt}
          ></img>
          <div className="absolute bottom-[-5%]">
            <button className="shadow-[inset_0_1px_5px_0_rgb(0,0,0);] p-1 mx-2 rounded-xl bg-[#B36551] border border-white font-moda text-white text-base text-center w-auto hover:bg-red-300 hover:text-black">
              <a
                href="https://distrokid.com/hyperfollow/chocolateinyourpocket/back-to-life-2"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-2"
              >
                Stream
              </a>
            </button>
            <button className="shadow-[inset_0_1px_5px_0_rgb(0,0,0);] p-1 mx-2 rounded-xl bg-[#B36551] border border-white font-moda text-white text-base text-center w-auto hover:bg-red-300 hover:text-black">
              <a
                href="https://elasticstage.com/chocolateinyourpocket/releases/back-to-life-album"
                target="_blank"
                rel="noreferrer"
                className="mx-auto p-2"
              >
                Buy the LP
              </a>
            </button>
          </div>
        </div>
        <section className="absolute top-[22%] flex flex-col justify-center items-center w-[95vw] mt-4 mb-2 text-center text-white">
          <p className="font-modaCaps px-2 rounded-lg text-[3.7rem] drop-shadow-[0_1px_5px_rgba(0,0,0,1)] text-white">
            Back To Life
            <br></br>
            <span className="font-moda bg-[#262626]/25 border border-white px-2 rounded-lg text-[0.9rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white text-center m-auto w-[40%]">
              our new album
            </span>
          </p>
        </section>
        <div
          id="shows"
          className="h-[8vh] mt-tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h1 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white my-5">
            Shows
          </h1>
          <div className="overflow-x-scroll">{<Shows />}</div>
        </section>
        <div
          id="subscribe"
          className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h1 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">
            Subscribe
          </h1>
          <div className="overflow-x-scroll">{<Signup />}</div>
        </section>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
