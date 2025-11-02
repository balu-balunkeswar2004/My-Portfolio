import React from 'react'
import { FaRegFileLines } from 'react-icons/fa6'

const Details = ({icondata}) => {
  return (
    <div className="right-hero">
                <div className="text-container">
                        <span>Himansu Kumar Sahoo</span>
                        <h1>i'm</h1>
                        <h1>Python Fullstack Developer</h1>
                        <div className="buttons">
                            <button className="hire_btn">Hire me</button>
                            <button className="dwnd-btn"><a href='../assets/BaluCV.docx' download={true}>Download CV <FaRegFileLines  /></a> </button>
                        </div>
                </div>
                <div className="logo-container">
                    {
                        icondata.map((ele)=>{
                            return(
                                    <div className="icons"><a href={ele.link} target="_blank">{ele.icon}</a></div>
                            )
                        })
                    }
                </div>
            </div>
  )
}

export default Details