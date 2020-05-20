import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Grid,
  TextField,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  useMediaQuery,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import { WorkingHours } from "../../GeneralInformation/components/WorkingHours/WorkingHours";
import { PersonnelServices } from "./PersonnelSettingsModal/PersonnelServices";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    padding: ".5em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export const PersonnelAddAndEdit = ({
  _addPersonnel,
  setPersonnelType,
  setColor,
  setName,
  setEmail,
  setPhoneNo,
  setOpenWorkingHours,
  personnelType,
  color,
  name,
  email,
  phoneNo,
  openWorkingHours,
}) => {
  const classes = useStyles();
  const [personnelWorkingHours, setPersonnelWorkingHours] = useState(false);
  const _getWorkingHours = () => {
    // Agent.WorkHours.
    const WorkHours = [
      {
        id: 8,
        barberId: 13,
        staffId: 5,
        day: "Pazar",
        startHour: "08:00",
        endHour: "22:30",
      },
      {
        id: 1,
        barberId: 13,
        staffId: 1,
        day: "Pazartesi",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 2,
        barberId: 13,
        staffId: 1,
        day: "Salı",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 3,
        barberId: 13,
        staffId: 1,
        day: "Çarşamba",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 4,
        barberId: 13,
        staffId: 1,
        day: "Perşembe",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 6,
        barberId: 13,
        staffId: 1,
        day: "Cuma",
        startHour: "08:30",
        endHour: "22:30",
      },
      {
        id: 7,
        barberId: 13,
        staffId: 1,
        day: "Cumartesi",
        startHour: "08:30",
        endHour: "22:30",
      },
    ];
    setPersonnelWorkingHours(WorkHours);
  };
  useEffect(() => {
    _getWorkingHours();
  }, []);

  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off" style={{}}>
          <TextField
            id="outlined-full-width"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            label="Çalışan adı"
            style={{}}
            //  placeholder="Placeholder"
            // helperText="Full width!"
            fullWidth
            margin="dense"
            // InputLabelProps={{
            //   shrink: true,
            // }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="E posta adresi"
            style={{}}
            placeholder="Placeholder"
            // helperText="Full width!"
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ width: "10%" }}>+90</span>{" "}
            <TextField
              id="outlined-full-width"
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
              label="Telefon numarası"
              style={{}}
              placeholder="Placeholder"
              // helperText="Full width!"
              fullWidth
              margin="dense"
              InputLabelProps={
                {
                  // shrink: true,
                }
              }
              variant="outlined"
            />
          </div>
          <TextField
            id="outlined-full-width"
            value={personnelType}
            onChange={(e) => {
              setPersonnelType(e.target.value);
            }}
            //label="Açık"
            style={{ flex: 2, marginRight: ".5em" }}
            placeholder="Çalışan türü"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            select
          >
            <MenuItem value={"Yönetici"}>Yönetici</MenuItem>
            <MenuItem value={"Çalışan"}>Çalışan</MenuItem>
          </TextField>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ width: "20%" }}>Renk</span>
            <TextField
              id="outlined-full-width"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              //label="Açık"
              style={{ flex: 2, marginRight: ".5em" }}
              placeholder="Çalışan rengi"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              select
            >
              <MenuItem value={"red"}>
                <div
                  style={{ width: "100px", height: "20px", background: "red" }}
                ></div>
              </MenuItem>
              <MenuItem value={"blue"}>
                <div
                  style={{ width: "100px", height: "20px", background: "blue" }}
                ></div>
              </MenuItem>
            </TextField>
          </div>

          <ExpansionPanel
            expanded={openWorkingHours}
            onChange={() => setOpenWorkingHours(!openWorkingHours)}
            style={{ width: "100%", margin: "2em 0px" }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                + Çalışma Saatleri
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Tıklayın ve çalışma saatlerini düzenleyin
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{ width: "100%" }}>
                {personnelWorkingHours && (
                  <WorkingHours
                    workingHours={personnelWorkingHours}
                  ></WorkingHours>
                )}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </form>
      </Grid>
    </Grid>
  );
};

export const PersonnelAddModal = ({ _addPersonnel }) => {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const [personnelType, setPersonnelType] = useState("Yönetici");
  const [color, setColor] = useState("blue");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [openWorkingHours, setOpenWorkingHours] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const PersonnelObject = {
    personnelType: personnelType,
    color: color,
    name: name,
    email: email,
    phoneNo: phoneNo,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ekle
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
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <DialogTitle id="alert-dialog-title">Çalışan Ekle</DialogTitle>
            <Close
              size={25}
              style={{ marginRight: "16px", cursor: "pointer" }}
              onClick={() => {
                setSelectedPage(0);
                handleClose();
              }}
            ></Close>
          </div>

          <DialogContent>
            <PersonnelAddAndEdit
              _addPersonnel={_addPersonnel}
              personnelType={personnelType}
              color={color}
              name={name}
              email={email}
              phoneNo={phoneNo}
              openWorkingHours={openWorkingHours}
              setPersonnelType={setPersonnelType}
              setColor={setColor}
              setName={setName}
              setEmail={setEmail}
              setPhoneNo={setPhoneNo}
              setOpenWorkingHours={setOpenWorkingHours}
            ></PersonnelAddAndEdit>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              style={{ width: "100%" }}
              variant="outlined"
              onClick={() => {
                console.log("personelobj", PersonnelObject);
              }}
            >
              Kaydet
            </Button>
          </DialogActions>
        </>
      </Dialog>
    </div>
  );
};
