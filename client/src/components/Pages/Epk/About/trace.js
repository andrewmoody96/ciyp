import React from "react";
const headshotTrace =
  "https://storage.googleapis.com/ciyp-photos/about/aboutTrace.webp";

export default function Trace() {
  return (
    <div className="my-5 m-3 flex flex-col justify-center items-center">
      <h2 className="m-2 text-3xl text-center text-white font-arvo bg-[#262626]/75 mt-2 p-1 rounded-lg">
        Trace
      </h2>
      <div className="aboutPic flex flex-col justify-center items-center tablet:flex-row tablet:justify-evenly mt-2 border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 max-w-[75vw]">
        <div>
          <img
            src={headshotTrace}
            alt="Trace headshot"
            className="h-48 max-w-max rounded-lg mt-2 tablet:h-96 tablet:w-auto tablet:rounded-none tablet:rounded-l-lg tablet:mt-0"
          ></img>
        </div>
        <article className="m-2 font-arvo text-white">
          <p className="text-center tablet:text-left">
            Always a step ahead when talking music. From creating minimalistic
            compositions, making songs using only brain waves, and producing
            influential pop songs, Trace's versatility has always been his
            greatest strength. <br></br>
            <br></br>His main gig is drumming for CIYP, but Trace also produces
            under ~~~ and composes under Trace Davidson. Check him out on
            Spotify!
          </p>
          <br></br>
          <ul className="list-none ml-5 text-center">
            <li>
              <a
                href="https://open.spotify.com/artist/6eStVYe9QikywAE74c8WZU?si=vZC4nWGuSwi_2iFEwQR4Eg"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Stream ~~~
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/77nSiDBBpu4m5kSY4T7XLK?si=-AystTaeTjG7nk0n5PsAhg"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Stream Trace Davidson
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
}
