import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderTop from '../components/HeaderTop'

const Layoutpage = () => {
  return (
    <div>
      <HeaderTop />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layoutpage