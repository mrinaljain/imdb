import React from "react"
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import Banner from "../../components/Banner/Banner"



function Home() {
   const apikey = "525fd47539a462f413272290cd11fd6d"
   const baseUrl = "https://api.themoviedb.org/3/trending/all/day?append_to_response=Videos&language=en-US&api_key=" + apikey;
   const [movies, setMovies] = React.useState([])
   let randomNumber = 0;
   React.useEffect(function () {
      fetch(baseUrl)
         .then(response => response.json())
         .then(data => {
            setMovies(data["results"]);
            randomNumber = Math.floor(Math.random * data["results"].length);
         });
   }, []);

   if (movies.length == 0) {
      return (<>
         <center>

            Loading.....
         </center>
      </>

      )
   }
   return (
      <>
         {movies.length > 0 && <Banner movie={movies[randomNumber]} />}
         <TrendingMovies movies={movies} />
      </>
   );
}

export default Home;
