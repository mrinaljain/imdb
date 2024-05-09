import React from "react"
import MovieCard from "../MovieCard/MovieCard.jsx";
import "./TrendingMovies.css"


export default function TrendingMovies(props) {
   const moviesArray = props.movies.map(function (movie) {
      return <MovieCard key={movie.id}
         movie={movie}
         handelAddToWatchList={props.handelAddToWatchList} 
         watchList={props.watchList}
      />
   });
   return (
      <>
         <div className="moviesSlider">
            {moviesArray}
         </div>
      </>
   );
}