import React, {useState} from 'react';
import LikeItem from './LikeItem/LikeItem';

const MemeItem = ({picture, moreLikes, deleteMeme}) => {
    const [turner, setTurner] = useState(true);
    return (
        <div key={picture.id} className="displayArea">
            <div className="toggleArea" onClick={() => setTurner(!turner)}>
                {turner ? <img className="pic" src={picture.url} /> : <h4>{picture.description}</h4>}
            </div>
            <LikeItem picture={picture}
             moreLikes={moreLikes} 
             deleteMeme={deleteMedia}
             />
        </div>
    )
}



export default MemeItem;
    