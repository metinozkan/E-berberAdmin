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
  const [servicess, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [barberId, setBarberId] = useState();
  const [requestLoading, setRequestLoading] = useState(false);
  const _getServices = (barberId) => {
    Agent.ServiceBarber.getServices(barberId).then((res) => {
      if (res.ok) {
        if (!res.body.Error) {
          setServices(res.body.data);
          setIsLoading(false);
        } else {
          console.log("hata", res.body.Message);
        }
      }
    });
  };

  const _addService = (serviceObject) => {
    setRequestLoading(true);
    Agent.ServiceBarber.addService()
      .send({ ...serviceObject, barberId: barberId })
      .then((res) => {
        if (res.ok) {
          if (!res.body.Error) {
            const newServices = services;
            newServices.push(res.body.data);
            setServices(newServices);
            setRequestLoading(false);
          } else {
            console.log("hata", res.body.Message);
          }
        }
      });
  };

  const _updateService = (serviceObject, serviceId) => {
    console.log("update", {
      ...serviceObject,
      barberId: barberId,
      id: serviceId,
    });
    setRequestLoading(true);
    Agent.ServiceBarber.updateService(serviceId)
      .send({ ...serviceObject, barberId: barberId, id: serviceId })
      .then((res) => {
        if (res.ok) {
          console.log("res", res.body);
          if (!res.body.Error) {
            setRequestLoading(false);

            console.log("update", res.body.data);
            const newServices = [];
            services.map((service) =>
              service.id != res.body.data.id
                ? newServices.push(service)
                : newServices.push(res.body.data)
            );
            setServices(newServices);
          } else {
            console.log("bir sorun olustu");
          }
        }
      });
  };
  useEffect(() => {
    const barber = Storage.GetItem("barber");
    //setBarberId(barber.id);
    //  _getServices(barber.id);
  }, []);

  const services = [{ id: 1, name: "Saç", price: "15", time: "25" }];
  useEffect(() => {});
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
            {requestLoading && <Loading />}
            <ServicesTable
              servicesForTable={services}
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
