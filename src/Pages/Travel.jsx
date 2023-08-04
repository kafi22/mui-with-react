import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Travel = () => {
  return (
    <div>
      <Typography>
        this is Travel page
      </Typography>

      <Link to={'/'}>back to home</Link>
    </div>
  )
}

export default Travel