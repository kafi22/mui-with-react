import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const MuiSwitch = () => {


    const [check, setCheck] = useState(false)

 const handelCheck = () => {
    setCheck(!check)
 }

 console.log(check);

    return (
        <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Dark mode"
        checked={check} onChange={handelCheck} color='secondary' />
       
      </FormGroup>
    )
}

export default MuiSwitch