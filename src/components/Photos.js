import React from "react";
import { Album } from "./Albums";
import wedding from "../img/wedding.jpg";
import trip from "../img/trip-4.jpeg";
import best from "../img/best.jpg";
import Header from "./Header";
import BottomNav from "./BottomNav";
import PhotosStyles from "./Photos.module.css";
import { Link } from "react-router-dom";

function Photos() {
  return (
    <div>
      <Header />
      <section className={PhotosStyles.allTrips}>
        <Link to="/albums">
          <Album name="Trips" image={trip} />
        </Link>
        <Album name="Weddings" image={wedding} />
        <Album name="The Best" image={best} />
      </section>
      <BottomNav />
    </div>
  );
}

export default Photos;
