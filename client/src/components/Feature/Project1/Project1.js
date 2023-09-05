import React from "react";
import Header from "../../Header";
import Project1Text from "./Project1Text";
import Buttons from "../featuredButtons";
import SinglesBG from "./SinglesBG";

export default function Project1() {
  return (
    <>
      <SinglesBG />
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <Header />
        <div className="flex items-center justify-between mt-5">
          <h1 className="text-4xl text-center text-black font-bungee mt-2 p-1 rounded-lg">
            Chocolate In Your Pocket
          </h1>
        </div>
        <div className="desktop:mb-10 tablet:mt-4 h-[10vh] hidden tablet:block tablet:invisible">
          {/* Hello */}
        </div>
        <section className="flex flex-col justify-center items-center my-8">
          <h1 className="text-xl text-center font-arvo mt-2 p-2 rounded-lg drop-shadow-[5px_10px_1px_rgba(255,255,255,1)]">
            <Project1Text />
          </h1>
          <Buttons />
        </section>
      </div>
    </>
  );
}
