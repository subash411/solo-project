import {useDispatch} from 'react-redux';
import './DeleteMediaItem.css';


const DeleteMediaItem = ({media}) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        console.log("delete mediaId", media.id);

        dispatch({
            type: 'DELETE_MEDIA',
            payload: media.id
        })
    }
    
    return (

        <div className="deleteArea">
            <button className="delete" onClick={() => onDelete(media.id)}>Delete</button>
        </div>
    )
}
export default DeleteMediaItem;