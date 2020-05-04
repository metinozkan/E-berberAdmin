import React from "react";
import styled from "styled-components";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { ServicePricesTable } from "./components/ServicePricesTable";
const TopServicePrices = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2em 0px;
`;
const ServicePrices = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
      style={{}}
    >
      <TopServicePrices>
        <Typography variant="h4" gutterBottom>
          Hizmet Fiyatları
        </Typography>
      </TopServicePrices>
      <div
        style={{
          background: "white",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ServicePricesTable />
      </div>
    </Grid>
  );
};
export default ServicePrices;
