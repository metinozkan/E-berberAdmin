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
  MenuItem,
} from "@material-ui/core";
import { FiUpload, FiImage } from "react-icons/fi";
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
const InputHidden = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
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

  const [image, setImage] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: ".5em",
                width: "100%",
              }}
            >
              {imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  style={{
                    width: "120px",
                    height: "120px",
                    marginRight: ".5em",
                  }}
                ></img>
              ) : (
                <div
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "120px",
                    height: "120px",
                    marginRight: ".5em",
                  }}
                >
                  <FiImage size={25} />
                </div>
              )}
              <label
                htmlFor="file"
                style={{
                  border: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: ".2em",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <InputHidden
                  style={{ width: "100%", heigth: "100%" }}
                  type="file"
                  name="file"
                  id="file"
                  accept="image/x-png,image/jpeg,image/jpg"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                    let reader = new FileReader();
                    reader.onloadend = () => {
                      setImagePreviewUrl(reader.result);
                    };
                    reader.readAsDataURL(event.target.files[0]);
                  }}
                ></InputHidden>

                <span
                  style={{
                    border: "1px solid rgb(196, 196, 196)",
                    borderRadius: "5px",
                    width: "100%",
                    padding: ".5em 1em",
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    aligItems: "center",
                  }}
                >
                  Dükkan Resmi Yükle{" "}
                  <FiUpload
                    size={15}
                    style={{ marginLeft: ".5em", color: "#0277bd" }}
                  />
                </span>
              </label>
            </div>

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
            <TextField
              id="standard-select-currency"
              select
              label="İlçe"
              fullWidth
              margin="dense"
              variant="outlined"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            >
              {districts.map((option) => (
                <MenuItem key={option.title} value={option.title}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>

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
