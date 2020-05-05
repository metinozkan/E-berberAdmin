import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
} from "@material-ui/core";

export const InvoiceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100%,
  background: white;
  border-radius: 5px;
`;
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
export const InvoiceContainer = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      style={{ width: "100%", margin: "2em 0px" }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.heading}>Fatura Bilgileri</Typography>
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
  );
};
