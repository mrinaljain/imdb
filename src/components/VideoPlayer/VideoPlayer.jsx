import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ onClose, movieId }) {
   const [videoId, setVideoId] = React.useState([]);
   const apikey = "525fd47539a462f413272290cd11fd6d"
   const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${apikey}`;
   React.useEffect(function () {
      fetch(baseUrl)
         .then(response => response.json())
         .then(data =>
            setVideoId(data["results"][0].key)
         );
   }, [baseUrl]);
   return (
      <div className="modal">
         <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <div className="video-container">
               <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
               </iframe>
            </div>
         </div>
      </div>
   );
}

export default VideoPlayer;
