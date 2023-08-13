import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Muiupload from '../components/Muiupload'
import { useForm } from 'react-hook-form'

const Culture = () => {

 const {register, formState : {errors}, handleSubmit, watch} =  useForm()


    const getTheFile = (file) => {
      // THIS IS FOR UPLOAD FILE 
      console.log(file);
    }

  return (
    <div>
      <Typography>
        this is Culture page
      </Typography>

      <Muiupload 
      register={register}
      uploadFiles={getTheFile}
      fileUploadName="fileUpload"
      

      />

      <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default Culture