import { useHistory } from "react-router-dom";

function AddMediaBtn () {
    const history = useHistory();

    return (
        <>
        <button 
        onClick={() => history.push("/mediaForm")}
        >
            Add Media
        </button>
        
        </>
    )
}

export default AddMediaBtn;