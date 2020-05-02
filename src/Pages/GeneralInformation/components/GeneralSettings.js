import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
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
}));

export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
`;

export const GeneralSettings = () => {
  const classes = useStyles();
  return (
    <ContainerGeneral style={{}}>
      <form className={classes.root} noValidate autoComplete="off" style={{}}>
        <TextField
          id="outlined-full-width"
          label="İşletme adı"
          style={{ margin: 8 }}
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
          style={{ margin: 8 }}
          placeholder="Placeholder"
          // helperText="Full width!"
          fullWidth
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="E posta adresi"
          style={{ margin: 8 }}
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
          style={{ margin: 8 }}
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
          style={{ width: "100%", margin: "8px" }}
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
      </form>
    </ContainerGeneral>
  );
};
