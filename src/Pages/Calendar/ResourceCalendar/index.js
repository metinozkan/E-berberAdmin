import React, { useState, useEffect } from "react";
import { Agent, Loading } from "../../../Utils/importFiles";
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
import { isToday } from "date-fns";
const localizer = momentLocalizer(moment);
const Events = [
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

// const resourceMap = [
//   { resourceId: 1, resourceTitle: "Hasan Doğan" },
//   { resourceId: 2, resourceTitle: "Yüksel Yurtay" },
//   { resourceId: 3, resourceTitle: "Metin özkan" },
//   { resourceId: 4, resourceTitle: "Mahmut js" },
// ];
const resourceMap = [
  { resourceId: 1, resourceTitle: "Hasan Doğan" },
  { resourceId: 2, resourceTitle: "Yüksel Yurtay" },
  { resourceId: 3, resourceTitle: "Metin özkan" },
  { resourceId: 4, resourceTitle: "Mahmut js" },
];

export const ResourceCalendar = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(false);
  const [barberMontlyAppointments, setBarberMontlyAppointments] = useState(
    false
  );
  const [services, setServices] = useState(false);
  const [events, setEvents] = useState(false);
  const [personnels, setPersonnels] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const eventStyleGetter = (event, start, end, isSelected) => {
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: event.personnel.color ? event.personnel.color : "gray",
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
  const _getBarberMontlyAppointments = () => {
    Agent.Appointments.getMontlyBarberAppointments()
      .send({ barberId: 13 })
      .then((res) => {
        if (res.ok) {
          setBarberMontlyAppointments(res.body);
          //_getServices(res.body);
          _getPersonnels(res.body);
        }
      });
  };

  const _getPersonnels = (barberAppointments) => {
    Agent.Staffs.getStaffBarber(13).then((res) => {
      if (res.ok) {
        const newPersonnels = [];
        res.body.map((personnel) =>
          newPersonnels.push({
            personnelId: personnel.id,
            personnelName: personnel.staffName,
          })
        );
        setPersonnels(newPersonnels);
        _getServices(barberAppointments, res.body);
      }
    });
  };
  const _getServices = (barberAppointments, newPersonnels) => {
    if (barberAppointments && newPersonnels) {
      console.log("barberAoppoo", barberAppointments);
      Agent.ServiceBarber.getServices(13).then((res) => {
        if (res.ok) {
          setServices(res.body);
          const services = res.body;
          const newEvents = [];
          barberAppointments.map((appointment) =>
            newEvents.push({
              ...appointment,
              id: appointment.id,
              title: appointment.customerId,
              start: modifyDate(appointment.appointmentDate),
              end: modifyDate(appointment.appointmentEndDate),
              resourceId: appointment.staffId,
              personnel: newPersonnels.find((p) => p.id == appointment.staffId),
              service: services.find(
                (service) => service.id == appointment.serviceId
              ),
            })
          );
          setEvents(newEvents);

          setIsLoading(false);
        }
      });
    }
  };

  const modifyDate = (date) => {
    const stringDate = date.split("T");
    const year = stringDate[0];
    const time = stringDate[1];
    const stringYear = year.split("-");
    const stringTimes = time.split(".");
    const stringTime = stringTimes[0].split(":");

    const numberYear = Number(stringYear[0]);
    const numberMonth = Number(stringYear[1] - 1);
    const numberDay = Number(stringYear[2]);

    const numberHour = Number(stringTime[0]);
    const numberMinute = Number(stringTime[1]);
    const numberSecond = Number(stringTime[2]);
    return new Date(
      numberYear,
      numberMonth,
      numberDay,
      numberHour,
      numberMinute,
      numberSecond
    );
  };

  useEffect(() => {
    _getBarberMontlyAppointments();
    _getPersonnels();
  }, []);

  return (
    <>
      {events && personnels && (
        <SlideModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          selectedEvent={selectedEvent && selectedEvent}
          fromResourceCalendar
        />
      )}
      {!isLoading && personnels && events ? (
        <Calendar
          style={{ height: 800 }}
          events={events}
          localizer={localizer}
          defaultView={Views.DAY}
          views={["day", "work_week"]}
          step={60}
          defaultDate={new Date()}
          resources={personnels}
          resourceIdAccessor="personnelId"
          resourceTitleAccessor="personnelName"
          onSelectEvent={(event) => {
            setOpenModal(true);
            setSelectedEvent(event);
          }}
          eventPropGetter={eventStyleGetter}
        />
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};
