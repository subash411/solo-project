import {useDispatch} from 'react-redux';


const DeleteVideoItem = ({video}) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        console.log("delete videoId", video.id);

        dispatch({
            type: 'DELETE_VIDEO',
            payload: video.id
        })
    }
    
    return (

        <div className="deleteArea">
            <button className="delete" onClick={() => onDelete(video.id)}>Delete</button>
        </div>
    )
}
export default DeleteVideoItem;