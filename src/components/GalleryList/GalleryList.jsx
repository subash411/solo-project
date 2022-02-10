import useReduxStore from '../../hooks/useReduxStore';
import GalleryItem from '../GalleryItem/GalleryItem';

import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';

const GalleryList = () => {
    const store = useReduxStore();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch ({
            type: 'FETCH_GALLERY'
        })
    })
    // loop through gallery
    return (
        <div className="galleryArea">
            {
               store.gallery.map(picture => (
                    <GalleryItem key={picture.id}
                     picture={picture} moreLikes={picture.likes}
                    //  deleteGallery={deleteGallery} 
                     />
                ))
            }
        </div>
    );
}

export default GalleryList;