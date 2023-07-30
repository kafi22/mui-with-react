import { Box, MenuItem, TextField } from "@mui/material"

const Muiselect = () => {


    return (
        <>
        <Box width='250px' >
        <TextField label='select country' select>
            <MenuItem value='India'>India</MenuItem>
            <MenuItem value='Bangladesh'>Bangladesh</MenuItem>
            <MenuItem value='SriLanka'>SriLanka</MenuItem>
        </TextField>
        </Box>
        </>

    )
}

export default Muiselect