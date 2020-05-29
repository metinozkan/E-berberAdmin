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
  const [added, setAdded] = useState(false);
  const [value, setValue] = useState({
    isOpen: day.isOpen,
    startHour: day.startHour,
    endHour: day.endHour,
  });

  const _addedPersonnelWorkHours = () => {
    Agent.WorkHours.addWorkHours()
      .send()
      .then((res) => {
        if (res) {
          console.log(res.body);
        }
      });
  };
  return (
    <ContainerRow>
      {added ? (
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
            disabled={value && !value.isOpen}
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
            disabled={value && !value.isOpen}
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
          if (!added) {
            const workTimesObj = {
              id: day.id,
              barberId: day.barberId,
              day: day.day,
              startHour: value.startHour,
              endHour: value.endHour,
              isOpen: value.isOpen,
            };
            console.log("update giden", workTimesObj);
            // _updateWorkHours(workTimesObj);
            setAdded(true);
          } else {
            // setAdded(true);
          }
        }}
      >
        {added ? "Eklendi" : "Ekle"}
      </Button>
    </ContainerRow>
  );
};

export const WorkingHoursPersonnel = ({ workingHours, _updateWorkHours }) => {
  const classes = useStyles();
  const [barberWorkTimes, setBarberWorkTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const _getBarberWorkTimes = (barberId) => {
    Agent.Barbers.getBarberWorkTimes(barberId).then((res) => {
      if (res.ok) {
        console.log(res.body);
        setBarberWorkTimes(res.body);
        setIsLoading(false);
        // _getStaffWorkHours();
      }
    });
  };

  const _getStaffWorkHours = () => {
    Agent.WorkHours.getStaffWorkHours("id").then((res) => {
      if (res.ok) {
        console.log(res.body);
      }
    });
  };

  useEffect(() => {
    const storageBarber = Storage.GetItem("barber");

    _getBarberWorkTimes(storageBarber.id);
  }, []);
  const sort_days = (days) => {
    console.log("days", days);
    var list = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var day_of_week = new Date().getDay();
    var sorted_list = list
      .slice(day_of_week)
      .concat(list.slice(0, day_of_week));

    console.log("sorted_list", sorted_list);
    console.log("sortedMONDAY", sorted_list.indexOf("Monday"));
    console.log("sorted_TUESDAY", sorted_list.indexOf("Tuesday"));

    console.log(
      "sorted_listDAAAAAY",
      days.sort(function (a, b) {
        return sorted_list.indexOf(a.day) > sorted_list.indexOf(b.day);
      })
    );

    return days.sort(function (a, b) {
      return sorted_list.indexOf(a.day) > sorted_list.indexOf(b.day);
    });
  };
  console.log("böyle gelioyr", barberWorkTimes);
  console.log("sıralanmıs hali mi", sort_days(barberWorkTimes));

  return (
    <ContainerWorkingHours>
      {!isLoading ? (
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

              {barberWorkTimes &&
                barberWorkTimes.map((day) => (
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
      ) : (
        <Loading />
      )}
    </ContainerWorkingHours>
  );
};
