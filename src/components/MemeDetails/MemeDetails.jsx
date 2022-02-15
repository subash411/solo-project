import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';


const MemeDetails = () => {

    // gain access to global variable
    const store = useReduxStore();
    console.log('in MemeDetails selected meme:',store.selectedReducer);


    // append meme info onto DOM
    return(
        <div>
            <h3 className="memeTitle">
                {store.selectedReducer.title}
            </h3>
        <img 
            src = {store.selectedReducer.url}
            className="memePic"
         />
            <h6 className="memeDesc">
                {store.selectedReducer.description}
            </h6>
                   
       
           
        </div>
    );
}

export default MemeDetails;