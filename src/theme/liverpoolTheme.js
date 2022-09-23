import { createTheme } from "@mui/material";

import {red} from "@mui/material/colors";

export const liverpoolTheme=createTheme({
    palette:{
        primary: {
            main: '#e10098'
        },
        secondary: {
            main: '#543884'
        },
        error:{
            main: red.A400
        }
    }
})