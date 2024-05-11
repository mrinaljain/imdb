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
         <div className="moviesSlider">
            {moviesArray}
         </div>
      </>
   );
}