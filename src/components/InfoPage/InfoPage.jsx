import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Hi thank you for stopping by on my app, I created this app for a fun purpose
        and try to forget about the problems that is going around us.
        </p>
      
       <p>
        Here you can come checkout cool images, funny memes and watch some videos, you can also like
        delete and upload your owm images, memes and videos.
      </p>
    </div>
  );
}

export default InfoPage;
