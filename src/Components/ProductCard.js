import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography,Grid} from  "@mui/material";
import b1 from '../assets/b1.jpg'
import { Link, Navigate } from 'react-router-dom';
const ProductCard = (props) => {
  
  return (
    <Grid sx={{marginTop:'40px'}}>
        <Card sx={{width:200,backgroundColor:'white'}}>
          <CardMedia height="140" component='img' image={props.image}  sx={{objectFit:'contain'}}/>
            <CardContent>
              <Typography variant="subtitle1">{props.id}</Typography>
              <Typography variant="subtitle1">{props.productName}</Typography>
                <Typography variant="subtitle1">{props.price}</Typography>
                  <Typography variant="subtitle1">{props.location}</Typography>
                    </CardContent>
                  <CardActions sx={{display:'flex',justifyContent:'center'}}>
                    <Link to={`products/${props.linkLoc}`} state={props}>
                      <Button  variant='contained' color="primary" >Check Detail</Button>
                    </Link>
                  </CardActions>
          </Card>
    </Grid>
  )
}

export default ProductCard
