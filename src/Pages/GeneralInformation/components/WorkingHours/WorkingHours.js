import React, { useState } from "react";
import styled from "styled-components";
import { hours } from "../../../../Utils/importFiles";
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

const WorkingHoursRow = ({ title, day, _updateWorkHours }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState({
    isOpen: day.isOpen,
    startHour: day.startHour,
    endHour: day.endHour,
  });
  return (
    <ContainerRow>
      {!editing ? (
        <div
          style={{
            height: "51px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{ flex: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            {title}
          </span>
          <div style={{ flex: 1.5, paddingLeft: "14px" }}>
            {value.isOpen == "true" ? "Açık" : "Kapalı"}
          </div>
          <div style={{ flex: 1, paddingLeft: "14px" }}>{value.startHour}</div>
          <div style={{ flex: 1, paddingLeft: "14px" }}> {value.endHour}</div>
        </div>
      ) : (
        <>
          <span
            style={{ flex: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            {title}
          </span>
          <TextField
            id="outlined-full-width"
            //label="Açık"

            style={{ flex: 1.5, marginRight: ".5em" }}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            select
            value={value && value.isOpen}
            onChange={(e) => {
              setValue({ ...value, isOpen: e.target.value });
            }}
          >
            <MenuItem value={"true"}>Açık</MenuItem>
            <MenuItem value={"false"}>Kapalı</MenuItem>
          </TextField>
          <TextField
            id="outlined-full-width"
            //label="Açık"
            disabled={value && value.isOpen == "false"}
            select
            value={value.startHour}
            onChange={(e) => {
              setValue({ ...value, startHour: e.target.value });
            }}
            style={{ flex: 1, marginRight: ".5em" }}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          >
            {hours.map((hour, index) => (
              <MenuItem key={index} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-full-width"
            //label="Açık"
            disabled={value && value.isOpen == "false"}
            select
            value={value.endHour}
            onChange={(e) => {
              setValue({ ...value, endHour: e.target.value });
            }}
            style={{ flex: 1, marginRight: ".5em" }}
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          >
            {hours.map((hour, index) => (
              <MenuItem key={index} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </TextField>
        </>
      )}
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          if (editing) {
            setEditing(false);
            if (_updateWorkHours) {
              const workTimesObj = {
                id: day.id,
                barberId: day.barberId,
                day: day.day,
                startHour: value.startHour,
                endHour: value.endHour,
                isOpen: value.isOpen,
              };
              _updateWorkHours(workTimesObj);
            }
          } else {
            setEditing(true);
          }
        }}
      >
        {editing ? "Kaydet" : "Düzenle"}
      </Button>
    </ContainerRow>
  );
};

export const WorkingHoursComp = () => {
  const [monday, setMonday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  const [tuesday, setTuesday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  const [wednesday, setWednesday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  const [thursday, setThursday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  const [friday, setFriday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  const [saturday, setSaturday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  const [sunday, setSunday] = useState({
    isOpen: true,
    openHour: "08:00",
    closeHour: "20:00",
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2em",
      }}
    >
      <WorkingHoursRow
        title="pzts"
        value={monday}
        setValue={setMonday}
      ></WorkingHoursRow>
      <WorkingHoursRow
        title="Salı"
        value={tuesday}
        setValue={setTuesday}
      ></WorkingHoursRow>
      <WorkingHoursRow
        title="Çarş"
        value={wednesday}
        setValue={setWednesday}
      ></WorkingHoursRow>
      <WorkingHoursRow
        title="Perş"
        value={thursday}
        setValue={setThursday}
      ></WorkingHoursRow>
      <WorkingHoursRow
        title="Cuma"
        value={friday}
        setValue={setFriday}
      ></WorkingHoursRow>
      <WorkingHoursRow
        title="Cmts"
        value={saturday}
        setValue={setSaturday}
      ></WorkingHoursRow>
      <WorkingHoursRow
        title="Pzr"
        value={sunday}
        setValue={setSunday}
      ></WorkingHoursRow>
    </div>
  );
};

export const WorkingHours = ({
  workingHours,
  fromGeneralInformation,
  _updateWorkHours,
}) => {
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
        elevation={fromGeneralInformation ? 1 : 0}
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
            {/* <WorkingHoursComp></WorkingHoursComp> */}

            {workingHours
              .sort(function (a, b) {
                return a.id - b.id;
              })
              .map((day) => (
                <WorkingHoursRow
                  title={day.day}
                  day={day}
                  // value={sunday}
                  // setValue={setSunday}
                  _updateWorkHours={_updateWorkHours}
                ></WorkingHoursRow>
              ))}
            {/* <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
            >
              Kaydet
            </Button> */}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ContainerWorkingHours>
  );
};
