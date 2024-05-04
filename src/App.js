import React from "react"
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"


function App() {
  const apikey = "525fd47539a462f413272290cd11fd6d"
  const baseUrl = "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=" + apikey;
  const [movies, setMovies] = React.useState([])
  let randomNumber =0;
  React.useEffect(function () {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data["results"]);
        randomNumber = Math.floor(Math.random * data["results"].length);
      });
  }, []);
  
  return (
    <div >
      <Navbar />
      {movies.length > 0 && <Banner movie={movies[randomNumber]}/>}
      <TrendingMovies movies={movies}/>
    </div>
  );
}

export default App;
