import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Stack, TextField, Typography } from '@mui/material';
import {Box} from "@mui/material";
import Muiinputform from '../components/Muiinputform';

const Design = () => {
  return (
    <Stack>
      <Typography>
        this is Design Page
      </Typography>

      
      <Box>
        <Muiinputform />
      </Box>

     

      <Link to={'/'}>Back to home</Link>
    </Stack>
  )
}

export default Design