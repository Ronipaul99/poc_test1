import { Button, Card, Divider, TextField, Typography } from '@mui/material'
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
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Course overview', 'Course content', 'Classes', 'Course requirement'];

const CourseDetailsInput = () => {

    // const [value, setValue] = React.useState(dayjs('2023-03-20'));
    const [Number, setNumber] = React.useState([1]);
    const [Number1, setNumber1] = React.useState([1]);
    const [Number2, setNumber2] = React.useState([1]);
    const [Number3, setNumber3] = React.useState([1]);

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    var arr = [];
    for (let i = 1; i <= parseFloat(Number); i++) {
        arr.push(i)
    };
    const handleChange1 = event => {
        setNumber(event.target.value);
    };



    var arr2 = [];
    for (let i = 1; i <= parseFloat(Number1); i++) {
        arr2.push(i)
    };
    const handleChange2 = event => {
        setNumber1(event.target.value);
    };

    var arr3 = [];
    for (let i = 1; i <= parseFloat(Number2); i++) {
        arr3.push(i)
    };
    const handleChange3 = event => {
        setNumber2(event.target.value);
    };



    var arr4 = [];
    for (let i = 1; i <= parseFloat(Number3); i++) {
        arr4.push(i)
    };
    const handleChange4 = event => {
        setNumber3(event.target.value);
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



    // 
    // 
    // 
    // 
    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        window.location.reload();
    };

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


                    {/* Right side box */}
                    <Card sx={styles.Box50R}>
                        <Box sx={{ width: '100%', height: "630px" }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Form style={{ height: "630px" }} onSubmit={handleSubmit(onSubmit)}>
                                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <Box sx={{ width: "100%", height: "90%", overflow: "auto" }}>

                                                {/* Step 1 */}
                                                {activeStep === 0 &&
                                                    // <Form onSubmit={handleSubmit(onSubmit)}>
                                                    <>
                                                        <Typography sx={styles.Text1}>Course overview</Typography>
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
                                                            <TextField id="Title" {...register("Title", { required: true })} label="Title" size="small" />

                                                            <Box sx={styles.Textfield1}>
                                                                <TextField id="Language" {...register("Language", { required: true })} label="Language" sx={{ width: '100%' }} size="small" />
                                                            </Box>
                                                            <TextField id="Keys" {...register("Keys", { required: true })} label="Keys" size="small" />
                                                            <TextField id="Description" {...register("Description", { required: true })} label="Description" multiline rows={3} size="small" />
                                                            <Box sx={{ width: "100%" }}>
                                                                <FormControlLabel
                                                                    label="Paid"
                                                                    control={
                                                                        <Checkbox
                                                                            checked={checked}
                                                                            onChange={handleChange}
                                                                            sx={{ ml: 2 }}
                                                                            inputProps={{ 'aria-label': 'controlled' }}
                                                                        />} />
                                                            </Box>
                                                            {checked && <TextField id="Price" {...register("price")} label="Price" InputProps={{
                                                                startAdornment: <InputAdornment position="start">INR</InputAdornment>,
                                                            }} />}
                                                        </Box>
                                                    </>
                                                    //</Form> 
                                                }



                                                {/* Step 2 */}
                                                {activeStep === 1 &&
                                                    // <Form onSubmit={handleSubmit(onSubmit)}>
                                                    <>
                                                        <Typography sx={styles.Text1}>Area of learning</Typography>
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
                                                            <Box sx={styles.Textfield1}>
                                                                <TextField id="Numberofinputs" label="Number of inputs" sx={{ width: "100%" }} onChange={handleChange1} value={Number} size="small" />
                                                            </Box>
                                                            {arr.map((user) => (
                                                                <Box key={user} sx={{ display: "flex", width: "100%", }}>
                                                                    <TextField  {...register("AreaofLearning", { required: true })} label="Area of learning" size="small" sx={{ width: "100%" }} />
                                                                </Box>
                                                            ))}

                                                            <Divider />

                                                            <Typography sx={styles.Text2}>Course content</Typography>
                                                            <Box sx={styles.Textfield1}>
                                                                <TextField id="Numberofinputs1" label="Number of inputs" sx={{ width: "100%" }} onChange={handleChange2} value={Number1} size="small" />
                                                            </Box>
                                                            {arr2.map((user1) => (
                                                                <Box key={user1} sx={{ display: "flex", width: "100%", }}>
                                                                    <TextField id="CourseContent" {...register("Course content", { required: true })} label="Couse content" sx={{ width: '100%' }} size="small" />
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                        {/* </Form> */}
                                                    </>
                                                }

                                                {/* Steps 3 */}
                                                {activeStep === 2 &&
                                                    // <Form onSubmit={handleSubmit(onSubmit)}>
                                                    <>
                                                        <Typography sx={styles.Text1}>Classes</Typography>
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
                                                            <Box sx={styles.Textfield1}>
                                                                <TextField id="Numberoclasses" label="Number of classes"  {...register("NumberOfClasses", { required: true })} onChange={handleChange3} value={Number2} sx={{ width: '100%' }} size="small" />
                                                            </Box>

                                                            <Divider />

                                                            <Typography sx={styles.Text2}>Schedule</Typography>
                                                            {arr3.map((user) => (
                                                                <Box key={user} sx={{ display: "flex", width: "100%", }}>
                                                                    <TextField label="Choose date" id="Date" type="date"  {...register("Date", { required: true })} InputLabelProps={{
                                                                        shrink: true,
                                                                    }} size="small" />
                                                                    <TextField type='time'  {...register("StartTime", { required: true })} label="Start from" defaultValue="12:00" size="small" />
                                                                    <TextField type='time' {...register("EndTime", { required: true })} label="End at" defaultValue="12:00" size="small" />
                                                                </Box>
                                                            ))}

                                                        </Box>
                                                    </>
                                                    // </Form> 
                                                }


                                                {/* Step 4 */}

                                                {activeStep === 3 &&
                                                    // <Form onSubmit={handleSubmit(onSubmit)}>
                                                    <>
                                                        <Typography sx={styles.Text1}>Course requirement</Typography>
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

                                                            <Box sx={styles.Textfield1}>
                                                                <TextField id="Numberofinputs" label="Number of classes" onChange={handleChange4} value={Number3} sx={{ width: '100%' }} size="small" />
                                                            </Box>
                                                            {arr4.map((user) => (
                                                                <Box key={user} sx={{ display: "flex", width: "100%", }}>
                                                                    <TextField label="Requirement" id='Requirement' {...register("Requirement", { required: true })} sx={{ width: "100%" }} size="small" />
                                                                </Box>
                                                            ))}

                                                        </Box>
                                                    </>
                                                    // </Form>
                                                }


                                            </Box>


                                            <Box sx={{ width: "100%", height: "10%", justifyContent: "flex-end", alignItems: "flex-end", display: "flex" }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Button
                                                        color="inherit"
                                                        disabled={activeStep === 0}
                                                        onClick={handleBack}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                    <Box sx={{ flex: '1 1 auto' }} />

                                                    {activeStep === steps.length - 1 ? <>
                                                        <Button onClick={handleNext}> Exit</Button>
                                                        <Button type='submit' variant='contained'>Create</Button>
                                                    </>
                                                        :
                                                        <Button onClick={handleNext}>
                                                            Next
                                                        </Button>}

                                                </Box>
                                            </Box>
                                        </Box>

                                    </Form>
                                </React.Fragment>
                            )}
                        </Box>
                    </Card>

                </Box>
            </Box>
        </>
    )
}

export default CourseDetailsInput;





{/* <Form onSubmit={handleSubmit(onSubmit)}>
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
                                            /> 
                                        <TextField label="Choose date" id="Date" type="date"  {...register("Date", { required: true })} InputLabelProps={{
                                            shrink: true,
                                        }} size="small" /> */}

                        //                 {/* <TimePicker id="StartTime" {...register("StartTime", { required: true })} label="Start from" defaultValue={todayStartOfTheDay} /> */}
                        //                 <TextField type='time'  {...register("StartTime", { required: true })} label="Start from" defaultValue="12:00" size="small" />
                        //                 <TextField type='time' {...register("EndTime", { required: true })} label="End at" defaultValue="12:00" size="small" />

                        //                 {/* <TimePicker id="EndTime" {...register("EndTime", { required: true })} label="End at" defaultValue={todayStartOfTheDay} /> */}
                        //             </Box>
                        //         ))}
                        //          <TextField id="Keys" {...register("Keys", { required: true })} label="Keys" size="small" />
                        //         <TextField id="Description" {...register("Description", { required: true })} label="Description" multiline rows={3} size="small" />
                        //      <Box sx={{ width: "100%", ml: 2 }}>
                        //             <FormControlLabel
                        //                 label="Paid"
                        //                 control={
                        //                 <Checkbox
                        //                          checked={checked}
                        //                         onChange={handleChange}
                        //                        inputProps={{ 'aria-label': 'controlled' }}
                        //                     />} />
                        //         </Box>
                        //         {checked && <TextField id="Price" {...register("price")} label="Price" InputProps={{
                        //             startAdornment: <InputAdornment position="start">INR</InputAdornment>,
                        //        }} />}
                        //     </Box>

                        //      <Button variant='contained' type='submit' sx={styles.Btn1}>Create</Button>
                        //  </Form> 