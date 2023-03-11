import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NavDrawer from '../../../Layout/Component/Nav&Drawer'
import TDrawer from '../../../Layout/Component/TeacherDrawer'
import styles from '../../../Layout/Style/CourseInputStyle'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import dayjs from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const CourseDetailsInput = () => {

    const [value, setValue] = React.useState(dayjs('2023-03-20'));
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const today = dayjs();
    const todayStartOfTheDay = today.startOf('day');


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
                            <TextField id="NumberOfCourse" label="Number of course" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        < PinOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }} variant="standard" />
                            <TextField id="CourseName" label="Course name" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreateOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }} variant="standard" />
                            <TextField id="CourseDetails" label="Course details" multiline maxRows={4}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <InfoOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }} variant="standard" />
                            <Typography sx={styles.Text2}>Schedule</Typography>
                            <br />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Choose date"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                />

                                <TimePicker label="Start from" defaultValue={todayStartOfTheDay} />


                                <TimePicker label="End at" defaultValue={todayStartOfTheDay} />

                            </LocalizationProvider>
                            <br />
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
                            }} />}
                        </Box>
                        <Button variant='contained'>Create</Button>
                    </Box>
                </Card>
            </Box>
        </>
    )
}

export default CourseDetailsInput;