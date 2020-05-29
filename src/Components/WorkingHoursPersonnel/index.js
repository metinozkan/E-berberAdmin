import React, { useState, useEffect } from "react";
import { Agent, Storage, Loading } from "../../Utils/importFiles";

import styled from "styled-components";
import { hours } from "../../Utils/importFiles";
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { MdDone, MdDeleteForever } from "react-icons/md";
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
      {editing ? (
        <>
          <IconButton
            aria-label="delete"
            style={{
              marginLeft: ".5em",
              cursor: "pointer",
            }}
            onClick={() => {
              // if (editing) {
              //   setEditing(false);
              //   if (_updateWorkHours) {
              //     const workTimesObj = {
              //       id: day.id,
              //       barberId: day.barberId,
              //       day: day.day,
              //       startHour: value.startHour,
              //       endHour: value.endHour,
              //     };
              //     console.log("gidecek olan saat güncel", workTimesObj);
              //     _updateWorkHours(workTimesObj);
              //   }
              // } else {
              //   setEditing(true);
              // }
              const workTimesObj = {
                id: day.id,
                barberId: day.barberId,
                day: day.day,
                startHour: value.startHour,
                endHour: value.endHour,
              };
              _updateWorkHours(workTimesObj);
              console.log("woktteim", workTimesObj);
              setEditing(false);
            }}
          >
            <MdDone size={25} color="green">
              Kaydet
            </MdDone>
          </IconButton>
          <IconButton
            style={{ marginLeft: ".5em", cursor: "pointer" }}
            onClick={() => {
              setEditing(false);
            }}
          >
            <MdDeleteForever size={25} color="red" variant="contained">
              Sil
            </MdDeleteForever>
          </IconButton>
        </>
      ) : (
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setEditing(true);
          }}
        >
          Düzenle
        </Button>
      )}
    </ContainerRow>
  );
};

const WorkingHoursAddRow = () => {
  const [value, setValue] = useState({
    day: "Pazartesi",
    startHour: "00:08",
    endHour: "20:00",
  });
  return (
    <ContainerRow>
      <>
        <TextField
          id="outlined-full-width"
          label="Gün"
          select
          value={"Günler gelir"}
          onChange={(e) => {
            setValue({ ...value, day: e.target.value });
          }}
          style={{ flex: 1, marginRight: ".5em" }}
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        >
          {["Pzt", "Salı"].map((hour, index) => (
            <MenuItem key={index} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Başlama saati"
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
          label="Bitirme saati"
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
      <Button color="primary" variant="contained" onClick={() => {}}>
        {"Ekle"}
      </Button>
    </ContainerRow>
  );
};

export const WorkingHoursPersonnel = ({ workingHours, _updateWorkHours }) => {
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
        elevation={0}
      >
        <ExpansionPanelSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Çalışma Saatleri Personel
          </Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ width: "100%", height: "100%" }}>
            {/* <WorkingHoursComp></WorkingHoursComp> */}

            {workingHours &&
              workingHours.map((day) => (
                <WorkingHoursRow
                  title={day.day}
                  day={day}
                  // value={sunday}
                  // setValue={setSunday}
                  _updateWorkHours={_updateWorkHours}
                ></WorkingHoursRow>
              ))}

            <WorkingHoursAddRow />
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
