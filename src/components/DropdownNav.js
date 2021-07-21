import React from "react";
import DropdownNavStyles from "./DropdownNav.module.css";
import { CgMenuGridO } from "react-icons/cg";


function DropdownNav() {
  return (
    <nav className={DropdownNavStyles.nav}>
      <CgMenuGridO className={DropdownNavStyles.icon} />
      <ul className={DropdownNavStyles.dropdown}>
        <li>Home</li>
        <li>Test</li>
        <li>Staff</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default DropdownNav;
