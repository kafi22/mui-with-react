import { Box, Container, FormControl, FormLabel, Stack, TextField } from '@mui/material';
import React from 'react';
import signInImg from "../assets/image/maddy-weiss-V9EfIYUuGeo-unsplash.jpg";

import LockPersonIcon from '@mui/icons-material/LockPerson';

import { Link } from 'react-router-dom';
import { Typography } from '@mui/joy';
import { CheckBox } from '@mui/icons-material';

const Sign_in = () => {
  return (
    <Container>

        <Stack>
            <Box  sx={{display : 'flex', justifyContent : 'flex-end', alignItems : 'center', }}>

                <Box position={'absolute'} top={0} zIndex={10} left={0}  height={'100%'}Width={'100%'}>
                    <img src={signInImg} style={{height : '100vh', width : '90%', objectFit : 'cover'}}  alt="" />

                </Box>


                <Box width={"35%"} >

                    <Box component={'div'}>
                        <LockPersonIcon />
                        <Typography>
                            Sign up
                        </Typography>
                    </Box>

                    <Box>
                        <FormControl fullWidth>
                            <TextField type='email' label='Email' variant='outlined' />
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField type='password' label='password' variant='outlined' />
                        </FormControl>


                        <FormControl>
                            <CheckBox />
                            <FormLabel>
                                Remember me
                            </FormLabel>
                        </FormControl>
                    </Box>


                </Box>
            </Box>
        </Stack>

    </Container>
  )
}

export default Sign_in