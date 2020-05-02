import React from "react";
import styled from "styled-components";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { PersonnelTable } from "./components/PersonnelTable";
import { PersonnelEditModal } from "./components/PersonnelEditModal";

const TopPersonnel = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
`;
const Personnel = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
      style={{}}
    >
      <TopPersonnel>
        <Typography variant="h4" gutterBottom>
          Çalışanlar
        </Typography>
        <Button primary variant="contained" color="primary">
          ekleme
        </Button>
      </TopPersonnel>
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
        <PersonnelTable></PersonnelTable>
      </div>
    </Grid>
  );
};
export default Personnel;
