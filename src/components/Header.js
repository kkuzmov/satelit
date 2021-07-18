import React from "react";
import HeaderStyle from "./Header.module.css";
import logo from "../logo/satellite_logo.png";

function Header() {
  return (
    <header className={HeaderStyle.header}>
      <figure className={HeaderStyle.figure}>
        <img src={logo} className={HeaderStyle.logo}></img>
      </figure>
    </header>
  );
}

export default Header;
