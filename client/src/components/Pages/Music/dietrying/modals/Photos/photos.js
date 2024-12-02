import React from "react";

const renderPhotos = (imgs) => {
  console.log(imgs);
  
  // imgs.map((i, ))
}

export default function Photos({ photos }) {
  const slideImages = [];

  if (!photos.length) {
    return <h3 className="text-white">No Photos Yet</h3>;
  } else {
    photos.forEach((photo) => {
      slideImages.push(photo.mediaLink);
    });

    return (
      <>
        <div className="fixed top-0 left-0 right-0 bottom-0 desktop:top-0 desktop:bottom-0 w-[94vw] desktop:w-[70vw] h-[100vh] m-auto flex justify-center items-center">
          {renderPhotos(slideImages)}
        </div>
      </>
    );
  }
}
