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
  Divider,
} from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
const useStyles = makeStyles({
  table: {
    // minWidth: 450,
  },
});

function createData(service, lowestPrice, highestPrice) {
  return { service, lowestPrice, highestPrice };
}

const rows = [
  createData(
    <TextField
      variant="outlined"
      margin="dense"
      placeholder="Hizmet"
    ></TextField>,
    <TextField
      variant="outlined"
      margin="dense"
      InputProps={{
        endAdornment: <InputAdornment position="end">dk</InputAdornment>,
      }}
    ></TextField>,
    <TextField
      variant="outlined"
      margin="dense"
      InputProps={{
        endAdornment: <InputAdornment position="end">Tl</InputAdornment>,
      }}
    ></TextField>
  ),
];

export const ServiceAddTable = ({ selectedService }) => {
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
            <TableCell align="center">Hizmet Süresi</TableCell>
            <TableCell align="center">Hizmet Fiyatı</TableCell>
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
              <TableCell align="center" style={{ width: "25%" }}>
                {row.lowestPrice}
              </TableCell>
              <TableCell align="center" style={{ width: "25%" }}>
                {row.highestPrice}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
