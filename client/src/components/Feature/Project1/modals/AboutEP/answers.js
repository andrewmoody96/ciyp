import React from "react";

export default function Answers({ questions, answers }) {
  console.log(questions);
  console.log(answers);

  // updateAnswers.forEach((answer) => {
  //   let answers = [];
  //   answers.push(
  //     question.a1,
  //     question.a2,
  //     question.a3,
  //     question.a4,
  //     question.a5
  //   );
  //   console.log(answers);
  // });

  return (
    <>
      {/* Look at trying to center in the div instead of using fixed position */}
      <div className="fixed top-0 left-0 right-0 bottom-0 desktop:top-0 desktop:bottom-0 w-[94vw] desktop:w-[70vw] h-[100vh] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)] flex justify-center items-center">
        <div className="h-auto desktop:h-[75vh] desktop:w-[70vw] flex flex-col justify-center items-center overflow-x-hidden overflow-y-scroll">
          {/* {renderAnswers(answers[0])} */}
        </div>
      </div>
    </>
  );
}

// Received all questions/answers.
// Show question at the top.
// Loop through answers, until different quetsion is selected. 
// Wait 10 seconds before answer changes.