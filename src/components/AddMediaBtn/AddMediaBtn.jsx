import { useHistory, useParams } from "react-router-dom";

function AddMediaBtn () {
    const history = useHistory();
    const params = useParams();
    console.log('addMediaBtn id', params.id);

    return (
        <>
        <button 
        onClick={() => history.push(`/mediaForm/${params.id}`)}
        >
            Add Media
        </button>
        
        </>
    )
}

export default AddMediaBtn;