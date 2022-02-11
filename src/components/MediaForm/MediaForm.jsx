import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import './MediaForm.css';

 
 // const history = useHistory();

function MediaForm() {
    //Set variables for inputs

    const [newTitle, setNewTitle] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const[newDescription, setNewDescription] = useState('');
    const dispatch = useDispatch();

    


const handleSubmit = (event) => {
    event.preventDefault();

    //setup data to be added from inputs

    dispatch({
        type: 'SET_MEDIA',
        payload:{
        title: newTitle,
        url: newUrl,
        description: newDescription
        }
        

    });

    // //sent data to server side
    // addMedia(newItem)

    // //clear inputs
    // setNewTitle('');
    // setNewUrl('');
    // setNewDescription('');
}
return (
    <div className="mediaForm">
        <h3 className="mediaTitle">Add to Street Art Gallery</h3>
        <form onSubmit={handleSubmit}>

                <label>Title:</label>
                <input
                    type="text"
                    onChange = {(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                />

                <label>Url:</label>
                <input
                    type="text"
                    onChange={(event) => setNewUrl(event.target.value)}
                    value={newUrl}
                />
                

                <label>Description:</label>
                <input
                    type="text"
                    onChange={(event) => setNewDescription(event.target.value)}
                    value={newDescription}
                />

                <button className="addBtn">Add</button>
        </form>
    </div>
)
}

export default MediaForm;