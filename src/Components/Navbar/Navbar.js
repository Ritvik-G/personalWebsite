import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/download.ico';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
          <img className='nav-logo' src={logo}/>
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' >
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <img className='nav-logo' src={logo}/>
              </Link>
            </li>
            <li className='nav-item1' >
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item' >
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className='nav-item' >
              <Link
                to='/courses'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
            </li>
            <li className='nav-item' >
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item' >
              <Link
                to='/articles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Articles
              </Link>
            </li>            
          </ul>
          
        </div>
      </nav>
      </>
  );
}



export default Navbar;
