import React from "react";
import dayjs from "dayjs";
import Single4 from "./Project2/single4";
import Single5 from "./Project2/single5";
import Single6 from "./Project2/single6";
import Single7 from "./Project2/single7";
import Project1 from "./Project1/Project1";

export default function Feature() {
  const renderRelease = () => {
    let now = dayjs().format("MM-DD-YYYY").toString();

    if (now >= process.env.REACT_APP_SINGLE7_DATE) {
      return <Single7 />;
    } else if (now >= process.env.REACT_APP_SINGLE6_DATE) {
      return <Single6 />;
    } else if (now >= process.env.REACT_APP_SINGLE5_DATE) {
      return <Single5 />;
    } else if (now >= process.env.REACT_APP_SINGLE4_DATE) {
      return <Single4 />;
    } else {
      return <Project1 />;
    }
  };

  return <>{renderRelease()}</>;
}


// correct Date issues -- consider using vanilla JS