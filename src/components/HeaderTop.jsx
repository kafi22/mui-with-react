import { AppBar, Box, Container, Stack, Toolbar, Typography, IconButton, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Margin } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const HeaderTop = () => {

    const [isValue, setValue] = useState(false)

    const handelChangeButton = () => {

        setValue(!isValue)
    }

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


        <Box sx={{display : 'flex', justifyContent : 'center', gap : '1rem', backgroundColor : 'whitesmoke',  width : '400px'}}>

        
            
              
                <Box component={'form'} sx={{'& > :not(style)': { width: '25ch' }}} noValidate autoComplete='off'>
                    <TextField variant='outlined' label="search here" size='small' sx={{width : '160px'}} />
                </Box>
   
         
            <Typography>
                    <Button variant='outlined' color='secondary'>
                        <Link to={'signup'}>
                        SIGN UP
                        </Link>
                    </Button>
            </Typography>
          
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default HeaderTop