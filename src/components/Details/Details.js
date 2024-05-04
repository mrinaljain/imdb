import React from "react"
import "./Details.css"
import Banner from "../Banner/Banner.jsx";
import CastCrew from "../CastCrew/CastCrew.jsx";
function Details(props) {
   

   const apikey = "525fd47539a462f413272290cd11fd6d"
   const baseUrl = "https://api.themoviedb.org/3/movie/748783/credits?language=en-US&api_key=" + apikey;
   const [cast, setCast] = React.useState([])
   const [crew, setCrew] = React.useState([])
   React.useEffect(function () {
      fetch(baseUrl)
         .then(response => response.json())
         .then(data => { setCast(data["cast"]); setCrew(data["crew"]); });
   }, []);

   return (
      <>
         {/* {props.movies.length > 0 && <Banner movie={movies[2]} />} */}
         <CastCrew name={"Cast"} cast={cast} />
         <CastCrew name={"Crew"} crew={crew} />
      </>
   )
}

export default Details;