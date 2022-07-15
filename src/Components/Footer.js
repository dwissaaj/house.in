import { Grid,BottomNavigation, Stack, Typography,Container, BottomNavigationAction } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <BottomNavigation  sx={{paddingTop:"20px",paddingBottom:'50px',backgroundColor:'#C9BBCF',width:'100%',position:'absolute',bottom:0}}>
          <Grid>
          <Typography variant="h6" sx={{marginBottom:'10px',display:'flex',justifyContent:"center"}}>
            Reach Us
          </Typography>
          <Stack direction='row' spacing={1}>
          <BottomNavigationAction  icon={<WhatsAppIcon />} />
          <BottomNavigationAction  icon={<LinkedInIcon />} />
          <BottomNavigationAction  icon={<InstagramIcon />} />
          </Stack>
          <Typography variant="h6" sx={{marginTop:'10px',display:'flex',justifyContent:"center"}}>
            Copyright House.in 2022
          </Typography>
          </Grid>          
    </BottomNavigation>
  )
}

export default Footer
