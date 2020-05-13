import React from "react";
import { Redirect } from "react-router-dom";
import request from "superagent";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";

import { GeneralSettings } from "./components/GeneralSettings/GeneralSettings";
import { WorkingHours } from "./components/WorkingHours/WorkingHours";
import Agent from "../../Utils/Agent";

const GeneralInformation = ({ signed }) => {
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
      <Grid item xs={6}>
        <div style={{ width: "100%", height: "100%" }}>
          <GeneralSettings />
          <Button
            onClick={() => {
              Agent.Barbers.getBarbers().then((res) => {
                console.log("hadiii");
                if (res.ok) {
                  console.log("hadiii", res.body);
                  console.log("hadiii");
                }
              });
            }}
          >
            tıkla
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={{ width: "100%", height: "100%" }}>
          <WorkingHours></WorkingHours>
        </div>
      </Grid>
    </Grid>
  );
};

export default GeneralInformation;
