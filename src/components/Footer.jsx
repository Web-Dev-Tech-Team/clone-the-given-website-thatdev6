import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
          <div className="left">
            <div className="list">
              <h4>Go to</h4>
              <a href="" className="list-item">Home</a>
              <a href="" className="list-item">About us</a>
              <a href="" className="list-item">Contact us</a>
              <a href="" className="list-item">portfolio</a>
            </div>
          </div>
          <div className="right"><div className="list">
              <h4>Our recent work</h4>
              <a href="" className="list-item">Facebook</a>
              <a href="" className="list-item">Chat GPT</a>
              <a href="" className="list-item">Amazon</a>
              <a href="" className="list-item">Something else</a>
            </div></div>
        </div>
        <div className="bottom">
          <div className="b-left"></div>
          <div className="b-right"></div>
        </div>
      
    </div>
  )
}

export default Footer