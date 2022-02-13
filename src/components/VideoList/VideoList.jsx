import VideoItem from '../VideoItem/VideoItem';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import AddVideoBtn from '../AddVideoBtn/AddVideoBtn'

const VideoList = () => {
    // passing the User Id around
    const params = useParams();
    console.log('Id is', params.id);

    // Getting all the video from the store reducer
    const videoList = useSelector((store) => store.videoReducer);
    console.log('video in videoList', videoList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch ({
            type: 'FETCH_VIDEO'
        })
    }, [params.id])

    return (
      <>
        <div>
          <AddVideoBtn />
        </div>
        <div className="videoArea">
            {
              videoList.map((video, id) => (
                <div key={id}>
                    <VideoItem 
                      video={video} 
                    />
                    </div>
                ))
            }
          </div>
      </>
    );
}

export default VideoList;
