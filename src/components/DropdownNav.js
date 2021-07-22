import React, { useState } from "react";
import DropdownNavStyles from "./DropdownNav.module.css";
import { CgMenuGridO } from "react-icons/cg";

function DropdownNav() {
  const [navClass, setNavClass] = useState('navHidden')

  function toggleNav(){
    navClass == 'navVisible' ? setNavClass('navHidden') : setNavClass('navVisible')
  }
  

  return (
    <nav className={DropdownNavStyles.nav}>
      <CgMenuGridO className={DropdownNavStyles.icon} onClick={toggleNav}/>
      <ul className={DropdownNavStyles[navClass]}>
        <li>Home</li>
        <li>Test</li>
        <li>Staff</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default DropdownNav;
