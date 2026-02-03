import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../images/factorypro-logo.png"


export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* Navigation */}
        <nav className="nav">
        
          <Link to="/">Home</Link>
         <Link to="/about">About Us</Link>
         <Link to="/blog">Blog</Link>
         <Link to="/project">Project</Link>
         <Link to="/project">Pages</Link>
         <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Phone */}
        <div className="phone">
          <span className="phone-icon">📞</span>
          <span>+01 123456789</span>
        </div>
      </div>
    </header>
  );
}
