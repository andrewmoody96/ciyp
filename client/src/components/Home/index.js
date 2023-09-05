import { React, useEffect, useState } from "react";
// import Default from "./default";
import Feature from "../Feature/index";
import dayjs from "dayjs";

let now = dayjs().format("MM-DD-YYYY").toString();

console.log(now);

export default function Home() {
  // const [view, setView] = useState();

  // useEffect(() => {
  //   let importantDate = dayjs(`${process.env.REACT_APP_SINGLE1_DATE}`)
  //     .format("MM-DD-YYYY")
  //     .toString();

  //   const featureCheck = () => {
  //     let now = dayjs().format("MM-DD-YYYY").toString();

  //     if (now >= importantDate) {
  //       setView("featured");
  //     } else {
  //       setView("");
  //     }
  //   };
  //   featureCheck();
  // }, []);

  const homeView = () => {
    return (<Feature />)
    // if (view === "featured") {
    //   return <Feature />;
    // } else {
    //   return <Default />;
    // }
  };

  return (
    <>
      <div className="container h-[100vh] absolute top-0">{homeView()}</div>
    </>
  );
}
