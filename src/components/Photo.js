import React from 'react'
import PhotoStyles from './Photo.module.css'

function Photo(props) {
  return (
    <>
    <div className={PhotoStyles.imageContainer}>
      <img src={props.imageUrl} width={270}></img>
    </div>
    </>
  )
}

export default Photo
