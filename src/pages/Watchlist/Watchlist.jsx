import React from "react";
import Filter from "../../components/Filter/Filter";
import WatchlistMovies from "../../components/WatchlistMovies/WatchlistMovies";
import Search from "../../components/Search/Search";

function Watchlist(props) {
   return (
      <>
         <Filter/>
         <Search/>
         <WatchlistMovies handelAddToWatchList={props.handelAddToWatchList} watchList={props.watchList} />
      </>
   );
}

export default Watchlist;

// bring data from local storege and save in state
// create UI of the page
// add option to remove movie from  watchlist
// add search functionality