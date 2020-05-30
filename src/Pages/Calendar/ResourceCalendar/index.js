import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Agent, Loading, Storage } from "../../../Utils/importFiles";
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

export const ResourceCalendar = (props) => {
  const [barber, setBarber] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(false);
  const [barberMontlyAppointments, setBarberMontlyAppointments] = useState(
    false
  );
  const [services, setServices] = useState(false);
  const [events, setEvents] = useState(false);
  const [personnels, setPersonnels] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
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
    const barberStorage = Storage.GetItem("barber");
    Agent.Appointments.getMontlyBarberAppointments()
      .send({ barberId: barberStorage.id })
      .then((res) => {
        if (res.ok) {
          if (!res.body.Error) {
            setBarberMontlyAppointments(res.body.data);
            //_getServices(res.body);
            _getPersonnels(res.body.data);
          } else {
            console.log("hata", res.body.Message);
          }
        }
      });
  };

  const _getPersonnels = (barberAppointments) => {
    const barberStorage = Storage.GetItem("barber");

    Agent.Staffs.getStaffBarber(barberStorage.id).then((res) => {
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
    const barberStorage = Storage.GetItem("barber");

    if (barberAppointments && newPersonnels) {
      Agent.ServiceBarber.getServices(barberStorage.id).then((res) => {
        if (res.ok) {
          if (!res.body.Error) {
            setServices(res.body.data);
            const services = res.body.data;
            const newEvents = [];

            barberAppointments.map((appointment) =>
              newEvents.push({
                // ...appointment,
                customerId: appointment.customerId,
                id: appointment.id,
                // title: appointment.customerId,
                start: modifyDate(appointment.appointmentDate),
                end: modifyDate(appointment.appointmentEndDate),
                startForModal: modifyDateForModal(appointment.appointmentDate),
                endForModal: modifyDateForModal(appointment.appointmentEndDate),
                resourceId: appointment.staffId,
                personnel: newPersonnels.find(
                  (p) => p.id == appointment.staffId
                ),
                services: appointment.serviceId.map((ser) =>
                  services.find((service) => service.id == ser)
                ),
              })
            );
            setEvents(newEvents);

            setIsLoading(false);
          }
        } else {
          console.log("hata", res.body.Message);
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
    // const newAppointmentDate =
    //   numberDay +
    //   "/" +
    //   stringYear[1] +
    //   "/" +
    //   numberYear +
    //   " " +
    //   stringTime[0] +
    //   ":" +
    //   stringTime[1];
    return new Date(
      numberYear,
      numberMonth,
      numberDay,
      numberHour,
      numberMinute,
      numberSecond
    );
  };
  const modifyDateForModal = (date) => {
    const stringDate = date.split("T");
    const year = stringDate[0];
    const time = stringDate[1];
    const stringYear = year.split("-");
    const stringTimes = time.split(".");
    const stringTime = stringTimes[0].split(":");

    const numberYear = Number(stringYear[0]);
    const numberDay = Number(stringYear[2]);

    const newAppointmentDate =
      numberDay +
      "/" +
      stringYear[1] +
      "/" +
      numberYear +
      " " +
      stringTime[0] +
      ":" +
      stringTime[1];
    return newAppointmentDate;
  };
  useEffect(() => {
    const barberStorage = Storage.GetItem("barber");
    if (barberStorage) {
      setBarber(barberStorage);
      _getBarberMontlyAppointments();
      _getPersonnels();
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <>
      {events && personnels && selectedEvent && (
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
