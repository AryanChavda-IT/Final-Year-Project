import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Hideaway Resort</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Elements</a></li>
      </ul>
      <button className="book-btn">Book Now</button>
    </nav>
  );
}

export default Navbar;
