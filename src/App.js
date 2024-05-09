import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import HomeLayout from "./components/HomeLayout";
import Watchlist from "./pages/Watchlist/Watchlist";


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
    let updatedWatchList = [movieObj, ...watchList];
    setWatchList(updatedWatchList);
    /// update to local storage for consistency
    localStorage.setItem('watchList',JSON.stringify(updatedWatchList));
  }

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home handelAddToWatchList={handelAddToWatchList} watchList={watchList} />} />
        <Route path="details/:movieId" element={<Details />} />
        <Route path="watchlist" element={<Watchlist handelAddToWatchList={handelAddToWatchList} watchList={watchList} />} />
      </Route>
    </Routes>
  );
}

export default App;
