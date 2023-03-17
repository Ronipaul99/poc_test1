import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../../../Layout/Style/DocumentStyle';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import data from "./data.json"
import { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.10),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginLeft: 0,
  width: '60%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
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
    width: '250px',
    [theme.breakpoints.up('sm')]: {
      width: '250px',
      '&:focus': {
        width: '250px',
      },
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

  const [files, setFiles] = React.useState([]);


  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

  const file = data.map((course, index) => (<Box sx={styles.Li} key={index}>{course.path} {course.size}</Box>));

  console.log(data)

  const {
    getRootProps,
    getInputProps,
    isFocused,
    open,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { 'image/*': [] }, noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      console.log(acceptedFiles ,data);
      acceptedFiles.forEach(item=>{
        data.push(item)
      })
      // data.push(acceptedFiles[0])
      // setFiles(acceptedFiles.map(file => Object.assign(file, {
      //   preview: URL.createObjectURL(file)
      // })));
    }
  });


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


  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);


  const files1 = files.map(file => <Box sx={styles.Li} key={file.path}>{file.path}<img alt='img' style={img} src={file.preview} onLoad={() => { URL.revokeObjectURL(file.preview) }} /></Box>);




  // dialoug


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const [open1, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen2(false);
  };


  // Progress
  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    // /**
    //  * The value of the progress indicator for the determinate variant.
    //  * Value between 0 and 100.
    //  * @default 0
    //  */
    value: PropTypes.number.isRequired,
  };


  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);



  const All = [
    {
      value: 'All',
      label: 'All',
    }
  ];
  const Period = [
    {
      value: 'All',
      label: 'All',
    }
  ];
  const Doc = [
    {
      value: 'All',
      label: 'All',
    }
  ];
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.Box1}>
        <Box>
          <Box sx={styles.Hed}>
            <Typography sx={styles.Text1}>Documents</Typography>
            <Stack direction="row" spacing={1} sx={{ ml: 3 }}>
              <Chip label="All documents" variant="outlined" />
              <Chip label="Others" variant="outlined" />
            </Stack>
          </Box>
          <Box sx={styles.SearchSec}>
            <Box sx={styles.B1}>
              <Box sx={styles.B2}>
                <Box>
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
                <TextField
                  id="outlined-select-currency"
                  select
                  size='small'
                  label="All categories"
                  sx={{ width: "20ch" }}
                  defaultValue="All"
                >
                  {All.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-currency"
                  select
                  size='small'
                  label="Period"
                  sx={{ width: "20ch" }}
                  defaultValue="All"
                >
                  {Period.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-select-currency"
                  select
                  sx={{ width: "20ch" }}
                  size='small'
                  label="Document type"
                  defaultValue="All"
                >
                  {Doc.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={styles.SearchB}>
                <Button variant='contained'> search</Button>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box sx={styles.Box2}>

          {/* progress */}
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open1}
          >
            <DialogContent>
              <CircularProgressWithLabel value={progress} />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Done
              </Button>
            </DialogActions>
          </BootstrapDialog>


          <Box sx={styles.Box3} {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <Typography>Drag 'n' drop some files here, or click to select files</Typography>
            <Button sx={styles.Btn} variant='contained' onClick={open}>
              Choose a file
            </Button>
          </Box>

          <Box sx={styles.FBox}>
            <Box sx={styles.List}>
              <Typography varient="h4"> All documentes :</Typography>
              <Box sx={{ p: 1 }}>{file}</Box>
              <Box sx={{ p: 1 }}>{files1}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Doc;