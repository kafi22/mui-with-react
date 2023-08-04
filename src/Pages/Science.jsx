import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Science = () => {
  return (
    <div>
      <Typography>
        this is Science
      </Typography>
      <Link to={'/'}>
      back to home
      </Link>
    </div>
  )
}

export default Science