import { Box } from '@mui/system'
import React from 'react'
import styles from '../Layout/Style/StudentLandingStyle'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Card, Divider, Typography } from '@mui/material';
import TeacherCourses from '../Course/TeacherCourse/TeacherCourses';


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



const StudentLanding = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.B1}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Teachers" {...a11yProps(1)} />
                    <Tab label="Courses" {...a11yProps(2)} />
                    <Tab label="Batches" {...a11yProps(3)} />
                    <Tab label="Colleges" {...a11yProps(4)} />
                    <Tab label="Get carrier councilling" {...a11yProps(5)} />
                    <Tab label="Earning" {...a11yProps(6)} />
                    <Tab label="Help desk" {...a11yProps(7)} />
                </Tabs>

                {/* Home Tab */}
                <TabPanel value={value} index={0}>
                    {/* first main BOX */}
                    <Box sx={styles.B2}>
                        <Box sx={styles.B3}>
                            <Box sx={styles.B4}>
                                <Typography sx={styles.Text1}>Crack CA Final Group 1 with Uducate</Typography>
                                <Typography sx={styles.Text2}>Over 8,00,000 learners trust us for online and offline coaching</Typography>
                            </Box>
                        </Box>

                        <Box sx={styles.B5}>
                            {/* second Box divition */}
                            <Box sx={styles.B6}>

                                {/* divition 1 */}
                                <Box sx={styles.B7}>
                                    <Box sx={styles.B8}>
                                        <Box sx={styles.B9}>
                                            {/* PIC here */}
                                        </Box>
                                        <Box sx={styles.B10}>
                                            <Typography sx={styles.Text3}>India's top educators</Typography>
                                            <Typography sx={styles.Text4}>Learn with the best educators for online CA Final Group 1 preparation</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                                {/* divition 2 */}
                                <Box sx={styles.B7}>
                                    <Box sx={styles.B8}>
                                        <Box sx={styles.B9}>
                                            {/* PIC here */}
                                        </Box>
                                        <Box sx={styles.B10}>
                                            <Typography sx={styles.Text3}>Full syllabus coverage</Typography>
                                            <Typography sx={styles.Text4}>Cover your entire syllabus from all your CA Final Group 1 subjects</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                                {/* divition 3 */}
                                <Box sx={styles.B7}>
                                    <Box sx={styles.B8}>
                                        <Box sx={styles.B9}>
                                            {/* PIC here */}
                                        </Box>
                                        <Box sx={styles.B10}>
                                            <Typography sx={styles.Text3}>Best-in-class learning experience</Typography>
                                            <Typography sx={styles.Text4}>Live classes, practice questions, mock tests, doubt solving and much more</Typography>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>

                        </Box>
                        {/* third box in main box */}
                        <Box sx={styles.B11}>
                            <Box sx={styles.B12}>
                                <Button variant='contained' color='success' sx={styles.Btn1}>
                                    <Typography color="white" sx={styles.Text5}>view subscription plans</Typography>
                                </Button>
                                <Button variant='outlined' sx={styles.Btn2}>
                                    <Typography color="black" sx={styles.Text5}>Explore for free</Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Divider sx={styles.Divider} />

                    {/* second section */}
                    <Box sx={styles.B13}>
                        <Box sx={styles.B14}>
                            {/* Left part */}
                            <Box sx={styles.B15}>
                                <Box sx={styles.B16}>
                                    <Typography sx={styles.Text6}>Take a test for free and win up to 50% scholarship</Typography>
                                    <Box sx={styles.B17}>
                                        <Typography sx={styles.Text7}>
                                            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                                alt='Pic here'
                                                style={{ marginRight: "8px" }} />
                                            Just 15 minutes
                                        </Typography>
                                        <Typography sx={styles.Text8}>
                                            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                                alt='Pic here'
                                                style={{ marginRight: "8px" }} />
                                            15 quick questions
                                        </Typography>
                                    </Box>
                                    <Button variant='contained' sx={styles.Btn3}><Typography sx={styles.Text30}>Attempt test now</Typography></Button>
                                </Box>
                            </Box>
                            {/* right part */}
                            <Box sx={styles.B18}>
                                <Box sx={styles.B19}>
                                    <img style={{
                                        boxSizing: "border-box",
                                        objectFit: "cover",
                                        height: "121px",
                                        width: "190px"
                                    }} src="https://static.uacdn.net/production/_next/static/images/dst/trophy-v2.svg?q=75&auto=format%2Ccompress&w=256"
                                        alt='Pic here' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </TabPanel>



                {/* Teachers Tab */}
                <TabPanel value={value} index={1}>
                    <Box sx={styles.B20}>
                        {/* Heading section */}
                        <Box sx={styles.B21}>
                            <Box sx={styles.B22}>
                                <Typography sx={styles.Text9}>India's top educators to learn from</Typography>
                            </Box>
                            <Box sx={styles.B17}>
                                <Typography sx={styles.Text7}>
                                    <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                        alt='Pic here'
                                        style={{ marginRight: "8px" }} />
                                    Proven history of delivering results
                                </Typography>
                                <Typography sx={styles.Text8}>
                                    <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                        alt='Pic here'
                                        style={{ marginRight: "8px" }} />
                                    Mentored past rankers
                                </Typography>
                                <Typography sx={styles.Text8}>
                                    <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                        alt='Pic here'
                                        style={{ marginRight: "8px" }} />
                                    Unique style of teaching
                                </Typography>
                            </Box>
                        </Box>

                        {/* Teacher List */}
                        <Box sx={styles.B23}>
                            <Box sx={styles.B24}>
                                {/* Left panel */}
                                <Box sx={styles.B25}>
                                    <Box sx={styles.B26}>
                                        <Card sx={styles.B27}>
                                            {/* Card one */}
                                            <Box sx={styles.B28}>
                                                {/* Left Side */}
                                                <Box sx={styles.B29}>
                                                    <img src="https://static.uacdn.net/educator_new/processed_thumbnail/545AB938-FA2A-420E-8045-B79E51EE45C6_.png?q=75&auto=format%2Ccompress&w=128"
                                                        alt='Pic here'
                                                        style={{
                                                            boxSizing: "border-box",
                                                            objectFit: "cover",
                                                            height: "100%",
                                                            width: "100%"
                                                        }} />
                                                </Box>
                                                <Box sx={styles.B30}>
                                                    {/* Right Side */}
                                                    <Box sx={styles.B31}>
                                                        <Box sx={styles.B32}>
                                                            <Typography sx={styles.Text10}>Rahul Malkan</Typography>
                                                            <Typography sx={styles.Text11}>Passion - Teaching Hobbies - Reading, trekking, travelling. Code "RM10"</Typography>
                                                        </Box>
                                                        <Box sx={styles.B33}>
                                                            <Box sx={styles.B34}>
                                                                <Box sx={styles.B35}>
                                                                    <Typography sx={styles.Text12}>34M</Typography>
                                                                    <Typography sx={styles.Text13}>Watch Mins</Typography>
                                                                </Box>
                                                                <Box sx={styles.B36}>
                                                                    <Typography sx={styles.Text12}>15k</Typography>
                                                                    <Typography sx={styles.Text13}>Followers</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={styles.B37}>
                                                            <Button variant='contained' sx={styles.Btn4}>
                                                                <Typography sx={styles.Text14}>Follow</Typography>
                                                            </Button>
                                                            <Button variant='outlined' sx={styles.Btn5}>
                                                                <Typography sx={styles.Text15}>view profile</Typography>
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Card>
                                        <Card sx={styles.B27}>
                                            {/* card two */}
                                            <Box sx={styles.B28}>
                                                {/* Left Side */}
                                                <Box sx={styles.B29}>
                                                    <img src="https://static.uacdn.net/educator_new/processed_thumbnail/64800CD9-43C4-45BB-8308-F8F0060F698F_.png?q=75&auto=format%2Ccompress&w=128"
                                                        alt='Pic here'
                                                        style={{
                                                            boxSizing: "border-box",
                                                            objectFit: "cover",
                                                            height: "100%",
                                                            width: "100%"
                                                        }} />
                                                </Box>
                                                <Box sx={styles.B30}>
                                                    {/* Right Side */}
                                                    <Box sx={styles.B31}>
                                                        <Box sx={styles.B32}>
                                                            <Typography sx={styles.Text10}>Amit Popli</Typography>
                                                            <Typography sx={styles.Text11}>CA Amit Popli is a Chartered Accountant & insolvency profesional. He has vast experiance of over 15 years in...</Typography>
                                                        </Box>
                                                        <Box sx={styles.B33}>
                                                            <Box sx={styles.B34}>
                                                                <Box sx={styles.B35}>
                                                                    <Typography sx={styles.Text12}>41M</Typography>
                                                                    <Typography sx={styles.Text13}>Watch Mins</Typography>
                                                                </Box>
                                                                <Box sx={styles.B36}>
                                                                    <Typography sx={styles.Text12}>25k</Typography>
                                                                    <Typography sx={styles.Text13}>Followers</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={styles.B37}>
                                                            <Button variant='contained' sx={styles.Btn4}>
                                                                <Typography sx={styles.Text14}>Follow</Typography>
                                                            </Button>
                                                            <Button variant='outlined' sx={styles.Btn5}>
                                                                <Typography sx={styles.Text15}>view profile</Typography>
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Card>
                                    </Box>

                                </Box>

                                {/* Right panel */}
                                <Box sx={styles.B25}>
                                    <Box sx={styles.B26}>
                                        <Card sx={styles.B27}>
                                            {/* Card one */}
                                            <Box sx={styles.B28}>
                                                {/* Left Side */}
                                                <Box sx={styles.B29}>
                                                    <img src="https://static.uacdn.net/educator_new/processed_thumbnail/685DA1CD-E734-4B6B-B10F-AE5718417021_.png?q=75&auto=format%2Ccompress&w=128"
                                                        alt='Pic here'
                                                        style={{
                                                            boxSizing: "border-box",
                                                            objectFit: "cover",
                                                            height: "100%",
                                                            width: "100%"
                                                        }} />
                                                </Box>
                                                <Box sx={styles.B30}>
                                                    {/* Right Side */}
                                                    <Box sx={styles.B31}>
                                                        <Box sx={styles.B32}>
                                                            <Typography sx={styles.Text10}>CA Niket Thacker</Typography>
                                                        </Box>
                                                        <Box sx={styles.B33}>
                                                            <Box sx={styles.B34}>
                                                                <Box sx={styles.B35}>
                                                                    <Typography sx={styles.Text12}>13M</Typography>
                                                                    <Typography sx={styles.Text13}>Watch Mins</Typography>
                                                                </Box>
                                                                <Box sx={styles.B36}>
                                                                    <Typography sx={styles.Text12}>4k</Typography>
                                                                    <Typography sx={styles.Text13}>Followers</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={styles.B37}>
                                                            <Button variant='contained' sx={styles.Btn4}>
                                                                <Typography sx={styles.Text14}>Follow</Typography>
                                                            </Button>
                                                            <Button variant='outlined' sx={styles.Btn5}>
                                                                <Typography sx={styles.Text15}>view profile</Typography>
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Card>
                                        <Card sx={styles.B27}>
                                            {/* card two */}
                                            <Box sx={styles.B28}>
                                                {/* Left Side */}
                                                <Box sx={styles.B29}>
                                                    <img src="https://static.uacdn.net/educator_new/processed_thumbnail/D1A6FD75-863F-42D6-8C2E-1989BD241CC5_.png?q=75&auto=format%2Ccompress&w=128"
                                                        alt='Pic here'
                                                        style={{
                                                            boxSizing: "border-box",
                                                            objectFit: "cover",
                                                            height: "100%",
                                                            width: "100%"
                                                        }} />
                                                </Box>
                                                <Box sx={styles.B30}>
                                                    {/* Right Side */}
                                                    <Box sx={styles.B31}>
                                                        <Box sx={styles.B32}>
                                                            <Typography sx={styles.Text10}>CA Khusboo Sanghavi</Typography>
                                                        </Box>
                                                        <Box sx={styles.B33}>
                                                            <Box sx={styles.B34}>
                                                                <Box sx={styles.B35}>
                                                                    <Typography sx={styles.Text12}>7M</Typography>
                                                                    <Typography sx={styles.Text13}>Watch Mins</Typography>
                                                                </Box>
                                                                <Box sx={styles.B36}>
                                                                    <Typography sx={styles.Text12}>10k</Typography>
                                                                    <Typography sx={styles.Text13}>Followers</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                        <Box sx={{ width: "100%", height: "15%", display: "flex" }}>
                                                            <Button variant='contained' sx={styles.Btn4}>
                                                                <Typography sx={styles.Text14}>Follow</Typography>
                                                            </Button>
                                                            <Button variant='outlined' sx={styles.Btn5}>
                                                                <Typography sx={styles.Text15}>view profile</Typography>
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>

                                        </Card>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={styles.B38}>
                            <Button variant='contained' sx={styles.Btn6}>
                                <Typography sx={styles.Text16}>view all educators</Typography>
                            </Button>
                        </Box>

                    </Box>
                </TabPanel>



                {/* Courses Tab panel  */}
                <TabPanel value={value} index={2}>
                    <Box sx={styles.B39}>

                        {/* Upper part */}
                        <Box sx={styles.B40}>
                            <Box sx={styles.B41}>
                                <Box sx={styles.B42}>
                                    <Typography sx={styles.Text17}>Most engaging CA Final Group 1 classes of all time</Typography>
                                </Box>
                                <Box sx={styles.B43}>
                                    <Button variant='outlined' sx={styles.Btn7}><Typography sx={styles.Text18}>See All</Typography></Button>
                                </Box>
                            </Box>
                        </Box>

                        {/* Lower Course Part */}
                        <Box sx={styles.B44}>
                            <Box sx={styles.B45}>

                                <Box sx={styles.B46}>
                                    <TeacherCourses />
                                </Box>

                                <Box sx={styles.B46}>
                                    <Typography sx={styles.Text19}>Classes by CA Final Group 1 subjects</Typography>
                                    <TeacherCourses />
                                </Box>

                                <Box sx={styles.B46}>
                                    <TeacherCourses />
                                    <Button variant='contained' sx={styles.Btn8}><Typography sx={styles.Text20}>see more in ca final Group 1-new</Typography></Button>
                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </TabPanel>





                {/* Batches Tab panel */}
                <TabPanel value={value} index={3}>
                    <Box sx={styles.B47}>
                        {/* First Part */}
                        <Box sx={styles.B48}>
                            <Box sx={styles.B49}>
                                <Box sx={styles.B50}>
                                    <Box sx={styles.B51}>
                                        <Typography sx={styles.Text21}>Get subscription to start your preparation</Typography>
                                    </Box>
                                </Box>
                                <Box sx={styles.B52}>
                                    <Button variant='contained' sx={styles.Btn9}>
                                        <Typography sx={styles.Text22}>view subscription plans</Typography>
                                    </Button>

                                </Box>

                            </Box>
                            <Divider />
                        </Box>

                        {/* second part */}
                        <Box sx={styles.B53}>
                            <Box sx={styles.B54}>

                                {/* Left part */}
                                <Box sx={styles.B55}>
                                    <Box sx={styles.B56}>
                                        <Typography sx={styles.Text23}>Recommended batch for CA Final Group 1 preparation</Typography>
                                    </Box>
                                    <Box sx={styles.B17}>
                                        <Typography sx={styles.Text7}>
                                            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                                alt='Pic here'
                                                style={{ marginRight: "8px" }} />
                                            Best for full syllabus preparation
                                        </Typography>
                                        <Typography sx={styles.Text8}>
                                            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                                alt='Pic here'
                                                style={{ marginRight: "8px" }} />
                                            Live & recorded online classes
                                        </Typography>
                                        <Typography sx={styles.Text8}>
                                            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=32"
                                                alt='Pic here'
                                                style={{ marginRight: "8px" }} />
                                            Curated by best educators
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Right Part */}
                                <Box sx={styles.B57}>
                                    <Box sx={styles.B58}>
                                        <Typography sx={styles.Text24}>6.6K learners</Typography>
                                        <Typography sx={styles.Text25}>explored a batch today</Typography>
                                    </Box>

                                </Box>

                            </Box>
                            <Divider />
                        </Box>

                        {/* third part */}
                        <Box sx={styles.B59}>
                            <Box sx={styles.B60}>

                                {/* Left imsge */}
                                <Box sx={styles.B61}>
                                    <Box sx={styles.B62}>
                                        <img src="https://static.uacdn.net/thumbnail/batch/c003ccfad4004f7b9cd6ba51e792f7a3.png?q=75&w=640&auto=format%2Ccompress"
                                            alt='Pic here'
                                            style={{
                                                boxSizing: "border-box",
                                                objectFit: "cover",
                                                height: "100%",
                                                width: "100%"
                                            }} />
                                    </Box>
                                </Box>

                                {/* Right Details */}
                                <Box sx={styles.B63}>
                                    <Box sx={styles.B64}>
                                        <Box sx={styles.B65}>
                                            <Button variant='contained' sx={styles.Btn10}>
                                                <Typography sx={styles.Text26}>Recommended</Typography>
                                            </Button>
                                            <Typography sx={styles.Text27}>Top rated • Exceptional educators</Typography>
                                            <Typography sx={styles.Text28}>Dream Team - Group 1 Fastrack Batch for Nov 22</Typography>
                                            <Box sx={styles.B66}>
                                                <Typography sx={styles.Text29}>Full CA Final Group 1 syllabus completion</Typography>
                                                <Typography sx={styles.Text29}>Topic-wise full syllabus notes</Typography>
                                                <Typography sx={styles.Text29}>Aakash Kandoi, Abhishek Bansal, Unacademy Ca Final Group 2, Ca Final Gro and 1 more</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={styles.B67}>
                                            <Box sx={styles.B68}>
                                                <Box sx={styles.B69}>
                                                    <Button variant='contained' sx={styles.B70}>
                                                        <Typography sx={styles.Text30}>view batch details</Typography>
                                                    </Button>
                                                </Box>
                                                <Box sx={styles.B71}>
                                                    <Typography sx={styles.Text31}>Ended on</Typography>
                                                    <Typography sx={styles.Text32}>29 Oct 2022</Typography>
                                                </Box>
                                            </Box>

                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>


                        <Box sx={{ width: "100%", height: "15%" }}>

                        </Box>
                    </Box>

                </TabPanel>



                {/* Colleges Tab panel */}
                <TabPanel value={value} index={4}>

                </TabPanel>



                {/* Get free carrier councilling Tab panel */}
                <TabPanel value={value} index={5}>

                </TabPanel>





                {/* Earning Tab panel */}
                <TabPanel value={value} index={6}>


                    <Box sx={{ height: "800px", width: "100%" }}>
                        <Box sx={styles.B14}>
                            {/* Left part */}
                            <Box sx={styles.B15}>
                                <Box sx={styles.B16}>
                                    <Typography sx={styles.Text6}>Refer friends to win Amazon vouchers and Plus Subscription</Typography>
                                    <Typography sx={styles.Text33}>For every successful referral win up to ₹2,500. Also, get 1 month plus subscription once</Typography>

                                    <Button variant='contained' sx={styles.Btn3}><Typography sx={styles.Text30}>refer a friend</Typography></Button>
                                </Box>
                            </Box>
                            {/* right part */}
                            <Box sx={styles.B18}>
                                <Box sx={styles.B19}>
                                    <img style={{
                                        boxSizing: "border-box",
                                        objectFit: "cover",
                                        height: "121px",
                                        width: "190px"
                                    }} src="https://static.uacdn.net/referrals/refer_friends_and_win_rewards_web.png?q=75&auto=format%2Ccompress&w=1920"
                                        alt='Pic here' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                </TabPanel>



                {/* Help desk Tab panel */}
                <TabPanel value={value} index={7}>

                </TabPanel>
            </Box>

        </Box>
    )
}

export default StudentLanding;