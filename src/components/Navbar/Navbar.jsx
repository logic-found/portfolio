import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import {Bio} from '../../data/data'
import { Link } from 'react-router-dom';
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { SlMenu as MobileIcon } from "react-icons/sl";
import { DiCssdeck } from 'react-icons/di';


const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [show, setShow] = useState("show");                          //for scrolling effect
  const [lastScrollY, setLastScrollY] = useState(0);                //for scrolling effect

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (window.scrollY > 250 && window.scrollY > lastScrollY) {
        setShow("show");
    } else {
      setShow("hide")
    }
    setLastScrollY(window.scrollY);
  }


  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link href="/" className="navLogo">
          <div className="navLogoLink"><DiCssdeck size="3rem" className='logo'/><span>Portfolio</span></div>
        </Link>
        <div className="mobileIcon" onClick={() => setMobileView(!mobileView)}>
          {!mobileView && <MobileIcon />}
          {mobileView && <CloseIcon />}
        </div>
        <div className="navItems">
          <a href="#about" className="navLink">About</a>
          <a href="#skills" className="navLink">Skills</a>
          <a href="#projects" className="navLink">Projects</a>
          <a href="#experience" className="navLink">Experience</a>
          <a href="#education" className="navLink">Education</a>
        </div>
        <div className="buttonContainer">
          <button className="githubButton"><a href={Bio.github} target="_blank">GitHub Profile</a></button>
        </div>

        {mobileView && <div className="mobileMenu">
          <a href="#about" className="mobileLink" onClick={()=> setMobileView(!mobileView)}>About</a>
          <a href="#skills" className="mobileLink" onClick={()=> setMobileView(!mobileView)}>Skills</a>
          <a href="#experience" className="mobileLink" onClick={()=> setMobileView(!mobileView)}>Experience</a>
          <a href="#projects" className="mobileLink" onClick={()=> setMobileView(!mobileView)}>Projects</a>
          <a href="#education" className="mobileLink" onClick={()=> setMobileView(!mobileView)}>Education</a>
          <button className="githubButtonMobileMenu"><a href={Bio.github} target="_blank">GitHub Profile</a></button>
        </div>

        }
      </div>
    </div>
  )
}

export default Navbar