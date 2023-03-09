import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NavDrawer from '../../Layout/Component/Nav&Drawer'
import TDrawer from '../../Layout/Component/TeacherDrawer'
import styles from '../../Layout/Style/CourseInputStyle'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const CourseDetailsInput = () => {

    const [value, setValue] = React.useState(dayjs('2023-03-9'));
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <>
            <NavDrawer />
            <TDrawer />
            <Box sx={styles.mainContainer}>
                <Card sx={styles.Card2}>
                    <Box sx={styles.Box1}>
                        <Typography sx={styles.Text1}>Fill the reqired data to cteate a course</Typography>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="NumberOfCourse" label="Number of course" variant="standard" />
                            <TextField id="CourseName" label="Course name" variant="standard" />
                            <TextField id="CourseDetails" label="Course details" multiline maxRows={4} variant="standard" />
                            <br />
                            <Typography sx={styles.Text2}>Schedule</Typography>
                            <br />
                            <Box sx={styles.Box2}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            label="Choose date"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Box>
                            <TextField id="Start from" label="Start from" variant="standard" />
                            <TextField id="End at" label="End at" variant="standard" />
                            <FormControlLabel
                                label="Paid"
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />} />
                            <br />
                            {checked && <TextField id="Price" label="Price" InputProps={{
                                startAdornment: <InputAdornment position="start">INR</InputAdornment>,
                            }} variant="standard" />}

                        </Box>
                        <Button variant='contained'>Create</Button>
                    </Box>
                </Card>


            </Box>
        </>
    )
}

export default CourseDetailsInput;