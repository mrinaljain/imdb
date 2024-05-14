import { React, useState, useContext } from "react";
import "./Search.css"
import MovieContext from "../../context/MovieContext";
function Search() {

   return (
      <center>
         <input
            onChange={handleSearchInput}
            type="search"
            value={searchKeyword} />
      </center>
   )
}

// TODO take input and connect it with rendering and filter results using .filter
// use  debounce here
//

export default Search;