import React from 'react';

import logo from '../assets/logo.png';

function Footer() {
   return (
      <div className="footer">
         <img className="footer__logo" src={logo} alt="" />
         <p className="footer__text">© 2022 WatchIt | Gloria Duan</p>
      </div>
   );
}

export default Footer;
