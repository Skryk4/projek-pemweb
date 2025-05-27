import React from 'react';
import './HeaderTop.css';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-circle">
          <img src="/Images/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-circle">
          <img src="/Images/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon-circle">
          <img src="/Images/youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="icon-circle">
          <img src="/Images/tiktok.png" alt="TikTok" />
        </a>
      </div>
      <div className="contact-info">
        <span><img src="/Images/location.png" alt="Location" /> Kampus 2 YASMI : Jl. Tuparev / Islamic Center No. 1-3</span>
        <span><img src="/Images/gmail.png" alt="Email" /> info@akpar.yasmicrb.ac.id</span>
        <span><img src="/Images/phone.png" alt="Phone" /> (+62) 812-2339-4535</span>
      </div>
    </div>
  );
};

export default HeaderTop;
