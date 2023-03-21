import React, { useState, useEffect } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { GoogleLogin } from 'react-google-login';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from 'react-hook-form';
import { Card, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import { green, red } from '@mui/material/colors';
import P1 from '../Images/P1.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import P3 from '../Images/P3.webp';
import { useDispatch } from 'react-redux';
import { Type } from '../Store/User';
import userData from '../../DummyData/user'
import { Type1 } from '../Store/U-Data';
import { authActions } from '../Store/Auth';

// alert function for registration
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Auth() {
    const navigate = useNavigate();
    // useForm usage for login page
    const { register, handleSubmit, formState: { errors } } = useForm();

    // login page error state setting
    const [error, setError] = useState("");
    // dispatch
    const dispatch = useDispatch();

    // login page return function
    const Login = () => {
        return (
            <>
                <Box>
                    <Typography sx={{ letterSpacing: "1px" }} variant='h5'>Log in here.</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#898989" }}>Welcome Back! login with your data that you entered during registration.</Typography>
                </Box>
                <Box>
                    <Typography sx={{ textAlign: "center", fontSize: "25px", letterSpacing: "1px" }}>Login with</Typography>
                    <Divider sx={{
                        width: "140px",
                        marginLeft: "169px"
                    }} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 2,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <GoogleLogin
                        clientId={clientId}
                        render={renderProps => (
                            <GoogleIcon fontSize="large" sx={{ marginRight: "5px", cursor: "pointer" }} onClick={renderProps.onClick} />)}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                    />

                    <FacebookLogin
                        render={renderProps => (
                            <FacebookOutlinedIcon fontSize="large" sx={{ marginRight: "5px", cursor: "pointer" }} onClick={renderProps.onClick} />)}
                        appId="2225133544348410"
                        // autoLoad={init}
                        fields="name,email,picture"
                        scope="public_profile,email,user_friends"
                    // callback={responseFacebook}
                    />

                    {/* <AppleLogin
                                clientId="YOUR_CLIENT_ID"
                                redirectURI="https://"
                                usePopup={true}
                                scope="email name"
                                responseMode="query"
                                render={renderProps => ( */}
                    <AppleIcon fontSize="large"
                    // onClick={renderProps.onClick}
                    >
                        Continue with Apple
                    </AppleIcon>
                    {/* )}
                            /> */}
                </Box>
                <Divider />
                <Box sx={{ marginTop: "20px", textAlign: "center" }}>
                    <Typography>or</Typography>
                </Box>
                <Form onSubmit={handleSubmit(onSubmitForLoginPage)}>
                    <Box spacing={2} sx={{ textAlign: "center", marginTop: "20px" }}>

                        {error && <Typography sx={{ fontSize: "12px" }} color="red">{error}</Typography>}
                        {errors.email && !error && <Typography sx={{ fontSize: "12px" }} color="red">Please check the Email</Typography>}
                        <Grid spacing={2} sx={{ width: "350px" }}>
                            <Box sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                />
                            </Box>
                        </Grid>
                        <Grid sx={{ width: "350px" }}>
                            <Box sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    {...register("password")}
                                />
                            </Box>
                        </Grid>

                        <Box>
                            <Button sx={{ marginTop: "20px" }} variant='contained' type="submit">Login</Button>
                        </Box>
                    </Box>
                </Form>
                <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                    <Typography>Don't have an account?<Link underline="none" sx={{ cursor: "pointer" }} onClick={onclick}> Register</Link></Typography>
                </Box>
            </>
        );
    };

    // registration page return function

    const Registration = () => {
        return (
            <>
                <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={onclick2} />
                <Box sx={{ textAlign: "center" }}>
                    <Box>
                        <Typography sx={{ marginBottom: "20px", color: "GrayText" }} variant="h4">REGISTER HERE</Typography>
                    </Box>

                    <FormControl sx={{ textAlign: "center" }}>
                        <FormLabel id="demo-radio-buttons-group-label">Choose User Type</FormLabel>
                        <Divider sx={{ marginLeft: "8px" }}></Divider>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="S"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="T" control={<Radio />} label="Teacher"  {...register("UserType")} />
                            <FormControlLabel value="S" control={<Radio />} label="Student" {...register("UserType")} />
                        </RadioGroup>
                    </FormControl>

                    <Box>
                        {Go && <Typography variant='h6' color="green">{Go}</Typography>}

                        {Error && <Typography variant='h3' color="red">{Error}</Typography>}
                    </Box>
                    <Box>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Grid spacing={2} sx={{ width: "350px" }}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 0.5, width: '25ch' },
                                    }}
                                >
                                    <TextField
                                        helperText={errors.firstname && <Typography sx={{ fontSize: "12px", color: "red" }}>Please check the First Name</Typography>}
                                        id="firstname"
                                        label="First Name"
                                        variant="outlined"
                                        {...register("firstname", { required: true, maxLength: 10, pattern: /^[a-zA-Z]{2,15}$/ })}
                                    />
                                </Box>
                            </Grid>
                            <Grid spacing={2} sx={{ width: "350px" }}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 0.5, width: '25ch' },
                                    }}
                                >
                                    <TextField
                                        helperText={errors.lastname && <Typography sx={{ fontSize: "12px", color: "red" }}>Please check the Last Name</Typography>}
                                        id="lastname"
                                        label="Last Name"
                                        variant="outlined"
                                        {...register("lastname", { required: true, maxLength: 10, pattern: /^[a-zA-Z]{2,15}$/ })}
                                    />
                                </Box>
                            </Grid>
                            <Grid spacing={2} sx={{ width: "350px" }}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 0.5, width: '25ch' },
                                    }}
                                >
                                    <TextField
                                        helperText={errors.phone && <Typography sx={{ fontSize: "12px", color: "red" }}>Enter a valid phone number</Typography>}
                                        label="Phone Number"
                                        variant="outlined"
                                        type="phone"
                                        {...register("phone", {
                                            required: true,
                                            minLength: 10,
                                            pattern: (/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i)
                                        })}
                                    />
                                </Box>
                            </Grid>
                            <Grid spacing={2} sx={{ width: "350px" }}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 0.5, width: '25ch' },
                                    }}
                                >
                                    <TextField
                                        helperText={errors.email && <Typography sx={{ fontSize: "12px", color: "red" }}>Please check the Email</Typography>}
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        {...register("email",
                                            {
                                                required: true,
                                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                            })}
                                    />
                                </Box>
                            </Grid>
                            <Grid spacing={2} sx={{ width: "350px" }}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 0.5, width: '25ch' },
                                    }}
                                >
                                    <TextField
                                        helperText={errors.password && <Typography sx={{ fontSize: "12px", color: "red" }}>Password should be stronger</Typography>}
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        {...register("password", {
                                            required: true,
                                            // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                        })}
                                    />
                                </Box>
                            </Grid>
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={buttonSx}
                                    disabled={loading}
                                >
                                    Submit
                                </Button>
                                {loading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            color: green[500],
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                )}
                            </Box>
                            {/* form end */}

                            {/* On submit success banner start */}
                            <Snackbar anchorOrigin={{ vertical, horizontal }} open={Show} autoHideDuration={2000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    You've successfully registered!
                                </Alert>
                            </Snackbar>
                            {Show && <>{Show}</>}
                            {/* On submit success banner end */}

                            {/* On submit error banner start */}
                            <Snackbar anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal} open={Warn} autoHideDuration={2000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                                    User already exist or this email is already taken!
                                </Alert>
                            </Snackbar>
                            {Warn && <>{Warn}</>}
                            {/* On submit error banner end */}

                        </Form>
                    </Box>
                </Box>
            </>
        );
    };

    // onsubmit function for login page
    const onSubmitForLoginPage = (data) => {
        //console.log(data);
        var flag = false
        var User = null
        userData.forEach(item=>{
            if (item.email==data.email && item.password==data.password) {
                flag = true
                User = item
            }
        })
        if (flag) {
            const a = (User.UserType);
            window.localStorage.setItem("IniIn",true);
            const b = (User);
            const c = JSON.stringify(b)
            window.localStorage.setItem('userData', c);
            window.localStorage.setItem('userType', User.UserType);
            dispatch(Type(a));
            dispatch(Type1(b))
            navigate("/")
            dispatch(authActions.Login());
        }else{
            setError("Email or Password is incorrect");
        }
        // axios.post('http://localhost:5002/user/login', data).then((res) => {
        //     const a = (res.data.UserType);
        //     window.localStorage.setItem('userType', res.data.UserType);
        //     dispatch(Type(a));
        //     navigate("/Dashboard");
        //     console.log("Hi!");
        // }).catch(() => {
        //     setError("Email or Password is incorrect");
        // });
    };


    // setState for swaping login to registration page
    const [Page, setPage] = useState(true);

    // onclick function for login page to redirect state to registration state
    const onclick = () => {
        setPage(false);
    };

    // onclick function for login page to redirect state to login state
    const onclick2 = () => {
        setPage(true);
    };

    // Mui success Alert styling
    const [state] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal } = state;


    const handleClose = () => {
        setShow(false);
        setWarn(false);
    };

    const [Show, setShow] = useState();
    const [Warn, setWarn] = useState();
    const [Go, setGo] = useState();


    // Loading Button state
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [fail, setFail] = React.useState(false);
    const timer = React.useRef();

    // Submit success/fail button color styling
    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[400],
            },
        }),
        ...(fail && {
            bgcolor: red[500],
            '&:hover': {
                bgcolor: red[400],
            },
        }),

    };


    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    // Google login button function
    const clientId = '353539099956-asthjpdg0gb2l3jiivgbgbnhff5fc5hs.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    const onSuccess = (res) => {

    };
    const onFailure = (err) => {
        console.log('failed', err);
    };


    // onsubmit function for registration
    const onSubmit = (data) => {
        console.log(userData);

        setLoading(true);
        setSuccess(false);
             setGo("You are redirecting to login page...")
            setShow(true)
            setWarn(false)
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
                setFail(false)
            }, 2000);

            setTimeout(() => {
                window.location.reload();
                setPage(true);
            }, 2500);
        // axios.post('http://localhost:5002/user/register', data).then(() => {
        //     setGo("You are redirecting to login page...")
        //     setShow(true)
        //     setWarn(false)

        //     timer.current = window.setTimeout(() => {
        //         setSuccess(true);
        //         setLoading(false);
        //         setFail(false)
        //     }, 2000);

        //     setTimeout(() => {
        //         window.location.reload();
        //         setPage(true);
        //     }, 2500);

        // }).catch(() => {
        //     setWarn(true)
        //     setLoading(false);
        //     setFail(true)
        // })

    }

    return (
        // main interface
        <Card sx={{
            width:"100%"
        }}>
            <><Box sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#eee"
            }}>
                <Card sx={{
                    height: "fit-content",
                    width: "55vw",
                    backgroundColor: "#fff",
                    position: "relative",
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                }}>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                    }}>
                        {/* while login image will be left side */}
                        {Page &&
                            <Box sx={{
                                width: "50%",
                                backgroundColor: "#fff",
                                height: "100%",
                                overflow: "hidden"
                            }}>
                                <img style={{
                                    boxSizing: "border-box",
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"
                                }} src={P1} alt="pic here" />

                            </Box>}
                        {/* while login form will be right side */}
                        {!Page && <Card sx={{
                            width: "50%",
                            backgroundColor: "#fff",
                            height: "100%",
                            padding: "20px",

                        }}>

                            <Registration />

                        </Card>}
                        {/* while registration form will be left side */}
                        {Page &&
                            <Card sx={{
                                width: "50%",
                                backgroundColor: "#fff",
                                height:'fit-content',
                            }}>

                                <Login/>

                            </Card>}
                        {/* while registration image will be right side */}
                        {!Page &&
                            <Box sx={{
                                width: "50%",
                                backgroundColor: "#fff",
                                height: "100%",
                                overflow: "hidden"
                            }}>
                                <img style={{
                                    boxSizing: "border-box",
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"
                                }} src={P3} alt="pic here" />
                            </Box>}
                    </Box>
                </Card>
            </Box>
            </>
        </Card>
    );
}
export default Auth;