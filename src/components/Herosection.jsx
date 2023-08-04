import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import cardImg from '../assets/image/photo-1484950763426-56b5bf172dbb.jpeg'
import { Link } from 'react-router-dom';

import '../Wrappers/Herosection.css'
import Wrapper from '../Wrappers/Wrapper';

const Herosection = () => {

  return (
    <Wrapper>
      <Stack component={'div'} className='hero-content' marginBottom={'2rem'}>
          <div className="hero-details">
            <Typography variant='h3' color={'white'} maxWidth={'50%'} gutterBottom>Title of a longer featured blog post</Typography>
            <Typography variant='h5'  component={'h5'} color={'white'} maxWidth={'50%'} gutterBottom>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</Typography>

            <Link underline='hover' variant='body1'>Continue reading...</Link>
          </div>
      </Stack>

      <Stack marginTop={'5rem'}>
        <Grid container justifyContent={'space-between'} spacing={3}>
          <Grid item xs={12} md={6}>
          <Card variant='outlined' sx={{display : 'flex', boxShadow : '1'}}>
            <Box sx={{display : 'flex', justifyContent : 'space-between', flexDirection : 'column'}}>
            <CardContent>
              <Typography variant='h5' component={'h3'} gutterBottom>
                Feature post
              </Typography>
              <Typography variant='body1' component={'p'} gutterBottom>
                Nov 12
              </Typography>
              <Typography variant='body2' component={'p'} gutterBottom>
                This is a wider card with supporting text below as natural lead-in to additional content. 
              </Typography>
              <Typography variant='body1' component={'p'} color={'primary'}>
                <Link to={'/design'}>
                Continue reading...
                </Link>
              </Typography>
            </CardContent>
            </Box>
            <CardMedia component='img' image={cardImg} sx={{width : '150px', objectFit : 'cover'}}  />
          </Card>
          </Grid>

          <Grid item xs={12} md={6}>
          <Card variant='outlined' sx={{display : 'flex', boxShadow : '1'}}  >
            <Box sx={{display :'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
            <CardContent>
              <Typography variant='h5' component={'h3'} gutterBottom>
                Feature post
              </Typography>
              <Typography variant='body1' component={'p'} gutterBottom>
                Nov 12
              </Typography>
              <Typography variant='body2' component={'p'} gutterBottom>
                This is a wider card with supporting text below as natural lead-in to additional content. 
              </Typography>
              <Typography variant='body1' component={'p'} color={'primary'}>
                <Link to={'/design'}>
                Continue reading...
                </Link>
              </Typography>
            </CardContent>
            </Box>
            <CardMedia component={'img'} 
            image={cardImg} 
            sx={{width : '150px', objectFit : 'cover',}} 
            />
          </Card>
          </Grid>
        </Grid>
      </Stack>

    </Wrapper>
  )
}

export default Herosection