import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Info from '../Course/Course';
import Courses from '../Course/Courses';
import NavDrawer from '../Layout/Component/Nav&Drawer';




// search bar styling function
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
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


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: "center", backgroundColor: "#B1B1B1" }}>
                <NavDrawer />

                {/* Body */}
                <Box sx={{ backgroundColor: "#B1B1B1" }}>
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
                                <Card sx={{ width: "34vw", marginLeft: "10px", height: "40px" }}>
                                    <Box sx={{ alignItems: "center", textAlign: "center", marginTop: "10px" }}>
                                        {date.toLocaleTimeString()}
                                    </Box>
                                </Card>
                            </Stack>
                        </Box>
                        {/* Courses */}
                        {Courses.map((e) => {
                            return (
                                <Info name={e.name} rollNo={e.rollNo} imgurl={e.imgurl} details={e.details} />
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

