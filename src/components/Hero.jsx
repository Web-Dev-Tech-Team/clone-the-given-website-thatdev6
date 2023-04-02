import React from 'react'
import './heo.css'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import {hero} from '../assets/index'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <div className="hero-icon">
          <div className="hero-icon-1">
            <EmailIcon/>
          </div>
          <div className="hero-icon-2">
            <CallIcon/>
          </div>
         </div> 
        </div>

        <div className="hero-middle">
        <div className="text-area">
          <div className="top">
            <div className="p1">
              <p >Enter Name</p>
            <div className="line-1"></div>
            </div>
            <div className="p2">
            <p >Enter Email</p>
            <div className="line-2"></div>
            </div>
            
          </div>
          <p className="p3">Enter your'e message</p>
          <div className="bottom">
          
            <div className="line-3"></div>
            
            <div className="line-4"></div>
            <div className="line-5"></div>
          </div>
        </div>
        </div>
        
        <div className="hero-right">
          <img height='450px' width= '450px' src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero