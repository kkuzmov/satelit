import React, { useState } from "react";
import DropdownNavStyles from "./DropdownNav.module.css";
import { CgMenuGridO } from "react-icons/cg";

function DropdownNav() {
  const [navClass, setNavClass] = useState('navHidden');
  const [iconClass, setIconClass] = useState('icon');

  function toggleNav(){
    navClass == 'navVisible' ? setNavClass('navHidden') : setNavClass('navVisible')
    iconClass == 'icon' ? setIconClass('iconOnClick') : setIconClass('icon')
  }

  return (
    <nav className={DropdownNavStyles.nav}>
      <CgMenuGridO className={DropdownNavStyles[iconClass]} onClick={toggleNav}/>
      <ul className={DropdownNavStyles[navClass]} id={DropdownNavStyles.navUl}>
        <li>Home</li>
        <li>Story</li>
        <li>Staff</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default DropdownNav;
