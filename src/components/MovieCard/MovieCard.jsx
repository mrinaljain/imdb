import React from "react"
import "./movieCard.css"

export default function MovieCard(props) {
   const { Title, Year, Type, Poster } = props.movie;
   return (
      <div className="movie-card">
         <img src={Poster} alt={Title} />
         <div className="movie-details">
            <h2>{Title}</h2>
            <div className="rating">
               {Type}
            </div>
            <span>{Year}</span>
            <button className="play-trailer-button">Play Trailer</button>
         </div>
      </div>
   );
}