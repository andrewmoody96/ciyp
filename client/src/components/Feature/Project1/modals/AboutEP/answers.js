import React from "react";

export default function Answers({ qA }) {
  let bandmate = qA[6];

  const displayQA = () => {
    if (bandmate === "Cole") {
      let r = 6;
      qA.splice(r, 1);
      return (
        <>
          {qA.map((e) => {
            return (
              <div className="flex flex-col flex-wrap justify-start text-left mx-3 my-[0.3rem] desktop:my-[0.5rem]">
                <h6 className="text-xs font-arvo font-bold text-black text-left">
                  {e.question}
                </h6>
                <p className="text-xs desktop:text-sm font-arvo text-black text-left">{e.cb}</p>
              </div>
            );
          })}
        </>
      );
    } else if (bandmate === "Hunter") {
      let r = 6;
      qA.splice(r, 1);
      return (
        <>
          {qA.map((e) => {
            return (
              <div className="flex flex-col flex-wrap justify-start text-left mx-3 my-[0.3rem] desktop:my-[0.5rem]">
                <h6 className="text-xs font-arvo font-bold text-black text-left">
                  {e.question}
                </h6>
                <p className="text-xs desktop:text-sm font-arvo text-black text-left">
                  {e.hs}
                </p>
              </div>
            );
          })}
        </>
      );
    } else if (bandmate === "Trace") {
      let r = 6;
      qA.splice(r, 1);
      return (
        <>
          {qA.map((e) => {
            return (
              <div className="flex flex-col flex-wrap justify-start text-left mx-3 my-[0.3rem] desktop:my-[0.5rem]">
                <h6 className="text-xs font-arvo font-bold text-black text-left">
                  {e.question}
                </h6>
                <p className="text-xs desktop:text-sm font-arvo text-black text-left">
                  {e.td}
                </p>
              </div>
            );
          })}
        </>
      );
    } else if (bandmate === "Andrew") {
      let r = 6;
      qA.splice(r, 1);
      return (
        <>
          {qA.map((e) => {
            return (
              <div className="flex flex-col flex-wrap justify-start text-left mx-3 my-[0.3rem] desktop:my-[0.5rem]">
                <h6 className="text-xs font-arvo font-bold text-black text-left">
                  {e.question}
                </h6>
                <p className="text-xs desktop:text-sm font-arvo text-black text-left">
                  {e.am}
                </p>
              </div>
            );
          })}
        </>
      );
    } else {
      let r = 6;
      qA.splice(r, 1);
      return (
        <>
          {qA.map((e) => {
            return (
              <div className="flex flex-col flex-wrap justify-start text-left mx-3 my-[0.3rem] desktop:my-[0.5rem]">
                <h6 className="text-xs font-arvo font-bold text-black text-left">
                  {e.question}
                </h6>
                <p className="text-xs desktop:text-sm font-arvo text-black text-left">
                  {e.ae}
                </p>
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 desktop:top-0 desktop:bottom-0 w-[94vw] tablet:w-[70vw] h-[100vh] m-auto drop-shadow-[-2px_1px_3px_rgba(246,239,228,1)] flex justify-center items-center">
        <div className="h-auto desktop:h-[75vh] desktop:w-[70vw] flex flex-col flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll">
          {displayQA()}
        </div>
      </div>
    </>
  );
}
