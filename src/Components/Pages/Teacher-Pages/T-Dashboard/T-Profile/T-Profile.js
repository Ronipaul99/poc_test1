import { Avatar, Box, Button, Card, Grid, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import NavDrawer from '../../../../Layout/Component/Nav&Drawer';
import Teacher from '../../../../Images/Teacher.jfif'
import { useParams } from 'react-router-dom';
// import JsonData from "../../../Course/TeacherProfileData/TeacherData.json";
import TeacherCourses from '../../../../Course/TeacherCourse/TeacherCourses';
import AdjustIcon from '@mui/icons-material/Adjust';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TDrawer from '../../../../Layout/Component/TeacherDrawer';

const TProfile = () => {
    const { id } = useParams();

    function getById(JsonData, id) {

        return JsonData.filter(function (o) { return o.id == id });

    };


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(3, 0),
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

        <Card >
            {/* <NavDrawer /> */}
            {/* <TDrawer/> */}
            <Card sx={{ display: "flex", flexDirection: "column", width: "100%", height: "110vh", backgroundSize: 'cover', backgroundImage: "url('https://img.freepik.com/free-photo/blue-abstract-gradient-wave-wallpaper_53876-108364.jpg?w=1380&t=st=1677220877~exp=1677221477~hmac=eef7e55022d564946d00ccac883ea670b3eba52e00e6db06f520b9126d9a4546')", backgroundRepeat: "no-repeat" }}>
                <DrawerHeader />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Card sx={{ display: "flex", width: "72%", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)", p: 1, height: "230px", backgroundSize: 'cover', backgroundImage: "url('https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?w=1380&t=st=1677221017~exp=1677221617~hmac=aeb9147597eb254fcaee0bf96a9a6636c9063528840ceef186f46c98cc44ac97')", backgroundRepeat: "no-repeat" }}>
                        <Box sx={{ display: "flex", alignItems: "center", width: "100%", flexDirection: "column" }}>
                            <Box sx={{ display: "flex", width: "100%", height: "80%" }}>
                                <Box sx={{ display: "flex", width: "70%", marginLeft: "40px" }}>
                                    <Box sx={{ display: "flex" }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={Teacher}
                                            sx={{ width: 120, height: 120, marginTop: "20px" }}
                                        />
                                        <Box sx={{ display: "flex", flexDirection: "column", p: 1, marginTop: "15px" }}>
                                            <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#fff", p: 0.5 }}>Reshab Naskar</Typography>
                                            <Typography sx={{ display: "flex", fontSize: "12px", color: "#fff", fontWeight: 600, p: 0.5 }}><Typography sx={{ fontSize: "12px", color: "#fff", fontWeight: 600, margin: "0px 0px 12px", marginRight: "5px" }}>Rising Star</Typography> in IIT JEE</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#fff", fontWeight: "normal", p: 0.5 }}>youtuber | educator | motivator busy in spreading knowledge</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ width: "30%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                                    <Button variant='contained' color="success" sx={{ width: "176px", height: "48px" }}><Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#FFFFFF" }}>Follow</Typography></Button>
                                </Box>
                            </Box>


                            <Box sx={{ height: "20%", display: "flex", p: 1, justifyContent: "flex-start", width: "100%", marginLeft: "80px" }}>
                                <Card sx={{ p: 1, display: "flex", alignItems: "center", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}> <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#3C4852" }}>500k</Typography><Typography sx={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}> Watch mins</Typography></Card>
                                <Card sx={{ p: 1, marginLeft: "10px", display: "flex", alignItems: "center", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}><Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#3C4852" }}>31K</Typography><Typography sx={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}> Watch mins (last 30 days)</Typography></Card>
                                <Card sx={{ p: 1, marginLeft: "10px", display: "flex", alignItems: "center", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}><Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#3C4852" }}></Typography><Typography sx={{ fontSize: "12px", fontWeight: "normal", marginLeft: "5px" }}>3K Followers</Typography></Card>
                                {/* <Card sx={{ p: 1, marginLeft: "10px", display: "flex", alignItems: "center", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}></Card> */}
                            </Box>
                        </Box>
                    </Card>


                    <Box sx={{ width: "75%", flexDirection: "row" }}>
                        <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
                            <Box sx={{ width: "80%" }}>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography sx={{ fontWeight: 700, color: '#36454F', justifyContent: "flex-start", p: 3, fontSize: "20px" }}>Free Classes</Typography>
                                    <TeacherCourses />
                                </Box>
                            </Box>
                            <Box sx={{ width: "20%" }}>
                                <Box sx={{ marginLeft: "20px" }}>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, marginTop: "50px", color: "#3C4852", marginLeft: "25px" }}>Educator highlights</Typography>
                                    <ListItem><AdjustIcon fontSize='small' sx={{ p: 1 }} /><Typography sx={{ fontSize: "14px", fontWeight: "normal", color: "#3C4852" }}>Worked at CSI</Typography></ListItem>
                                    <ListItem><SchoolOutlinedIcon fontSize='small' sx={{ p: 1 }} /><Typography sx={{ fontSize: "14px", fontWeight: "normal", color: "#3C4852" }}>Studied at College of commerce arts and science</Typography></ListItem>
                                    <ListItem><AdjustIcon fontSize='small' sx={{ p: 1 }} /><Typography sx={{ fontSize: "14px", fontWeight: "normal", color: "#3C4852" }}>50lakh views on youtube</Typography></ListItem>
                                    <ListItem><LocationOnOutlinedIcon fontSize='small' sx={{ p: 1 }} /><Typography sx={{ fontSize: "14px", fontWeight: "normal", color: "#3C4852" }}>Lives in Kolkata, West Bengal, India</Typography></ListItem>
                                    <ListItem><LanguageOutlinedIcon fontSize='small' sx={{ p: 1 }} /><Typography sx={{ fontSize: "14px", fontWeight: "normal", color: "#3C4852" }}>Knows Hinglish, Hindi, Bengali and English</Typography></ListItem>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Card>
        </Card >
    );
}

export default TProfile
