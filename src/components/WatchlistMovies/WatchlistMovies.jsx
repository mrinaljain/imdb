import React from "react";
import WatchlistMovieCard from "../WatchlistMovieCard/WatchlistMovieCard";
import MovieContext from "../../context/MovieContext";
function WatchlistMovies(props) {
   const { watchList } = React.useContext(MovieContext);
   const [searchKeyword, setSearchKeyword] = React.useState("");
   function handleSearchInput(event) {
      let searchText = event.target.value;
      setSearchKeyword(searchText);
      console.log(searchText.length);


   }
   let updatedWatchList = searchKeyword.length > 0 ? watchList.filter((movie) => movie.title.toLowerCase().includes(searchKeyword.toLowerCase())) : watchList;

   const watchListCards = updatedWatchList.map((movie) => <WatchlistMovieCard key={movie.id} movie={movie} />);


   return (<>
      <center>
         <input
            onChange={handleSearchInput}
            type="search"
            value={searchKeyword}
            placeholder="Search Here ..." />
      </center>
      <div className="wishlist">
         {watchListCards}
      </div>
   </>

   )
}

export default WatchlistMovies;