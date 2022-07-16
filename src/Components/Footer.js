import { Grid,BottomNavigation, Stack, Typography,Container, BottomNavigationAction, AppBar, Toolbar } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <AppBar position="static" sx={{bottom:0,position:'fixed'}}>
      <Toolbar>
      <Container>
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
      </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
