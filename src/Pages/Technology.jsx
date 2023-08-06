import React, { useState } from 'react';
import { Button } from '@mui/material';
import { DropzoneArea } from 'react-dropzone-uploader';

const Technology = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChangeStatus = ({ file }, status) => {
    if (status === 'done') {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleButtonClick}>
        Upload Image or File
      </Button>
      <input
        id="fileInput"
        type="file"
        hidden
        onChange={(e) => handleChangeStatus({ file: e.target.files[0] }, 'done')}
        accept="image/*, .pdf, .doc, .docx"
      />
      {uploadedFile && (
        <div>
          {uploadedFile.type.includes('image') ? (
            <div>
              <p>Uploaded Image:</p>
              <img
                src={URL.createObjectURL(uploadedFile)}
                alt="Uploaded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          ) : (
            <p>Uploaded File: {uploadedFile.name}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Technology;
