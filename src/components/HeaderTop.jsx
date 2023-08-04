import { AppBar, Box, Container, Stack, Toolbar, Typography, IconButton, Button } from '@mui/material';
import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Margin } from '@mui/icons-material';



const HeaderTop = () => {
  return (
    
    <AppBar sx={{backgroundColor : 'whitesmoke'}} position='fixed'>
        <Toolbar sx={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', width : '1140px', maxWidth : '100%', margin : '0 auto'}}>
        <Box component={'span'}>
        <Typography variant='h6' color={'secondary'}>Subscribe</Typography>
        </Box>

        <Box>
            <Typography variant='h5' color={'secondary'}>
                Blog
            </Typography>
        </Box>

        <Box sx={{display : 'flex', justifyContent : 'center', gap : '1rem'}}>
            <IconButton>
            <SearchIcon />
            </IconButton>

            <Typography>
            <Button variant='outlined' color='secondary'>
                SIGN UP
            </Button>
            </Typography>
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default HeaderTop