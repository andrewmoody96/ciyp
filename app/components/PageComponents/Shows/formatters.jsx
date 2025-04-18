import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

// STATE FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.location string.
// OUTPUT - State value as a String. The code will extract it from the stateZIP array in the function.
let state = ``;

export function stateCheck(stateZIP) {
  let stateArr = stateZIP.split(" ");
  state = `${stateArr[0]}${stateArr[1]}`;
  return state;
}

// ADDRESS FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.location string.
// OUTPUT - Address value as a String. The code will extract it from the commas array in the function.
export function addressCheck(address) {
  if (address === "undefined" || address === null) {
    return "null";
  } else {
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
}
// }

// TICKET URL FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.description string.
// OUTPUT - URL value as a String. The code will extract it from the og array in the function.

let url = null;
export function eventLinkFormatter(description) {
  // Checks for value in description
  if (description !== undefined) {
    // splits the description string into an array
    let splits = description.split(":DOORS:");

    // Check if the first value is not null or an empty string
    if (splits[0] && splits[0].trim() !== "") {
      let potentialUrl = splits[0].trim();
      // Check if the value contains an anchor tag or does not start with "https://"
      if (
        /<a\s+href=.*?>.*?<\/a>/i.test(potentialUrl) ||
        !potentialUrl.startsWith("https://")
      ) {
        // Extract the portion of the string starting with "https://" up to the next space
        const match = potentialUrl.match(/https:\/\/\S+/);
        url = match ? match[0].split(" ")[0] : null;
      } else {
        url = potentialUrl;
      }
    } else {
      url = null;
    }
    return url;
  } else {
    url = null;
    return url;
  }
}

// DOOR TIME FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.description string.
// OUTPUT - Time value as a String. following ":DOORS:" in the event descriptpion. The code will extract it from the og array in the function.

let doors = null;

export function doorTimeFormatter(string) {
  if (string !== undefined) {
    let og = string.split(":DOORS:");
    if (og.length <= 1) {
      doors = null;
    } else {
      doors = og[1];
    }
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
