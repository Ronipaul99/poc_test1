import { Avatar, AvatarGroup, Button, Card, Typography } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Chart from "react-apexcharts";
import { Box } from '@mui/system'
import styles from '../Style/TeacherAccountStyle'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react'
import { useState } from 'react';



// Tab panel function
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}






const TeacherAccount = () => {

    const currencies = [
        {
            value: 'Last Month',
            label: 'Last Month',
        },
        {
            value: 'Last seven days',
            label: 'Last seven days',
        },
        {
            value: 'Total',
            label: 'Total',
        }
    ];

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Graph chart
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            }
        },
        series: [
            {
                name: "Earning",
                data: [18, 20, 13, 4, 15, 26, 17, 8, 19, 1, 19, 22, 32, 4, 24, 16, 11, 15, 29, 2, 23, 22, 23, 12, 2, 27, 37, 88, 39, 30]
            }
        ]
    })
    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.Box}>
                <Box sx={styles.one}>
                    <Box sx={styles.Two}>
                        <Box sx={styles.Box1}>
                            <Box sx={styles.Three}>
                                <Box sx={styles.Four}>
                                    <Box sx={styles.Five}>
                                        <Box sx={styles.Six}>
                                            <Typography sx={styles.Text1}>Account Preview</Typography>
                                        </Box>
                                        <Box sx={styles.Seven}>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                defaultValue="Last Month"
                                                sx={{ width: "22ch" }}
                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={styles.Box12}>
                                <Box sx={styles.U50}>
                                    <Card sx={styles.Eight}>
                                        {/* upper box */}
                                        {/* Tabs */}
                                        <Box sx={{ display: "flex", justifyContent: "center", width: '100%' }}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                    <Tab label="Subscription" {...a11yProps(0)} />
                                                    <Tab label="Earning" {...a11yProps(1)} />
                                                    <Tab label="Activities" {...a11yProps(2)} />
                                                </Tabs>
                                            </Box>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                                            {/* 1Tab Body here */}
                                            <Chart
                                                options={state.options}
                                                series={state.series}
                                                type="bar"
                                                width="100%"
                                                height="360"
                                            />
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            {/* 2Tab Body here */}
                                            <Chart
                                                options={state.options}
                                                series={state.series}
                                                type="bar"
                                                width="100%"
                                                height="360"
                                            />
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            {/* 3Tab Body here */}
                                            <Chart
                                                options={state.options}
                                                series={state.series}
                                                type="bar"
                                                width="100%"
                                                height="360"
                                            />
                                        </TabPanel>

                                    </Card>
                                </Box>
                                <Box sx={styles.L50}>
                                    <Box sx={styles.Nine}>
                                        <Card sx={styles.Ten}>
                                            {/* Card1 */}
                                            <Typography sx={styles.Text3}>Total Earning</Typography>
                                            <Typography sx={styles.Text10}>6000</Typography>
                                        </Card>

                                        <Card sx={styles.Eleven}>
                                            {/* card2 */}
                                            <Box sx={styles.CB2}>
                                                <Box sx={styles.CB21}>
                                                    <Typography sx={styles.Text3}>Settle earning</Typography>
                                                    <Button variant='contained' sx={styles.Btn1}>
                                                        <Typography sx={styles.Text5}>Dispatch</Typography>
                                                    </Button>
                                                </Box>
                                                <Box sx={styles.CB22}>
                                                    <Box sx={styles.B1}>
                                                        <Typography sx={styles.Text9}>₹500</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Card>

                                        <Card sx={styles.Twelve}>
                                            {/* Card3 */}
                                            <Typography sx={styles.Text3}>Your affiliated earing</Typography>
                                            <Button variant='contained' sx={styles.Btn2}>
                                                <Typography sx={styles.Text5}>Create link</Typography>
                                            </Button>
                                        </Card>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.Thirteen}>
                        <Box sx={styles.Fourteen}>

                            <Card sx={styles.Fifteen}>
                                {/* right side top card */}
                                <Typography sx={styles.Text2}>Subscribed students</Typography>
                                <AvatarGroup sx={styles.AvatarGroup} max={4} total={24}>
                                    <Avatar alt="Reshab" src="/static/images/avatar/4.jpg" />
                                    <Avatar alt="Biswarup" src="/static/images/avatar/4.jpg" />
                                    <Avatar alt="Arpita" src="/static/images/avatar/4.jpg" />
                                    <Avatar alt="Madhumita" src="/static/images/avatar/5.jpg" />
                                </AvatarGroup>
                            </Card>

                            <Card sx={styles.Sixteen}>
                                {/* right side middle card */}
                                <Box sx={styles.MidCard}>
                                    <Box sx={styles.BB1}>
                                        <Typography sx={styles.Text6}>Get help from Uducate</Typography>
                                        <Typography sx={styles.Text7}>"Get your personal account manage with us"</Typography>
                                        <Typography sx={styles.Text8}>It is a long established fact that a reader will be distracted by the readble content...</Typography>
                                    </Box>
                                    <Box sx={styles.BB2}>
                                        <Button variant='contained' color='success' sx={styles.BB2Btn}>Continue<ArrowForwardIcon fontSize='small' sx={styles.Icon} /></Button>
                                    </Box>
                                </Box>
                            </Card>
                            <Card sx={styles.Seventeen}>
                                {/* right side bottom card */}
                                <Box sx={styles.SB1}>
                                    <Typography sx={styles.Text2}>Contact help desk</Typography>
                                    <Button variant='contained' sx={styles.Btn}>
                                        <Typography sx={styles.Text4}>Contact</Typography>
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TeacherAccount;
