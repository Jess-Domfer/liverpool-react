import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../../ui/components";
import { SliderBar } from "../components";

const drawerWidth = 240;

export const ProductosLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar />
      {/* <SliderBar drawerWidth={drawerWidth}/> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
