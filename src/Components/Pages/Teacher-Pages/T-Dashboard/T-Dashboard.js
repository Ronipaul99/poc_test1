import { Box, Button, Card, Collapse, Divider, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import NavDrawer from '../../../Layout/Component/Nav&Drawer';
import CircularProgress from '@mui/material/CircularProgress';
// import Teacher from '../../../Images/Teacher.jfif'
import { useParams } from 'react-router-dom';
// import JsonData from "../../../Course/TeacherProfileData/TeacherData.json";
// import TeacherCourses from '../../Course/TeacherCourse/TeacherCourses';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { Icon } from '@iconify/react';
import styles from '../../../Layout/Style/T-DashboardStyle';
import TDrawer from '../../../Layout/Component/TeacherDrawer';

const TDashboard = () => {
  const { id } = useParams();

  function getById(JsonData, id) {

    return JsonData.filter(function (o) { return o.id == id });

  };


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
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

    <Card sx={styles.mainContainer}>
      <NavDrawer />
      <TDrawer/>
      <Card sx={styles.Card}>
        <DrawerHeader />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Box sx={styles.Box1}>
            <Box sx={styles.Box1Heading}>
              <Box sx={styles.Box1TeacherNameAndSupport}>
                <Typography sx={styles.TeacherName}>Hello, Reshab Naskar</Typography>
                <Box sx={styles.SubHeading}><Card sx={styles.SubCard}>#25</Card><Typography sx={styles.SubText}>in UPSC CSE</Typography></Box>
              </Box>
              <Box sx={styles.RightBox}>
                <Button variant='contained' ><SupportAgentIcon sx={styles.ButtonIcon} /><Typography sx={styles.ButtonText}>Live support</Typography></Button>
              </Box>
            </Box>
            <Card sx={styles.FirstCard}>
              {/* Upper Portion */}
              <Card sx={styles.CardUpperPart}>
                <Typography sx={styles.Text1}>Total hours tought this month</Typography>
                <Box sx={styles.Box2}><Typography sx={styles.Text2}>117.5</Typography><Typography sx={styles.Text3}>/150 hours</Typography></Box>
              </Card>
              {/* Lower Portion */}
              <Card sx={styles.CardLowerPart}>
                <Card sx={styles.CardDivision1}>
                  <CircularProgress variant="determinate" color="success" value={70} />
                  <Box sx={styles.Box3}>
                    <Typography sx={styles.Text4}>Live classes</Typography>
                    <Box sx={styles.Box4}><Typography sx={styles.Text5}>62.5</Typography><Typography sx={styles.Text6}>/80 hours</Typography></Box>
                  </Box>
                </Card>
                <Card sx={styles.CardDivision2}>
                  <CircularProgress variant="determinate" sx={styles.CircularProgress} value={45} />
                  <Box sx={styles.Box3}>
                    <Typography sx={styles.Text4}> Free live classes</Typography>
                    <Box sx={styles.Box4}><Typography sx={styles.Text5}>17.5</Typography><Typography sx={styles.Text6}>/40 hours</Typography></Box>
                  </Box>
                </Card>
                <Card sx={styles.CardDivision3}>
                  <CheckCircleIcon sx={styles.CheckIcon} />
                  <Box sx={styles.Box3}>
                    <Typography sx={styles.Text4}>Youtube</Typography>
                    <Box sx={styles.Box4}><Typography sx={styles.Text5}>117.5</Typography><Typography sx={styles.Text6}>/150 hours</Typography></Box>
                  </Box>
                </Card>
              </Card>
            </Card>
          </Box>

          {/* overview section */}

          <Box sx={styles.SecondCard}>
            <Box sx={styles.SecondCardUpperPart}>
              <Box sx={styles.Box5}>
                <Typography sx={styles.Text7}>Overview</Typography>
              </Box>
              <Box sx={styles.Box6}>
                <List sx={styles.List}>
                  <ListItemButton onClick={handleClick}>
                    <ListItemText primary="This week" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="This month" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Last month" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Box>
            </Box>

            {/* overview section */}
            <Box sx={{ display: 'flex', width: "100%", height: "100%", justifyContent: "space-between" }}>

              <Card sx={{ display: "flex", flexDirection: "column", width: "46%", p: 2, boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)" }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                  <Box sx={{ width: "80%" }}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>Views</Typography>
                  </Box>
                  <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <SignalCellularAltIcon fontSize='large' />
                  </Box>
                </Box>

                <Box sx={{ display: "flex", p: 1 }}>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>512,356</Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#00D100", marginTop: "9px" }}>+200 today</Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, alignItems: "center" }}><Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00D100", color: "white", mr: 1, fontSize: "12px", fontWeight: "bold", p: 0.2, width: "90px" }}>18% increase</Card><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}>from last week(322.2k)</Typography></Box>
                <Divider sx={{ margin: "15px 0" }} />
                <Box sx={{ display: "flex", height: "100%", width: "100%", }}>
                  <Box sx={{ width: "33%", p: 1 }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Live courses</Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "bold", p: 1 }}>448</Typography>
                  </Box>
                  <Box sx={{ width: "34%", p: 1 }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Free live courses</Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "bold", p: 1 }}>1.7k</Typography>
                  </Box>
                  <Box sx={{ width: "33%", p: 1 }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Free courses</Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "bold", p: 1 }}>816</Typography>
                  </Box>
                </Box>
              </Card>

              {/* division */}

              <Card sx={{ display: "flex", flexDirection: "column", width: "46%", p: 2, boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)" }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                  <Box sx={{ width: "80%" }}>


                    <Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>Watch minutes</Typography>
                  </Box>
                  <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <RemoveRedEyeIcon fontSize='large' sx={{ color: "red" }} />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", p: 1 }}>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>149,322</Typography>
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: '#00D100', marginTop: "9px" }}>+200 today</Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, alignItems: "center" }}><Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00D100", color: "white", mr: 1, fontSize: "12px", fontWeight: "bold", p: 0.2, width: "90px" }}>18% increase</Card><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}>from last week(128.8k)</Typography></Box>
                <Divider sx={{ margin: "15px 0" }} />
                <Box sx={{ display: "flex", height: "100%", width: "100%", }}>
                  <Box sx={{ width: "33%", p: 1 }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Live courses</Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "bold", p: 1 }}>4.1k</Typography>
                  </Box>
                  <Box sx={{ width: "34%", p: 1 }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Free live courses</Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "bold", p: 1 }}>8.1k</Typography>
                  </Box>
                  <Box sx={{ width: "33%", p: 1 }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Free courses</Typography>
                    <Typography sx={{ fontSize: "17px", fontWeight: "bold", p: 1 }}>11.2k</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>

            {/*Other section  */}

            <Box sx={{ display: 'flex', width: "100%", height: "100%", justifyContent: "space-between", marginTop: "20px" }}>

              <Card sx={{ display: "flex", flexDirection: "column", width: "46%", p: 2, boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)" }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                  <Box sx={{ width: "80%" }}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>Live learners in free live classes</Typography>
                  </Box>
                  <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <PersonIcon fontSize='large' sx={{ color: "#00D100" }} />
                  </Box>
                </Box>

                <Box sx={{ display: "flex", p: 1 }}>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>32,356</Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, alignItems: "center" }}><Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00D100", color: "white", mr: 1, fontSize: "12px", fontWeight: "bold", p: 0.2, width: "90px" }}>10% increase</Card><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}>from last week(28.8k)</Typography></Box>
              </Card>

              {/* division */}

              <Card sx={{ display: "flex", flexDirection: "column", width: "46%", p: 2, boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)" }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                  <Box sx={{ width: "80%" }}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>Referrals</Typography>
                  </Box>
                  <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Icon icon="mdi:gift" style={{ fontSize: "30px", color: "purple" }} />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", p: 1 }}>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>48</Typography>
                </Box>
                <Box sx={{ display: "flex", p: 1, alignItems: "center" }}><Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#00D100", color: "white", mr: 1, fontSize: "12px", fontWeight: "bold", p: 0.2, width: "90px" }}>17% increase</Card><Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}>from last week(34)</Typography></Box>
              </Card>
            </Box>

            {/* other section */}

            <Box sx={{ display: 'flex', width: "100%", height: "100%", justifyContent: "space-between", marginTop: "20px" }}>

              <Card sx={{ display: "flex", flexDirection: "column", width: "46%", p: 2, boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)" }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                  <Box sx={{ width: "80%" }}>
                    <Typography sx={{ fontSize: "15px", fontWeight: "bold", p: 1 }}>Alerts</Typography>
                    <Box sx={{ display: "flex", p: 1, flexDirection: "column" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>15</Typography>
                      <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "grey" }}>Last week(5)</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: "20%", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                    <ReportProblemOutlinedIcon fontSize='large' sx={{ color: "#F0E68C" }} />
                  </Box>
                </Box>
              </Card>

              {/* division */}

              <Card sx={{ display: "flex", flexDirection: "column", width: "46%", p: 2, boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)" }}>
                <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                  <Box sx={{ width: "80%" }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Wrong attire</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>No show</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Late appearance</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Classes rescheduled immediately</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>Future classes resheduled</Typography>

                  </Box>
                  <Box sx={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>5</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>2</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>3</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>5</Typography>
                    <Typography sx={{ fontSize: "15px", p: 1 }}>2</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>

          </Box>
        </Grid>
      </Card>
    </Card>
  );
}
export default TDashboard;