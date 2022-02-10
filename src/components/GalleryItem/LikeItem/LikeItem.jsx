import React, {useState} from 'react';

import DeleteItem from '../DeleteItem/DeleteItem';

const LikeItem = ({picture, moreLikes, deleteGallery}) => {
    const onLike = (picture) => {
        console.log('in onLike', picture.id);
        moreLikes(picture.id);
    }
    return (
        <>
            <div className="buttonArea">
                <button className="like" onClick={() => onLike(picture)}>&#128077;</button>
                <DeleteItem picture={picture} deleteGallery={deleteGallery} />
            </div>
            <div className="likeText">
                <p>{picture.likes} people like this</p>
            </div>
        </>
    )
        
}
export default LikeItem;