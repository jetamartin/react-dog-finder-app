import React from "react"; 
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = ({dogNames}) => {
 return (
   <div className="Nav container-fluid">
    <nav className="Nav-element">
      <NavLink key="home" exact to="/dogs">Home</NavLink>
      {dogNames.map(dogName => (
        // <NavLink key={dogName} exact to={`/dogs/${dogName.toLowerCase()}`}>{dogName}</NavLink>
        <NavLink key={dogName} exact to={`/dogs/${dogName}`}>{dogName}</NavLink>

      ))}
    </nav>     

   </div>
 )
}

export default Nav;