import React from "react";
import HomeStyles from "./Home.module.css";
import Header from './Header';
import BottomNav from './BottomNav';

function Home() {
  return (
    <>
    <Header />
    <div className={HomeStyles.homepageHeadings}> 
      <h1 className={HomeStyles.mainHeading}>Welcome to Satellite X social club</h1>
      <h2 className={HomeStyles.secondaryHeading}>Enjoy our photos and stories</h2>
      <h2 className={HomeStyles.secondaryHeading}>Create your own</h2>
    </div>
    <BottomNav />
    </>
  );
}

export default Home;
