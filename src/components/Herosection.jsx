import { Container, Link, Stack, Typography } from '@mui/material'
import React from 'react';

import '../Wrappers/Herosection.css'
import Wrapper from '../Wrappers/Wrapper';

const Herosection = () => {

  return (
    <Wrapper>
      <Stack component={'div'} className='hero-content'>
          <div className="hero-details">
            <Typography variant='h3' color={'white'} maxWidth={'50%'} gutterBottom>Title of a longer featured blog post</Typography>
            <Typography variant='h5'  component={'h5'} color={'white'} maxWidth={'50%'} gutterBottom>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</Typography>

            <Link underline='hover' variant='body1'>Continue reading...</Link>
          </div>
      </Stack>

    </Wrapper>
  )
}

export default Herosection