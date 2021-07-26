import React from "react";
import { Link } from "react-router-dom";
import BottomNavStyles from "./BottomNav.module.css";

function BottomNav() {
  return (
    <section className={BottomNavStyles.bottomNav}>
      <article className={BottomNavStyles.homeBottomNav}>
        <Link to="/" className={BottomNavStyles.link}>Home</Link>
      </article>
      <article className={BottomNavStyles.storyBottomNav}>
        <Link to="/story" className={BottomNavStyles.link}>Story</Link>
      </article>
      <article className={BottomNavStyles.staffBottomNav}>
        <Link to="/staff" className={BottomNavStyles.link}>Staff</Link>
      </article>
      <article className={BottomNavStyles.aboutBottomNav}>
        <Link to="/about" className={BottomNavStyles.link}>About</Link>
      </article>
    </section>
  );
}

export default BottomNav;
