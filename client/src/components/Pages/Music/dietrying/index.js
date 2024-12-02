import React from "react";
import ProjectArt from "./ProjectArt.js";
import Photos from "./modals/Photos/galleryModal.js";

export default function DieTrying() {
  return (
    <div className="container h-[100vh] absolute top-0">
      <ProjectArt />
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-4xl text-center text-white font-monoton mt-8 p-1 rounded-lg">
            Die Trying
          </h1>
        </div>
        {/* <div className="desktop:mb-10 tablet:mt-4 h-[10vh] hidden tablet:block tablet:invisible"></div> */}
        {/* MAIN CONTAINER */}
        {/* --------------------- */}
        <div className="flex flex-col justify-center items-center my-8">
          <section className="w-[90vw] h-fit bg-white/60 border border-white rounded-lg flex-col justify-center items-center mt-10 mb-7 mx-auto text-center text-black font-moda drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)]">
          <div className={"fixed left-0 right-0 top-0 bottom-0 z-[9]"}>
          <Photos />
        </div>
          </section>
        </div>
      </div>
    </div>
  );
}
