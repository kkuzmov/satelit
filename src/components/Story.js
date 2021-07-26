import React from 'react'
import Header from './Header'
import BottomNav from './BottomNav'
import StoryStyles from "./Story.module.css";

function Story() {
  return (
    <>
    <Header />
      <div className={StoryStyles.storyHeading}>
      <h1>This is story...</h1>
      </div>
    <BottomNav />
    </>
  )
}

export default Story
