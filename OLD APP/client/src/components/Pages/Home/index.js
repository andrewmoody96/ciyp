import React from "react";
import Default from "./default";

export default function Home() {
  const homeView = () => {
    return <Default />;
  };

  return (
    <>
      <div className="container h-[100vh] absolute top-0 flex flex-col items-center">{homeView()}</div>
    </>
  );
}
