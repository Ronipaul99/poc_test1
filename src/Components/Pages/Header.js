import { Input } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import '../Style/Header.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/Auth';
import { U } from "../Store/User";
import {U1} from "../Store/U-Data"
import Button from '@mui/material/Button';
export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const e = useSelector(U);
  const userData = useSelector(U1)
  console.log(userData);
  const navigate = useNavigate();
const HandleClick = (e) => {
  navigate("/auth")
}
const Logout = () => {
  navigate("/")
  window.localStorage.removeItem("userType");
  window.localStorage.removeItem("userData");
  window.localStorage.setItem("IniIn", false);
  window.localStorage.removeItem("TaskbarId");
  dispatch(authActions.Logout());
};
  return (
    <div className='header-container'>
        <div className='header-body row col-sm-12'>
            <a className='brand col-sm-3' href='/'></a>
            <form className='col-sm-4 search-bar'>
              <input type='text' id='search' className='' placeholder='Search for courses,leasons ,educators'/>
              <button type='submit'><SearchIcon /></button>
            </form>
 
            <div className='call-info col-sm-3'>
              {!isLoggedIn?
                <div>
                  <div className='call-icon'>
                    <PhoneInTalkIcon style={{color:'5a5a5a'}}/>
                  </div>
                  <div className='col-sm-9'>
                      <div className='col-sm-12 call-text' >Talk to our experts</div>
                      <div className='col-sm-12 call-number'>+91-8956347789</div>
                  </div>
                </div>
                :
                <div className='col-9 call-text-2' >Welcome {userData.firstname}</div>
              }

            </div>
            {!isLoggedIn ?            
              <div className='icon-area col-sm-2'>
                <Button style={{marginInline:'5px'}} variant="outlined" onClick={HandleClick}> Login</Button>
                <Button style={{marginInline:'5px'}} variant="outlined">signup</Button>
              </div> 
              :
                <div className='icon-area col-sm-2'>
                  <Button variant="outlined" onClick={Logout}>Logout</Button>
                </div>
            }

        </div>
    </div>
  )
}
