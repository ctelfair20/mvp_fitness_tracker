import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="tab-box">
        <a href="./home" className="tab">Home</a>
        <a href="./login" className="tab">Login</a>
      </div>
    </div>
  )
}

export default NavBar;