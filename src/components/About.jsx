import React from 'react'
import Introduction from './Introduction'
import Skill from './Skill'

const About = () => {
    const skilldata =[
        {
            name:"frontend",
            skill:["HTML","CSS","JavaScript","Tailwindgit push -u origin main","ReactJs"]
        },
        {
            name:"backend",
            skill:["Python","Django"]
        },{
            name:"database",
            skill:["SQL"]
        }
    ]
  return (
    <>
        <h2 className="about" id='about'>About me</h2>
        <div className="about_container">
            <Introduction/>
            <Skill skill={skilldata}/>
        </div>
    </>
  )
}

export default About