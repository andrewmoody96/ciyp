import React from "react";

const homeVideo =
  "https://storage.googleapis.com/ciyp-photos/bgVideos/ciypLoop.webm";
const homeVideoMp4 =
  "https://storage.googleapis.com/ciyp-photos/bgVideos/ciypLoop.mp4";

export default function HomeVideo() {
  return (
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
  );
}
