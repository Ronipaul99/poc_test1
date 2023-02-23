import { Box } from '@mui/system';
import React from "react";
import Button from '@mui/material/Button';
import { Card, Typography } from "@mui/material";
import { Link } from 'react-router-dom';



const TeacherCourse = ({ name, id, imgURL, price, details }) => {


    //   const dispatch = useDispatch();


    // const addToCart = () => {

    // dispatch(
    //   cartActions.addToCart({
    //     name,
    //     id,
    //     price
    //   }))
    // }
    return (
        <>

            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/CourseDetails/10`}>
                <Box sx={{
                    minHeight: "25vh",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Card sx={{
                        height: "25vh",
                        width: "250px",
                        backgroundColor: "#fff",
                        position: "relative",
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection:"column"
                        }}>

                            <Box sx={{
                                width: "100%",
                                backgroundColor: "#fff",
                                height: "50%",
                                overflow: "hidden"
                            }}>
                                <img style={{
                                    boxSizing: "border-box",
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"
                                }} src={imgURL} alt="pic here" />
                            </Box>
                            <Box sx={{
                                width: "100%",
                                backgroundColor: "#eee",
                                height: "50%",
                                padding: "20px"
                            }}>
                                {/* product heading details */}
                                <Typography variant="h5">{name}</Typography>
                                <Typography>$ {price}</Typography>
                                <Button variant="contained" >Add to cart</Button>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Link>

        </>
    );
};

export default TeacherCourse;





