import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Info(props) {
    return (
        <Accordion
            sx={{
                width: "84.5vw",
                backgroundColor: "#fff",
                height: "80%",
                padding: "20px",
                justifyContent: "center"
            }} >
            <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box sx={{
                    minHeight: "23vh",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Card sx={{
                        height: "22vh",
                        width: "84.5vw",
                        backgroundColor: "#fff",
                        position: "relative",
                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                    }}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                        }}>

                            <Box sx={{
                                width: "30%",
                                backgroundColor: "#fff",
                                height: "100%",
                                overflow: "hidden"
                            }}>
                                <img style={{
                                    boxSizing: "border-box",
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%"
                                }} src={props.imgurl} alt="pic here" />
                            </Box>
                            {/* product heading details */}
                        </Box>
                    </Card>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <Typography> {props.name} </Typography>

                    <Typography> {props.rollNo}</Typography>
                    {props.details}
                </Typography>
            </AccordionDetails>
        </Accordion>

    );
};
export default Info;