import React from "react";
const art =
  "https://storage.googleapis.com/ciyp-photos/Album%20Art/melting.%20(rewrapped)%20-%20ARTWORK.webp";

export default function ProjectArt() {
  return (
    <>
      <div className="bg-[#eca05e] fixed top-0 bottom-0 right-0 left-0 z-[-1] desktop:z-[-1]">
        <div>
          {/* dummy div */}
          <>
            <img
              alt="album art background"
              className="fixed top-[50vh] tablet:top-[36vh] desktop:top-[10vh] wide:top-0 left-0 right-0 z-[-1] drop-shadow-[5px_10px_1px_rgba(0,0,0,1)]"
              src={art}
            ></img>
          </>
        </div>
      </div>
    </>
  );
}
