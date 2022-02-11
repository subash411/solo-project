import useReduxStore from '../../hooks/useReduxStore';
import MediaItem from '../MediaItem/MediaItem';

import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import axios from 'axios';

const MediaList = () => {
    const store = useReduxStore();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch ({
            type: 'FETCH_MEDIA'
        })
    }, [])
    // loop through gallery
    const deleteMedia = (id) => {
        console.log('in deleteMedia:', id);
        // send data to server side
        axios.delete(`/media/${id}`)
          .then((res) => {
            // tell client of success
            console.log('axios DELETE success!');
          })
          .catch((err) => {
            // tell client of failure
            console.log('axios DELETE ERROR!', err);
          });
      }// end deleteGallery function
    return (
        <div className="mediaArea">
            {
               store.media.map(picture => (
                    <MediaItem key={picture.id}
                     picture={picture} moreLikes={picture.likes}
                     deleteMedia={deleteMedia} 
                     />
                ))
            }
        </div>
    );
}

export default MediaList;