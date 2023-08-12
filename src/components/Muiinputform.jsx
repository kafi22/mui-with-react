import { Box, FormControl, Stack, TextField } from '@mui/material'
import React from 'react'

const Muiinputform = () => {

  return (
    <Stack component={"div"}>

    <Box component={"div "}>

        <Box component={"div"} sx={{width : "520px"}}>

            <FormControl fullWidth>
                <TextField type='input'  label="User Name" />
            </FormControl>

        </Box>

    </Box>

    </Stack>
  )
}

export default Muiinputform