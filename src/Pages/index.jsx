import React from 'react'
import { Route, Routes } from 'react-router-dom'

// components 
import Header from '../components/Header'
import Footer from '../components/Footer'
// pages 
import Home from './Home/index'
import Contact from './Contact/index'
import About from './About/index'

export default function index() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
    </Routes>
    <Footer />
    </>
  )
}
