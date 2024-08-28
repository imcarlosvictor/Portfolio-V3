import { React, useState, useEffect } from 'react';

export default function Navbar() {
  const createNavbar = () => {
    return (
      <nav>
        <div className="socials-navbar">
          <a className="favicon" href="http://localhost:5173/">
              <img src="../src/assets/icons/favicon-32x32.png" alt="favicon-icon" className="social-navbar-icons" id="linkedin-icon"/>
          </a>

          <div className="socials">

            <a href="/about" className="social-links">
              <i className="fa-solid fa-person-falling fa-1x"></i>
            </a>
            <a href="https://www.linkedin.com/in/imcarlosvictor/" target="_blank" rel="noopener noreferrer" className="social-links">
              <i className="fa-brands fa-linkedin-in fa-1x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/imcarlosvictor" target="_blank" rel="noopener noreferrer" className="social-links">
              <i className="fa-brands fa-github " aria-hidden="true"></i>
            </a>       

          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      { createNavbar() }
    </>
  )
}
