import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <div className='footer-container'>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Copyright © {new Date().getFullYear()} RITVIK G. All rights reserved</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
