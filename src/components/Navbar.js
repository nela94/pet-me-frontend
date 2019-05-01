import React from "react";
import { Link, withRouter } from "react-router-dom";
const Navbar = props => {
  let token = localStorage.getItem('token')
  return (

     token ?
       <ul>
         <Link to="/home">
           <li>Home</li>
         </Link>
         <Link to="/PetList">
           <li>Pet List</li>
         </Link>
         <li onClick={() => {localStorage.removeItem("token"); props.history.push("/");}}>
           Log Out
         </li>
       </ul>

        :
        <div>
          <h1>Pet Me❤️</h1>
          <h2>Where everyone can find a friend in need.</h2>
        </div>
      );
    };

export default withRouter(Navbar);
