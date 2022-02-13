import { useHistory, useParams } from "react-router-dom";

function AddVideoBtn () {
    const history = useHistory();
    const params = useParams();
    console.log('addMemeBtn id', params.id);

    return (
        <>
        <button 
        onClick={() => history.push(`/videoForm/${params.id}`)}
        >
            Add Video
        </button>
        
        </>
    )
}

export default AddVideoBtn;