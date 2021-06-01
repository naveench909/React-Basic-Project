import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showNavbar , setShowNavbar] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight)
    if(showNavbar){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height='0px'
    }
  },[showNavbar])
  return (
    <nav className='nav-center'>
      <div className="nav-container">
        <div className="logo-img-cntr">
        <img className="logo-img" src={logo} alt="logo" />

        </div>
        <div className="toggle-btn-cntr">
        <button className="toggle-btn" onClick={()=>setShowNavbar(!showNavbar)}><FaBars /></button>
        </div>
      </div>

      <div className='links-container' ref={linksContainerRef}>
      <ul className="links" ref={linksRef}>
        {links.map((link)=>{
          const{id, url , text}= link;
          return <li key={id} >
              <a href={url}>{text}</a>
          </li>
        })}
      </ul>
    </div>

      <div className="social-container">
        <ul className="social-links">
          {social.map((link)=>{
            const{id , url , icon} = link;
            return <li key={id}>
                <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
