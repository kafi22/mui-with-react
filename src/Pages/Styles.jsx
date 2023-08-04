import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Styles = () => {
  return (
    <div>

      <Typography>
        This is style page
      </Typography>

      <Link to={'/'}>
      back to home
      </Link>
    </div>
  )
}

export default Styles