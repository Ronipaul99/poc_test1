import { Box, Card } from '@mui/material'
import React from 'react'
import NavDrawer from '../../../Layout/Component/Nav&Drawer'
import TDrawer from '../../../Layout/Component/TeacherDrawer'
import styles from '../../../Layout/Style/ScheduleStyle'

const Schedule = () => {
  return (
    <Box sx={styles.mainContainer}>
        <Card sx={styles.Card}>
            <NavDrawer/>
            <TDrawer/>



        </Card>
    </Box>
  )
}

export default Schedule;
