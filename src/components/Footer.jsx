import { FaInstagram } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
// import { IoBasketballSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    const list=[{name:"Home",link:"#hero"},
                {name:"About",link:"#about"},
                {name:"Project",link:"#projects"},
                {name:"Contact",link:"#contact"}]
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
    <div className='footer'>
        <div className="name">Balunkeswar Dey</div>
        <div className="list">
                <ul>
                    {
                        list.map((ele)=><li><a href={ele.link}>{ele.name}</a></li>)
                    }
                </ul>
        </div>
        <div className='icon'>
            {
                data.map((ele)=><div class="icons"><a href={ele.link}>{ele.icon}</a></div>)
            }
        </div>
        <div className="copyright">Copyright &copy;  <a href="#"> Balunkeswar</a> - All rights reserved</div>
    </div>
  )
}

export default Footer