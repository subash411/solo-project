import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import DeleteMemeItem from '../DeleteMemeItem/DeleteMemeItem';

const LikeMemeItem = ({meme}) => {
    const dispatch = useDispatch();

    // function to update likes
    const moreLikes = () => {
    // send data to server side
    axios.put(`/api/meme/like/${meme.id}`)
      .then((res) => {
        // tell client of success
        console.log('axios PUT success', res);
        dispatch({
          type: 'FETCH_MEME'
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
                <button className="likes" onClick={() => moreLikes(meme.id)}>&#128077;</button>
                <DeleteMemeItem meme={meme} />
            </div>
            <div className="likeText">
                <p>{meme.likes} people like this</p>
            </div>
        </>
    )
        
}
export default LikeMemeItem;
      