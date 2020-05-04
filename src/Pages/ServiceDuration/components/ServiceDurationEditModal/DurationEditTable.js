import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const useStyles = makeStyles({
  table: {
    // minWidth: 450,
  },
});

function createData(service, durationInput) {
  return { service, durationInput };
}

const rows = [
  createData(
    "Saç Kesim",
    <TextField
      placeholder="süre"
      variant="outlined"
      margin="dense"
      // InputLabelProps={{
      //   shrink: true,
      // }},
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            dk <AccessAlarmIcon />
          </InputAdornment>
        ),
      }}
      //   InputProps={{
      //     endAdornment: (
      //       <InputAdornment position="end">
      //         <AccessAlarmIcon />
      //       </InputAdornment>
      //     ),
      //   }}
    ></TextField>
  ),
  createData(
    "Sakal Kesim",
    <TextField
      placeholder="süre"
      variant="outlined"
      margin="dense"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            dk <AccessAlarmIcon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  ),

  createData(
    "Ağda",
    <TextField
      placeholder="süre"
      variant="outlined"
      margin="dense"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            dk <AccessAlarmIcon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  ),
];

export const DurationEditTable = () => {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      style={{ border: "1px solid #e2e2e2" }}
    >
      <Table classservice={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hizmet</TableCell>
            <TableCell align="center">Süre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.service}>
              <TableCell
                component="th"
                scope="row"
                style={{ width: "40%", borderRight: "1px solid #e2e2e2" }}
              >
                {row.service}
              </TableCell>
              <TableCell align="right" style={{ width: "50%" }}>
                {row.durationInput}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
