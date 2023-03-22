import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styles from '../Layout/Style/LandingPageStyle'

function Landing() {
  return (
    <Box sx={styles.mainContainer}>
      {/* Upper part */}
      <Box sx={styles.FirstCard}>
        <Box sx={styles.One}>
          <Box sx={styles.Two}>
            <Box sx={styles.Three}>
              <Box sx={styles.Four}>
                <Typography sx={styles.Five}>India’s largest learning platform</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.Six}>
            <Box sx={styles.Seven}>
              <Button variant='contained' color='success' sx={styles.Btn}><Typography sx={styles.Text1}>start learning</Typography></Button>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.Eight}>
          <Box sx={styles.Nine}>
            <Box sx={styles.Ten}>
              <Typography sx={styles.Text2}>Popular goals</Typography>
              <Typography sx={styles.Text3}>UPSC CSE - GS</Typography>
              <Typography sx={styles.Text3}>IIT JEE</Typography>
              <Typography sx={styles.Text3}>NEET UG</Typography>
              <Typography sx={styles.Text3}>CAT & Other MBA Ent...</Typography>
              <Typography sx={styles.Text3}>Book Exams</Typography>
              <Typography sx={styles.Text3}>CA Intermediate</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* card number 1 */}
      <Box sx={styles.Eleven}>
        <Card sx={styles.Twelve}>
          <Box sx={styles.Thirteen}>
            <Box sx={styles.Forteen}>
              <img style={{
                boxSizing: "border-box",
                objectFit: "cover",
                height: "100%",
                width: "100%"
              }} src="	https://static.uacdn.net/web-cms/stores2_Batch_22396665d0.png?q=75&auto=format%2Ccompress&w=1920" alt="pic here" />
            </Box>
            <Box sx={styles.Fifteen}>
              <Box sx={styles.Sixteen}>
                <Box sx={styles.Seventeen}>
                  <Box sx={styles.Eighteen}>
                    <Typography sx={styles.Text4}>INTRODUCING</Typography>
                    <Typography sx={styles.Text5}>Unacademy Centres for IIT JEE and NEET UG</Typography>
                    <Typography sx={styles.Text6}>Admissions open in Kota, Delhi, Chandigarh, Sikar, Indore and 20+ other cities!</Typography>
                    <Box sx={styles.Twenty}>
                      <Typography sx={styles.Text7}> <CheckCircleOutlineIcon fontSize='small' sx={styles.Icon} />Learn from top educators in your city</Typography>
                      <Typography sx={styles.Text8}> <CheckCircleOutlineIcon fontSize='small' sx={styles.Icon} />In-person classes & doubt solving</Typography>
                      <Typography sx={styles.Text8}> <CheckCircleOutlineIcon fontSize='small' sx={styles.Icon} />Bonus access to online learning</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={styles.Twentyone}>
                  <Button variant='contained' sx={styles.Btn1}>Find center</Button>
                </Box>
              </Box>

            </Box>
          </Box>
        </Card>
      </Box>
      {/* Box number 2 */}
      <Box sx={styles.Eleven1}>
        <Box sx={styles.B1}>
          <Box sx={styles.B2}>
            {/* SubCard 1 */}
            <Box sx={styles.B3}>
              <Box sx={styles.B4}>
                <Box sx={styles.B5}>
                  <img style={{
                    boxSizing: "border-box",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: "11px"
                  }} src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&auto=format%2Ccompress&w=384" alt="pic here" />
                </Box>
                <Box sx={styles.B6}>
                  <Typography sx={styles.Text9}>Daily live classes</Typography>
                  <Typography sx={styles.Text10}>Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</Typography>
                </Box>
              </Box>
            </Box>

            {/* SubCard 2 */}
            <Box sx={styles.B7}>
              <Box sx={styles.B8}>
                <Box sx={styles.B9}>
                  <img style={{
                    boxSizing: "border-box",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: "11px"
                  }} src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&auto=format%2Ccompress&w=384" alt="pic here" />
                </Box>
                <Box sx={styles.B10}>
                  <Typography sx={styles.Text11}>Practice and revise</Typography>
                  <Typography sx={styles.Text12}>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</Typography>
                </Box>
              </Box>
            </Box>

            {/* SubCard 3 */}
            <Box sx={styles.B7}>
              <Box sx={styles.B8}>
                <Box sx={styles.B9}>
                  <img style={{
                    boxSizing: "border-box",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: "11px"
                  }} src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&auto=format%2Ccompress&w=384" alt="pic here" />
                </Box>
                <Box sx={styles.B10}>
                  <Typography sx={styles.Text11}>Learn anytime, anywhere</Typography>
                  <Typography sx={styles.Text12}>One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</Typography>
                </Box>
              </Box>
            </Box>

          </Box>

        </Box>
      </Box>

      {/* Card number 2 */}
      <Box sx={styles.Eleven1}>
        <Card sx={styles.Twelve}>
          <Box sx={styles.B11}>
            <Box sx={styles.B12}>
              <Box sx={styles.B13}>
                <Typography sx={styles.Text13}>Get the learning app</Typography>
                <Typography sx={styles.Text14}>Download lessons and learn anytime, anywhere with the Unacademy app</Typography>
                <Box sx={styles.B14}>
                  <Box sx={styles.B15}>
                    <img style={{
                      boxSizing: "border-box",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                      borderRadius: "11px"
                    }} src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&auto=format%2Ccompress&w=128" alt="pic here" />
                  </Box>
                  <Box sx={styles.B15}>
                    <img style={{
                      boxSizing: "border-box",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                      borderRadius: "11px"
                    }} src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&auto=format%2Ccompress&w=128" alt="pic here" />
                  </Box>
                </Box>
              </Box>

            </Box>
            <Box sx={styles.B16}>
              <Box sx={styles.B17}>
                <img style={{
                  boxSizing: "border-box",
                  objectFit: "cover",
                  height: "404px",
                  width: "381px"
                }} src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&auto=format%2Ccompress&w=640" alt="pic here" />
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>


      {/* Card number 3 */}

      <Box sx={styles.B18}>
        <Box sx={styles.B19}>
          <Box sx={styles.B20}>
            <Box sx={styles.B21}>
              <Box sx={styles.B22}>
                <Typography sx={styles.Text15}>Start learning with Uducate</Typography>
                <Typography sx={styles.Text16}>Get unlimited access to structured courses & doubt clearing sessions</Typography>
                <Button variant='contained' sx={styles.Btn2}>Start learning</Button>
              </Box>
            </Box>
            <Box sx={styles.B23}>
              <Box sx={styles.B24}>
                <Box sx={styles.B25}>

                  <Box sx={styles.B26}>
                    {/* inner left card 1 */}
                    <Card sx={styles.B27}>
                      <Typography sx={styles.Text17}>Exam categories</Typography>
                      <Typography sx={styles.Text18}>60+</Typography>
                    </Card>
                    {/* inner left card 2 */}
                    <Card sx={styles.B271}>
                      <Typography sx={styles.Text17}>Daily live classes</Typography>
                      <Typography sx={styles.Text18}>1.5k+</Typography>
                    </Card>
                    {/* inner left card 3 */}
                    <Card sx={styles.B272}>
                      <Typography sx={styles.Text17}>Mins watched</Typography>
                      <Typography sx={styles.Text18}>3.2B+</Typography>
                    </Card>
                  </Box>
                </Box>
                <Box sx={styles.B28}>
                  <Box sx={styles.B26}>
                    {/* inner right card 1 */}
                    <Card sx={styles.B29}>
                      <Typography sx={styles.Text17}>Educator</Typography>
                      <Typography sx={styles.Text18}>40k+</Typography>
                    </Card>
                    {/* inner right card 2 */}
                    <Card sx={styles.B291}>
                      <Typography sx={styles.Text17}>Video lessons</Typography>
                      <Typography sx={styles.Text18}>1M+</Typography>
                    </Card>
                  </Box>

                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


    </Box >
  )
}

export default Landing