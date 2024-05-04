import React from "react"
import MovieCard from "../MovieCard/MovieCard.jsx";
import "./TrendingMovies.css"


export default function TrendingMovies(props) {
   const moviesArray = props.movies.map(function (movie) {
      return <MovieCard key={movie.id}
         movie={movie}
      />
   });
   return (
      <>
         <h2>Trending Movies</h2>
         <div className="moviesSlider">
            {moviesArray}
         </div>
      </>
   );
}