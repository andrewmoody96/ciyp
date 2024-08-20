import React, { useState, useEffect } from "react";
import Header from "../../Reusable/Header";
import Photos from "./photos.js";
import Videos from "./videos.js";
import Press from "./press.js";
import Bio from "./bio.js";
import Music from "./music.js";
const GalleryMobile = "https://storage.googleapis.com/ciyp-photos/epk/galleryMain-Mobile.webp";
const GalleryMain = "https://storage.googleapis.com/ciyp-photos/epk/galleryMain.webp"

export default function Epk() {
  const [view, setView] = useState("default");
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/epk`);
        const jsonData = await res.json();
        const pictures = [];
        const videos = [];
        // removes txt file from jsonData
        jsonData.forEach((file) => {
          if (file.contentType === "video/mp4") {
            videos.push(file);
          } else if (file.contentType !== "text/plain") {
            pictures.push(file);
          }
        });
        setPhotos([...pictures]);
        setMovies([...videos]);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function changeView() {
    if (view === "default") {
      return <Bio />;
    } else if (view === "music") {
      return (
        <>
          <button
            onClick={() => setView("default")}
            className="m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md text-xs p-1 hover:bg-[#B36551]/90"
          >
            back
          </button>
          <Music />
        </>
      );
    } else if (view === "photos") {
      return (
        <>
          <button
            onClick={() => setView("default")}
            className="m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md text-xs p-1 hover:bg-[#B36551]/90"
          >
            back
          </button>
          <article className="rounded-lg text-center mx-2 mb-1 font-moda text-lg">
            {!isLoaded ? (
              <div className="text-white">Loading...</div>
            ) : (
              <>
                <Photos photos={photos} setPhotos={setPhotos} />
              </>
            )}
          </article>
        </>
      );
    } else if (view === "videos") {
      return (
        <>
          <button
            onClick={() => setView("default")}
            className="m-2 text-center text-white bg-auto bg-[#262626]/90 font-moda w-auto rounded-md text-xs p-1 hover:bg-[#B36551]/90"
          >
            back
          </button>
          <article className="flex justify-center text-center mx-2 mb-1 font-moda text-lg">
            <Videos videos={movies} setMovies={setMovies} />
          </article>
        </>
      );
    } else if (view === "press") {
      return (
        <>
          <button
            onClick={() => setView("default")}
            className="m-2 text-center text-white bg-[#262626]/90 font-moda w-auto rounded-md text-xs p-1 hover:bg-[#B36551]/90"
          >
            back
          </button>
          <article className="text-center mx-2 mb-1 font-moda text-lg text-white">
            <Press />
          </article>
        </>
      );
    }
  }

  return (
    <div className="container h-[100vh] w-[100vw] absolute top-0">
      <div className="bg-[#262626]/90 fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%]"></div>
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <div className="w-auto relative top-0 right-0 left-0">
        <img
          src={GalleryMobile}
          alt="the band"
          className="m-auto rounded-lg shadow-[0_20px_50px_rgba(255,255,255,0.1)] tablet:h-[60vh] tablet:hidden"
        ></img>
        <img
          src={GalleryMain}
          alt="the band"
          className="m-auto rounded-lg shadow-[0_20px_50px_rgba(255,255,255,0.1)] hidden tablet:h-[60vh] tablet:block"
        ></img>
        <h1 className="absolute bottom-0 text-white text-center font-moda m-2 text-3xl desktop:static desktop:m-auto">
          Chocolate In Your Pocket
        </h1>
      </div>
      {/* BUTTONS */}
      <div className="flex justify-center tablet:justify-evenly mt-2">
        <button
          onClick={() => setView("default")}
          className="m-2 text-center text-white bg-[#B36551] font-moda tablet:w-[10vw] rounded-md text-xs tablet:text-sm p-2 hover:bg-[#262626]/70 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
        >
          Bio
        </button>
        <button
          onClick={() => setView("music")}
          className="m-2 text-center text-white bg-[#B36551] font-moda tablet:w-[10vw] rounded-md text-xs tablet:text-sm p-2 hover:bg-[#262626] drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
        >
          Music
        </button>
        <button
          onClick={() => setView("photos")}
          className="m-2 text-center text-white bg-[#B36551] font-moda tablet:w-[10vw] rounded-md text-xs tablet:text-sm p-2 hover:bg-[#262626]/70 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
        >
          Photos
        </button>
        <button
          onClick={() => setView("videos")}
          className="m-2 text-center text-white bg-[#B36551] font-moda tablet:w-[10vw] rounded-md text-xs tablet:text-sm p-2 hover:bg-[#262626]/70 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
        >
          Videos
        </button>
        <button
          onClick={() => setView("press")}
          className="m-2 text-center text-white bg-[#B36551] font-moda tablet:w-[10vw] rounded-md text-xs tablet:text-sm p-2 hover:bg-[#262626]/70 drop-shadow-[0_1px_5px_rgba(255,255,255,0.4)]"
        >
          Press
        </button>
      </div>
      <div className="text-center mx-2 font-moda">{changeView()}</div>
      <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible"></div>
    </div>
  );
}
