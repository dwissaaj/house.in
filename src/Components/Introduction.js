import { Container, Typography,Grid, Button, Box, ButtonGroup } from "@mui/material";
import axios from "axios";
import { useState,useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
const Introduction = () => {

  return ( 
    <>
      <Container sx={{marginTop:'50px', display: { xs: 'none', sm: 'none', md: 'none',lg :'block', xl: 'block' } }}>
        <Grid container
              >
              <Grid item xs={6} sx={{maxHeight:'100%',backgroundColor:'primary.main'}}>
                <Box sx={{height:'400px',backgroundColor:'primary.main',display:'flex',flexDirection: 'column',
                    alignContent: 'center',justifyContent: 'space-evenly',alignItems: 'center'}}>
                    <Box sx={{backgroundColor:'whitegrey.main',width:"400px",height:"auto",padding:'10px',borderRadius:'20px'}}>
                        <Typography variant='h3'>Who We are</Typography>
                        <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                    <Box sx={{backgroundColor:'whitegrey.main',width:"400px",height:"auto",padding:'10px',borderRadius:'20px'}}>
                        <Typography variant='h3'>Our Mission</Typography>
                        <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    </Box>
                </Box>

              </Grid>
              <Grid item xs={6} > 
                <Box sx={{maxHeight:'400px',backgroundColor:'primary.main'}}>
                <Swiper
                        centeredSlides={true}
                        autoplay={{
                          delay: 50000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay ]}

                      >
                        <SwiperSlide >
                          <img style={{maxHeight:'100%',maxWidth:'100%'}} src={b1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                          <img style={{maxHeight:'100%',maxWidth:'100%'}} src={b2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide >
                          <img style={{maxHeight:'100%',maxWidth:'100%'}} src={b3} alt="" />
                        </SwiperSlide>
                      </Swiper>

                </Box>
              </Grid>
        </Grid>
      </Container>
    </>
   );
}
 
export default Introduction;