import React from "react";
import Filter from "../../components/Filter/Filter";
import WatchlistMovies from "../../components/WatchlistMovies/WatchlistMovies";
// import Search from "../../components/Search/Search";

function Watchlist(props) {
   return (
      <>
         <Filter/>
         {/* <Search/> */}
         <WatchlistMovies />
      </>
   );
}

export default Watchlist;
