import React from "react";
import HeaderStyle from "./Header.module.css";
import logo from "../logo/Satellite-X-logo-white.png";
import { CgMenuGridO } from "react-icons/cg";
import DropdownNav from "./DropdownNav";

function Header() {
  return (
    <header className={HeaderStyle.header}>
      <CgMenuGridO className={HeaderStyle.icon}/>
      <DropdownNav />
      <figure className={HeaderStyle.figure}>
        <img src={logo} className={HeaderStyle.logo}></img>
      </figure>
    </header>
  );
}

export default Header;
