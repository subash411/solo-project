import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import DeleteMediaItem from '../DeleteMediaItem/DeleteItem';

const LikeItem = ({media}) => {
    const dispatch = useDispatch();

    // function to update likes
    const moreLikes = () => {
    // send data to server side
    axios.put(`/api/media/like/${media.id}`)
      .then((res) => {
        // tell client of success
        console.log('axios PUT success', res);
        dispatch({
          type: 'FETCH_MEDIA'
        })
      })
      .catch((err) => {
        // tell client of failure
        console.log('axios PUT ERROR', err);
      });
    }// end moreLikes function

    return (
        <>
            <div className="buttonArea">
                <button className="likes" onClick={() => moreLikes(media.id)}>&#128077;</button>
                <DeleteMediaItem media={media} />
            </div>
            <div className="likeText">
                <p>{media.likes} people like this</p>
            </div>
        </>
    )
        
}
export default LikeItem;