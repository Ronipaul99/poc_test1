import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const Doc = (props) => {
  const { getRootProps, acceptedFiles } = useDropzone();
  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "60%" }}>
        <Box sx={{ marginTop: "100px", width: "100%" }}>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            borderWidth: 2,
            borderRadius: 2,
            borderColor: '#eeeeee',
            borderStyle: 'dashed',
            backgroundColor: '#fafafa',
            color: '#bdbdbd',
            outline: 'none',
            transition: 'border .24s ease-in-out',
            height: "150px", 
            
            justifyContent:"center"
          }} {...getRootProps({ className: 'dropzone' })}>
            <Typography>Dropzone without click events</Typography>
          </Box>



          <Box sx={{ marginTop: "150px" }}>
            <Typography varient="h4">Files</Typography>
            <ul>{files}</ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Doc;




