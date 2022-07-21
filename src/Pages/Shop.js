import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import b1 from '../assets/b1.jpg'

const Shop = () => {
    const [cardRes,setCardRes] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    useEffect(() => {
        axios.get('http://localhost:1337/api/products/')
        .then(res => {
            setLoading(false)
            setCardRes(res.data.data)
            console.log(Array.isArray(cardRes))
        })     
        .catch(err => {
            console.log(err)
            setError('Failed')
        })
        
    },[]) //CEK ERROR DISINI
    console.log(cardRes);
    return ( 
        <Container sx={{marginTop:'50px'}}>
            <Box sx={{marginLeft:'50px'}}>
                <Typography variant="h1">Make Your Home Better</Typography>
            </Box>

            <Grid sx={{marginTop:'40px'}}>
                <Card sx={{maxWidth:200,backgroundColor:'grey.main',paddingBottom:'10px'}}>
                <CardMedia component='img' image={b1} sx={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                <CardContent>
                    <Typography variant="subtitle1">Lorem</Typography>
                    <Typography variant="subtitle1">Rp.20000</Typography>
                    <Typography variant="subtitle1">Jakarta Timur</Typography>
                </CardContent>
                <CardActions sx={{display:'flex',justifyContent:'center'}}>
                    <Button  variant='contained' color="primary" disabled>Add To Cart</Button>
                </CardActions>
                </Card>
            </Grid>
            <Grid>
            </Grid>

            <p>{JSON.stringify(cardRes)}</p>
            {
                cardRes.map((products) => {
                    return <li>{products.attributes.price}</li>
                })
            }
        </Container>
     );
}
 
export default Shop;