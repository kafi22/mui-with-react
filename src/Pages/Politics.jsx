import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Politics = () => {
  return (
    <div>
      <Typography>
        this is Politics page
      </Typography>
      <Link to={'/'}>
      back to home
      </Link>
    </div>
  )
}

export default Politics