import React from 'react'
import '../Style/Footer.css'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function 
() {
  return (
    <div className='footer-container col-sm-12 row'>
      <div className='col-sm-6'>
        <div className='brand-footer col-sm-12'>
            <img className='brand-image' src='./logo3.png'/>
            <div className='brand-description col-12 row'>
              <span >Uducate is democratising education,</span>
              <span >making it accessible to all. Join the revolution,</span>
              <span>learn on India's largest learning platform.</span>
            </div>
            <div className='mobile-app'>
              <img src='./Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg'/>
              <img style={{width:'140px'}} src='./google-play.png'/>
            </div>
            <div className='divider' style={{width:'10%' , marginLeft:'25px'}}></div>
            <div className='contact-info' style={{marginLeft:'25px'}}>
                <div className='title'>Reach out to us</div>
                <div className='content' style={{width:'45%'}}>Get your questions answered about learning with Uducate.</div>
                <div className='title' style={{marginTop:'20px'}}><PhoneInTalkIcon/> Call : &nbsp;+91 8585858585</div>
            </div>
        </div>
      </div>
      <div className='col-sm-6'>
        <div className='footer-columns col-sm-12 row'>
          <div className='col-sm-4'>
            <div className='title' style={{marginBottom:'30px'}}>Company</div>
            <div className='content column-content'>About Us</div>
            <div className='content column-content'>Shikshodaya</div>
            <div className='content column-content'>Careers</div>
            <div className='content column-content'>Blogs</div>
            <div className='content column-content'>Privacy policy</div>
            <div className='content column-content'>Terms and conditions</div>
          </div>
          <div className='col-sm-4'>
            <div className='title' style={{marginBottom:'30px'}}>Help & support</div>
            <div className='content column-content'>User Guidelines</div>
            <div className='content column-content'>Site Map</div>
            <div className='content column-content'>Refund Policy</div>
            <div className='content column-content'>Takedown Policy</div>
            <div className='content column-content'>Privacy policy</div>
            <div className='content column-content'>Grievance Redressal</div>
          </div>
          <div className='col-sm-4'>
            <div className='title' style={{marginBottom:'30px'}}>Study material</div>
            <div className='content column-content'>UPSC Study Material</div>
            <div className='content column-content'>NEET UG Study Material</div>
            <div className='content column-content'>JEE Study Material</div>
            <div className='content column-content'>CA Foundation Study Material</div>
            <div className='content column-content'>SSC Study Material</div>
          </div>
        </div>
      </div>
      <div className='divider' style={{width:'100%'}}></div>
      <div className='footer-buttom row col-sm-12'>
        <div className='col-sm-6 '>© 2023 CreatrionSoul soft tech Pvt Ltd</div>
        <div className='col-sm-6 social-media'>
          <FacebookIcon className='social-media-icon'/>
          <InstagramIcon className='social-media-icon'/>
          <YouTubeIcon className='social-media-icon'/>
          <TwitterIcon className='social-media-icon'/>
          <LinkedInIcon className='social-media-icon'/>
        </div>
      </div>

    </div>
  )
}
