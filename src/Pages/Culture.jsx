import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Muiupload from '../components/Muiupload'

const Culture = () => {
  return (
    <div>
      <Typography>
        this is Culture page
      </Typography>

      <Muiupload />

      <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default Culture