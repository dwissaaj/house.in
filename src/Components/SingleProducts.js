import { Container, Grid, ImageListItem, Typography,Box } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'

const SingleProducts = () => {
  const location = useLocation()
  const state = location.state
  console.log(state)
  return (
    <Container>
        <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
          <Grid item xs={6}>
            <Typography>{state.productName}</Typography>
            <Typography>{state.price}</Typography>
          </Grid>
          <Grid item xs={6}>
            <img style={{width:'100px'}} src={state.image} alt="" />
          </Grid>
        </Grid>
    </Container>
  )
}

export default SingleProducts
//<h2>{state.productName}</h2>