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

export function stateCheck(stateZIP: string): string {
  let stateArr = stateZIP.split(" ");
  state = `${stateArr[0]}${stateArr[1]}`;
  return state;
}

// ADDRESS FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.location string.
// OUTPUT - Address value as a String. The code will extract it from the commas array in the function.
export function addressCheck(address: string | null): string {
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

const HTML_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&#39;": "'",
  "&apos;": "'",
  "&quot;": '"',
  "&lt;": "<",
  "&gt;": ">",
  "&#x2F;": "/",
  "&#47;": "/",
};

function decodeEntities(s: string): string {
  return s.replace(
    /&(?:amp|#39|apos|quot|lt|gt|#x2F|#47);/g,
    (m) => HTML_ENTITIES[m] ?? m,
  );
}

function safeHttpUrl(candidate: string): string | null {
  try {
    const u = new URL(candidate);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.toString();
  } catch {
    return null;
  }
}

let url: string | null = null;
export function eventLinkFormatter(description: string | undefined): string | null {
  url = null;
  if (!description) return url;

  const head = description.split(":DOORS:")[0]?.trim();
  if (!head) return url;

  // Anchor tag (Google Calendar's default when a link is added via the UI)
  const anchor = head.match(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/i);
  if (anchor) {
    url = safeHttpUrl(decodeEntities(anchor[1].trim()));
    return url;
  }

  // Bare URL — exclude <>"' so we cannot slurp surrounding HTML
  const bare = head.match(/https?:\/\/[^\s<>"']+/i);
  if (bare) {
    const cleaned = bare[0].replace(/[.,;:!?)]+$/, "");
    url = safeHttpUrl(decodeEntities(cleaned));
    return url;
  }

  return url;
}

// DOOR TIME FORMATTER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// INPUT - Google Calendar event.description string.
// OUTPUT - Time value as a String. following ":DOORS:" in the event descriptpion. The code will extract it from the og array in the function.

let doors: string | null = null;

export function doorTimeFormatter(string: string | undefined): string | null {
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

interface EventStart {
  dateTime?: string;
  date?: string;
}

export function dateTimeHandler(e: EventStart): [string, string] | undefined {
  // for Scheduled Events
  if (e.dateTime) {
    return [
      dayjs(e.dateTime).format("M/D"),  // Date
      dayjs(e.dateTime).format("LT"),   // Scheduled Time Value
    ];
  }
  // for All-Day Events
  if (e.date) {
    return [
      dayjs(e.date).format("M/D"),  // Date
      "TBD",                         // All-Day Time Value
    ];
  }
}
