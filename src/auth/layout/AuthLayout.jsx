import {
  Grid,
  Typography,
  MenuItem,
  TextField,
  Button,
  Link,
  Box,
} from "@mui/material";
import { NavBar } from "../../ui/components";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar actions={false} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", padding: 4 }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            width: { sm: 450 },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            {title}
          </Typography>

          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
