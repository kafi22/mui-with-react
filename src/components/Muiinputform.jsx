import { Box, FormControl, Stack, TextField } from '@mui/material'
import React from 'react'

const Muiinputform = () => {
  return (
    
    <div>

    <Stack>

    <Box>
        <FormControl>
            <TextField type='text' label="user name" />
        </FormControl>
    </Box>

    </Stack>

    </div>
  )
}

export default Muiinputform