import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import NavDrawer from '../../Layout/Component/Nav&Drawer';
import { useParams } from 'react-router-dom';
import { Button, Card, Grid, Link, Typography, CardActions, IconButton, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Cdata, Data } from '../../Store/CourseData';
import JsonData from "../AllCoursesData/data.json";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Rating from '@mui/material/Rating';
import ReportIcon from '@mui/icons-material/Report';
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DescriptionIcon from '@mui/icons-material/Description';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import StarBorder from '@mui/icons-material/StarBorder';
import Classes from '../../Pages/Teacher-Pages/CreateCourse/Classes/Classes';
import { Tdata } from '../../Store/Time-slice';
import { U } from '../../Store/User';
import Meeting from '../../Pages/Teacher-Pages/CreateCourse/ZoomClass/Tmeeting';
import Smeeting from '../../Pages/Teacher-Pages/CreateCourse/ZoomClass/Smeeting';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function CourseDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const [Data1, setData1] = React.useState('');
    const [value, setValue] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    const handleClick5 = () => {
        setOpen5(!open5);
    };

    function getById(JsonData, id) {

        return JsonData.filter(function (o) { return o.id == id });

    };



    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // sending data to redux
    const a = Data1;
    dispatch(Data(a))


    // redux course details data
    const e = useSelector(Cdata);



    const e1 = useSelector(U);

    const Time = useSelector(Tdata);

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const string5 = (`${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`)
    const string6 = Time

    // console.log(string6 === string5)

    const string1 = "T"
    const string2 = e1

    const string3 = "S"
    const string4 = e1


    const [Meeting1, setMeeting1] = React.useState(false);


    return (
        <>
            {Meeting1 ? (
                string1 === string2 ? <Meeting /> : <Smeeting />
                // {string3 == string4 && <Smeeting />}
            )
                :
                <Card sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", }}>
                    {/* <NavDrawer /> */}

                    {/* Body */}
                    <Box>
                        {/* Courses  image*/}
                        <Card sx={{
                            width: "100%",
                            height: "40vh",
                            overflow: "hidden",
                            boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)"
                        }}>
                            <img style={{
                                boxSizing: "border-box",
                                objectFit: "cover",
                                height: "100%",
                                width: "100%"
                            }} src={getById(JsonData, `${id}`)[0].imgURL} alt="pic here" />
                        </Card>

                        {/* Course heading details box */}
                        <Box sx={{ p: 1, width: "100%" }} >
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography sx={{ p: 1 }}><Link underline='none'>Developement</Link><Button><KeyboardArrowRightIcon fontSize='small' /></Button><Link underline='none'>Web Developement</Link></Typography>

                                    <Typography variant='h4' sx={{ p: 1, fontWeight: 'bold' }} >{getById(JsonData, `${id}`)[0].Heading}</Typography>
                                    <Typography sx={{ p: 1 }}>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps</Typography>

                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 1 }}><Card sx={{ p: 1, backgroundColor: 'yellow', height: "30px", display: "flex", alignItems: "center", boxShadow: "0 35px 100px rgba(0, 0, 0, 0.1)" }}> Best seller</Card><Rating name="read-only" value={value} readOnly /></Box>

                                    <Typography sx={{ p: 1, fontWeight: "bold" }}>Created By : <Link>{getById(JsonData, `${id}`)[0].creatorName}</Link></Typography>
                                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 1 }}>< ReportIcon /> <Typography sx={{ p: 1 }}>Last Updated 1/2023</Typography><LanguageIcon sx={{ marginLeft: "15px" }} /><Typography sx={{ p: 1 }}> English</Typography></Box>

                                </Box>
                                <Divider sx={{ width: "58%" }} />
                            </Grid>
                        </Box>


                        {/* What you'll learn box */}




                        <Box sx={{ p: 1, width: "100%" }} >
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>What you'll learn</Typography>
                                    <Box sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex"
                                    }}>

                                        <Box sx={{ width: "50%" }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "flexStart",
                                                p: 1
                                            }}> <CheckIcon />
                                                <Typography sx={{ p: 1 }}>Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.</Typography>
                                            </Box></Box>
                                        <Box sx={{ width: "50%" }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "flexStart",
                                                p: 1
                                            }}> <CheckIcon />
                                                <Typography sx={{ p: 1 }}>Learn the latest technologies, including Javascript, React, Node and even Web3 development.</Typography>
                                            </Box></Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ width: "58%" }} />
                            </Grid>
                        </Box>



                        {/* Course include box */}


                        <Box sx={{ p: 1, width: "100%" }} >
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>This course includes:</Typography>
                                    <Box sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        p: 1
                                    }}>

                                        <Box sx={{ width: "50%" }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                p: 1
                                            }}><OndemandVideoIcon />
                                                <Typography sx={{ p: 1 }}>65 hours on-demand video</Typography></Box>
                                        </Box>
                                        <Box sx={{ width: "50%" }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                p: 1
                                            }}>
                                                <DescriptionIcon />
                                                <Typography sx={{ p: 1 }}>86 articles</Typography>
                                            </Box></Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ width: "58%" }} />
                            </Grid>
                        </Box>



                        {/* Course details box */}

                        <Box sx={{ p: 1, width: "100%" }} >
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Course content</Typography>
                                    <Box sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex"
                                    }}>



                                        <List
                                            sx={{ width: '100%', bgcolor: 'background.paper' }}
                                        // component="nav"
                                        // aria-labelledby="nested-list-subheader"
                                        // subheader={
                                        //     <ListSubheader component="div" id="nested-list-subheader">
                                        //         Nested List Items
                                        //     </ListSubheader>
                                        // }
                                        >


                                            <ListItemButton onClick={handleClick}>
                                                <ListItemText primary="Front-End Web Development" />
                                                {open ? <ExpandLess /> : <ExpandMoreIcon />}
                                            </ListItemButton>

                                            <Collapse in={open} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{ pl: 4 }}>
                                                        <ListItemIcon>
                                                            <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Stock" />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>

                                            <ListItemButton onClick={handleClick1}>
                                                <ListItemText primary="Introduction to HTML" />
                                                {open1 ? <ExpandLess /> : <ExpandMoreIcon />}
                                            </ListItemButton>

                                            <Collapse in={open1} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{ pl: 4 }}>
                                                        <ListItemIcon>
                                                            <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Starred" />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>



                                            <ListItemButton onClick={handleClick2}>
                                                <ListItemText primary="Inbox" />
                                                {open2 ? <ExpandLess /> : <ExpandMoreIcon />}
                                            </ListItemButton>

                                            <Collapse in={open2} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    <ListItemButton sx={{ pl: 4 }}>
                                                        <ListItemIcon>
                                                            <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Starred" />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>

                                        </List>




                                    </Box>
                                </Box>
                                <Divider sx={{ width: "58%" }} />
                            </Grid>
                        </Box>

                        {/* Class schedule */}
                        <Box sx={{ p: 1, width: "100%" }} >
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Class schedule</Typography>
                                    <List
                                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                                    // component="nav"
                                    // aria-labelledby="nested-list-subheader"
                                    // subheader={
                                    //     <ListSubheader component="div" id="nested-list-subheader">
                                    //         Nested List Items
                                    //     </ListSubheader>
                                    // }
                                    >


                                        <ListItemButton onClick={handleClick5}>
                                            <ListItemText primary="Class 1" />
                                            {open5 ? <ExpandLess /> : <ExpandMoreIcon />}
                                        </ListItemButton>

                                        <Collapse in={open5} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ display: "flex" }}><Typography>11/05/2023 - 12/05/2023</Typography>
                                                        {string3 === string4 && <Button variant='contained' disabled={!(string6 === string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Join Class</Typography>
                                                        </Button>}
                                                        {string1 === string2 && <Button variant='contained' disabled={!(string6 === string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Start Class</Typography>
                                                        </Button>}
                                                    </ListItemText>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>

                                        <ListItemButton onClick={handleClick4}>
                                            <ListItemText primary="Class 2" />
                                            {open4 ? <ExpandLess /> : <ExpandMoreIcon />}
                                        </ListItemButton>

                                        <Collapse in={open4} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ display: "flex" }}><Typography>11/05/2023 - 12/05/2023</Typography>
                                                        {string3 === string4 && <Button variant='contained' disabled={!(string6 === string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Join Class</Typography>
                                                        </Button>}
                                                        {string1 === string2 && <Button variant='contained' disabled={!(string6 === string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Start Class</Typography>
                                                        </Button>}
                                                    </ListItemText>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>



                                        <ListItemButton onClick={handleClick3}>
                                            <ListItemText primary="Class 3" />
                                            {open3 ? <ExpandLess /> : <ExpandMoreIcon />}
                                        </ListItemButton>

                                        <Collapse in={open3} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <ListItemIcon>
                                                        <StarBorder />
                                                    </ListItemIcon>
                                                    <ListItemText sx={{ display: "flex" }}><Typography>11/05/2023 - 12/05/2023</Typography>
                                                        {string3 === string4 && <Button variant='contained' disabled={!(string6 === string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Join Class</Typography>
                                                        </Button>}
                                                        {string1 === string2 && <Button variant='contained' disabled={!(string6 === string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Start Class</Typography>
                                                        </Button>}
                                                    </ListItemText>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>

                                    </List>
                                </Box>
                                <Divider sx={{ width: "58%" }} />
                            </Grid>
                        </Box>


                        {/* Requirement box */}
                        <Box sx={{ p: 1, width: "100%" }} >
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Requirements</Typography>


                                    <Typography sx={{ p: 2 }}>No programming experience needed - I'll teach you everything you need to know</Typography>
                                    <Typography sx={{ p: 2 }}>A computer with access to the internet</Typography>
                                    <Typography sx={{ p: 2 }}>No paid software required</Typography>
                                    <Typography sx={{ p: 2 }}>I'll walk you through, step-by-step how to get all the software installed and set up</Typography>

                                </Box>
                                <Divider sx={{ width: "58%" }} />
                            </Grid>
                        </Box>




                        {/* Course description */}

                        <Card sx={{ p: 1, width: "100%" }} >

                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Box sx={{ width: "55%", p: 1 }}>
                                    <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Description</Typography>


                                    <Typography sx={{ p: 2 }}>Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy!</Typography>
                                    <Typography sx={{ p: 2 }}> At 65+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery. Here's why:</Typography>



                                    <CardActions disableSpacing>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            {!expanded && <Typography>Know more</Typography>}
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>


                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph sx={{ fontWeight: "bold" }}>Details:</Typography>
                                            <Typography paragraph>
                                                The course is taught by the lead instructor at the App Brewery, London's leading in-person programming bootcamp.
                                            </Typography>
                                            <Typography paragraph>
                                                The course has been updated to be 2023 ready and you'll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.
                                            </Typography>
                                            <Typography paragraph>
                                                This course doesn't cut any corners, there are beautiful animated explanation videos and tens of real-world projects which you will get to build.
                                            </Typography>
                                            <Typography>
                                                The curriculum was developed over a period of four years, with comprehensive student testing and feedback.
                                            </Typography>
                                            <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Who this course is for</Typography>
                                            <List>If you want to learn to code through building fun and useful projects, then take this course.</List>
                                            <List>If you want to start your own startup by building your own websites and web apps.</List>
                                        </CardContent>
                                    </Collapse>
                                </Box>
                                <Divider sx={{ width: "58%" }} />
                                <Box sx={{ p: 1, width: "58%" }}>
                                    <Classes />
                                </Box>
                            </Grid>


                        </Card>

                        {/* <Card sx={{ p: 1, width: "55%" }} >
                        
                    </Card> */}
                    </Box>
                </Card>
                }
        </>
    );
};

