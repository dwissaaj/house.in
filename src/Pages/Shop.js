import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import b1 from '../assets/b1.jpg'
const initialState = 0
const reducer = (state,action) => {
    switch(action) {
        case 'show10' :
            return (state - state) + 10
        case 'show20' :
            return (state - state) + 20
        case 'show25' :
            return (state - state) + 25
        default:
            return initialState   
        }   
}

const Shop = () => {
    const [cardRes,setCardRes] = useState([])
    const [loading,setLoading] = useState(true)
    
    const [count,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?populate=*&filters[id][$gt]=${count}`)
        .then(res => {
            setLoading(false)
            setCardRes(res.data.data)
            console.log(Array.isArray(cardRes))
        })     
        .catch(err => {
            console.log(err)
            setLoading(true)
        })
        
    },[count])
    console.log(cardRes);
    return ( 
        <Container sx={{marginTop:'50px'}}>
            
            <Box sx={{marginLeft:'50px'}}>
                <Typography variant="h1" sx={{marginBottom:'20px'}}>Make Your Home Better</Typography>
                <Stack direction='row' spacing={2} >
                    <Button variant='outlined' color='info' onClick={() => dispatch('show10')}>10</Button>
                    <Button variant='outlined' color='info' onClick={() => dispatch('show20')}>20</Button>
                </Stack>
                <div>Count - {count}</div>
            </Box>
           
            <Grid container 
                    rowSpacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between" sx={{display:'flex'}}>

                    { loading ? <CircularProgress color="inherit">Loading</CircularProgress> : null}
            {
                cardRes.map((products) => {
                    return  (
                    
                        <Grid direction='row' sx={{marginTop:'40px'}}>
                        <Card sx={{maxWidth:200,backgroundColor:'grey.main',paddingBottom:'10px'}}>
                        <CardMedia component='img' image={b1} sx={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                        <CardContent>
                            <Typography variant="subtitle1">{products.attributes.productName}</Typography>
                            <Typography variant="subtitle1">{products.attributes.price}</Typography>
                            <Typography variant="subtitle1">{products.attributes.location}</Typography>
                        </CardContent>
                        <CardActions sx={{display:'flex',justifyContent:'center'}}>
                            <Button  variant='contained' color="primary" disabled>Add To Cart</Button>
                        </CardActions>
                        </Card>
                        </Grid>
                    )
                })
            }
            <p>{JSON.stringify(cardRes.length)}</p>
            </Grid>
            
        </Container>
     );
}
 
export default Shop;