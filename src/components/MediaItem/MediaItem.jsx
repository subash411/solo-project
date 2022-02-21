import React, {useState} from 'react';
import LikeMediaItem from './LikeMediaItem/LikeMediaItem';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MediaItem.css';

const MediaItem = ({media}) => {
    console.log('media in mediaItem', media);
const dispatch = useDispatch();
const history = useHistory();

    const handleMedia = (media) => {
        console.log('in handleMedia', media);

        dispatch ({
            type: 'SET_SELECTED',
            payload: media
        });
        history.push('/mediaDetails')
       } 
    return (
        <>
        <div  key={media.id} className="displayArea">
            <h2>{media.title}</h2>
            <div className="toggleArea" >
                <img 
                onClick={() => handleMedia(media)} 
                className="pic" 
                src={media.url} 
                height={300}
                width={350}
                 /> 
                 
            </div>
        
            <LikeMediaItem
                media={media}
             />
        </div>
        </>
    )
}



export default MediaItem;
    
