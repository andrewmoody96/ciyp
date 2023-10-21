import React, { useState, useEffect } from "react";
import Answer from "./answer.js";
// import LyricSelector from "./lyricSelector";
import ModalClose from "../modalClose";

export default function Project1MakingOf({ toggleModal, open }) {
//   const [isOpen, setIsOpen] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [answers, setAnswers] = useState("default");
  const [selection, setSelection] = useState("");

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const res = await fetch("/api/p1answers");
        const jsonData = await res.json();
        const answers = [];
        if (!jsonData) {
          console.error("load failed");
          setAnswers("default");
        } else {
          console.log("load successful");
          console.log(jsonData);
          jsonData.forEach((answer) => {
            answers.push(answer);
          });
          console.log(answers);
          setAnswers([...answers]);
          setIsLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnswers();
  }, []);

//   const updateLyrics = (title) => {
//     setSelection(title);
//   };

  const changeselection = () => {
    if (selection === "song3") {
      return (
        <>
          <Answer
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={answers[2]}
          />
        </>
      );
    } else if (selection === "song2") {
      return (
        <>
          <Answer
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={answers[1]}
          />
        </>
      );
    } else
      return (
        <>
          <Answer
            className="fixed top-[15%] left-0 right-0 z-[10]"
            track={answers[0]}
          />
        </>
      );
  };

  return (
    <>
      {/* CONTAINER */}
      <>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] desktop:w-[70vw] h-[100vh] tablet:w-[73vw] tablet:h-[73vw] m-auto">
          <div
            className="modalContainer rounded-lg absolute top-0 bottom-0 left-0 right-0 z-[3] w-[94vw] h-[96vh] tablet:w-[71vw] tablet:h-[71vw] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]"
          >
            {/* LYRICS */}
            {/* <LyricSelector updateLyrics={updateLyrics} /> */}
            <ModalClose
              className="z-[11]"
              toggleModal={toggleModal}
              open={true}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 z-[5] m-auto w-[100vw] tablet:w-[70vw] h-[5vh] text-black">
              {/* {!isLoaded ? (
                <p className="fixed top-[25vw] left-0 right-0 m-auto font-arvo text-3xl text-center">
                  loading...
                </p>
              ) : (
                changeselection()
              )} */}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
