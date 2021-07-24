import React from 'react';
import BottomNavStyles from './BottomNav.module.css'
import LowerNavButton from './LowerNavButton';


function BottomNav() {
  return (
    <section className={BottomNavStyles.bottomNav}>
      <LowerNavButton name='Home' color="red" />
      <LowerNavButton name='Story' />
      <LowerNavButton name='Staff' />
      <LowerNavButton name='About' />
    </section>
  )
}

export default BottomNav
