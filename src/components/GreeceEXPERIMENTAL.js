import React from "react";
import Photo from "./Photo";
import photo1 from "../photos/IMG_2855.jpg";
import photo2 from "../photos/IMG_2925.jpg";
import photo3 from "../photos/IMG_2931.jpg";
import photo4 from "../photos/IMG_2948.jpg";
import photo5 from "../photos/IMG_2964.jpg";
import photo6 from "../photos/IMG_2989.jpg";
import Header from './Header';
import BottomNav from './BottomNav';
import GreeceStyles from './GreeceEXPERIMENTAL.module.css'

function GreeceEXPERIMENTAL() {
  return (
    <>
      <Header />
      <section className={GreeceStyles.photosContainer}>
      <Photo imageUrl={photo1}></Photo>
      <Photo imageUrl={photo2}></Photo>
      <Photo imageUrl={photo3}></Photo>
      <Photo imageUrl={photo4}></Photo>
      <Photo imageUrl={photo5}></Photo>
      <Photo imageUrl={photo6}></Photo>
      <BottomNav />
      </section>
    </>
  );
}

export default GreeceEXPERIMENTAL;
