import React from 'react'
import Header from './Header';
import BottomNav from './BottomNav';
import StaffStyles from "./Staff.module.css";


function Staff() {
  return (
    <>
    <Header />
    <div className={StaffStyles.staffHeading}>
      <h1>This is staff...</h1>
    </div>
    <BottomNav />
    </>
  )
}

export default Staff
