import React, {useState} from 'react';
import LikeMemeItem from './LikeMemeItem/LikeMemeItem';

const MemeItem = ({meme}) => {
    console.log('meme in memeItem', meme);
    const [turner, setTurner] = useState(true);
    return (
        
        <div key={meme.id} className="displayArea">
            <div className="toggleArea" onClick={() => setTurner(!turner)}>
             <img className="pic" src={meme.url} /> 
            </div>
            <LikeMemeItem
                meme={meme}
             />
        </div>
    )
}



export default MemeItem;