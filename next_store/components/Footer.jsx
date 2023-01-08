import React from 'react';
import { AiFillInstagram, AiOutlineTwitter , AiFillFacebook , AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Odeh Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook/>
        <AiOutlineWhatsApp />
      </p>
    </div>
  )
}

export default Footer