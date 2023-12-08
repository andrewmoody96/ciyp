import React from "react";
const p2Video =
  "https://storage.googleapis.com/ciyp-photos/bgVideos/p2loop.webm";
const p2VideoMP4 =
  "https://storage.googleapis.com/ciyp-photos/bgVideos/p2loop.mp4";

export default function Project2HomeVideo() {
  return (
    <video
      playsInline
      autoPlay
      loop
      muted
      id="p2Video"
      className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%] tablet:h-auto tablet:-top-80 desktop:h-auto desktop:fixed desktop:-top-[400px] desktop:z-[-1] wide:top-[-700px]"
    >
      <source type="video/webm" src={p2Video}></source>
      <source type="video/mp4" src={p2VideoMP4}></source>
    </video>
  );
}