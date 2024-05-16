import React from "react";
import WatchlistMovieCard from "../WatchlistMovieCard/WatchlistMovieCard";
import MovieContext from "../../context/MovieContext";
import Filter from "../../components/Filter/Filter";
import "./WatchlistMovies.css"
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
      <div className="filterSection">
         <Filter />
         {/* <Search/> */}
         <input
            onChange={handleSearchInput}
            type="search"
            value={searchKeyword}
            placeholder="Search Here ..." />
         <button
            onclick="sortAscending()"
            className="sort-buttons"
         >Sort Ascending</button>
         <button
            onclick="sortDescending()"
            className="sort-buttons"
         >Sort Descending</button>
      </div>
      <div className="wishlist">
         {watchListCards}
      </div>
   </>

   )
}

export default WatchlistMovies;