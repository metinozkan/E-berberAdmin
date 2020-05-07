import React from "react";
import { Grid } from "@material-ui/core";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "moment/locale/tr";

const localizer = momentLocalizer(moment);

const date = new Date();
const myEventsList = [
  {
    title: "string",
    start: date,
    end: date,
    allDay: false,
    resource: "reasras",
  },
];
const CalendarPage = () => {
  return (
    <Grid container direction="column" justify="center" align="center">
      <Grid item xs={12}>
        <div>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            culture="tr"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default CalendarPage;
