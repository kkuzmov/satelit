// import AboutStyles from './About.module.css'
import React from 'react'
import Header from './Header';
import BottomNav from './BottomNav';
import image from '../img/trip.jpeg';
import image2 from '../img/trip-2.jpg';
import image3 from '../img/trip-3.jpg';
import TripsStyles from './Trips.module.css'

function Trip(props){
  return(
    <>
    <article className={TripsStyles.tripArticle}>
      <div className={TripsStyles.imageContainer}>
      <img src={props.image} width='300px'></img>
      </div>
      <h2>{props.name}</h2>
    </article>
    </>
  )
}

function Trips() {
  return (
    <>
    <Header />
      <section className={TripsStyles.allTrips}>
      <Trip name='Greece, 2012' image={image}/>
      <Trip name='Japan, 2015' image={image2}/>
      <Trip name='Spain, 2017' image={image3}/>
      </section>
    <BottomNav/>
    </>
  )
}

export default Trips
