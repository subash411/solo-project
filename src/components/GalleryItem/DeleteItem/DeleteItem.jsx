const DeleteItem = ({picture, deleteGallery}) => {
    
    const onDelete = (picture) => {
        console.log(('in on Delete', picture.id));
        deleteGallery(picture.id);
    }
    return (
        <div className="deleteArea">
            <button className="delete" onClick={() => onDelete(picture)}>Delete</button>
        </div>
    )
}
export default DeleteItem;