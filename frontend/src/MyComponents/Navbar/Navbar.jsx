import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar d-flex justify-content-between align-items-center px-4">

      <h2 className="logo m-0">
        <Link to="/" className="logo-link">Hideaway Resort</Link>
      </h2>

      <ul className="nav-links d-flex gap-4 m-0">
        <li><Link to="/" className="nav-btn">Home</Link></li>
        <li><Link to="/gallery" className="nav-btn">Gallery</Link></li>
        <li><Link to="/amenities" className="nav-btn">Amenities</Link></li>
        <li><Link to="/packages" className="nav-btn">Packages</Link></li>
      </ul>

      <div className="auth-buttons d-flex gap-2">
        <Link to="/signin" className="signin-btn">Sign In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>

    </nav>
  );
};

export default Navbar;
