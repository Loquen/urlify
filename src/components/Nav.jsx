import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';

function Nav(props) {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  }
  
  return (
    
      
     
      //   
      // </div>

    <div className="navBar">
      <div className="logo">
        <img src="logo.svg" alt="shortly logo"/>
      </div>
      <button onClick={toggleMenu}>
        <FaAlignRight />
      </button>
      <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
        <li className="links" href="#">Features</li>
        <li className="links" href="#">Pricing</li>
        <li className="links" href="#">Resources</li>
      </ul>
      <div className="login">
        <div>Login</div>
        <input type="button" value="Sign Up"/>
      </div>
    </div>

  );
}

export default Nav;