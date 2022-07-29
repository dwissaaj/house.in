import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography,Grid} from  "@mui/material";
import b1 from '../assets/b1.jpg'
const ProductCard = (props) => {
  return (
    <Grid direction='row' sx={{marginTop:'40px'}}>
        <Card sx={{maxWidth:200,backgroundColor:'grey.main',paddingBottom:'10px'}}>
          <CardMedia component='img' image={b1} sx={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
            <CardContent>
              <Typography variant="subtitle1">{props.productName}</Typography>
                <Typography variant="subtitle1">{props.price}</Typography>
                  <Typography variant="subtitle1">{props.location}</Typography>
                    </CardContent>
                  <CardActions sx={{display:'flex',justifyContent:'center'}}>
                    <Button  variant='contained' color="primary" >Check Detail</Button>
                  </CardActions>
          </Card>
    </Grid>
  )
}

export default ProductCard
