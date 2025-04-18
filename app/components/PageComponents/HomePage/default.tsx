import HomeVideo from "./homeVideo";
import Signup from "../../Reusable/Connect/index";
import Shows from "../Shows/index";
import FeaturedArt from "./featuredArt";

// -------------------------DEFAULT PAGE-------------------------------
// This is the main homepage view. Featured info/project, shows, & quick links to socials and contact.
// ------------------------------------------------------------------

export default function Default() {
  return (
    <>
      <HomeVideo />
      <div className="h-[100px] my-10 invisible">dummy div</div>{" "}
      <div className="mx-auto my-5 m-3 flex flex-col justify-center items-center">
        <FeaturedArt />
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
