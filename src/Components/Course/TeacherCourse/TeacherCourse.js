import { Box } from '@mui/system';
import React from "react";
import { Card, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';
import Carousel from "react-grid-carousel";
import { CardActionArea } from '@mui/material';



const TeacherCourse = ({ CourseName, id, imgURL, teacherName }) => {


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
            <Carousel.Item>
           < CardActionArea>
           <NavLink to={`/CourseDetails/10`} style={{textDecoration:"none"}}>
                <Box sx={{ width: "90.1px" }}>
                    <Box sx={{
                        height: "30vh",
                        width: "230px",
                        backgroundColor: "#fff",
                        position: "relative",
                        borderRadius:"15px"

                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}>

                            <Box sx={{
                                width: "100%",
                                borderRadius: "15px",
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
                                height: "auto",
                                borderRadius:"15px"
                            }}>
                                {/* product heading details */}
                                <Box sx={{ display: "flex", p: 1 }}> <Card sx={{ width: "34px", justifyContent: "center", display: "flex", alignItems: "center" }}><Typography sx={{ fontSize: "12px", color: "#3C4852", fontWeight: 700 }}>Hindi</Typography></Card> <Typography sx={{ marginLeft: "5px", fontSize: "12px", color: "#F1B334", fontWeight: 700 }}>English</Typography></Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#3C4852", letterSpacing: "-0.005em", p: 1 }}>{CourseName}</Typography>
                                <Typography sx={{ color: "#7A8B94", fontSize: "14px", p: 1 }}>{teacherName}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                </NavLink>
                </CardActionArea>
            </Carousel.Item>
        </>
    );
};

export default TeacherCourse;





