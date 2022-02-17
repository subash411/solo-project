import React, {useState} from 'react';
import LikeMemeItem from './LikeMemeItem/LikeMemeItem';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MemeItem.css';


const MemeItem = ({meme}) => {
    console.log('meme in memeItem', meme);
const dispatch = useDispatch();
const history = useHistory();

    const handleMeme = (meme) => {
        console.log('in handleMeme', meme);

        dispatch ({
            type: 'SET_SELECTED',
            payload: meme
        });
        history.push('/memeDetails')
    } 
    return (
        
        <div key={meme.id} className="displayArea">
            <h2 className="title">{meme.title}</h2>
            <div className="toggleArea" >
                <img 
                onClick={() => handleMeme(meme)} 
                className="pic" 
                src={meme.url} 
                height={300}
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