import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Health = () => {
  return (
    <div>
      <Typography>
        this is Health page
      </Typography>

      <Link to={'/'}>
      back to home
      </Link>
    </div>
  )
}

export default Health