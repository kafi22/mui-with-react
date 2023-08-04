import { Typography } from '@mui/material';
import React from 'react'
import { Link, } from 'react-router-dom'

const Errorpage = () => {

  return (
    <div>
      <Typography>
        page could not found
      </Typography>
      <Link to={'/'}>back to home</Link>
    </div>
  )
}

export default Errorpage