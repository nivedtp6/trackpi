import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'
function Footer() {
  return (
    <div className='footer-head'>
       <h2>Questions to talk</h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, possimus tempore non suscipit maxime illum ipsa dolorem in culpa recusandae sunt quos accusantium voluptatibus, quam, eius perferendis? Nesciunt, harum aut?</p>
       <div className='footer-icons'>
<FaFacebook/>
<FaInstagramSquare/>
<FaLinkedin/>

       </div>
       <div className='footer-last'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate aliquid unde voluptatum est ipsa, deserunt dolorum obcaecati atque suscipit nesciunt similique voluptatem sunt reprehenderit nisi earum, vel hic exercitationem.</p>
       </div>
    </div>
  )
}

export default Footer
