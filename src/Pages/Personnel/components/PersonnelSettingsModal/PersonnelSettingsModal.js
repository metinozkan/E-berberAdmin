import React, { useState, useEffect } from "react";
import { Storage } from "../../../../Utils/importFiles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Close } from "@material-ui/icons";
import { PersonnelServices } from "./PersonnelServices";
import { PersonnelEdit } from "./PersonnelEdit";
import { PersonnelAddAndEdit } from "../PersonnelAddModal";
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

export const PersonnelSettingsModal = ({
  selectedPersonnel,
  _updatePersonnel,
  forPersonnelSettings,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  // const [personnelType, setPersonnelType] = useState("Yönetici");
  const [color, setColor] = useState(selectedPersonnel.color);
  const [name, setName] = useState(selectedPersonnel.staffName);
  const [email, setEmail] = useState(selectedPersonnel.eMail);
  const [phoneNo, setPhoneNo] = useState(selectedPersonnel.telNo);
  const [openWorkingHours, setOpenWorkingHours] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const PersonnelObject = {
    // personnelType: personnelType,
    staffId: selectedPersonnel.id,
    // barberId: Storage.GetItem("barber").id,
    barberId: 1,
    color: color,
    staffName: name,
    eMail: email,
    telNo: phoneNo,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {});
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
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={"md"}
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
          {/* {!selectedPage === 0 && (
            <MdKeyboardArrowLeft
              size={30}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedPage(selectedPage - 1);
              }}
            />
          )} */}

          <DialogTitle id="alert-dialog-title" style={{ fontSize: "35px" }}>
            {/* {selectedPage === 0
              ? "Ayar Seçin"
              : selectedPage === 1 */}
            Çalışan Düzenle
            {/* : "Verdiği Hizmetler"} */}
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
          {/* {selectedPage === 0 ? (
            <SelectPageComp setSelectedPage={setSelectedPage}></SelectPageComp>
          ) : selectedPage === 1 ? ( */}
          <PersonnelAddAndEdit
            selectedPersonnel={selectedPersonnel}
            // personnelType={personnelType}
            color={color}
            name={name}
            email={email}
            phoneNo={phoneNo}
            openWorkingHours={openWorkingHours}
            // setPersonnelType={setPersonnelType}
            setColor={setColor}
            setName={setName}
            setEmail={setEmail}
            setPhoneNo={setPhoneNo}
            setOpenWorkingHours={setOpenWorkingHours}
            forPersonnelSettings={forPersonnelSettings}
          ></PersonnelAddAndEdit>
          {/* // ) : (
          //   <PersonnelServices
          //     selectedPersonnel={selectedPersonnel}
          //   ></PersonnelServices>
          // )} */}
        </DialogContent>
        <DialogActions>
          {/* {selectedPage !== 0 ? ( */}
          <Button
            onClick={handleClose}
            color="primary"
            style={{ width: "100%" }}
            variant="outlined"
            onClick={() => {
              _updatePersonnel(PersonnelObject);
              handleClose();
            }}
          >
            Kaydet
          </Button>
          {/* ) : null} */}
        </DialogActions>
      </Dialog>
    </div>
  );
};
