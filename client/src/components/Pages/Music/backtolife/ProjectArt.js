import React from "react";
const art =
  "https://storage.googleapis.com/ciyp-photos/Album%20Art/Album%20Art_B2LArt.webp";

export default function ProjectArt() {
  return (
    <>
      <div className="bg-[#242424] fixed top-0 bottom-0 right-0 left-0 z-[-1] desktop:z-[-1]">
        <div>
          {/* dummy div */}
          <>
            <img
              alt="album art background"
              className="fixed top-[50vh] tablet:top-[36vh] desktop:top-[15vh] left-0 right-0 z-[-1] drop-shadow-[5px_10px_1px_rgba(0,0,0,1)]"
              src={art}
            ></img>
          </>
        </div>
      </div>
    </>
  );
}
