import React, { useState } from "react";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import eventsData from "./events";
import ExampleControlSlot from "../ExampleControlSlot";

export const CreateEventCalendar = ({}) => {
  const [title, setTitle] = useState();
  const [events, setEvents] = useState(eventsData);

  const localizer = momentLocalizer(moment);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      console.log("gelen tarih vs ", start, end, title);

      let newEvents = events;
      newEvents.push({
        start,
        end,
        title,
      });
      setEvents(newEvents);
    }
  };
  console.log("events", events);
  return (
    <>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={Views.WEEK}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </>
  );
};
