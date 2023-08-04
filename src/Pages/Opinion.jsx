import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Opinion = () => {
  return (
    <div>
      <Typography>
        this is Opinion page
      </Typography>
      <Link to={'/'}>
      back to home</Link>
    </div>
  )
}

export default Opinion