import { Box, Button, FormControl, FormLabel, Typography, Stack, TextField, } from '@mui/material';
import React from 'react';
import signInImg from "../assets/image/maddy-weiss-V9EfIYUuGeo-unsplash.jpg";

import LockPersonIcon from '@mui/icons-material/LockPerson';

import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';







const Sign_in = () => {

  

    
  return (
    

        <Stack >

            <Box  sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', gap : "1rem", height : "100vh" }}>

                 <Box position={'relative'} height={'100vh'} width={"63%"}>
                    <img  src={signInImg} style={{height : '105vh', width : '100%', objectFit : 'cover', position : "absolute", top : "-1rem", left : "-1rem", }}  alt="" />
                </Box> 


                <Box width={"37%"} sx={{display : "flex", justifyContent : "flex-start", alignItems : "center", height : "100vh", flexDirection : "column",  padding : "0 1.5rem 0 0" }}>

                   

                    <Box fullWidth sx={{display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column", width : "100%", gap : '1rem', marginTop : "4rem"}}>

                    
                        <Box component={'div'} sx={{height : '50px', width : '50px', borderRadius : "50%", backgroundColor : "#9C27B0", display : 'flex', justifyContent : "center", alignItems : 'center'}}>
                      
                        <LockPersonIcon sx={{color : 'whitesmoke'}} />
                          
                        </Box>
                        <Typography variant='h5' component={'h5'} fontWeight={'400'}>
                            Sign in
                        </Typography>
                    

                        <FormControl fullWidth>
                            <TextField type='email' label='Email' variant='outlined' sx={{width: "100%"}} />
                        </FormControl>

                        <FormControl fullWidth sx={{width: "100%"}}>
                            <TextField type='password' label='password' variant='outlined' sx={{width: "100%"}} />
                        </FormControl>


                        <FormControl fullWidth sx={{ display : " flex", gap : '1rem', flexDirection : 'row', mb : '1rem'}}>
                            <CheckBox />
                            <FormLabel>
                                Remember me
                            </FormLabel>
                        </FormControl>

                        <FormControl fullWidth  sx={{mb : '1rem'}}>
                            <Button variant='contained' size='medium'>
                                Sign in
                            </Button>
                        </FormControl>

                    </Box>

                    <Box sx={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%", mb : '4rem', mt : "1rem", textTransform : "capitalize", color : "rgb(25, 118, 210)"}}>
                        <Link >
                        forget password
                        </Link>

                        <Link to={"/signup"}>
                        Don't have an account? Sign Up
                        </Link>
                    </Box>

                    <Box sx={{display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "row"}}>
                        <Typography textAlign={"center"} variant='body2'>
                            &copy; by kafi ahmed 2023
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Stack>

    
  )
}

export default Sign_in