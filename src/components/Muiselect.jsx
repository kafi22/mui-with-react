import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

const Muiselect = () => {

    const [value, setValue] = useState([])


    console.log(value);

    return (
        <>
        <Box width='250px' >
        <TextField label='select country' 
        fullWidth select
         value={value}
          onChange={e => setValue(e.target.value)}
          SelectProps={{
            multiple : true
          }}
          >
            <MenuItem value='India'>India</MenuItem>
            <MenuItem value='Bangladesh'>Bangladesh</MenuItem>
            <MenuItem value='SriLanka'>SriLanka</MenuItem>
        </TextField>
        </Box>
        </>

    )
}

export default Muiselect