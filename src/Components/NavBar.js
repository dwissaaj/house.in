import { styled,Button,Typography,AppBar,Stack,Toolbar  } from "@mui/material";
import { Box, Container } from "@mui/system";
import { NavLink} from 'react-router-dom'
import housein from '../assets/housein.png'
import { useAuth } from "../config/Auth";

const Navbar = () => {
    const BlueButton = styled(Button)(({theme}) => ({
        backgroundColor:theme.palette.secondary.main,
        '&:hover': {
            background: theme.palette.secondary.main,
        }
    }))
    const navLinkStyles = ({isActive}) =>{
        return {
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? 'black' : 'black'
        }
    }
    const NavLinkLogin = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'none',
            color: isActive ? 'black' : 'black',
            marginLeft:'30px'
        }
    }

    const auth = useAuth()
    return ( 
        <>
        <Box>
            <AppBar position="static"> 
            <Toolbar>
                <Container>
                    <Stack direction='row'>
                    <Box sx={{display:{xs:'none',sm:'block'}}}>
                    <Stack direction='row' spacing={2} >
                        <Box>
                            <img width='30px' height='30px' src={housein}/>
                        </Box>

                        <NavLink style={navLinkStyles} to='/'>
                            <Typography variant="h3">About Us</Typography>
                        </NavLink>      
                        <NavLink style={navLinkStyles} to='hire-me'>
                            <Typography variant="h3">Hire Me</Typography>
                        </NavLink>
                        <NavLink style={navLinkStyles} to='shop'>
                            <Typography variant="h3">Shop</Typography>
                        </NavLink>
                        <NavLink style={navLinkStyles} to='report'>
                            <Typography variant="h3">Report</Typography>
                        </NavLink>
                        <NavLink style={navLinkStyles} to='profile'>
                            <Typography variant="h3">Profile</Typography>
                        </NavLink>
                    </Stack>
                    </Box>
                    </Stack>
                </Container>
                <Box sx={{width:'500px', display: { xs: 'block' , sm: 'block' } }}>
                        {!auth.user && (
                            <NavLink style={NavLinkLogin} to='/login'>
                                <BlueButton >Login</BlueButton>
                            </NavLink> 
                        )}
                        <NavLink style={NavLinkLogin} to='/register'>
                            <BlueButton >Register</BlueButton>
                        </NavLink> 
                </Box>
                </Toolbar>
            </AppBar>
            </Box>
        </>
     );
}
 
export default Navbar;