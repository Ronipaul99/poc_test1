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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const CourseDetailsInput = () => {

    const [value, setValue] = React.useState(dayjs('2023-03-20'));
    const [Number, setNumber] = React.useState([1]);

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    var arr = [];

    for (var i = 1; i <= parseFloat(Number); i++) {
        arr.push(i)
    };
    const handleChange1 = event => {
        setNumber(event.target.value);
    };


    const today = dayjs();
    const todayStartOfTheDay = today.startOf('day');


    return (
        <>
            <NavDrawer />
            <TDrawer />
            <Box sx={styles.mainContainer}>
                <Card sx={styles.Card2}>
                    <Typography sx={styles.Text1}>Cteate course</Typography>
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            '& .MuiTextField-root': { m: 2 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="Title" label="Title" size="small" />
                        <Box sx={styles.Textfield1}>
                            <TextField id="NumberOfClasses" label="Number of classes" onChange={handleChange1} value={Number} sx={{ width: '200px' }} size="small" />
                            <TextField id="StartDate" label="Start date" sx={{ width: '200px' }} size="small" />
                        </Box>
                        <Box sx={styles.Textfield1}>
                            <TextField id="Subject" label="Subject" sx={{ width: '200px' }} size="small" />
                            <TextField id="SubjectTopic" label="Subject topic" sx={{ width: '200px' }} size="small" />
                        </Box>
                        <Typography sx={styles.Text2}>Schedule</Typography>
                        <br />

                        {arr.map((user) => (
                            <Box key={user} sx={{ display: "flex", width: "100%", }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Choose date"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />

                                    <TimePicker label="Start from" defaultValue={todayStartOfTheDay} />


                                    <TimePicker label="End at" defaultValue={todayStartOfTheDay} />

                                </LocalizationProvider>
                            </Box>
                        ))}
                        <TextField id="Keys" label="Keys" size="small" />
                        <TextField id="Description" label="Description" multiline rows={4} size="small" />
                        <br />
                        <Box sx={{ width: "100%", p: 2 }}>
                            <FormControlLabel
                                label="Paid"
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />} />
                        </Box>
                        <br />
                        {checked && <TextField id="Price" label="Price" InputProps={{
                            startAdornment: <InputAdornment position="start">INR</InputAdornment>,
                        }} />}
                    </Box>
                    <Button variant='contained'>Create</Button>
                </Card>
            </Box>
        </>
    )
}

export default CourseDetailsInput;