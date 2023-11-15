import React, { useState, useEffect } from "react";
import Answers from "./answers.js";
import AnswerSelector from "./answerSelector.js";
import ModalClose from "../modalClose.js";

export default function P1QandA({ toggleModal }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  const [selection, setSelection] = useState("Rick");

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const res = await fetch("/api/p1Answers");
        const jsonData = await res.json();
        if (!jsonData) {
          console.error("load failed");
        } else {
          console.log("load successful");
          setData(jsonData);
          setIsLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnswers();
  }, []);

  const updateAnswers = (member) => {
    setSelection(member);
  };

  const changeAnswers = () => {
    if (selection) {
      data[6] = selection;
    } else {
      setIsLoaded(false);
    }
    return (
      <Answers className="fixed top-[15%] left-0 right-0 z-[10]" qA={data} />
    );
  };

  return (
    <>
      {/* CONTAINER */}
      <>
      {/* look into this HEIGHT to fix modal sizing above 990px */}
        <div className="absolute left-0 right-0 top-0 bottom-0 w-[100vw] desktop:w-[70vw] h-[100vh] tablet:w-[73vw] tablet:h-[73vw] m-auto">
          <div className="modalContainer rounded-lg absolute top-0 bottom-0 left-0 right-0 z-[3] w-[94vw] h-[96vh] tablet:w-[71vw] tablet:h-[71vw] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)]">
            {/* Q&A */}
            <AnswerSelector updateAnswers={updateAnswers} />
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
                changeAnswers()
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
