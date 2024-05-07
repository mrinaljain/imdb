import React from "react";
import "./Banner.css"
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function Banner(props) {
   const [showModal, setShowModal] = React.useState(false);
   const openModal = () => {
      setShowModal(true);
   };

   const closeModal = () => {
      setShowModal(false);
   };
   const style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path ?? ""})`
   }
   return (
      <>
         <div className="movieBanner">
            <div className="movieBannerImg" style={style}></div>
            <div className="movieBannerContent">
               <h2>{props.movie.title}</h2>
               <p>{props.movie.overview}</p>
               <button onClick={openModal} className="play-trailer-button">Play Trailer</button>
            </div>
         </div>
         {showModal && <VideoPlayer onClose={closeModal} movieId={props.movie.id} />}
      </>
   )
}
export default Banner;