import React from 'react'
import { Link } from 'react-router-dom';

import Sign_up from '../components/Sign_up';

const Signup = () => {
  return (
    <div>
        <Sign_up />
  
        <Link to={'/'}>
        back to home
        </Link>
    </div>
  )
}

export default Signup