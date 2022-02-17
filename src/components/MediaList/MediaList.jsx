import MediaItem from '../MediaItem/MediaItem';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import AddMediaBtn from '../AddMediaBtn/AddMediaBtn'

import './mediaList.css';

const MediaList = () => {
    // passing the User Id around
    const params = useParams();
    console.log('Id is', params.id);

    // Getting all the media from the store reducer
    const mediaList = useSelector((store) => store.mediaReducer);
    console.log('media in mediaList', mediaList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch ({
            type: 'FETCH_MEDIA'
        })
    }, [params.id])

    return (
      <>
        <div>
          <AddMediaBtn />
        </div>
        <div className="mediaArea">
            {
              mediaList.map(media => (
                    <MediaItem 
                      media={media} 
                    />
                ))
            }
          </div>
      </>
    );
}

export default MediaList;