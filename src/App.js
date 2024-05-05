import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} > </Route>
      <Route path="/details/:movieId" element={<Details />}> </Route>
    </Routes>
  );
}

export default App;
