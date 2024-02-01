import React from "react";

export default function Event({ description }) {
  return (
    <div className="flex flex-col w-[80vw] tablet:w-[50vw] desktop:w-[30vw]">
      <div className="m-2 px-2 rounded-2xl shadow-[inset_0_1px_5px_0_rgb(0,0,0);] items-center bg-[#B36551]/90 border-4 border-black">
        <span className="p-2 rounded-md flex flex-col" href="">
          <div className="flex flex-col justify-center tablet:flex-row">
            <h3 className="m-1 text-center text-xl text-white font-arvo">
              {`${description[0]}`}
            </h3>
            <h3 className="m-1 text-center text-md hidden tablet:block text-white font-arvo">
              -
            </h3>
            <h3 className="m-1 text-center text-md tablet:text-xl text-white font-arvo">
              {description[1]}
            </h3>
            <h3 className="m-1 text-center text-md tablet:text-xl tablet:hidden text-white font-arvo">
              {description[3]}
            </h3>
          </div>
          <h3 className="m-1 text-center text-md text-white font-arvo">
            {`${description[2]}`}
          </h3>
          <h3 className="m-1 text-center text-md hidden tablet:block tablet:text-xl text-white font-arvo">
            {description[3]}
          </h3>
        </span>
      </div>
    </div>
  );
}