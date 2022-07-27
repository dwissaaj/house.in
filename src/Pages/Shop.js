import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import b1 from '../assets/b1.jpg'
import { useFormik } from 'formik';
const initialState = {
    stateId : 0
}
const reducer = (state,action) => {
    switch(action.type) {
        case 'show10' :
            return { stateId : (state.stateId - state.stateId) + 20}
        case 'show20' :
            return { stateId : (state.stateId - state.stateId) + 10}
        default:
            return initialState   
        }   
}

const Shop = () => {
    const [cardRes,setCardRes] = useState([])
    const [loading,setLoading] = useState(true)
    const [sortState,setSortState] = useState('asc')
    const [filterName,setFilterName] = useState('')
    const [count,dispatch] = useReducer(reducer,initialState)
    const formik = useFormik({
        initialValues: {
          search: '',
        },
        onSubmit: values => {
          setFilterName(Object.values(values))
        },
      });
    useEffect(() => {
        axios.get(`http://localhost:1337/api/products?populate=*&filters[id][$gt]=${count.stateId}&sort[0]=price%3A${sortState}&filters[productName][$containsi]=${filterName}`)
        .then(res => {
            setLoading(false)
            setCardRes(res.data.data)
            console.log(Array.isArray(cardRes))
        })     
        .catch(err => {
            console.log(err)
            setLoading(true)
        })
        
    },[count,sortState,filterName])
    console.log(cardRes);

    
    return ( 
        <Container sx={{marginTop:'50px'}}>
            
            <Box sx={{marginLeft:'50px'}}>
                <Typography variant="h1" sx={{marginBottom:'20px'}}>Make Your Home Better</Typography>
                <Typography variant="subtitle1" sx={{marginBottom:'20px'}}>Filter</Typography>
                <Stack sx={{marginBottom:'10px'}} direction='row' spacing={2} >
                    <Button variant='outlined' color='info' onClick={() => dispatch({type: 'show10'})}>10</Button>
                    <Button variant='outlined' color='info' onClick={() => dispatch({type: 'show20'})}>20</Button>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Button variant='outlined' color='info' onClick={() => setSortState('asc')}>Low To High</Button>
                    <Button variant='outlined' color='info' onClick={() => setSortState('desc')}>High To Low</Button>
                </Stack>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{marginTop:'10px',marginBottom:'30px'}}>
                    <TextField
                        id="search"
                        name="search"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.search}
                        sx={{width:'300px',height:'5px'}}
                    />
                    <Button sx={{marginLeft:'20px'}} variant="contained" type="submit" color='primary'>Search</Button>
                    </Box>
                </form>
            </Box>
           
            <Grid container 
                    rowSpacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="start" sx={{display:'flex'}}
                    columnGap={2}>
                    
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
            </Grid>
            
        </Container>
     );
}
 
export default Shop;