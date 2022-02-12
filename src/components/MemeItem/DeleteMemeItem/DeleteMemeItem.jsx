import {useDispatch} from 'react-redux';


const DeleteMediaItem = ({meme}) => {
    const dispatch = useDispatch();

    const onDelete = () => {
        console.log("delete memeId", meme.id);

        dispatch({
            type: 'DELETE_MEME',
            payload: meme.id
        })
    }
    
    return (

        <div className="deleteArea">
            <button className="delete" onClick={() => onDelete(meme.id)}>Delete</button>
        </div>
    )
}
export default DeleteMediaItem;