import React from "react";
import dayjs from "dayjs";
import Single7 from "./Project2/single7";
import Single8 from "./Project2/single8";
import Project2 from "./Project2/Project2";
var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");

dayjs.extend(isSameOrAfter);

export default function Feature() {
  const renderRelease = () => {
    let now = dayjs().format("MM-DD-YYYY").toString();

    if (dayjs(now).isSameOrAfter(process.env.REACT_APP_PROJECT2_DATE)) {
      return <Project2 />;
    } else if (dayjs(now).isSameOrAfter(process.env.REACT_APP_SINGLE8_DATE)) {
      return <Single8 />;
    } else {
      return <Single7 />;
    }
  };

  return <>{renderRelease()}</>;
}
