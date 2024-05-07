import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
   return (
      <header className="header">
         <Link to="/"><h3> #IMDB</h3></Link>
         <nav className="headerNav"> 
            <Link to="/">Movies</Link>
            <Link to="/watchlist"> WatchList</Link>
         </nav>
      </header>
   )
}