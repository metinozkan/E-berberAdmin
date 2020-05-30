import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import request from "superagent";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";

import { GeneralSettings } from "./components/GeneralSettings/GeneralSettings";
import { WorkingHours } from "./components/WorkingHours/WorkingHours";
import { Loading } from "../../Components/Loading";
import { Agent, Storage } from "../../Utils/importFiles";

const GeneralInformation = ({ signed }) => {
  const [barber, setBarber] = useState(null);
  const [workTimes, setworkTimes] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const _getBarber = (barberId) => {
    Agent.Barbers.getBarber(barberId).then((res) => {
      if (res.ok) {
        setBarber(res.body);
        setIsLoading(false);
      }
    });
  };

  const _updateGeneralSettings = (barberObject) => {
    setIsLoadingUpdate(true);
    Agent.Barbers.updateBarbers(barber.id)
      .send(barberObject)
      .then((res) => {
        if (res.ok) {
          setIsLoadingUpdate(false);

          console.log("update", res.body);
        }
      });
  };

  const _getWorkTimes = (barberId) => {
    Agent.Barbers.getBarberWorkTimes(barberId).then((res) => {
      if (res.ok) {
        //console.log("workTimes", res.body);
        setworkTimes(res.body);
      }
    });
  };
  const _updateWorkTimes = (workHoursObj) => {
    Agent.Barbers.updateBarberWorkTimes(workHoursObj.id)
      .send(workHoursObj)
      .then((res) => {
        if (res.ok) {
          console.log(res.body);
        }
      });
    // Agent.Barbers.updateBarberWorkTimes(workHoursObj.id)
    //   .send(workHoursObj)
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log("update", res.body);
    //       const newWorkTimes = [];
    //       workTimes.map((workT) =>
    //         workT != res.body.id
    //           ? newWorkTimes.push(workT)
    //           : newWorkTimes.push(res.body)
    //       );
    //       console.log("new", newWorkTimes);
    //       setworkTimes(newWorkTimes);
    //     }
    //   });
  };

  const _updateImage = (image) => {
    let formData = new FormData();
    formData.append("file", image);
    console.log(image);

    if (image) {
      Agent.Barbers.uploadImage(barber.id)
        .send(formData)
        .then((res) => {
          if (res.ok) {
            console.log(res.body);
          }
        });
    }
  };

  useEffect(() => {
    const barberStorage = Storage.GetItem("barber");
    if (!barberStorage) {
      return <Redirect to="/login" />;
    }
    _getBarber(barberStorage.id);
    _getWorkTimes(barberStorage.id);
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
      {isLoadingUpdate && <Loading />}
      {barber ? (
        <>
          <Grid item xs={12} md={6}>
            <GeneralSettings
              _updateGeneralSettings={_updateGeneralSettings}
              _updateImage={_updateImage}
              barber={barber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {workTimes && (
              <WorkingHours
                workingHours={workTimes}
                fromGeneralInformation={true}
                _updateWorkHours={_updateWorkTimes}
              ></WorkingHours>
            )}
          </Grid>
        </>
      ) : (
        <Loading></Loading>
      )}
    </Grid>
  );
};

export default GeneralInformation;
