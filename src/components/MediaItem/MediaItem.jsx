import React, {useState} from 'react';
import LikeItem from './LikeItem/LikeItem';

const GalleryItem = ({picture, moreLikes, deleteMedia}) => {
    const [turner, setTurner] = useState(true);
    return (
        <div key={picture.id} className="displayArea">
            <div className="toggleArea" onClick={() => setTurner(!turner)}>
                {turner ? <img className="pic" src={picture.url} /> : <h4>{picture.description}</h4>}
            </div>
            <LikeItem picture={picture}
             moreLikes={moreLikes} 
             deleteGallery={deleteMedia}
             />
        </div>
    )
}



export default GalleryItem;
    
