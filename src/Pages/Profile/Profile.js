import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../config/Auth";
import React from 'react'
import removeCookie from "../../config/removeCookie";
import { Link } from "react-router-dom";
import { Button, Container, useTheme,Box } from "@mui/material";

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const theme = useTheme()

    const handleLogout = () => {
        window.localStorage.removeItem("isLoggedIn")
        auth.logout()
        removeCookie('jwt')
        navigate('/')
        window.location.reload()
    }
    
    return ( 
        <>
        <Container>
            <Box  container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="space-evenly" sx={{display:"flex",marginTop:'20px'}}>
                    <Link style={{textDecoration:'none'}} to='personalInfo'>
                        <Button>Profile</Button>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='wishlist'>
                        <Button>Wishlist</Button>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='my-order'>
                        <Button>My Order</Button>
                    </Link>
                    
                </Box>

                <Button onClick={handleLogout} variant="contained" sx={{backgroundColor: theme.palette.error.dark,position:'absolute',bottom:'0',marginTop:'200px'}}>Logout</Button>
        </Container>
        <Outlet/>
        </>
        
     );
}
 
export default Profile;