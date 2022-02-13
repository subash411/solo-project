import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import DeleteVideoItem from '../DeleteVideoItem/DeleteVideoItem';

const LikeVideoItem = ({video}) => {
    const dispatch = useDispatch();

    // function to update likes
    const moreLikes = () => {
    // send data to server side
    axios.put(`/api/video/like/${video.id}`)
      .then((res) => {
        // tell client of success
        console.log('axios PUT success', res);
        dispatch({
          type: 'FETCH_VIDEO'
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
                <button className="likes" onClick={() => moreLikes(video.id)}>&#128077;</button>
                <DeleteVideoItem video={video} />
            </div>
            <div className="likeText">
                <p>{video.likes} people like this</p>
            </div>
        </>
    )
        
}
export default LikeVideoItem;