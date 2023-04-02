import React from 'react'
import './navbar.css'
import {logo, hero} from '../assets/index';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Navbar = () => {
  return (
    <div className='nav'>
      
      
    
        <div className="nav-logo">
            <img height='90px' width = '90px'
             src={logo} alt="logo" />
        </div>

        <div className="nav-list">

          <a className='nav-item' href="">Home</a>
          <a className='nav-item' href="">Contact us </a>
          <a className='nav-item' href="">About us</a>
          <a className='nav-item' href="">portfolio</a>
          

        </div>

        <div className="nav-icon">
          <PowerSettingsNewIcon/>
        </div>
      
       

    </div>
  )
}

export default Navbar