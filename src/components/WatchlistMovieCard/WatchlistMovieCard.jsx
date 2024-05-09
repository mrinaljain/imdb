import React from "react";
import "./WatchlistMovieCard.css"
function WatchlistMovieCard(props){
   const poster_image = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`
   const style = {
      backgroundImage: `url(${poster_image})`
   }
   
   return (
      <div className="watchlistMovieCard">
         <div className="poster_image"
            style={style}
         ></div>
         <h3> {props.movie.title}</h3>
         <span> {props.movie.vote_count}</span>
         <span> {props.movie.popularity}</span>
         <span> Genre</span>
         <button>Remove from WatchList</button>
      </div>
   )
}

export default WatchlistMovieCard;