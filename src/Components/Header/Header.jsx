import React, { useState } from 'react'
import './Header.css';
import { Link } from 'react-scroll';

export default function Header() {
  const [textColor, setTextColor] = useState('#EFD28D');
  const [isWhite, setIsWhite] = useState(true);

  const handleChnageTextColor = (e) => {
    if (e === "#EFD28D") {
      setTextColor("#EFD28D")
    }

  }
  return (
    <div class="header">
      <Link to="landing" spy={true} smooth={true} offset={-150} duration={500}>
        <h1 class="title">Daniel Maman</h1>
      </Link>
      <div class="nav">
        <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
          <button class="nav-btn"
            style={{
              color: textColor
            }}
            onClick={() => handleChnageTextColor}
          >Projects</button>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <button class="nav-btn"
            style={{
              color: textColor
            }}
            onClick={handleChnageTextColor}
          >About</button>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <button class="nav-btn">Contact</button>
        </Link>
        <Link to="cv" spy={true} smooth={true} offset={50} duration={500}>
          <button class="nav-btn1">CV</button>
        </Link>

      </div>
    </div>

  )
}
