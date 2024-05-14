import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import HomeLayout from "./components/HomeLayout";
import Watchlist from "./pages/Watchlist/Watchlist";
import MovieContext from "./context/MovieContext";


function App() {
  /// Get data from local storage to  maintain state across refresh as well
  let locaWatchlist = JSON.parse(localStorage.getItem('watchList'));
  const [watchList, setWatchList] = React.useState(locaWatchlist ?? []);

  function handelAddToWatchList(movieObj) {
    let updatedWatchList = [movieObj, ...watchList];
    setWatchList(updatedWatchList);
    /// update to local storage for consistency
    localStorage.setItem('watchList',JSON.stringify(updatedWatchList));
  }
  function deleteFromWatchList(movieObj) {
    let updatedWatchList = watchList.filter((movie) => movie.id !== movieObj.id
    );    
    setWatchList(updatedWatchList);
    /// update to local storage for consistency
    localStorage.setItem('watchList',JSON.stringify(updatedWatchList));
  }

  return (
    <MovieContext.Provider value={{ watchList, setWatchList, handelAddToWatchList, deleteFromWatchList }}>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="details/:movieId" element={<Details />} />
        <Route path="watchlist" element={<Watchlist />} />
      </Route>
    </Routes>
    </MovieContext.Provider>
  );
}

export default App;
