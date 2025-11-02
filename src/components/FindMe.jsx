import React from 'react'
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const FindMe = () => {
  return (
    <div className="left-contact">
        <div className="findme">
            <h1>findme<PiArrowElbowRightDownBold /></h1>
            <div className="para">
                <p><HiOutlineMail />Email: balunkeswar.dey123@gmail.com</p>
                <p><FiPhoneCall />Tel: +91 8658521314</p>
            </div>
        </div>
    </div>
  )
}

export default FindMe