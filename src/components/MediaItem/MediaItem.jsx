import React, {useState} from 'react';
import LikeMediaItem from './LikeMediaItem/LikeMediaItem';

const MediaItem = ({media}) => {
    console.log('media in mediaItem', media);
    const [turner, setTurner] = useState(true);
    return (
        
        <div key={media.id} className="displayArea">
            <h2>{media.title}</h2>
            <div className="toggleArea" onClick={() => setTurner(!turner)}>
                {turner ? <img className="pic" src={media.url} 
                height={300}
                width={350}
                 /> 
                 : <h4>{media.description}</h4>}
            </div>
            <LikeMediaItem
                media={media}
             />
        </div>
    )
}



export default MediaItem;
    
