import React from "react";
const p1Art = 'https://storage.googleapis.com/ciyp-photos/homepage/project1cover.webp'

export default function P1ArtBG() {
  
  return (
    <>
      <div
        className="bg-[#eca05e] fixed top-0 bottom-0 right-0 left-0 z-[-1] desktop:z-[-1]"
      >
        <div>
          {/* dummy div */}
          <><img
          alt="album art background"
          className="fixed top-[50vh] tablet:top-[36vh] desktop:top-[10vh] wide:top-0 left-0 right-0 z-[-1] drop-shadow-[5px_10px_1px_rgba(0,0,0,1)]"
          src={p1Art}
        ></img></>
        </div>
      </div>
    </>
  );
}
