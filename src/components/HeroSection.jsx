import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
// import { IoBasketballSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import ImageSection from "./ImageSection";
import Details from "./Details";

const HeroSection = () => {
  const data =[{icon:<FaInstagram />,
                link:"https://www.instagram.com/balu_balunkeswar_2004/?igsh=MWlkM2NrcHVxdGR6Nw%3D%3D#"
                },
                {icon:<TfiLinkedin />,
                  link:"https://www.linkedin.com/in/balunkeswar-dey-777b40309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                },
                // {icon:<IoBasketballSharp />,
                //   link:""},
                {icon:<FaGithub />,
                  link:"https://github.com/balu-balunkeswar2004 "}]
  return (
    <div className='hero' id="hero">
        <ImageSection/>
        <Details icondata={data}/>
    </div>
  )
}

export default HeroSection