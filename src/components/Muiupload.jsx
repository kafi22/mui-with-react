import React, { useState } from 'react';
import { Stack, Box, Button, Card, Typography } from '@mui/material';
import { FileUpload } from '@mui/icons-material';

const Muiupload = () => {

    const [uploadFiles, setUploadFile] = useState(null)

    const getTheFile = () => {

        document.getElementById("uploadFile").click()
    };

    const getUploadsFile = ({file}, status) => {

        if(status === "status") {
            setUploadFile(file)
        }

    };


  return (

    <Stack component={"div"} sx={{display : "flex", flexDirection : "column", justifyContent : "flex-start", alignItems : "flex-start", height : "100%"}}>
        <Box sx={{display : "flex", flexDirection : "column", justifyContent : "flex-start", alignItems : "flex-start", height : "100%", gap : "2rem"}}>

            <Box sx={{display : "flex", flexDirection : "row", justifyContent : "flex-start", width : "100%"}}>

                <Button variant='contained' 
                type='button' 
                endIcon={ <FileUpload />}
                onClick={getTheFile}
                >
                    Upload here
                </Button>

                <input 
                hidden
                type='file'
                id='uploadFile'
                onChange={e => getUploadsFile({ file : e.target.files[0]}, "status")}
                accept="image/*, .pdf, .doc, .docx"
                
                />

            </Box>

            {uploadFiles && (
                <Box sx={{display : "flex", justifyContent : "flex-start", flexDirection : "column", alignItems : "flex-start", gap : "1rem"}}>
                    {uploadFiles.type.includes("image") ? (
                        <Box sx={{display : "flex", justifyContent : "flex-start", flexDirection : "row", alignItems : "flex-start", gap : "1rem"}}>
                            <Card>
                                <img src={URL.createObjectURL(uploadFiles)} style={{height : "120px", width : "120px", objectFit : "cover"}} alt="" />
                            </Card>

                            <Typography variant='body2' component={"p"}>
                               image Name : {uploadFiles.name}
                            </Typography>
                        </Box>
                        
                    ) : (
                        <Box sx={{display : "flex", justifyContent : "flex-start", flexDirection : "row", alignItems : "flex-start"}}>
                            <Typography variant='body2' component={"p"}>
                              File Name : {uploadFiles.name}
                            </Typography>
                        </Box>
                    ) }
                </Box>
            )}
        </Box>
    </Stack>
  )
}

export default Muiupload