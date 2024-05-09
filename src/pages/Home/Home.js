import React from "react"
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import Banner from "../../components/Banner/Banner"
import Pagination from "../../components/Pagination/Pagination";

const apikey = "525fd47539a462f413272290cd11fd6d";
// append_to_response=Videos
function Home(props) {
   const [movies, setMovies] = React.useState([])
   const [pageNumber, setPageNumber] = React.useState(1);

   const baseUrl = `https://api.themoviedb.org/3/trending/all/day?page=${pageNumber}&api_key=${apikey}`;
   
   function increment(){
      if (pageNumber < 500)
      setPageNumber((oldPageNumber)=> oldPageNumber + 1);
   }
   function decrement(){
      if (pageNumber > 1)
      setPageNumber((oldPageNumber) => oldPageNumber - 1);
   }
   let randomNumber = 0;
   React.useEffect(function () {
      fetch(baseUrl)
         .then(response => response.json())
         .then(data => {
            setMovies(data["results"]);
            randomNumber = Math.floor(Math.random * data["results"].length);
         });
   }, [pageNumber]);

   if (movies.length === 0) {
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
         <Pagination 
            pageNumber={pageNumber} 
            increment={increment} 
            decrement={decrement} />
         <TrendingMovies 
            movies={movies} 
            handelAddToWatchList={props.handelAddToWatchList} 
            watchList={props.watchList} />
      </>
   );
}

export default Home;
