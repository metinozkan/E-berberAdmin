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
  TextField,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import { AddServiceModal } from "./AddServiceModal";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minWidth: "450px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".5em",
          width: "100%",
          background: "rgba(226, 226, 226, 0.58)",
        }}
      >
        <Autocomplete
          freeSolo
          style={{ width: "50%" }}
          id="free-solo-2-demo"
          disableClearable
          options={["saç yıkama", "saç kesim", "sakal", "ense"]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Ara"
              margin="dense"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <AddServiceModal></AddServiceModal>
      </div>
      <TableContainer component={Paper} elevation={0}>
        <Table
          classserviceName={classes.table}
          size="medium"
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
    </div>
  );
};
