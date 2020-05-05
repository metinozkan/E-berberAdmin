import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { GeneralSettings } from "./components/GeneralSettings/GeneralSettings";
import { WorkingHours } from "./components/WorkingHours";

const GeneralInformation = () => {
  return (
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
