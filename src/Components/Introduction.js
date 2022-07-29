import { CircularProgress,Stack,Container, Typography,Grid, Button, Box, ButtonGroup } from "@mui/material";
import { useState,useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import Shop from "../Pages/Shop";
import ProductCard from "./ProductCard";
import axios from 'axios'
import { config } from "../utils/Constants";
import { Link } from "react-router-dom";

const Introduction = () => {
  const [cardRes,setCardRes] = useState([])
  const [loading,setLoading] = useState(true)
  const url = config.url.STRAPI_URL
  useEffect(() => {
    axios.get(`${url}/api/products?populate=*&pagination[pageSize]=5`)
    .then(res => {
        setLoading(false)
        setCardRes(res.data.data)
    })     
    .catch(err => {
        console.log(err)
        setLoading(true)
    })
    
},[])
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
        <Box sx={{marginBottom:'50px'}}>
        <Stack direction='row'>
        <Typography variant='h1' sx={{marginTop:'20px',marginBottom:'10px'}}>Make Your Home Better</Typography>
        <Link style={{textDecoration:'none'}} to='/shop'>
          <Typography variant='subtitle1' sx={{marginLeft:'20px',textDecoration:'none',marginTop:'20px'}}>Lihat Lebih Banyak</Typography>
        </Link>
        </Stack>

        <Grid container 
                    rowSpacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between" sx={{display:'flex'}}
                    columnGap={2}>
                    
                    { loading ? <CircularProgress color="inherit">Loading</CircularProgress> : null}
            {
                cardRes.map((products) => {
                    return  (
                        <ProductCard
                        productName={products.attributes.productName}
                        price={products.attributes.price}
                        location={products.attributes.location} key={products.id}/>
                    )
                })
            }
          </Grid>
        </Box>
      </Container>
    </>
   );
}
 
export default Introduction;