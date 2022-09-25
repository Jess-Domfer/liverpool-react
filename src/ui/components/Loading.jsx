import { CircularProgress, Grid } from "@mui/material";
import React from "react";

export const Loading = () => {
  return (
    <Grid container direction="row" justifyContent="center">
      <CircularProgress color="warning" />
    </Grid>
  );
};
