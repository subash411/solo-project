import { useSelector, useDispatch} from "react-redux";
import { useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

const MemeForm = ({addMeme}) => {
    //Set variables for inputs

    const [newTitle, setNewTitle] = useState('');
    const [newUrl, setNewUrl] = useState('');

    


const handleSubmit = (event) => {
    event.preventDefault();

    //setup data to be added from inputs

    let newItem = {
        title: newTitle,
        url: newUrl,

    };

    //sent data to server side
    addMeme(newItem)

    //clear inputs
    setNewTitle('');
    setNewUrl('');
}
return (
    <div className="memeForm">
        <h3 className="memeTitle">Add to Meme</h3>
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


                <button className="addBtn">Add</button>
        </form>
    </div>
)
}

export default MediaForm;