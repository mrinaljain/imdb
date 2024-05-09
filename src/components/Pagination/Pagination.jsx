import React from "react";
import "./Pagination.css"


function Pagination({ increment, pageNumber, decrement }) {
   return (
      <div className="pagination">
         <button onClick={decrement} disabled={pageNumber === 1 ? true : false} className="previous">Previous</button>
         <span>{pageNumber}</span>
         <button onClick={increment} disabled={pageNumber === 500 ? true : false} className="next">Next</button>
      </div>
   )
}

export default Pagination;