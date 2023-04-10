import { Box } from '@mui/system';
import React, { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';
import Carousel from "react-grid-carousel";
import { CardActionArea } from '@mui/material';
import { U } from '../../../../Store/User';
import { useSelector } from 'react-redux';
import Meeting from '../ZoomClass/Tmeeting';
import Smeeting from '../ZoomClass/Smeeting';
import { Tdata } from '../../../../Store/Time-slice';



const Class = ({ StartTime, id, imgURL, Title }) => {

    const e = useSelector(U);

    const Time = useSelector(Tdata);

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const string5 = (`${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`)
    const string6 = Time

    console.log(string6 === string5)

    const string1 = "T"
    const string2 = e

    const string3 = "S"
    const string4 = e


    const [Meeting1, setMeeting1] = useState(false);
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
            {Meeting1 ? (
                string1 == string2 ? <Meeting /> : <Smeeting />
                // {string3 == string4 && <Smeeting />}
            )
                :
                (<Carousel.Item>

                    <Box sx={{
                        // maxHeight: "300px",
                        height: "300px",
                        minWidth: "150px",
                        maxWidth: "290px",
                        backgroundColor: "#fff",
                        // position: "relative",
                        borderRadius: "15px"

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
                                < CardActionArea>
                                    <NavLink to={`/CourseDetails/10`} style={{ textDecoration: "none" }}>
                                        <img style={{
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            height: "100%",
                                            width: "100%"
                                        }} src={imgURL} alt="pic here" />
                                    </NavLink>
                                </CardActionArea>
                            </Box>

                            <Box sx={{
                                width: "100%",
                                minHeight: "50%",
                                // borderRadius:"15px"
                            }}>
                                {/* product heading details */}
                                <Box sx={{ width: "100%", height: "80%", display: "flex", flexDirection: "column" }}>
                                    <Box sx={{ height: "100%", width: "100%" }}>
                                        <Box sx={{ height: "90%", width: "100%" }}>
                                            <Box sx={{ display: "flex", p: 0.5 }}> <Card sx={{ width: "34px", justifyContent: "center", display: "flex", alignItems: "center" }}><Typography sx={{ fontSize: "12px", color: "#3C4852", fontWeight: 700 }}>Hindi</Typography></Card> <Typography sx={{ marginLeft: "5px", fontSize: "12px", color: "#F1B334", fontWeight: 700 }}>English</Typography></Box>
                                            <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#3C4852", letterSpacing: "-0.005em", p: 0.5 }}>{Title}</Typography>
                                        </Box>
                                        <Box sx={{ height: "10%", width: "100%", display: "flex", alignItems: "flex-end" }}>
                                            {string3 == string4 && <Button variant='contained' disabled={string6 == string5} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Join Class</Typography>
                                            </Button>}
                                            {string1 == string2 && <Button variant='contained' disabled={!(string6 == string5)} sx={{ width: "100%" }} onClick={() => setMeeting1(true)}>
                                                <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>Start Class</Typography>
                                            </Button>}
                                        </Box>
                                    </Box>


                                </Box>


                                <Box sx={{ width: "100%", height: "20%", alignItems: "flex-end", display: "flex" }}>
                                    <Typography sx={{ color: "#7A8B94", fontSize: "14px", p: 0.5 }}> Starts from - {StartTime}</Typography>
                                </Box>



                            </Box>
                        </Box>
                    </Box>


                </Carousel.Item>
                )}

        </>
    );
};

export default Class;





