import React, { useState } from "react";
import DropdownNavStyles from "./DropdownNav.module.css";
import { MdViewWeek } from "react-icons/md";
import { Link } from "react-router-dom";

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
        <Link to='/'><li>Home</li></Link>
        <Link to='/story'><li>Story</li></Link>
        <Link to='/staff'><li>Staff</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </nav>
  );
}

export default DropdownNav;
