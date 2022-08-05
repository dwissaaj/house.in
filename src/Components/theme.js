import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette:{
        primary:{
            main:"#ce93d8",
            light:"#ee99fc"
        },
        secondary:{
            main:"#ab003c",
            light:"#ff99bb"
        },
        error:{
            main:"#FF7878",
            dark:'#f44336'
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
        h1:{
            fontSize:30,
            fontWeight:"bold",
            fontFamily: '"Baloo Bhaijaan", cursive',
        },
        h2:{
            fontSize:20,
            fontWeight:"bold",
            fontFamily: "Baloo Bhaijaan",
        },
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
