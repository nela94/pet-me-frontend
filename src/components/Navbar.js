import React from "react";

const Navbar = props => {
  let token = localStorage.getItem('token')
  console.log("heelo", token)
  return (

     token ?
     <div>
       <h1>Pet Me<span role="img" aria-label="emoji">❤️</span></h1>
         <ul>
         <h5> __________________</h5>
           <li>
            <a href="/home">Home</a>
           </li>
           <li>
            <a href="/PetList">Pets You Have Chosen</a>
           </li>
           <li>
            <a href="/home">Keep Swiping Here</a>
           </li>
           <li onClick={() => localStorage.removeItem("token")}>
            <a href="/">Log Out</a>
           </li>
            <h5> __________________</h5>
         </ul>
       </div>
        :
        <div>
          <h1>Pet Me<span role="img" aria-label="emoji">❤️</span></h1>
          <h2>Where A Friend Is Only A Swipe Away.</h2>
        </div>
      );
    };

export default Navbar;
