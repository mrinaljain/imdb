import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import HomeLayout from "./components/HomeLayout";
import Watchlist from "./pages/Watchlist/Watchlist";


function App() {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route index element={<Home />}/ >
        <Route path="details/:movieId" element={<Details />}/>
        <Route path="watchlist" element={<Watchlist />} />
      </Route>
    </Routes>
  );
}

export default App;
