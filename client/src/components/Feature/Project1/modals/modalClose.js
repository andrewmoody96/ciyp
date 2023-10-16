import React from "react";

export default function ModalClose({ toggleModal, open }) {
  
  const clickHandler = (tOf) => {
    toggleModal(tOf);
    console.log(tOf);
    console.log("clicked");
  };

  console.log(open);

  return (
    <button
      className={`absolute w-[15vw] left-0 right-0 bottom-0 z-[11] font-arvo text-xs tablet:text-sm text-black bg-[#B36551] p-[5px] rounded-lg rounded-b-none hover:bg-black hover:text-white m-auto ${
        open === "openLyrics" ? "block" : "hidden"
      } border-2 border-b-0 border-black`}
      onClick={() => {
        clickHandler("closed");
      }}
    >
      Close
    </button>
  );
}

// BUTTON NOT FIRING -- check z indexes

// const PhotoButtons = () => {

// }

// const AboutButtons = () => {

// }
