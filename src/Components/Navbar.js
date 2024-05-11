import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import logo from '../Images/logo.png'
import btnarrow from '../Images/btn-arrow.png';

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <header className="header" > 
          <nav className='navbar' id={isScrolled ? 'scrolled' : ''} >
            <div className="left-side-menu">
              <a href="/">
                <img src={logo} alt="logo" title="logo" />
              </a>
            </div>
            <div className={isActive ? 'center-menu active' : 'center-menu'}>
              <NavLink to="/" onClick={toggleClass} className="tg">
                <li>Home</li>
              </NavLink>
              <a href="#about" onClick={toggleClass} className="tg">
                <li>About Us</li>
              </a>
              <a href="https://forms.gle/dGR3br2XitD6Leda8" onClick={toggleClass} className="tg">
                <li>Apply IDO</li>
              </a>
              <a href="https://gunpad.gitbook.io/gunpad" onClick={toggleClass} className="tg">
                <li>Docs</li>
              </a>
              <a href="https://t.me/GunPad" onClick={toggleClass} className="tg">
                <li>Telegram</li>
              </a>
              <a href="https://twitter.com/GunPadLaunchpad" onClick={toggleClass} className="tg">
                <li>Twitter</li>
              </a>
              <Link to='/dapp'>
              <a  onClick={toggleClass} className="btn">
                Presale <img src={btnarrow} alt='logo' />
              </a>
              </Link>
            </div>
            <div onClick={toggleClass} className="navbar-toggle">
              <span className={isActive ? 'active1' : ''} />
              <span className={isActive ? 'active2' : ''} />
              <span className={isActive ? 'active3' : ''} />
            </div>
          </nav>
        </header>
  );
}

export default Navbar;
