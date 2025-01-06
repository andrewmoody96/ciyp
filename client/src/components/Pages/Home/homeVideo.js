import React from "react";
import homeWebM from "./B2L-Loop.webm";
import homeMp4 from "./B2L-Loop.mp4";

export default function HomeVideo() {
  return (
    <video
      playsInline
      autoPlay
      loop
      muted
      id="homeVideo"
      className="bg-static m-auto fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%] tablet:h-auto tablet:-top-80 desktop:h-auto desktop:fixed desktop:-top-96 desktop:z-[-1] wide:top-[-700px]"
    >
      <source type="video/webm" src={homeWebM}></source>
      <source type="video/mp4" src={homeMp4}></source>
    </video>
  );
}
