import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import Event from "./Event";
import showsVideo from "../../imagesAndVideos/showsLoop.webm";
import showsVideoMp4 from "../../imagesAndVideos/showsLoop.mp4";
import Header from "../Header";

let dateToFormat = "";
let eventLocation = "";
let name = "";
let date = null;
let time = null;
let state = ``;
let location = null;

// State Formatter
function stateCheck(stateZIP) {
  let stateArr = stateZIP.split(" ");
  state = `${stateArr[0]}${stateArr[1]}`;
  return state;
}

// Address Formatter
function addressCheck(address) {
  let commas = address.split(",");
  if (commas.length > 4) {
    commas.shift();
    let city = `${commas[1]},`;
    let stateZIP = `${commas[2]}`;
    stateCheck(stateZIP);
    let location = `${city} ${state}`;
    return location;
  } else {
    let city = `${commas[1]},`;
    let stateZIP = `${commas[2]}`;
    stateCheck(stateZIP);
    let location = `${city} ${state}`;
    return location;
  }
}

export default function Shows() {
  const [events, setEvents] = useState([]);
  const [isUpcoming, setIsUpcoming] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/shows");
        const jsonData = await res.json();

        if (!jsonData) {
          console.error("load failed");
          setIsUpcoming(false);
        } else {
          console.log("load successful");
          let eventObj = jsonData.events;

          const events = Object.keys(eventObj).map((key) => eventObj[key]);

          let upcoming = [];
          let getNow = moment.utc().toISOString();
          let now = getNow.slice(".");

          events.forEach((event) => {
            let end = moment(event.end.dateTime).toISOString();
            let compare = moment(now).isAfter(end);

            if (compare === false) {
              upcoming.push(event);
              setEvents(upcoming);
              setIsUpcoming(true);
            } else {
              setIsUpcoming(false);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container h-[100vh] w-100 absolute top-0">
      <video
        playsInline
        autoPlay
        loop
        muted
        id="homeVideo"
        className="bg-static fixed top-0 left-0 right-0 z-[-1] w-[100vw] h-[100%] tablet:h-auto tablet:-top-80 desktop:h-auto desktop:fixed desktop:-top-96 desktop:z-[-1] wide:top-[-700px]"
      >
        <source type="video/webm" src={showsVideo}></source>
        <source type="video/mp4" src={showsVideoMp4}></source>
      </video>
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <h1 className="text-4xl text-center text-white font-monoton mt-2 p-1 rounded-lg">
        Shows
      </h1>
      <div className="h-[5vh] w-[100vw] invisible">
        {/* dummy div for spacing */}
      </div>
      {/* only display in col view if more than 1? */}
      <>
        {!isUpcoming ? (
          <div className="flex flex-col justify-center items-center">
            <div className="h-[10vh] invisible">dummy div for spacing</div>
            <div className="w-100 bg-white/90 rounded-lg justify-center text-center">
              {/* fix this to display in the center instead of a 2 column */}
              <h3 className="flex flex-col w-auto font-arvo text-xl text-center visible p-2">
                No upcoming events.
              </h3>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center tablet:grid tablet:grid-cols-2">
            {/* only display in col view if events.length < 1? */}
            {events?.map((event) => (
              <div key={event.id}>
                <div className="flex justify-center w-auto">
                  <div id="hiddenJS" className="hidden">
                    {(dateToFormat = `${event.start.dateTime}`)}
                    {(name = event.summary)}
                    {(date = moment(dateToFormat).format("MMM Do"))}
                    {(time = moment(dateToFormat).format("LT"))}
                    {(eventLocation = `${event.location}`)}
                    {(location = `${addressCheck(eventLocation)}`)};
                  </div>
                  <Event
                    className="w-100"
                    description={[date, name, time, location]}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </>
      <div className="h-[10vh] tablet:h-[5vh] w-[100vw] invisible">
        {/* dummy div for spacing */}
      </div>
    </div>
  );
}
