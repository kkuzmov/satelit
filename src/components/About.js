import AboutStyles from './About.module.css'
import React from 'react'
import Header from './Header';
import BottomNav from './BottomNav';

function About() {
  return (
    <>
    <Header />
      <h1 className={AboutStyles.mainText}>Everybody has a story to tell..</h1>
      <h2 className={AboutStyles.mainText}>Tell me yours.</h2>
    <BottomNav />
    </>
  )
}

export default About
