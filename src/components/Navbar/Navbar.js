import React from 'react';
import { Link } from 'react-router-dom';
 
const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to="/all_feelings" style={{ textDecoration: 'none' }}>Projects</Link></li>
    </ul>
    </nav>
  )
}
 
export default navbar;