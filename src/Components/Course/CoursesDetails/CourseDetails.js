import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavDrawer from '../../Layout/Component/Nav&Drawer';
import { useParams } from 'react-router-dom';
import { Button, Card, Grid, Link, Typography, CardActions, IconButton } from '@mui/material';
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

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
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


    return (
        <>
            <Card sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", marginLeft: "60px" }}>
                <NavDrawer />

                {/* Body */}
                <Box>
                    <Card>
                        <Box component="main" sx={{ flexGrow: 1 }}>
                            <DrawerHeader />
                        </Box>
                        {/* Courses  image*/}
                        <Card sx={{
                            width: "1630px",
                            height: "40vh",
                            overflow: "hidden"
                        }}>
                            <img style={{
                                boxSizing: "border-box",
                                objectFit: "cover",
                                height: "100%",
                                width: "100%"
                            }} src={getById(JsonData, `${id}`)[0].imgURL} alt="pic here" />
                        </Card>
                    </Card>

                    {/* Course heading details box */}
                    <Card sx={{ p: 1, width: "100%" }} >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Card sx={{ width: "55%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", p: 1 }}>
                                <Typography sx={{ p: 1 }}><Link underline='none'>Developement</Link><Button><KeyboardArrowRightIcon fontSize='small' /></Button><Link underline='none'>Web Developement</Link></Typography>

                                <Typography variant='h4' sx={{ p: 1, fontWeight: 'bold' }} >{getById(JsonData, `${id}`)[0].Heading}</Typography>
                                <Typography sx={{ p: 1 }}>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps</Typography>

                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}><Box sx={{ marginLeft: "8px", p: 1, backgroundColor: 'yellow' }}> Best seller</Box><Rating name="read-only" value={value} readOnly /></Box>

                                <Typography sx={{ p: 1, fontWeight: "bold" }}>Created By : <Link>{getById(JsonData, `${id}`)[0].creatorName}</Link></Typography>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>< ReportIcon /> <Typography sx={{ p: 1 }}>Last Updated 1/2023</Typography><LanguageIcon sx={{ marginLeft: "15px" }} /><Typography sx={{ p: 1 }}> English</Typography></Box>
                                <Typography sx={{ p: 1 }}>{getById(JsonData, `${id}`)[0].name}</Typography>
                                <Typography sx={{ p: 1 }}>{getById(JsonData, `${id}`)[0].details}</Typography>
                            </Card>

                        </Grid>
                    </Card>


                    {/* What you'll learn box */}




                    <Card sx={{ p: 1, width: "100%" }} >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Card sx={{ width: "55%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", p: 1 }}>
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
                            </Card>
                        </Grid>
                    </Card>



                    {/* Course include box */}


                    <Card sx={{ p: 1, width: "100%" }} >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Card sx={{ width: "55%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", p: 1 }}>
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
                            </Card>
                        </Grid>
                    </Card>



                    {/* Course details box */}

                    <Card sx={{ p: 1, width: "100%" }} >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Card sx={{ width: "55%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", p: 1 }}>
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
                            </Card>
                        </Grid>
                    </Card>





                    {/* Requirement box */}
                    <Card sx={{ p: 1, width: "100%" }} >
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Card sx={{ width: "55%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", p: 1 }}>
                                <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Requirements</Typography>


                                <Typography sx={{ p: 2 }}>No programming experience needed - I'll teach you everything you need to know</Typography>
                                <Typography sx={{ p: 2 }}>A computer with access to the internet</Typography>
                                <Typography sx={{ p: 2 }}>No paid software required</Typography>
                                <Typography sx={{ p: 2 }}>I'll walk you through, step-by-step how to get all the software installed and set up</Typography>

                            </Card>
                        </Grid>
                    </Card>




                    {/* Course description */}

                    <Card sx={{ p: 1, width: "100%" }} >

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Card sx={{ width: "55%", boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", p: 1 }}>
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
                                        <Typography paragraph>Details:</Typography>
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
                                        <Typography variant='h5' sx={{ fontWeight: "bold", p: 3 }}>Who this course is for:</Typography>
                                        <List>If you want to learn to code through building fun and useful projects, then take this course.</List>
                                        <List>If you want to start your own startup by building your own websites and web apps.</List>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>





                    </Card>
                </Box>
            </Card>
        </>
    );
};

