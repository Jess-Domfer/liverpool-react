import {
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    console.log("onLogout");
    dispatch(startLogout());
  };

  return (
    <AppBar position="fixed" xs={{}}>
      <Toolbar>
        <IconButton color="inherit">
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {/* <Typography variant="h6" noWrap component='div'>Liverpool</Typography> */}
          <Box
            component="img"
            sx={{
              height: 30,
              width: 350,
              maxHeight: { xs: 30, md: 30 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Logo liverpool"
            src="/src/assets/images/liverpool-logo.svg"
          />
          <IconButton color="inherit" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
