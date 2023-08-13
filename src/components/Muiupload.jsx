import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, Box, Button, Card, Typography } from '@mui/material';
import { FileUpload } from '@mui/icons-material';

const Muiupload = ({
    register,
    uploadFiles,
    fileUploadName
}) => {

    const [uploadFile, setUploadFile] = useState(null)

  

    const getTheFileUpload = (fileUpload) => {

        document.getElementById(fileUpload).click()
    }

    const getUploadsFiles = ({file}, status) => {
        if(status === "done") {
            setUploadFile(file)
            uploadFiles(file)
        }
    }

    return (
            <Stack
                component={"div"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        height: "100%",
                        gap: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            width: "100%",
                        }}
                    >
                        <Button
                            variant='contained'
                            type='submit'
                            endIcon={<FileUpload />}
                            onClick={() => getTheFileUpload('fileUpload')}
                        >
                            Upload here
                        </Button>

                        <input
                            hidden
                            type='file'
                            id='fileUpload'
                            {...register(fileUploadName)}
                            accept="image/*, .pdf, .doc, .docx"
                            onChange={e => getUploadsFiles({file : e.target.files[0]}, "done")}
                        />
                    </Box>

                    {uploadFile && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: "1rem",
                            }}
                        >
                            {uploadFile.type.includes("image") ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                    }}
                                >
                                    <Card>
                                        <img
                                            src={URL.createObjectURL(uploadFile)}
                                            style={{
                                                height: "120px",
                                                width: "120px",
                                                objectFit: "cover",
                                            }}
                                            alt=""
                                        />
                                    </Card>

                                    <Typography
                                        variant='body2'
                                        component={"p"}
                                    >
                                        Image Name: {uploadFile.name}
                                    </Typography>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <Typography
                                        variant='body2'
                                        component={"p"}
                                    >
                                        File Name: {uploadFile.name}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </Stack>
    );
};

export default Muiupload;
