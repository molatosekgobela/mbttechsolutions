import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>We create Web Applications that excite...</h1>
      <p>We take our clients ideas, built web applications deploy and host to make them a seamless reality</p>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/contactus'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          LET'S CHAT
          <i className='fa fa-arrow-right'></i>
        </Button>
        </Link>
        
      </div>
    </div>
  );
}

export default HeroSection;