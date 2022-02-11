import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import MediaList from '../MediaList/MediaList';
import {Link } from "react-router-dom";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <center>
       <Link to="/media"><button className="btn">media</button></Link>
       </center>
       <br></br>
        
       <center>
       <Link to="/meme"><button className="btn">Meme</button></Link>
       </center>

       <br></br>

       <center>
       <Link to="/video"><button className="btn">Video</button></Link>
       </center>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <MediaList />

      {/* <AddMediaBtn className="AddMediaBtn" /> */}
      {/* <LogOutButton className="btn" /> */}
      

       
       
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
