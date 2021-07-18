import React from "react";
import HeaderStyle from "./Header.module.css";
import logo from "../logo/Satellite-X-logo-white.png";
import { FiAlignJustify } from "react-icons/fi";

function Header() {
  return (
    <header className={HeaderStyle.header}>
      <FiAlignJustify className={HeaderStyle.icon}/>
      <figure className={HeaderStyle.figure}>
        <img src={logo} className={HeaderStyle.logo}></img>
      </figure>
    </header>
  );
}

export default Header;
