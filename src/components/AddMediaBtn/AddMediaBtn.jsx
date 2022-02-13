import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function AddMediaBtn () {
    const history = useHistory();
    const params = useParams();
    console.log('addMediaBtn id', params.id);

    return (
        <>
    <Link to={`/mediaForm/${params.id}`}> 
        <button >
            Add Media
        </button>
        </Link>
        </>
    )
}

export default AddMediaBtn;