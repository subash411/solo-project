import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

function Details () {
    const history = useHistory();
    const dispatch = useDispatch ();

    const media = useSelector(store => store.media)
    console.log('details for:', media);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MEDIA',
            payload: media.id
        });
    }, []);

    const onGoBack = () => {
        history.push('/');
    };

    return (

        //getting media details for each media based on ID
        <>
       <div className="container">
                <h1>Media Details</h1>
                <h2>{media.title}</h2>
                
                <h3>Media Description</h3>
                <p className="description">{media.description}</p><br/>
                
            </div>
            <Button variant = "contained"  onClick={onGoBack}>
                HOME
            </Button>
       
        </>
    )
}

export default Details;
