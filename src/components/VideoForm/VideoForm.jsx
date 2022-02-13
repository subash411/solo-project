import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';

 
 // const history = useHistory();

function VideoForm() {
    //Set variables for inputs
    const params = useParams();
    console.log('User id in add  videoForm', params.id);
    const [newTitle, setNewTitle] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const[newDescription, setNewDescription] = useState('');
    
    const [newVideo, setNewVideo] = useState({
        title: '',
        url: '',
    })

    const dispatch = useDispatch();

    const history = useHistory();

    const handleChange = (evt, property) => {
        setNewVideo({...newVideo, [property]: evt.target.value})
        
    }

const handleSubmit = (event) => {
    event.preventDefault();

    //setup data to be added from inputs

    dispatch({
        type: 'SET_VIDEO',
        payload: newVideo
    });
    history.push(`/video/${params.id}`)
    // //sent data to server side
    // addMedia(newItem)

    // //clear inputs
    // setNewTitle('');
    // setNewUrl('');
    // setNewDescription('');
}
return (
    <div className="VideoForm">
        <h3 className="videoTitle">Add to Video</h3>
        <form onSubmit={handleSubmit}>

                <label>Title:</label>
                <input
                    type="text"
                    onChange = {(evt) => handleChange(evt, "title")}
                    value={newVideo.title}
                />

                <label>Url:</label>
                <input
                    type="text"
                    onChange = {(evt) => handleChange(evt, "url")}
                    value={newVideo.url}
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

export default VideoForm;