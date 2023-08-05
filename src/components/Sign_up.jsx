import { Box, Button, Container, FormControl, Stack, TextField, Typography } from '@mui/material'
import React from 'react';

import LockPersonIcon from '@mui/icons-material/LockPerson';
import { CheckBox } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sign_up = () => {
  return (
    <Container fixed>
    <Stack>
    <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '100vh'}}>

    <Box sx={{maxWidth : '460px', backgroundColor : 'whitesmoke'}}>

        <Box component={'div'}>
        <LockPersonIcon />
            <Typography>
                Sign up
            </Typography>
        </Box>

        <Box  component={'form'} sx={{display : 'flex', flexDirection : 'column', justifyContent : 'space-between', alignItems : 'center', gap : '1rem'}}>
            <FormControl>
                <TextField type='text' label='First Name' required variant='outlined' />

                <TextField type='text' label='Last Name' required variant='outlined' />

            </FormControl>

            <FormControl>
                <TextField type='email' label='email' variant='outlined' />
            </FormControl>

            <FormControl>
                <TextField type='password' required
                label='password'
                />
            </FormControl>

            <FormControl>
                <CheckBox />
                <Typography variant='body1' lineHeight={1.5} component={'p'}>
               i want to receive inspiration, marketing promotions and updates via email.
                </Typography>
            </FormControl>

            <FormControl fullWidth={'100%'}>
                <Button type='submit' variant='contained' size='small' sx={{width : '100%'}}>
                    Sign up
                </Button>
            </FormControl>

            <FormControl>
                <Typography variant='body2' color={'primary'}>
                    <Link to={'signin'}>
                    Already have an account? sign in
                    </Link>
                </Typography>
            </FormControl>
        </Box>

        
    </Box>

    </Box>
    </Stack>
    </Container>
  )
}

export default Sign_up