import React from "react"
import "./MovieCard.css"
import { Link } from "react-router-dom";

export default function MovieCard(props) {
   const { id, title, release_date, media_type, poster_path } = props.movie;
   const poster_image = `https://image.tmdb.org/t/p/original${poster_path}`
   return (
      <div className="movie-card">
            <img src={poster_image} alt={title} />
            <div className="movie-details">
               <h2>{title}</h2>
            <Link to={`/details/${id}`}><button>More Details</button></Link>
            </div>
      </div>
   );
}