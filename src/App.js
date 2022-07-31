import './App.css';
import { Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import HireMe from './Pages/HireMe'
import Profile from './Pages/Profile'
import Report from './Pages/Report'
import Shop from './Pages/Shop'
import Navbar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import { AuthProvider } from './config/Auth';
import Require from './config/Require';
import { useCookies } from "react-cookie";
import SingleProducts from './Components/SingleProducts';
import ProductCard from './Components/ProductCard';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  return (
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='hire-me' element={<HireMe/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/products/:id' element={<SingleProducts/>}/>
      <Route path='report' element={<Report/>}/>
      <Route path='profile' element={<Require><Profile/></Require>}/>
      <Route path='login' element={<Login setCookie={setCookie}/>} />
      <Route path='register' element={<Register cookies={setCookie} /> } />
    </Routes>
    </AuthProvider>
  );
}

export default App;
