import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="./" className="tab">Home</Link>
      <Link to="./login" className="tab">Login</Link>
    </nav>
  )
}

export default NavBar;