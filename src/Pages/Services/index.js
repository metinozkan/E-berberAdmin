import React from "react";
import styled from "styled-components";
import { Grid, Button, Typography, Paper } from "@material-ui/core";

const TopServices = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
`;
const Services = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
      style={{}}
    >
      <TopServices>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        <Button>asdasd</Button>
      </TopServices>
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
export default Services;
