import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <Typography>
            this is a Sidebar area
        </Typography>
        <Link to={'/'}>
        back to home
        </Link>
    </div>
  )
}

export default Sidebar