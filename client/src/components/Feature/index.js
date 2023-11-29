import React from "react";
import dayjs from "dayjs";
import ThirdSingle from "./Project1/ThirdSingle";
import Project1 from "./Project1/Project1";

export default function Feature() {
  const renderRelease = () => {
    let now = dayjs().format("MM-DD-YYYY").toString();

    if (now >= process.env.REACT_APP_PROJECT1_DATE) {
      return <Project1 />;
    } else {
      return <ThirdSingle />;
    } 
  };

  return <>{renderRelease()}</>;
}
