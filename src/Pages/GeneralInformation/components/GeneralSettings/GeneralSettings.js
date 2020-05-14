import React, { useState } from "react";
import styled from "styled-components";
import { districts } from "../../../../Utils/importFiles";
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { InvoiceContainer } from "./InvoiceContainer";
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

export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-radius: 5px;
`;

export const GeneralSettings = () => {
  const classes = useStyles();
  const [barberName, setBarberName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [district, setDistrict] = useState("");

  // console.log("distric", district);
  return (
    <ContainerGeneral style={{}}>
      <ExpansionPanel
        expanded={true}
        // onChange={"handleChange("panel1")"}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ExpansionPanelSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General Ayarlar</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            style={{}}
          >
            <TextField
              id="outlined-full-width"
              label="İşletme adı"
              value={barberName}
              onChange={(e) => {
                setBarberName(e.target.value);
              }}
              style={{}}
              //  placeholder="Placeholder"
              // helperText="Full width!"
              fullWidth
              margin="dense"
              // InputLabelProps={{
              //   shrink: true,
              // }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Adres"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              style={{}}
              placeholder="Placeholder"
              // helperText="Full width!"
              fullWidth
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="E posta adresi"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{}}
              placeholder="Placeholder"
              // helperText="Full width!"
              fullWidth
              margin="dense"
              InputLabelProps={
                {
                  // shrink: true,
                }
              }
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Telefon Numarası"
              value={telephoneNumber}
              onChange={(e) => {
                setTelephoneNumber(e.target.value);
              }}
              style={{}}
              placeholder="Placeholder"
              // helperText="Full width!"
              fullWidth
              margin="dense"
              InputLabelProps={
                {
                  // shrink: true,
                }
              }
              variant="outlined"
            />
            <Autocomplete
              freeSolo
              id="combo-box-demo"
              options={districts}
              getOptionLabel={(option) => option.title}
              style={{ width: "100%" }}
              onChange={(e, values) => {
                setDistrict(values.title);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  id="outlined-full-width"
                  label="İlçe seçin"
                  placeholder="Placeholder"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                />
              )}
            ></Autocomplete>
            <InvoiceContainer></InvoiceContainer>

            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
              onClick={() => {
                const barberObject = {
                  barberName: barberName,
                  address: address,
                  email: email,
                  telephoneNumber: telephoneNumber,
                  district: district,
                };
                console.log("barber obej", barberObject);
              }}
            >
              Kaydet
            </Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ContainerGeneral>
  );
};
