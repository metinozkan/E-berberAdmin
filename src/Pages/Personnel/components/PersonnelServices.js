import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableBody,
  Button,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(serviceName, time, price, deleteButton) {
  return { serviceName, time, price, deleteButton };
}

const rows = [
  createData(
    "Saç kesim",
    30,
    "20₺",
    <IconButton aria-label="delete" style={{ color: "red", padding: "0px" }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    "Saç Yıkama",
    10,
    "20₺",
    <IconButton aria-label="delete" style={{ color: "red", padding: "0px" }}>
      <DeleteIcon />
    </IconButton>
  ),
  createData(
    "Sakal Kesim",
    10,
    "25₺",
    <IconButton aria-label="delete" style={{ color: "red", padding: "0px" }}>
      <DeleteIcon />
    </IconButton>
  ),
];

export const PersonnelServices = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        classserviceName={classes.table}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Hizmet Adı</TableCell>
            <TableCell align="right">Süresi</TableCell>
            <TableCell align="right">Ücret</TableCell>
            <TableCell align="right">Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.serviceName}>
              <TableCell component="th" scope="row">
                {row.serviceName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.deleteButton}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
