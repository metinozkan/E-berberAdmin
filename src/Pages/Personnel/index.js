import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Agent, Storage } from "../../Utils/importFiles";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { PersonnelTable } from "./components/PersonnelTable";
import { PersonnelAddModal } from "./components/PersonnelAddModal";
import { Loading } from "../../Components/Loading";

import { Route, Redirect } from "react-router-dom";

const TopPersonnel = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
`;
const Personnel = ({ signed }) => {
  const [personnels, setPersonnels] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const _getPersonnel = (barberId) => {
    Agent.Staffs.getStaffBarber(barberId).then((res) => {
      if (res.ok) {
        setPersonnels(res.body);
        setIsLoading(false);
      }
    });
  };

  const _updatePersonnel = (personnelId) => {
    Agent.Staffs.updateStaff("id")
      .send({})
      .then((res) => {
        if (res.ok) {
          console.log("update", res.body);
        }
      });
  };

  const _addPersonnel = (personnelObject) => {
    //    console.log("personnel", personnelObject);

    Agent.Staffs.addStaffs()
      .send(personnelObject)
      .then((res) => {
        if (res.ok) {
          const newPersonnels = personnels;
          console.log("add,", res.body);
          newPersonnels.push(res.body);
          setPersonnels(newPersonnels);
        }
      });
  };

  useEffect(() => {});

  useEffect(() => {
    const barber = Storage.GetItem("barber");
    _getPersonnel(barber.id);
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
      {!isLoading ? (
        <>
          <TopPersonnel>
            <Typography variant="h4" gutterBottom>
              Çalışanlar
            </Typography>
            <PersonnelAddModal
              _addPersonnel={_addPersonnel}
            ></PersonnelAddModal>
          </TopPersonnel>
          <Grid
            item
            xs={12}
            style={{
              background: "white",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PersonnelTable
              personnels={personnels}
              _updatePersonnel={_updatePersonnel}
            ></PersonnelTable>
          </Grid>
        </>
      ) : (
        <Loading />
      )}
    </Grid>
  );
};
export default Personnel;
