import React from "react"; 
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = ({dogNames}) => {

 return (
   <div className="Nav"> 
    <nav className="NavItem">
      {dogNames.map(dogName => (
        <NavLink exact to='/dog/{dogName}'>{dogName}</NavLink>
      ))}
    </nav>     

   </div>
 )
}

export default Nav;