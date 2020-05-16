import React, { useState } from "react";
import {
  Button,
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
export const PersonnelEdit = ({
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

  //calısma saatlerini nasıl yapacaksın artık Allah bilir

  return (
    <Grid container direction="column" justify="flex-start">
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off" style={{}}>
          <TextField
            id="outlined-full-width"
            label="Çalışan adı"
            value={name}
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
              value={phoneNo}
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
