import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { useHistory} from "react-router-dom";

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
   // const feedback = useSelector((store) => store.feedback)

    const [comments, setComments] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments,
        });
        setComments("");
        history.push()

};

return(
    <div>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={handleChange}>
        <input 
        type ="text"
        value ={comments}
        onChange={(event) => setComments(event.target.value)}
        placeholder ="Comments"
        />

        <button className="NextBtn" type="submit">Next</button>
        </form>
    </div>
);
}

export default Comments;