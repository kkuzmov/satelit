import React from "react";
import HomeStyles from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1 className={HomeStyles.mainHeading}>Welcome to Satellite X social club</h1>
      <h2 className={HomeStyles.secondaryHeading}>Enjoy our photos and stories</h2>
      <h2 className={HomeStyles.secondaryHeading}>Create your own</h2>
    </div>
  );
}

export default Home;
