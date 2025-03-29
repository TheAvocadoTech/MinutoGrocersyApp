import React from 'react'

import Navbar from './Component/Home/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Home/Footer'

import NotFound from './Component/Home/Home'

import ContactSection from './Component/Home/Contact'
import InternshipApplication from './Component/Home/Internship'
import Gallery from './Component/Home/Gallery'
import BlogPage from './Component/Home/BlogPage'
import Portfolio from './Component/Home/CaseStudio'
import MainPage from './Component/Home/MainPage'
import JobOpenings from './Component/Home/JobPage'
import Services from './Component/Home/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      
     
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
