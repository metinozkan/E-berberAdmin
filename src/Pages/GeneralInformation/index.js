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
        if (!res.body.Error) {
          setBarber(res.body.data);
          setIsLoading(false);
          console.log("berber", res.body.data);
        } else {
          console.log("hata", res.body.Message);
        }
      }
    });
  };

  const _updateGeneralSettings = (barberObject) => {
    setIsLoadingUpdate(true);
    Agent.Barbers.updateBarbers(barber.id)
      .send({ ...barberObject, password: barber.password })
      .then((res) => {
        if (res.ok) {
          if (!res.body.Error) {
            setIsLoadingUpdate(false);
            console.log("update", res.body.data);
          } else {
            console.log(res.body.Message);
          }
        }
      });
  };

  const _getWorkTimes = (barberId) => {
    Agent.Barbers.getBarberWorkTimes(barberId).then((res) => {
      if (res.ok) {
        if (!res.body.Error) {
          setworkTimes(res.body.data);
          console.log("barberWokrtime", res.body.data);
        }
        //console.log("workTimes", res.body);
        else {
          console.log("hata", res.body.Message);
        }
      }
    });
  };
  const _updateWorkTimes = (workHoursObj) => {
    console.log("giden workTime", workHoursObj);
    Agent.Barbers.updateBarberWorkTimes(workHoursObj.id)
      .send(workHoursObj)
      .then((res) => {
        if (res.ok) {
          if (!res.body.Error) {
            console.log(res.body.data);
          } else {
            console.log("hata", res.body.Message);
          }
        }
      });
  };

  // const _updateImage = (image) => {
  //   let formData = new FormData();
  //   formData.append("file", image);
  //   console.log(image);
  //   console.log("upşloadimage basladı");

  //   if (image) {
  //     Agent.Barbers.uploadImage(barber.id)
  //       .send(formData)
  //       .then((res) => {
  //         console.log("upşloadimage bgeldi amaı");

  //         if (res.ok) {
  //           console.log("upşloadimage", res.body);
  //           if (!res.body.Error) {
  //             console.log(res.body.data);
  //             const newBarber = { ...barber, photo: res.body.data };
  //             console.log("yeni berber datası", newBarber);
  //             setBarber(newBarber);
  //             console.log(newBarber);
  //             _updateGeneralSettings(newBarber);
  //           } else {
  //             console.log("hata", res.body.Message);
  //           }
  //         }
  //       });
  //   }
  // };

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
