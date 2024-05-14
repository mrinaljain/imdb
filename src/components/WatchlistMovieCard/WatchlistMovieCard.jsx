import React from "react";
import "./WatchlistMovieCard.css"
import MovieContext from "../../context/MovieContext";
function WatchlistMovieCard(props){
   const { title, vote_count, popularity } = props.movie;
   const { deleteFromWatchList } = React.useContext(MovieContext);
   const poster_image = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`
   const style = {
      backgroundImage: `url(${poster_image})`
   }
   return (
      <div className="watchlistMovieCard">
         <div className="poster_image"
            style={style}
         ></div>
         <h3> {title ?? "No Name"}</h3>
         <span> {vote_count}</span>
         <span> {popularity}</span>
         <span> Genre</span>
         <button onClick={() => deleteFromWatchList(props.movie)}> X </button>
      </div>
   )
}

export default WatchlistMovieCard;