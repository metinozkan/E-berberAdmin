import React, { useState } from "react";
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
import { AddServiceModal } from "../AddServiceModal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(serviceName, duration, price, deleteButton) {
  return { serviceName, duration, price, deleteButton };
}

export const PersonnelServices = ({ selectedPersonnel }) => {
  const classes = useStyles();
  const [services, setServices] = useState(selectedPersonnel.services);
  const rows = selectedPersonnel.services.map((service) =>
    createData(
      service.serviceName,
      service.serviceDuration,
      service.servicePrice + "₺",
      <IconButton aria-label="delete" style={{ color: "red", padding: "0px" }}>
        <DeleteIcon />
      </IconButton>
    )
  );

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
          options={services}
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
        <AddServiceModal setServices={setServices}></AddServiceModal>
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
                <TableCell align="right">{row.duration}</TableCell>
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
