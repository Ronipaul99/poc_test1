import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../../../Layout/Style/DocumentStyle';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import data from "./data.json"

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
  const {
    getRootProps,
    getInputProps,
    isFocused,
    open,
    acceptedFiles,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { 'image/*': [] }, noClick: true,
    noKeyboard: true
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

  const files = acceptedFiles.map(file => <Box sx={styles.Li} key={file.path}>{file.path}</Box>);
  const file = data.map((course, index) => (<Box sx={styles.Li} key={index}>{course.name} {course.size}</Box>))
  // console.log(files)
  // data.push({files})

  // Progress
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => { });
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
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
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Doc;