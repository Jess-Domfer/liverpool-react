import { Grid } from "@mui/material";
import { Loading } from "./Loading";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Loading />
    </Grid>
  );
};
