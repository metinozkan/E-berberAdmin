import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Close } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});
const personnelList = ["Yüksel Yurtay", "Metin Özkan", "Hasan Doğan"];

function createData(name, personnelList) {
  return { name, personnelList };
}

const rows = [
  createData("Saç Kesim", personnelList),
  createData("Sakal Kesim", personnelList),
  createData("Saç Yıkama", personnelList),
  createData("Yüz Maske", personnelList),
];
const ServicesMatchPersonnelTable = () => {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      style={{ border: "1px solid #e2e2e2" }}
    >
      <Table className={classes.table} aria-label="a dense table" size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Hizmet</TableCell>
            {personnelList.map((personnel) => {
              return <TableCell align="right">{personnel}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {row.personnelList.map((personnel) => (
                <TableCell align="right">
                  <Checkbox></Checkbox>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddServiceMatchPersonelModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Hizmet Ekle
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "1em 0px",
            minWidth: "450px",
          }}
        >
          <DialogTitle id="alert-dialog-title">
            Hizmet Personel Seçimi
          </DialogTitle>

          <Close
            size={25}
            style={{ marginRight: "16px", cursor: "pointer" }}
            onClick={() => {
              handleClose();
            }}
          ></Close>
        </div>
        <DialogContent>
          <ServicesMatchPersonnelTable></ServicesMatchPersonnelTable>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
