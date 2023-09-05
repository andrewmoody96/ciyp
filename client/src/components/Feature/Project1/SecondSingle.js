import React, { useState, useEffect } from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import SinglesBG from "./SinglesBG.js";

export default function SecondSingle() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/homepage`);
        const jsonData = await res.json();
        let data = [];
        // removes txt file from jsonData
        jsonData.forEach((file) => {
          if (
            file.name !== "homepage/C-Art.jpeg" &&
            file.contentType !== "text/plain"
          ) {
            let name = file.name;
            let trimmed = name.replace("homepage/", "");

            data.push({ name: trimmed, link: file.mediaLink });
          }
        });
        setData([...data]);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isLoaded]);

  function renderPhotos(photos) {
    photos.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    if (photos.length !== 0) {
      return (
        <div className="my-5 m-3 flex flex-col tablet:flex-row justify-center items-center">
          <section className="bg-[#c98c40]/40 border border-[#E8B380] rounded-lg flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)] tablet:w-[40vw] desktop:w-auto">
            <div className="flex flex-col items-center justify-center">
              <p className="mt-10 mb-5 text-2xl desktop:text-4xl font-arvo text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">{`${process.env.REACT_APP_SINGLE2_TITLE}`}</p>
              <img
                alt="album art background"
                className="w-[75vw] m-2 p-2 rounded-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                src={photos[1].link}
              />
            </div>
            <div className="flex flex-row justify-center">
              <button className="p-2 mx-4 my-10 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[40vw] tablet:w-[25vw] desktop:w-[14vw] wide:w-[12vw] hover:bg-red-300 hover:text-black">
                <a
                  href="https://linktr.ee/chocolateinyourpocket"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                >
                  Listen Now
                </a>
              </button>
              <button className="p-2 mx-4 my-10 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[40vw] tablet:w-[25vw] desktop:w-[14vw] wide:w-[12vw] hover:bg-red-300 hover:text-black">
                <Link
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                  to="/contact"
                >
                  Follow
                </Link>
              </button>
            </div>
            <div className="invisible">Hello</div>
          </section>
          <section className="bg-[#c98c40]/40 border border-[#E8B380] rounded-lg flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)] tablet:w-[40vw] desktop:w-auto">
            <div className="flex flex-col items-center justify-center">
              <p className="mt-10 mb-5 text-2xl desktop:text-4xl font-arvo text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">{`${process.env.REACT_APP_SINGLE1_TITLE}`}</p>
              <img
                alt="album art background"
                className="w-[75vw] m-2 p-2 rounded-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                src={photos[0].link}
              />
            </div>
            <div className="flex flex-row justify-center">
              <button className="p-2 mx-4 my-10 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[40vw] tablet:w-[25vw] desktop:w-[14vw] wide:w-[12vw] hover:bg-red-300 hover:text-black">
                <a
                  href="https://linktr.ee/chocolateinyourpocket"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                >
                  Listen Now
                </a>
              </button>
              <button className="p-2 mx-4 my-10 border border-black rounded-lg drop-shadow-[0_1px_5px_rgba(255,255,225,0.4)] bg-[#B36551] font-arvo text-black text-sm desktop:text-lg text-center w-[40vw] tablet:w-[25vw] desktop:w-[14vw] wide:w-[12vw] hover:bg-red-300 hover:text-black">
                <Link
                  className="mx-1 drop-shadow-[0_1px_2px_rgba(201,139,64,1)]"
                  to="/contact"
                >
                  Follow
                </Link>
              </button>
            </div>
            <div className="invisible">Hello</div>
          </section>
        </div>
      );
    } else
      return (
        <h1 className="hidden desktop:block text-2xl mt-2 p-2 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo">
          That's just the way things seem to go.
        </h1>
      );
  }

  return (
    <div className="flex flex-col w-[100%] justify-center items-center overflow-x-hidden">
      <SinglesBG />
      <h1 className="text-5xl text-left text-[#B36551] font-monoton ml-1 my-2 p-3 drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)]">
        Chocolate In Your Pocket
      </h1>
      <Header />
      <h1 className="hidden desktop:block text-2xl mt-2 p-2 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  flex-col justify-center items-center mx-2 my-5 text-center text-white font-arvo">
        That's just the way things seem to go.
      </h1>
      <h1 className="visible desktop:hidden text-white font-arvo text-2xl mt-2 p-2 rounded-lg drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
        That's just the way things seem to go.
      </h1>
      <>{!isLoaded ? <div>...loading</div> : renderPhotos(data)}</>
    </div>
  );
}