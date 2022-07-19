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
        },
        error:{
            main:"#FF7878"
        },
        success:{
            main:"#90C8AC"
        },
        grey:{
            main:'#DBDBDB'
        },
        whitegrey: {
            main: '#F1EFEF'
        }

    },
    typography:{
        h3:{
            fontSize:20,
            fontWeight:"bold",
            fontFamily: '"Baloo Bhaijaan", cursive',
        },
        h6:{
            fontSize:15,
            fontFamily: "Baloo Bhaijaan",
        },
        subtitle1: {
            fontSize:20,
            fontFamily:'Baloo Chettan'
        }
    }
    
})
