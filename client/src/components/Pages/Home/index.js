import React from "react";
import Default from "./default";
import Feature from "../NewMusic/index";
import dayjs from "dayjs";
var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");

dayjs.extend(isSameOrAfter);

export default function Home() {
  const homeView = () => {
    let now = dayjs().format("MM-DD-YYYY").toString();

    // if (dayjs(now).isSameOrAfter(process.env.REACT_APP_SINGLE1_DATE)) {
    //   return <Feature />;
    // } else {
      return <Default />;
    // }
  };

  return (
    <>
      <div className="container h-[100vh] absolute top-0">{homeView()}</div>
    </>
  );
}
