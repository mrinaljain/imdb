import React from "react"
import "./movieCard.css"

export default function MovieCard(props) {
   const { title, release_date, media_type, poster_path, overview } = props.movie;
   const poster_image = `https://image.tmdb.org/t/p/original${poster_path}`
   return (
      <div className="movie-card">
         <img src={poster_image} alt={title} />
         <div className="movie-details">
            <h2>{title}</h2>
            <p>{overview}</p>
            <div className="rating">
               {media_type}
            </div>
            <span>{release_date}</span>
            <button className="play-trailer-button">Play Trailer</button>
         </div>
      </div>
   );
}