import React from "react";
import styled from "styled-components";
import { Grid, Button, Typography } from "@material-ui/core";

const TopPersonnel = styled.div`
  width: 100%;
  paddign: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Personnel = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="flex-start"
      alignItems="flex-start"
      style={{}}
    >
      <TopPersonnel>
        <Typography variant="h4" gutterBottom>
          Çalışanlar{" "}
        </Typography>
        <Button primary> ekleme</Button>
      </TopPersonnel>
    </Grid>
  );
};
export default Personnel;
