import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
// import Info from '../Course/Course';
// import Courses from '../Course/Courses';
// import NavDrawer from '../Layout/Component/Nav&Drawer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Courses from '../Course/Courses';
import Chip from '@mui/material/Chip';





// search bar styling function
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.70),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.80),
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
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50vw',
            '&:focus': {
                width: '50vw',
            },
        },
    },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


export default function StudentDashboard() {

    // time function 
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    // date function

    const current = new Date();
    const Date1 = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    return (
        <>
            <Card sx={{ display: 'flex', justifyContent: "center", backgroundColor: "#D3D3D3" }}>
                {/* <NavDrawer /> */}

                {/* Body */}
                <Box sx={{ backgroundColor: "#D3D3D3" }}>
                    <Box>
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                            <DrawerHeader />
                            <Stack direction="row" sx={{ alignItems: "center", width: "80vw" }} >
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <Card sx={{ width: "34vw", marginLeft: "10px", height: "40px", backgroundColor: "#eee", display: "flex", alignItems: "center", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}>

                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <CalendarMonthIcon sx={{ display: { xs: "none", md: "flex" }, mr: 12.5, p: 1, color: "grey" }} />
                                        {Date1}
                                        {' - '}

                                        {date.toLocaleTimeString()}
                                    </Box>
                                </Card>
                            </Stack>
                            <Stack direction="row" sx={{ alignItems: "center", width: "80vw", marginTop: "20px" }} >
                                <Stack direction="row" spacing={1}>
                                    <Chip label="Location" component="a" href="#basic-chip" clickable />
                                    <Chip label="Subject" component="a" href="#basic-chip" clickable />
                                    <Chip label="Teacher" component="a" href="#basic-chip" clickable />
                                    <Chip label="Price" component="a" href="#basic-chip" clickable />
                                </Stack>

                            </Stack>
                        </Box>
                        {/* Courses */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Courses />
                        </Box>
                    </Box>
                </Box>
            </Card>
        </>
    );
};

