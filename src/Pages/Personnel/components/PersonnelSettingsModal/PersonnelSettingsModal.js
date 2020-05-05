import React, { useState } from "react";
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
} from "@material-ui/core";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Close } from "@material-ui/icons";
import { WorkingHoursComp } from "../../../GeneralInformation/components/WorkingHours/WorkingHours";
import { PersonnelServices } from "../PersonnelServices";
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

const PersonnelEdit = ({ selectedPersonnel }) => {
  const [personnelType, setPersonnelType] = useState("Yönetici");
  const [color, setColor] = useState();
  const [openWorkingHours, setOpenWorkingHours] = useState(false);
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off" style={{}}>
          <TextField
            id="outlined-full-width"
            label="Çalışan adı"
            value={selectedPersonnel.name}
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
            //label="Açık"
            style={{ flex: 2, marginRight: ".5em" }}
            placeholder="Çalışan türü"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            select
            value={personnelType}
            onChange={(e) => {
              setPersonnelType(e.target.value);
            }}
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
              //label="Açık"
              style={{ flex: 2, marginRight: ".5em" }}
              placeholder="Çalışan türü"
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              select
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
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
                <WorkingHoursComp></WorkingHoursComp>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </form>
      </Grid>
    </Grid>
  );
};

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
            <PersonnelServices></PersonnelServices>
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
