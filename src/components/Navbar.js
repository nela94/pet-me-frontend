import React from "react";
import { Link, withRouter } from "react-router-dom";
const Navbar = props => {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/PetList">
        <li>Pet List</li>
      </Link>
      <Link to="/">
        <li>Sign Up</li>
      </Link>
      <Link to="/login">
        <li>Log In</li>
      </Link>
      <li onClick={() => {localStorage.removeItem("token"); props.history.push("/");}}>
        Log Out
      </li>
    </ul>
  );
};

export default withRouter(Navbar);
