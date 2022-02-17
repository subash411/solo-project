import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function AddVideoBtn () {
    const history = useHistory();
    const params = useParams()
    console.log('addVideoBtn id', params.id);
    

    return (
        <>
    <Link to={`/videoForm/${params.id}`}> 
        <button className ="btn" >
            Add Video
        </button>
        </Link>
        </>
    )
}

export default AddVideoBtn;