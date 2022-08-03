import { Box, Button, CircularProgress, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useFormik } from 'formik';
import ProductCard from "../Components/ProductCard";
import { config } from "../utils/Constants";
import { useSearchParams , useNavigate} from "react-router-dom";
const initialState = {
    stateId : 10
}
const reducer = (state,action) => {
    switch(action.type) {
        case 'show15' :
            return { stateId : (state.stateId - state.stateId) + 15}
        case 'show25' :
            return { stateId : (state.stateId - state.stateId) + 25}
        case 'reset': 
            return { initialState }
        default:
            return initialState   
        }   
}

const Shop = () => {
    const [cardRes,setCardRes] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const [setSearchParams] = useSearchParams()
    const [sortState,setSortState] = useState('asc')
    const [filterName,setFilterName] = useState('')
    const url = config.url.STRAPI_URL
    const [count,dispatch] = useReducer(reducer,initialState)
    const formik = useFormik({
        initialValues: {
          search: '',
        },
        onSubmit: values => {
          setFilterName(Object.values(values))
          setSearchParams({"search":Object.values(values)})
        },
      });
    useEffect(() => {
        axios.get(`${url}/api/products?populate=*&pagination[pageSize]=${count.stateId}&sort[0]=price%3A${sortState}&filters[productName][$containsi]=${filterName}`)
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

    const get15 = () => {
        dispatch({type: 'show15'})
        setSearchParams({filter:'15'})
    
    }
    const get25 = () => {
        dispatch({type: 'show25'})
        setSearchParams({filter:'15'})
    
    }
    const lowToHigh = () => {
        setSortState('asc')
        setSearchParams({sorting:'lowest'})
    
    }
    const highToLow = () => {
        setSortState('desc')
        setSearchParams({sorting:'highest'})
    
    }
    const resetSearch = () => {
        navigate('/shop')
        window.location.reload()
    }
    
    return ( 
        <Container sx={{marginTop:'50px'}}>
            <Box sx={{marginLeft:'50px'}}>
                <Typography variant="h1" sx={{marginBottom:'20px'}}>Make Your Home Better</Typography>
                <Typography variant="subtitle1" sx={{marginBottom:'20px'}}>Filter</Typography>
                <Stack sx={{marginBottom:'10px'}} direction='row' spacing={2} >
                    <Button variant='outlined' color='info' onClick={get15}>15</Button>
                    <Button variant='outlined' color='info' onClick={get25}>25</Button>
                </Stack>
                <Stack direction='row' spacing={2} >
                    <Button variant='outlined' color='info' onClick={lowToHigh}>Low To High</Button>
                    <Button variant='outlined' color='info' onClick={highToLow}>High To Low</Button>
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
                    <Button sx={{marginLeft:'20px'}} variant="contained" onClick={resetSearch} color='primary'>Reset</Button>
                    </Box>
                </form>
            </Box>
           
            <Grid container 
                    rowSpacing={2}
                    alignItems="center"
                    justifyContent="start" sx={{display:'flex'}}
                    columnGap={2}>
                    
                    { loading ? <CircularProgress color="inherit">Loading</CircularProgress> : null}
            {
                cardRes.map((products) => {
                    return  (
                
                       <>
                        <ProductCard
                        image={products.attributes.imageUrl}
                        linkLoc={products.id}
                        productName={products.attributes.productName}
                        price={products.attributes.price}
                        location={products.attributes.location} key={products.id} />
                        </>
                    
                    )
                })
            }
            </Grid>
            
        </Container>
     );
}
 
export default Shop;