import React from "react";
import WatchlistMovieCard from "../WatchlistMovieCard/WatchlistMovieCard";
import MovieContext from "../../context/MovieContext";
function WatchlistMovies(props) {
   const { watchList } = React.useContext(MovieContext);

   const watchListCards = watchList.map((movie) => <WatchlistMovieCard movie={movie} />);
   return (
      <div>
         {watchListCards}
      </div>
   )
}

export default WatchlistMovies;