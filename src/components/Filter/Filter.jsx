import React from 'react';
import "./Filter.css"
import MovieContext from '../../context/MovieContext';
import { useSearchParams } from 'react-router-dom';
const Filter = () => {
   const { watchList, setWatchList } = React.useContext(MovieContext);
   const [searchParams, setSearchParams] = useSearchParams();

   let filterGenre = searchParams.get("genre");

   let genreList = watchList.map(movie => (
      <div
         onClick={() => handleGenreTap(movie)}
         className="chip selected"
      >{movie.genre_ids[0]}</div>)
   )

   function handleGenreTap(movie) {
      let selectedGenre = movie.genre_ids[0] ?? 0;
      setSearchParams((prevParams) => {
         prevParams.set("genre", selectedGenre);
         return prevParams;
      })
      setWatchList((oldWatchList) => {
         let filteredWatchlist = oldWatchList.filter((movie) => {
            return movie.genre_ids.includes(selectedGenre)
         });
         return filteredWatchlist;
      });
   }

   return (
      <div className="movie-filter">
         <div className="chips">
            {genreList}
         </div>
      </div>
   );
};

export default Filter;
