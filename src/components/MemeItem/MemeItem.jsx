import React, {useState} from 'react';
import LikeMemeItem from './LikeMemeItem/LikeMemeItem';
import './MemeItem.css'

const MemeItem = ({meme}) => {
    console.log('meme in memeItem', meme);
    const [turner, setTurner] = useState(true);
    return (
        
        <div key={meme.id} className="displayArea">
            <h2>{meme.title}</h2>
            <div className="toggleArea" onClick={() => setTurner(!turner)}>
             <img className="pic" src={meme.url}
             height={400}
             width={350}
              /> 
            </div>
            <LikeMemeItem
                meme={meme}
             />
        </div>
    )
}



export default MemeItem;