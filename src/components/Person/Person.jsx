import React from "react"
import "./Person.css"
function Person(props) {
   const { name, profile_path, character, known_for_department } = props.person;
   const poster_image = `https://image.tmdb.org/t/p/original${profile_path}`
   return (
      <div className="person-card">
         <img src={poster_image} alt={name} className="profile-image" />
         <div className="details">
            <h2>{name}</h2>
            <p><strong>Character:</strong> {character}</p>
            <p><strong>Known for department:</strong> {known_for_department}</p>
         </div>
      </div>  
   )
}

export default Person;