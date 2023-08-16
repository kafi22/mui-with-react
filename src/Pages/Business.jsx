import React from 'react'
import { Typography, Card, CardContent, CardMedia, Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { CardActionArea } from '@mui/material';
import cardImg from "../assets/image/maddy-weiss-V9EfIYUuGeo-unsplash.jpg"

const Business = () => {
  return (


<Stack component={"div"}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={cardImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  <Box mt={"2rem"}>
  <Link to={'/'}>Back to home</Link>
  </Box>
</Stack>


  )
}

export default Business