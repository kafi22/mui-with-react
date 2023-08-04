import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Technology = () => {
  return (
    <div>
      <Typography>
        this is Technology page
      </Typography>

      <Link to={'/'}>
      back to home
      </Link>
    </div>
  )
}

export default Technology