import { useHistory } from "react-router-dom";

function AddMemeBtn () {
    const history = useHistory();

    return (
        <>
        <button 
        onClick={() => history.push("/memeForm")}
        >
            Add Meme
        </button>
        
        </>
    )
}

export default AddMemeBtn;