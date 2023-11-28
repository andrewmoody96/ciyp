import React from "react";
import Project1Cover from "./Project1Cover.png";

export default function EpPhotos() {
  return (
      <img className="h-[35vh]" src={Project1Cover} alt="Slide Show"></img>
  );
}

// Turn into a slideshow
// load images from Google Bucket
// collect photos