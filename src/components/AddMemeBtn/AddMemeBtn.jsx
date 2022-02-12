import { useHistory, useParams } from "react-router-dom";

function AddMemeBtn () {
    const history = useHistory();
    const params = useParams();
    console.log('addMemeBtn id', params.id);

    return (
        <>
        <button 
        onClick={() => history.push(`/memeForm/${params.id}`)}
        >
            Add Meme
        </button>
        
        </>
    )
}

export default AddMemeBtn;