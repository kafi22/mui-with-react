import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import Sign_up from '../components/Sign_up';

const Signup = () => {
  return (
    <div>
        <Sign_up />
        <Outlet />

        <Link to={'/'}>
        back to home
        </Link>
    </div>
  )
}

export default Signup