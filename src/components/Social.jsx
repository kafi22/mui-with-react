import React, { useState } from 'react';

import { Data } from '../Data';
import { Link, List, ListItemIcon, ListItemText } from '@mui/material';
import { ListItem } from '@mui/joy';


const Social = () => {

  const [social, setSocial] = useState(Data)



  const getSocialItem = social?.socialIcon?.map((item, index) => {

    const {icon, link, text} = item

    return (
      
      <ListItem key={index}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Link href={link}>
      <ListItemText primary={`${text}`} />
        </Link>
      </ListItem>
  
    )
  })
  return (
    <List>
      {getSocialItem}
    </List>
  )
}

export default Social