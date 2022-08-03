import { useNavigate } from "react-router";
import { useAuth } from "../../config/Auth";
import React from 'react'
import removeCookie from "../../config/removeCookie";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        window.localStorage.removeItem("isLoggedIn")
        auth.logout()
        removeCookie('jwt')
        navigate('/')
        window.location.reload()
    }
    
    return ( 
        <>
        <div>
            welcome {auth.user}
        </div>
        <button onClick={handleLogout}>Logout</button>
        <Link to='personalInfo'>
            <Button>go</Button>    
        </Link>
        </>
     );
}
 
export default Profile;