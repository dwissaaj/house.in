import { Typography } from '@mui/material'
import { Container} from '@mui/system'
import { useFormik} from 'formik'
import React, {useState} from 'react'

function Register() {
  const [success, setSuccess] = useState(false);
  const [registerPass,setRegisterPass] = useState(false);
  const [registerUser,setRegisterUser] = useState(false);
  const [registerEmail,setRegisterEmail] = useState(false);
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    
    onSubmit: async values  => {
      formik.setSubmitting(true)
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
        formik.resetForm(true);
        setSuccess(true);      
      }
      else if (res.error.message === 'Email or Username are already taken') {
        setRegisterEmail(true)
      } else if (res.error.message === 'password must be at least 6 characters'){
        setRegisterPass(true)
      }
      else if (res.error.message === 'username must be at least 3 characters'){
        setRegisterUser(true)
      }
      
    },
    
  })
  console.log(formik)
  return (
    <>
        <Container>

                <form onSubmit={formik.handleSubmit}>
                  {success && (
                  <div>
                    <Typography>Registered</Typography>
                  </div>
                  )}
                  {registerPass && (
                  <Typography>Password have minimum 6 character</Typography>
                  )}
                  {registerEmail && (
                  <Typography>Username or Email Have Been Taken</Typography>
                  )}
                  {registerUser && (
                  <Typography>Minimum 3 Character For Username</Typography>
                  )}
  
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
