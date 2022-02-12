import MediaItem from '../MediaItem/MediaItem';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import axios from 'axios';
import AddMediaBtn from '../AddMediaBtn/AddMediaBtn'

const MediaList = () => {
    const mediaList = useSelector((store) => store.mediaReducer);
    console.log('media in mediaList', mediaList);
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
        <>
        <AddMediaBtn />
        <div className="mediaArea">
            {
              mediaList.map(media => (
                    <MediaItem 
                      media={media} 
                      deleteMedia={deleteMedia} 
                    />
                ))
            }
        </div>
        </>
    );
}

export default MediaList;