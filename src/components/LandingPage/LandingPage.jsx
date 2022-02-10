import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <body>
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
        
          <h1>FUN SAGA</h1>

          <p>
            Welcome to my app, There's so much that happened in last two years and we all went
            through alot, personally we all go through lot of mental stress and try to find a 
            spot where we can just forget about it even for little bit and relax so keeping all that
            in mind I created this app called FUN SAGA!!
          </p>

          <p>
            Here we can come and go through bunch of different funny images, memes and videos and 
            try to escape the reality even fro minute or two of our life and bring that smile out.
            So come join me in this adventure and laugh a little and try to spread the happiness.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
    </body>
  );
}

export default LandingPage;
