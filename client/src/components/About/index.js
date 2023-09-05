import React, { useState } from "react";
import "./aboutStyles.css"


// components
import Header from "../Header";
import Andrew from "./andrew";
import Ashley from "./ashley";
import Cole from "./cole";
import Hunter from "./hunter";
import Rick from "./rick";
import Trace from "./trace";

export default function About() {
  const [member, setMember] = useState("none");

  const homeVideo =
    "https://storage.googleapis.com/ciyp-photos/bgVideos/ciypLoop.webm";
  const homeVideoMp4 =
    "https://storage.googleapis.com/ciyp-photos/bgVideos/ciypLoop.mp4";

  // CLOUD PHOTOS
  const aboutAndrew =
    "https://storage.googleapis.com/ciyp-photos/about/aboutAndrew.webp";
  const aboutAshley =
    "https://storage.googleapis.com/ciyp-photos/about/aboutAshley.webp";
  const aboutCole =
    "https://storage.googleapis.com/ciyp-photos/about/aboutCole.webp";
  const aboutHunter =
    "https://storage.googleapis.com/ciyp-photos/about/aboutHunter.webp";
  const aboutRick =
    "https://storage.googleapis.com/ciyp-photos/about/aboutRick.webp";
  const aboutTrace =
    "https://storage.googleapis.com/ciyp-photos/about/aboutTrace.webp";

  function memberInfo() {
    if (member === "none") {
      return (
        <div
          id="memberButtons"
          className="phone:flex phone:flex-col border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 mt-5 tablet:flex-row gap-2 text-xl text-center text-white font-arvo justify-center max-w-[75vw]"
        >
          <button onClick={() => setMember("rick")} className="m-5">
            <img
              src={aboutRick}
              alt="Rick's pic"
              className="h-[12vh] rounded-md m-auto"
            ></img>
            <p className="text-center m-auto">Rick</p>
          </button>
          <button onClick={() => setMember("cole")} className="m-5">
            <img
              src={aboutCole}
              alt="Cole's pic"
              className="h-[12vh] rounded-md m-auto"
            ></img>
            <p className="text-center m-auto">Cole</p>
          </button>
          <button onClick={() => setMember("hunter")} className="m-5">
            <img
              src={aboutHunter}
              alt="Hunter's pic"
              className="h-[12vh] rounded-md m-auto"
            ></img>
            <p className="text-center m-auto">Hunter</p>
          </button>
          <button onClick={() => setMember("trace")} className="m-5">
            <img
              src={aboutTrace}
              alt="Trace's pic"
              className="h-[12vh] rounded-md m-auto"
            ></img>
            <p className="text-center m-auto">Trace</p>
          </button>
          <button onClick={() => setMember("andrew")} className="m-5">
            <img
              src={aboutAndrew}
              alt="Andrew's pic"
              className="h-[12vh] rounded-md m-auto"
            ></img>
            <p className="text-center m-auto">Andrew</p>
          </button>
          <button onClick={() => setMember("ashley")} className="m-5">
            <img
              src={aboutAshley}
              alt="Ashley's pic"
              className="h-[12vh] rounded-md m-auto"
            ></img>
            <p className="text-center m-auto">Ashley</p>
          </button>
        </div>
      );
    } else if (member === "rick") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMember("none")}
            className="mt-1 text-center text-white bg-[#B36551]/90 font-arvo w-[30vw] rounded-md text-sm p-1 hover:bg-[#262626]"
          >
            All Members
          </button>
          <Rick />
        </div>
      );
    } else if (member === "cole") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMember("none")}
            className="mt-1 text-center text-white bg-[#B36551]/90 font-arvo w-[30vw] rounded-md text-sm p-1 hover:bg-[#262626]"
          >
            All Members
          </button>
          <Cole />
        </div>
      );
    } else if (member === "hunter") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMember("none")}
            className="mt-1 text-center text-white bg-[#B36551]/90 font-arvo w-[30vw] rounded-md text-sm p-1 hover:bg-[#262626]"
          >
            All Members
          </button>
          <Hunter />
        </div>
      );
    } else if (member === "trace") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMember("none")}
            className="mt-1 text-center text-white bg-[#B36551]/90 font-arvo w-[30vw] rounded-md text-sm p-1 hover:bg-[#262626]"
          >
            All Members
          </button>
          <Trace />
        </div>
      );
    } else if (member === "andrew") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMember("none")}
            className="mt-1 text-center text-white bg-[#B36551]/90 font-arvo w-[30vw] rounded-md text-sm p-1 hover:bg-[#262626]"
          >
            All Members
          </button>
          <Andrew />
        </div>
      );
    } else if (member === "ashley") {
      return (
        <div className="flex flex-col items-center">
          <button
            onClick={() => setMember("none")}
            className="mt-1 text-center text-white bg-[#B36551]/90 font-arvo w-[30vw] rounded-md text-sm p-1 hover:bg-[#262626]"
          >
            All Members
          </button>
          <Ashley />
        </div>
      );
    }
  }

  return (
    <div className="container h-[100vh] absolute top-0">
      <video
        playsInline
        autoPlay
        loop
        muted
        id="homeVideo"
        className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%] tablet:h-auto tablet:-top-80 desktop:h-auto desktop:fixed desktop:-top-96 desktop:z-[-1] wide:top-[-700px]"
      >
        <source type="video/webm" src={homeVideo}></source>
        <source type="video/mp4" src={homeVideoMp4}></source>
      </video>
      <div className="my-5 m-3 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <Header />
        </div>
        <h2 className="m-2 text-2xl text-center text-white font-arvo bg-[#262626]/75 mt-2 p-1 rounded-lg">
          Made from the finest ingredients.
        </h2>
        <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
          {memberInfo()}
        </div>
      </div>
    </div>
  );
}
