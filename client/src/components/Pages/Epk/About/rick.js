import React from "react";
const headshotRick =
  "https://storage.googleapis.com/ciyp-photos/about/aboutRick.webp";

export default function Rick() {
  return (
    <div className="my-5 m-3 flex flex-col justify-center items-center">
      <h2 className="m-2 text-3xl text-center text-white font-arvo bg-[#262626]/75 mt-2 p-1 rounded-lg">
        Rick
      </h2>
      <div className="aboutPic flex flex-col justify-center items-center tablet:flex-row tablet:justify-evenly mt-2 border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 max-w-[75vw]">
        <div>
          <img
            src={headshotRick}
            alt="Rick headshot"
            className="h-48 max-w-max rounded-lg mt-2 tablet:h-96 tablet:w-auto tablet:rounded-none tablet:rounded-l-lg tablet:mt-0"
          ></img>
        </div>
        <article className="m-2 font-arvo text-white">
          <p className="text-center tablet:text-left">
            <br></br>
            Alex Erickson, affectionately referred to as Rick, is a frontman by
            trade and philosopher by nature. They started dreading their
            existence at age 5 and writing music soon after. "Be the breeze."
          </p>
          <br></br>
          <ul className="list-none ml-5 text-center">
            <li>
              <a
                href="https://songwhip.com/alex-erickson/guest-bedroom"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Stream <em>Guest Bedroom</em>
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
}
