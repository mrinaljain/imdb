// 1 phase Create context createContext
// second phase provide it by adding global wrapper
// 3 rd phase access cpntext using useContext

import React from "react";
 const MovieContext = React.createContext({
    watchList: [] ,
    handelAddToWatchList : () => {},
    deleteFromWatchList : () => {}
 });

export default MovieContext;