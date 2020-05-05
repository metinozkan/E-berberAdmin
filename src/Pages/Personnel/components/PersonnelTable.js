import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { PersonnelEditModal } from "./PersonnelEditModal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCol: {},
  tableRowBorder: {
    borderRight: "1px solid #e2e2e2",
  },
});

function createData(name, phoneNumber, workerType, genderType, button) {
  return { name, phoneNumber, workerType, genderType, button };
}

const rows = [
  createData(
    "Yüksel Yurtay",
    "+90 0535 053 55 454",
    "Yönetici",
    "erkek yetişkin",
    <PersonnelEditModal />
  ),
  createData(
    "Hasan Dogan",
    "+90 0535 053 55 454",
    "Yönetici",
    "KADIN",
    <PersonnelEditModal />
  ),
  createData(
    "Metin ÖZKAN",
    "+90 0535 053 55 454",
    "Yönetici",
    "Farketmez",
    <PersonnelEditModal />
  ),
];

export const PersonnelTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCol}>İsim</TableCell>
            <TableCell align="center" className={classes.tableCol}>
              Telefon Numarası
            </TableCell>
            <TableCell align="center" className={classes.tableCol}>
              Çalışan Tipi
            </TableCell>
            <TableCell align="center" className={classes.tableCol}>
              Müşteri Cinsiyeti
            </TableCell>
            <TableCell align="center" className={classes.tableCol}>
              Buton gelecek
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                className={classes.tableRowBorder}
              >
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.tableRowBorder}>
                {row.phoneNumber}
              </TableCell>
              <TableCell align="center" className={classes.tableRowBorder}>
                {row.workerType}
              </TableCell>
              <TableCell align="center" className={classes.tableRowBorder}>
                {row.genderType}
              </TableCell>
              <TableCell align="center" className={""}>
                {row.button}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
