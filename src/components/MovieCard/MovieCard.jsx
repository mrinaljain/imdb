import React from "react"
import "./MovieCard.css"
import { Link } from "react-router-dom";
import MovieContext from "../../context/MovieContext";

export default function MovieCard(props) {
   const { id, title, poster_path } = props.movie;
   const {handelAddToWatchList, deleteFromWatchList } = React.useContext(MovieContext);
   // let isFav = false;
   // console.log(props.watchList);
   function isFav() {
      // check if current movie id is present in wishlist
      // return true if present else false;
      for (let i = 0; i < props.watchList.length; i++) {
         const movie = props.watchList[i];
         if (movie.id === id) {
            return true;
         }
      }
      return false;
   }
   const poster_image = `https://image.tmdb.org/t/p/original${poster_path}`
   return (
      <div className="movie-card">
            <img src={poster_image} alt={title} />
            <div className="movie-details">
               <h2>{title}</h2>
            <Link to={`/details/${id}`}><button>More Details</button></Link>
            {isFav() ? <button onClick={() => deleteFromWatchList(props.movie)}>Remove from WatchList</button> 
               : <button onClick={() => handelAddToWatchList(props.movie)}>Add to WatchList</button>}
            </div>
      </div>
   );
}