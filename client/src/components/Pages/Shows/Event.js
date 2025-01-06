import React from "react";

export default function Event({ description }) {
  let date = description[0];
  let venue = description[1];
  let time = description[2];
  let location = description[3];
  let url = description[4];
  let length = description.length;

  console.log(description);

  return (
    <div className="flex flex-col w-[80vw] tablet:w-[50vw] desktop:w-[30vw]">
      <div className="m-2 px-2 rounded-2xl shadow-[inset_0_1px_5px_0_rgb(0,0,0);] items-center bg-[#B36551]/90 border-4 border-black">
        <span className="p-2 rounded-md flex flex-col" href="">
          <div className="flex flex-col justify-center">
            <h2 className="m-1 text-center text-lg tablet:text-lg text-white font-moda">
              {venue}
            </h2>
            <h2 className="m-1 text-center text-md text-white font-moda">
              {date} at {time}
            </h2>
            <h2 className="m-1 text-center text-sm text-white font-moda">
              {location}
            </h2>
            {length === 5 ? (
              <h2 className="m-1 text-center text-md text-black font-moda">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  className="hover:text-white hover:underline"
                >
                  &#127903; BUY TICKETS
                </a>
              </h2>
            ) : null}
          </div>
        </span>
      </div>
    </div>
  );
}
