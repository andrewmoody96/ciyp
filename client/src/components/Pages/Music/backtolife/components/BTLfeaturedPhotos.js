import React from "react";

export default function BTLfeaturedPhotos({ media }) {
  const photos = [];
  let splashImage =
    "https://storage.googleapis.com/ciyp-photos/backtolife/btlfeatured/F1.webp";
  if (!media.length) {
    return <h3 className="text-white">Nothing to Show</h3>;
  } else {
    media.forEach((item) => {
      if (item.name.includes("F1") === false) {
        photos.push(item);
      }
    });
  }

  return (
    <>
      <div>
        <img
          src={splashImage}
          alt="Full Band Splash"
          className="object-contain w-auto tablet:w-[50%] desktop:w-auto max-h-[75vh] h-auto border-2 border-black"
        ></img>
      </div>
      <div className="w-[94vw] desktop:w-[70vw] flex justify-center items-center">
        {photos.map((slideImage, index) => (
          <div className="flex justify-center items-center align-middle">
            <div key={index} className="flex justify-center">
              <div className="flex justify-center m-3">
                <img
                  src={slideImage.url}
                  alt="slideshow"
                  className="object-contain w-auto tablet:w-[50%] desktop:w-auto max-h-[75vh] h-auto border-2 border-black"
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
