import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@material-ui/core";
//import { DurationEditTable } from "./DurationEditTable";
import EditIcon from "@material-ui/icons/Edit";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const EditModal = ({ component, buttonTitle, dialogTitle }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<EditIcon />}
        onClick={handleClickOpen}
        style={{ margin: ".5em" }}
      >
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          {/* //<DurationEditTable selectedService={selectedService} /> */}
          {component}
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
