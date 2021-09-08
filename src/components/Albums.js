// import AboutStyles from './About.module.css'
import React from 'react'
import Header from './Header';
import BottomNav from './BottomNav';
import image from '../img/trip.jpeg';
import image2 from '../img/trip-2.jpg';
import image3 from '../img/trip-3.jpg';
import AlbumsStyles from './Albums.module.css'
import { Link } from 'react-router-dom';

function Album(props){
  return(
    <>
    <article className={AlbumsStyles.tripArticle}>
      <div className={AlbumsStyles.imageContainer}>
      <img src={props.image} width='300px'></img>
      </div>
      <h2>{props.name}</h2>
    </article>
    </>
  )
}

function Albums() {
  return (
    <>
    <Header />
      <section className={AlbumsStyles.allTrips}>
      <Link to='/greece'>
      <Album name='Greece, 2012' image={image}/>
      </Link>
      <Album name='Japan, 2015' image={image2}/>
      <Album name='Spain, 2017' image={image3}/>
      </section>
    <BottomNav/>
    </>
  )
}

export{
  Albums,
  Album
}
