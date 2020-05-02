import React, { useState } from "react";
import styled from "styled-components";
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const ContainerWorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-radius: 5px;
  width: 100%;
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  width: 100%;
  border-top: 1px solid darkGray;
  padding: 0.2em;
`;
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

const Hours = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "20:00"];

const WorkingHoursRow = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openHour, setOpenHour] = useState("08:00");
  const [closeHour, setCloseHour] = useState("20:00");

  return (
    <ContainerRow>
      <span style={{ flex: 1 }}>{title}</span>
      <TextField
        id="outlined-full-width"
        //label="Açık"
        style={{ flex: 2, marginRight: ".5em" }}
        margin="dense"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        select
        value={isOpen}
        onChange={(e) => {
          setIsOpen(e.target.value);
        }}
      >
        <MenuItem value={true}>Açık</MenuItem>
        <MenuItem value={false}>Kapalı</MenuItem>
      </TextField>
      <TextField
        id="outlined-full-width"
        //label="Açık"
        style={{ flex: 1, marginRight: ".5em" }}
        margin="dense"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        select
        value={openHour}
        onChange={(e) => {
          setOpenHour(e.target.value);
        }}
      >
        {Hours.map((hour, index) => (
          <MenuItem key={index} value={hour}>
            {hour}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-full-width"
        //label="Açık"
        style={{ flex: 1, marginRight: ".5em" }}
        margin="dense"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        select
        value={closeHour}
        onChange={(e) => {
          setCloseHour(e.target.value);
        }}
      >
        {Hours.map((hour, index) => (
          <MenuItem key={index} value={hour}>
            {hour}
          </MenuItem>
        ))}
      </TextField>
    </ContainerRow>
  );
};

export const WorkingHours = () => {
  const classes = useStyles();

  return (
    <ContainerWorkingHours>
      <ExpansionPanel
        expanded={true}
        // onChange={"handleChange("panel1")"}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ExpansionPanelSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Çalışma Saatleri</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2em",
              }}
            >
              <WorkingHoursRow title="pzts"></WorkingHoursRow>
              <WorkingHoursRow title="Salı"></WorkingHoursRow>

              <WorkingHoursRow title="Çarş"></WorkingHoursRow>

              <WorkingHoursRow title="Perş"></WorkingHoursRow>

              <WorkingHoursRow title="Cuma"></WorkingHoursRow>
              <WorkingHoursRow title="Cmts"></WorkingHoursRow>
              <WorkingHoursRow title="Pzr"></WorkingHoursRow>
            </div>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
            >
              Kaydet
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ContainerWorkingHours>
  );
};
