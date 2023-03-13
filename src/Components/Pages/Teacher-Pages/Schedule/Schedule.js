import { Box } from '@mui/material';
import React from 'react'
import NavDrawer from '../../../Layout/Component/Nav&Drawer';
import TDrawer from '../../../Layout/Component/TeacherDrawer';
import styles from '../../../Layout/Style/ScheduleStyle';

const Schedule = () => {
    return (
        <>
            <NavDrawer />
            <TDrawer />
            <Box sx={styles.mainContainer}>


            </Box>
        </>
    )
};

export default Schedule;
