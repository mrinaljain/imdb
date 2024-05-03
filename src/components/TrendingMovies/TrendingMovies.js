import React from "react"
import MovieCard from "../MovieCard/MovieCard.jsx";
import "./TrendingMovies.css"
//946f31c 
export default function TrendingMovies() {

   const [movies, setMovies] = React.useState([])
   React.useEffect(function(){
      fetch("http://www.omdbapi.com/?apikey=946f31c&type=movie&s=love")
         .then(response => response.json())
      .then(data => setMovies(data["Search"]));
   },[]);
   const moviesArray = movies.map(function (movie) {
      return <MovieCard key={movie.imdbID}
         movie={movie}
      />
   });
   return (
      <div className="moviesSlider">
         {moviesArray}
      </div>
   );
}