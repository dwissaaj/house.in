import { Button, Typography, Grid,Box, TextField, Alert } from '@mui/material'
import { Container} from '@mui/system'
import { useFormik} from 'formik'
import React, {useEffect, useState} from 'react'
import { Cookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import GetCookie from '../config/getCookie'
import setCookie from '../config/setCookie'
const initialValues = {
  username:'',
  email:'',
  password:''
}
  
const validate = values => {
  let errors = {}

  if(!values.username) {
    errors.username = 'Required'
  }
  if(!values.email) {
    errors.email = 'Required'
  }
  if(!values.password) {
    errors.password = 'Required'
  }
  return errors
}
function Register() {
  const [success, setSuccess] = useState(false);
  const [registerPass,setRegisterPass] = useState(false);
  const [registerUser,setRegisterUser] = useState(false);
  const [registerEmail,setRegisterEmail] = useState(false);
  const [registerAllError,setRegisterAllError] = useState(false);
  const navigate = useNavigate()
  const testcookie = GetCookie()

  const formik = useFormik({
    initialValues,
    onSubmit: async values  => {
      const req = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
        
      );
      const res = await req.json();
      if(res.jwt){
        setCookie('jwt',res.jwt)
        setSuccess(true);
      }
      else if (res.error.message === 'Email or Username are already taken') {
        setRegisterEmail(true)
      } else if (res.error.message === 'password must be at least 6 characters'){
        setRegisterPass(true)
      }
      else if (res.error.message === 'username must be at least 3 characters'){
        setRegisterUser(true)
      } else if(res.error.message === '2 errors occurred') {
        setRegisterAllError(true)
      }
    },
    validate
  })
  
  return (
    <>
        <Container>
          <Grid 
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{margin:"auto",backgroundColor:'#898AA6',height:'auto',width:'350px',
                marginTop:"40px",marginBottom:"100px",padding:'50px',borderRadius:'20px'}}>
                <form onSubmit={formik.handleSubmit}>       
                {success && (
                  <div>
                    <Alert severity='success'>Registered</Alert>
                  </div>
                  )}
                  <Box sx={{marginBottom:"30px",marginTop:'20px'}}>
                    <TextField htmlFor='username' id="username" color='error' label="Username" variant="outlined" 
                    type='text'
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}/>
                    {formik.errors.username ? <Typography sx={{color:'pink',marginTop:'10px',marginBottom:'10px'}}>{formik.errors.email}</Typography> : null}
                  </Box>

                  <Box sx={{marginBottom:"30px",marginTop:'20px'}}>
                  <TextField htmlFor='email'  color='error' label="Email" variant="outlined" 
                    id='email'
                    type='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                  
                  {formik.errors.email ? <Typography sx={{color:'pink',marginTop:'10px',marginBottom:'10px'}}>{formik.errors.email}</Typography> : null}
                  </Box>
                  <Box sx={{marginBottom:"30px",marginTop:'20px'}}>
                  <TextField htmlFor='password'  color='error' label="Password" variant="outlined" 
                    id='password'
                    type='password'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password} />
                    
                  {formik.errors.password ? <Typography sx={{color:'pink',marginTop:'10px',marginBottom:'10px'}}>{formik.errors.password}</Typography> : null}
                  </Box>
                  <Box>
                  <Button variant="contained" type="submit" color='primary'>Submit</Button>
                  {success && (
                  <div>
                    <Link style={{textDecoration:'none'}} to="/login">
                      <Button sx={{marginTop:'10px',marginBottom:'10px'}} variant="contained" color='primary'>
                        <Typography>
                        Login
                        </Typography>
                      </Button>
                    </Link>
                  </div>
                  )}
                  </Box>
                  <Box>
                  {registerUser && (
                    <Alert sx={{marginTop:'5px'}} severity='error'>Minimum 3 Character For Username</Alert>
                    )}
                    {registerEmail && (
                      <Alert sx={{marginTop:'5px'}} severity='error'>Email Have Been Registered</Alert>
                  )}
                    {registerPass && (
                    <Alert sx={{marginTop:'5px'}} severity='error'>Password Must Contain At Least 6 Character</Alert>
                  )}           
                  {registerAllError && (
                    <Alert sx={{marginTop:'5px'}} severity='error'>Password Must 6 Character and Username Must At Least 3 Character</Alert>
                  )}      
                  </Box>
          </form>

              
          </Grid>
                
        </Container>
    </>
  )
}

export default Register
