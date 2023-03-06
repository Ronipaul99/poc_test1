import { Card, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NavDrawer from '../../Layout/Component/Nav&Drawer'
import TDrawer from '../../Layout/Component/TeacherDrawer'
import styles from '../../Layout/Style/CourseInputStyle'

const CourseDetailsInput = () => {



    const Unit = [
        {
            value: 'Free',
            label: 'Free',
        },
        {
            value: 'Paid',
            label: 'Paid',
        }
    ];


    return (
        <>
            <NavDrawer />
            <TDrawer />
            <Box sx={styles.mainContainer}>
                <Card sx={styles.Card2}>
                    <Box sx={styles.Box1}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="CourseName" label="Course name" variant="standard" />
                            <TextField id="CourseDetails" label="Course details" variant="standard" />
                            <TextField id="NumberOfCourse" label="Number of course" variant="standard" />
                            <TextField id="Schedule" label="Schedule" variant="standard" />
                            <TextField
                                id="Unit"
                                select
                                label="Course type"
                                defaultValue="Free"
                                variant="standard"
                            >
                                {Unit.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {Unit.value === 'Paid' && <TextField id="Price" label="Price" variant="standard" />}


                        </Box>
                    </Box>
                </Card>


            </Box>
        </>
    )
}

export default CourseDetailsInput
