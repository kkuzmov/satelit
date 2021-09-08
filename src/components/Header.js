import React from "react";
import HeaderStyle from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../logo/Satelit-X-logo.png";
import DropdownNav from "./DropdownNav";


function Header() {
  return (
    <>
    <DropdownNav />
    <header className={HeaderStyle.header}>
      <Link to='/'>
      <figure className={HeaderStyle.figure}>
        <img src={logo} className={HeaderStyle.logo}></img>
      </figure>
      </Link>
    </header>
    </>
  );
}

export default Header;
