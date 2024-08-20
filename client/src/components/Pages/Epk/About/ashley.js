import React from "react";
const headshotAshley =
  "https://storage.googleapis.com/ciyp-photos/about/aboutAshley.webp";

export default function Ashley() {
  return (
    <div className="my-5 m-3 flex flex-col justify-center items-center">
      <h2 className="m-2 text-3xl text-center text-white font-moda bg-[#262626]/75 mt-2 p-1 rounded-lg">
        Ashley
      </h2>
      <div className="aboutPic flex flex-col justify-center items-center tablet:flex-row tablet:justify-evenly mt-2 border-4 border-[#B36551]/90 rounded-lg bg-[#262626]/75 max-w-[75vw]">
        <div>
          <img
            src={headshotAshley}
            alt="Ashley headshot"
            className="h-48 max-w-max rounded-lg mt-2 tablet:h-96 tablet:w-auto tablet:rounded-none tablet:rounded-l-lg tablet:mt-0"
          ></img>
        </div>
        <article className="m-2 font-moda text-white">
          <p className="text-center tablet:text-left">
            <br></br>
            Ashley is the manager of CIYP— a.k.a the photographer, wardrobe
            designer, booking agent, and social media curator. In her free time,
            she enjoys spending time with her family, friends, and her dog,
            Griffin. <br></br>She is a self-proclaimed collector of new creative
            endeavors. Keep up with her on Instagram at @ciypashley or @ashcolb.
            Feel free to direct any other inquiries to her email.
          </p>
          <br></br>
          <ul className="list-none ml-5 text-center">
            <li>
              <a
                href="https://www.instagram.com/ashcolb/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                @ashcolb - Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ciypashley/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                @ciypashley - Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:ciypmanagement@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B36551]"
              >
                Email Ashley
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div className="h-[10vh]"></div>
    </div>
  );
}
