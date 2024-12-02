import React, { useState, useEffect } from "react";
import PhotoShow from "./photos.js";
import VideoShow from "./videos.js";
import ViewSelector from "./viewSelector.js";

export default function Project1GalleryModal() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/dietrying`);
        const jsonData = await res.json();
        const pictures = [];
        const videos = [];
        // removes txt file from jsonData
        jsonData.forEach((file) => {
          if (file.contentType !== "text/plain") {
            if (file.contentType === "video/mp4") {
              videos.push(file);
            } else {
              pictures.push(file);
            }
          }
        });
        setPhotos([...pictures]);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderPhotos = () => {
    return <PhotoShow photos={photos} />;
  };

  return (
    <>
      {/* CONTAINER */}
      <>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] desktop:w-[70vw] h-[100vh] tablet:w-[73vw] m-auto">
          <div className="modalContainer rounded-lg absolute top-0 bottom-0 left-0 right-0 z-[3] w-[94vw] h-[90vh] tablet:w-[71vw] tablet:h-[71vw] desktop:h-auto m-auto">
            {/* GALLERY */}
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[5] m-auto w-[100vw] tablet:w-[70vw] h-[5vh] text-black">
              {!isLoaded ? (
                <p className="fixed top-[25vw] left-0 right-0 m-auto font-moda text-3xl text-center">
                  loading...
                </p>
              ) : (
                <>{renderPhotos()}</>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
