import { React, useState, useEffect } from 'react';

export default function Navbar() {
  const createNavbar = () => {
    return (
      <nav>
        <div className="socials-navbar">
          <a className="favicon" href="#">
              <img src="../src/assets/favicon-dark-32x32.png" alt="favicon-icon" className="social-navbar-icons" id="linkedin-icon"/>
          </a>

          <div className="socials">

            <a href="https://www.linkedin.com/in/imcarlosvictor/" target="_blank" rel="noopener noreferrer" className="social-links">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/imcarlosvictor" target="_blank" rel="noopener noreferrer" className="social-links">
              <i class="fa fa-code-fork" aria-hidden="true"></i>
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
