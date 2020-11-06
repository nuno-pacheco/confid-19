import React from 'react';
import { Link } from 'react-router-dom';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../translations/en';
import pt from '../translations/pt';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('pt', pt);
counterpart.setLocale('en');


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
          <img url="https://res.cloudinary.com/dylut4r4t/image/upload/v1603274628/confid-19/YOU_CAN_TRUST_2_oqdycn.png" alt="Confid-19 Logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="collapse navbar-collapse" id="navarNavDropdown"></span>
        </button>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu  
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to ="/personal" className="dropdown-item"><Translate content="span1"/></Link>
            <Link to ="/countries" className="dropdown-item"><Translate content="span2"/></Link>
            <Link to ="/news" className="dropdown-item"><Translate content="span3"/></Link>
          </div>
        </li>
      </div>
    </nav>
  )
}
 
export default NavBar;