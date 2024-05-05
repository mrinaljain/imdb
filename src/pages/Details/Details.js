import React from "react"
import "./Details.css"
import Banner from "../../components/Banner/Banner.jsx";
import CastCrew from "../../components/CastCrew/CastCrew.jsx";
import { useParams } from "react-router-dom";
function Details() {
   const params = useParams();
   const apikey = "525fd47539a462f413272290cd11fd6d"
   const movieDetail = `https://api.themoviedb.org/3/movie/${params.movieId}?append_to_response=credits&language=en-US&api_key=${apikey}`;
   const [movie, setMovie] = React.useState(null)
   React.useEffect(function () {
      fetch(movieDetail)
         .then(response => response.json())
         .then(data => setMovie(data));
   }, [params.movieId]);
      
   return (
      <>
         {movie && <Banner movie={movie} />}
         {movie && <CastCrew name={"Cast"} cast={movie["credits"]["cast"]} />}
         {movie && <CastCrew name={"Crew"} crew={movie["credits"]["crew"]} />}
      </>
   )
}

export default Details;