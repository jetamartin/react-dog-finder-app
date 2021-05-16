import React from "react"; 
import {Link, Redirect, useParams} from 'react-router-dom';
import './DogDetails.css'
const DogDetails = (dogs) => {
  const { name } = useParams()
  const dog = dogs.dogs.find(dog => dog.name === name);

  if (!dog) return <Redirect to="/dogs"/>
 return (
   <div className="DogDetails" key="dog.name">
     <img src={dog.src} alt={dog.name} />
     <p><span>Name</span>: {dog.name}</p>
     <p><span>Age:</span> {dog.age}</p>
     <p><span>Facts:</span></p>
     <ul>
     {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
     </ul>
     <Link to="/dogs">Back to Home</Link>
   </div>
 )
}

export default DogDetails; 
