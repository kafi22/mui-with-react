import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Business = () => {
  return (
    <div>
      <Typography>
        this is Business page
      </Typography>

      <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default Business