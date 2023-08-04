import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Culture = () => {
  return (
    <div>
      <Typography>
        this is Culture page
      </Typography>

      <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default Culture