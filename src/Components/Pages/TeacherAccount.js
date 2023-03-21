import { Avatar, AvatarGroup, Button, Card, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system'
import React from 'react'
import styles from '../Style/TeacherAccountStyle'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




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
            value: 'This Month',
            label: 'This Month',
        }
    ];

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                                sx={{ width: "20ch" }}
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
                                                    <Tab label="Authored Materials" {...a11yProps(0)} />
                                                    <Tab label="Earning" {...a11yProps(1)} />
                                                    <Tab label="Activities" {...a11yProps(2)} />
                                                </Tabs>
                                            </Box>
                                        </Box>
                                        <TabPanel value={value} index={0}>
                                            {/* 1Tab Body here */}
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            {/* 2Tab Body here */}
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            {/* 3Tab Body here */}
                                        </TabPanel>

                                    </Card>
                                </Box>
                                <Box sx={styles.L50}>
                                    <Box sx={styles.Nine}>
                                        <Card sx={styles.Ten}>
                                            {/* Card1 */}
                                            <Typography sx={styles.Text3}>Overall course progress</Typography>
                                        </Card>

                                        <Card sx={styles.Eleven}>
                                            {/* card2 */}
                                            <Typography sx={styles.Text3}>You don't have sponsored students</Typography>
                                            <Button variant='contained' sx={styles.Btn1}>
                                                <Typography sx={styles.Text5}>Find students</Typography>
                                            </Button>
                                        </Card>
                                        
                                        <Card sx={styles.Twelve}>
                                            {/* Card3 */}
                                            <Typography sx={styles.Text3}>You have not invested tokens yet</Typography>
                                            <Button variant='contained' sx={styles.Btn2}>
                                                <Typography sx={styles.Text5}>Start investing</Typography>
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
                                <Typography sx={styles.Text2}>People brought your materials</Typography>
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
                                        <Typography sx={styles.Text6}>RECENT ACTION</Typography>
                                        <Typography sx={styles.Text7}>"Greatest store intro React & Redux"</Typography>
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
                                    <Typography sx={styles.Text2}>You don't have new requests</Typography>
                                    <Button variant='contained' sx={styles.Btn}>
                                        <Typography sx={styles.Text4}>View my requests</Typography>
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
