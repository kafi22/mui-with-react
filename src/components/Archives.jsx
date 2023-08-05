import { Box, List, ListItem, Typography, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Data } from '../Data';

const Archives = ({heaadingTitle}) => {

  const [data, setData] = useState(Data)



  const getYear_Months = data?.archieve?.map((item) => {

      const {Months, year} = item
    return (
      <ListItemText key={year}>
      {` ${Months} ${year}`}
      </ListItemText>
    )
  })

  return (
    <Box>
      
    <List>
    <Typography variant='h6' mb={3} fontWeight={500}>
       {heaadingTitle}
      </Typography>
    <ListItem sx={{textDecoration : 'underline'}}>
      <Link>
      {getYear_Months}
      </Link>
    </ListItem>
    </List>
    </Box>
  )
}

export default Archives