import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import NavDrawer from '../../Layout/Component/Nav&Drawer';
import CircularProgress from '@mui/material/CircularProgress';
// import Teacher from '../../../Images/Teacher.jfif'
import { useParams } from 'react-router-dom';
// import JsonData from "../../../Course/TeacherProfileData/TeacherData.json";
import TeacherCourses from '../../Course/TeacherCourse/TeacherCourses';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const TDashboard = () => {
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
      <Card sx={{ display: "flex", flexDirection: "column", width: "100%", height: "110vh" }}>
        <DrawerHeader />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <Box sx={{ width: "70%", display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "30", fontWeight: "bold", p: 1 }}>Hello, Reshab Naskar</Typography>
                <Box sx={{display:"flex",p:1}}><Card sx={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"blue",height:"25px",width:"35px",color:"white",mr:1}}>#25</Card><Typography sx={{fontSize:"15"}}>in UPSC CSE</Typography></Box>
              </Box>
              <Box sx={{ width: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button variant='contained' ><SupportAgentIcon fontSize='small' sx={{ p: 1 }} /><Typography sx={{ fontSize: "15px", fontWeight: "bold", color: "white" }}>Live support</Typography></Button>
              </Box>
            </Box>
            <Card sx={{ display: "flex", flexDirection: "column", width: "100%", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}>
              {/* Upper Portion */}
              <Card sx={{ width: "100%", p: 3, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Total hours tought this month</Typography>
                <Box sx={{ display: "flex" }}><Typography sx={{ fontSize: "30px", fontWeight: "bold", marginTop: "15px" }}>117.5</Typography><Typography sx={{ marginTop: "35px", fontSize: "13px" }}>/150 hours</Typography></Box>
              </Card>
              {/* Lower Portion */}
              <Card sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", height: "50%" }}>
                <Card sx={{ width: "33%", display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
                  <CircularProgress variant="determinate" color="success" value={70} />
                  <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Live classes</Typography>
                    <Box sx={{ display: "flex" }}><Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>62.5</Typography><Typography sx={{ fontSize: "12px", marginTop: "9px" }}>/80 hours</Typography></Box>
                  </Box>
                </Card>
                <Card sx={{ width: "34%", display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
                  <CircularProgress variant="determinate" sx={{ color: "orange" }} value={45} />
                  <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}> Free live classes</Typography>
                    <Box sx={{ display: "flex" }}><Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>17.5</Typography><Typography sx={{ fontSize: "12px", marginTop: "9px" }}>/40 hours</Typography></Box>
                  </Box>
                </Card>
                <Card sx={{ width: "33%", display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
                  <CircularProgress variant="determinate" sx={{ color: "blue" }} value={78} />
                  <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Youtube</Typography>
                    <Box sx={{ display: "flex" }}><Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>117.5</Typography><Typography sx={{ fontSize: "12px", marginTop: "9px" }}>/150 hours</Typography></Box>
                  </Box>
                </Card>
              </Card>
            </Card>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", width: "60%", flexDirection: "column" }}>
            <Typography variant='h6' sx={{ fontWeight: "bold", color: '#36454F', justifyContent: "flex-start", p: 3 }}>More from CA Reshab Naskar :</Typography>
            <TeacherCourses />
          </Box>
        </Grid>
      </Card>
    </Card>
  );
}

export default TDashboard;
