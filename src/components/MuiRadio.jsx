import React, { useState } from "react";

import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from "@mui/material";

const MuiRadio = () => {

    const [value, setValue] = useState('')

    console.log(value);
    return (
        <Box>
            <FormControl>

            <FormLabel id="job-experience">
                Years of Experience
            </FormLabel>

            <RadioGroup
            value={value}
            name="job-experience-group"
            onChange={e => setValue(e.target.value)}
            row
            
           
            >
                <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='0-4' value='0-4' />
                <FormControlLabel control={<Radio />} label='0-5' value='0-5' />
              
            </RadioGroup>
            
            <FormHelperText>invalid selection</FormHelperText>

            </FormControl>
        </Box>
    )
}

export default MuiRadio;