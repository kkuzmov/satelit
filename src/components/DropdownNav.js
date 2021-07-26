import React, { useState } from "react";
import DropdownNavStyles from "./DropdownNav.module.css";
import { MdViewWeek } from "react-icons/md";

function DropdownNav() {
  const [navClass, setNavClass] = useState('navHidden');
  const [iconClass, setIconClass] = useState('iconDefault');

  function toggleNav(){
    navClass == 'navVisible' ? setNavClass('navHidden') : setNavClass('navVisible')
    iconClass == 'iconDefault' ? setIconClass('iconRotated') : setIconClass('iconDefault')
  }

  return (
    <nav className={DropdownNavStyles.nav}>
      <MdViewWeek className={DropdownNavStyles[iconClass]} onClick={toggleNav}/>
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
