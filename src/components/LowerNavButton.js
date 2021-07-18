import React from 'react'
import LowerNavButtonStyles from './LowerNavButton.module.css'


function LowerNavButton(props) {
  return (
    <article>
      <p className={LowerNavButtonStyles.lowerNavItem}>{props.name}</p>
    </article>
  )
}

export default LowerNavButton
