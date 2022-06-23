import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <a href="./home" className="tab">Home</a>
      <a href="./login" className="tab">Login</a>
    </div>
  )
}

export default NavBar;