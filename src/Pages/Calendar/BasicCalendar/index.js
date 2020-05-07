import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import events from "../CreateEventCalendar/events";
import { SlideModal } from "../../../Components/SlideModal";

import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "moment/locale/tr";
const localizer = momentLocalizer(moment);

export const BasicCalendar = ({}) => {
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
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
        onSelectEvent={(event) => {
          setOpenModal(true);
          setSelectedEvent(event);
        }}
        culture="tr"
      />
    </>
  );
};
