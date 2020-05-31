import React, { useEffect, useState } from "react";
import { Agent, Loading } from "../../Utils/importFiles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useMediaQuery,
} from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SlideModal = ({
  openModal,
  setOpenModal,
  selectedEvent,
  fromResourceCalendar,
}) => {
  const [customer, setCustomer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const _getCustomers = (customerId) => {
    Agent.Customers.getCustomer(customerId).then((res) => {
      if (res.ok) {
        if (!res.body.Error) {
          setIsLoading(false);
          setCustomer(res.body.data);
        } else {
          console.log("hata", res.body.Message);
        }
      }
    });
  };

  useEffect(() => {
    _getCustomers(selectedEvent.customerId);
  }, []);
  useEffect(() => {
    if (fromResourceCalendar && selectedEvent) {
      // _getCustomers(selectedEvent.customerId);
    }
    if (openModal) {
      handleClickOpen();
    } else {
      handleClose();
    }
  }, [openModal]);

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      {customer && !isLoading ? (
        <Dialog
          open={openModal}
          fullScreen={fullScreen}
          fullWidth={true}
          maxWidth={"sm"}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Randevu Detay</DialogTitle>
          <DialogContent style={{ margin: "1em" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: ".5em 0px",
              }}
            >
              <span style={{ fontWeight: 500, width: "110px" }}>
                Başlangıç tarihi
              </span>
              <span>:{selectedEvent.startForModal}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 500, width: "110px" }}>
                Bitiş tarihi
              </span>
              <span>:{selectedEvent.endForModal}</span>
            </div>
            {selectedEvent &&
              selectedEvent.services.map((service) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: ".5em 0px",
                  }}
                >
                  <span style={{ fontWeight: 500, width: "110px" }}>
                    Hizmetler
                  </span>
                  <div style={{}}>
                    :<span style={{}}>{service.typeName}</span>
                    <span style={{ marginLeft: ".5em" }}>
                      {service.time} dk
                    </span>
                    <span style={{ marginLeft: ".5em" }}>
                      {service.price} ₺
                    </span>
                  </div>
                </div>
              ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 500, width: "110px" }}>Müşteri</span>
              <span>:{customer.name + " " + customer.lastName}</span>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Tamam
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Loading />
      )}
    </div>
  );
};
