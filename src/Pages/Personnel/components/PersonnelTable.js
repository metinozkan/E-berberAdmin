import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { PersonnelSettingsModal } from "./PersonnelSettingsModal/PersonnelSettingsModal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCol: {},
  tableRowBorder: {
    borderRight: "1px solid #e2e2e2",
  },
});

function createData(name, phoneNumber, workerColor, button) {
  return { name, phoneNumber, workerColor, button };
}

const Personnels = [
  {
    name: "Yüksel Yurtay",
    phoneNumber: "+90 0535 053 55 454",
    workerType: "Yönetici",
    genderType: "Kadın",
    services: [
      {
        serviceName: "saç ",
        serviceDuration: "20",
        servicePrice: "20tl",
      },

      {
        serviceName: "sakal",
        serviceDuration: "20",
        servicePrice: "20tl",
      },
      {
        serviceName: "yıkama",
        serviceDuration: "35",
        servicePrice: "28tl",
      },
    ],
  },
  {
    name: "Metin ÖZKAN",
    phoneNumber: "+90 0535 053 55 454",
    workerType: "Yönetici",
    genderType: "Farketmez",
    services: [
      {
        serviceName: "çocuk traş",
        serviceDuration: "20",
        servicePrice: "20tl",
      },

      {
        serviceName: "maske",
        serviceDuration: "20",
        servicePrice: "20tl",
      },
      {
        serviceName: "el ayak :)",
        serviceDuration: "35",
        servicePrice: "28tl",
      },
    ],
  },
];

const PersonnelMatchService = [
  {
    name: "Mahmut Gün",
    services: ["saç", "sakal", "ense", "damat traş"],
  },
  {
    name: "Metin ÖZKAN",
    services: ["çocuk traş", "maske", "el ayak :)"],
  },
];

export const PersonnelTable = ({ personnelsForTable, _updatePersonnel }) => {
  const classes = useStyles();

  const [personnels, setPersonnels] = useState([]);
  // const rows = personnels.map((personnel) =>
  //   createData(
  //     personnel.staffName,
  //     " personnel.phoneNumber",
  //     "personnel.workerType",
  //     " personnel.workerColor",
  //     <PersonnelSettingsModal
  //       selectedPersonnel={personnel}
  //       _updatePersonnel={_updatePersonnel}
  //     />
  //   )
  // );

  const rows = personnels.map((personnel) =>
    createData(
      personnel.staffName,
      personnel.telNo,
      // personnel.workerType,
      personnel.color,
      <PersonnelSettingsModal
        selectedPersonnel={personnel}
        _updatePersonnel={_updatePersonnel}
        forPersonnelSettings={true}
      />
    )
  );
  useEffect(() => {
    setPersonnels(personnelsForTable);
  }, [personnelsForTable]);
  useEffect(() => {});
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCol}>İsim</TableCell>
            <TableCell align="center" className={classes.tableCol}>
              Telefon Numarası
            </TableCell>
            {/* <TableCell align="center" className={classes.tableCol}>
              Çalışan Tipi
            </TableCell> */}
            <TableCell align="center" className={classes.tableCol}>
              Çalışan Rengi
            </TableCell>
            <TableCell align="center" className={classes.tableCol}>
              Düzenle
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
              {/* <TableCell align="center" className={classes.tableRowBorder}>
                {row.workerType}
              </TableCell> */}
              <TableCell align="center" className={classes.tableRowBorder}>
                {row.workerColor}
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
