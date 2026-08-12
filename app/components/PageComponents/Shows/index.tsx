import { useEffect, useState } from "react";
import {
  addressCheck,
  eventLinkFormatter,
  dateTimeHandler,
  doorTimeFormatter,
} from "./formatters";
import Event from "./Event";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrAfter);

// -------------------------SHOWS PAGE-------------------------------
// This page component is responsible for fetching and rendering the upcoming events from the Google Calendar API.
// The component will fetch the events from the API and render them as Event components that will display the event date, venue, time, location, and ticket URL.
// ------------------------------------------------------------------

// Shape of the Google Calendar items returned by /api/shows.
interface GCalEventStart {
  dateTime?: string;
  date?: string;
}

interface GCalEvent {
  id: string;
  summary?: string;
  description?: string;
  location?: string;
  start: GCalEventStart;
  end: GCalEventStart;
}

// The formatters signal "absent" with either null or the literal string "null".
// Normalize both to undefined so Event can use plain truthiness checks.
const optional = (value: string | null | undefined): string | undefined =>
  value && value !== "null" ? value : undefined;

export default function Shows() {
  const [events, setEvents] = useState<GCalEvent[]>([]);
  const [isUpcoming, setIsUpcoming] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/shows");
        const jsonData = await res.json();

        if (!jsonData) {
          console.error("load failed");
          setIsUpcoming(false);
          return;
        }

        if (jsonData.message === "No upcoming events found." || !jsonData.events) {
          setIsUpcoming(false);
          return;
        }

        const all: GCalEvent[] = Object.values(jsonData.events);
        const now = dayjs.utc().toISOString();

        const upcoming = all.filter((event) => {
          // Checks for & Handles All-Day Events
          const end = event.end.dateTime ?? event.end.date;
          if (!end) return false;
          return !dayjs(now).isAfter(dayjs(end).toISOString());
        });

        setEvents(upcoming);
        setIsUpcoming(upcoming.length > 0);
      } catch (error) {
        console.error(error);
        setIsUpcoming(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      {!isUpcoming ? (
        <div className="flex flex-col justify-center items-center desktop:w-[45vw]">
          <div className="invisible">dummy div for spacing</div>
          <div className="w-100 desktop:w-[45vw] bg-white/90 rounded-lg justify-center text-center">
            <h2 className="flex flex-col w-auto font-moda text-xl text-center visible p-2">
              No upcoming events.
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {events.map((event) => {
            const [date, time] = dateTimeHandler(event.start) ?? ["TBD", "TBD"];
            const venue = event.summary ?? "";
            const location = optional(addressCheck(event.location ?? null));

            // OPTIONAL INFO RENDERING
            const tickets = optional(eventLinkFormatter(event.description));
            const doors = optional(doorTimeFormatter(event.description));

            return (
              <div key={event.id}>
                <Event
                  description={[date, venue, time]}
                  tickets={tickets}
                  doorTime={doors}
                  location={location}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
