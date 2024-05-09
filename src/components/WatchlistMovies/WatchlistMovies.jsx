import React from "react";
import WatchlistMovieCard from "../WatchlistMovieCard/WatchlistMovieCard";
function WatchlistMovies(props) {

   const watchListCards = props.watchList.map((movie) => <WatchlistMovieCard movie={movie} handelAddToWatchList={props.handelAddToWatchList} />);
   return (
      <div>
         {watchListCards}
      </div>
   )
}

export default WatchlistMovies;