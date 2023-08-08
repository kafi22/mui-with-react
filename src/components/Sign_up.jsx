import { Box, Button, Container, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react';

import LockPersonIcon from '@mui/icons-material/LockPerson';
import { CheckBox } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sign_up = () => {
  return (
    <Container fixed>
    <Stack>
    <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '100vh'}}>

    <Box sx={{maxWidth : '400px', backgroundColor : 'transparent', display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column", gap : "1rem", padding : "1rem", mt : "2rem"}}>


        <Box component={'div'} sx={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center", m : "1rem 0", gap : '.7rem'}}>

            <IconButton sx={{height : "50px", width : "50px", borderRadius : "50%", display : "flex", justifyContent : "flex", alignItems : "center", backgroundColor : "#9C27B0", color : "whitesmoke", }}>
        <LockPersonIcon />
            </IconButton>
            <Typography variant='h5' component={"h5"} fontWeight={400}>
                Sign up
            </Typography>
        </Box>

        <Box  component={'form'} sx={{display : 'flex', flexDirection : 'column', justifyContent : 'space-between', alignItems : 'flex-start', gap : '1rem'}}>
            <FormControl sx={{display : "flex", justifyContent : "space-between", alignItems : "center", gap : "1rem", flexDirection : "row"}}>
                <TextField type='text' label='First Name' required variant='outlined' />

                <TextField type='text' label='Last Name' required variant='outlined' />

            </FormControl>

            <FormControl fullWidth>
                <TextField type='email' label='email' variant='outlined' />
            </FormControl>

            <FormControl fullWidth>
                <TextField type='password' required
                label='password'
                />
            </FormControl>

            <FormControl sx={{display : "flex", justifyContent : "flex-start", alignItems : "center", gap : "1.3rem", flexDirection : "row"}}>
                <CheckBox />
                <Typography maxWidth={"290px"} variant='body1' lineHeight={1.5} component={'p'}>
               i want to receive inspiration, marketing promotions and updates via email.
                </Typography>
            </FormControl>

            <FormControl fullWidth={'100%'}>
                <Button type='submit' variant='contained' size='medium' sx={{width : '100%'}}>
                    Sign up
                </Button>
            </FormControl>

            <FormControl sx={{ml : "auto"}}>
                <Typography variant='body2' color={'primary'}>
                    <Link to={'/signin'}>
                    Already have an account? sign in
                    </Link>
                </Typography>
            </FormControl>



        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={"2rem"}>
            <Typography variant='body2'>
            Copyright © by kafi 2023.
            </Typography>
        </Box>

        
    </Box>

    </Box>
    </Stack>
    </Container>
  )
}

export default Sign_up