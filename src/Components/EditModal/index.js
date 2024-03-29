import React from "react";
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
//import { DurationEditTable } from "./DurationEditTable";
import EditIcon from "@material-ui/icons/Edit";
import { useTheme } from "@material-ui/core/styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const EditModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        {props.buttonTitle}
      </Button>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"md"}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {props.dialogTitle}
        </DialogTitle>
        <DialogContent>
          {/* //<DurationEditTable selectedService={selectedService} /> */}
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            İptal
          </Button>
          <Button
            onClick={() => {
              if (props.onConfirm) {
                props.onConfirm();
              }
              handleClose();
            }}
            color="primary"
          >
            Tamam
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
