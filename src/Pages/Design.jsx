import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Design = () => {
  return (
    <div>
      <Typography>
        this is Design Page
      </Typography>

      <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default Design