import { Button,TextField,Grid,Box, Typography, Alert, Container } from "@mui/material";
import { useFormik } from 'formik';
import getCookie from "../../config/getCookie";
import { config } from "../../config/Constants";
import axios from 'axios'
import {Link, Outlet} from 'react-router-dom'
import { useState, useEffect  } from "react";
import { type } from "@testing-library/user-event/dist/type";

const Information = () => {
  const cookie = getCookie('jwt')
  const emailCookie = getCookie('email')
  const url = config.url.STRAPI_URL
  const [email,setEmail] = useState('')
  const [id,setId] = useState('')
  const [profileId,setProfileId] = useState('')
  const [datainfo,setDataInfo] = useState([])
  const [addInfo,setAddInfo] = useState(false)
  const [showAddress,setShowAddress] = useState(true)
  

  useEffect(() => {
    axios.get(`${url}/api/users?populate=*&filters[email][$eq]=${emailCookie}`,
    {
      headers :{
        Authorization : `Bearer ${cookie}`
      }
    }
    )
    .then(req => {
      setEmail(req.data[0].email)
      setId(req.data[0].id)
      setDataInfo(req.data)
      setProfileId(req.data[0].profile.id)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  const handleAdd = () => {
    setAddInfo(true)
    setShowAddress(true)
  }
  const deleteAddress = () => {
    axios.delete(`${url}/api/profiles/${profileId}`, {
      headers : {
        Authorization : `Bearer ${cookie}`
      }
    }).then (
      window.location.reload()
    ).catch (err => {
      console.log(err)
    })
  }
  return ( 
  <>
    {
      showAddress ? 
    
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{marginTop:'30px'}}>
    <Link to='addAddress'>
    <Button variant="outlined" color="info" onClick={handleAdd}>Add Address</Button>
    </Link>
    <Box>
    {
      datainfo?.map((products) => {
        return (
          <Box key={products.id} sx={{marginTop:'30px',border:1,padding:'20px',borderRadius: 1}}>
            <Typography variant='h3'>Email Penerima</Typography>
            <Typography variant='subtitle1'>{products.email}</Typography>
            <Typography variant='h3'>Nama Penerima</Typography>
            <Typography variant='subtitle1'>{products.profile.name}</Typography>
            <Typography variant='h3'>Alamat</Typography>
            <Typography variant='subtitle1'>{products.profile.address}</Typography>
            <Typography variant='h3'>No Hp</Typography>
            <Typography variant='subtitle1'>{products.profile.phone}</Typography>
            <Button onClick={deleteAddress} variant='contained' color='error'>Delete</Button>
          </Box>

        )
      })
    }
    </Box>
  </Grid>
  : null}
    
      {/* {
        data.data.map((datas) => {
          return (
            <h2>{datas.id}</h2>
          )
        })
      } */}
     <Outlet/>
  </>
   );
}
 
export default Information;