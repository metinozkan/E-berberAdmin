import React, { useState } from "react";
import { Grid } from "@material-ui/core";
// import events from "../CreateEventCalendar/events";
import { SlideModal } from "../../../Components/SlideModal";

import {
  Calendar,
  momentLocalizer,
  Views,
  dateFnsLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "moment/locale/tr";
const localizer = momentLocalizer(moment);
const events = [
  {
    id: 0,
    title: "Ahmet Kutay - saç kesim",
    start: new Date(2018, 0, 29, 9, 0, 0),
    end: new Date(2018, 0, 29, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: "Ali Çakır - sakal kesim",
    allDay: true,
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: "Metin",
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: "özkan",
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
];

const eventStyleGetter = (event, start, end, isSelected) => {
  var backgroundColor = "#" + event.hexColor;
  var style = {
    backgroundColor:
      event.resourceId == 1 ? "red" : event.resourceId == 2 ? "blue" : "pink",
    borderRadius: "0px",
    opacity: 0.8,
    color: "black",
    border: "0px",
    display: "block",
  };
  return {
    style: style,
  };
};
const resourceMap = [
  { resourceId: 1, resourceTitle: "Hasan Doğan" },
  { resourceId: 2, resourceTitle: "Yüksel Yurtay" },
  { resourceId: 3, resourceTitle: "Metin özkan" },
  { resourceId: 4, resourceTitle: "Mahmut js" },
];

export const ResourceCalendar = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(false);
  return (
    <>
      <SlideModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedEvent={selectedEvent && selectedEvent}
      />

      <Calendar
        style={{ height: 800 }}
        events={events}
        localizer={localizer}
        defaultView={Views.DAY}
        views={["day", "work_week"]}
        step={60}
        defaultDate={new Date(2018, 0, 29)}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        onSelectEvent={(event) => {
          setOpenModal(true);
          setSelectedEvent(event);
        }}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
