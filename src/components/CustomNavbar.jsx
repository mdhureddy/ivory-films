import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navBarData = [
    { id: 1, name: "Photography", path: "/photography" },
    { id: 2, name: "Films", path: "/films" },
    { id: 3, name: "Editorial", path: "/editorial" },
    { id: 4, name: "Blogs", path: "/blogs" },
    { id: 5, name: "Contact", path: "/contact" },
    { id: 6, name: "Faqs", path: "/faqs" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="custom-navbar">
      <div className="nav-container">
        
        {/* Left - Navigation Links */}
        <div className={`nav-left ${menuOpen ? "active" : ""}`}>
          {navBarData.map((item) => (
            <Link  key={item.id}  to={item.path}  onClick={closeMenu}  className={location.pathname === item.path ? "active" : ""}>{item.name}</Link>
          ))}
          {/* Add social + button here for mobile */}
          <div className="mobile-social">
            <Link to="#"><IoLogoInstagram size={26} /></Link>
            <Link to="#"><FaFacebook size={26} /></Link>
            <button className="btn m-3" style={{ backgroundColor: "#B49E64" }}><Link to="/contact" style={{ color: "white" }} onClick={closeMenu}>Get Touch</Link></button>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="nav-center"><Link to="/" className="nav-logo" onClick={closeMenu}>IVORY <span>FILMS</span></Link></div>
        {/* Right - Socials + Button */}
        <div className="nav-right">
          <Link to="#"><IoLogoInstagram size={26} /></Link>
          <Link to="#"><FaFacebook size={26} /></Link>
          <button className="btn" style={{ backgroundColor: "#B49E64" }} onClick={closeMenu}>
            <Link to="/contact" style={{ color: "white",textDecoration:"none" }}>Get Touch</Link>
          </button>
        </div>

        {/* Hamburger for mobile */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default CustomNavbar;
