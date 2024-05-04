import React from "react"
import "./CastCrew.css"
import Person from "../Person/Person.jsx"
function CastCrew(props) {
   let cards;
      if(props.cast){
         cards = props.cast.map(person => <Person key={person.cast_id} person={person} />);
      }else if(props.crew){
         cards = props.crew.map(person => <Person key={person.id} person={person} />);
      }
   
   return (
      <>
      <h3>{props.name}</h3>
      <div className="cardSection">
            {cards}
      </div>
      </>
   )
}

export default CastCrew;