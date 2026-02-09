// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="custom-navbar d-flex justify-content-between align-items-center px-4">

//       {/* Logo */}
//       <h2 className="logo m-0">Hideaway Resort</h2>

//       {/* Center Menu */}
//       <ul className="nav-links d-flex gap-4 m-0">
//         <li><button className="nav-btn">Home</button></li>
//         <li><button className="nav-btn">Pages</button></li>
//         <li><button className="nav-btn">Gallery</button></li>
//         <li><button className="nav-btn">Amenities</button></li>
//         <li><button className="nav-btn">Packages</button></li>
//         <li><button className="nav-btn">Our History</button></li>
//       </ul>

//       {/* Auth Buttons */}
//       <div className="auth-buttons d-flex gap-2">
//         <button className="signin-btn">Sign In</button>
//         <button className="signup-btn">Sign Up</button>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar d-flex justify-content-between align-items-center px-4">

      <h2 className="logo m-0">Hideaway Resort</h2>

      <ul className="nav-links d-flex gap-4 m-0">
        <li><button className="nav-btn">Home</button></li>
        <li><button className="nav-btn">Pages</button></li>
        <li><button className="nav-btn">Gallery</button></li>
        <li><button className="nav-btn">Amenities</button></li>
        <li><button className="nav-btn">Packages</button></li>
        <li><button className="nav-btn">Our History</button></li>
      </ul>

      <div className="auth-buttons d-flex gap-2">
        <button className="signin-btn">Sign In</button>
        <button className="signup-btn">Sign Up</button>
      </div>

    </nav>
  );
};

export default Navbar;
