import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../config/Auth";

const Login = () => {
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogin = () => {
        auth.login(user)
        navigate('/',{replace :true})
    }




    return ( 
    <div>
        <label>
            Email:{''}
            <input type='email' onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
        password:{''}
            <input type='password' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>    
     );
}
 
export default Login;