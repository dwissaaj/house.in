import './App.css';
import { Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import HireMe from './Pages/HireMe'
import Profile from './Pages/Profile/Profile'
import Report from './Pages/Report'
import Shop from './Pages/Shop'
import Navbar from './Components/NavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AuthProvider } from './config/Auth';
import Require from './config/Require';
import SingleProducts from './Components/SingleProducts';
import Information from './Pages/Profile/Information';
import MyOrder from './Pages/Profile/MyOrder';
import Wishlist from './Pages/Profile/Wishlist';
import Edit from './Pages/Profile/Edit';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='hire-me' element={<HireMe/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/products/:id' element={<SingleProducts/>}/>
      <Route path='products/:id' element={<SingleProducts/>}/>
      <Route path='report' element={<Report/>}/>
      <Route path='profile' element={<Require><Profile/></Require>}>
        <Route path='personalInfo' element={<Require><Information/></Require>}>
          <Route path='edit' element={<Require><Edit/></Require>} />
        </Route>
        <Route path='wishlist' element={<Require><Wishlist/></Require>}/>
        <Route path='my-order' element={<Require><MyOrder/></Require>}/>
      </Route>
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register  /> } />
    </Routes>
    </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
