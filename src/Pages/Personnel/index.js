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
  const [barberWorkTimes, setBarberWorkTimes] = useState([]);
  const [barberId, setBarberId] = useState();
  const _getPersonnel = (barberId) => {
    Agent.Staffs.getStaffBarber(barberId).then((res) => {
      if (res.ok) {
        setPersonnels(res.body);
        setIsLoading(false);
      }
    });
  };

  const _updatePersonnel = (personnelObject) => {
    Agent.Staffs.updateStaff(personnelObject.staffId)
      .send(personnelObject)
      .then((res) => {
        if (res.ok) {
          const newPersonnels = [];
          personnels.map((personnel) =>
            personnel.id != res.body.id
              ? newPersonnels.push(personnel)
              : newPersonnels.push(res.body)
          );
          setPersonnels(newPersonnels);
        }
      });
  };

  const _addPersonnel = (personnelObject) => {
    //    console.log("personnel", personnelObject);
    // {
    //   "barberId": "1",
    //   "staffId": "4",
    //   "day": "Friday",
    //   "startHour": "09:00",
    //   "endHour": "21:30"
    // }

    setIsLoading(true);
    Agent.Staffs.addStaffs()
      .send(personnelObject)
      .then((res) => {
        if (res.ok) {
          const newPersonnels = personnels;
          newPersonnels.push(res.body);
          setPersonnels(newPersonnels);
          console.log("staffId", res.body);
          const staffId = res.body.id;
          barberWorkTimes.map((time, index) => {
            addWorkHours(time, staffId);
          });
        }
      });
  };

  const addWorkHours = (time, staffId) => {
    console.log("geldi");

    Agent.WorkHours.addWorkHours()
      .send({
        barberId: barberId,
        staffId: staffId,
        day: time.day,
        startHour: time.startHour,
        endHour: time.endHour,
      })
      .then((res) => {
        if (res.ok) {
          setIsLoading(false);
          console.log("dönen saaat", res.body);
        }
      });
  };
  const _getBarberWorkTimes = (barberId) => {
    Agent.Barbers.getBarberWorkTimes(barberId).then((res) => {
      if (res.ok) {
        console.log(res.body);
        setBarberWorkTimes(res.body);
        // _getStaffWorkHours();
      }
    });
  };

  useEffect(() => {});

  useEffect(() => {
    const barber = Storage.GetItem("barber");

    if (!barber) {
      return <Redirect to="/login" />;
    } else {
      setBarberId(barber.id);
      _getPersonnel(barber.id);
      _getBarberWorkTimes(barber.id);
    }
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
              personnelsForTable={personnels}
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
