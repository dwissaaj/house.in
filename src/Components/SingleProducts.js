import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'

const SingleProducts = () => {
  const location = useLocation()

  const state = location.state
  console.log(state)
  return (
    <Container>
      <Typography sx={{fontSize:'50px'}} variant='h2'>Product Detail</Typography>
        <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center" sx={{marginTop:'20px'}}>
          
          <Grid item xs={6}  >
            <img style={{marginLeft:'10px',width:'300px',height:'300px',objectFit:'contain'}} src={state.image} alt="" />
          </Grid>
          <Grid item xs={6} >
            <Typography sx={{fontSize:'50px'}} variant='h2'>{state.productName}</Typography>
            <Typography sx={{fontSize:'30px'}} variant='h2'>{state.price}</Typography>
          </Grid>
        </Grid>
    </Container>
  )
}

export default SingleProducts
//<h2>{state.productName}</h2>