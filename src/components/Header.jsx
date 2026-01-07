import React, { useState } from "react";
import "./Header.css";
import '../index.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // حالة القائمة
  const toggleMenu = () => setIsOpen(!isOpen); // دالة التبديل

  return (
    <div className="sidebar">

     
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#whyme">Why Me?</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="sidebar-footer">
        <a href="https://github.com/souacihadil" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/souaci-hadil-3726412b4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
      </nav>

      

    </div>
  );
};

export default Header;

