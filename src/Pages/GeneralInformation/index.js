import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { GeneralSettings } from "./components/GeneralSettings";

const GeneralInformation = () => {
  return (
    <Grid container spacing={3} justify="center" alignItems="center" style={{}}>
      <Grid item xs={6}>
        <div style={{ width: "100%", height: "100%" }}>
          <GeneralSettings />
        </div>
      </Grid>
      <Grid item xs={6}>
        <h1>Genel Bilgiler len</h1>
      </Grid>
    </Grid>
  );
};

export default GeneralInformation;
