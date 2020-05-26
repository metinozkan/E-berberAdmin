import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Agent, Storage } from "../../Utils/importFiles";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { ServicesTable } from "./components/ServicesTable";
import { AddServiceMatchPersonelModal } from "./components/AddServiceMatchPersonnelModal";
import { EditModal } from "../../Components/EditModal";
import { ServiceEdit } from "./components/ServiceEdit";
import { ServiceAdd } from "./components/ServiceAdd";
import { Loading } from "../../Components/Loading";
const TopServices = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2em 0px;
`;
const Services = ({ signed }) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [barberId, setBarberId] = useState();
  const _getServices = (barberId) => {
    Agent.ServiceBarber.getServices(barberId).then((res) => {
      if (res.ok) {
        console.log("hizmetler", res.body);
        setServices(res.body);
        setIsLoading(false);
      }
    });
  };

  const _addService = (serviceObject) => {
    Agent.ServiceBarber.addService()
      .send({ ...serviceObject, barberId: barberId })
      .then((res) => {
        if (res.ok) {
          const newServices = services;
          newServices.push(res.body);
          console.log("service add gelen", res.body);
          console.log(newServices);
          setServices(newServices);
        }
      });
  };

  const _updateService = (serviceObject, serviceId) => {
    console.log("güncellem icin", { ...serviceObject, barberId: barberId });
    Agent.ServiceBarber.updateService(serviceId)
      .send({ ...serviceObject, barberId: barberId })
      .then((res) => {
        if (res.ok) {
          console.log("add", res.body);
        }
      });
  };
  useEffect(() => {
    const barber = Storage.GetItem("barber");
    setBarberId(barber.id);
    _getServices(barber.id);
  }, []);

  useEffect(() => {}, [services]);
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
          <TopServices>
            <Typography variant="h4" gutterBottom>
              Hizmetler
            </Typography>
            {/* <AddServiceMatchPersonelModal /> */}
            <ServiceAdd _addService={_addService} />
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
            <ServicesTable
              services={services}
              _updateService={_updateService}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </Grid>
  );
};
export default Services;
