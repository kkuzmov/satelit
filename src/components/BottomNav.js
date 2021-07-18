import React from 'react';
import BottomNavStyles from './BottomNav.module.css'
import LowerNavButton from './LowerNavButton';



function BottomNav() {
  return (
    <section className={BottomNavStyles.bottomNav}>
      <LowerNavButton name='test one' />
      <LowerNavButton name='test two' />
      <LowerNavButton name='test three' />
      <LowerNavButton name='test four' />
      <LowerNavButton name='test five' />
    </section>
  )
}

export default BottomNav
