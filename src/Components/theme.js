import { createTheme, styled, Typography } from "@mui/material";


export const theme = createTheme({
    palette:{
        primary:{
            main:"#C9BBCF",
            light:"#CAACD8"
        },
        secondary:{
            main:"#898AA6",
            light:"#7173A8"
        }
    },
    typography:{
        h3:{
            fontSize:20,
            fontWeight:"bold",
            fontFamily: '"Baloo Bhaijaan", cursive',
        }
    }
    
})
