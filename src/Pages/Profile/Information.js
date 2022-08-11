import { Button,TextField,Grid,Box, Typography, Alert } from "@mui/material";
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
  const [data,setData] = useState([])
  const [datainfo,setDataInfo] = useState([])
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone : ''
    },
    onSubmit: async values => {
      await axios.post(
        "http://localhost:1337/api/profiles?populate=*", {
          data : { 
            "name" : `${values.name}`,
            "address" : `${values.address}`,
            "phone" : `${values.phone}`,
            "email": `${id}`
            
          }
        },
        {
          headers :{
            Authorization : `Bearer ${cookie}`
          },
        }
      )
      .then(req => {  
        setData(req.data.data)
        console.log(req)
        
      })
      .catch(err => {
        console.log(err)
      })
      }})
  // USE EFFECT TO FETCH DATA
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
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  console.log(data)
  console.log(datainfo)
  return ( 
  <>
    <Box>
      
    <form onSubmit={formik.handleSubmit}>
       <Grid  container
                direction="column"
                alignItems="center"
                justifyContent="space-between">
       <TextField
        sx={{margin:'10px'}}
         id="name"
         name="name"
         type="text"
         placeholder={`${email}`}
         onChange={formik.handleChange}
         disabled={true}
       />
       <TextField
        sx={{margin:'10px'}}
         id="name"
         name="name"
         type="text"
         placeholder='name'
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <TextField
          sx={{margin:'10px'}}
         id="address"
         name="address"
         type="text"
         placeholder='Address'
         onChange={formik.handleChange}
         value={formik.values.address}
       />
       <TextField
        sx={{margin:'10px'}}
         id="phone"
         name="phone"
         type="tel"
         placeholder='Phone'
         onChange={formik.handleChange}
         value={formik.values.phone}
       />

          <Button type="submit" color='grey' variant='contained'>Edit</Button>

       </Grid>

     </form>
    </Box>

    {
        datainfo?.map((products) => {
          return (
            <h2 key={products.id}>{products.username}</h2>
          )
        })
      }
     <Outlet/>
  </>
   );
}
 
export default Information;