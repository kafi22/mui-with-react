import { Box } from "@mui/material"
import { Stack } from "@mui/system";


const MuiBox = () => {


    return (
        <Stack display='flex' justifyContent='center' alignItems='center' direction='row'>
        <Box sx={{
            display : 'flex',
            backgroundColor : 'black',
            height : '200px',
            width : '300px'
        }}>
        </Box>
        </Stack>
    )
}

export default MuiBox;