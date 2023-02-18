import { Input } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import '../Style/Header.css'
export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-body row col-sm-12'>
            <a className='brand col-sm-3' href='/'></a>
            <form className='col-sm-4 search-bar'>
              <input type='text' id='search' className='' placeholder='Search for courses,leasons ,educators'/>
              <button type='submit'><SearchIcon /></button>
            </form>
              
            <div className='call-info col-sm-3'>
                <div className='call-icon'>
                  <RingVolumeIcon/>
                </div>
                <div className='col-sm-9'>
                    <div className='col-sm-12 call-text' >Talk to our experts</div>
                    <div className='col-sm-12 call-number'>+91-8956347789</div>
                </div>
            </div>
            <div className='icon-area col-sm-2'>
                <button className='icon-button'> Login</button>
                <button className='icon-button'>signup</button>
            </div>
        </div>
    </div>
  )
}
