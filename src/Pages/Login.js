import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../config/Auth";
import { useFormik } from 'formik';
import axios from 'axios'
const Login = ({setCookie}) => {
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: async values => {
        const req = await axios.post(
          "http://localhost:1337/api/auth/local",
          {
            identifier : values.email,
            password:values.password   
          }
        )
        .then(req => {
          auth.login(req.data.user.username)
          setCookie("token",req.data.jwt,{path:"/"})
          navigate("/")
          console.log(req)
        })
        .catch(err => {
          console.log(err)
        })
        
             
      },
    });



    return ( 
    <div>
       <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <button type="submit">Submit</button>
     </form>
    </div>    
     );
}
 
export default Login;