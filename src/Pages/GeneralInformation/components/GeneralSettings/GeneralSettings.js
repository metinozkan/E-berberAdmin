import React, { useState } from "react";
import styled from "styled-components";
import { districts, Agent } from "../../../../Utils/importFiles";
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

export const GeneralSettings = ({ _updateGeneralSettings, barber }) => {
  const classes = useStyles();
  const [barberName, setBarberName] = useState(barber.barberName);
  const [address, setAddress] = useState(barber.adress);
  const [email, setEmail] = useState(barber.eMail);
  const [telephoneNumber, setTelephoneNumber] = useState(barber.phoneNo);
  const [district, setDistrict] = useState(barber.district);
  const [taxObject, setTaxObjet] = useState();

  //InvoiceContaienr
  const [taxName, setTaxName] = useState("");
  const [taxNo, setTaxNo] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [taxAddress, setTaxAddress] = useState("");
  const TaxObject = {
    taxName: taxName,
    taxNo: taxNo,
    taxOffice: taxOffice,
    taxAddress: taxAddress,
  };
  // console.log("distric", district);

  const barberObject = {
    barberName: barberName,
    phoneNo: telephoneNumber,
    eMail: email,
    adress: address,
    district: district,
    city: "Sakarya",
  };

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
              inputValue={district}
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
            <InvoiceContainer
              setTaxObjet={setTaxObjet}
              taxObject={taxObject}
              taxName={taxName}
              setTaxName={setTaxName}
              taxNo={taxNo}
              setTaxNo={setTaxNo}
              taxOffice={taxOffice}
              setTaxOffice={setTaxOffice}
              taxAddress={taxAddress}
              setTaxAddress={setTaxAddress}
            ></InvoiceContainer>

            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
              onClick={() => {
                _updateGeneralSettings(barberObject);

                console.log("gidenobje", barberObject);
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
