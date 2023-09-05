import React from "react";
import dayjs from "dayjs";
import FirstSingle from "./Project1/FirstSingle";
import SecondSingle from "./Project1/SecondSingle";
import ThirdSingle from "./Project1/ThirdSingle";

export default function Feature() {
  const renderRelease = () => {
    let now = dayjs().format("MM-DD-YYYY").toString();

    if (now >= process.env.REACT_APP_SINGLE3_DATE) {
      return <ThirdSingle />;
    } else if (now >= process.env.REACT_APP_SINGLE2_DATE) {
      return <SecondSingle />;
    } else if (now >= process.env.REACT_APP_SINGLE1_DATE) {
      return <FirstSingle />;
    }
  };

  return <>{renderRelease()}</>;
}
