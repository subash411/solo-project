import {useDispatch} from 'react-redux';


const DeleteItem = ({picture}) => {
    const dispatch = useDispatch();

    const onDelete = (picture) => {
        console.log(('in on Delete', picture.id));
        dispatch({
            type: 'DELETE_MEME',
            payload: picture
        })
    }
    
    return (

        <div className="deleteArea">
            <button className="delete" onClick={() => onDelete(picture)}>Delete</button>
        </div>
    )
}
export default DeleteItem;