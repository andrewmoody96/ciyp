import React from "react";
import Default from "./default";
import Feature from "../Feature/index";
import dayjs from "dayjs";

export default function Home() {
  const homeView = () => {
    let now = dayjs().format("MM-DD-YYYY").toString();

    if (now >= process.env.REACT_APP_SINGLE1_DATE) {
      return <Feature />;
    } else {
      return <Default />;
    }
  };

  return (
    <>
      <div className="container h-[100vh] absolute top-0">{homeView()}</div>
    </>
  );
}
