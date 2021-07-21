import React from 'react'
import DropdownNavStyles from './DropdownNav.module.css'


function DropdownNav() {
  return (
    <ul className={DropdownNavStyles.dropdown}>
      <li>Home</li>
      <li>Test</li>
      <li>Staff</li>
      <li>About</li>
    </ul>
  )
}

export default DropdownNav
