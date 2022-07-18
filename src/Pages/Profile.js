import { useNavigate } from "react-router";
import { useAuth } from "../config/Auth";

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()


    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return ( 
        <>
        <div>
            welcome {auth.user}
        </div>
        <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default Profile;