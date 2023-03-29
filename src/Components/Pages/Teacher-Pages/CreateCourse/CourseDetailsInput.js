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
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import kp from "../../../Images/kp.png"
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import arr1 from "./CreatedCourseData/data.json"


const CourseDetailsInput = () => {

    const [value, setValue] = React.useState(dayjs('2023-03-20'));
    const [ST, setST] = React.useState(dayjs(''));
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


    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();


    const formsubmit = (data) => {

        arr1.push(data)
        console.log(arr1)

    }

    return (
        <>
            {/* <NavDrawer /> */}
            {/* <TDrawer /> */}
            <Box sx={styles.mainContainer}>
                <Box sx={styles.Box2}>
                    <ArrowBackIcon fontSize='medium' onClick={goBack} />
                    <Box sx={styles.Boximg}>
                        <Box sx={styles.Box50L}>
                            <img style={{
                                boxSizing: "border-box",
                                objectFit: "cover",
                                overflow: "hidden",
                                height: "100%",
                                width: "100%"
                            }} src={kp} alt="pic here" />
                        </Box>
                    </Box>
                    <Card sx={styles.Box50R}>
                        <Typography sx={styles.Text1}>Cteate course</Typography>
                        <Form onSubmit={handleSubmit(formsubmit)}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%",
                                    '& .MuiTextField-root': { m: 2 },
                                }}
                                noValidate
                                autoComplete="off"
                            >


                                <TextField id="Title" label="Title" {...register("Title")} size="small" />
                                <Box sx={styles.Textfield1}>
                                    <TextField id="NumberOfClasses"  {...register("NumberOfClasses")} label="Number of classes" onChange={handleChange1} value={Number} sx={{ width: '300px' }} size="small" />
                                    <TextField id="StartDate" label="Start date"  {...register("StartDate")} sx={{ width: '300px' }} size="small" />
                                </Box>
                                <Box sx={styles.Textfield1}>
                                    <TextField id="Subject"  {...register("Subject")} label="Subject" sx={{ width: '300px' }} size="small" />
                                    <TextField id="SubjectTopic"  {...register("SubjectTopic")} label="Subject topic" sx={{ width: '300px' }} size="small" />
                                </Box>
                                {arr.map((user) => (
                                    <Box key={user} sx={{ display: "flex", width: "100%", }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label="Choose date"
                                                value={value}
                                                id="Date"
                                                onChange={(newValue) => setValue(newValue)}
                                                {...register("Date")}
                                            />

                                            <TimePicker label="Start from" id="StartTime" defaultValue={todayStartOfTheDay}  {...register("StartTime")} />


                                            <TimePicker label="End at" id="EndTime" defaultValue={todayStartOfTheDay}  {...register("EndTime")} />

                                        </LocalizationProvider>
                                    </Box>
                                ))}
                                <TextField id="Keys" label="Keys"  {...register("Keys")} size="small" />
                                <TextField id="Description" label="Description"  {...register("Description")} multiline rows={3} size="small" />
                                <Box sx={{ width: "100%", ml: 2 }}>
                                    <FormControlLabel
                                        label="Paid"
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={handleChange}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />} />
                                </Box>
                                {checked && <TextField id="Price" label="Price"  {...register("Price")} InputProps={{
                                    startAdornment: <InputAdornment position="start">INR</InputAdornment>,
                                }} />}

                            </Box>

                            <Button variant='contained' sx={{ width: "100%" }} type="submit">Create</Button>
                        </Form>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default CourseDetailsInput;