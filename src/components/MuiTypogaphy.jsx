import { Button, Stack } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';

const MuiTypogaphy = () => {

    return (
        <Stack spacing={4} marginBottom={2}>
        <Stack spacing={2} direction='row'>
        <Button variant="text">Text</Button>
        <Button variant="contained">Conteined</Button>
        <Button variant="outline">Outline</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Primary</Button>
            <Button variant="contained" color="warning">Primary</Button>
            <Button variant="contained" color="error">Primary</Button>
            <Button variant="contained" color="info">Primary</Button>
            <Button variant="contained" color="success">Primary</Button>
        </Stack>
        <Stack display='block' spacing={3} direction='row'>
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">medium</Button>
            <Button variant="contained" size="large">large</Button>
        </Stack>

        <Stack display='block' spacing={3} direction='row'>
            <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
            <Button variant="contained" endIcon={<SendIcon />} color="error">Send</Button>
            <Button variant="contained" startIcon={<SendIcon />}>Mail</Button>
        </Stack>
        </Stack>
    )
}

export default MuiTypogaphy;