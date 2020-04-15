import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';

function Nav(props) {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  }
  
  return (
    <div className="navBar">
      <img src="logo.svg" alt="shortly logo"/>
      <button onClick={toggleMenu}>
        <FaAlignRight />
      </button>
      <div className="all-links">
        <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
          <li className={toggle ? "links" : "hide-links links"} href="#">Features</li>
          <li className={toggle ? "links" : "hide-links links"} href="#">Pricing</li>
          <li className={toggle ? "links" : "hide-links links"} href="#">Resources</li>
        </ul>
        <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
          <li className={toggle ? "links" : "hide-links links"}>Login</li>
          <li className={toggle ? "links" : "hide-links links"}><input type="button" value="Sign Up"/></li>
        </ul>
      </div>
    </div>

  );
}

export default Nav;