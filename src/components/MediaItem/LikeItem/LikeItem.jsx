import React, {useState} from 'react';

import DeleteItem from '../DeleteItem/DeleteItem';

const LikeItem = ({picture, moreLikes , deleteMedia}) => {
    const onLike = (picture) => {
        console.log('in onLike', picture.id);
        moreLikes(picture.id);

         // function to update likes
  const moreLikes = (id) => {
    console.log('in moreLikes', id);
    // send data to server side
    axios.put(`/media/like/${id}`)
      .then((res) => {
        // tell client of success
        console.log('axios PUT success', res);
      })
      .catch((err) => {
        // tell client of failure
        console.log('axios PUT ERROR', err);
      });
  }// end moreLikes function
    }
    return (
        <>
            <div className="buttonArea">
                <button className="likes" onClick={() => onLike(picture)}>&#128077;</button>
                <DeleteItem picture={picture} deleteMedia ={deleteMedia} />
            </div>
            <div className="likeText">
                <p>{picture.likes} people like this</p>
            </div>
        </>
    )
        
}
export default LikeItem;