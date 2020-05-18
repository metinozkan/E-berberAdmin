import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import request from "superagent";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";

import { GeneralSettings } from "./components/GeneralSettings/GeneralSettings";
import { WorkingHours } from "./components/WorkingHours/WorkingHours";
import { Agent, Storage } from "../../Utils/importFiles";

const GeneralInformation = ({ signed }) => {
  const [barber, setBarber] = useState(null);

  const _getBarber = (barberId) => {
    Agent.Barbers.getBarber(barberId).then((res) => {
      if (res.ok) {
        console.log(res.body);
        setBarber(res.body);
      }
    });
  };

  const _updateGeneralSettings = (barberObject) => {
    console.log("allaa", barberObject);
    Agent.Barbers.updateBarbers(barber.id)
      .send(barberObject)
      .then((res) => {
        if (res.ok) {
          console.log("basarıli güncelleme");
          console.log("update", res.body);
        }
      });
  };
  useEffect(() => {
    const barberStorage = Storage.GetItem("barber");
    _getBarber(barberStorage.id);
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
      {barber && (
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
              <WorkingHours></WorkingHours>
            </div>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default GeneralInformation;
