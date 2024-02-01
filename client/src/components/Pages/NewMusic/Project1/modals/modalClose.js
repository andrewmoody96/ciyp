import React from "react";

export default function ModalClose({ toggleModal, open }) {
  const clickHandler = (tOf) => {
    toggleModal(tOf);
  };

  console.log(open);

  return (
    <button
      id="modalCloseButton"
      className={`absolute w-[15vw] left-0 right-0 bottom-0 z-[11] font-arvo text-xs tablet:text-sm text-black bg-[#B36551] p-[5px] hover:bg-black hover:text-white m-auto ${
        open === true ? "block" : "hidden"
      }`}
      onClick={() => {
        clickHandler(false);
      }}
    >
      Close
    </button>
  );
}
