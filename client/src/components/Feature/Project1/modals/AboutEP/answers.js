import React from "react";

export default function Answers({ questions, answers }) {
  // console.log(questions);
  // console.log(answers);

  const display = (q, a) => {
    q.forEach((question) => {
      return (
        <>
          <h3>{question[0]}</h3>
          <p>
            {a[0]}
          </p>
          <h3>{question[1]}</h3>
          <p>
            {a[1]}
          </p>
          <h3>{question[2]}</h3>
          <p>
            {a[2]}
          </p>
          <h3>{question[3]}</h3>
          <p>
            {a[3]}
          </p>
          <h3>{question[4]}</h3>
          <p>
            {a[4]}
          </p>
          <h3>{question[5]}</h3>
          <p>
            {a[5]}
          </p>
        </>
      )
    })
    
  }

  return (
    <>
      {/* Look at trying to center in the div instead of using fixed position */}
      <div className="fixed top-0 left-0 right-0 bottom-0 desktop:top-0 desktop:bottom-0 w-[94vw] desktop:w-[70vw] h-[100vh] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)] flex justify-center items-center">
        <div className="h-auto desktop:h-[75vh] desktop:w-[70vw] flex flex-col justify-center items-center overflow-x-hidden overflow-y-scroll">
          {display(questions, answers)}
        </div>
      </div>
    </>
  );
}

// get answers to render