import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../config/Auth";
import { useFormik } from 'formik';
import axios from 'axios'
import { Container,Button, Grid,Box, TextField, Alert } from '@mui/material'
import setCookie from "../config/setCookie";
const Login = () => {
    const [user] = useState(true)
    const navigate = useNavigate()
    const auth = useAuth()
    const [invalidpassword, setInvalidPassword] = useState(false)

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: async values => {
        await axios.post(
          "http://localhost:1337/api/auth/local",
          {
            identifier : values.email,
            password:values.password   
          }
        )
        .then(req => {
          auth.login(req.data.user.username)
          setCookie('jwt',req.data.jwt)
          setCookie('email',req.data.user.email)
          window.localStorage.setItem("isLoggedIn",JSON.stringify(user))
          window.location.reload()
          navigate("/")
        })
        .catch(err => {
          console.log(err)
          setInvalidPassword(true)
        })
        
             
      },
    });
    

    return ( 
        <Container>
          <Grid container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{margin:"auto",backgroundColor:'#898AA6',height:'auto',width:'350px',
                marginTop:"40px",marginBottom:"100px",padding:'50px',borderRadius:'20px'}}>

               <form onSubmit={formik.handleSubmit}>
                <Box sx={{marginBottom:"30px",marginTop:'20px'}}>
                  <TextField htmlFor='email'  color='error' label="Email" variant="outlined" 
                    id='email'
                    type='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                  
                  
                </Box>
                  <Box sx={{marginBottom:"30px",marginTop:'20px'}}>
                  <TextField htmlFor='password'  color='error' label="Password" variant="outlined" 
                    id='password'
                    type='password'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                  </Box>
                  <Button variant="contained" type="submit" color='primary'>Submit</Button>
                  {invalidpassword && (
                    <Alert sx={{marginTop:'5px'}} severity="error">Wrong Password Or Email</Alert>
                  )}
          </form>
          </Grid>
        </Container>
     );
}
 
export default Login;