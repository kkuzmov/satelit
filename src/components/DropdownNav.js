import React, { useState } from "react";
import DropdownNavStyles from "./DropdownNav.module.css";
import { MdViewWeek } from "react-icons/md";
import { Link } from "react-router-dom";
import { toggleNav } from "../services/services";

function DropdownNav() {
  const [navClass, setNavClass] = useState("navHidden");
  const [iconClass, setIconClass] = useState("iconDefault");

  return (
    <nav className={DropdownNavStyles.nav}>
      {/* dropdown does not work for whatever reason */}
      <MdViewWeek
        className={DropdownNavStyles[iconClass]}
        onClick={() => {
          toggleNav(navClass, iconClass, setNavClass, setIconClass);
        }}
      />
      <ul className={DropdownNavStyles[navClass]} id={DropdownNavStyles.navUl}>
        <Link to="/" className={DropdownNavStyles.link}>
          <li>Home</li>
        </Link>
        <Link to="/photos" className={DropdownNavStyles.link}>
          <li>Photos</li>
        </Link>
        <Link to="/staff" className={DropdownNavStyles.link}>
          <li>Staff</li>
        </Link>
        <Link to="/about" className={DropdownNavStyles.link}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default DropdownNav;
