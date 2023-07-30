import { Stack, TextField } from "@mui/material";
import { useState } from "react";

const Textfield = () => {

    const [text, setText] = useState('')
    console.log(text);


    return (
        <>
        <Stack spacing={6}>
            <Stack spacing={2} direction='row'>
                <TextField label='First Name' variant="standard" />
                <TextField label="Last Name" variant="filled" />
                <TextField label="Email address" variant="outlined" type="email" />
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label='password' type="password" 
                variant="outlined"
                error={!text}
                value={text}
                onChange={e => setText(e.target.value)}
                helperText={!text ? 'Required' : 'do not share your password' }
                required

                />
            </Stack>

            
        
        </Stack>
        </>
    )
}

export default Textfield;