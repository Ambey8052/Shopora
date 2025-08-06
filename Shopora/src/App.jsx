
import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home.jsx'
import { Route , Routes} from 'react-router-dom'
import { LogIn } from 'lucide-react'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import Cart from './Components/Cart.jsx'
import Men from './Pages/Men.jsx'
import Women from './Pages/Women.jsx'
import Electronics from './Pages/Electronics.jsx'
import Mobiles from './Pages/Mobiles.jsx'
import AllProducts from './Pages/AllProducts.jsx'
import Profile from './Pages/Profile.jsx'
import Accessories from './Pages/Accessories.jsx'
import HomeAppliances from './Pages/HomeAppliances.jsx'

function App() {
  return (
    
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/mens" element={<Men />} />
      <Route path="/womens" element={<Women />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/profile" element={<Profile />} />
     <Route path="/accessories" element={<Accessories />} />
      <Route path="/appliances" element={<HomeAppliances />} />
    </Routes>
    
  )
}

export default App
