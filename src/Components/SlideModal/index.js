import React, { useEffect, useState } from "react";
import Agent from "../../Utils/Agent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

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
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const _getCustomers = (customerId) => {
    Agent.Customers.getCustomer(customerId).then((res) => {
      if (res.ok) {
        // console.log(res.body);
      }
    });
  };
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
      <Dialog
        open={openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Randevu Detay</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <h1>{selectedEvent && selectedEvent.title}</h1>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
