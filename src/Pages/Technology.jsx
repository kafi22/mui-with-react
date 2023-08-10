import React, { useState } from 'react';
import { Box, Button, Card, CardMedia, Stack } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

const Technology = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChangeStatus = ({ file }, status) => {
    if (status === 'done') {
      setUploadedFile(file);
    }
  };

  const getTheUploadButton = () => {

    document.getElementById("fileInput").click()

  }

  return (
    <Stack>

    <Box sx={{display : "flex", justifyContent : "flex-start", alignItems : "flex-start", flexDirection : "column", gap : "2rem"}} >
      
      <Box sx={{display : "flex", justifyContent : "flex-start", alignItems : "center", gap : "2rem", width : "100%"}}>
        
      <Button variant="contained" onClick={getTheUploadButton} endIcon={<CloudUploadIcon />}>
        Upload here
      </Button>
      <input
        id="fileInput"
        type="file"
        hidden
        onChange={(e) => handleChangeStatus({ file: e.target.files[0] }, 'done')}
        accept="image/*, .pdf, .doc, .docx"
      />
      </Box>
      {uploadedFile && (
        <Box borderRadius={"10px"} padding={"20px"} bgcolor={"#F8F0E5"} sx={{width : "60%"}}>
          {uploadedFile.type.includes('image') ? (
            <Box sx={{display : "flex", justifyContent : "flex-start", flexDirection : "column"}}>
              
              <Card sx={{maxWidth : "80px", borderRadius : "10px", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', border : "1px solid #"}}>
                <CardMedia
                 style={{ maxWidth: '100%', height: '80px', width : "80px", objectFit : "cover" }}
                 image={URL.createObjectURL(uploadedFile)}
                />
              </Card>
             
         
              <Box sx={{display : "flex", flexDirection : "column"}}>
              <p>Uploaded Image: {uploadedFile.name}</p>
              </Box>
               
            </Box>
          ) : (
            <Box sx={{display : "flex", flexDirection : "column"}}>
              <p>Uploaded File: {uploadedFile.name}</p>
            </Box>
          )}
        </Box>
      )}

        <Box mt={"4rem"}> 
        <Link to={"/"}>
        back to home
        </Link>
        </Box>
      
    </Box>

  
    </Stack>
  );
};

export default Technology;
