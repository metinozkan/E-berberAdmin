import React from "react";
import styled from "styled-components";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
const TopServiceDuration = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
`;
const ServiceDuration = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
      style={{}}
    >
      <TopServiceDuration>
        <Typography variant="h4" gutterBottom>
          Hizmet Süreleri
        </Typography>
        <Button>asdafasd</Button>
      </TopServiceDuration>
      <div
        style={{
          background: "white",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </Grid>
  );
};
export default ServiceDuration;
