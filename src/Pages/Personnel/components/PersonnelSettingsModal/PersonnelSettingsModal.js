import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import { PersonnelServices } from "./PersonnelServices";
import { PersonnelEdit } from "./PersonnelEdit";

const SelectPageComp = ({ setSelectedPage }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ width: "100%", height: "100%" }}
      spacing={1}
    >
      <Grid item xs={8}>
        <Button
          variant="outlined"
          color="primary"
          style={{ width: "100%" }}
          onClick={() => {
            setSelectedPage(1);
          }}
        >
          Düzenle
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button
          variant="outlined"
          color="primary"
          style={{ width: "100%" }}
          onClick={() => {
            setSelectedPage(2);
          }}
        >
          Verdiği hizmetler
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Button variant="outlined" color="primary" style={{ width: "100%" }}>
          Düzenle
        </Button>
      </Grid>
    </Grid>
  );
};

export const PersonnelSettingsModal = ({ selectedPersonnel }) => {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          handleClickOpen();
          setSelectedPage(0);
        }}
      >
        Ayarlar
      </Button>
      <Dialog
        open={open}
        //  onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "1em",
          }}
        >
          {!selectedPage == 0 && (
            <MdKeyboardArrowLeft
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedPage(selectedPage - 1);
              }}
            />
          )}

          <DialogTitle id="alert-dialog-title" style={{ fontSize: "35px" }}>
            {selectedPage == 0
              ? "Ayar Seçin"
              : selectedPage == 1
              ? "Çalışan Düzenle"
              : "Verdiği Hizmetler"}
          </DialogTitle>
          <Close
            size={30}
            style={{ marginRight: "16px", cursor: "pointer" }}
            onClick={() => {
              handleClose();
              // setTimeout(() => {
              // }, 100);
            }}
          ></Close>
        </div>

        <DialogContent>
          {selectedPage == 0 ? (
            <SelectPageComp setSelectedPage={setSelectedPage}></SelectPageComp>
          ) : selectedPage == 1 ? (
            <PersonnelEdit
              selectedPersonnel={selectedPersonnel}
            ></PersonnelEdit>
          ) : (
            <PersonnelServices
              selectedPersonnel={selectedPersonnel}
            ></PersonnelServices>
          )}
        </DialogContent>
        <DialogActions>
          {!selectedPage == 0 && (
            <Button
              onClick={handleClose}
              color="primary"
              style={{ width: "100%" }}
              variant="outlined"
            >
              Kaydet
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};
