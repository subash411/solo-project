import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {Link } from "react-router-dom";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <center>
       <Link to={`/media/${user.id}`} ><button className="btn">media</button></Link>
       </center>
       <br></br>
        
       <center>
       <Link to={`/meme/${user.id}`} ><button className="btn">meme</button></Link>
       </center>

       <br></br>

       <center>
       <Link to={`/video/${user.id}`} ><button className="btn">video</button></Link>
       </center>
       
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
