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
      <h3>{props.name}</h3>
      <img src={props.image} width='200px'></img>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    </article>
    </>
  )
}

function Trips() {
  return (
    <>
    <Header />
      <section className={TripsStyles.allTrips}>
      <Trip name='Greece' image={image}/>
      <Trip name='Japan' image={image2}/>
      <Trip name='Spain' image={image3}/>
      </section>
    <BottomNav/>
    </>
  )
}

export default Trips
