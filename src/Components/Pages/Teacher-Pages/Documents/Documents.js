import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../../../Layout/Style/DocumentStyle';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

// search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
  },
}));



// DND
const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function Doc(props) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    acceptedFiles,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: { 'image/*': [] } });

  const style = useMemo(() => ({
    ...styles.baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.Box1}>
        <Box sx={{width:"100%"}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>


        <Box sx={styles.Box2}>
          <Box sx={styles.Box3} {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <Typography>Drag 'n' drop some files here, or click to select files</Typography>
          </Box>

          <Box sx={styles.FBox}>
            <Typography varient="h4">Files</Typography>
            <ul>{files}</ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Doc;