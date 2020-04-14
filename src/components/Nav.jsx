import React, { useState } from 'react';

function Nav(props) {
  const [navMenu, setNavMenu] = useState(false);
  const handleHamburgerClick = () => {
    // if navMenu => close it
    // else open it
    setNavMenu(!navMenu);
  }

  const showStyle = {
    display:'flex',
    flexDirection: 'column',

  }

  const hideStyle = {
    display:'none'
  }
  
  return (
    <div className='nav'>
      <div className="logo">
        <img src="logo.svg" alt="shortly logo"/>
      </div>
      <div 
        style={navMenu ? showStyle : hideStyle} 
        className="nav-items">
        <div className='nav-links'>
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
        <div className="login">
          <div>Login</div>
          <input type="button" value="Sign Up"/>
        </div>
      </div>
      <div className="hamburger">
        <img onClick={handleHamburgerClick}src="icon-hamburger.svg" alt=""/>
      </div>
    </div>
  );
}

export default Nav;