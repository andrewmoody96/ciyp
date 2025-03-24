import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

// State Formatter
let state = ``;

export function stateCheck(stateZIP) {
  let stateArr = stateZIP.split(" ");
  state = `${stateArr[0]}${stateArr[1]}`;
  return state;
}

// Address Formatter
export function addressCheck(address) {
  let commas = address.split(",");
  if (commas.length > 4) {
    commas.shift();
    let street = `${commas[0]},`;
    let city = `${commas[1]},`;
    let stateZIP = `${commas[2]}`;
    stateCheck(stateZIP);
    let location = `${street} ${city} ${state}`;
    return location;
  } else {
    let street = `${commas[0]},`;
    let city = `${commas[1]},`;
    let stateZIP = `${commas[2]}`;
    stateCheck(stateZIP);
    let location = `${street} ${city} ${state}`;
    return location;
  }
}
// }

// URL FORMATTER
let url = null;

export function eventLinkFormatter(string) {
  if (string !== undefined) {
    let og = string.split('"');
    url = og[1];
  } else {
    url = null;
  }
  return url;
}

// DOOR TIME FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.description string.
// OUTPUT - Time value as a String. following ":DOORS:" in the event descriptpion. The code will extract it from the og array in the function.

let doors = null;

export function doorTimeFormatter(string) {
  if (string !== undefined) {
    let og = string.split(":DOORS:");
    doors = og[1];
  } else {
    doors = null;
  }
  return doors;
}

// DATE & TIME HANDLER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.start.date or events.start.dateTime
// OUTPUT - Array of formatted Date & Time values determined by event being an All-Day Event or not.

export function dateTimeHandler(e) {
  // for Scheduled Events
  if (e.dateTime) {
    let scheduled = [];
    scheduled.push(dayjs(e.dateTime).format("M/D")); // Date
    scheduled.push(dayjs(e.dateTime).format("LT")); // Scheduled Time Value
    return scheduled;
  }
  // for All-Day Events
  if (e.date) {
    let allDay = [];
    allDay.push(dayjs(e.date).format("M/D")); // Date
    allDay.push("TBD"); // All-Day Time Value
    return allDay;
  }
}
