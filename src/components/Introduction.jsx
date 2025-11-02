import React from 'react'
import { FaRegFileLines } from 'react-icons/fa6'

const Introduction = () => {
  return (
    <div className="introduction_box">
        <div className="textpart">
            <h2>my introduction</h2>
            <p>I'm <strong>Balunkeswar Dey</strong>, a fullstack developer from odisha. I enjoy building responsive and user-friendly websites. Skilled in Python,Django,SQL,HTML,CSS,JavaScript,React.JS and Tailwind css with hands-on project experience. Created a Todo-Application, Digital calculator and persional portfolio. I'm passionate about clean UI and mobile-first design. Looking to grow in a tech-driven team and learn more everyday.</p>
        </div>
        <div className="dwnldpart">
            <button className='dwnd-btn'><a href='../assets/BaluCV.docx' download={true}>Download CV <FaRegFileLines/></a></button>
        </div>
    </div>
  )
}

export default Introduction