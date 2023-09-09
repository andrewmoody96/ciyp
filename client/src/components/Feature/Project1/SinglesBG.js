import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function SinglesBG() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/homepage`);
        const jsonData = await res.json();
        let data = [];
        // removes txt file from jsonData
        jsonData.forEach((file) => {
          if (file.contentType !== "text/plain") {
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

  const renderRelease = (photos) => {
    let now = dayjs().format("MM-DD-YYYY").toString();
    photos.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    if (now >= process.env.REACT_APP_SINGLE3_DATE) {
      return (
        <img
          alt="album art background"
          className="fixed top-[30vh] bottom-0 tablet:top-[40vh] desktop:top-0 z-[-1] w-[200%]"
          src={photos[2].link}
        ></img>
      );
    } else if (now >= process.env.REACT_APP_SINGLE2_DATE) {
      return (
        <img
          alt="album art background"
          className="fixed top-[30vh] bottom-0 tablet:top-[40vh] desktop:top-0 z-[-1] w-[200%]"
          src={photos[1].link}
        ></img>
      );
    } else if (now >= process.env.REACT_APP_SINGLE1_DATE) {
      return (
        <img
          alt="album art background"
          className="fixed top-[30vh] bottom-0 tablet:top-[40vh] desktop:top-0 z-[-1] w-[200%]"
          src={photos[0].link}
        ></img>
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-[100vw]">
        <div className="bg-black fixed top-0 left-0 right-0 z-[-2] w-[100vw] h-[100vh] desktop:z-[-1]">
          {/* dummy div */}
        </div>
        <>{!isLoaded ? <div>...loading</div> : renderRelease(data)}</>
      </div>
    </>
  );
}
