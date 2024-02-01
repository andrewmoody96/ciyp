import React from "react";
const headshotCole =
  "https://storage.googleapis.com/ciyp-photos/about/aboutCole.webp";

export default function Cole() {
  return (
    <div className="my-5 m-3 flex flex-col justify-center items-center">
      <h2 className="m-2 text-3xl text-center text-white font-arvo bg-[#262626]/75 mt-2 p-1 rounded-lg">
        Cole
      </h2>
      <div className="aboutPic flex flex-col justify-center items-center tablet:flex-row tablet:justify-evenly mt-2 border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 max-w-[75vw]">
        <div>
          <img
            src={headshotCole}
            alt="Cole headshot"
            className="h-48 max-w-max rounded-lg mt-2 tablet:h-96 tablet:w-auto tablet:rounded-none tablet:rounded-l-lg tablet:mt-0"
          ></img>
        </div>
        <article className="m-2 font-arvo text-white">
          <p className="text-center tablet:text-left">
            Cole is an avid disc golfer with a side gig of playing guitar in
            CIYP. Cole was a commercial music major at Millikin University,
            where he met the rest of the band.
            <br></br>
            <br></br>
            When he’s not busy being a cog in the corporate machine, Cole loves
            teaching early childhood music classes for 6 month to 5 year olds,
            as well as performing for birthday parties. For party inquiries,
            send him an email using the link below.
          </p>
          <br></br>
          <ul className="list-none ml-5 text-center">
            <li>
              <a
                href="mailto:cole.burdick@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Email Cole
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
}
