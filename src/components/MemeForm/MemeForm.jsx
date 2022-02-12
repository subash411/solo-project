import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';

 
 // const history = useHistory();

function MemeForm() {
    //Set variables for inputs
    const params = useParams();
    console.log('User id in add media form', params.id);
    const [newTitle, setNewTitle] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const[newDescription, setNewDescription] = useState('');
    
    const [newMeme, setNewMeme] = useState({
        title: '',
        url: '',
        
    })

    const dispatch = useDispatch();

    const history = useHistory();

    const handleChange = (evt, property) => {
        setNewMeme({...newMeme, [property]: evt.target.value})
        
    }

const handleSubmit = (event) => {
    event.preventDefault();

    //setup data to be added from inputs

    dispatch({
        type: 'SET_MEME',
        payload: newMeme
    });
    history.push(`/meme/${params.id}`)
    // //sent data to server side
    // addMedia(newItem)

    // //clear inputs
    // setNewTitle('');
    // setNewUrl('');
    // setNewDescription('');
}
return (
    <div className="memeForm">
        <h3 className="memeTitle">Add to Street Art Gallery</h3>
        <form onSubmit={handleSubmit}>

                <label>Title:</label>
                <input
                    type="text"
                    onChange = {(evt) => handleChange(evt, "title")}
                    value={newMeme.title}
                />

                <label>Url:</label>
                <input
                    type="text"
                    onChange = {(evt) => handleChange(evt, "url")}
                    value={newMeme.url}
                />
                

                {/* <label>Description:</label>
                <input
                    type="text"
                    onChange = {(evt) => handleChange(evt, "description")}
                    value={newMedia.description}
                /> */}

                <button className="addBtn">Add</button>
        </form>
    </div>
)
}

export default MemeForm;