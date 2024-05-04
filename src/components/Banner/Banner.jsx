import React from "react";
import "./Banner.css"

function Banner(props){
   const style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path ?? ""})`
   }
   console.log(props);
   return (
      <div className="movieBanner">
         <div className="movieBannerImg" style={style}></div>
         <div className="movieBannerContent">
            <h2>{props.movie.title}</h2>
            <p>{props.movie.overview}</p>
         </div>
      </div>
      
   )
}
export default Banner;