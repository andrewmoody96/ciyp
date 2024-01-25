import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");

dayjs.extend(isSameOrAfter);

export default function SinglesBG() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(false);
  const [project, setProject] = useState(false);

  let now = dayjs().format("MM-DD-YYYY").toString();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/homepage`);
        const jsonData = await res.json();
        let data = [];
        // removes txt file from jsonData
        jsonData.forEach((file) => {
          // console.log(file.name);
          if (file.contentType !== "text/plain") {
            let name = file.name;
            let trimmed = name.replace("homepage/", "");

            data.push({ name: trimmed, link: file.mediaLink });
          }
        });
        setData([...data]);
        setIsLoaded(true);
        if (dayjs(now).isSameOrAfter(process.env.REACT_APP_PROJECT2_DATE)) {
          setProject(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isLoaded, now]);

  const renderRelease = (photos) => {
    photos.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    // MODIFY LOGIC TO GRAB CORRECT PHOTOS
    if (dayjs(now).isSameOrAfter(process.env.REACT_APP_PROJECT2_DATE)) {
      return (
        <>Album BG</>
        // <img
        //   alt="album art background"
        //   className="fixed top-[50vh] tablet:top-[36vh] desktop:top-[10vh] wide:top-0 left-0 right-0 z-[-1] drop-shadow-[5px_10px_1px_rgba(0,0,0,1)]"
        //   src={photos[3].link}
        // ></img>
      );
    } else if (dayjs(now).isSameOrAfter(process.env.REACT_APP_SINGLE8_DATE)) {
      return (
        <>Eurydice BG</>
        // <img
        //   alt="album art background"
        //   className="fixed top-[50vh] tablet:top-[36vh] desktop:top-[10vh] wide:top-0 left-0 right-0 z-[-1] drop-shadow-[5px_10px_1px_rgba(0,0,0,1)]"
        //   src={photos[3].link}
        // ></img>
      );
    } else if (dayjs(now).isSameOrAfter(process.env.REACT_APP_SINGLE7_DATE)) {
      return (
        <>Uphill BG</>
        // <img
        //   alt="album art background"
        //   className="fixed top-[50vh] tablet:top-[36vh] desktop:top-[10vh] wide:top-0 left-0 right-0 z-[-1] drop-shadow-[5px_10px_1px_rgba(0,0,0,1)]"
        //   src={photos[3].link}
        // ></img>
      );
    }
  };

  return (
    <>
      {/* update styling to reflect new color scheme */}
      <div
        className={`${
          !project ? "bg-black" : "bg-[#eca05e]"
        } fixed top-0 bottom-0 right-0 left-0 z-[-1] desktop:z-[-1]`}
      >
        <div>
          {/* dummy div */}
          <>{!isLoaded ? <div>...loading</div> : renderRelease(data)}</>
        </div>
      </div>
    </>
  );
}
// fix date issues
// MODIFY LOGIC TO GRAB CORRECT PHOTOS
// update styling to reflect new color scheme
