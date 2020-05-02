import React from "react";
import styled from "styled-components";
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ColumnCenterContainer } from "../../../Components/StyledComponents";
import { makeStyles } from "@material-ui/core/styles";
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
export const InvoiceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100%,
  background: white;
  border-radius: 5px;
`;
const ConteinerInvoiceRow = ({ title }) => {
  return (
    <InvoiceRow>
      <span style={{ width: "50%" }}>{title}</span>
      <TextField
        id="outlined-full-width"
        // label="İşletme adı"
        style={{ width: "50%" }}
        placeholder="Giriniz"
        // helperText="Full width!"
        fullWidth
        margin="dense"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      ></TextField>
    </InvoiceRow>
  );
};

export const GeneralSettings = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
              options={[
                { title: "Serdivan" },
                { title: "Geyve" },
                { title: "Adapazarı" },
              ]}
              getOptionLabel={(option) => option.title}
              style={{ width: "100%" }}
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
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{ width: "100%", margin: "2em 0px" }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Fatura Bilgileri
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Fatura bilgilerini girin
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{ width: "100%" }}>
                  <ConteinerInvoiceRow title={"Vergi Adı"} />
                  <ConteinerInvoiceRow title={"Vergi No"} />
                  <ConteinerInvoiceRow title={"Vergi Dairesi"} />
                  <ConteinerInvoiceRow title={"Vergi Adresi"} />
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
            >
              Kaydet
            </Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ContainerGeneral>
  );
};
