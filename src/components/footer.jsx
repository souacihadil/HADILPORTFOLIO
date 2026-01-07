import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-main">

      <div className="footer-brand">
        <h2>Hadil<span>.</span></h2>
        <p>
          Crafting modern, interactive, and performant web experiences.
        </p>
      </div>

      <nav className="footer-nav">
        <h4>Explore</h4>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="footer-social">
        <h4>Connect</h4>
        <div className="social-icons">
          <a href="https://github.com/souacihadil"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/souaci-hadil-3726412b4/?skipRedirect=true"><FaLinkedinIn /></a>
          
        </div>
      </div>

    </div>

    <div className="footer-bottom">
      © {new Date().getFullYear()} Hadil. All rights reserved.
    </div>
  </div>
</footer>
  );
}


