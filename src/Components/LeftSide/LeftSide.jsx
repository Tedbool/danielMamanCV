import React from 'react'
import './LeftSide.css';
import TopLeftLongLine from "../../assets/Top left long line.svg"
import TopLeftCornerLine from "../../assets/Top left corner line.svg"
import { useState } from 'react';
import { Link } from 'react-scroll';


export default function LeftSide() {

  const [isChecked, setIsChecked] = useState(0);

  return (
    <div className='left-side'>
      <img src={TopLeftCornerLine} className="left-image" />
      <img src={TopLeftLongLine} className="left-image" id='top-left-long' />
      {/* <ul>
        
      <Link to="landing" spy={true} smooth={true} offset={-150} duration={500}></Link>
      <Link to="projects" spy={true} smooth={true} offset={50} duration={500}><li></li></Link>
      <Link to="about" spy={true} smooth={true} offset={50} duration={500}><li></li></Link>
      <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><li></li></Link>
      <Link to="cv" spy={true} smooth={true} offset={50} duration={500}><li></li></Link>

      </ul> */}


      <label class="container">
      
        <input type="radio" name="radio" checked={isChecked === 0} onChange={() =><Link to="projects" spy={true} smooth={true} offset={50} duration={500}/>}/>
        <span class="checkmark"></span>
      </label>
      
      <label class="container">
 
        <input type="radio" name="radio" checked={isChecked === 1} onChange={() => setIsChecked(1)} />
        <span class="checkmark"></span>
      </label>


    </div>
  )
}
