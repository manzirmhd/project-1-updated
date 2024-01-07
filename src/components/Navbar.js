import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaFacebookSquare, FaLinkedinIn, FaTimes, FaTwitterSquare, FaYoutubeSquare,} from 'react-icons/fa';


import React from 'react'; 
import './Navbar.css'
import logo from './Assets/logo.png.webp';


function Navbar() {
    const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }  

    return (
<div className='main'>

    <nav ref={navRef}>
    <img src={logo} alt='logo' className='logo'/>
      <ul>
      <li><Link to="/" className='navbar-link'>Home</Link></li>
        <li><Link to="/about-us" className='navbar-link'>AboutUs</Link></li>
        <li><Link to="/program" className='navbar-link'>Program</Link></li>
        <li><Link to="/blog" className='navbar-link'>Blog</Link></li>
        <li><Link to="/contact" className='navbar-link'>Contact</Link></li>
      </ul>  

      <div className='call'> 
      <p>Call Us:</p>
      <p><Link to='#'> 0770770434</Link></p>
      </div>

      <div className='social'>
        <Link to='/#'><FaYoutubeSquare className='m-icon'/></Link>
        <Link to='/#'><FaFacebookSquare className='m-icon'/></Link>
        <Link to='/#'><FaLinkedinIn className='m-icon'/></Link>
        <Link to='/#'><FaTwitterSquare className='m-icon'/></Link>
      </div>
      <button className='nav-close-btn' onClick={showNavbar}>
        <FaTimes/>   
        </button>
    </nav>
        
        
    
    <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
    </button>
</div>

     );
}
export default Navbar;

