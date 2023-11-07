import React, { useState, useEffect } from "react";
import Answers from "./answers.js";
import ModalClose from "../modalClose.js";
import AnswerSelector from "./answerSelector.js";

export default function P1QandA({ toggleModal }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selection, setSelection] = useState("");

  const rick = [];
  const cole = [];
  const hunter = [];
  const trace = [];
  const andrew = [];
  const questions = [];

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const res = await fetch("/api/p1Answers");
        const jsonData = await res.json();

        if (!jsonData) {
          console.error("load failed");
        } else {
          console.log("load successful");
          jsonData.forEach((obj) => {
            let arr = Object.values(obj);
            let vals = arr.pop();
            questions.push(vals);
          });
          // console.log(questions);
          jsonData.forEach((answer) => {
            let arr = Object.values(answer);
            let vals = arr.slice(0, 6);
            vals.forEach((answer) => {
              if (answer.endsWith("Rick")) {
                rick.push(answer);
              } else if (answer.endsWith("Cole")) {
                cole.push(answer);
              } else if (answer.endsWith("Hunter")) {
                hunter.push(answer);
              } else if (answer.endsWith("Trace")) {
                trace.push(answer);
              } else if (answer.endsWith("Andrew")) {
                andrew.push(answer);
              }
            });
          });
          setIsLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnswers();
  });

  const updateAnswers = (member) => {
    setSelection(member);
  };

  const changeAnswers = () => {
    if (selection === "Cole") {
      return (
        <>
          <Answers
            className="fixed top-[15%] left-0 right-0 z-[10]"
            questions={questions}
            answers={cole}
          />
        </>
      );
    } else if (selection === "Hunter") {
      return (
        <>
          <Answers
            className="fixed top-[15%] left-0 right-0 z-[10]"
            questions={questions}
            answers={hunter}
          />
        </>
      );
    } else if (selection === "Trace") {
      return (
        <>
          <Answers
            className="fixed top-[15%] left-0 right-0 z-[10]"
            questions={questions}
            answers={trace}
          />
        </>
      );
    } else if (selection === "Andrew") {
      return (
        <>
          <Answers
            className="fixed top-[15%] left-0 right-0 z-[10]"
            questions={questions}
            answers={andrew}
          />
        </>
      );
    } else {
      return (
        <>
          <Answers
            className="fixed top-[15%] left-0 right-0 z-[10]"
            questions={questions}
            answers={[...rick]}
          />
        </>
      );
    }
  };

  return (
    <>
      {/* CONTAINER */}
      <>
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

// get answers to render