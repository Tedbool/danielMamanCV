import React, { useRef, useState } from 'react'
import useScrollSnap from 'react-use-scroll-snap';
import Deliber_Mockup from "../../assets/Deliber-Mockup.svg";
import Deliber_Title from "../../assets/Deliber Title.svg";
import Smarty_Mockup from "../../assets/Smarty Mockup Picture.svg";
import Smarty_Title from "../../assets/Smarty Title.svg";
import Bookademic_Title from "../../assets/Bookademic Title.svg";
import Bookademic_Mockup from "../../assets/Bookademic Mockup Picutre.svg";
import './Projects.css';

export default function Projects() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 500, delay: 50 });
  const [current, setCurrent] = useState(0);


  const projects = [
    {
      classProject: "Deliber",
      titleImg: Deliber_Title,
      background: "#6FA298",
      firstTitle: "Deliber is a healthy home made food deliveries company.",
      secondTitle: 'This project was the final project as part of my UX studies.',
      img: Deliber_Mockup
    },
    {
      classProject: "Smarty",
      titleImg: Smarty_Title,
      background: "#50629B",
      firstTitle: "Smarty is a smart home mobile app to make your life easier.",
      secondTitle: 'My focus was adjusting "Smarty" to the needs of Israeli users.',
      img: Smarty_Mockup

    },
    {
      classProject: "Bookademic",
      titleImg: Bookademic_Title,
      background: "#8F5177",
      firstTitle: "Bookademic is a modern digital library system for students and researchers.",
      secondTitle: 'Starting from research through sketching and eventually to a full animated prototype.',
      img: Bookademic_Mockup
    }
  ];
  const length = projects.length;
  const nextProj = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevProj = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  console.log(current);

  return (
    <div className='projects' id="projects">
      <section ref={scrollRef} className="slider">
        {projects.map((project, index) => (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
              <div className='wrapper'>
                <button className='left-button'
                  onClick={nextProj}
                  onMouseEnter={(e) => {
                    //Designs for button hover
                    if (index !== projects.length - 1) {
                      e.target.style.background = projects[index + 1].background;
                      e.target.style.opacity = 1;
                    }
                    else {
                      e.target.style.background = projects[0].background;
                      e.target.style.opacity = 1;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.opacity = 0.2;
                  }}
                >
                  {
                    index !== projects.length - 1 ? projects[index + 1].classProject
                      : index === length - 1 ? projects[0].classProject : projects[0].classProject
                  }
                </button>
                <div className="project-wrapper">
                  <div className='titleShadow' style={{ background: project.background }}>
                    <img src={project.titleImg} className="title-img" />
                  </div>
                  <h1 className="project-title">
                    <span>{project.firstTitle}</span><br />
                    <span>{project.secondTitle}</span><br />
                    <img src={project.img} />
                  </h1>
                </div>
                <button className='right-button'
                  onClick={prevProj}
                  onMouseEnter={(e) => {
                    ////Designs for button hover
                    if (index === 0) {
                      e.target.style.background = projects[length - 1].background;
                      e.target.style.opacity = 1;
                    }
                    else {
                      e.target.style.background = projects[index - 1].background;
                      e.target.style.opacity = 1;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.opacity = 0.2;
                  }}
                >
                  {
                    index === 0 ? projects[length - 1].classProject
                      : projects[index - 1].classProject
                  }
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
