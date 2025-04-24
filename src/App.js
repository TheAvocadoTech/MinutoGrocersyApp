import React from 'react'

import Navbar from './Component/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Home/Footer'
import MainLayout from './Component/Home/MainLayout'
import UserProfile from './Component/Home/Profile'
import RiceOilPage from './Component/Home/CategoryDetails'
import ProductDetailPage from './Component/Home/ProductDetail'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainLayout/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/categoryDetail" element={<RiceOilPage/>} />

        <Route path="/productdetail" element={<ProductDetailPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
