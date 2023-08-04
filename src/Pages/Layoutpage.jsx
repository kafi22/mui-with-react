import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderTop from '../components/HeaderTop'
import Wrapper from '../Wrappers/Wrapper'

const Layoutpage = () => {
  return (
    <div>
      <HeaderTop />
        <Navbar />
        <Wrapper>
        <Outlet />
        </Wrapper>
        <Footer />
    </div>
  )
}

export default Layoutpage