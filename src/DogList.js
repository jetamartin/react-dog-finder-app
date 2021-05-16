import React from "react";
import { Link } from "react-router-dom";
import './DogList.css';
const DogList = ({dogs}) => {

 return (
   <div className="DogList">
     <div>
      <h1>Dogs for Adoptions</h1>
      <h4>Click for Details</h4>
     </div>

     {dogs.map((dog)=> {
       return (
        <div className="DogList-elements" key={dog.src}> 
           {/* <p><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></p> */}
           <p><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></p>

           <img src={dog.src} alt={dog.name} />
        </div>
       )
     })}
   </div>
 )
}

export default DogList;