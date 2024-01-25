import React from "react";
const headshotAndrew =
  "https://storage.googleapis.com/ciyp-photos/about/aboutAndrew.webp";

export default function Andrew() {
  return (
    <div className="my-5 m-3 flex flex-col justify-center items-center">
      <h2 className="m-2 text-3xl text-center text-white font-arvo bg-[#262626]/75 mt-2 p-1 rounded-lg">
        Andrew
      </h2>
      <div className="aboutPic flex flex-col justify-center items-center tablet:flex-row tablet:justify-evenly mt-2 border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 max-w-[75vw]">
        <div>
          <img
            src={headshotAndrew}
            alt="Andrew headshot"
            className="h-48 max-w-max rounded-lg mt-2 tablet:h-96 tablet:w-auto tablet:rounded-none tablet:rounded-l-lg tablet:mt-0"
          ></img>
        </div>
        <article className="m-2 font-arvo text-white">
          <p className="text-center tablet:text-left">
            <br></br>
            Andrew joined CIYP thinking he could get them into the sugar-free
            chocolate business. When that didn't work out, he settled for
            playing keys and guitar. <br></br> <br></br>Outside of CIYP, he
            works on websites (like this one) and provides audio engineering
            services to other acts. Feel free to contact him via one of the
            links below.
          </p>
          <br></br>
          <ul className="list-none ml-5 text-center">
            {/* Engineering Google Form */}
            <li>
              <a
                href="https://forms.gle/NvuXLyZbPc2dCxcb7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Audio Engineering Inquiry
              </a>
            </li>
            {/* Github */}
            <li>
              <a
                href="https://github.com/andrewmoody96"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                GitHub
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/andrew-moody-919a42165/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
}
