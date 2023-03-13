import { Avatar, Box, Button, Card, Chip, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import NavDrawer from '../../../Layout/Component/Nav&Drawer';
import Teacher from '../../../Images/Teacher.jfif'
import { useParams } from 'react-router-dom';
import JsonData from "../../../Course/TeacherProfileData/TeacherData.json";
import TeacherCourses from '../../../Course/TeacherCourse/TeacherCourses';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TProfileOnCourse = () => {
    const { id } = useParams();

    function getById(JsonData, id) {

        return JsonData.filter(function (o) { return o.id == id });

    };


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(1, 0),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    // { getById(JsonData, `${id}`)[0].imgURL }

    // const styles = {
    //     paperContainer: {
    //         backgroundImage: `url(${getById(JsonData, 1)[0].imgURL})`,
    //         backgroundSize: 'cover',
    //         width: "100%",
    //         height: "100%",
    //         boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)"
    //     }
    // };

    return (

        <Card sx={{ display: 'flex', justifyContent: "center", backgroundColor: "#D3D3D3" }}>
            <NavDrawer />
            <Card sx={{ display: "flex", flexDirection: "column", width: "100%" , height:"110vh"}}>
                <DrawerHeader />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Card sx={{ display: "flex", width: "75%", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}>
                        {/* Left Profile */}
                        <Card sx={{ width: "60%", p: 3 }}>
                            <Typography sx={{ display: "flex", fontSize: "13px", color: "grey" }}><Typography sx={{ fontSize: "13px", color: "#36454F" }}>CA Final Group 1</Typography><KeyboardArrowRightIcon fontSize='small' />Free classes & tests</Typography>
                            <Box sx={{ display: "flex", marginTop: "20px" }}><Card sx={{ width: "20px" }}><Typography sx={{ fontSize: "13px", }}>EN</Typography></Card> <Typography sx={{ display: "flex", fontSize: "13px", color: "purple", ml: 1 }}> CA FINAL GROUP 1- NEW</Typography></Box>
                            <Typography variant='h4' sx={{ fontWeight: "bold", marginTop: "20px", color: "#36454F" }}>Marathon Revision - Advanced Auditing - Part 6</Typography>
                            <Typography sx={{ fontSize: "13px", color: "grey", marginTop: "20px" }}>Nov 16, 2021 • 2h 8m</Typography>
                            <Box sx={{ display: "flex" }}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={Teacher}
                                    sx={{ width: 50, height: 50, marginTop: "20px" }}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
                                    <Typography sx={{ fontWeight: "bold", color: "#36454F", marginTop: "15px" }}>Reshab Naskar</Typography>
                                    <Typography sx={{ display: "flex", fontSize: "11px", color: "grey" }}>4K followers • CA Final Group 1- New</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: "20px" }}>
                                <Typography sx={{ fontSize: "11.5px" }}>
                                    In this session, Reshab Sir will Revise Important Concepts for CA Final - Advanced Auditing Paper. This session will be beneficial for aspirants preparing for CA Final exams. The session will be delivered in English and notes for the same will be in English.
                                </Typography>
                            </Box>
                            {/* <Box sx={{ marginTop: "20px" }}>
                                <Stack direction="row" spacing={2} sx={{ p: 3, display: "flex", justifyContent: 'center' }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", color: '#36454F' }}>Certifications :</Typography>
                                    <Chip label="CA" color='info' />
                                    <Chip label="MBA" color='info' />
                                    <Chip label="BBT" color='info' />
                                    <Chip label="PHD in Biology" color='info' />
                                </Stack>
                            </Box> */}
                        </Card>
                        {/* Right profile */}
                        <Card sx={{ display: "flex", alignItems: "center", width: "40%", justifyContent: "center" }}>
                            <Card sx={{ height: "70%",width:"100%" }}>
                                <img style={{
                                    boxSizing: "border-box",
                                    objectFit: "cover",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%"
                                }} src={Teacher} alt="pic here" />
                            </Card>
                        </Card>
                    </Card>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "75%", flexDirection: "column" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold", color: '#36454F', justifyContent: "flex-start", p: 3 }}>More from CA Reshab Naskar :</Typography>
                        <TeacherCourses />
                    </Box>
                </Grid>
            </Card>
        </Card>
    );
}

export default TProfileOnCourse;
