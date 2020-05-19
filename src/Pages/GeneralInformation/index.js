import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import request from "superagent";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";

import { GeneralSettings } from "./components/GeneralSettings/GeneralSettings";
import { WorkingHours } from "./components/WorkingHours/WorkingHours";
import { Loading } from "../../Components/Loading";
import { Agent, Storage } from "../../Utils/importFiles";

const GeneralInformation = ({ signed }) => {
  const [barber, setBarber] = useState(null);
  const [workingHours, setWorkingHours] = useState(false);
  const _getBarber = (barberId) => {
    Agent.Barbers.getBarber(barberId).then((res) => {
      if (res.ok) {
        setBarber(res.body);
      }
    });
  };

  const _updateGeneralSettings = (barberObject) => {
    Agent.Barbers.updateBarbers(barber.id)
      .send(barberObject)
      .then((res) => {
        if (res.ok) {
          console.log("update", res.body);
        }
      });
  };

  const _getWorkingHours = () => {
    // Agent.WorkHours.
    const WorkHours = [
      {
        id: 8,
        barberId: 13,
        staffId: 5,
        day: "Pazar",
        startHour: "08:00",
        endHour: "22:30",
      },
      {
        id: 1,
        barberId: 13,
        staffId: 1,
        day: "Pazartesi",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 2,
        barberId: 13,
        staffId: 1,
        day: "Salı",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 3,
        barberId: 13,
        staffId: 1,
        day: "Çarşamba",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 4,
        barberId: 13,
        staffId: 1,
        day: "Perşembe",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 6,
        barberId: 13,
        staffId: 1,
        day: "Cuma",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 7,
        barberId: 13,
        staffId: 1,
        day: "Cumartesi",
        startHour: "08:30",
        endHour: "22:30",
      },
    ];
    setWorkingHours(WorkHours);
  };

  useEffect(() => {
    const barberStorage = Storage.GetItem("barber");
    _getBarber(barberStorage.id);
    _getWorkingHours();
  }, []);

  return !signed ? (
    <Redirect to="/login" />
  ) : (
    <Grid
      container
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
      style={{}}
    >
      {barber ? (
        <>
          <Grid item xs={6}>
            <div style={{ width: "100%", height: "100%" }}>
              <GeneralSettings
                _updateGeneralSettings={_updateGeneralSettings}
                barber={barber}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ width: "100%", height: "100%" }}>
              {workingHours && (
                <WorkingHours workingHours={workingHours}></WorkingHours>
              )}
            </div>
          </Grid>
        </>
      ) : (
        <Loading></Loading>
      )}
    </Grid>
  );
};

export default GeneralInformation;
