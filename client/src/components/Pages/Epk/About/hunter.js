import React from "react";
const headshotHunter =
  "https://storage.googleapis.com/ciyp-photos/about/aboutHunter.webp";

export default function Hunter() {
  return (
    <div className="my-5 m-3 flex flex-col justify-center items-center">
      <h2 className="m-2 text-3xl text-center text-white font-moda bg-[#262626]/75 mt-2 p-1 rounded-lg">
        Hunter
      </h2>
      <div className="aboutPic flex flex-col justify-center items-center tablet:flex-row tablet:justify-evenly mt-2 border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 max-w-[75vw]">
        <div>
          <img
            src={headshotHunter}
            alt="Hunter headshot"
            className="h-48 max-w-max rounded-lg mt-2 tablet:h-96 tablet:w-auto tablet:rounded-none tablet:rounded-l-lg tablet:mt-0"
          ></img>
        </div>
        <article className="m-2 font-moda text-white">
          <p className="text-center tablet:text-left">
            <br></br>
            Hunter is the bassist for CIYP. His claim to fame is originating the
            band name.
            <br></br>
            <br></br>When Hunter isn’t playing with CIYP, he can be found at
            Gremlen Studios as a staff engineer and co-owner, as well as a staff
            member at College of DuPage. Book him for a session using the link
            below.
          </p>
          <br></br>
          <ul className="list-none ml-5 text-center">
            <li>
              <a
                href="https://www.gremlenstudios.com/booknow"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Book Hunter at Gremlen
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
}
