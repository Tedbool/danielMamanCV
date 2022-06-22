import React, { useRef } from 'react';
import './LandingPage.css';
import Line1 from "../../assets/Home - line 1.svg";
import Line2 from "../../assets/Home - line 2.svg";
import Line3 from "../../assets/Home - line 3.svg";
import Line4 from "../../assets/Home - line 4.svg";
import Line5 from "../../assets/Home - line 5.svg";
import { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';
import useScrollSnap from 'react-use-scroll-snap';

export default function LandingPage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 500, delay: 50 })


    return (
        <section ref={scrollRef}><div className='landing-page' id="landing">
            <h1 className="main-title">
                <span className='primary-title-landing'>
                    {"Hello, I'm Daniel"}
                </span>
                <span className='secondary-title-landing'>
                    {"UX & UI Designer"}
                </span>
            </h1>
            <p className='p-landing'>My passion is taking complex ideas and turning them into beautiful</p>
            <p className='p-landing'>experiences that work great for both the users and business. </p><br />
            <p className='p-landing'>My goal is improving life of others through design.</p>
            <div className='images-container'>
                <img src={Line1} id="line1" className="line-landing" style={{ width: "85%", marginRight: "10%", marginLeft: "10%" }} />
                <img src={Line2} id="line2" className="line-landing" style={{ width: "65%", marginRight: "20%", marginLeft: "20%" }} />
                <img src={Line3} id="line3" className="line-landing" style={{ width: "45%", marginRight: "30%", marginLeft: "30%" }} />
                <img src={Line4} id="line4" className="line-landing" style={{ width: "25%", marginRight: "40%", marginLeft: "40%" }} />
                <img src={Line5} id="line5" className="line-landing" style={{ width: "5%", marginRight: "50%", marginLeft: "50%" }} />

            </div>
      </div>
        </section>
    )
}
