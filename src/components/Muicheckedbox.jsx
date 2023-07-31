import React, { useState } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Checkbox from '@mui/material/Checkbox';
import { Box } from "@mui/material";



const Muicheckedbox = () => {

    const [isValue, setValue] = useState(false)

    const changeValue = () => {
        setValue(!isValue)
    }

    console.log(isValue);

    return (
       <Box>
        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={isValue} onChange={changeValue} />
       </Box>
    )
}

export default Muicheckedbox;