import {  ListItem, ListItemText } from '@mui/material'
import React from 'react'

const NumberListItem = (props) => {
    const {num, text} = props
    console.log(props);
  return (
   <ListItem>

    <ListItemText primary={` ${num}. ${text} `}  />

   </ListItem>
  )
}

export default NumberListItem