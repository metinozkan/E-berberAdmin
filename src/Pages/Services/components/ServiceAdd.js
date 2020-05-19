import React, { useState, useEffect } from "react";
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
import { EditModal } from "../../../Components/EditModal";
const useStyles = makeStyles({
  table: {
    // minWidth: 450,
  },
});

// const rows = [
//   createData(
//     <TextField
//       variant="outlined"
//       margin="dense"
//       placeholder="Hizmet"
//     ></TextField>,
//     <TextField
//       variant="outlined"
//       margin="dense"
//       InputProps={{
//         endAdornment: <InputAdornment position="end">dk</InputAdornment>,
//       }}
//     ></TextField>,
//     <TextField
//       variant="outlined"
//       margin="dense"
//       InputProps={{
//         endAdornment: <InputAdornment position="end">Tl</InputAdornment>,
//       }}
//     ></TextField>
//   ),
// ];

export const ServiceAdd = ({ selectedService, _addService }) => {
  const classes = useStyles();
  const [serviceName, setServiceName] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  function createData(serviceName, serviceDuration, servicePrice) {
    return { serviceName, serviceDuration, servicePrice };
  }
  const row = createData(
    <TextField
      value={serviceName}
      onChange={(e) => {
        setServiceName(e.target.value);
      }}
      variant="outlined"
      margin="dense"
      placeholder="Hizmet"
    ></TextField>,
    <TextField
      value={serviceDuration}
      onChange={(e) => {
        setServiceDuration(e.target.value);
      }}
      variant="outlined"
      margin="dense"
      InputProps={{
        endAdornment: <InputAdornment position="end">dk</InputAdornment>,
      }}
    ></TextField>,
    <TextField
      value={servicePrice}
      onChange={(e) => {
        setServicePrice(e.target.value);
      }}
      variant="outlined"
      margin="dense"
      InputProps={{
        endAdornment: <InputAdornment position="end">Tl</InputAdornment>,
      }}
    ></TextField>
  );

  return (
    <EditModal
      buttonTitle={"Hizmet Ekle"}
      dialogTitle={"Hizmet Ekle"}
      onConfirm={() =>
        _addService({
          typeName: serviceName,
          time: serviceDuration,
          price: servicePrice,
        })
      }
    >
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
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{ width: "40%", borderRight: "1px solid #e2e2e2" }}
              >
                {row.serviceName}
              </TableCell>
              <TableCell align="center" style={{ width: "25%" }}>
                {row.serviceDuration}
              </TableCell>
              <TableCell align="center" style={{ width: "25%" }}>
                {row.servicePrice}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </EditModal>
  );
};
