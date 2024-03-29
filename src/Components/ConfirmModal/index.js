import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfirmModal = ({
  title,
  confirmMesage,
  openConfirmModal,
  setOpenConfirmModal,
  modalContent,
  onConfirmFunction,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setOpenConfirmModal(false);
  };

  useEffect(() => {
    setOpen(openConfirmModal);
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {modalContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
        <Button
          onClick={() => {
            handleClose();
            if (onConfirmFunction) {
              onConfirmFunction();
            }
          }}
          color="primary"
          autoFocus
        >
          {confirmMesage ? confirmMesage : "Tamam"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmModal;
