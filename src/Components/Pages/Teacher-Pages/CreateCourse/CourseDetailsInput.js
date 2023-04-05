import { Button, Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../../../Layout/Style/CourseInputStyle'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import dayjs from 'dayjs';
import InputAdornment from '@mui/material/InputAdornment';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import kp from "../../../Images/kp.png"
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import arr1 from "./CreatedCourseData/data.json"


const CourseDetailsInput = () => {

    // const [value, setValue] = React.useState(dayjs('2023-03-20'));
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


    // const today = dayjs();
    // const todayStartOfTheDay = today.startOf('day');

    // const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }



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
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Typography sx={styles.Text1}>Cteate course</Typography>
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
                                <TextField id="Title" {...register("Title", { required: true })} label="Title" size="small" /> <Box sx={styles.Textfield1}>

                                    <TextField id="NumberOfClasses" {...register("NumberOfClasses", { required: true })} label="Number of classes" onChange={handleChange1} value={Number} sx={{ width: '300px' }} size="small" />
                                    <TextField id="StartDate" {...register("StartDate", { required: true })} label="Start date" sx={{ width: '300px' }} size="small" />
                                </Box>
                                <Box sx={styles.Textfield1}>
                                    <TextField id="Subject" {...register("Subject", { required: true })} label="Subject" sx={{ width: '300px' }} size="small" />
                                    <TextField id="SubjectTopic" {...register("SubjectTopic", { required: true })} label="Subject topic" sx={{ width: '300px' }} size="small" />
                                </Box>
                                {arr.map((user) => (
                                    <Box key={user} sx={{ display: "flex", width: "100%", }}>
                                        {/* <DatePicker
                                                label="Choose date"
                                                value={value}
                                                onChange={(newValue) => setValue(newValue)}
                                                {...register("value", { required: true })}
                                            /> */}
                                        <TextField label="Choose date" id="Date" type="date"  {...register("Date", { required: true })} InputLabelProps={{
                                            shrink: true,
                                        }} size="small" />

                                        {/* <TimePicker id="StartTime" {...register("StartTime", { required: true })} label="Start from" defaultValue={todayStartOfTheDay} /> */}
                                        <TextField type='time'  {...register("StartTime", { required: true })} label="Start from" defaultValue="12:00" size="small" />
                                        <TextField type='time' {...register("EndTime", { required: true })} label="End at" defaultValue="12:00" size="small" />

                                        {/* <TimePicker id="EndTime" {...register("EndTime", { required: true })} label="End at" defaultValue={todayStartOfTheDay} /> */}
                                    </Box>
                                ))}
                                <TextField id="Keys" {...register("Keys", { required: true })} label="Keys" size="small" />
                                <TextField id="Description" {...register("Description", { required: true })} label="Description" multiline rows={3} size="small" />
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
                                {checked && <TextField id="Price" {...register("price")} label="Price" InputProps={{
                                    startAdornment: <InputAdornment position="start">INR</InputAdornment>,
                                }} />}
                            </Box>

                            <Button variant='contained' type='submit' sx={styles.Btn1}>Create</Button>
                        </Form>
                    </Card>

                </Box>
            </Box>
        </>
    )
}

export default CourseDetailsInput;