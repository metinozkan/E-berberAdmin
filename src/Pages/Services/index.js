import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { ServicesTable } from "./components/ServicesTable";
import { AddServiceMatchPersonelModal } from "./components/AddServiceMatchPersonnelModal";
import { EditModal } from "../../Components/EditModal";
import { ServiceAddTable } from "./components/ServiceAddTable";

const TopServices = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
`;
const Services = ({ signed }) => {
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
      <TopServices>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        {/* <AddServiceMatchPersonelModal /> */}
        <EditModal
          buttonTitle="Hizmet Ekle"
          dialogTitle="Hizmet Ekle"
          component={<ServiceAddTable />}
        />
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
      >
        <ServicesTable />
      </div>
    </Grid>
  );
};
export default Services;
