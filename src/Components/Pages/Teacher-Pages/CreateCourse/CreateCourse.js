import { Box, Button, Card, Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import NavDrawer from '../../../Layout/Component/Nav&Drawer'
import TDrawer from '../../../Layout/Component/TeacherDrawer'
import styles from '../../../Layout/Style/CreateCourseStyle'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TeacherCourses from '../../../Course/TeacherCourse/TeacherCourses'
import { useNavigate } from 'react-router-dom'
import Classes from './Classes/Classes'

const CreateCourse = () => {
    const navigate =useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const goto= () => {
        navigate("/CourseInput")
    }

    return (
        <>
            {/* <NavDrawer /> */}
            {/* <TDrawer /> */}
            <Box sx={styles.mainContainer}>
                <Card sx={styles.Card}>
                    <Box sx={styles.mainBox}>
                        <Box sx={styles.Box1}>
                            <Typography sx={styles.Text}>Create courses</Typography>
                        </Box>
                        <Box sx={styles.Box2}>
                            <Button variant='contained' sx={styles.Button} onClick={goto}><Typography sx={styles.Text2}>Create new</Typography></Button>
                        </Box>
                    </Box>
                </Card>
                <Box sx={styles.SecondBox}>
                    <List sx={styles.List}>
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="All courses" />
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
                <Box sx={styles.ThirdBox}>
                    <Classes />
                </Box>
            </Box>
        </>
    )
}

export default CreateCourse
