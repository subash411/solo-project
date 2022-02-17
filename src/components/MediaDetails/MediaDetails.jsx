import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import './MediaDetails.css';

const MediaDetails = () => {

    // gain access to global variable
    const store = useReduxStore();
    // const media =  store.selectedReducer;
    console.log('in MediaDetails selected media:',store.selectedReducer);


    // append media info onto DOM
    return(
        <div>
            <h3 className="mediaTitle">
                {store.selectedReducer.title}
            </h3>
        <img 
            src = {store.selectedReducer.url}
            className="mediaPic"
         />
            <h6 className="mediaDesc">
                {store.selectedReducer.description}
            </h6>
                   
       
           
        </div>
    );
}

export default MediaDetails;