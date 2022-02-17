import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

function AddMemeBtn () {
    const history = useHistory();
    const params = useParams();
    console.log('addMemeBtn id', params.id);

    return (
        <>
    <Link to={`/memeForm/${params.id}`}> 
        <button className ="btn" >
            Add Meme
        </button>
        </Link>
        </>
    )
}

export default AddMemeBtn;