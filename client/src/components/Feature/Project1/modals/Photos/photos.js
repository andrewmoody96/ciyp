import React, { useState, useEffect } from "react";
import Slideshow from "./slideshow.js";
import ModalClose from "../modalClose";

export default function Project1LyricModal({ toggleModal }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/p1photos`);
        const jsonData = await res.json();
        const pictures = [];
        // removes txt file from jsonData
        jsonData.forEach((file) => {
          if (file.contentType !== "text/plain") {
            pictures.push(file);
          }
        });
        setPhotos([...pictures]);
        console.log(photos);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* CONTAINER */}
      <>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] desktop:w-[70vw] h-[100vh] tablet:w-[73vw] m-auto">
          <div className="modalContainer rounded-lg absolute top-0 bottom-0 left-0 right-0 z-[3] w-[94vw] h-[96vh] tablet:w-[71vw] tablet:h-[71vw] desktop:h-auto m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]">
            {/* LYRICS */}
            <ModalClose
              className="z-[11]"
              toggleModal={toggleModal}
              open={true}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[5] m-auto w-[100vw] tablet:w-[70vw] h-[5vh] text-black">
              {!isLoaded ? (
                <p className="fixed top-[25vw] left-0 right-0 m-auto font-arvo text-3xl text-center">
                  loading...
                </p>
              ) : (
                // renderPhotos()
                // <Slideshow photos={photos} />
                <>Hello</>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
