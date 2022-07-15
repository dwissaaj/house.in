import { styled,Grid, Button, TextField, Typography } from '@mui/material'
import { Container,Box, palette, display } from '@mui/system'
import { useFormik } from 'formik'
import React, {useState} from 'react'
import config from '../Constants'
function Register() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    
    onSubmit: values => {
      console.log(values)
    }
  })
  console.log(formik)
  return (
    <>
        <Container>

                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="username">Username</label>
                  <input 
                  id='username'
                  type='text'
                  name='username'
                  onChange={formik.handleChange}
                  value={formik.values.username}/>
                  <label htmlFor="email">email</label>
                  <input 
                  id='email'
                  type='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}/>
                  <label htmlFor="password">password</label>
                  <input 
                  id='password'
                  type='password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}/>
                  <button type="submit">Submit</button>
                </form>

              
        </Container>
    </>
  )
}

export default Register
