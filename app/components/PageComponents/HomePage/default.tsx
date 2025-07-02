import HomeVideo from "./homeVideo";
import Signup from "../../Reusable/Connect/index";
import Shows from "../Shows/index";
import FeaturedArt from "./featuredArt";
import { useState } from "react";
import CalModal from "./MODAL-calendar";

// -------------------------DEFAULT PAGE-------------------------------
// This is the main homepage view. Featured info/project, shows, & quick links to socials and contact.
// ------------------------------------------------------------------

export default function Default() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleCalModal = () => setModalOpen((prev) => !prev);

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
          <div className="relative flex justify-center items-center">
            <h1 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white text-center">
              Upcoming Shows<br></br>
            </h1>
            <button
              onClick={toggleCalModal}
              className="absolute bottom-[-62%] shadow-[inset_0_1px_5px_0_rgb(0,0,0);] p-1 mb-2 rounded-t-none rounded-xl bg-[#FFF] border-l border-r border-b border-t-0 border-white font-moda text-black text-sm text-center hover:bg-black hover:text-white font-semibold px-2"
            >
              Subscribe & Never Miss a Show!
            </button>
          </div>
          <div className="h-auto mt-1 invisible">dummy div</div>{" "}
          <div className="mt-5">{<Shows />}</div>
        </section>
        <CalModal isOpen={modalOpen} />
        <div
          id="subscribe"
          className="h-[8vh] tablet:h-[5vh] w-[100vw] invisible"
        ></div>
        <section className="flex flex-col justify-center items-center w-[97vw] desktop:w-[45vw]">
          <h1 className="font-modaCaps bg-[#262626]/25 border border-white px-2 rounded-lg text-[2.2rem] drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] text-white mb-5">
            Subscribe
          </h1>
          <div className="flex justify-center">{<Signup />}</div>
        </section>
        <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
      </div>
    </>
  );
}
